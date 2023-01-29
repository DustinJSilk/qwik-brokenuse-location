import { component$, Slot } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";

export default component$(() => {
  const { pathname } = useLocation();

  console.log(pathname);

  return <Slot />;
});
