// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import nc from "next-connect";
import dbConnect from "../../../config/dbConnect";
import { allRooms, newRoom } from "../../../controllers/roomController";

dbConnect();

const handler = nc();

handler.get(allRooms);
handler.post(newRoom);

export default handler;
