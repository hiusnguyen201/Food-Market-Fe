document.addEventListener("DOMContentLoaded", () => {
    const swipperList = document.querySelector(".swipper-list");
    const itemList = document.querySelectorAll(".swipper-list .product-item");
    let isDragging = false, startX, startScrollLeft;

    swipperList.addEventListener("mouseenter", (e) => {
        isDragging = false;
    });

    swipperList.addEventListener("mousemove", (e) => {
        if(!isDragging) return;
        const speed = 1.2;
        swipperList.scrollLeft = startScrollLeft - ((e.pageX - startX) * speed);
        itemList.forEach((item) => {
            item.classList.add("disabled");
        })
    });
    
    swipperList.addEventListener("mousedown", (e) => {
        isDragging = true;
        swipperList.classList.add("dragging");
        startX = e.pageX;
        startScrollLeft = swipperList.scrollLeft;
    })
    
    swipperList.addEventListener("mouseup", (e) => {
        isDragging = false;
        swipperList.classList.remove("dragging");
        itemList.forEach((item) => {
            item.classList.remove("disabled");
        });
    })
})



