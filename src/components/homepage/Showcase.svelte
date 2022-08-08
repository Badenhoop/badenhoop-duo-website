<script>
  import { resolve } from '$lib/utils'
  import Card from '../Card.svelte'
</script>

<div class="mx-8 mb-12">
  <h1 class="font-body text-black text-2xl sm:text-4xl mx-auto text-center my-12 sm:my-20 sm:w-[32rem]">
    Wir machen Ihren Moment zu etwas besonderem.
  </h1>
  <div class="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 sm:space-x-4">
    <Card img={resolve('img/wedding1.jpg')} text="Hochzeiten" />
    <Card img={resolve('img/baptism.jpg')} text="Taufen" />
    <Card img={resolve('img/birthday.jpg')} text="Geburtstage" />
  </div>
</div>