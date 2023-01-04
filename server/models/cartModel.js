import mongoose from 'mongoose';

const CartSchema = new mongoose.Schema(
  {
    userId: { type: String },
    productId: { type: String },
    productName: { type: String, required: true },
    productImage: { type: String, required: true },
    productTags: { type: String },
    productPrice: { type: Number },
    productSize: { type: Number, required: true },
    quantity: { type: Number, min: 1, max: 10 }
  },
  {
    timestamps: true
  }
);

const CartModel = mongoose.model('Cart', CartSchema);
export default CartModel;
