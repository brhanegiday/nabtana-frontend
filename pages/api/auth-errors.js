import { NextApiRequest, NextApiResponse } from "next";
import { getError } from "./helpers/storeAuth";

export default function handler(req, res) {
  const id = req.query.id;
  const errorMessage = getError(id);
  res.status(200).send(errorMessage);
}
