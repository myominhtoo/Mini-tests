var previewContainer = document.querySelector("#previews-container");
var previews = previewContainer.querySelectorAll(".preview");
var products = document.querySelectorAll(".products-container .product");

// console.log(previews);
// console.log(products);

products.forEach(product => {
    product.addEventListener("click", () => {
        previewContainer.classList.add("show");
        let name = product.getAttribute("data-name");
        previews.forEach(preview => {
            let target = preview.getAttribute("data-target");
            if(name == target){
                preview.classList.add("show");
            }
        });
    });
});

previews.forEach(preview => {
    let close = preview.querySelector(".close");
    close.addEventListener("click", () => {
        previewContainer.classList.remove("show");
        preview.classList.remove("show");
    });
});

// below is for close box while clicking free place
previewContainer.addEventListener("click", () => {
    previewContainer.classList.remove("show");
    previewContainer.querySelectorAll(".preview").forEach(preview => {
        preview.classList.remove("show");
    });
});
