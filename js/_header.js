/**Main Class Header to export */
export default class Header {

    //Variables
    constructor() {

        this.background = document.querySelector(".header_background");//The element that contains all the header
        this.titles = document.querySelector(".header_title_container");//The image that represents the title of the header
        this.nav_button = document.querySelector(".nav_button");//The nav_button of the navbar
        this.menu_items = document.querySelectorAll(".menu_item");//All the items in the menu
        this.info_items = document.querySelectorAll(".info_section");//All the items in the info section
        this.shown_menu = false;//Determine if the menu is visible or not
        this.animation_finished = true;//Determine if the animation of the nav_button is finished
    }

    /**Function that shows or hids the menu */
    showMenu() {

        this.nav_button.style.transition = "0.7s ease-in-out";
        this.animation_finished = false;

        if (!this.shown_menu) {
    
            if(this.background.classList.contains("header_background_light")) {
                this.titles.firstElementChild.classList.remove("visible");
                this.titles.firstElementChild.classList.add("hidden");
                this.titles.lastElementChild.classList.remove("hidden");
                this.titles.lastElementChild.classList.add("visible");
            }
            if(window.innerHeight > window.innerWidth) this.nav_button.classList.add("active_height");
            else this.nav_button.classList.add("active_width");
            this.nav_button.classList.remove("nav_button_hover");
            this.nav_button.classList.remove("nav_button_active");
    
            this.menu_items.forEach(element => {
                element.removeAttribute("style");
                element.classList.remove("hidden");
                element.classList.add("visible");
            });
    
            if (window.innerWidth < 768) {
                this.info_items.forEach(element => {
                    element.removeAttribute("style");
                    element.classList.remove("hidden");
                    element.classList.add("visible");
                });
            }
        }
        else {
    
            if(this.background.classList.contains("header_background_light")) {
                this.titles.firstElementChild.classList.add("visible");
                this.titles.firstElementChild.classList.remove("hidden");
                this.titles.lastElementChild.classList.add("hidden");
                this.titles.lastElementChild.classList.remove("visible");
            }
            if(this.nav_button.getAttribute("class").includes("active_height")) this.nav_button.classList.remove("active_height");
            else this.nav_button.classList.remove("active_width");
    
            this.menu_items.forEach(element => {
                element.style.transition = "0.3s ease-in-out";
                element.classList.add("hidden");
                element.classList.remove("visible");
            });
    
            if(this.info_items[0].getAttribute("class").includes("visible")){
                this.info_items.forEach(element => {
                    element.style.transition = "0.3s ease-in-out";
                    element.classList.add("hidden");
                    element.classList.remove("visible");
                });
            }
        }
        this.shown_menu = !this.shown_menu;
    }

    /**Removes the animation of the nav_button and changes the value of the animation_finished to true*/
    buttonTransitionFinished() {

        this.nav_button.removeAttribute("style");
        if(!this.shown_menu) this.nav_button.classList.add("nav_button_active");
        this.animation_finished = true;
    }

    /**Adds/Removes the hover class from the nav button*/
    buttonHoverAdd() {if(!this.shown_menu && this.animation_finished) this.nav_button.classList.add("nav_button_hover");}
    buttonHoverRemove() {this.nav_button.classList.remove("nav_button_hover");}

    /**Adds/Removes the hover class from the menu items*/
    menuItemsHoverAdd(element) {element.classList.add("menu_item_hover");}
    menuItemsHoverRemove(element) {element.classList.remove("menu_item_hover");}

    /**Adds/Removes the hover class from the contact links*/
    contactLinkHoverAdd(element) {element.classList.add("header_link_hover");}
    contactLinkHoverRemove(element) {element.classList.remove("header_link_hover");}

    /**Resizes the nav_button to the width or height proportions and shows/hids the info section */
    resizedPageMenu () {
        this.nav_button.classList.remove("nav_button_active");

        setTimeout(() => {
            this.nav_button.classList.add("nav_button_active");
        }, 100);

        if(this.shown_menu) {
    
            if(window.innerHeight > window.innerWidth && this.nav_button.getAttribute("class").includes("active_width")) {
                
                this.nav_button.classList.remove("active_width");
                this.nav_button.classList.add("active_height");
            }
            else if (window.innerHeight < window.innerWidth && this.nav_button.getAttribute("class").includes("active_height")) {
                
                this.nav_button.classList.remove("active_height");
                this.nav_button.classList.add("active_width");
            }
    
            if (window.innerWidth >= 768) {
    
                this.info_items.forEach(element => {
                    element.style.transition = "0s ease-in-out";
                    element.classList.add("hidden");
                    element.classList.remove("visible");
                });
            }
            else {
                this.info_items.forEach(element => {
                    element.style.transition = "0s ease-in-out";
                    element.classList.remove("hidden");
                    element.classList.add("visible");
                });
            }
        }
    }
}