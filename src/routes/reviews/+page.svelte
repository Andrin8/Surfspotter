<script>
  import ReviewCard from "$lib/components/ReviewCard.svelte";

  export let data;
  let reviews = data.reviews;
</script>

<h1>Reviews</h1>

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
