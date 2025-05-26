import { ProductCardComponent } from "../../components/product-card/index.js";
import { ProductPage } from "../product/index.js";
import { PRODUCTS } from "../../data/products.js";

export class MainPage {
    constructor(parent) {
        this.parent = parent;
    }

    get pageRoot() {
        return document.getElementById('main-page');
    }

    getHTML() {
        return `<div id="main-page" class="d-flex flex-wrap gap-3 p-3"></div>`;
    }

    getData() {
        return PRODUCTS;
    }

    clickCard(e) {
        const id = e.target.dataset.id;
        const productPage = new ProductPage(this.parent, id);
        productPage.render();
    }

    render() {
        this.parent.innerHTML = this.getHTML();
        const data = this.getData();

        data.forEach((item) => {
            const card = new ProductCardComponent(this.pageRoot);
            card.render(item, this.clickCard.bind(this));
        });
    }
}