
// Your javascript goes here
let ItemCounts = 0
let Progress = 0
const Spinner = "#656266"
let showHdNotify = false
let showPopup = false
let toggler = false
const hdnotify = document.querySelector('.hdnotify')
const profilepop = document.querySelector('.profilepop')
const HeaderBellIcon = document.querySelector('.hdbell')
const HeaderProfilePop = document.querySelector('.far-right')
const closeNotify = document.querySelector('.closeNotify')
const notifyContainer = document.querySelector('.notify')
const circle = document.querySelector('.circle')
const circleimg = document.querySelector('.circleimg')
const togMain = document.querySelector('.tog-main')
const mainContainer = document.querySelector('.main')
const numberCount = document.querySelector('.item-count')
const Loads = document.querySelector('.load>div')

HeaderBellIcon.addEventListener('click', () => {
    if (!hdnotify.classList.contains('active')) {
        hdnotify.classList.add('active')
        return hdnotify.style.display = 'block'
    } else {
        hdnotify.classList.remove('active')
        return hdnotify.style.display = 'none'
    }
})

HeaderProfilePop.addEventListener('click', () => {
    if (!profilepop.classList.contains('active')) {
        profilepop.classList.add('active')
        return profilepop.style.display = 'block'
    } else {
        profilepop.classList.remove('active')
        return profilepop.style.display = 'none'
    }
})

window.addEventListener('click', e => {
    if (hdnotify !== null) {
        if (!hdnotify.contains(e.target)) {
            hdnotify.classList.remove('active')
            hdnotify.style.display = 'none'
        }
    }
    if (profilepop !== null) {
        if (!profilepop.contains(e.target)) {
            profilepop.classList.remove('active')
            profilepop.style.display = 'none'
        }
    }
}, true)

closeNotify.addEventListener('click', () => {
    notifyContainer.style.display = "none"
})

function toggleCircle(e) {
    const parent = e.parentElement.parentElement;
    const isOpen = parent.classList.contains('stageactive');
    Progress += 20
    numberCount.innerHTML = ++ItemCounts
    Loads.style.width = Progress
    e.style.borderTop = `3.1px solid ${Spinner}`
    e.style.borderRight = `3.1px solid transparent`
    e.style.borderLeft = `3.1px solid ${Spinner}`
    e.style.borderBottom = `3.1px solid ${Spinner}`
    e.classList.add('circle-animate')
    setTimeout(() => {
        e.classList.remove('circle-animate')
        e.style.display = 'none'
        e.nextElementSibling.style.display = 'block'

        // Close all stages except the clicked one
        const allPanels = document.querySelectorAll('.stg');
        allPanels.forEach((p) => {
            if (p !== parent) {
                p.classList.add('stage');
                p.classList.remove('stageactive');
            }
        });
        parent.classList.toggle('stage', false);
        parent.classList.toggle('stageactive', true);
    }, 400)
}

function toggleCircleBack(e) {
    e.parentElement.children[0].style.border = `3.1px dashed ${Spinner}`
    e.parentElement.children[0].style.display = 'block'
    e.style.display = 'none'
    numberCount.innerHTML = --ItemCounts
    Progress -= 20
    Loads.style.width = Progress
}

togMain.addEventListener('click', (e) => {
    toggler = !toggler
    if (toggler) {
        e.target.src = `https://crushingit.tech/hackathon-assets/icon-arrow-up.svg`
        mainContainer.style.height = 'fit-content'
    } else {
        e.target.src = `https://crushingit.tech/hackathon-assets/icon-arrow-down.svg`
        mainContainer.style.height = '100px'
    }

})

function togglePanel(event) {
    const parent = event.parentElement.parentElement;
    const isOpen = parent.classList.contains('stageactive');

    // Close all stages except the clicked one
    const allPanels = document.querySelectorAll('.stg');
    allPanels.forEach((p) => {
        if (p !== parent) {
            p.classList.add('stage');
            p.classList.remove('stageactive');
        }
    });

    // Toggle the class for the clicked panel
    parent.classList.toggle('stage');
    parent.classList.toggle('stageactive', !isOpen);
}