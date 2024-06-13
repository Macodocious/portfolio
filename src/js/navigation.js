export function navContainer(parentElement, links) {
    let container = document.createElement("div");
    container.classList.add("flex", "flex-col", "gap-4");
    parentElement.appendChild(container);

    const currentPath = window.location.pathname;

    links.forEach(linkInfo => {
        if (linkInfo.url) {
            let link = document.createElement("a");
            link.href = linkInfo.url;
            link.classList.add("flex", "items-center", "gap-2");
            
            /* For <p>Projects</p>
            if (links === linksForContainer2) {
                let specialIcon = document.createElement("i");
                specialIcon.classList.add("ph", "ph-arrow-bend-down-right");
                link.appendChild(specialIcon);
            }
            */

            let linkText = document.createElement("p");
            linkText.textContent = linkInfo.text;

            if (linkInfo.class) {
                linkInfo.class.split(" ").forEach(className => {
                    linkText.classList.add(className);
                });
            }

            if (linkInfo.url.startsWith("http")) {
                let arrowIcon = document.createElement("i");
                arrowIcon.classList.add("ph", "ph-arrow-up-right");
                link.appendChild(linkText);
                link.appendChild(arrowIcon);
            } else {
                link.appendChild(linkText);
            }

            if (linkInfo.url === currentPath) {
                link.classList.add('active-link');
            }

            container.appendChild(link);

        } else {
            let linkText = document.createElement("p");
            linkText.textContent = linkInfo.text;

            if (linkInfo.class) {
                linkInfo.class.split(" ").forEach(className => {
                    linkText.classList.add(className);
                });
            }

            container.appendChild(linkText);
        }
    });

    return container;
}

const parentElement = document.getElementById("nav");

const linksForContainer1 = [
    {url: "/src/index.html", text: "Brian Mac", class: "text-xl font-semibold"}
];
const linksForContainer2 = [
    /* {text: "Projects", class: "text-base"}, */
    {url: "/src/projects/tooni.html", text: "Tooni", class: "text-base"},
    {url: "/src/projects/midaflow.html", text: "Midaflow", class: "text-base"},
    /* {url: "#", text: "Cruise", class: "text-base"} */
];
const linksForContainer3 = [
    {url: "/src/about.html", text: "About", class: "text-base"},
    {url: "https://brianmac.ca/src/assets/BrianMac_Resume.pdf", text: "Resume", class: "text-base"},
    {url: "https://www.linkedin.com/in/brianmac97/", text: "LinkedIn", class: "text-base"},
    /* {url: "https://", text: "Tooni", class: "text-base"} */
];

navContainer(parentElement, linksForContainer1);
navContainer(parentElement, linksForContainer2);
navContainer(parentElement, linksForContainer3);