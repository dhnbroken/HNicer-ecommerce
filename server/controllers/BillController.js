import BillModel from '../models/billModel.js';

// save user's cart
export const saveBill = async (req, res) => {
  const newBill = new BillModel(req.body);

  try {
    // if not
    await newBill.save();
    res.status(200).json(newBill);
  } catch (error) {
    res.status(500).json(error);
  }
};

// get all bill
export const getAllBill = async (req, res) => {
  try {
    let users = await BillModel.find();
    users = users.map((user) => {
      return user;
    });
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json(error);
  }
};

// get cart
export const getBill = async (req, res) => {
  const id = req.params.id;

  try {
    const bills = await BillModel.findById(id);
    res.status(200).json(bills);
  } catch (error) {
    res.status(500).json(error);
  }
};

// update Cart
export const updateBill = async (req, res) => {
  const cartId = req.params.id;

  try {
    const cart = await BillModel.findById(cartId);

    await cart.updateOne({ $set: req.body });
    res.status(200).json('Bill updated!');
  } catch (error) {}
};

// delete Bill
export const deleteBill = async (req, res) => {
  const id = req.params.id;
  try {
    await BillModel.findByIdAndDelete(id);
    res.status(200).json('Shoes Deleted Successfully!');
  } catch (error) {
    res.status(500).json(error);
  }
};
