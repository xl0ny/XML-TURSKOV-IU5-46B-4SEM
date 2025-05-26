import { BadgeComponent } from "../badge/index.js";

export class ProductCardComponent {
    constructor(parent) {
        this.parent = parent;
    }

    getHTML(data) {
        return `
            <div class="card product-card-${data.id}" style="width: 15rem;">
                <img src="${data.src}" class="card-img-top" alt="${data.title}">
                <div class="card-body">
                    <h5 class="card-title">${data.title}</h5>
                    <div class="badge-wrapper"></div>
                    <p class="card-text">${data.text}</p>
                    <button id="click-card-${data.id}" data-id="${data.id}" class="btn btn-primary">Подробнее</button>
                </div>
            </div>
        `;
    }

    addListeners(data, listener) {
        document
            .getElementById(`click-card-${data.id}`)
            .addEventListener("click", listener);
    }

    render(data, listener) {
        this.parent.insertAdjacentHTML('beforeend', this.getHTML(data));
        
        const card = document.querySelector(`.product-card-${data.id} .badge-wrapper`);
        const badge = new BadgeComponent(card, data.badge);
        badge.render();

        this.addListeners(data, listener);
    }
}