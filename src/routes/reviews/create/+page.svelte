<script>
  // `form` enthält Daten, die aus den Actions zurückkommen (z. B. { error, success, values })
  export let form;
</script>

<h1>Add a New Surf Review</h1>
<form method="POST" class="my-3">
  <div class="mb-3">
    <label for="spotId" class="form-label">SpotId*</label>
    <input name="spotId" class="form-control" type="text" value={form?.values?.spotId} required />
  </div>

  <div class="mb-3">
    <label for="user" class="form-label">User*</label>
    <input name="user" class="form-control" type="text" value={form?.values?.user} required />
  </div>

  <div class="mb-3">
    <label for="rating" class="form-label">Rating*</label>
    <input name="rating" class="form-control" type="number" value={form?.values?.rating} required />
  </div>

  <div class="mb-3">
    <label for="comment" class="form-label">Comment*</label>
    <input name="comment" class="form-control" type="text" value={form?.values?.comment} required />
  </div>

  <div class="mb-3">
    <label for="date" class="form-label">Date*</label>
    <input name="date" class="form-control" type="date" value={form?.values?.date} required />
  </div>

  <button type="submit" class="btn btn-primary">Add Review</button>
</form>

<!-- Zeigt Fehlermeldungen (z.B. Validierungsfehler) -->
{#if form?.error}
  <div class="alert alert-danger" role="alert">
    {form.error}
  </div>
{/if}

<!-- Zeigt Erfolgsmeldung an, wenn "success" zurückkommt -->
{#if form?.success}
  <div class="alert alert-success" role="alert">
    Review created successfully!
  </div>
{/if}

<a href="/reviews">← Back to Reviews</a>
