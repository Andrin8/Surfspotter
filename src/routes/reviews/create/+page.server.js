import db from "$lib/db.js";
import { fail } from "@sveltejs/kit";

/**
 * Wir nutzen hier SvelteKit-Actions.
 * `default` heißt: wenn man ein `POST` an `?/create` sendet (oder direkt an `/spots/create`),
 * wird dieser Code ausgeführt.
 */
export const actions = {
  default: async ({ request }) => {
    // 1) Formulardaten lesen
    const formData = await request.formData();
    const spotId = formData.get("spotId");
    const user = formData.get("user");
    const rating = formData.get("rating");
    const comment = formData.get("comment");
    const date = formData.get("date");

    // 2) Validierung (einfaches Beispiel)
    if (!spotId || !user || !rating || !comment || !date) {
      // `fail()` ermöglicht es, mit Status 400 zurückzukehren + Daten an die Page zu geben
      return fail(400, { error: "Please fill all fields.", values: { spotId, user, rating, comment, date } });
    }

    // 3) Spot-Objekt erstellen
    const newReview = {
      spotId,
      user,
      rating,
      comment,
      date,
      // Falls du ein Standardbild setzen willst, kannst du es hier definieren:
      // image: "/images/placeholder.jpg"
    };

    // 4) In DB einfügen
    try {
      await db.createReview(newReview);
      // Erfolg – wir geben `success: true` an die Page
      return { success: true };
    } catch (err) {
      console.error("Fehler beim Erstellen eines Reviews:", err);
      return fail(500, { error: "Database error." });
    }
  }
};
