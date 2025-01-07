<script>
  export let spot;
</script>

<div class="spot-card">
  <img src={spot.image} alt={spot.name} class="spot-image" />
  <h2>
    <a href={`/spots/${spot._id}`} class="card-title no-underline"
      >{spot.name}</a
    >
  </h2>

  <p><strong>Location:</strong> {spot.location}</p>
  <p><strong>Wave Type:</strong> {spot.waveType}</p>
  <p><strong>Difficulty:</strong> {spot.difficulty}</p>
</div>

<style>
  .spot-card {
    border: 1px solid #ccc;
    padding: 16px;
    border-radius: 8px;
    background-color: #fff;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  .spot-image {
    width: 100%;
    height: 150px;
    object-fit: cover;
    border-radius: 8px;
  }
  .no-underline {
    text-decoration: none;
  }
  .no-underline:hover {
    text-decoration: underline;
  }
</style>
