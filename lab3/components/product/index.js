import { BadgeComponent } from "../badge/index.js";

export class ProductComponent {
    constructor(parent) {
        this.parent = parent;
    }

    getHTML(data) {
        return `
            <div class="card mb-3 product-detail-${data.id}" style="max-width: 540px;">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="${data.src}" class="img-fluid rounded-start" alt="${data.title}">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">${data.title}</h5>
                            <div class="badge-wrapper"></div>
                            <p class="card-text">${data.text}</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    render(data) {
        this.parent.insertAdjacentHTML('beforeend', this.getHTML(data));
        const wrapper = document.querySelector(`.product-detail-${data.id} .badge-wrapper`);
        const badge = new BadgeComponent(wrapper, data.badge);
        badge.render();
    }
}