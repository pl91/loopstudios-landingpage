var nav=document.querySelector(".header__nav"),links=document.querySelector(".header__links");function screenWidth(){screen.width>900?links.className="links header__links flex":(links.clasName+=" hide",nav.className="header__nav")}function mobileMenu(){"header__nav"===nav.className?(nav.className+=" mobile-menu",links.className+=" heading heading--300 flex"):(nav.className="header__nav",links.className="header__links hide")}function reDirect(){screen.width<=900&&(nav.className="header__nav",links.className="links header__links hide")}
//# sourceMappingURL=index.33c11a8d.js.map
