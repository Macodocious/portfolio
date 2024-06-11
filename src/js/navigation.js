export function navContainer(parentElement, links) {
    let container = document.createElement("div");
    container.classList.add("flex", "flex-col", "gap-4");
    parentElement.appendChild(container);

    links.forEach(linkInfo => {
        let link = document.createElement("a");
        link.href = linkInfo.url;
        link.classList.add("flex","items-center" ,"gap-2");
        let linkText = document.createElement("p");
        linkText.textContent = linkInfo.text;

        if (linkInfo.class) {
            linkInfo.class.split(" ").forEach(className => {
                linkText.classList.add(className);
            });
        }

        if (linkInfo.text === "LinkedIn") {
            let arrowIcon = document.createElement("i");
            arrowIcon.classList.add("ph", "ph-arrow-up-right")
            link.appendChild(linkText);
            link.appendChild(arrowIcon);
        } else {
            link.appendChild(linkText);
        }

        container.appendChild(link);
    });

    return container;
}

const parentElement = document.getElementById("nav");

const linksForContainer1 = [
    {url: "#", text: "Brian Mac", class: "text-xl font-semibold"}
];
const linksForContainer2 = [
    {url: "#", text: "Tooni"},
    {url: "#", text: "Midaflow"},
    {url: "#", text: "Cruise"}
];
const linksForContainer3 = [
    {url: "url5", text: "About"},
    {url: "url6", text: "Resume"},
    {url: "url7", text: "LinkedIn"}
];

navContainer(parentElement, linksForContainer1);
navContainer(parentElement, linksForContainer2);
navContainer(parentElement, linksForContainer3);