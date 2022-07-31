//////////Imports/Obj creations//////////

    import Header from "./_header.js";
    import Footer from "./_footer.js";
    import Slider from "./_slider.js";
    import IMC from "./_index_main_content.js";
    import PurchaseTab from "./_purchase_tab.js";

    const HeaderObj = new Header();
    const FooterObj = new Footer();
    const SliderObj = new Slider();
    const IMCObj = new IMC();
    const PurchaseTabObj = new PurchaseTab();

//////////Initial Configurations//////////

    var AutoSlider = setInterval(() => {SliderObj.autoMoveSlider()}, 5000);
    SliderObj.sliderResize();
    IMCObj.mainContentResize();
    PurchaseTabObj.rezizeTab();
    PurchaseTabObj.resizeTabImage();

//////////Header//////////

    /**For each clic in the nav_button */
    HeaderObj.nav_button.addEventListener("click", () => {
        HeaderObj.showMenu();
    });

    /**Every time a trnsition in the nav_button is finished */
    HeaderObj.nav_button.addEventListener("transitionend", () => {
        HeaderObj.buttonTransitionFinished();
    });

    /**Every time the user makes hover/unhover on the nav_button */
    HeaderObj.nav_button.addEventListener("mouseover", () => {HeaderObj.buttonHoverAdd();});
    HeaderObj.nav_button.addEventListener("mouseout", () => {HeaderObj.buttonHoverRemove();});

    /**Every time the user makes hover/unhover on the menu items*/
    HeaderObj.menu_items.forEach(element => {
        element.addEventListener("mouseover", () => {HeaderObj.menuItemsHoverAdd(element);});
        element.addEventListener("mouseout", () => {HeaderObj.menuItemsHoverRemove(element);});
    });

    /**Every time the user makes hover/unhover on the contact links*/
    HeaderObj.info_items.forEach(element => {
        element.querySelectorAll(".header_link").forEach(element => {
            element.addEventListener("mouseover", () => {HeaderObj.contactLinkHoverAdd(element);});
            element.addEventListener("mouseout", () => {HeaderObj.contactLinkHoverRemove(element);});
        });
    });

//////////Footer//////////

    /**Every time the user makes hover/unhover on the footer logo*/
    FooterObj.logo.addEventListener("mouseover", () => {FooterObj.logoHoverAdd();});
    FooterObj.logo.addEventListener("mouseout", () => {FooterObj.logoHoverRemove();});

    /**Every time the user makes hover/unhover on any link in the footer*/
    FooterObj.links.forEach(element => {
        element.addEventListener("mouseover", () => {FooterObj.linkHoverAdd(element);});
        element.addEventListener("mouseout", () => {FooterObj.linkHoverRemove(element);});
    });

//////////Sider//////////

    /**Each time the user makes click on a slider radio button*/
    SliderObj.slider_radio_buttons.forEach (element => {
        element.addEventListener("click", () => {
            SliderObj.manualMoveSlider(element);
            clearInterval(AutoSlider);
            AutoSlider = setInterval(() => {SliderObj.autoMoveSlider()}, 5000);
        });
    });

    /**Every time the user makes hover/unhover on the slider radio buttons */
    SliderObj.slider_radio_buttons_label.forEach (element => {
        element.addEventListener("mouseover", () => {SliderObj.sliderButtonsHoverAdd(element);});
        element.addEventListener("mouseout", () => {SliderObj.sliderButtonsHoverRemove(element);});
    });

    /**Each time the user swipe the finger on the slider*/
    SliderObj.slider_images.forEach(element => {
        element.addEventListener("touchstart", evt => {SliderObj.sliderTouchStart(evt);});
        element.addEventListener("touchmove", evt => {SliderObj.sliderTouchMove(evt);});
        element.addEventListener("touchend", () => {
            SliderObj.sliderTouchEnd();
            clearInterval(AutoSlider);
            AutoSlider = setInterval(() => {SliderObj.autoMoveSlider()}, 5000);
        });
    });

