import "../models/connection.js";
import ProductSchema from "../models/product.model.js";
import url from "url";
import rs from "randomstring";
import path from "path";
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

export var saveProduct = async (req, res) => {
  var content_obj = req.body;
  //console.log(content_obj);
  console.log(req.files.proicon);
  var proicon = req.files.proicon;
  var prouctList = await ProductSchema.find();
  var l = prouctList.length;
  console.log(l);
  var _id = l == 0 ? 1 : prouctList[l - 1]._id + 1;
  var proiconnm = Date.now() + "-" + rs.generate() + "-" + proicon.name;
  console.log(proiconnm);
  content_obj = {
    ...content_obj,
    _id: _id,
    proiconnm: proiconnm,
    info: Date(),
  };
  console.log(content_obj);
  try {
    await ProductSchema.create(content_obj);
    var uploadpath = path.join(
      __dirname,
      "../../UI/public/Uploads/product",
      proiconnm
    );
    proicon.mv(uploadpath);
    res.status(201).json({ Msg: "Product Successfully Inserted...!!!" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ Error: "Product Request Already Exsist...!!!" });
  }
};

export var fetchProduct = async (req, res) => {
  var content_param = url.parse(req.url, true).query;
  var productList = await ProductSchema.find(content_param);
  var l = productList.length;
  if (l != 0) {
    res.status(201).json({ data: productList });
  } else {
    res.status(404).json({ Error: "Product Request Not Found...!!!" });
  }
  console.log(productList);
};

export var updateProduct = async (req, res) => {
  var condition = JSON.parse(req.body.condition_obj);
  var content = JSON.parse(req.body.content_obj);
  console.log(condition);
  console.log(content);
  var productDetails = await ProductSchema.findOne(condition);
  if (productDetails) {
    var result = await ProductSchema.updateOne(condition, { $set: content });
    if (result) {
      res.status(201).json({ Msg: "Product Successfully Updated" });
    } else {
      res.status(500).json({ Error: "Server Error" });
    }
  } else {
    res.status(404).json({ Error: "Product Request Not Found...!!!" });
  }
  console.log(productDetails);
};

export var deleteProduct = async (req, res) => {
  var condition_obj = req.body;
  var userList = await ProductSchema.find(condition_obj);
  var l = userList.length;
  if (l != 0) {
    var result = await ProductSchema.deleteMany(condition_obj);
    if (result) {
      res.status(404).json({ Msg: "Product Successfully Deleted...!!!" });
    } else {
      res.status(500).json({ Error: "Server Error" });
    }
  } else {
    res.status(404).json({ Error: "Product Request Not Found...!!!" });
  }
};
