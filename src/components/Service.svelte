<script lang="ts">
  export let img: string
  export let color: 'black' | 'white'
  export let align: 'left' | 'center' | 'right'
  export let title: string
  export let subtitle: string
  export let items: string[]

  $: colorInverted = color === 'black' ? 'white' : 'black'
  let justify: string
  $: switch (align) {
    case 'left':
      justify = 'justify-start'
      break
    case 'center':
      justify = 'justify-start sm:justify-center'
      break
    case 'right':
      justify = 'justify-start sm:justify-end'
      break
  }
</script>

<div 
  class="bg-cover bg-center grayscale w-full h-[36rem] lg:h-screen relative shadow-{colorInverted}"
  style="background-image: url('{img}')">
  <div class={`absolute bottom-0 left-0 right-0 mx-auto max-w-6xl flex flex-row items-stretch space-x-4 lg:space-x-8 p-8 sm:px-16 sm:py-12 lg:py-28 ${justify}`}>
    <div class="w-2" style:background={color}></div>
    <div>
      <h1 class="font-body text-2xl sm:text-4xl lg:text-6xl text-{color}">{title}</h1>
      <p class="font-body text-sm sm:text-base lg:text-lg text-{color} opacity-90 ml-4 my-0 sm:my-1 lg:my-2">{subtitle}</p>
      <ul>
        {#each items as item}
          <li class="font-body text-lg sm:text-xl lg:text-2xl text-{color} opacity-90 list-disc ml-8">{item}</li>
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
  @media (min-width: 1024px) {
    .shadow-black {
      box-shadow: inset 0 -32rem 20rem 0 rgba(0, 0, 0, 0.9);
    }
    .shadow-white {
      box-shadow: inset 0 -32rem 20rem 0 rgba(255, 255, 255, 0.9);
    }
  }
</style>