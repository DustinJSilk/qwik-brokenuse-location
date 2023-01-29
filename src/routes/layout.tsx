import { component$, Slot } from "@builder.io/qwik";

export default component$(() => {
  console.log("name");
  return <Slot />;
});
