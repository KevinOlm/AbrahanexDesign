export default class Footer {

    constructor () {

        this.logo = document.querySelector(".footer_logo");
        this.links = document.querySelectorAll(".footer_link");
    }

    logoHoverAdd() {
        this.logo.classList.add("footer_logo_hover");
    }

    logoHoverRemove() {
        this.logo.classList.remove("footer_logo_hover");
    }

    linkHoverAdd(element) {
        element.classList.add("footer_link_hover");
    }

    linkHoverRemove(element) {
        element.classList.remove("footer_link_hover");
    }
}