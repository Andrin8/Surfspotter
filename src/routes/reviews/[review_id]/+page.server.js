
import db from "$lib/db.js";
import { redirect } from "@sveltejs/kit";

export async function load({ params }) {
  return {
    review: await db.getReview(params.review_id),
  };
}

export const actions = {

  delete: async ({ request }) => {
    const data = await request.formData();
    const id = data.get("id");

    await db.deleteReview(id);
    throw redirect(303, "/reviews");
  },


  update: async ({ request }) => {
    const data = await request.formData();
    const id = data.get("id");

    const user = data.get("user");
    const rating = data.get("rating");
    const comment = data.get("comment");

    let updatedReview = {
      _id: id,
      user,
      rating,
      comment
    };

    await db.updateReview(updatedReview);
    throw redirect(303, "/reviews");
  }
};
