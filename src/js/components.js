// Thumbnail Pill ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

class ThumbnailPill extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const container = document.createElement('div');
        container.classList.add('flex', 'justify-center', 'items-center', 'px-4', 'py-2', 'border', 'border-bk', 'border-solid', 'rounded-full');

        while (this.firstChild) {
            container.appendChild(this.firstChild);
        }

        this.appendChild(container);
    }
}

customElements.define('thumbnail-pill', ThumbnailPill);

// Banner Image ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

class BannerImage extends HTMLElement {
    constructor() {
        super();

        const img = document.createElement('img');
        img.classList.add('bg-gy', 'object-cover', 'rounded-2xl', 'border', 'border-gy', 'border-solid', 'w-full');
        img.src = this.getAttribute('src') || '';

        this.innerHTML = '';
        this.appendChild(img);
    }
}

customElements.define('banner-image', BannerImage);