import Visitor from "../models/visitor.model.js";

export const setVisitor = async (req, res) => {
  const { visitorId } = req.body;

  // Generate the date
  const now = new Date();

  // Check if the visitor already exists
  const visitor = await Visitor.findOne({ visitorId });

  if (!visitor) {
    const visitorData = {
      visitorId,
      firstVisit: now,
      lastVisit: now,
      visitCount: 1
    }

    await Visitor.create(visitorData);
    return res.status(200).json({ message: "Visitor data recorded successfully!" });
  }

  const updateVisitor = {
    lastVisit: now,
    visitCount: visitor.visitCount + 1
  };

  await Visitor.findOneAndUpdate({ visitorId }, updateVisitor);
  return res.status(200).json({ message: "Visitor data updated successfully!" });
}

export const getVisitor = async (req, res) => {
  const uniqueVisitors = await Visitor.countDocuments();

  return res.status(200).json({ message: "Unique visitors fetched!", uniqueVisitors });
}
