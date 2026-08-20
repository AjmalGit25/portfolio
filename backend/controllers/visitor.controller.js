import Visitor from "../models/visitor.model.js";
import { sendNewVisitorEmail } from "../services/email.service.js";
import { UAParser } from "ua-parser-js";

export const setVisitor = async (req, res) => {
  // Generate the date
  const now = new Date();

  // User Agent
  const userAgent = req.headers["user-agent"];
  const parser = new UAParser(userAgent);
  const result = parser.getResult();

  // Visitor Data
  const { visitorId } = req.body;
  const browser = result.browser.name;

  const device = result.device.model;
  const deviceType = result.device.type;

  const os = result.os.name;
  const osVersion = result.os.version;

  const ipAddress = req.ip;
  let location = {};

  try {
    const response = await fetch(`https://ipinfo.io/${ipAddress}/json?token=${process.env.IPINFO_TOKEN}`);
    if (!response.ok) {
      throw new Error(`Location API failed: ${response.status}`);
    }
    const locationData = await response.json();

    console.log("Location API status:", response.status);
    console.log("Location API response:", locationData);

    location = {
      country: locationData.country,
      region: locationData.region,
      city: locationData.city,
    };
  } catch (error) {
    console.error("Failed to get visitor location:", error);
  }

  // Format date for Email
  const formattedDate = now.toLocaleString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  // Check if the visitor already exists
  const visitor = await Visitor.findOne({ visitorId });

  if (!visitor) {
    const visitorData = {
      visitorId,
      firstVisit: now,
      lastVisit: now,
      visitCount: 1,
      ipAddress,
      location,
      ...(browser && { browser }),
      ...(os && { os }),
      ...(osVersion && { osVersion }),
      ...(device && { device }),
      ...(deviceType && { deviceType }),
      ...(network && { network }),
      ...(postal && { postal }),
      ...(timezone && { timezone })
    }

    await Visitor.create(visitorData);
    await sendNewVisitorEmail(formattedDate, location, device, deviceType, os, browser, network, postal, timezone);

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
