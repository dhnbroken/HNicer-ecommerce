import CartModel from '../models/cartModel.js';

// save user's cart
export const saveCart = async (req, res) => {
  const newPlace = new CartModel(req.body);
  const { productName } = req.body;

  try {
    const oldCart = await CartModel.findOne({ productName });
    if (oldCart) return res.status(400).json({ message: 'This product has been already saved' });

    // if not
    await newPlace.save();
    res.status(200).json(newPlace);
  } catch (error) {
    res.status(500).json(error);
  }
};

// get cart
export const getCart = async (req, res) => {
  const id = req.params.id;

  try {
    let carts = await CartModel.find();
    carts = carts.filter((cart) => {
      return cart.userId === id;
    });
    res.status(200).json(carts);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Delete Cart
export const deleteCart = async (req, res) => {
  const id = req.params.id;

  try {
    const carts = await CartModel.findById(id);
    await carts.deleteOne();
    res.status(200).json('Cart deleted.');
  } catch (err) {
    res.status(500).json(err);
  }
};

// update Cart
export const updateCart = async (req, res) => {
  const cartId = req.params.id;
  const { userId } = req.body;

  try {
    const cart = await CartModel.findById(cartId);
    if (cart.userId === userId) {
      await cart.updateOne({ $set: req.body });
      res.status(200).json('Cart updated!');
    } else {
      res.status(403).json('Authentication failed');
    }
  } catch (error) {}
};
