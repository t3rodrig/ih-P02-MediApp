const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const patientSchema = new Schema(
  {
    name: { type: String, required: true },
    paternalLastName: { type: String, required: true },
    maternalLastName: { type: String },
    email: {
      type: String,
      match: /[\w\.-]+@[\w\.-]+\.[\w\.]+/,
      required: true
    },
    password: { type: String, required: true },
    profilePic: {
      type: String
    },
    age: Number,
    blood_type: String,
    height: Number,
    weight: Number,
    appointment: [{ type: Schema.Types.ObjectId, ref: "Appointment" }],
    role: {
      type: String,
      default: "patient"
    }
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

const Patient = mongoose.model("Patient", patientSchema);

module.exports = Patient;
