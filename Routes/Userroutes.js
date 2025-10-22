const express = require("express")
const router = express.Router();
const usermanagement = require("../Controller/Usercontroller");


router.post("/adduser", usermanagement.adduser);
router.get("/getuser", usermanagement.getuser);
router.put("/updatedata/:id", usermanagement.updateuser);
router.delete("/deleteuser/:id", usermanagement.deleteuser);
router.get("/get/:id", usermanagement.getbyid)

module.exports = router;
