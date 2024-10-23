import mongoose from "mongoose";

const hospitalSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    address: {
      street: { type: String, required: true },
      city: { type: String, required: true },
      state: { type: String, required: true },
      zipCode: { type: String, required: true },
      country: { type: String, required: true },
    },
    contactInfo: {
      phone: { type: String, required: true },
      email: { type: String, required: true, lowercase: true },
      website: { type: String },
    },
    type: {
      type: String,
      enum: ["General", "Specialized", "Teaching", "Clinic"],
      required: true,
    },
    capacity: {
      beds: { type: Number, required: true, min: 0 },
      icu: { type: Number, required: true, min: 0 },
    },
    departments: [
      {
        name: { type: String, required: true },
        head: { type: String },
      },
    ],
    facilities: [String],
    accreditations: [String],
    emergencyServices: { type: Boolean, default: false },
    operatingHours: {
      open: { type: String },
      close: { type: String },
    },
    insuranceAccepted: [String],
    staffCount: {
      doctors: { type: Number, min: 0 },
      nurses: { type: Number, min: 0 },
      other: { type: Number, min: 0 },
    },
    rating: {
      score: { type: Number, min: 0, max: 5 },
      count: { type: Number, default: 0 },
    },
    established: { type: Date },
    lastInspection: { type: Date },
  },
  { timestamps: true }
);

export const Hospital = mongoose.model("Hospital", hospitalSchema);
