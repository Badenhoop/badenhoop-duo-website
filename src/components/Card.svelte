<script lang="ts">
  export let img: string;
  export let text: string;
</script>

<div class="bg-cover bg-center grayscale w-80 h-80 sm:w-60 sm:h-60 relative shadow" style={`background-image: url('${img}')`}>
  <h1 class="font-body text-white text-3xl text-center w-full bottom-0 mb-4 absolute">{text}</h1>
</div>

<style>
  .shadow {
    box-shadow: inset 0 -4rem 6rem 0 rgba(0, 0, 0, 0.9);
  }
</style>