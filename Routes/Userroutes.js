const express = require("express")
const router = express.Router();
const usermanagement = require("../Controller/Usercontroller");
const Authmanagement = require("../Controller/Authcontroller");

router.post("/adduser", usermanagement.adduser);
router.get("/getuser", usermanagement.getuser);
router.put("/updatedata/:id", usermanagement.updateuser);
router.delete("/deleteuser/:id", usermanagement.deleteuser);
router.get("/get/:id", usermanagement.getbyid)


router.post("/register", Authmanagement.register);
router.post("/login", Authmanagement.login);
module.exports = router;
