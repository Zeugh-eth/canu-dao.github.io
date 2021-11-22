// const menuItems = [...document.getElementsByClassName("menu-item")];

// menuItems.forEach((item) =>
//     item.addEventListener("click", () => setActiveSection(item.id))
// );

// function removeAllActiveSections() {
//     menuItems.forEach((element) => {
//         element.classList.remove("active-section");
//     });
// }

// function setActiveSection(menuItemID) {
//     removeAllActiveSections();
//     const navItem = document.getElementById(menuItemID);
//     navItem.classList.add("active-section");
// }

// // scroll observer --------

// function sectionsObserverCallback(entries) {
//     entries.forEach((entry) => {
//         const {
//             target: { id },
//             isIntersecting,
//         } = entry;
//         if (isIntersecting) {
//             const navItems = document.querySelectorAll(`a[href='#${id}']`);
//             const navItemId = navItems[0]?.id;
//             setActiveSection(navItemId);
//         }
//     });
// }

// const observerSections = new IntersectionObserver(sectionsObserverCallback, {
//     root: null,
//     threshold: 0.5,
// });

// const sections = [...document.querySelectorAll(".js-content-section")];
// sections.forEach((section) => observerSections.observe(section));

// window.addEventListener("scroll", function (e) {
//     lastKnownScrollPosition = window.scrollY;
//     if (lastKnownScrollPosition <= 0) {
//         document
//             .getElementById("header")
//             .classList.remove("header-menu-animation");
//     } else {
//         document
//             .getElementById("header")
//             .classList.add("header-menu-animation");
//     }
// });

function showMenu() {
    let headerNav = document.getElementById("header-nav");
    if (headerNav.style.display === "none") {
        headerNav.style.display = "flex";
        document.getElementById("menu-icon").style.borderBottomLeftRadius =
            "0px";
    } else {
        hideMenu(headerNav);
    }
}

function hideMenu(headerNav) {
    headerNav.style.display = "none";
    document.getElementById("menu-icon").style.borderBottomLeftRadius = "10px";
}
