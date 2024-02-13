function calculatePentagonArea(){


    const pentagonBaseInput = document.getElementById('firstInputPentagon');
    const pentagonBaseValue = pentagonBaseInput.value;
    const p = parseFloat(pentagonBaseValue)

    //  console.log(base);


    const pentagonHeightInput = document.getElementById('secondInputPentagon');
    const pentagonHeightValue = pentagonHeightInput.value;
    const b = parseFloat(pentagonHeightValue)
    
    // console.log(height);


    // area Calculate
    const pentagonArea = 0.5 * p * b ;
    // console.log('Area is: ' , pentagonArea);


    // result

    const pentagonAreaSpan = document.getElementById('pentagonResult');
    pentagonAreaSpan.innerText = pentagonArea;



}