function photo() {
    let myPhoto = document.getElementById("myPhoto");
    myPhoto.addEventListener("mouseover", () => {
        myPhoto.setAttribute("src", "images/meSmileLess.jpg");
    });
    myPhoto.addEventListener("mouseleave", () => {
        myPhoto.setAttribute("src", "images/meLess.jpg");
    });
}

// photo();

function mobileMenu() {
    let hamburger = document.getElementById("hamburger");
    let menu = document.querySelector("header nav .menu");
    let headers = document.querySelectorAll("header nav .menu > li > a");
    let subMenus = menu.querySelectorAll("header nav .menu > li > ul");

    function closeAllSubMenus() {
        for (let subMenu of subMenus) {
            subMenu.classList.remove("openedSub");
        }
    }

    hamburger.addEventListener("click", () => {
        if (menu.classList.contains("opened")) {
            closeAllSubMenus();
            menu.classList.remove("opened");
        } else {
            menu.classList.add("opened");
        }
    });

    for (let header of headers) {
        header.addEventListener("click", () => {
            let subMenu = header.nextElementSibling;
            if (subMenu.classList.contains("openedSub")) {
                subMenu.classList.remove("openedSub");
            } else {
                closeAllSubMenus();
                subMenu.classList.add("openedSub");
            }
        });
    }
}
mobileMenu();