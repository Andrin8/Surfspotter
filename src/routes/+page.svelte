<script>
  import SurfTips from "$lib/components/SurfTips.svelte";
  import Weather from "$lib/components/Weather.svelte";
  let welcomeMessage = "Welcome to SurfSpotter";
  let tagline = "Your tracker and guide for the best surf spots worldwide!";

  let tips = [
    "Check the weather forecast before heading out.",
    "Always wear sunscreen to protect your skin.",
    "Respect local surfers and follow the rules of the spot.",
    "Warm up before entering the water to avoid injuries."
  ];
</script>

<div class="text-center mt-5">
  <!-- Titel und Tagline -->
  <h1 class="display-4">{welcomeMessage}</h1>
  <p class="lead">{tagline}</p>

  <!-- Titelbild -->
  <div class="hero-image mt-4">
    <img src="/images/hero-image.jpg" alt="Surfspot Banner" class="img-fluid w-100" />
  </div>
</div>



<!-- Surftipps-Komponente -->
<div class="mt-5">
  <SurfTips {tips} />
</div>
<!-- Wetter-Komponente -->
<div class="mt-5">
  <Weather />
</div>
