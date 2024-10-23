import mongoose from "mongoose";

const medicalRecordSchema = new mongoose.Schema({}, { timestamps: true });

export const Medical_Record = mongoose.model(
  "Medical_Record",
  medicalRecordSchema
);
