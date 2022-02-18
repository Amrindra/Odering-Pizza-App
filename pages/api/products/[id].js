import Product from "../../../models/Product";
import dbConnect from "../../../util/mongoose";

//we use async function because it's the CRUD operation and we don't know how long will it take for processing
export default async function handler(req, res) {
  //extract {method} and this method may conatain Post, Get, PUt, Delete from request
  //extracting query:{id} that is coming from the [id].js in the product folder when when fetching data from the database
  const {
    method,
    query: { id }
  } = req;

  dbConnect();

  if (method === "GET") {
    try {
      //find product by id in the Product model from database and store in the product variable
      const product = await Product.findById(id);
      res.status(200).json(product);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  if (method === "PUT") {
    try {
      // Product.create(req.body) is creating new product in the mongodb
      const product = await Product.create(req.body);
      res.status(201).json(product);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  if (method === "DELETE") {
    try {
      // Product.create(req.body) is creating new product in the mongodb
      const product = await Product.create(req.body);
      res.status(201).json(product);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
