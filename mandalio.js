//check if using mobile
let canvasWidth = 900
console.log('width:', screen.width, '|', 'height:', screen.height)
if (screen.height <= screen.width){
    canvasWidth = Math.floor(screen.height / 100) * 100
}
else {
    canvasWidth = Math.floor(screen.width / 100) * 100
}
if (canvasWidth > 900){
    canvasWidth = 900
}

document.documentElement.style.setProperty("--canvas-width", `${canvasWidth}px`);



// set canvas dimensions
document.getElementById('canvas-overlay-div').style.width = canvasWidth
document.getElementById('canvas-overlay-div').style.height = canvasWidth

document.getElementById('main-canvas').width = canvasWidth * 2
document.getElementById('main-canvas').height = canvasWidth * 2
document.getElementById('main-canvas').style.width = canvasWidth
document.getElementById('main-canvas').style.height = canvasWidth

document.getElementById('clickable-canvas').width = canvasWidth * 2
document.getElementById('clickable-canvas').height = canvasWidth * 2
document.getElementById('clickable-canvas').style.width = canvasWidth
document.getElementById('clickable-canvas').style.height = canvasWidth

document.getElementById('circle-overlay-canvas').width = canvasWidth
document.getElementById('circle-overlay-canvas').height = canvasWidth
document.getElementById('circle-overlay-canvas').style.width = canvasWidth
document.getElementById('circle-overlay-canvas').style.height = canvasWidth

document.getElementById('grid-overlay-canvas').width = canvasWidth
document.getElementById('grid-overlay-canvas').height = canvasWidth
document.getElementById('grid-overlay-canvas').style.width = canvasWidth
document.getElementById('grid-overlay-canvas').style.height = canvasWidth

// document.getElementById('canvas-div').style.height = canvasWidth



// here bgins functions for drawing overlays

const circleCTX = document.getElementById("circle-overlay-canvas").getContext("2d")
circleCTX.strokeStyle = 'white'
circleCTX.beginPath()
circleCTX.arc(canvasWidth / 2, canvasWidth / 2, canvasWidth / 6, 0, Math.PI * 2)
circleCTX.stroke()
circleCTX.beginPath()
circleCTX.arc(canvasWidth / 2, canvasWidth / 2, canvasWidth / 3, 0, Math.PI * 2)
circleCTX.stroke()
circleCTX.beginPath()
circleCTX.arc(canvasWidth / 2, canvasWidth / 2, canvasWidth / 2, 0, Math.PI * 2)
circleCTX.stroke()

const gridCTX = document.getElementById("grid-overlay-canvas").getContext("2d")
gridCTX.strokeStyle = 'white'
gridCTX.beginPath()
gridCTX.moveTo(canvasWidth / 6, 0)
gridCTX.lineTo(canvasWidth / 6, canvasWidth)
gridCTX.moveTo(canvasWidth / 3, 0)
gridCTX.lineTo(canvasWidth / 3, canvasWidth)
gridCTX.moveTo(canvasWidth / 2, 0)
gridCTX.lineTo(canvasWidth / 2, canvasWidth)
gridCTX.moveTo(canvasWidth / 1.5, 0)
gridCTX.lineTo(canvasWidth / 1.5, canvasWidth)
gridCTX.moveTo(canvasWidth / 1.2, 0)
gridCTX.lineTo(canvasWidth / 1.2, canvasWidth)

gridCTX.moveTo(0, canvasWidth / 6)
gridCTX.lineTo(canvasWidth, canvasWidth / 6)
gridCTX.moveTo(0, canvasWidth / 3)
gridCTX.lineTo(canvasWidth, canvasWidth / 3)
gridCTX.moveTo(0, canvasWidth / 2)
gridCTX.lineTo(canvasWidth, canvasWidth / 2)
gridCTX.moveTo(0, canvasWidth / 1.5)
gridCTX.lineTo(canvasWidth, canvasWidth / 1.5)
gridCTX.moveTo(0, canvasWidth / 1.2)
gridCTX.lineTo(canvasWidth, canvasWidth / 1.2)
gridCTX.closePath()
gridCTX.stroke()

// here begins the overlay buttons

const circleButton = document.getElementById("circle-overlay-button")
const circleCanvas = document.getElementById("circle-overlay-canvas")

circleButton.addEventListener("click", function () {
    circleCanvas.classList.toggle("canvas-invisible")
    circleButton.classList.toggle('overlay-button-litup')
})

