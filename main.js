const selectElement = selector => {
    const element = document.querySelector(selector)
    if(element) return element;
    throw new Error(`Something went wrong, make sure that ${selector} exists or is typed correctly`)
};


const menuToggleIcon = selectElement('#menu-icon');

const toggleMenu = () =>{
    const mobileMenu = selectElement('#menu');
    mobileMenu.classList.toggle('activated');
    menuToggleIcon.classList.toggle('activated');
    
}
menuToggleIcon.addEventListener('click', toggleMenu);
