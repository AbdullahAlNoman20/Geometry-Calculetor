function calculateTriangleArea(){


    const triangleBaseInput = document.getElementById('firstInputTriangle');
    const triangleBaseValue = triangleBaseInput.value;
    const base = parseFloat(triangleBaseValue)

    //  console.log(base);


    const triangleHeightInput = document.getElementById('secondInputTriangle');
    const triangleHeightValue = triangleHeightInput.value;
    const height = parseFloat(triangleHeightValue)
    
    // console.log(height);


    // area Calculate
    const triangleArea = 0.5 * base * height ;
    // console.log('Area is: ' , triangleArea);


    // result

    const triangleAreaSpan = document.getElementById('triangleResult');
    triangleAreaSpan.innerText = triangleArea;



}