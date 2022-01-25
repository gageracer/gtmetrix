<script lang="ts">
  import LoginForm from './signup/loginform.svelte';
</script>

<div class="content">
  <LoginForm />
</div>

<style>
  .content {
    display: flex;
    justify-content: center;
    align-items: center;
    width: min(100%, 1000px);
    background-color: #668eff;
    color: white;
    text-align: center;
  }

  @media only screen and (max-width: 1000px) {
    .content {
      height: 80%;
      max-width: 100vw;
    }
  }
</style>
