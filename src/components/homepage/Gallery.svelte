<script lang="ts">
  import LeftRightButton from '../LeftRightButton.svelte'
  import { tweened } from 'svelte/motion'
  import { cubicOut } from 'svelte/easing'

  export let images: string[];

  let selected = 0
  const offset = tweened(0, {
    duration: 400,
    easing: cubicOut,
  })

  function left() {
    selected = (selected - 1 + images.length) % images.length
    offset.set(selected)
  }

  function right() {
    selected = (selected + 1) % images.length
    offset.set(selected)
  }
</script>

<div class="w-full h-[36rem] relative overflow-hidden">
  <div class="flex flex-row h-full absolute" style:width={images.length * 100} style:margin-left={`${-$offset * 100}vw`}>
    {#each images as image}
      <div class="bg-cover bg-center grayscale w-screen h-full" style={`background-image: url('${image}')`}></div>
    {/each}
  </div>
  <div class="w-full h-full absolute bottom-0 flex flex-row justify-between items-end p-8 shadow">
    <LeftRightButton direction="left" color="white" on:click={left} />
    <h1 class="font-body text-white text-2xl text-center">Unsere Gallerie</h1>
    <LeftRightButton direction="right" color="white" on:click={right} />
  </div>
</div>

<style>
  .shadow {
    box-shadow: inset 0 -6rem 6rem 0 rgba(0, 0, 0, 0.9);
  }
</style>