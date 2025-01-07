import db from "$lib/db.js";
import { fail } from "@sveltejs/kit";


export const actions = {
  default: async ({ request }) => {

    const formData = await request.formData();
    const name = formData.get("name");
    const location = formData.get("location");
    const waveType = formData.get("waveType");
    const difficulty = formData.get("difficulty");


    if (!name || !location || !waveType || !difficulty) {

      return fail(400, { error: "Please fill all fields.", values: { name, location, waveType, difficulty } });
    }


    const newSpot = {
      name,
      location,
      waveType,
      difficulty,

    };


    try {
      await db.createSpot(newSpot);

      return { success: true };
    } catch (err) {
      console.error("Fehler beim Erstellen eines Spots:", err);
      return fail(500, { error: "Database error." });
    }
  }
};
