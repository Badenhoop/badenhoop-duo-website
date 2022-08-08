<script lang="ts">
  import { resolve } from '$lib/utils'
  import ScrollDownArrow from '../ScrollDownArrow.svelte'
  import Service from '../Service.svelte'
</script>

<div class="mx-8 my-12 sm:my-20">
  <h1 class="font-body text-2xl sm:text-4xl text-center">Unsere Angebote</h1>
  <ScrollDownArrow class="mx-auto mt-2 sm:mt-4" color="black" />
</div>
<Service  
  img={resolve('img/wedding2.jpg')}
  color="white"
  align='left'
  title="1. Der Perfekte Moment"
  subtitle="Trauungen · Taufen · Einlässe"
  items={[
    "Bis zu 3 Wunschsongs",
    "Eigene Technik",
    "ab 299€"
  ]} />
<Service
  img={resolve('img/party.jpg')}
  color="black"
  align='center'
  title="2. Untermalung"
  subtitle="Hochzeiten · Restaurants · Hotels"
  items={[
    "Eine Stunde Untermalungsmusik",
    "Eigene Technik",
    "ab 499€"
  ]} />
<Service
  img={resolve('img/mic.jpg')}
  color="white"
  align='right'
  title="3. Showprogramm"
  subtitle="Geburtstagsfeiern · Abendprogramm"
  items={[
    "Zwei Stunden Alleinunterhaltung",
    "Eigene Technik",
    "ab 699€"
  ]} />