const navBarEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const menuHamMenu = document.querySelector('.menu-ham-icon')
const mobileMenu = document.querySelector('.mobile-menu')
const carritoCompra = document.querySelector('.navbar-shopping-cart')
const asideCarrito = document.querySelector('.product-detail')

navBarEmail.addEventListener('click', mostrarMenuEmail)
menuHamMenu.addEventListener('click', mostrarMenuHamb)
carritoCompra.addEventListener('click', mostrarCarrito)

//esta funcion saca y pone la clase inactive
function mostrarMenuEmail() {
    const isAsideCarritoClosed = asideCarrito.classList.contains('inactive')
    if (isAsideCarritoClosed){
        desktopMenu.classList.toggle('inactive')
    }else{
        asideCarrito.classList.add('inactive')
    }
    
}
function mostrarMenuHamb() {
    const isAsideCarritoClosed = asideCarrito.classList.contains('inactive')
    if (isAsideCarritoClosed){
        mobileMenu.classList.toggle('inactive')
       
       }else{
        asideCarrito.classList.add('inactive')
       }
}
function mostrarCarrito(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive')
    const isMenuMailClosed = desktopMenu.classList.contains('inactive')
   
 
   if (isMobileMenuClosed && isMenuMailClosed ){
    asideCarrito.classList.toggle('inactive')
   
   }else{
    mobileMenu.classList.add('inactive')
    desktopMenu.classList.add('inactive')
   }
    
}