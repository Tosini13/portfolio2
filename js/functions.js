//screenWidth
var screenWidth = screen.width;
var desktopWidth = 650;



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

// function skillsDescription() {
//     let skills = document.querySelectorAll("#skills table td");
//     for(let skill of skills){
//         console.log(skill);
//     }
//     console.log(skills);
// }
// skillsDescription();

function mobileMenu() {
    let hamburger = document.getElementById("hamburger");
    let menu = document.querySelector("header .menu");
    let headers = document.querySelectorAll("header .menu > ul > li > a");
    let subMenus = menu.querySelectorAll("header .menu > ul > li > ul");

    function closeAllSubMenus() {
        for (let subMenu of subMenus) {
            subMenu.classList.remove("openedSub");
        }
    }


    function menuToggle() {
        if (menu.classList.contains("opened")) {
            closeAllSubMenus();
            menu.classList.remove("opened");
        } else {
            menu.classList.add("opened");
        }
    }

    //Hamburger
    function hamburgerToggle() {
        if (hamburger.classList.contains("hamburgerX")) {
            closeAllSubMenus();
            hamburger.classList.remove("hamburgerX");
        } else {
            hamburger.classList.add("hamburgerX");
        }
    }

    function menuManager() {
        menuToggle();
        hamburgerToggle();
    }

    hamburger.addEventListener("click", () => {
        menuManager();
    });

    for (let header of headers) {
        let subMenu = header.nextElementSibling;
        header.addEventListener("click", () => {
            if (subMenu.classList.contains("openedSub")) {
                subMenu.classList.remove("openedSub");
            } else {
                closeAllSubMenus();
                subMenu.classList.add("openedSub");
            }
        });

        if (screenWidth > desktopWidth) {
            console.log(screenWidth);
            header.addEventListener("mouseenter", () => {
                closeAllSubMenus();
                // subMenu.classList.add("openedSubHover");
                subMenu.classList.add("openedSub");
            });
            header.parentElement.addEventListener("mouseleave", () => {
                // subMenu.classList.remove("openedSubHover");
                subMenu.classList.remove("openedSub");
            });
        }
    }

    var subBtns = document.querySelectorAll('nav.menu > ul > li > ul > li > a');
    for (let subBtn of subBtns) {
        subBtn.addEventListener("click", scrollMenuTo);
    }

    //MENU SCROLL
    var menuHeight = document.getElementsByTagName('nav')[0].offsetHeight;
    function scrollMenuTo() {
        if (this.getAttribute('data-section')) {
            let section = document.getElementById(this.getAttribute('data-section'));
            let addHeight = 0;
            if (screenWidth < desktopWidth) {
                menuManager();
            }
            window.scrollTo({ top: section.offsetTop, behavior: 'smooth' });
        }
    }
}
mobileMenu();


function popup() {
    let popups = document.querySelectorAll(".popup");

    for (let popup of popups) {
        let cancel = popup.querySelector(".cancel");
        cancel.addEventListener("click", () => {
            popup.classList.remove("openedPopup");
            setTimeout(() => {
                popup.classList = "";
                popup.classList.add("popup");
            }, 300);
        });
    }

    let textLinks = document.querySelectorAll(".popupBtn");
    let popupPhoto = document.getElementById("popupPhoto");

    for (let textLink of textLinks) {
        textLink.addEventListener("click", () => {
            if (popupPhoto.classList.contains("openedPopup")) {
                if (popupPhoto.querySelector(".popupTitle").innerHTML.localeCompare(textLink.dataset.title)) {
                    popupPhoto.classList.remove("openedPopup");
                    setTimeout(() => {
                        popupPhoto.querySelector("img").src = textLink.dataset.src;
                        popupPhoto.querySelector(".popupTitle").innerHTML = textLink.dataset.title;
                        popupPhoto.classList.add("openedPopup");
                    }, 300);
                } else {
                    popupPhoto.classList.remove("openedPopup");
                }
            } else {
                popupPhoto.classList.add("openedPopup");
                popupPhoto.querySelector("img").src = textLink.dataset.src;
                popupPhoto.querySelector(".popupTitle").innerHTML = textLink.dataset.title;
            }
        });
    }
}
popup();

function toggleMedia() {
    let dashboard = document.getElementById("menuMedia");
    let btn = dashboard.querySelector("#toggleMedia");
    let medias = dashboard.querySelector("ul");

    function mediaToggle() {
        if (medias.classList.contains("mediaClosed")) {
            medias.classList.remove("mediaClosed");
        } else {
            medias.classList.add("mediaClosed");
        }
    }

    function btnToggle() {
        if (btn.classList.contains("toggleMediaPlus")) {
            btn.classList.remove("toggleMediaPlus");
        } else {
            btn.classList.add("toggleMediaPlus");
        }
    }

    btn.addEventListener("click", () => {
        mediaToggle();
        btnToggle();
    });
}

toggleMedia();

function toggleProjects() {
    let projects = document.getElementById("projectsSlick");
    let btns = projects.querySelectorAll(".projectContent");
    console.log(btns);

    function closeAllDescs() {
        for (let btn of btns) {
            btn.classList.remove("projectContentOpened");
        }
    }

    for (let btn of btns) {
        let photo = btn.querySelector(".projectImg");
        photo.addEventListener("click", () => {
            // let desc = btn.nextSibling;
            if (btn.classList.contains("projectContentOpened")) {
                btn.classList.remove("projectContentOpened");
            } else {
                closeAllDescs();
                btn.classList.add("projectContentOpened");
            }
        });
        if (screen.width > 980) {
            btn.addEventListener("mouseover", () => {
                closeAllDescs();
                btn.classList.add("projectContentOpened");
            });
            btn.addEventListener("mouseleave", () => {
                closeAllDescs();
                btn.classList.remove("projectContentOpened");
            });
        }
    }

}

toggleProjects();

function updatePage() {
    document.getElementById("updatePage").addEventListener("click", () => {
        window.location.reload(true);
    });
}

updatePage();

//MENU

window.addEventListener("resize", function () {
    screenWidth = screen.width;
    console.log("resize");
    mobileMenu();//make a class!
});