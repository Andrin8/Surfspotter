<script>
  export let data;
  let spot = data.spot;
</script>

<a href="/spots">Back</a>

<h1>{data.spot.name}</h1>
<img src={data.spot.image} alt={spot.name} class="spot-image" />
<p><strong>Location:</strong> {spot.location}</p>
<p><strong>Wave Type:</strong> {spot.waveType}</p>
<p><strong>Difficulty:</strong> {spot.difficulty}</p>

<!-- Minimaler Ansatz für das Löschen -->
<form method="POST" action="?/delete">
  <input type="hidden" name="id" value={spot._id} />
  <button class="btn btn-danger">Delete Spot</button>
</form>

<style>
  .spot-image {
    width: 100%;
    max-height: 300px;
    object-fit: cover;
  }

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
