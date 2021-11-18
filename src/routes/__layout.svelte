<script lang="ts">
  import { browser } from "$app/env";
  import Navbar from "$components/Navbar.svelte";
  import "virtual:windi.css";
  if (browser) import("virtual:windi-devtools");
</script>

<Navbar />
<slot />
