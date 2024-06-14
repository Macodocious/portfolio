export function navContainer(parentElement, links) {
    let container = document.createElement("div");
    container.classList.add("flex", "flex-col", "gap-4");
    parentElement.appendChild(container);

    const applyActiveLinkClass = () => {
        links.forEach(linkInfo => {
            const section = document.querySelector(linkInfo.url);
            const link = container.querySelector(`[href="${linkInfo.url}"]`);

            if (section.getBoundingClientRect().top < window.innerHeight / 2 && section.getBoundingClientRect().bottom > window.innerHeight / 2) {
                link.classList.add('active-link');
            } else {
                link.classList.remove('active-link');
            }
        });
    };

    window.addEventListener("scroll", applyActiveLinkClass);

    links.forEach(linkInfo => {
        let link = document.createElement("a");
        link.href = linkInfo.url;
        link.classList.add("text-base");
        link.textContent = linkInfo.text;

        link.addEventListener("click", function(event) {
            event.preventDefault();
            const section = document.querySelector(this.getAttribute("href"));
            section.scrollIntoView({ behavior: "smooth" });
        });

        container.appendChild(link);
    });

    // Trigger the scroll event once on page load to apply the active-link class
    applyActiveLinkClass();

    return container;
}

const parentElement = document.getElementById("project-nav");

const linksForContainer = [
    {url: "#overview", text: "Overview"},
    {url: "#snapshots", text: "Snapshots"},
    {url: "#context", text: "Context"},
    {url: "#research", text: "Research"},
    {url: "#design", text: "Design"},
    {url: "#summary", text: "Summary"},
];

navContainer(parentElement, linksForContainer);