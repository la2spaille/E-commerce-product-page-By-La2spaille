const imgPrimary = document.querySelector('#w-primary-img')
const imgPrymarylightbox = document.querySelector('#img-primary-lightbox')
const lightbox = document.querySelector('#l-lightbox')
const lightboxClose = document.querySelector('#i-lightbox-close')
const menuBtn = document.querySelector('#i-menu')
const headerNav = document.querySelector('.w-header-nav')
const headerNavClose = document.querySelector('#i-header-nav-close')
const lightboxBg = document.querySelector('.l-lightbox-bg')
const next_s = document.querySelectorAll('.i-next')
const previous_s = document.querySelectorAll('.i-previous')
const allThumbnail = Array.from(document.querySelectorAll('.w-thumbnail-primary'))
const allThumbnailLightbox = Array.from(document.querySelectorAll('.w-thumbnail-lightbox'))
const addtoCartMinus = document.querySelector("#minus")
const addtoCartPlus = document.querySelector("#plus")
const miniCartEmpty = document.querySelector(".w-mini-cart--is-empty")
const basket = document.querySelector(".w-basket")
const miniCart = document.querySelector(".w-mini-cart")
const addToCart = document.querySelector("#btn-add-to-cart")
const imgPrimaryWrapper = document.getElementById('img-primary-wrapper')
const imgPrimaryLightboxWrapper = document.getElementById('img-primary-lightbox-wrapper')
var addPanierMulti = document.querySelector("#AddPanierMulti") 

// Var
var pu = document.querySelector("#mini-cart-product-pu") 
var qte = document.querySelector("#mini-cart-product-qte")  
var pill = document.querySelector('#basket-pill')
var pt  = document.querySelector("#mini-cart-product-pt") 
var del = document.querySelector(".w-mini-cart-product-delete")
var attribution
var position
var diff
// Initialisation
qte.textContent = 0
attribution = 0
position = 0
diff = (position - attribution)*100
// Function 
function ImageAttribution() {
    allThumbnail.forEach(thumbnail => {
        thumbnail.classList.remove('is-active')
    })
    allThumbnailLightbox.forEach(thumbnail => {
        thumbnail.classList.remove('is-active')
    })
    allThumbnail[attribution].classList.add("is-active")
    allThumbnailLightbox[attribution].classList.add("is-active")
    diff = (position - attribution)*100 + diff
    imgPrimaryWrapper.style.transform='translateX('+diff+'%)'
    imgPrimaryLightboxWrapper.style.transform='translateX('+diff+'%)'
    position = attribution
}
// Mobile Navigation Apparition
menuBtn.addEventListener('click', (e) => {
    headerNav.classList.add('is-active')
    lightboxBg.classList.add('is-active')
    e.stopPropagation()
})
headerNavClose.addEventListener('click', (e) => {
    headerNav.classList.remove('is-active')
    lightboxBg.classList.remove('is-active')
    e.stopPropagation()
})

// Lightbox Apparition
imgPrimary.addEventListener('click', (e) => {
    lightbox.classList.add('is-active')
    e.stopPropagation()
})
lightboxClose.addEventListener('click', (e) => {
    lightbox.classList.remove('is-active')
    e.stopPropagation()
})

//  Image Attribution
allThumbnail[attribution].classList.add("is-active")
allThumbnailLightbox[attribution].classList.add("is-active")
allThumbnail.forEach(thumbnail => {
    thumbnail.addEventListener('click', (e) => {
        attribution = allThumbnail.indexOf(thumbnail)
        ImageAttribution()
        e.stopPropagation()
    })
})
allThumbnailLightbox.forEach(thumbnail => {
    thumbnail.addEventListener('click', (e) => {
        attribution = allThumbnailLightbox.indexOf(thumbnail)
        ImageAttribution()
        e.stopPropagation()
    })
})
next_s.forEach(next => {
    next.addEventListener('click', (e) => {
        if (attribution <= 2){
            attribution += 1
        }
        ImageAttribution()
        e.stopPropagation()
    })
})
previous_s.forEach(previous => {
    previous.addEventListener('click', (e) => {
        if (attribution >= 1) {
            attribution -= 1
        }
        ImageAttribution()
        e.stopPropagation()
    })
})

// Add To Cart Input
addPanierMulti.textContent = 0
addtoCartMinus.addEventListener('click', (e) =>{ 
    if (addPanierMulti.textContent >= 1) {
        addPanierMulti.textContent = addPanierMulti.textContent - 1
    }
    e.stopPropagation()
})
addtoCartPlus.addEventListener('click', (e) =>{ 
    addPanierMulti.textContent = addPanierMulti.textContent - -1
    e.stopPropagation()
})

// Mini Cart products
addToCart.addEventListener('click', (e) => {
    if(addPanierMulti.textContent != 0) {
        miniCartEmpty.classList.add('is-no-empty')
        miniCartEmpty.classList.remove("true")
        pill.classList.add('is-active')
    }
    qte.textContent = qte.textContent - - addPanierMulti.textContent
    pill.textContent = qte.textContent
    pt.textContent = qte.textContent * pu.textContent
    e.stopPropagation()
})
del.addEventListener('click', (e) => {
    miniCartEmpty.classList.remove('is-no-empty')
    pill.classList.remove('is-active')
    qte.textContent = 0
    pill.textContent = qte.textContent
    pt.textContent = qte.textContent * pu.textContent
    e.stopPropagation()
})

// Mini Cart Apparition
let miniCartOpen = false
basket.addEventListener('click', (e) => {
    e.stopPropagation()
    e.preventDefault()
    miniCart.classList.add("is-active")
    miniCartEmpty.classList.add("true")
    miniCartOpen = true
    // window.addEventListener('click', (wE) => {
    //     let taarget = document.querySelector('.taarget')
    //         if (wE.target != taarget) {
    //             miniCart.classList.remove("is-active")
    //             miniCartEmpty.classList.remove("true")
    //         }
    
    // })
    
})
document.querySelector('section').addEventListener('click' , ()=> {
    if(miniCartOpen) {
        miniCart.classList.remove("is-active")
        miniCartOpen = false
    }
} )