import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    cpf: {
      type: String,
      required: true
    },
    sex: {
      type: String,
      required: true,
      enum: ["male", "female"]
    },
    birthdate: {
      type: Date,
      required: true
    },
    type: {
      type: String,
      enum: ["lessor", "lessee"]
    },
    email: {
      type: String,
      required: true,
      unique: true
    }
  },
  { collection: "user", timestamps: true }
);

export default mongoose.model("user", userSchema);
