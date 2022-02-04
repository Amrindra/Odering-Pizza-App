import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      maxlength: 60,
    },

    desc: {
      type: String,
      required: true,
      maxlength: 200,
    },

    img: {
      type: String,
      required: true,
    },

    prices: {
      //type is an array of numbers
      type: [Number],
      required: true,
    },

    extraOptions: {
      type: [
        {
          text: { type: String, required: true },
          price: { type: Number, required: true },
        },
      ],
    },
  },
  { timestamps: true }
);

//mongoose.models.Order meaning that if the Order model doesn't exit yet then create one if it does don't create model
export default mongoose.models.Order || mongoose.model("Order", ProductSchema);
