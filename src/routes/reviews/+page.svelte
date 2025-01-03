<script>
  import ReviewCard from '$lib/components/ReviewCard.svelte';
  // Die von load() zurückgegebenen Daten kommen hier an
  export let data;
  let reviews = data.reviews;
  //let {data} = $props();
</script>

<h1>Reviews</h1>

<!-- Wir gehen davon aus, dass du SpotCard in src/lib/components/SpotCard.svelte hast -->
<div class="review-list">
  {#each reviews as review}
    <ReviewCard {review} />
  {/each}
</div>

<style>
  .review-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 16px;
    margin: 1rem 0;
  }
</style>
