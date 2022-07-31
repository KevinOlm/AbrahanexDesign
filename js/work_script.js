//////////Imports/Obj creations//////////

    import Header from "./_header.js";
    import Footer from "./_footer.js";
    import WMC from "./_work_main_content.js";

    const HeaderObj = new Header();
    const FooterObj = new Footer();
    const WMCObj = new WMC();

//////////Initial Configurations//////////

    WMCObj.loadGallery();

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
    HeaderObj.nav_button.addEventListener("mouseover", () => {
        HeaderObj.buttonHoverAdd();
    });
    HeaderObj.nav_button.addEventListener("mouseout", () => {
        HeaderObj.buttonHoverRemove();
    });

    /**Every time the user makes hover/unhover on the menu items*/
    HeaderObj.menu_items.forEach(element => {
        element.addEventListener("mouseover", () => {
            HeaderObj.menuItemsHoverAdd(element);
        });
        element.addEventListener("mouseout", () => {
            HeaderObj.menuItemsHoverRemove(element);
        });
    });

    /**Every time the user makes hover/unhover on the contact links*/
    HeaderObj.info_items.forEach(element => {
        element.querySelectorAll(".header_link").forEach(element => {
            element.addEventListener("mouseover", () => {
                HeaderObj.contactLinkHoverAdd(element);
            });
            element.addEventListener("mouseout", () => {
                HeaderObj.contactLinkHoverRemove(element);
            });
        });
    });

//////////Footer//////////

    /**Every time the user makes hover/unhover on the footer logo*/
    FooterObj.logo.addEventListener("mouseover", () => {
        FooterObj.logoHoverAdd();
    });
    FooterObj.logo.addEventListener("mouseout", () => {
        FooterObj.logoHoverRemove();
    });

    /**Every time the user makes hover/unhover on any link in the footer*/
    FooterObj.links.forEach(element => {
        element.addEventListener("mouseover", () => {
            FooterObj.linkHoverAdd(element);
        });
        element.addEventListener("mouseout", () => {
            FooterObj.linkHoverRemove(element);
        });
    });

//////////Work Main Content//////////

    /**Closes the jumbo image*/
    WMCObj.close_button.addEventListener("click", () => {
        WMCObj.closeImage();
    });

    /**Every time the user makes hover/unhover on the close jumbo image button*/
    WMCObj.close_button.addEventListener("mouseover", () => {
        WMCObj.closeImageHoverAdd();
    });
    WMCObj.close_button.addEventListener("mouseout", () => {
        WMCObj.closeImageHoverRemove();
    });

    /**When the user clicks on the charge button*/
    WMCObj.button.addEventListener("click", () => {
        WMCObj.showImages();
        WMCObj.workResize();
        WMCObj.loadImages();
        WMCObj.refresListeners();
    });

    /**When the user does hover on the charge button*/
    WMCObj.button.addEventListener("mouseover", () => {
        WMCObj.buttonHoverAdd();
    });
    WMCObj.button.addEventListener("mouseout", () => {
        WMCObj.buttonHoverRemove();
    });

//////////Document/Window//////////

    /**Whenever the user touch the device screen */
    document.addEventListener("touchstart", () => {
        HeaderObj.nav_button.classList.remove("nav_button_hover");
        WMCObj.buttonHoverRemove();
        WMCObj.closeImageHoverRemove();
        FooterObj.logoHoverRemove();
        FooterObj.links.forEach(element => {
            FooterObj.linkHoverRemove(element);
        });
        HeaderObj.menu_items.forEach(element => {
            HeaderObj.menuItemsHoverRemove(element);
        });
        HeaderObj.info_items.forEach(element => {
            element.querySelectorAll(".header_link").forEach(element => {
                HeaderObj.contactLinkHoverRemove(element);
            });
        });
    });

    /**Each time the page is resized*/
    window.addEventListener("resize", () => {
        HeaderObj.resizedPageMenu();
        WMCObj.workResize();
        WMCObj.resizeJumboImage();
    });