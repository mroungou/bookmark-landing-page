/* form handling */
const validationMessage = {
    'empty': 'Please enter an email address',
    'invalid': 'Whoops, make sure it’s an email'
}

const validateEmail = email => {
    const regex = /[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}/gm

    if (!regex.test(email.value)) {
        hasError(email, validationMessage.invalid)
    } else if (email.value === '') {
        hasError(email, validationMessage.empty)
    } else {
        hasNoError(email)
    }
}

/* error functions */

const hasError = (element, message) => {

    const parentElement = element.parentElement

    if (!parentElement.querySelector('.error-div')) {
        const errorDiv = document.createElement('div')
        errorDiv.className = 'error-div'
        errorDiv.innerText = message
        parentElement.classList.add('has-error')
        
        parentElement.append(errorDiv)
    }

    parentElement.classList.add('has-error')
}

const hasNoError = element => {

    const parentElement = element.parentElement
    const errorDiv = parentElement.querySelector('.error-div')

    if (errorDiv) {
        parentElement.classList.remove('.has-error')
        errorDiv.remove()
    }
}

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
// handling the form

document.getElementById('form').addEventListener('submit', (e) => {
    const emailInput = document.getElementById('email')

    e.preventDefault()
    validateEmail(emailInput)
})