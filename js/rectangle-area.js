function calculateRectangleArea(){


    const rectangleBaseInput = document.getElementById('firstInputRectangle');
    const rectangleBaseValue = rectangleBaseInput.value;
    const w = parseFloat(rectangleBaseValue)

    //  console.log(base);


    const rectangleHeightInput = document.getElementById('secondInputRectangle');
    const rectangleHeightValue = rectangleHeightInput.value;
    const l = parseFloat(rectangleHeightValue)
    
    // console.log(height);


    // area Calculate
    const rectangleArea = w * l ;
    // console.log('Area is: ' , rectangleArea);


    // result

    const rectangleAreaSpan = document.getElementById('rectangleResult');
    rectangleAreaSpan.innerText = rectangleArea;



}