function calculateParallelogramArea(){


    const parallelogramBaseInput = document.getElementById('firstInputParallelogram');
    const parallelogramBaseValue = parallelogramBaseInput.value;
    const b = parseFloat(parallelogramBaseValue)

    //  console.log(base);


    const parallelogramHeightInput = document.getElementById('secondInputParallelogram');
    const parallelogramHeightValue = parallelogramHeightInput.value;
    const h = parseFloat(parallelogramHeightValue)
    
    // console.log(height);


    // area Calculate
    const parallelogramArea = b * h ;
    // console.log('Area is: ' , parallelogramArea);


    // result

    const parallelogramAreaSpan = document.getElementById('parallelogramResult');
    parallelogramAreaSpan.innerText = parallelogramArea;



}