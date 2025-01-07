import db from "$lib/db.js";
import { fail } from "@sveltejs/kit";


export const actions = {
  default: async ({ request }) => {

    const formData = await request.formData();
    const spotId = formData.get("spotId");
    const user = formData.get("user");
    const rating = formData.get("rating");
    const comment = formData.get("comment");
    const date = formData.get("date");


    if (!spotId || !user || !rating || !comment || !date) {

      return fail(400, { error: "Please fill all fields.", values: { spotId, user, rating, comment, date } });
    }


    const newReview = {
      spotId,
      user,
      rating,
      comment,
      date,

    };


    try {
      await db.createReview(newReview);

      return { success: true };
    } catch (err) {
      console.error("Fehler beim Erstellen eines Reviews:", err);
      return fail(500, { error: "Database error." });
    }
  }
};
