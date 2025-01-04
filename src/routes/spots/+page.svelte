<script>
  import SpotCard from '$lib/components/SpotCard.svelte';
  import FavoritesList from '$lib/components/FavoritesList.svelte';

  export let data;
  let spots = data.spots;

  // Initialisieren der Favoriten-Liste
  let favorites = [];

  // Favoriten aus dem localStorage laden
  if (typeof window !== 'undefined') {
    const savedFavorites = localStorage.getItem('favorites');
    if (savedFavorites) {
      favorites = JSON.parse(savedFavorites);
    }
  }

  // Funktion zum Hinzufügen eines Spots zu den Favoriten
  function addFavorite(spot) {
    if (!favorites.find(fav => fav.id === spot._id)) {
      favorites = [...favorites, { id: spot._id, name: spot.name, location: spot.location }];
      saveFavorites();
    }
  }

  // Funktion zum Entfernen eines Spots aus den Favoriten
  function removeFavorite(id) {
    favorites = favorites.filter(fav => fav.id !== id);
    saveFavorites();
  }

  // Favoriten im localStorage speichern
  function saveFavorites() {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }
</script>

<h1>Surf Spots</h1>

<!-- Liste der Surf-Spots -->
<div class="spot-list">
  {#each spots as spot}
    <div class="spot-item">
      <SpotCard {spot} />
      <button on:click={() => addFavorite(spot)} class="btn btn-primary btn-sm">
        Add to Favorites
      </button>
    </div>
  {/each}
</div>

<!-- Favoriten-Liste -->
<FavoritesList {favorites} on:removeFavorite={(event) => removeFavorite(event.detail.id)} />

<style>
  .spot-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 16px;
    margin: 1rem 0;
  }

  .spot-item {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    background: #93b7f1;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    height: 100%;
  }

  .btn-primary {
    background-color: #14b121;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  .btn-primary:hover {
    background-color: #005f8a;
  }
</style>
