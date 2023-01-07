import mongoose from 'mongoose';

const UserSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    firstname: {
      type: String,
      required: true
    },
    lastname: {
      type: String,
      required: true
    },
    isAdmin: {
      type: Boolean,
      default: false
    },
    email: {
      type: String
    },
    avatarPath: String,
    phoneNumber: String,
    addressLine1: String,
    addressLine2: String,
    city: String,
    relationship: String,
    country: String
  },
  { timestamps: true }
);

const UserModel = mongoose.model('Users', UserSchema);
export default UserModel;
