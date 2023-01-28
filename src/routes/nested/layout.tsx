import { component$, Slot } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";
import { loader$ } from "@builder.io/qwik-city";

export const parentLoader = loader$(() => {
  return { text: "hello" };
});

export default component$(() => {
  const { pathname } = useLocation();

  console.log(pathname);

  return (
    <>
      <Slot />
    </>
  );
});
