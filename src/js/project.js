////////////////////////////////////////////////////////////////////////// Project Navigation //////////////////////////////////////////////////////////////////////////

export function navContainer(parentElement, links) {
    const container = document.createElement("div");
    container.classList.add("flex", "flex-col", "gap-4");
    parentElement.appendChild(container);

    const applyActiveLinkClass = () => {
        links.forEach(linkInfo => {
            const section = document.querySelector(linkInfo.url);
            if (!section) return; // Exit if section is not found

            const link = container.querySelector(`[href="${linkInfo.url}"]`);
            const rect = section.getBoundingClientRect();

            if (rect.top < window.innerHeight / 2 && rect.bottom > window.innerHeight / 2) {
                link.classList.add('active-link');
            } else {
                link.classList.remove('active-link');
            }
        });
    };

    const handleScroll = () => {
        applyActiveLinkClass();
    };

    window.addEventListener("scroll", handleScroll);

    links.forEach(linkInfo => {
        const link = document.createElement("a");
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

    return () => {
        window.removeEventListener("scroll", handleScroll);
    };
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

////////////////////////////////////////////////////////////////////////// Project Banner Image //////////////////////////////////////////////////////////////////////////

document.addEventListener('DOMContentLoaded', () => {
    const flexContainer = document.querySelector('.flex.relative');
    const dots = flexContainer.querySelectorAll('.dot');
    const dropdown = document.getElementById('dropdown');
    let isHovering = false; // Flag to track hover state

    // Function to show the dropdown
    const showDropdown = (dot) => {
        const info = dot.getAttribute('data-info');
        const dotRect = dot.getBoundingClientRect();
        const containerRect = flexContainer.getBoundingClientRect();

        dropdown.innerHTML = info;

        const topPosition = dotRect.top - containerRect.top + dotRect.height + flexContainer.scrollTop;
        const leftPosition = dotRect.left - containerRect.left + flexContainer.scrollLeft;

        dropdown.style.top = `${topPosition}px`;
        dropdown.style.left = `${leftPosition}px`;

        dropdown.style.display = 'block';
    };

    // Function to hide the dropdown
    const hideDropdown = () => {
        dropdown.style.display = 'none';
    };

    // Event listeners for each dot
    dots.forEach(dot => {
        dot.addEventListener('click', (event) => {
            event.stopPropagation(); // Prevent click event on dot from triggering document click event
            showDropdown(dot);
        });

        dot.addEventListener('mouseenter', () => {
            isHovering = true;
            showDropdown(dot);
        });

        dot.addEventListener('mouseleave', () => {
            isHovering = false;
            setTimeout(() => {
                if (!isHovering) {
                    hideDropdown();
                }
            }, 300); // Delay hiding dropdown to prevent flickering
        });
    });

    // Event listener to hide dropdown on document click
    document.addEventListener('click', () => {
        if (!isHovering) {
            hideDropdown();
        }
    });

    // Event listener to hide dropdown when mouse leaves the dropdown itself
    dropdown.addEventListener('mouseleave', () => {
        hideDropdown();
    });
});

