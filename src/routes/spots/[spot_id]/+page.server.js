
import db from "$lib/db.js";
import { redirect } from "@sveltejs/kit";

export async function load({ params }) {
  return {
    spot: await db.getSpot(params.spot_id),
  };
}

export const actions = {
  delete: async ({ request }) => {
    const data = await request.formData();
    const id = data.get("id");
    await db.deleteSpot(id);
    throw redirect(303, "/spots");
  },


  update: async ({ request }) => {
    const data = await request.formData();
    const id = data.get("id");


    const name = data.get("name");
    const image = data.get("image");
    const location = data.get("location");
    const waveType = data.get("waveType");
    const difficulty = data.get("difficulty");


    let updatedSpot = {
      _id: id,
      name,
      image,
      location,
      waveType,
      difficulty
    };


    await db.updateSpot(updatedSpot);


    throw redirect(303, "/spots");
  }
};
