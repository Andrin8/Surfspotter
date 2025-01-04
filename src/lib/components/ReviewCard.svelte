<script>
  export let review;
</script>

<div class="review-card">
  <h2 class="spot-name">
    <a href={`/reviews/${review._id}`} class="spot-link">{review.spotId}</a>
  </h2>
  
  <div class="review-info">
    <p><strong>User:</strong> {review.user}</p>
    <p><strong>Rating:</strong> {review.rating}</p>
    <p><strong>Comment:</strong> {review.comment}</p>
    <p><strong>Date:</strong> {review.date}</p>
  </div>
</div>

<style>
  .review-card {
    background-color: #cfe2be;
    border: 1px solid #d1d5db; /* helles Grau */
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
    padding: 16px;
    transition: transform 0.1s;
  }

  /* Leichter Hover-Effekt */
  .review-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.12);
  }

  /* Überschrift / Spot-Name */
  .spot-name {
    margin-top: 0;
    margin-bottom: 0.5rem;
    font-size: 1.25rem;
    color: #0077b6; /* maritimes Blau */
  }

  /* Link zum Review-Detail */
  .spot-link {
    text-decoration: none;
    color: #0077b6;
  }
  .spot-link:hover {
    text-decoration: underline;
  }

  .review-info p {
    margin: 0.25rem 0; /* etwas weniger Abstand */
    color: #333;
  }
</style>
