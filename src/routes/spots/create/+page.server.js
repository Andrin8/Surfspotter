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
    const name = formData.get("name");
    const location = formData.get("location");
    const waveType = formData.get("waveType");
    const difficulty = formData.get("difficulty");

    // 2) Validierung (einfaches Beispiel)
    if (!name || !location || !waveType || !difficulty) {
      // `fail()` ermöglicht es, mit Status 400 zurückzukehren + Daten an die Page zu geben
      return fail(400, { error: "Please fill all fields.", values: { name, location, waveType, difficulty } });
    }

    // 3) Spot-Objekt erstellen
    const newSpot = {
      name,
      location,
      waveType,
      difficulty,
      // Falls du ein Standardbild setzen willst, kannst du es hier definieren:
      // image: "/images/placeholder.jpg"
    };

    // 4) In DB einfügen
    try {
      await db.createSpot(newSpot);
      // Erfolg – wir geben `success: true` an die Page
      return { success: true };
    } catch (err) {
      console.error("Fehler beim Erstellen eines Spots:", err);
      return fail(500, { error: "Database error." });
    }
  }
};
