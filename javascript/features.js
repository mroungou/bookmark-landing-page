// getting the mini nav links
const miniLinks = document.querySelectorAll('.advantage')
const miniLinksArr = [...miniLinks]

const featuresInfo = [
    {
        header: 'Bookmark in one click',
        text: 'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.',
        alt: 'Simple Bookmarking',
        img: './images/illustration-features-tab-1.svg',
    },

    {
        header: 'Intelligent search',
        text: 'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.',
        alt: 'Speedy Searching',
        img: './images/illustration-features-tab-2.svg'
    },

    {
        header: 'Share your bookmarks',
        text: ' Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.',
        alt: 'Easy Sharing',
        img: './images/illustration-features-tab-3.svg'
    }
]

/* advantages div update handler */

const updateAdvantageDiv = (index = 0) => { //index used to access the featuresinfo array of objs
    const imgDiv = document.getElementById('advantage-img-div')
    const headerText = document.getElementById('header-text')
    const paragraph = document.getElementById('paragraph-text')

    imgDiv.innerHTML = ''
    headerText.innerText = ''
    paragraph.innerText = ''

    const img = document.createElement('img')
    img.src = featuresInfo[index].img
    img.alt = featuresInfo[index].alt
    imgDiv.appendChild(img)

    headerText.innerText = featuresInfo[index].header
    paragraph.innerText = featuresInfo[index].text

}

/* getting the mini nav and adding event listeners to them */
miniLinksArr.forEach(link => link.addEventListener('click', () => {
    console.log('wrokd')
    for (const link of miniLinksArr) {
        link.classList.remove('active')
    }

    link.classList.add('active')

    const linkIndex = miniLinksArr.indexOf(link)
    updateAdvantageDiv(linkIndex)
    
}))

updateAdvantageDiv()