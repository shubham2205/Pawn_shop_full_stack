import "../models/connection.js";
import UserSchemaModel from "../models/user.model.js";
import sendMail from "./email.controller.js";
import url from "url";
import jwt from "jsonwebtoken";
import rs from "randomstring";

export var test = async (req, res, next) => {
  res.status(201).json({ status: true });
};

export var save = async (req, res, next) => {
  var date = new Date().toLocaleString();
  var userDetails = req.body;
  var userList = await UserSchemaModel.find();
  var l = userList.length;
  var _id = l == 0 ? 1 : userList[l - 1]._id + 1;
  userDetails = {
    ...userDetails,
    _id: _id,
    status: 0,
    role: "user",
    info: date,
  };
  console.log(userDetails);
  try {
    var user = await UserSchemaModel.create(userDetails);
    sendMail(user.email, user.password);
    res.status(201).json({ status: true });
  } catch (err) {
    //console.log(err);
    res.status(500).json({ status: false });
  }
};

export var fetch = async (req, res, next) => {
  var condition_object = url.parse(req.url, true).query;
  var userList = await UserSchemaModel.find(condition_object);
  var l = userList.length;
  if (l != 0) return res.status(201).json(userList);
  else return res.status(500).json({ result: "Server Error" });
};

export var deleteUser = async (request, response, next) => {
  var condition_object = request.body;
  var user = await UserSchemaModel.find(condition_object);
  if (user.length != 0) {
    let result = await UserSchemaModel.deleteMany(condition_object);
    if (result) return response.status(201).json({ msg: "success" });
    else return response.status(500).json({ error: "Server Error" });
  } else return response.status(404).json({ error: "Resource not found" });
};

export var updateUser = async (request, response, next) => {


  // console.log(request.body);
  let userDetails = await UserSchemaModel.findOne(request.body.condition_obj);

  if (userDetails) {
    let user = await UserSchemaModel.findOneAndUpdate(
      request.body.condition_obj,
      { $set: request.body.content_obj }
    );
    if (user) return response.status(201).json({ msg: "success" });
    else return response.status(500).json({ error: "Server Error" });
  } else
    return response
      .status(404)
      .json({ error: "Requested resource not available" });
};

export var login = async (req, res, next) => {
  var userDetails = req.body;
  userDetails = { ...userDetails, status: 1 };

  var userList = await UserSchemaModel.find(userDetails);

  var l = userList.length;

  if (l != 0) {
    let payload = { subject: userList[0].email };
    let key = rs.generate();
    let token = jwt.sign(payload, key);
    return res.status(201).json({ token: token, userDetails: userList[0] });
  } else return res.status(500).json({ token: "Invalid username or password" });
};
