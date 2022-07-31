export default class Jumbotron {

    constructor () {
        this.image = document.querySelector(".image");
    }

    jumbotronResize() {
        
        if (this.image.classList.contains("image_horizontal")) {
            if (this.image.offsetHeight >= this.image.parentElement.offsetHeight) {
                this.image.classList.add("image_horizontal");
                this.image.classList.remove("image_vertical");
            }
            else {
                this.image.classList.add("image_vertical");
                this.image.classList.remove("image_horizontal");
            }
        }
        else if (this.image.classList.contains("image_vertical")) {
            if(this.image.offsetWidth >= this.image.parentElement.offsetWidth) {
                this.image.classList.add("image_vertical");
                this.image.classList.remove("image_horizontal");
            }
            else {
                this.image.classList.add("image_horizontal");
                this.image.classList.remove("image_vertical");
            }
        }
    }
}