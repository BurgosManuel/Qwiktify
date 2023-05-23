import { component$, useStyles$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';

import styles from './header.module.css?inline'

export default component$(() => {
  useStyles$(styles);

  return (
    <header class="flex w-screen fixed top-0 left-0 z-10 justify-between backdrop-blur-sm">
      <div class="flex align-middle p-5">
        <h1 class="p-2">LOGO</h1>
      </div>
      <div class="mr-5">
        <ul class="flex flex-row p-5">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/login">Login</Link></li>
        </ul>
      </div>
    </header>
  );
});
