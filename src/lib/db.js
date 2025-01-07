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
      spot._id = spot._id.toString();
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

//////////////////////////////////////////
// Review
//////////////////////////////////////////

// Get all reviews
async function getReviews() {
  let reviews = [];
  try {
    const collection = db.collection("reviews");
    const query = {};
    reviews = await collection.find(query).toArray();
    reviews.forEach((review) => {
      review._id = review._id.toString();
    });
  } catch (error) {
    console.log(error);
  }
  return reviews;
}

// Get review by id
async function getReview(id) {
  let review = null;
  try {
    const collection = db.collection("reviews");
    const query = { _id: new ObjectId(id) };
    review = await collection.findOne(query);
    if (!review) {
      console.log("No review with id " + id);
    } else {
      review._id = review._id.toString();
    }
  } catch (error) {
    console.log(error.message);
  }
  return review;
}

// Create review
async function createReview(review) {
  review.image = "/images/placeholder.jpg";
  try {
    const collection = db.collection("reviews");
    const result = await collection.insertOne(review);
    return result.insertedId.toString();
  } catch (error) {
    console.log(error.message);
  }
  return null;
}

// Update review
async function updateReview(review) {
  try {
    let id = review._id;
    delete review._id;
    const collection = db.collection("reviews");
    const query = { _id: new ObjectId(id) };
    const result = await collection.updateOne(query, { $set: review });
    if (result.matchedCount === 0) {
      console.log("No review with id " + id);
    } else {
      console.log("Review with id " + id + " has been updated.");
      return id;
    }
  } catch (error) {
    console.log(error.message);
  }
  return null;
}

// Delete review by id
async function deleteReview(id) {
  try {
    const collection = db.collection("reviews");
    const query = { _id: new ObjectId(id) };
    const result = await collection.deleteOne(query);
    if (result.deletedCount === 0) {
      console.log("No review with id " + id);
    } else {
      console.log("Review with id " + id + " has been successfully deleted.");
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
  getReviews,
  getReview,
  createReview,
  updateReview,
  deleteReview,

};