const gridButton = document.getElementById("grid-overlay-button")
const gridCanvas = document.getElementById("grid-overlay-canvas")

gridButton.addEventListener("click", function () {
    gridCanvas.classList.toggle("canvas-invisible")
    gridButton.classList.toggle('overlay-button-litup')
})

gridButton.click()
circleButton.click()

// here begins the colour selection

let currentColour = 'rgb(243, 126, 33)'

let palletList = {
    'basic': ['#f37e21', '#29aae1', '#fbaf41', '#c7e9f3', '#b2d136', '#85328a', '#ec1563'],
    'sunset': ['#240002', '#6f0100', '#a53005', '#d97e0c', '#fec135'],
    'beach': ['#4d9ddb', '#66ffc6', '#ffe98c', '#ffa678', '#ff9595'],
    'winter': ['#433452', '#948ab3', '#decade', '#f4ccc3', '#fcefca', '#1126a5'],
    'verdure': ['#523906', '#535204', '#62760C', '#CDB30C', '#ebe695', '#271f2e'],
    'royal purple': ['#160040', '#4C0070', '#eae0cc', '#9A0680', '#c39115'],
    'coffee': ['#FFFBE9', '#E3CAA5', '#3C2A21', '#AD8B73'],
    'anime girl': ['#F6DEF6', '#c097c1', '#CFE5CF', '#f0bae0'],
    'wimbledon': ['#6cce56', '#d84f4f', '#FFE3E1', '#d5cbac'],
}


const colourOptionsDiv = document.getElementById("colour-options-div")
const palletSelector = document.getElementById('pallet-selector')

function addBWI(){ // adds black, white and invis.
    let nodeToAppend = document.createElement('button')
    nodeToAppend.classList.add('colour-circle')
    nodeToAppend.classList.add('colour-button')
    nodeToAppend.style.backgroundColor = 'rgb(0, 0, 0)'
    colourOptionsDiv.appendChild(nodeToAppend)
    if (currentColour == 'rgb(0, 0, 0)'){
        nodeToAppend.setAttribute('id', 'colour-circle-lit')
    }

    nodeToAppend = document.createElement('button')
    nodeToAppend.classList.add('colour-circle')
    nodeToAppend.classList.add('colour-button')
    nodeToAppend.style.backgroundColor = 'rgb(255, 255, 255)'
    colourOptionsDiv.appendChild(nodeToAppend)
    if (currentColour == 'rgb(255, 255, 255)'){
        nodeToAppend.setAttribute('id', 'colour-circle-lit')
    }

    nodeToAppend = document.createElement('button')
    nodeToAppend.classList.add('colour-circle')
    nodeToAppend.classList.add('colour-button')
    nodeToAppend.style.backgroundColor = 'rgb(50, 50, 50)'
    colourOptionsDiv.appendChild(nodeToAppend)
    if (currentColour == 'rgb(50, 50, 50)'){
        nodeToAppend.setAttribute('id', 'colour-circle-lit')
    }

    
}


//load initial colours
for (let colour of palletList['basic']){
    let nodeToAppend = document.createElement('button')
    nodeToAppend.classList.add('colour-circle')
    nodeToAppend.classList.add('colour-button')
    nodeToAppend.style.backgroundColor = colour
    colourOptionsDiv.appendChild(nodeToAppend)
}
addBWI()
colourOptionsDiv.firstElementChild.setAttribute('id', 'colour-circle-lit')

//here begins what happens when you click a colour button



function addNewPalletListener(){
    const colourButtons = document.querySelectorAll('.colour-button')
    for (let button of colourButtons){
        button.addEventListener('click', (event) => {
            for (let button2 of colourButtons){
                button2.removeAttribute('id')
            }
            currentColour = event.target.style.backgroundColor
            console.log(currentColour)
            event.target.setAttribute('id', 'colour-circle-lit')
            mainCTX.beginPath()
        })
    }
}


addNewPalletListener()

// here begins what happens when you click a new pallet
palletSelector.addEventListener('input', (e) => {
    while (colourOptionsDiv.firstChild) {
        colourOptionsDiv.removeChild(colourOptionsDiv.lastChild);
    }
    for (let colour of palletList[palletSelector.value]){
        let nodeToAppend = document.createElement('button')
        nodeToAppend.classList.add('colour-circle')
        nodeToAppend.classList.add('colour-button')
        nodeToAppend.style.backgroundColor = colour
        if (currentColour == nodeToAppend.style.backgroundColor){
            nodeToAppend.setAttribute('id', 'colour-circle-lit')
        }
        colourOptionsDiv.appendChild(nodeToAppend)
        
    }
    addBWI()
    addNewPalletListener()
})

