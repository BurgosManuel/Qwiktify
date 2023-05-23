import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <>
    <div>
      <div>
      <h1>Home page</h1>
      </div>
      <div class="w-screen">
        <img src="https://helios-i.mashable.com/imagery/articles/050bXhdmNaL9bDGAINptcrL/hero-image.fill.size_1200x1200.v1617973265.jpg" alt="Spotify hero image"/>
      </div>
    </div>
    </>
  );
});

export const head: DocumentHead = {
  title: 'QwikTify',
  meta: [
    {
      name: 'description',
      content: 'My first Qwik Site!',
    },
  ],
};
