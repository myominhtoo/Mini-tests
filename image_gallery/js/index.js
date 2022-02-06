//action to change main image by clicking menu>images
menuImages.forEach(image => {
    image.addEventListener("click", () => {
        let src = image.getAttribute("src");//getting src attribute of clicked element
        image.src = `${img.src}`;
        img.src = `${src}`;
    });
});
//current index of main image
var currentIndex = images.indexOf(img.getAttribute("src"));
//left and right arrow actions
leftArrow.onclick = () => {
    currentIndex--;

    if(currentIndex < 0){
        currentIndex = images.length - 1;
        img.src = images[currentIndex];
    }else{
        img.src = images[currentIndex];
    }
}

rightArrow.onclick = () => {
    currentIndex++;
    if(currentIndex == images.length){
        currentIndex = 0;
        img.src = images[currentIndex];
    }else{
        img.src = images[currentIndex];
    }
}
