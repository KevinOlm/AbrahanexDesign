export default class CMC {

    constructor() {
        this.links = document.querySelectorAll(".link");
    }

    linkHoverAdd(element) {
        element.classList.add("link_hover");
    }

    linkHoverRemove(element) {
        element.classList.remove("link_hover");
    }
}