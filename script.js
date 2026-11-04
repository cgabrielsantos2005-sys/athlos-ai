
document.addEventListener("DOMContentLoaded", () => {

  // Navegação suave
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", event => {
      const target = document.querySelector(
        link.getAttribute("href")
      );

      if (target) {
        event.preventDefault();
        target.scrollIntoView({
          behavior: "smooth"
        });
      }
    });
  });

  // Ano automático no rodapé
  const footer = document.querySelector("footer p");

  if (footer) {
    footer.textContent =
      `© ${new Date().getFullYear()} ATHLOS AI. Conhecimento em movimento.`;
  }

  // Animação de entrada dos cartões
  const cards = document.querySelectorAll(".card");

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12
    });

    cards.forEach(card => observer.observe(card));
  } else {
    cards.forEach(card => card.classList.add("visible"));
  }

  console.log("ATHLOS AI inicializada com sucesso!");
});
