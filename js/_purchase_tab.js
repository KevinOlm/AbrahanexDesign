export default class PurchaseTab {

    /**Class constructor*/
    constructor() {
        this.purchase_tab = document.querySelector(".purchase_tab");//The purchase tab
        this.purchase_tab_title = document.querySelector(".purchase_tab_title")//The title of the tab
        this.purchase_tab_image = document.querySelector(".purchase_tab_image");//The image of the purchase tab
        
        this.personalized_text = document.getElementById("product_text_personalization");
        this.personalized_text_container = document.querySelector(".personalized_text_container");

        this.personalized_image_container = document.querySelector(".personalized_image_container");//The container of the personalized image
        this.image_input = document.getElementById("product_image_personalization");//The image input of the purchase tab
        this.image_resizer = document.querySelector(".resizer");//The image resizer

        this.image_button = document.querySelector("#personalization_button");//The submit image button
        this.image_label = document.querySelector(".image_personalization_label");

        this.purchase_button = document.querySelector(".purchase_button");//The puchase button
        this.close_button = document.querySelector(".close_button");//The purchase tab close button

        this.select_items = document.querySelectorAll(".product_select_container");//The select buttons whit their labels

        this.service_tab = document.querySelector(".service_tab");//Te service tab

        /**The repositioning functions variables*/
        this.active = false;
        this.currentX;
        this.currentY;
        this.initialX;
        this.initialY;
        this.xOffset = 0;
        this.yOffset = 0;

        /**The resizing functions variables*/
        this.prevX;
        this.resize_active;
    }

    /**Resizes the purchase tab*/
    rezizeTab() {

        if(window.innerWidth > window.innerHeight) {
            this.purchase_tab.classList.add("purchase_tab_horizontal");
            this.purchase_tab.classList.remove("purchase_tab_vertical");
        }
        else {
            this.purchase_tab.classList.remove("purchase_tab_horizontal");
            this.purchase_tab.classList.add("purchase_tab_vertical");
        }
    }

    /**Resizes the purchase tab image*/
    resizeTabImage() {

        if (this.purchase_tab_image.getAttribute("class").includes("image_horizontal")) {
            if (this.purchase_tab_image.offsetHeight >= this.purchase_tab_image.parentElement.offsetHeight) {
                this.purchase_tab_image.classList.add("image_horizontal");
                this.purchase_tab_image.classList.remove("image_vertical");
            }
            else {
                this.purchase_tab_image.classList.add("image_vertical");
                this.purchase_tab_image.classList.remove("image_horizontal");
            }
        }
        else if (this.purchase_tab_image.getAttribute("class").includes("image_vertical")) {
            if(this.purchase_tab_image.offsetWidth >= this.purchase_tab_image.parentElement.offsetWidth) {
                this.purchase_tab_image.classList.add("image_vertical");
                this.purchase_tab_image.classList.remove("image_horizontal");
            }
            else {
                this.purchase_tab_image.classList.add("image_horizontal");
                this.purchase_tab_image.classList.remove("image_vertical");
            }
        }
    }

    /**Shows/hids the purchase tab and changes some values acording to teir id*/
    showPurchaseTab(element) {

        switch(element.id) {
            case "shirt": {
                this.purchase_tab_title.innerHTML = "Playeras";
                this.select_items.forEach(element => {
                    element.style.visibility = "visible";
                    if(element.id === "product_type_container") {
                        element.lastElementChild.innerHTML = '<option value="p">Polo</option><option value="cr">Cuello redondo</option>';
                    }
                    else if (element.id === "product_color_container") {
                        element.classList.remove("product_select_container_hidden");
                        element.style.visibility = "visible";
                    }
                    else if (element.id === "product_model_container") element.classList.add("product_select_container_hidden");
                });
                break;
            }
            case "sweatshirt": {
                this.purchase_tab_title.innerHTML = "Sudaderas";
                this.select_items.forEach(element => {
                    element.style.visibility = "visible";
                    if(element.id === "product_type_container") {
                        element.lastElementChild.innerHTML = '<option value="cc">Con capucha</option><option value="sc">Sin capucha</option>';
                    }
                    else if (element.id === "product_color_container") {
                        element.classList.remove("product_select_container_hidden");
                        element.style.visibility = "visible";
                    }
                    else if (element.id === "product_model_container") element.classList.add("product_select_container_hidden");
                });
                break;
            }
            case "hat": {
                this.purchase_tab_title.innerHTML = "Gorras";
                this.select_items.forEach(element => {
                    element.style.visibility = "hidden";
                    if(element.id === "product_type_container") {
                        element.lastElementChild.innerHTML = '<option value="hat"></option>';
                    }
                });
                break;
            }
            case "cases": {
                this.purchase_tab_title.innerHTML = "Fundas";
                this.select_items.forEach(element => {
                    if(element.id === "product_type_container") {
                        element.lastElementChild.innerHTML = '<option value="hp">Hard Plastic</option><option value="sp">Silicon Plastic</option>';
                        element.style.visibility = "visible";
                    }
                    else if (element.id === "product_color_container") element.classList.add("product_select_container_hidden");
                    else if (element.id === "product_model_container") {
                        element.classList.remove("product_select_container_hidden");
                        element.style.visibility = "visible";
                    }
                    else element.style.visibility = "hidden";
                });
                break;
            }
            case "thermo": {
                this.purchase_tab_title.innerHTML = "Termos";
                this.select_items.forEach(element => {
                    if(element.id === "product_type_container") {
                        element.style.visibility = "visible";
                        element.lastElementChild.innerHTML = '<option value="30oz">30 onzas</option><option value="20oz">20 onzas</option>';
                    }
                    else element.style.visibility = "hidden";
                });
                break;
            }
            case "cup": {
                this.purchase_tab_title.innerHTML = "Tazas";
                this.select_items.forEach(element => {
                    if(element.id === "product_type_container") {
                        element.style.visibility = "visible";
                        element.lastElementChild.innerHTML = '<option value="mg">Mágica</option><option value="bl">Blanca</option>';
                    }
                    else element.style.visibility = "hidden";
                });
                break;
            }
            case "services": {
                if (!this.purchase_tab.classList.contains("hidden")) {
                    this.hiddenPurchaseTab();
                }

                this.service_tab.classList.remove("service_tab_hidden");
                this.service_tab.classList.add("service_tab_visible");
                break;
            }
        }

        if(element.id !== "services") {
            if (!this.service_tab.classList.contains("hidden")) {
                this.service_tab.classList.add("service_tab_hidden");
                this.service_tab.classList.remove("service_tab_visible");
            }

            this.purchase_tab.classList.remove("purchase_tab_hidden");
            this.purchase_tab.classList.add("purchase_tab_visible");
            this.imgCharge();

            if(element.id !== "thermo") {
                this.image_button.removeAttribute("style");
                this.image_label.removeAttribute("style");
            }
            else {
                this.image_button.style.display = "none";
                this.image_label.style.display = "none";
            }
        }
    }

    imgCharge() {
        switch(this.select_items[0].lastElementChild.options[this.select_items[0].lastElementChild.selectedIndex].value) {
            case "p": {
                if (this.select_items[1].lastElementChild.options[this.select_items[1].lastElementChild.selectedIndex].value === "n") {
                    if(this.select_items[3].lastElementChild.options[this.select_items[3].lastElementChild.selectedIndex].value[0] === "h") {
                        this.purchase_tab_image.setAttribute("src", "../images/Index/products/polo_mb.jpg");
                    }
                    else {
                        this.purchase_tab_image.setAttribute("src", "../images/Index/products/polo_wb.jpg");
                    }
                }
                else {
                    if(this.select_items[3].lastElementChild.options[this.select_items[3].lastElementChild.selectedIndex].value[0] === "h") {
                        this.purchase_tab_image.setAttribute("src", "../images/Index/products/polo_mw.jpg");
                    }
                    else {
                        this.purchase_tab_image.setAttribute("src", "../images/Index/products/polo_ww.jpg");
                    }
                }
                break;
            }
            case "cr": {
                if (this.select_items[1].lastElementChild.options[this.select_items[1].lastElementChild.selectedIndex].value === "n") {
                    if(this.select_items[3].lastElementChild.options[this.select_items[3].lastElementChild.selectedIndex].value[0] === "h") {
                        this.purchase_tab_image.setAttribute("src", "../images/Index/products/shirt_mb.jpg");
                    }
                    else if(this.select_items[3].lastElementChild.options[this.select_items[3].lastElementChild.selectedIndex].value[0] === "m") {
                        this.purchase_tab_image.setAttribute("src", "../images/Index/products/shirt_wb.jpg");
                    }
                    else {
                        this.purchase_tab_image.setAttribute("src", "../images/Index/products/shirt_bb.jpg");
                    }
                }
                else {
                    if(this.select_items[3].lastElementChild.options[this.select_items[3].lastElementChild.selectedIndex].value[0] === "h") {
                        this.purchase_tab_image.setAttribute("src", "../images/Index/products/shirt_mw.jpg");
                    }
                    else if(this.select_items[3].lastElementChild.options[this.select_items[3].lastElementChild.selectedIndex].value[0] === "m") {
                        this.purchase_tab_image.setAttribute("src", "../images/Index/products/shirt_ww.jpg");
                    }
                    else {
                        this.purchase_tab_image.setAttribute("src", "../images/Index/products/shirt_bw.jpg");
                    }
                }
                break;
            }
            case "cc": {
                if (this.select_items[1].lastElementChild.options[this.select_items[1].lastElementChild.selectedIndex].value === "n") {
                    this.purchase_tab_image.setAttribute("src", "../images/Index/products/hatsweatshirt_mb.jpg");
                }
                else {
                    this.purchase_tab_image.setAttribute("src", "../images/Index/products/hatsweatshirt_mw.jpg");
                }
                break;
            }
            case "sc": {
                if (this.select_items[1].lastElementChild.options[this.select_items[1].lastElementChild.selectedIndex].value === "n") {
                    this.purchase_tab_image.setAttribute("src", "../images/Index/products/sweatshirt_mb.jpg");
                }
                else {
                    this.purchase_tab_image.setAttribute("src", "../images/Index/products/sweatshirt_mw.jpg");
                }
                break;
            }
            case "hat": {
                this.purchase_tab_image.setAttribute("src", "../images/Index/products/GORRA.jpg");
                break;
            }
            case "hp": {
                this.purchase_tab_image.setAttribute("src", "../images/Index/products/None_carcasa-sublimacion-2d-para-iphone-11-negro.jpg");
                break;
            }
            case "sp": {
                this.purchase_tab_image.setAttribute("src", "../images/Index/products/None_carcasa-sublimacion-2d-para-iphone-11-negro.jpg");
                break;
            }
            case "30oz": {
                this.purchase_tab_image.setAttribute("src", "../images/Index/products/TERMO_30X.jpg");
                break;
            }
            case "20oz": {
                this.purchase_tab_image.setAttribute("src", "../images/Index/products/TERMO_30X.jpg");
                break;
            }
            case "mg": {
                this.purchase_tab_image.setAttribute("src", "../images/Index/products/TAZA_MAGICA.jpg");
                break;
            }
            case "bl": {
                this.purchase_tab_image.setAttribute("src", "../images/Index/products/IMG_4743.jpg");
                break;
            }
        }

        this.resizeTabImage();
    }

    /**Hids the services/purchase tab*/
    hiddenPurchaseTab() {
        this.purchase_tab.classList.add("purchase_tab_hidden");
        this.purchase_tab.classList.remove("purchase_tab_visible");
    }
    hiddenServicesTab() {
        this.service_tab.classList.add("service_tab_hidden");
        this.service_tab.classList.remove("service_tab_visible");
    }

    /**Adds/removes the hover class*/
    buttonHoverAdd(element) {element.classList.add("button_hover");}
    buttonHoverRemove(element) {element.classList.remove("button_hover");}

    /**Loads the user img and places it on the product image*/
    loadImage() {
        const file = this.image_input.files[0];
        
        if(file) {
            const reader = new FileReader();
            
            reader.addEventListener("load", () => {
                const user_new_image = document.createElement("img");
                user_new_image.setAttribute("class", "personalized_image");
                user_new_image.setAttribute("src", reader.result);
                
                if(!this.personalized_image_container.lastElementChild.getAttribute("src")) this.personalized_image_container.appendChild(user_new_image);
                else {
                    this.personalized_image_container.replaceChild(user_new_image, this.personalized_image_container.lastChild);
                    this.xOffset = 0;
                    this.yOffset = 0;
                    this.image_resizer.removeAttribute("style");
                }

                this.refreshListeners();
            });
            reader.readAsDataURL(file);
        }
    }

    /**Changes the values of the initial position of the dragable element and the active property to true*/
    dragStart(e) {

        if (e.type === "touchstart") {
            this.initialX = e.touches[0].clientX - this.xOffset;
            this.initialY = e.touches[0].clientY - this.yOffset;
        }
        else {
            this.initialX = e.clientX - this.xOffset;
            this.initialY = e.clientY - this.yOffset;
        }

        if (e.target === this.personalized_image_container.lastElementChild) {
            this.active = true;
        }
    }

    /**Changes the values of the initial position of the dragable element and the active property to false*/    
    dragEnd() {
        this.initialX = this.currentResizeX;
        this.initialY = this.currentResizeY;
  
        this.active = false;
    }

    /**Changes the position of the dragable element*/
    drag(e) {

        if (this.active) {
            var ptic_rect = this.purchase_tab_image.parentElement.getBoundingClientRect();

            e.preventDefault();
        
            if (e.type === "touchmove") {
                this.currentResizeX = e.touches[0].clientX - this.initialX;
                this.currentResizeY = e.touches[0].clientY - this.initialY;
            } else {
                this.currentResizeX = e.clientX - this.initialX;
                this.currentResizeY = e.clientY - this.initialY;
            }

            if(e.type === "touchmove") {
                if(e.touches[0].clientX < ptic_rect.x ||
                    e.touches[0].clientX > (ptic_rect.x + ptic_rect.width) ||
                    e.touches[0].clientY < ptic_rect.y ||
                    e.touches[0].clientY > (ptic_rect.y + ptic_rect.height)) {
                    this.active = false;
                }
            }
            else {
                if(e.clientX < ptic_rect.x ||
                    e.clientX > (ptic_rect.x + ptic_rect.width) ||
                    e.clientY < ptic_rect.y ||
                    e.clientY > (ptic_rect.y + ptic_rect.height)) {
                    this.active = false;
                }
            }
    
            this.xOffset = this.currentResizeX;
            this.yOffset = this.currentResizeY;
    
            setTranslate(this.currentResizeX, this.currentResizeY, this.personalized_image_container.lastElementChild);
            setTranslate(this.currentResizeX, this.currentResizeY, this.image_resizer);
        }

        function setTranslate(xPos, yPos, el) {
            el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
        }
    }

    /**Changes the values of the initial position of the rezizer element and the resizer_active property to true*/
    dragResizerStart(e) {
        if(e.type === "touchstart") {
            this.prevX = e.touches[0].clientX;
        }
        else {
            this.prevX = e.clientX;
        }
        this.resize_active = true;

    }

    /**Changes the size of the image*/
    dragResizer(e) {

        if(this.resize_active) {
            var ptic_rect = this.purchase_tab_image.parentElement.getBoundingClientRect();//The image container info
            var ir_rect = this.image_resizer.getBoundingClientRect();//The image resizer info
            const resized_iamge = document.querySelector(".personalized_image");//The user personalized image
            const image_resizer_left_style = parseInt(getComputedStyle(this.image_resizer).left);//The left style of the image resizer
    
            //Changes the size of the image acording to the movil/pc user interaction//
            if(e.type === "touchmove") {
                resized_iamge.style.width = resized_iamge.getBoundingClientRect().width - (this.prevX - e.touches[0].clientX) + "px";
                //Changes the resizer position only if the image is larger enough//
                if (resized_iamge.getBoundingClientRect().x < e.touches[0].clientX)
                    this.image_resizer.style.left = image_resizer_left_style - Math.round(this.prevX - e.touches[0].clientX) + "px";
                else this.resize_active = false;

                this.prevX = Math.round(e.touches[0].clientX);
            }
            else {
                resized_iamge.style.width = resized_iamge.getBoundingClientRect().width - (this.prevX - e.clientX) + "px";
                //Changes the resizer position only if the image is larger enough//
                if (resized_iamge.getBoundingClientRect().x < e.clientX)
                    this.image_resizer.style.left = image_resizer_left_style - (this.prevX - e.clientX) + "px";
                else this.resize_active = false;

                this.prevX = e.clientX;  
            }

            //Stops the resizing when the user drags out of the image container//
            if(e.type === "touchmove") {
                if(e.touches[0].clientX < ptic_rect.x ||
                    e.touches[0].clientX > (ptic_rect.x + ptic_rect.width) ||
                    e.touches[0].clientY < ptic_rect.y ||
                    e.touches[0].clientY > (ptic_rect.y + ptic_rect.height)) {
                    this.resize_active = false;
                }
            }
            else {
                if(e.clientX < ptic_rect.x ||
                    e.clientX > (ptic_rect.x + ptic_rect.width) ||
                    e.clientY < ptic_rect.y ||
                    e.clientY > (ptic_rect.y + ptic_rect.height)) {
                    this.resize_active = false;
                }
            }
        }
    }

    /**Changes the resizer_active property to false*/
    dragResizerEnd() {
        this.resize_active = false;
    }

    /**Rsets the style atributes of the personalized image*/
    personalizedImageResizing() {
        if(this.personalized_image_container.lastElementChild.getAttribute("src")) {
            this.personalized_image_container.lastChild.removeAttribute("style");
            this.image_resizer.removeAttribute("style");
            this.xOffset = 0;
            this.yOffset = 0;
        }
    }

    /**Refreshes the drag listeners whenever the user submits an image*/
    refreshListeners() {

        //For PC//
        this.personalized_image_container.lastElementChild.addEventListener("mousedown", evt => {
            this.dragStart(evt);
        }, false);

        this.image_resizer.addEventListener("mousedown", evt => {
            this.dragResizerStart(evt);
        }, false);

        window.addEventListener("mouseup", evt => {
            this.dragEnd(evt);
            this.dragResizerEnd(evt);
        }, false);
        window.addEventListener("mousemove", evt => {
            this.drag(evt);
            this.dragResizer(evt);
        }, false);

        //For movil devices//
        this.personalized_image_container.lastElementChild.addEventListener("touchstart", evt => {
            this.dragStart(evt);
        }, false);
        this.personalized_image_container.lastElementChild.addEventListener("touchmove", evt => {
            this.drag(evt);
        }, false);

        this.image_resizer.addEventListener("touchstart", evt => {
            this.dragResizerStart(evt);
        }, false);
        this.image_resizer.addEventListener("touchmove", evt => {
            this.dragResizer(evt);
        }, false);

        window.addEventListener("touchend", evt => {
            this.dragEnd(evt);
            this.dragResizerEnd(evt);
        }, false);
    }
}