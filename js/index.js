document.addEventListener("DOMContentLoaded", function () {
    const pureCounter = new PureCounter();
});
document.addEventListener("DOMContentLoaded", function () {
        const filters = document.querySelectorAll(".portfolio-filters li");
        const items = document.querySelectorAll(".portfolio-item");

        filters.forEach((filter) => {
          filter.addEventListener("click", () => {
            document
              .querySelector(".filter-active")
              .classList.remove("filter-active");
            filter.classList.add("filter-active");

            const filterClass = filter.getAttribute("data-filter");

            items.forEach((item) => {
              if (
                filterClass === "*" ||
                item.classList.contains(filterClass.slice(1))
              ) {
                item.style.display = "block";
              } else {
                item.style.display = "none";
              }
            });
          });
        });
      });


    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
      item.querySelector('h3').addEventListener('click', () => {
        item.classList.toggle('faq-active');
      });
      item.querySelector('.faq-toggle').addEventListener('click', () => {
        item.classList.toggle('faq-active');
      });
    });