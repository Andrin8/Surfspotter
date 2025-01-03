<script>
  // `form` enthält Daten, die aus den Actions zurückkommen (z. B. { error, success, values })
  export let form;
</script>

<h1>Add a New Surf Spot</h1>
<form method="POST" class="my-3">
  <div class="mb-3">
    <label for="name" class="form-label">Name*</label>
    <input name="name" class="form-control" type="text" value={form?.values?.name} required />
  </div>

  <div class="mb-3">
    <label for="location" class="form-label">Location*</label>
    <input name="location" class="form-control" type="text" value={form?.values?.location} required />
  </div>

  <div class="mb-3">
    <label for="waveType" class="form-label">Wave Type*</label>
    <input name="waveType" class="form-control" type="text" value={form?.values?.waveType} required />
  </div>

  <div class="mb-3">
    <label for="difficulty" class="form-label">Difficulty*</label>
    <input name="difficulty" class="form-control" type="text" value={form?.values?.difficulty} required />
  </div>

  <button type="submit" class="btn btn-primary">Add Spot</button>
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
    Spot created successfully!
  </div>
{/if}

<a href="/spots">← Back to Spots</a>
