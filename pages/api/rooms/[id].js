import nc from "next-connect";
import dbConnect from "../../../config/dbConnect";
import {
  deleteRoom,
  getSingleRoom,
  updateRoom,
} from "../../../controllers/roomController";
import onError from "../../../middlewares/errors";

dbConnect();

const handler = nc({ onError });

handler.get(getSingleRoom);
handler.put(updateRoom);
handler.delete(deleteRoom);

export default handler;
