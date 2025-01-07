<script>
  import { createEventDispatcher } from "svelte";

  export let favorites = [];
  const dispatch = createEventDispatcher();

  function handleRemove(id) {
    dispatch("removeFavorite", { id });
  }
</script>

<div class="favorites">
  <h2>Your Favorite Spots</h2>
  {#if favorites.length > 0}
    <ul>
      {#each favorites as favorite}
        <li class="favorite-item">
          <span><strong>{favorite.name}</strong> - {favorite.location}</span>
          <button
            on:click={() => handleRemove(favorite.id)}
            class="btn btn-danger btn-sm"
          >
            Remove
          </button>
        </li>
      {/each}
    </ul>
  {:else}
    <p>No favorites yet. Add some!</p>
  {/if}
</div>

<style>
  .favorites {
    margin-top: 2rem;
    padding: 1rem;
    border: 1px solid #ddd;
    border-radius: 8px;
    background-color: #a8f0d5;
  }

  .favorite-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0.5rem 0;
  }

  .btn-danger {
    background-color: #dc3545;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  .btn-danger:hover {
    background-color: #c82333;
  }
</style>
