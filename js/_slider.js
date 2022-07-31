/**Main Class Slider to export */
export default class Slider {

    //Variables
    constructor() {
        this.slider_radio_buttons = document.querySelectorAll(".slider_radio_button");//All radio buttons in the slider
        this.slider_radio_buttons_label = document.querySelectorAll(".slider_manual_button_label");//All labels for the radio buttons
        this.slider_images = document.querySelectorAll(".slider_image");//All images in the slider
        this.images_container = document.querySelector(".slider_images");//The container of the slider images
        this.slider_counter = 0;//Used to chech the index of the slider image
        this.x_first_position = 0;//Records the first touch position
        this.x_last_position = 0;//Records the last touch position
    }

    /**Resizes the slider beside the window */
    sliderResize() {
    
        this.slider_images.forEach (element => {

            if (element.getAttribute("class").includes("slider_image_horizontal")) {
                if (element.offsetHeight >= element.parentElement.offsetHeight) {
                    element.classList.add("slider_image_horizontal");
                    element.classList.remove("slider_image_vertical");
                }
                else {
                    element.classList.add("slider_image_vertical");
                    element.classList.remove("slider_image_horizontal");
                }
            }
            else if (element.getAttribute("class").includes("slider_image_vertical")) {
                if(element.offsetWidth >= element.parentElement.offsetWidth) {
                    element.classList.add("slider_image_vertical");
                    element.classList.remove("slider_image_horizontal");
                }
                else {
                    element.classList.add("slider_image_horizontal");
                    element.classList.remove("slider_image_vertical");
                }
            }
        });
    }

    /**Automatically moves the slider*/
    autoMoveSlider() {

        this.slider_counter++;
        if(this.slider_counter > 2) this.slider_counter = 0;
        this.slider_radio_buttons[this.slider_counter].checked = true;
    }

    /**Manually moves the slider*/
    manualMoveSlider(element) {

        if(element.id === "slider_radio_button_1") this.slider_counter = 0;
        else if (element.id === "slider_radio_button_2") this.slider_counter = 1;
        else this.slider_counter = 2;
    }

    /**Adds hover/unhover class to the slider radio buttons*/
    sliderButtonsHoverAdd(element) {element.classList.add("slider_manual_button_label_hover");}
    sliderButtonsHoverRemove(element) {element.classList.remove("slider_manual_button_label_hover");}

    //Records the first touch position
    sliderTouchStart(evt) {
        this.x_first_position = evt.touches[0].clientX;
    }

    //Records the first touch position
    sliderTouchMove(evt){
        this.x_last_position = evt.touches[0].clientX;
    }

    /**Verifies the swipe lenght and swipe the image index if it's long enough*/
    sliderTouchEnd() {
        if(Math.abs(this.x_last_position - this.x_first_position) > 50) {

            if (this.x_last_position > this.x_first_position) {
                this.slider_counter--;
                if(this.slider_counter < 0) this.slider_counter = 2;
                this.slider_radio_buttons[this.slider_counter].checked = true;
            }
            else {
                this.slider_counter++;
                if(this.slider_counter > 2) this.slider_counter = 0;
                this.slider_radio_buttons[this.slider_counter].checked = true;
            }
        }
    } 
}