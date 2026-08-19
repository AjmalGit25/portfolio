import mongoose from "mongoose";

const visitorSchema = mongoose.Schema(
  {
    visitorId: {
      type: String,
      required: true,
      unique: true
    },
    firstVisit: {
      type: Date,
      default: Date.now
    },
    lastVisit: {
      type: Date,
      default: Date.now
    },
    visitCount: {
      type: Number,
      default: 1
    }
  }
);

const Visitor = mongoose.model("Visitor", visitorSchema);

export default Visitor;