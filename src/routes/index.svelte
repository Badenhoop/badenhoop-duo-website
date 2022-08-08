<script>
    import { resolve } from "$lib/utils"
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
    resolve('img/duo3.jpg'),
    resolve('img/duo2.jpg'),
    resolve('img/duo1.jpg'),
]} />
<Samples samples={[
    { title: 'Love is just a word', url: resolve('audio/song1.mp3') },
    { title: 'Angel', url: resolve('audio/song2.mp3') },
    { title: 'Thank you for the music', url: resolve('audio/song2.mp3') },
]} />
<Services />
<Testimonials testimonials={[
    {
        image: resolve('img/face.jpg'),
        title: 'Bruno Mars',
        text: 'Absolut fantastische Performance. Isabell und Philipp Badenhoop haben uns den Moment unserer Trauung einfach perfekt gemacht.',
    },
    {
        image: resolve('img/face.jpg'),
        title: 'Bruno Mars',
        text: 'Absolut fantastische Performance. Isabell und Philipp Badenhoop haben uns den Moment unserer Trauung einfach perfekt gemacht.',
    },
]} />
<FAQ />
<Contact />
<Footer />
