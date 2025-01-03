// src/routes/spots/[spot_id]/+server.js
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

    await db.deleteReview(id); // Aufruf der Datenbankfunktion
    throw redirect(303, "/reviews"); // Erfolgreiche Weiterleitung
  },
};
