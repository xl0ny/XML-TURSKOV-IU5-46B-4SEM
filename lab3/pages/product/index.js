import { ProductComponent } from "../../components/product/index.js";
import { BackButtonComponent } from "../../components/back-button/index.js";
import { MainPage } from "../main/index.js";
import { PRODUCTS } from "../../data/products.js";

export class ProductPage {
    constructor(parent, id) {
        this.parent = parent;
        this.id = id;
    }

    get pageRoot() {
        return document.getElementById('product-page');
    }

    getHTML() {
        return `<div id="product-page" class="p-3"></div>`;
    }

    getData() {
        return PRODUCTS.find(item => item.id == this.id);
    }

    clickBack() {
        const mainPage = new MainPage(this.parent);
        mainPage.render();
    }

    render() {
        this.parent.innerHTML = this.getHTML();

        const backBtn = new BackButtonComponent(this.pageRoot);
        backBtn.render(this.clickBack.bind(this));

        const productData = this.getData();
        const product = new ProductComponent(this.pageRoot);
        product.render(productData);
    }
}