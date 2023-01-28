import { component$, Slot } from '@builder.io/qwik';
import { useLocation } from '@builder.io/qwik-city';
import { loader$ } from '@builder.io/qwik-city';
import Header from '../components/header/header';

export const parentLoader = loader$(() => {
  return { text: 'hello' };
});

export default component$(() => {
  const {
    value: { text },
  } = parentLoader.use();

  const { pathname } = useLocation();

  return (
    <>
      <main>
        <div>
          {text} - {pathname}
        </div>
        <section>
          <Slot />
        </section>
      </main>
      <footer>
        <a href="https://www.builder.io/" target="_blank">
          Made with ♡ by Builder.io
        </a>
      </footer>
    </>
  );
});
