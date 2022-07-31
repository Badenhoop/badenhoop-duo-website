<script>
  import ScrollDownArrow from "../ScrollDownArrow.svelte"
</script>

<div class="bg-hero bg-cover bg-center w-full h-[48rem] grayscale relative shadow">
  <div class="absolute w-full bottom-0 flex flex-col items-center">
    <h1 class="font-title text-4xl text-white text-center">Philipp & Isabell<br>Badenhoop</h1>
    <hr class="w-12 m-6">
    <h2 class="font-body text-xl text-white text-center">Gesang mit Klavierbegleitung<br>in Berlin / Brandenburg</h2>
    <ScrollDownArrow class="m-4" color="white" />
  </div>
</div>

<style>
  .shadow {
    box-shadow: inset 0 -16rem 10rem 0 rgba(0, 0, 0, 0.9);
  }
</style>