//animation
//asdf


// here begins main canvas drawing

const mainCanvas = document.getElementById('main-canvas')
const clickableCanvas = document.getElementById('clickable-canvas')
const mainCTX = mainCanvas.getContext('2d')
mainCTX.imageSmoothingEnabled = false
// mainCTX.imageSmoothingQuality = 'high'
// mainCTX.globalCompositeOperation = "source-over"
mainCTX.fillStyle = ('rgb(50, 50, 50)')
mainCTX.fillRect(0, 0, canvasWidth * 2, canvasWidth * 2)
let rect
let isPainting = false
let points = []

let cursorSize = 10
const sizeSlider = document.getElementById('size-slider')
// clickableCanvas.style.setProperty("--cursor", "url('cursor10.png') 5 5")

function sizeSliderChanges(){
    cursorSize = sizeSlider.value

    // scales and sets custom cursor for canvas
    const tempCursorCanvas = document.createElement('canvas')
    const tempCursorCTX = tempCursorCanvas.getContext('2d')
    const bigCursorImage = document.createElement('img')
    bigCursorImage.src = 'cursor.png'
    bigCursorImage.addEventListener('load', (e) =>{
        tempCursorCanvas.width = sizeSlider.value
        tempCursorCanvas.height = sizeSlider.value
        tempCursorCTX.drawImage(bigCursorImage, 0, 0, sizeSlider.value, sizeSlider.value)
        const cursorAfterResize = tempCursorCanvas.toDataURL()
        clickableCanvas.style.setProperty("--cursor", `url(${cursorAfterResize}) ${sizeSlider.value / 2} ${sizeSlider.value / 2}`)
    })
    
}


// sizeSliderChanges()
clickableCanvas.style.setProperty("--cursor", "url('cursor10.png') 5 5")
sizeSlider.addEventListener('change', sizeSliderChanges)

// function getMousePosition(canvas, event) {
//     let rect = clickableCanvas.getBoundingClientRect();
//     let x = event.clientX - rect.left;
//     let y = event.clientY - rect.top;
//     console.log("Coordinate x: " + x, "Coordinate y: " + y);
// }


