import db from '$lib/db.js';
// load-Funktion, die beim Laden der Seite ausgeführt wird
export async function load() {
    return {
        // Ruft die Liste der Projekte aus der Datenbank ab und gibt sie an die Seite zurück
        spots: await db.getSpots()
    }
}