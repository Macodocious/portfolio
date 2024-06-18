////////////////////////////////////////////////////////////////////////// Project Navigation //////////////////////////////////////////////////////////////////////////

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
        link.classList.add("text-base", "opacity-48");
        link.textContent = linkInfo.text;

        link.addEventListener("click", function(event) {
            event.preventDefault();
            const section = document.querySelector(this.getAttribute("href"));
            section.scrollIntoView({ behavior: "smooth" });
        });

        container.appendChild(link);
    });

    applyActiveLinkClass();

    return container;
}

const parentElement = document.getElementById("project-nav");
let linksForContainer;

if (window.location.pathname.includes("midaflow.html")) {
    linksForContainer = [
        {url: "#overview", text: "Overview"},
        {url: "#snapshots", text: "Snapshots"},
        {url: "#context", text: "Context"},
        {url: "#research", text: "Research"},
        {url: "#design", text: "Design"},
        {url: "#summary", text: "Summary"},
    ];
} else if (window.location.pathname.includes("tooni.html")) {
    linksForContainer = [
        {url: "#overview", text: "Overview"},
        {url: "#features", text: "Features"},
        {url: "#pricing", text: "Pricing"},
        {url: "#testimonials", text: "Testimonials"},
        {url: "#contact", text: "Contact"},
    ];
};

navContainer(parentElement, linksForContainer);
