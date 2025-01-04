<script>
    export let tips = [];
  </script>
  
  <div class="surf-tips-container">
    <h2>Surf Tips</h2>
    <ul>
      {#each tips as tip}
        <li class="surf-tip-item">{tip}</li>
      {/each}
    </ul>
  </div>
  
  <style>
    .surf-tips-container {
      background-color: #eaf693;
      padding: 20px;
      border-radius: 8px;
      margin: 20px 0;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
  
    .surf-tips-container h2 {
      font-size: 1.5rem;
      color: #b6002a;
      margin-bottom: 15px;
    }
  
    .surf-tip-item {
      font-size: 1rem;
      color: #333;
      margin: 5px 0;
      list-style-type: disc;
      margin-left: 20px;
    }
  </style>
  