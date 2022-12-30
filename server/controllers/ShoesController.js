// import PostModel from "../models/postModel.js";
import ShoesModel from '../models/shoesModel.js';

// Add new shoes

export const createShoes = async (req, res) => {
  const newShoes = new ShoesModel(req.body);
  const { name } = req.body;

  try {
    const oldShoes = await ShoesModel.findOne({ name });
    if (oldShoes) return res.status(400).json({ message: 'This shoes already existed' });

    await newShoes.save();
    res.status(200).json(newShoes);
  } catch (error) {
    res.status(500).json(error);
  }
};

// get a shoes

export const getShoes = async (req, res) => {
  const id = req.params.id;

  try {
    const shoes = await ShoesModel.findById(id);
    if (shoes) {
      res.status(200).json(shoes);
    } else {
      res.status(404).json('No such Shoes');
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

// get All shoes
export const getAllShoes = async (req, res) => {
  try {
    let shoes = await ShoesModel.find();
    shoes = shoes.filter((shoes) => {
      return shoes;
    });
    res.status(200).json(shoes);
  } catch (error) {
    res.status(500).json(error);
  }
};

// delete a shoes
export const deleteShoes = async (req, res) => {
  const id = req.params.id;
  try {
    await ShoesModel.findByIdAndDelete(id);
    res.status(200).json('Shoes Deleted Successfully!');
  } catch (error) {
    res.status(500).json(error);
  }
};
