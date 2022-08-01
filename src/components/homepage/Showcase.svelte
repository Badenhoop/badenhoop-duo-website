<script>
  import { resolve } from '$lib/utils'
  import Card from '../Card.svelte'
</script>

<div class="mx-8 mb-12">
  <h1 class="font-body text-black text-2xl text-center my-12">Wir machen Ihren Moment zu etwas besonderem</h1>
  <div class="flex flex-col items-center space-y-4">
    <Card img={resolve('img/wedding1.jpg')} text="Hochzeiten" />
    <Card img={resolve('img/baptism.jpg')} text="Taufen" />
    <Card img={resolve('img/birthday.jpg')} text="Geburtstage" />
  </div>
</div>