<script>
  import SpotCard from '$lib/components/SpotCard.svelte';
  // Die von load() zurückgegebenen Daten kommen hier an
  export let data;
  let spots = data.spots;
  //let {data} = $props();
</script>

<h1>Surf Spots</h1>

<!-- Wir gehen davon aus, dass du SpotCard in src/lib/components/SpotCard.svelte hast -->
<div class="spot-list">
  {#each spots as spot}
    <SpotCard {spot} />
  {/each}
</div>

<style>
  .spot-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 16px;
    margin: 1rem 0;
  }
</style>
