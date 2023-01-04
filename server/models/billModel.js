import mongoose from 'mongoose';

const BillSchema = new mongoose.Schema(
  {
    userId: { type: String },
    firstname: { type: String },
    lastname: { type: String },
    addressLine1: { type: String },
    addressLine2: { type: String },
    city: { type: String },
    email: { type: String },
    phoneNumber: { type: String },
    cart: { type: Array },
    totalPrice: { type: Number }
  },
  {
    timestamps: true
  }
);

const BillModel = mongoose.model('Bill', BillSchema);
export default BillModel;
