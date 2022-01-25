<script lang="ts">
  import Header from '../components/header.svelte';
  import Footer from '../components/footer.svelte';
  import Body from '../components/body.svelte';
</script>

<svelte:head>
  <title>Login to Mogin</title>
</svelte:head>

<main class="main">
  <Header />
  <Body />
  <Footer />
</main>

<style>
  .main {
    height: 100vh;
    widows: 100vw;
  }
  :global(body) {
    margin: 0;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-weight: bold;
    font-size: clamp(2em, 50%, 3em);
  }
</style>
