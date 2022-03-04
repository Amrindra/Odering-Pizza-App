import Product from "../../../models/Product";
import dbConnect from "../../../util/mongoose";

//we use async function because it's the CRUD operation and we don't know how long will it take for processing
export default async function handler(req, res) {
  //extrac {method} and this method may conatain Post, Get, PUt, Delete from request
  const { method, cookies } = req;

  const token = cookies.token;

  dbConnect();

  if (method === "GET") {
    try {
      //find all the products in the Product model from database and store in the products variable
      const products = await Product.find();
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  if (method === "POST") {
    // if (!token || token !== process.env.token) {
    //   return res.status(401).json("Not authorized!");
    // }
    try {
      // Product.create(req.body) is creating new product in the mongodb
      const product = await Product.create(req.body);
      res.status(201).json(product);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
