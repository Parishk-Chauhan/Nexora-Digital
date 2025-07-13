document.addEventListener("DOMContentLoaded", function () {
  const greetings = [
    { text: "hello;", class: "lang-default" },
    { text: "नमस्ते;", class: "lang-devanagari" },
    { text: "hola;", class: "lang-default" },
    { text: "bonjour;", class: "lang-default" },
    { text: "こんにちは;", class: "lang-japanese" },
  ];

  const greetingElement = document.getElementById("greeting");
  let i = 0;

  setInterval(() => {
    const current = greetings[i];
    greetingElement.textContent = current.text;
    greetingElement.className = current.class;
    i = (i + 1) % greetings.length;
  }, 1500);
});
