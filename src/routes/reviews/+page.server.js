import db from '$lib/db.js';

export async function load() {
    return {

        reviews: await db.getReviews()
    }
}