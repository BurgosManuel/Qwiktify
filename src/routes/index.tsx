import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <>
    <main class="w-100 h-screen bg-spotify-hero bg-center brightness-50">
      <div>
        <h1 class="text-white font-bold">ESTE ES MI HOME</h1>
      </div>
    </main>
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
