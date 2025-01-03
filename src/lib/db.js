import { MongoClient, ObjectId } from "mongodb";
import { DB_URI } from "$env/static/private";

const client = new MongoClient(DB_URI);
await client.connect();
const db = client.db("Project");

//////////////////////////////////////////
// Spots
//////////////////////////////////////////

// Get all spots
async function getSpots() {
  let spots = [];
  try {
    const collection = db.collection("spots");
    const query = {};
    spots = await collection.find(query).toArray();
    spots.forEach((spot) => {
      spot._id = spot._id.toString(); // convert ObjectId to String
    });
  } catch (error) {
    console.log(error);
  }
  return spots;
}

// Get spot by id
async function getSpot(id) {
  let spot = null;
  try {
    const collection = db.collection("spots");
    const query = { _id: new ObjectId(id) };
    spot = await collection.findOne(query);
    if (!spot) {
      console.log("No spot with id " + id);
    } else {
      spot._id = spot._id.toString();
    }
  } catch (error) {
    console.log(error.message);
  }
  return spot;
}

// Create spot
async function createSpot(spot) {
  spot.image = "/images/placeholder.jpg";
  try {
    const collection = db.collection("spots");
    const result = await collection.insertOne(spot);
    return result.insertedId.toString();
  } catch (error) {
    console.log(error.message);
  }
  return null;
}

// Update spot
async function updateSpot(spot) {
  try {
    let id = spot._id;
    delete spot._id;
    const collection = db.collection("spots");
    const query = { _id: new ObjectId(id) };
    const result = await collection.updateOne(query, { $set: spot });
    if (result.matchedCount === 0) {
      console.log("No spot with id " + id);
    } else {
      console.log("Spot with id " + id + " has been updated.");
      return id;
    }
  } catch (error) {
    console.log(error.message);
  }
  return null;
}

// Delete spot by id
async function deleteSpot(id) {
  try {
    const collection = db.collection("spots");
    const query = { _id: new ObjectId(id) };
    const result = await collection.deleteOne(query);
    if (result.deletedCount === 0) {
      console.log("No spot with id " + id);
    } else {
      console.log("Spot with id " + id + " has been successfully deleted.");
      return id;
    }
  } catch (error) {
    console.log(error.message);
  }
  return null;
}

// Export all functions
export default {
  getSpots,
  getSpot,
  createSpot,
  updateSpot,
  deleteSpot,
};
