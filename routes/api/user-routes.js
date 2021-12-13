const router = require("express").Router();
//const validator = require("validator");
const validator = require("node-input-validator");
const { getAllUsers, getUserById, createUser, updateUser, deleteUser, addFriend, deleteFriend } = require("../../controllers/user-controller");

router
  .route("/")
  .get(getAllUsers)
  .post(createUser);

router 
  .route("/:id")
  .get(getUserById)
  .put(updateUser)
  .delete(deleteUser);


router 
    .route("/:userId/friends/:friendsId")
    .post(addFriend)
    .delete(deleteFriend);
  
  module.exports = router;