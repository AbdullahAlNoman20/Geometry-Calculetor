function calculateEllipseArea(){


    const ellipseBaseInput = document.getElementById('firstInputEllipse');
    const ellipseBaseValue = ellipseBaseInput.value;
    const a = parseFloat(ellipseBaseValue)

    //  console.log(base);


    const ellipseHeightInput = document.getElementById('secondInputEllipse');
    const ellipseHeightValue = ellipseHeightInput.value;
    const b = parseFloat(ellipseHeightValue)
    
    // console.log(height);


    // area Calculate
    const ellipseArea = 3.14 * a * b ;
    // console.log('Area is: ' , ellipseArea);


    // result

    const ellipseAreaSpan = document.getElementById('ellipseResult');
    ellipseAreaSpan.innerText = ellipseArea;



}