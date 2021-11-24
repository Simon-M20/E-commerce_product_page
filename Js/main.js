import { swiper } from "./Modules/swiper.js"
import { addToCard } from "./Modules/addToCard.js"
import { lightBox } from "./Modules/lightBox.js"
import { menuShow } from "./Modules/showMenu.js"

document.addEventListener('DOMContentLoaded', e => {
    menuShow('.menu-btn', '.menu', '.menu-link'),
    addToCard('.plus', '.minus'),
    lightBox(),
    swiper
})