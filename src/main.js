import App from "./App.svelte";

new App({
  target: document.body,
  props: {
    // What's your name?
    name: "Matthias Uschold",
    // In the following fiels you can either give a single string,
    // or an array of bullet points

    // What do you associate with the term 'CI/CD'?
    associations: ["Github (or -lab) pipelines"],
    // Which CI/CD tools do you use in your project?
    tools: "none (so far)",
    // What do you want to learn in this workshop?
    expectations: ["how to efficiently set up pipelines, best practices"],
  },
});
