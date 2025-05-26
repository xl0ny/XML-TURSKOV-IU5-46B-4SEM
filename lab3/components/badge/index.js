export class BadgeComponent {
    constructor(parent, text) {
        this.parent = parent;
        this.text = text;
    }

    getHTML() {
        return `<span class="badge bg-secondary mb-2">${this.text}</span>`;
    }

    render() {
        this.parent.insertAdjacentHTML('beforeend', this.getHTML());
    }
}