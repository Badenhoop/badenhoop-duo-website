<script lang="ts">
  export let direction: string
  export let color: string
</script>

{#if direction === 'left'}
  <svg on:click class="w-6 h-10 hover:cursor-pointer {$$props.class}" viewBox="0 0 17 70" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 1L3 36.3077L14 69" stroke={color} stroke-width="5"/>
  </svg>
{:else if direction === 'right'}
  <!-- right-->
  <svg on:click class="w-6 h-10 hover:cursor-pointer {$$props.class}" viewBox="0 0 17 70" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 69L14 33.6923L3 1" stroke={color} stroke-width="5"/>
  </svg>
{/if}
  