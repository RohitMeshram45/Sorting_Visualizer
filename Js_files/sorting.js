function swap(el1, el2){
    let temp = el1.style.height;
    el1.style.height =el2.style.height;
    el2.style.height=temp;
}


 function disableSortingBtn(){
    document.querySelector('.bubbleSort').disabled =true;
    document.querySelector('.insertionSort').disabled =true;
    document.querySelector('.selectionSort').disabled =true;
    document.querySelector('.mergeSort').disabled =true;
    document.querySelector('.quickSort').disabled =true;
 }
 function enableSortingBtn(){
    document.querySelector('.bubbleSort').disabled =false;
    document.querySelector('.insertionSort').disabled =false;
    document.querySelector('.selectionSort').disabled =false;
    document.querySelector('.mergeSort').disabled =false;
    document.querySelector('.quickSort').disabled =false;
 }

 function disableSizeSlider(){
    document.querySelector("#size").disabled=true;
}
function enableSizeSlider(){
    document.querySelector("#size").disabled=false;
}

 function disableNewArrayBtn(){
    document.querySelector(".newArray").disabled=true;
 }
 function enableNewArrayBtn(){
    document.querySelector(".newArray").disabled=false;
 }

// Used in async function so that we can so animations of sorting, takes input time in ms (1000 = 1s)

function waitforme(milisec){
    return new Promise(resolve => { 
        setTimeout(() => { resolve('') }, milisec); 
    }) 
}

// speed input 

let arraySize = document.querySelector('#size');

arraySize.addEventListener('input',()=>{
    console.log(arraySize.value);

    createNewArray(parseInt(arraySize.value))
})

//  size input
let delay = 260;

let delayElement = document.querySelector('#speed');

delayElement.addEventListener('input',()=>{
    console.log(delayElement.value);
    // console.log(typeof(delayElement.value))    --> generate in string
    delay=320-parseInt(delayElement.value) // convert string int Integer
})

let array =[];

createNewArray();


function createNewArray(noOfBars = 60){
    deleteChild()
    array =[];

    for (let i = 0; i < noOfBars; i++) {      
        array.push(Math.floor(Math.random()*250)+1)
    }
    console.log(array);

    const bars = document.querySelector("#bars");

    for (let i = 0; i < noOfBars; i++) {
        const bar = document.createElement('div');

        bar.style.height =`${array[i]*2}px`
        bar.classList.add('bar')
        bar.classList.add('flex-item')
        bar.classList.add(`barNo${i}`)

        bars.append(bar);
    }
}


function deleteChild(){
    const bar = document.querySelector("#bars");
    bar.innerHTML='';
}

const newArray = document.querySelector('.newArray');

newArray.addEventListener('click',()=>{
    enableSortingBtn();
    enableSizeSlider();
    createNewArray(arraySize.value);
})
