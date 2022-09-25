const Room = require("../models/room");
const mongoose = require("mongoose");
const rooms = require("../data/4.1 rooms");

mongoose.connect("mongodb://localhost:27017/ecommerce");

const seedRooms = async () => {
  try {
    await Room.deleteMany();
    console.log("Rooms are deleted");

    await Room.insertMany(rooms);
    console.log("All rooms are added");
  } catch (err) {
    console.log(err.message);
    process.exit();
  }
};

seedRooms();
