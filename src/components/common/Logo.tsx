import { component$ } from "@builder.io/qwik";


export default component$(() => (
  <span class="self-center ml-2 text-2xl md:text-xl font-bold text-gray-900 whitespace-nowrap dark:text-white flex items-center">
    <img
      src={'/images/logo.png'}
      class="inline-block mr-1"
      width={32}
      height={32}
      alt="TFTG Logo"
      loading="lazy"
    />
    TFTG
  </span>
));
