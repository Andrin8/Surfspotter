<script>
    export let review;
  </script>
  
  <div class="review-card">
    <h2>
      <a href={`/reviews/${review._id}`} class="card-title no-underline">{review.spotId}</a>
    </h2>
    
    <p><strong>User:</strong> {review.user}</p>
    <p><strong>Rating:</strong> {review.rating}</p>
    <p><strong>Comment:</strong> {review.comment}</p>
    <p><strong>Date:</strong> {review.date}</p>  
  </div>
  
  <style>
    .review-card {
      border: 1px solid #ccc;
      padding: 16px;
      border-radius: 8px;
      background-color: #fff;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
    .no-underline {
      text-decoration: none;
    }
    .no-underline:hover { 
      text-decoration: underline;
    }
  </style>
  