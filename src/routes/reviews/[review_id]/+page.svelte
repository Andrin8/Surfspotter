<script>
    export let data;
    let review = data.review;
  </script>
  
  <a href="/reviews">Back</a>
  
  <h1>{data.review.spotId}</h1>
  <p><strong>User:</strong> {review.user}</p>
  <p><strong>Rating:</strong> {review.rating}</p>
  <p><strong>Comment:</strong> {review.comment}</p>
  
  <!-- Minimaler Ansatz für das Löschen -->
  <form method="POST" action="?/delete">
    <input type="hidden" name="id" value={review._id} />
    <button class="btn btn-danger">Delete Review</button>
  </form>
  
  <style>
    
  
    .btn {
      padding: 10px 20px;
      margin-top: 20px;
      font-size: 16px;
      border-radius: 4px;
      border: none;
      cursor: pointer;
    }
  
    .btn-danger {
      background-color: #dc3545;
      color: white;
    }
  
    .btn-danger:hover {
      background-color: #c82333;
    }
  </style>
  