let undoState
let willFill = false
const mouseDownEvent = (event) => {
    mainCanvas.toBlob((blob) => {
        undoState = URL.createObjectURL(blob)
    })

    if (willFill){ //  bucket fill 
        let rect = clickableCanvas.getBoundingClientRect()
        const initialX = Math.round((event.clientX - rect.left) * 2)
        const initialY = Math.round((event.clientY - rect.top) * 2)

        const initialPixelData = mainCTX.getImageData(Math.round(initialX), Math.round(initialY), Math.round(initialX), Math.round(initialY)).data
        const colourToFill = `rgb(${initialPixelData[0]}, ${initialPixelData[1]}, ${initialPixelData[2]})`
        if (currentColour === `rgb(${initialPixelData[0]}, ${initialPixelData[1]}, ${initialPixelData[2]})`){
            return
        }


        let queue = [[initialX, initialY]]
        let cursorX = initialX
        let cursorY = initialY

        const pixelsMap = mainCTX.getImageData(0, 0, mainCanvas.width, mainCanvas.width)
        const pixelsMapData = pixelsMap.data
        const currentColourData = currentColour.slice(4, currentColour.length - 1).split(',')
        const RToPlace = Number(currentColourData[0])
        const GToPlace = Number(currentColourData[1])
        const BToPlace = Number(currentColourData[2])

        const checkColour = function(x, y){
            if ((x < 0) || (y < 0) || (x > mainCanvas.width) || (y > mainCanvas.height)){
                return false
            }
            
            let pixelPosition = ((Math.round(y) * mainCanvas.width) + Math.round(x)) * 4

            // console.log(`rgb(${pixelsMapData[pixelPosition]}, ${pixelsMapData[pixelPosition + 1]}, ${pixelsMapData[pixelPosition + 2]})`)
            return colourToFill === `rgb(${pixelsMapData[pixelPosition]}, ${pixelsMapData[pixelPosition + 1]}, ${pixelsMapData[pixelPosition + 2]})`
        }

        // and so it begins

        while (queue.length){
            cursorX = queue[queue.length - 1][0]
            cursorY = queue[queue.length - 1][1]
            queue.pop()

            while (checkColour(cursorX, cursorY - 1)){  // find top
                cursorY -= 1
            }

            // now starting from top go down and check sides whilst filling
            let reachLeft = false
            let reachRight = false
            while (true){
                //fill pixel
                let pixelPosition = ((cursorY * mainCanvas.width) + cursorX) * 4
                pixelsMapData[pixelPosition] = RToPlace
                pixelsMapData[pixelPosition + 1] = GToPlace
                pixelsMapData[pixelPosition + 2] = BToPlace
                pixelsMapData[pixelPosition + 3] = 255

                if (checkColour(cursorX - 1, cursorY)){  //check if left needs to be added to queue
                    if (!reachLeft){
                        queue.push([cursorX - 1, cursorY])
                        reachLeft = true
                    }
                }
                else{
                    reachLeft = false
                }

                // now right
                if (checkColour(cursorX + 1, cursorY)){  //check if right needs to be added to queue
                    if (!reachRight){
                        queue.push([cursorX + 1, cursorY])
                        reachRight = true
                    }
                }
                else{
                    reachRight = false
                }

                //break condition
                if (!checkColour(cursorX, cursorY + 1)){
                    break
                }
                cursorY += 1
            }
        }
    mainCTX.putImageData(pixelsMap, 0, 0) // place pixelsmap
    return
}

    
    isPainting = true

    if (event.shiftKey){  // straight line shift key draw
        isPainting = false
        points = []
        rect = clickableCanvas.getBoundingClientRect()
        let currentX = (event.clientX - rect.left) * 2
        let currentY = (event.clientY - rect.top) * 2

        mainCTX.lineWidth = cursorSize * 2
        mainCTX.lineCap = 'round'
        mainCTX.strokeStyle = currentColour

        mainCTX.moveTo(lastPointX, lastPointY)
        mainCTX.lineTo(currentX, currentY)
        mainCTX.stroke()

        mainCTX.moveTo(mainCanvas.width - lastPointX, lastPointY)
        mainCTX.lineTo(mainCanvas.width - currentX, currentY)
        mainCTX.stroke()

        mainCTX.moveTo(lastPointX, mainCanvas.width - lastPointY)
        mainCTX.lineTo(currentX, mainCanvas.width - currentY)
        mainCTX.stroke()

        mainCTX.moveTo(mainCanvas.width - lastPointX, mainCanvas.width - lastPointY)
        mainCTX.lineTo(mainCanvas.width - currentX, mainCanvas.width - currentY)
        mainCTX.stroke()

        if (moreAxes){
            mainCTX.moveTo(lastPointY, lastPointX)
            mainCTX.lineTo(currentY, currentX)
            mainCTX.stroke()

            mainCTX.moveTo(mainCanvas.width - lastPointY, lastPointX)
            mainCTX.lineTo(mainCanvas.width - currentY, currentX)
            mainCTX.stroke()

            mainCTX.moveTo(lastPointY, mainCanvas.width - lastPointX)
            mainCTX.lineTo(currentY, mainCanvas.width - currentX)
            mainCTX.stroke()

            mainCTX.moveTo(mainCanvas.width - lastPointY, mainCanvas.width - lastPointX)
            mainCTX.lineTo(mainCanvas.width - currentY, mainCanvas.width - currentX)
            mainCTX.stroke()
        }

        // mainCTX.closePath()

        lastLastPointX = lastPointX
        lastLastPointY = lastPointY
        lastPointX = currentX
        lastPointY = currentY
        
    }
}

clickableCanvas.addEventListener('mousedown', mouseDownEvent)
clickableCanvas.addEventListener('touchstart', mouseDownEvent)

let lastPointX
let lastPointY
let lastLastPointX
let lastLastPointY

const mouseUpEvent = (event) => {
    isPainting = false
    points = []
    rect = clickableCanvas.getBoundingClientRect()
    lastPointX = (event.clientX - rect.left) * 2
    lastPointY = (event.clientY - rect.top) * 2
    // mainCTX.beginPath()
}


clickableCanvas.addEventListener('mouseup', mouseUpEvent)
clickableCanvas.addEventListener('touchend', mouseUpEvent)

