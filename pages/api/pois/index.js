import dbConnect from "../../../db/connect.js";
import Poi from "../../../db/models/Poi.js";
import Geometry from "@/db/models/Geometry.js";
import Adress from "@/db/models/Adress.js";
import Location from "@/db/models/Location.js";
import Property from "@/db/models/Property.js";
import Activity from "@/db/models/Activity.js";
import { getToken } from "next-auth/jwt";
import { dummyPois } from "@/lib/pois.js";

export default async function handler(request, response) {
  const token = await getToken({ req: request });
  if (token) {
    await dbConnect();
    if (request.method === "GET") {
      const pois = await Poi.find({})
        .populate({
          path: "categories",
          populate: { path: "assets" },
        })
        .populate({
          path: "location",
          populate: [{ path: "geometry" }, { path: "adress" }],
        })
        .populate({
          path: "properties",
          populate: [
            { path: "devicesAccessible", populate: { path: "assets" } },
          ],
        })
        .populate({
          path: "activities",
          populate: [
            { path: "devices", populate: { path: "assets" } },
            { path: "sports", populate: { path: "assets" } },
          ],
        })
        .populate({
          path: "assets",
          populate: { path: "images" },
        })
        .populate("events");
      if (!pois) {
        return response.status(404).json({ message: "No POIs found" });
      }
      return response.status(200).json(pois);
    }
    if (request.method === "POST") {
      try {
        const newPoi = request.body;
        const createdGeometry = await Geometry.create(
          newPoi.location[0].geometry[0]
        ).catch((error) => {
          console.error("Geometry creation error:", error);
        });
        const createdAdress = await Adress.create(
          newPoi.location[0].adress[0]
        ).catch((error) => {
          console.error("Adress creation error:", error);
        });
        const newLocation = {
          uuid: newPoi.location[0].uuid,
          geometry: createdGeometry._id,
          adress: createdAdress._id,
          hint: newPoi.location[0].hint,
        };
        const createdLocation = await Location.create(newLocation).catch(
          (error) => {
            console.error("Location creation error:", error);
          }
        );
        const createdProperties = await Property.create(
          newPoi.properties[0]
        ).catch((error) => {
          console.error("Property creation error:", error);
        });
        const deviceIds = newPoi.activities[0].devices.map(
          (device) => device._id
        );
        const sportIds = newPoi.activities[0].sports.map((sport) => sport._id);
        const newActivity = {
          uuid: newPoi.activities[0].uuid,
          devices: deviceIds,
          sports: sportIds,
        };
        const createdActivities = await Activity.create(newActivity).catch(
          (error) => {
            console.error("Activity creation error:", error);
          }
        );
        const newPoiPost = {
          uuid: newPoi.uuid,
          categories: newPoi.categories[0]._id,
          location: createdLocation._id,
          properties: createdProperties._id,
          activities: createdActivities._id,
        };
        const createdPoi = await Poi.create(newPoiPost).catch((error) => {
          console.error("Poi creation error:", error);
        });
        return response
          .status(201)
          .json({ status: "POI created with _id " + createdPoi._id });
      } catch (error) {
        response.status(400).json({ error: error.message });
      }
    }
    return response.status(405).json({ status: "Method not allowed" });
  } else {
    if (request.method === "GET") {
      return response.status(200).json(dummyPois);
    }
    return response
      .status(401)
      .json({ message: "Unauthorized access. Please log in." });
  }
}
