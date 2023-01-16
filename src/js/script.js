const unread = document.querySelectorAll('[data-status="unread"]')
const count = document.querySelector('.notification__count')

const markAllRead = () => {
    count.innerText = 0

    unread.forEach(feed => {
        feed.dataset.status = 'read'
    })
}

const attribution = document.querySelector('.attribution')

setInterval(() => {
    attribution.classList.add('attrAnimation')
}, 5000)