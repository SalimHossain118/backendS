import mongoose from "mongoose";
const patientSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    diagonisedWith: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },

    age: {
      type: Number,
      required: true,
    },
    dateOfBirth: { type: Date, required: true },
    gender: { type: String, enum: ["Male", "Female", "Other"], required: true },
    admittedIn: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Hospital",
    },
  },
  { timeseries: true }
);

export const Patient = mongoose.model(" Patient", patientSchema);
