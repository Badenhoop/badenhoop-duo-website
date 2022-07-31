<script>
    import SEO from "../components/homepage/SEO.svelte"
    import Navbar from "../components/homepage/Navbar.svelte"
    import Hero from "../components/homepage/Hero.svelte"
    import Showcase from "../components/homepage/Showcase.svelte"
    import About from "../components/homepage/About.svelte"
    import Gallery from "../components/homepage/Gallery.svelte"
    import Samples from "../components/homepage/Samples.svelte"
    import Services from "../components/homepage/Services.svelte"
    import Testimonials from "../components/homepage/Testimonials.svelte"
    import FAQ from "../components/homepage/FAQ.svelte"
    import Contact from "../components/homepage/Contact.svelte"
    import Footer from "../components/homepage/Footer.svelte"
</script>

<SEO />
<Navbar />
<Hero />
<Showcase />
<About />
<Gallery images={[
    '/img/duo3.jpg',
    '/img/duo2.jpg',
    '/img/duo1.jpg',
]} />
<Samples samples={[
    { title: 'Song1', url: '/audio/song1.mp3' },
    { title: 'Song2', url: '/audio/song2.mp3' },
]} />
<Services />
<Testimonials />
<FAQ />
<Contact />
<Footer />
