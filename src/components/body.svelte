<script lang="ts">
  import Content from './content.svelte';
  import Sidebar from './sidebar.svelte';
</script>

<div class="body">
  <Content />
  <Sidebar />
</div>

<style>
  .body {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: min(80vw, 1400px);
    padding-left: 10vw;
    /* border: 1px black solid; */
    height: 82vh;
  }

  @media only screen and (max-width: 1000px) {
    .body {
      flex-direction: column;
      width: 100vw;
      padding-left: 0;
    }
  }
</style>
