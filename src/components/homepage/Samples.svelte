<script lang="ts">
  import Sample from "../Sample.svelte"

  interface SampleData {
    title: string,
    url: string,
  }

  export let samples: SampleData[]
  let audio: HTMLAudioElement
  let selected = -1
  let paused = true

  function click(i: number) {
    if (selected === i) {
      if (paused) {
        audio.play()
      } else {
        audio.pause()
      }
    } else {
      setTimeout(() => audio.play(), 0)
    }
    selected = i
  }
</script>

<div class="sm:bg-player sm:grayscale sm:bg-cover sm:bg-center sm:relative sm:h-[36em]">
  <div class="bg-black flex flex-col items-center sm:items-start py-12 px-8 sm:px-12 sm:absolute sm:top-16 sm:left-16">
    <h1 class="font-body text-2xl sm:text-4xl text-white text-center sm:text-left mb-4">Hörbeispiele</h1>
    <div>
      {#each samples as sample, i}
        <Sample class="justify-start mt-2" on:click={() => click(i)} title={sample.title} playing={i === selected && !paused} />
      {/each}
    </div>
  
    {#if selected !== -1}
      <audio
        class="mt-6"
        bind:this={audio}
        bind:paused
        controls
        src={samples[selected].url}
      ></audio>
    {/if}
  </div>
</div>