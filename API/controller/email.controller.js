import nodemailer from "nodemailer";

function sendMail(email, password,name) {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "shubhamdharpure1@gmail.com",
      pass: "yzurnhzqhkunjops ",
    },
  });

  var mailOptions = {
    from: "shubhamdharpure1@gmail.com",
    to: email,
    subject: "Verification Mail PawnShop",
    html: `<h1>Welcome ${name}!</h1>
    <h5>your accout details are :</h5> 
    <p>This is verification mail by pawnshop</p>
    <h5>Username: ${email}<br>Password: ${password}</h5>`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
}

export default sendMail;
