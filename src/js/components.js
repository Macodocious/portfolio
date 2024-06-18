////////////////////////////////////////////////////////////////////////// Thumbnail Pill //////////////////////////////////////////////////////////////////////////

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

////////////////////////////////////////////////////////////////////////// Banner Image //////////////////////////////////////////////////////////////////////////

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

////////////////////////////////////////////////////////////////////////// Jira Breadcrumbs //////////////////////////////////////////////////////////////////////////

class JiraBreadcrumbs extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const breadcrumbs = document.createElement('div');
        breadcrumbs.classList.add('flex', 'gap-4');
            const breadcrumb1 = document.createElement('p');
            breadcrumb1.classList.add('font-medium');
            breadcrumb1.textContent = "Projects";

            breadcrumbs.appendChild(breadcrumb1);

            const breadcrumb2 = document.createElement('p');
            breadcrumb2.classList.add('font-medium');
            breadcrumb2.textContent = "/";

            breadcrumbs.appendChild(breadcrumb2);

            const breadcrumb3 = document.createElement('div');
            breadcrumb3.classList.add('flex', 'gap-2', 'items-center');
                const breadcrumb3Img = document.createElement('img');
                breadcrumb3Img.classList.add('w-5', 'h-5', 'bg-bk-12', 'rounded-md');
                breadcrumb3Img.src = '/src/assets/midaflow/65120e6af41c615d8778561a_Midaflow-p-800.png';

                breadcrumb3.appendChild(breadcrumb3Img);

                const breadcrumb3Text = document.createElement('p');
                breadcrumb3Text.classList.add('font-medium');
                breadcrumb3Text.textContent = "Midaflow";

                breadcrumb3.appendChild(breadcrumb3Text);

            breadcrumbs.appendChild(breadcrumb3);

            const breadcrumb4 = document.createElement('p');
            breadcrumb4.classList.add('font-medium');
            breadcrumb4.textContent = "/";

            breadcrumbs.appendChild(breadcrumb4);

            const breadcrumb5 = document.createElement('div');
            breadcrumb5.classList.add('flex', 'gap-2', 'items-center');
                const breadcrumb5container = document.createElement('div');
                breadcrumb5container.classList.add('flex', 'w-5', 'h-5', 'rounded.md', 'items-center', 'justify-center', 'bg-[#904ee2]');
                    const breadcrumb5Icon = document.createElement('i');
                    breadcrumb5Icon.classList.add('ph-fill', 'ph-lightning');
                    breadcrumb5Icon.style.color = '#fff';
                    breadcrumb5Icon.style.fontSize = "0.75rem";
                
                    breadcrumb5container.appendChild(breadcrumb5Icon);

                breadcrumb5.appendChild(breadcrumb5container);

            breadcrumbs.appendChild(breadcrumb5);

        while (this.firstChild) {
            breadcrumb5.appendChild(this.firstChild);
        }

        this.appendChild(breadcrumbs);
    }
}

customElements.define('jira-breadcrumbs', JiraBreadcrumbs);

////////////////////////////////////////////////////////////////////////// Jira Progress //////////////////////////////////////////////////////////////////////////

class JiraProgress extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const progress = document.createElement('div');
        progress.classList.add('flex', 'flex-col', 'gap-2');
            const progressHeading = document.createElement('h5');
            progressHeading.classList.add('font-semibold');
            progressHeading.textContent = "Stories in this epic";

            progress.appendChild(progressHeading);

            const progressDetails = document.createElement('div');
            progressDetails.classList.add('flex', 'gap-4');
                const progressBar = document.createElement('div');
                progressBar.classList.add('w-full', 'h-4', 'bg-[#904ee2]', 'rounded-full');

                progressDetails.appendChild(progressBar);

                const progressText = document.createElement('p');
                progressText.classList.add('whitespace-nowrap');
                progressText.textContent = "100% Done";

                progressDetails.appendChild(progressText);

            progress.appendChild(progressDetails);

        this.appendChild(progress);
    }
}

customElements.define('jira-progress', JiraProgress);

////////////////////////////////////////////////////////////////////////// Jira Checkmark //////////////////////////////////////////////////////////////////////////

class JiraCheckmark extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = '';
        const checkmark = document.createElement('div');
        checkmark.classList.add('flex', 'w-5', 'h-5', 'rounded-md', 'items-center', 'justify-center', 'bg-[#904ee2]');
            const checkmarkIcon = document.createElement('i');
            checkmarkIcon.classList.add('ph', 'ph-check');
            checkmarkIcon.style.color = '#fff';
            checkmarkIcon.style.fontSize = "0.75rem";

            checkmark.appendChild(checkmarkIcon);

        this.appendChild(checkmark);
    }
}

customElements.define('jira-checkmark', JiraCheckmark);

////////////////////////////////////////////////////////////////////////// Jira Task //////////////////////////////////////////////////////////////////////////

class JiraTask extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const task = document.createElement('div');
        task.classList.add('flex', 'gap-4', 'p-4', 'border', 'border-solid', 'border-bk-24', 'rounded-xl', 'items-center');

        while (this.firstChild) {
            task.appendChild(this.firstChild);
        }

        this.appendChild(task);
    }
}

customElements.define('jira-task', JiraTask);