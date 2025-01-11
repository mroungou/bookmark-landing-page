/* handling of the mobile menu */
const openMenu = () => {
    const mobileOverlay = document.getElementById('overlay')

    if (mobileOverlay.style.maxHeight ) {
        mobileOverlay.style.maxHeight = null
        mobileOverlay.style.opacity = null
    } else {
        mobileOverlay.style.maxHeight = `${mobileOverlay.scrollHeight}rem`
        mobileOverlay.style.opacity = `0.9`
    }
}

// function that handles the toogling of the FAQs
/* event is the object automatically passed to the event handler when the event is triggered */
const toggleFAQ = (event) => {
    const faq = event.currentTarget
    const panel = faq.nextElementSibling

    /* checks if the faq has the maxheight property if it does that means it's expanded and a 
    click will collapse. else if there is no maxheight then the faq is collapsed and a click
    will expand it */
    if (panel.style.maxHeight) {
        panel.style.maxHeight = null
    } else {panel.style.maxHeight = `${panel.scrollHeight}rem`}

    faq.classList.toggle('active-faq');
}



// gettting all the accordions
document.querySelectorAll('.accordion').forEach(faq => faq.addEventListener('click', toggleFAQ))
// adding event listener to the hambuger menu and close menu
document.querySelectorAll('.menu').forEach(btn => btn.addEventListener('click', openMenu))