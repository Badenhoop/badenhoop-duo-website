<script lang="ts">
  export let title: string
  export let playing: boolean
</script>

<div class={`flex flex-row items-center space-x-2 ${$$props.class}`}>
  {#if playing}
    <svg on:click xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 sm:w-14 sm:h-14 hover:cursor-pointer" viewBox="0 0 20 20" fill="white">
      <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
    </svg>
  {:else}
    <svg on:click xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 sm:w-14 sm:h-14 hover:cursor-pointer" viewBox="0 0 20 20" fill="white">
      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
    </svg>
  {/if}
  <p on:click class="font-body text-lg sm:text-xl text-white hover:cursor-pointer">{title}</p>
</div>