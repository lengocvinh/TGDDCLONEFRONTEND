const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const adressBtn = $('#adress-form')
const adressClose = $('#adress-close')
const rightBtn = $('.fa-chevron-right')
const leftBtn = $('.fa-chevron-left')
const imgNumber = $$('.slider-content-top img')
const tabs = $$('.slider-content-bottom li')
const tabActive = $('.active')
let index = 0;


adressBtn.addEventListener("click" , function() {
    $('.adress-form').style.display = "flex"
})
adressClose.addEventListener("click" , function() {
    $('.adress-form').style.display = "none"
})
rightBtn.addEventListener("click" , function() {
    index+=1
    if(index >= imgNumber.length - 1) {
        index = 0
    }
$('.slider-content-top').style.right = index *100+"%"
})
leftBtn.addEventListener("click" , function() {
    index-=1
    if(index < 0) {
        index = imgNumber.length - 2;
    }
$('.slider-content-top').style.right = index *100+"%"
})
tabs.forEach(function(tab , index){
    tab.addEventListener("click" , function() {
        removeActive()
    $('.slider-content-top').style.right = index *100+"%"
        tab.classList.add("active")

    })
})
function removeActive(){
    const tabActive = $('.active')
    tabActive.classList.remove("active")


}
function tabAuto() {
    index+=1
    if(index >= imgNumber.length - 1) {
        index = 0
    }
    removeActive()
    $('.slider-content-top').style.right = index *100+"%"
    tabs[index].classList.add("active")

}
setInterval(tabAuto , 5000)
// Slider Product
