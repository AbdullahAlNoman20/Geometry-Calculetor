function calculateRhombusArea(){


    const rhombusBaseInput = document.getElementById('firstInputRhombus');
    const rhombusBaseValue = rhombusBaseInput.value;
    const d1 = parseFloat(rhombusBaseValue)

    //  console.log(base);


    const rhombusHeightInput = document.getElementById('secondInputRhombus');
    const rhombusHeightValue = rhombusHeightInput.value;
    const d2 = parseFloat(rhombusHeightValue)
    
    // console.log(height);


    // area Calculate
    const rhombusArea = 0.5 * d1 * d2 ;
    // console.log('Area is: ' , rhombusArea);


    // result

    const rhombusAreaSpan = document.getElementById('rhombusResult');
    rhombusAreaSpan.innerText = rhombusArea;



}