<script>
  import ScrollDownArrow from "../ScrollDownArrow.svelte"
</script>

<div class="bg-hero bg-cover bg-center w-full h-[36rem] sm:h-screen grayscale relative shadow">
  <div class="absolute w-full bottom-0 flex flex-col items-center">
    <h1 class="font-title text-4xl sm:text-6xl text-white text-center">Philipp & Isabell<br>Badenhoop</h1>
    <hr class="w-12 m-6 sm:m-10">
    <h2 class="font-body text-xl sm:text-2xl text-white text-center">Gesang mit Klavierbegleitung<br>in Berlin / Brandenburg</h2>
    <ScrollDownArrow class="m-4 sm:mt-8" color="white" />
  </div>
</div>

<style>
  .shadow {
    box-shadow: inset 0 -16rem 10rem 0 rgba(0, 0, 0, 0.8);
  }
  @media (min-width: 640px) {
    .shadow {
      box-shadow: inset 0 -24rem 20rem 0 rgba(0, 0, 0, 0.8);
    }
  }
</style>