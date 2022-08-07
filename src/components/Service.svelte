<script lang="ts">
  export let img: string
  export let color: 'black' | 'white'
  export let align: 'left' | 'center' | 'right'
  export let title: string
  export let subtitle: string
  export let items: string[]

  $: colorInverted = color === 'black' ? 'white' : 'black'
</script>

<div 
  class="bg-cover bg-center grayscale w-full h-[32rem] relative shadow-{colorInverted}"
  style="background-image: url('{img}')">
  <div class="absolute bottom-0 flex flex-row items-stretch space-x-4 m-8">
    <div class="w-2" style:background={color}></div>
    <div>
      <h1 class="font-body text-2xl text-{color}">{title}</h1>
      <p class="font-body text-sm text-{color} ml-4">{subtitle}</p>
      <ul>
        {#each items as item}
          <li class="font-body text-lg text-{color} list-disc ml-8">{item}</li>
        {/each}
      </ul>
    </div>
  </div>
</div>

<style>
  .shadow-black {
    box-shadow: inset 0 -16rem 10rem 0 rgba(0, 0, 0, 0.9);
  }
  .shadow-white {
    box-shadow: inset 0 -16rem 10rem 0 rgba(255, 255, 255, 0.9);
  }
</style>