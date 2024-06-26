const DecreaseQuantityProduct = () => {
    const input = document.querySelector("input[name='quantity']");
    if(+input.value <= 1) {
        input.value = 1;
    } else {
        +input.value--;
    }
    return;
}

const IncreaseQuantityProduct = () => {
    const input = document.querySelector("input[name='quantity']");
    console.log(input);
    +input.value++;
}