let moreAxes = false
clickableCanvas.addEventListener('mousemove', (event) => {
    if (!isPainting) {
        return
    }
    rect = clickableCanvas.getBoundingClientRect()
    let x = (event.clientX - rect.left) * 2
    let y = (event.clientY - rect.top) * 2
    points.push([x, y])
    // getMousePosition(mainCanvas, event)
    
    mainCTX.lineWidth = cursorSize * 2
    mainCTX.lineCap = 'round'
    mainCTX.strokeStyle = currentColour
    

    for (let i = 0; i < points.length - 1; i++){

        // mainCTX.beginPath()
        // mainCTX.moveTo(points[i][0], points[i][1])
        // mainCTX.quadraticCurveTo(points[i+2][0], points[i+2][1], points[i+4][0], points[i+4][1])
        // mainCTX.stroke()

        mainCTX.beginPath()
        mainCTX.moveTo(points[i][0], points[i][1])
        mainCTX.lineTo(points[i+1][0], points[i+1][1])  // quadratic curve to?
        mainCTX.stroke()

        mainCTX.beginPath()
        mainCTX.moveTo(mainCanvas.width - points[i][0], points[i][1])
        mainCTX.lineTo(mainCanvas.width - points[i+1][0], points[i+1][1])
        mainCTX.stroke()

        mainCTX.beginPath()
        mainCTX.moveTo(points[i][0], mainCanvas.width - points[i][1])
        mainCTX.lineTo(points[i+1][0], mainCanvas.width - points[i+1][1])
        mainCTX.stroke()

        mainCTX.beginPath()
        mainCTX.moveTo(mainCanvas.width - points[i][0], mainCanvas.width - points[i][1])
        mainCTX.lineTo(mainCanvas.width - points[i+1][0], mainCanvas.width - points[i+1][1])
        mainCTX.stroke()

        if (moreAxes){
            mainCTX.beginPath()
            mainCTX.moveTo(points[i][1], points[i][0])
            mainCTX.lineTo(points[i+1][1], points[i+1][0])
            mainCTX.stroke()

            mainCTX.beginPath()
            mainCTX.moveTo(mainCanvas.width - points[i][1], points[i][0])
            mainCTX.lineTo(mainCanvas.width - points[i+1][1], points[i+1][0])
            mainCTX.stroke()

            mainCTX.beginPath()
            mainCTX.moveTo(points[i][1], mainCanvas.width - points[i][0])
            mainCTX.lineTo(points[i+1][1], mainCanvas.width - points[i+1][0])
            mainCTX.stroke()

            mainCTX.beginPath()
            mainCTX.moveTo(mainCanvas.width - points[i][1], mainCanvas.width - points[i][0])
            mainCTX.lineTo(mainCanvas.width - points[i+1][1], mainCanvas.width - points[i+1][0])
            mainCTX.stroke()
        }

        mainCTX.closePath()
    }
})


clickableCanvas.addEventListener('touchmove', (event) => {
    if (event.touches.length == 1){
        event.preventDefault()
        event.stopPropagation()
    }
    else {
        isPainting = false
        return
    }

    if (!isPainting){
        return
    }

    const thisTouch = event.touches[0]
    rect = clickableCanvas.getBoundingClientRect()
    
    let x = (thisTouch.clientX - rect.left) * 2
    let y = (thisTouch.clientY - rect.top) * 2

    points.push([x, y])
    // getMousePosition(mainCanvas, event)
    
    mainCTX.lineWidth = cursorSize
    mainCTX.lineCap = 'round'
    mainCTX.strokeStyle = currentColour


    for (let i = 0; i < points.length - 1; i++){

        mainCTX.beginPath()
        mainCTX.moveTo(points[i][0], points[i][1])
        mainCTX.lineTo(points[i+1][0], points[i+1][1])  // quadratic curve to?
        mainCTX.stroke()

        mainCTX.beginPath()
        mainCTX.moveTo(mainCanvas.width - points[i][0], points[i][1])
        mainCTX.lineTo(mainCanvas.width - points[i+1][0], points[i+1][1])
        mainCTX.stroke()

        mainCTX.beginPath()
        mainCTX.moveTo(points[i][0], mainCanvas.width - points[i][1])
        mainCTX.lineTo(points[i+1][0], mainCanvas.width - points[i+1][1])
        mainCTX.stroke()

        mainCTX.beginPath()
        mainCTX.moveTo(mainCanvas.width - points[i][0], mainCanvas.width - points[i][1])
        mainCTX.lineTo(mainCanvas.width - points[i+1][0], mainCanvas.width - points[i+1][1])
        mainCTX.stroke()

        if (moreAxes){
            mainCTX.beginPath()
            mainCTX.moveTo(points[i][1], points[i][0])
            mainCTX.lineTo(points[i+1][1], points[i+1][0])
            mainCTX.stroke()

            mainCTX.beginPath()
            mainCTX.moveTo(mainCanvas.width - points[i][1], points[i][0])
            mainCTX.lineTo(mainCanvas.width - points[i+1][1], points[i+1][0])
            mainCTX.stroke()

            mainCTX.beginPath()
            mainCTX.moveTo(points[i][1], mainCanvas.width - points[i][0])
            mainCTX.lineTo(points[i+1][1], mainCanvas.width - points[i+1][0])
            mainCTX.stroke()

            mainCTX.beginPath()
            mainCTX.moveTo(mainCanvas.width - points[i][1], mainCanvas.width - points[i][0])
            mainCTX.lineTo(mainCanvas.width - points[i+1][1], mainCanvas.width - points[i+1][0])
            mainCTX.stroke()
        }

        mainCTX.closePath()
    }
})


