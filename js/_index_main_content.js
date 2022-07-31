export default class IMainContent {

    constructor () {

        this.main_content_images = document.querySelectorAll(".product_image");
        this.products = document.querySelectorAll(".product_container");
    }

    /**Rezises the images of the main content*/
    mainContentResize() {

        this.main_content_images.forEach (element => {

            if (element.getAttribute("class").includes("product_image_horizontal")) {
                if (element.offsetHeight >= element.parentElement.offsetHeight) {
                    element.classList.add("product_image_horizontal");
                    element.classList.remove("product_image_vertical");
                }
                else {
                    element.classList.add("product_image_vertical");
                    element.classList.remove("product_image_horizontal");
                }
            }
            else if (element.getAttribute("class").includes("product_image_vertical")) {
                if(element.offsetWidth >= element.parentElement.offsetWidth) {
                    element.classList.add("product_image_vertical");
                    element.classList.remove("product_image_horizontal");
                }
                else {
                    element.classList.add("product_image_horizontal");
                    element.classList.remove("product_image_vertical");
                }
            }
        });
    }

    productsHoverAdd(element) {
        element.classList.add("product_container_hover");
    }
    productsHoverRemove(element) {
        element.classList.remove("product_container_hover");
    }
}