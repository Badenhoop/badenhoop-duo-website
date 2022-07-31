<script lang="ts">
  export let color: string;
</script>

<svg on:click class={`w-12 h-6 hover:cursor-pointer ${$$props.class}`} viewBox="0 0 70 14" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M1 1L35 12L69 1" stroke="{color}" stroke-width="2"/>
</svg>