import mongoose from 'mongoose';

const OrderSchema = new mongoose.Schema(
  {
    customer: {
      type: String,
      required: true,
      maxlength: 60,
    },

    address: {
      type: String,
      required: true,
      maxlength: 200,
    },

    total: {
      type: Number,
      required: true,
    },

    status: {
      type: Number,
      default: 0,
    },

    method: {
      type: Number,
      required: true,
    },
  },

  { timestamps: true }
);

//mongoose.models.Order meaning that if the Order model doesn't exit yet then create one if it does don't create model
export default mongoose.models.Order || mongoose.model('Order', OrderSchema);
