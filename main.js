const sizes = [
    { width: 50, height: 40 },
    { width: 100, height: 80 },
    { width: 75, height: 60 },
    { width: 120, height: 50 },
    { width: 60, height: 90 }
]


const root = document.getElementById('wrapper')


function objToHtml(sizeObj) {
    const rootEl = document.createElement('div')
    rootEl.classList.add('box') 

    rootEl.style.width = `${sizeObj.width}px`
    rootEl.style.height = `${sizeObj.height}px`

    return rootEl
}



for (let i = 0; i < sizes.length; i++) {
    const currentSizeObj = sizes[i]
    const currentSizeHTML = objToHtml(currentSizeObj)
    root.appendChild(currentSizeHTML)
}