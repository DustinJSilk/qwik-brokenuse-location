import { component$ } from "@builder.io/qwik";
import { loader$ } from "@builder.io/qwik-city";
import { DocumentHead, Link } from "@builder.io/qwik-city";

export const data = [{ text: "1" }, { text: "2" }];

export const dataLoader = loader$(() => {
  return {
    items: data,
  };
});

export default component$(() => {
  return (
    <>
      <h1>child</h1>

      <Link class="mindblow" href="/">
        Blow my mind 🤯
      </Link>
    </>
  );
});

export const head: DocumentHead = {
  title: "Qwik Flower",
};
