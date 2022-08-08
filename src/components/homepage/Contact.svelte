<div class="mx-8 my-12 sm:my-20">
  <h1 class="font-body text-2xl sm:text-4xl text-center">Nehmen Sie mit uns Kontakt auf.</h1>

  <form class="max-w-lg mx-auto" action="">
    <input 
      class="mt-8 sm:mt-12"
      type="text" 
      name="name" 
      id="name" 
      placeholder="Name *">
    <input 
      class="mt-6"
      type="email" 
      name="email" 
      id="email" 
      placeholder="Email *">
    <input 
      class="mt-12"
      type="text" 
      name="message" 
      id="message" 
      placeholder="Nachricht">
    <input 
      class="mt-6"
      type="submit" 
      value="Absenden">
  </form>
</div>

<style>
  input[type=text], input[type=email] {
    @apply font-body text-black text-lg sm:text-xl w-full border-solid border-b-[0.1rem] border-b-black
  }

  input[type=submit] {
    @apply font-body text-black text-lg sm:text-xl bg-gray-200 hover:bg-gray-300 px-4 py-2 hover:cursor-pointer;
  }
  
  input:focus {
    @apply outline-none
  }

  input::placeholder {
    @apply text-black
  }
</style>