import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <Link class="mindblow" href="/nested/flower/">
      Blow my mind 🤯
    </Link>
  );
});
