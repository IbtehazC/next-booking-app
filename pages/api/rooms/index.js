// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import nc from "next-connect";
import dbConnect from "../../../config/dbConnect";
import { allRooms, newRoom } from "../../../controllers/roomController";
import onError from "../../../middlewares/errors";

dbConnect();

const handler = nc({ onError });

handler.get(allRooms);
handler.post(newRoom);

export default handler;
