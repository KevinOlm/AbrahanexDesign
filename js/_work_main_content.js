/**Default class export*/
export default class WMC {

    /**Class variables*/
    constructor() {

        this.container = document.querySelector(".jumbo_content_container");//Container of the jumbo img
        this.close_button = document.querySelector(".close_button");//Button that closes the jumbo img
        this.jumbo_image = document.querySelector(".jumbo_image");//The jumbo img

        this.loading = document.querySelector(".loading_container");//LOading icon
        this.gallery = document.querySelector(".gallery_container");//Container of the gallery imgs
        this.button = document.querySelector(".button_charge");//The charge button

        this.html_container = new Array();//Container of all the elements that are going to be appended to the gallery
        this.loaded_images = 0;//Images actually loaded
        this.images_to_load = 0;//Images to load
        this.showed_images = 0;//Images Actually showed
        this.images_to_show = 0;//Images to show
        this.page_loaded = false;//Check if the page is fully loaded
    }

    /**Saves all images in the gallery in an array, and calls other functions to charge the page*/
    loadGallery() {
        
        fetch("../json/image_names.json")
        .then(resp => {
            return resp.json();
        })
        .then(data => {

            var i = 0;

            while (data[i]) {

                this.html_container[i] = document.createElement("DIV");
                this.html_container[i].classList.add("image_border", "hidden");
                this.html_container[i].innerHTML = '<div class="image_container" id="image_cont_' + i + '"><img src="../images/Work/' + data[i] + '" alt="" class="image image_vertical"></div>'
                i++;
            }
            return this.html_container;
        })
        .then(html => {
            this.loaded_images = html.length;
            this.images_to_load = this.loaded_images-6;
            this.loadImages();
            return this.gallery;
        })
        .then(() => {
            this.showImages();
        })
        .then(() => {
            var resizeInterval = setInterval(() => {
                if(document.querySelector(".image").offsetWidth && document.querySelector(".image").offsetHeight) {
                    this.workResize();
                    clearInterval(resizeInterval);
                }
            }, 100);
        })
        .then(() => {
            this.refresListeners();
        })
        .then(() => {
            this.loading.remove();
        });
    }

    /**Loads an amount of 6 images without display*/
    loadImages() {
        this.images_to_load -= 6;

        for(this.loaded_images; this.loaded_images > this.images_to_load ; this.loaded_images--) {

            if(this.loaded_images > 0 && this.html_container[this.loaded_images-1]) {
                this.gallery.appendChild(this.html_container[this.loaded_images-1]);
            }
            else {
                break;
            }
        }
    }

    /**Changes the display of 6 images to visible*/
    showImages() {

        if(!this.page_loaded) {
            var timer_delay = 0;
            this.images_to_show += 6;

            for(this.showed_images; this.showed_images < this.images_to_show; this.showed_images++){

                if(this.gallery.querySelector(".image_border:nth-child(" + (this.showed_images+1) + ")")){
                    this.gallery.querySelector(".image_border:nth-child(" + (this.showed_images+1) + ")").style.transition = "opacity 1s " + timer_delay + "s ease-in-out";
                    this.gallery.querySelector(".image_border:nth-child(" + (this.showed_images+1) + ")").classList.remove("hidden");
                    this.gallery.querySelector(".image_border:nth-child(" + (this.showed_images+1) + ")").classList.add("visible");
                    timer_delay += 0.1;
                }
                else {
                    this.page_loaded = true;
                    this.button.remove();
                }
            }
        }
    }

    /**Refreshs all the images listeners*/
    refresListeners(){

        this.gallery.querySelectorAll(".image").forEach(element => {

            element.addEventListener("click", () => {
                this.jumbo_image.setAttribute("src", element.getAttribute("src"));
                this.container.classList.remove("hidden");
                this.container.classList.add("visible");
                this.resizeJumboImage();
            });
            element.addEventListener("mouseover", () => {
                element.classList.add("image_container_hover");
            })
            element.addEventListener("mouseout", () => {
                element.classList.remove("image_container_hover");
            })
        })
    }

    /**Resizes the images*/
    workResize() {

        document.querySelectorAll(".image").forEach(element => {
            
            if (element.getAttribute("class").includes("image_horizontal")) {

                if (element.offsetHeight >= element.parentElement.offsetHeight) {
                    element.classList.add("image_horizontal");
                    element.classList.remove("image_vertical");
                }
                else {
                    element.classList.add("image_vertical");
                    element.classList.remove("image_horizontal");
                }
            }
            else if (element.getAttribute("class").includes("image_vertical")) {

                if(element.offsetWidth >= element.parentElement.offsetWidth) {
                    element.classList.add("image_vertical");
                    element.classList.remove("image_horizontal");
                }
                else {
                    element.classList.add("image_horizontal");
                    element.classList.remove("image_vertical");
                }
            }
        });
    }

    /**Adds or Removes the hover styles for the button*/
    buttonHoverAdd() {this.button.classList.add("button_charge_hover");}
    buttonHoverRemove() {this.button.classList.remove("button_charge_hover");}

    /**Adds or Removes the hover styles for the jumbo img close button*/
    closeImageHoverAdd() {this.close_button.classList.add("close_button_hover");}
    closeImageHoverRemove() {this.close_button.classList.remove("close_button_hover");}

    /**Closes the Jumbo Image*/
    closeImage() {
        this.container.classList.remove("visible");
        this.container.classList.add("hidden");
    }

    /**Resizes the Jumbo Image*/
    resizeJumboImage() {
        
        if (this.jumbo_image.classList.contains("jumbo_image_horizontal")) {

            if (this.jumbo_image.offsetHeight >= this.jumbo_image.parentElement.offsetHeight) {
                this.jumbo_image.classList.add("jumbo_image_vertical");
                this.jumbo_image.classList.remove("jumbo_image_horizontal");
            }
            else {
                this.jumbo_image.classList.add("jumbo_image_horizontal");
                this.jumbo_image.classList.remove("jumbo_image_vertical");
            }
        }
        else if (this.jumbo_image.classList.contains("jumbo_image_vertical")) {

            if(this.jumbo_image.offsetWidth >= this.jumbo_image.parentElement.offsetWidth) {
                this.jumbo_image.classList.add("jumbo_image_horizontal");
                this.jumbo_image.classList.remove("jumbo_image_vertical");
            }
            else {
                this.jumbo_image.classList.add("jumbo_image_vertical");
                this.jumbo_image.classList.remove("jumbo_image_horizontal");
            }
        }
        else {
            if(this.jumbo_image.offsetWidth >= this.jumbo_image.parentElement.offsetWidth) {
                this.jumbo_image.classList.add("jumbo_image_vertical");
                this.resizeJumboImage();
            }
            else {
                this.jumbo_image.classList.add("jumbo_image_vertical");
                this.resizeJumboImage();
            }
        }
    }
}