//////////Main Content//////////

    IMCObj.products.forEach(element => {
        /**Each time the user makes click on a product in the main content*/
        element.addEventListener("click", () => {PurchaseTabObj.showPurchaseTab(element.parentElement);});

        /**Every time the user makes hover/unhover on a product in the main content*/
        element.addEventListener("mouseover", () => {IMCObj.productsHoverAdd(element);});
        element.addEventListener("mouseout", () => {IMCObj.productsHoverRemove(element);});
    });

//////////Purchase tab//////////

    PurchaseTabObj.close_button.addEventListener("click", () => {PurchaseTabObj.hiddenPurchaseTab();});

    /**Every time the user makes hover/unhover on the purchase close button*/
    PurchaseTabObj.close_button.addEventListener("mouseover", () => {PurchaseTabObj.buttonHoverAdd(PurchaseTabObj.close_button);});
    PurchaseTabObj.close_button.addEventListener("mouseout", () => {PurchaseTabObj.buttonHoverRemove(PurchaseTabObj.close_button);});

    /**Every time the user makes hover/unhover on the purchase submit image button*/
    PurchaseTabObj.image_button.addEventListener("mouseover", () => {PurchaseTabObj.buttonHoverAdd(PurchaseTabObj.image_button);});
    PurchaseTabObj.image_button.addEventListener("mouseout", () => {PurchaseTabObj.buttonHoverRemove(PurchaseTabObj.image_button);});

    /**Every time the user makes hover/unhover on the purchase button*/
    PurchaseTabObj.purchase_button.addEventListener("mouseover", () => {PurchaseTabObj.buttonHoverAdd(PurchaseTabObj.purchase_button);});
    PurchaseTabObj.purchase_button.addEventListener("mouseout", () => {PurchaseTabObj.buttonHoverRemove(PurchaseTabObj.purchase_button);});

    PurchaseTabObj.image_button.addEventListener("click", () => {
        PurchaseTabObj.image_input.click();
    });

    PurchaseTabObj.image_input.addEventListener("change", () => {
        PurchaseTabObj.loadImage();
    });

    PurchaseTabObj.service_tab.addEventListener("click", () => {
        PurchaseTabObj.hiddenServicesTab();
    });

    PurchaseTabObj.select_items.forEach(element => {
        element.addEventListener("change", () => {
            PurchaseTabObj.imgCharge();
        })
    });

    PurchaseTabObj.personalized_text.addEventListener("change", () => {
        PurchaseTabObj.personalized_text_container.innerHTML = PurchaseTabObj.personalized_text.value;
    });

//////////Document/Window//////////

    /**Whenever the user touch the device screen */
    document.addEventListener("touchstart", () => {

        HeaderObj.nav_button.classList.remove("nav_button_hover");
        HeaderObj.menu_items.forEach(element => {HeaderObj.menuItemsHoverRemove(element);});
        HeaderObj.info_items.forEach(element => {element.querySelectorAll(".header_link").forEach(element => {HeaderObj.contactLinkHoverRemove(element);});});

        FooterObj.logoHoverRemove();
        FooterObj.links.forEach(element => {FooterObj.linkHoverRemove(element);});
        
        IMCObj.products.forEach(element => {IMCObj.productsHoverRemove(element);});

        SliderObj.slider_radio_buttons_label.forEach (element => {SliderObj.sliderButtonsHoverRemove(element);});

        PurchaseTabObj.buttonHoverRemove(PurchaseTabObj.close_button);
        PurchaseTabObj.buttonHoverRemove(PurchaseTabObj.image_button);
        PurchaseTabObj.buttonHoverRemove(PurchaseTabObj.purchase_button);
    });

    /**Each time the page is resized*/
    window.addEventListener("resize", () => {
        HeaderObj.resizedPageMenu();
        SliderObj.sliderResize();
        IMCObj.mainContentResize();
        PurchaseTabObj.rezizeTab();
        PurchaseTabObj.resizeTabImage();
        PurchaseTabObj.personalizedImageResizing();
    });