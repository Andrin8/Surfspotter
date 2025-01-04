<script>
  export let data;
  let review = data.review;
</script>

<a href="/reviews">Back</a>

<!-- Anzeige der aktuellen Daten -->
<h1>{review.spotId}</h1>

<!-- Einfaches Bearbeitungsformular -->
<form method="POST" action="?/update">
  <input type="hidden" name="id" value={review._id} />

  <div class="form-group">
    <label for="user">User:</label>
    <input id="user" name="user" class="form-control" type="text" value={review.user} />
  </div>

  <div class="form-group">
    <label for="rating">Rating:</label>
    <input id="rating" name="rating" class="form-control" type="number" value={review.rating} />
  </div>

  <div class="form-group">
    <label for="comment">Comment:</label>
    <textarea id="comment" name="comment" class="form-control">{review.comment}</textarea>
  </div>

  <button class="btn btn-primary" type="submit">Update Review</button>
</form>

<!-- Minimaler Ansatz für das Löschen (schon vorhanden) -->
<form method="POST" action="?/delete">
  <input type="hidden" name="id" value={review._id} />
  <button class="btn btn-danger">Delete Review</button>
</form>

<style>
  /* Simplen Bootstrap/ähnlichen Stil beibehalten */
  .form-group {
    margin-bottom: 1rem;
  }
  .form-control {
    padding: 0.5rem;
    font-size: 1rem;
    width: 100%;
  }
  .btn {
    padding: 10px 20px;
    margin-top: 20px;
    font-size: 16px;
    border-radius: 4px;
    border: none;
    cursor: pointer;
  }
  .btn-primary {
    background-color: #007bff;
    color: white;
    margin-right: 10px;
  }
  .btn-danger {
    background-color: #dc3545;
    color: white;
  }
</style>
