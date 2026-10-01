const sizes = [
    { width: 50, height: 40 },
    { width: 100, height: 80 },
    { width: 75, height: 60 },
    { width: 120, height: 50 },
    { width: 60, height: 90 }
]


const root = document.getElementById('wrapper')


function objToHtml(sizeObj) {
    const root_1 = document.createElement('div')
    root_1.classList.add('box') 

    root_1.style.width = `${sizeObj.width}px`
    root_1.style.height = `${sizeObj.height}px`

    return root_1
}



for (let i = 0; i < sizes.length; i++) {
    const razmer = sizes[i]
    const blok = objToHtml(razmer)
    root.appendChild(blok)
}
