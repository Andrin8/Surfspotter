import db from '$lib/db.js';

export async function load() {
    return {

        spots: await db.getSpots()
    }
}