<script>
  export let data;
  let spot = data.spot;
</script>

<a href="/spots">Back</a>

<h1>{spot.name}</h1>
<img src={spot.image} alt={spot.name} class="spot-image" />
<p><strong>Location:</strong> {spot.location}</p>
<p><strong>Wave Type:</strong> {spot.waveType}</p>
<p><strong>Difficulty:</strong> {spot.difficulty}</p>

<form method="POST" action="?/update" class="update-form">
  <input type="hidden" name="id" value={spot._id} />

  <div class="form-group">
    <label for="name">Name:</label>
    <input id="name" name="name" type="text" value={spot.name} />
  </div>

  <div class="form-group">
    <label for="image">Image URL:</label>
    <input id="image" name="image" type="text" value={spot.image} />
  </div>

  <div class="form-group">
    <label for="location">Location:</label>
    <input id="location" name="location" type="text" value={spot.location} />
  </div>

  <div class="form-group">
    <label for="waveType">Wave Type:</label>
    <input id="waveType" name="waveType" type="text" value={spot.waveType} />
  </div>

  <div class="form-group">
    <label for="difficulty">Difficulty:</label>
    <input
      id="difficulty"
      name="difficulty"
      type="text"
      value={spot.difficulty}
    />
  </div>

  <button class="btn btn-primary" type="submit">Update Spot</button>
</form>

<form method="POST" action="?/delete">
  <input type="hidden" name="id" value={spot._id} />
  <button class="btn btn-danger">Delete Spot</button>
</form>

<style>
  .spot-image {
    width: 100%;
    max-height: 300px;
    object-fit: cover;
    margin-bottom: 1rem;
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

  .btn-danger:hover {
    background-color: #c82333;
  }

  .form-group {
    margin-bottom: 1rem;
  }

  .form-group label {
    display: block;
    font-weight: 600;
    margin-bottom: 0.25rem;
  }

  .form-group input {
    padding: 0.5rem;
    font-size: 1rem;
    width: 100%;
  }
</style>
