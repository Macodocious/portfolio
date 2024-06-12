// Pill template

class thumbnailPill extends HTMLElement {
    constructor() {
        super();

        // Attach a shadow DOM to the element
        const shadow = this.attachShadow({ mode: 'open' });

        // Create the container div
        const container = document.createElement('div');
        container.classList.add('flex', 'justify-center', 'items-center', 'px-4', 'py-2', 'bg-bk', 'rounded-full');

        // Create a slot element to insert dynamic content
        const slot = document.createElement('slot');

        // Append the slot to the container
        container.appendChild(slot);

        // Attach the created elements to the shadow DOM
        shadow.appendChild(container);

        // Add styles to the shadow DOM
        const style = document.createElement('style');
        style.textContent = `
            .flex { display: flex; }
            .justify-center { justify-content: center; }
            .items-center { align-items: center; }
            .px-4 { padding-left: 1rem; padding-right: 1rem; }
            .py-2 { padding-top: 0.5rem; padding-bottom: 0.5rem; }
            .bg-bk { background-color: #181717; } /* Adjust this according to your Tailwind config */
            .rounded-full { border-radius: 9999px; }
            /* Additional Tailwind styles as needed */
        `;
        shadow.appendChild(style);
    }
}

// Define the new element
customElements.define('thumbnail-pill', thumbnailPill);