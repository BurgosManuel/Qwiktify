import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <header class="flex w-100 justify-between p-5">
      <div class="flex align-middle p-2">
        <h1>LOGO</h1>
      </div>
      <div>
        <ul class="flex flex-row">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/login">Login</Link></li>
        </ul>
      </div>
    </header>
  );
});