document.body.addEventListener('mouseup', (event) => {
    isPainting = false
    points = []
})

document.body.addEventListener('touchend', (event) => {
    isPainting = false
    points = []
})

// fill, axes, save, clear and undo buttons

document.getElementById('fill-button').addEventListener('click', (event) => {
    willFill = (!willFill)
    if (willFill){
        document.getElementById('fill-button').style.background = 'rgb(70, 70, 70)'
        // document.body.style.setProperty('--body-cursor', 'url("bucket-fill-cursor.png")')
        // clickableCanvas.style.setProperty('--cursor', 'url("bucket-fill-cursor.png") 5')
    }
    else{
        document.getElementById('fill-button').style.background = 'rgb(50, 50, 50)'
    }
})


document.getElementById('axes-button').addEventListener('click', (e) => {
    moreAxes = !moreAxes
    if (moreAxes){
        console.log('more axes')
        document.getElementById('axes-button').firstElementChild.src = 'axes8.png'
    }
    else {
        console.log('less axes')
        document.getElementById('axes-button').firstElementChild.setAttribute('src', 'axes4.png')
    }
})
document.getElementById('axes-button').click()

document.getElementById('clear-button').addEventListener('click', (e) => {
    mainCTX.fillStyle = 'rgb(50, 50, 50)'
    mainCTX.fillRect(0, 0, canvasWidth * 2, canvasWidth * 2)
    isPainting = false
    points = []
    mainCTX.beginPath()
})

const undoButton = document.getElementById('undo-button')
undoButton.addEventListener('click', (e) => {
    lastPointX = lastLastPointX
    lastPointY = lastLastPointY
    mainCTX.fillStyle = 'rgb(50, 50, 50)'
    mainCTX.fillRect(0, 0, canvasWidth * 2, canvasWidth * 2)
    let imageToLoad = new Image()
    imageToLoad.src = undoState
    imageToLoad.addEventListener('load', (e) =>{
        mainCTX.drawImage(imageToLoad, 0, 0, canvasWidth * 2, canvasWidth * 2)
    })
    mainCTX.beginPath()
})


document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.key == 'z'){
        undoButton.click()
    }
})


const saveButton = document.getElementById('save-button')
saveButton.addEventListener('click', (e) => {
    // window.open(mainCanvas.toDataURL())
    const toDownload = document.createElement('a')
    toDownload.href = mainCanvas.toDataURL()
    toDownload.download = mainCanvas.toDataURL()
    document.body.appendChild(toDownload)
    toDownload.click()
    document.removeChild(toDownload)
})

// nav buttons

const aboutButton = document.getElementById('about-button')
aboutButton.addEventListener('click', (e) => {
    document.getElementById('info-div').scrollIntoView()
})

// scroll wheel
clickableCanvas.addEventListener('wheel', (event) => {
    event.preventDefault()
    event.stopPropagation()

    if (isPainting){
        return
    }

    if (event.deltaY < 0){
        sizeSlider.value = (Number(sizeSlider.value) + 2).toString()
    }
    else if (event.deltaY > 0){
        sizeSlider.value = (Number(sizeSlider.value) - 2).toString()
    }
    sizeSliderChanges()
    // return
})
