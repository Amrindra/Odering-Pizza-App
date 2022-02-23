import Order from "../../../models/Order";
import dbConnect from "../../../util/mongoose";

//we use async function because it's the CRUD operation and we don't know how long will it take for processing
export default async function handler(req, res) {
  //extrac {method} and this method may conatain Post, Get, PUt, Delete from request
  const {
    method,
    query: { id }
  } = req;

  await dbConnect();

  if (method === "GET") {
    try {
      const order = await Order.findById(id);
      res.status(200).json(order);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  if (method === "PUT") {
    try {
      const order = await Order.findByIdAndUpdate(id, req.body, {
        new: true
      });
      res.status(201).json(order);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  if (method === "DELETE") {
  }
}
