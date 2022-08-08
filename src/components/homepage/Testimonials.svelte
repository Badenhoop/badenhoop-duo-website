<script lang="ts" context="module">
  export interface Testimonial {
    image: string
    title: string
    text: string
  }
</script>

<script lang="ts">
  import LeftRightButton from '../LeftRightButton.svelte'
  import { tweened } from 'svelte/motion'
  import { cubicOut } from 'svelte/easing'

  export let testimonials: Testimonial[]

  let selected = 0
  const offset = tweened(0, {
    duration: 400,
    easing: cubicOut,
  })

  function left() {
    selected = (selected - 1 + testimonials.length) % testimonials.length
    offset.set(selected)
  }

  function right() {
    selected = (selected + 1) % testimonials.length
    offset.set(selected)
  }
</script>

<div class="my-12 sm:my-20 relative overflow-hidden">
  <div class="flex flex-row" style:width={`${testimonials.length * 100}vw`} style:margin-left={`${-$offset * 100}vw`}>
    {#each testimonials as testimonial}
      <div class="w-screen">
        <div class="relative w-48 h-48 sm:w-64 sm:h-64 bg-cover bg-center grayscale mx-auto rounded-full" style:background-image="url('{testimonial.image}')">
          <p class="font-title text-black text-[6rem] sm:text-[7rem] absolute right-0 top-0">“</p>
        </div>
        <div class="mx-8 mt-8 sm:mt-12 px-4 py-6 bg-gray-100 relative">
          <p class="font-body text-lg sm:text-xl">{testimonial.text}</p>
          <h1 class="font-body text-2xl sm:text-4xl top-[-1.1rem] sm:top-[-1.5rem] absolute">{testimonial.title}</h1>
        </div>
      </div>
    {/each}
  </div>
  <div class="absolute top-0 w-full h-48 sm:h-64 px-8 flex flex-row justify-between items-center">
    <LeftRightButton direction='left' color='black' on:click={left} />
    <LeftRightButton direction='right' color='black' on:click={right} />
  </div>
</div>