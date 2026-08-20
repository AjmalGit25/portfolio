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
    },
    browser: {
      type: String,
    },
    device: {
      type: String,
    },
    deviceType: {
      type: String,
    },
    os: {
      type: String,
    },
    osVersion: {
      type: String,
    },
    ipAddress: {
      type: String,
    },
    location: {
      country: {
        type: String,
      },
      region: {
        type: String,
      },
      city: {
        type: String,
      }
    },
  }
);

const Visitor = mongoose.model("Visitor", visitorSchema);

export default Visitor;