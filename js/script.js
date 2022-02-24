const OpenKor = document.querySelector('.open'),
     buttons = document.querySelectorAll('button'),
     Products = document.querySelectorAll('.product');


function creatCart(){
    const newShop = document.createElement('div'),
         field = document.createElement('div'),
         heading = document.createElement('h2'),
         closeBtn = document.createElement('button');

    newShop.classList.add('cart');
    field.classList.add('cart-field');
    closeBtn.classList.add('close');

    heading.textContent = 'Your basket';
    closeBtn.textContent = 'Close';

    document.body.appendChild(newShop)
    newShop.appendChild(heading)
    newShop.appendChild(field)
    newShop.appendChild(closeBtn)
}
creatCart()

let newShop = document.querySelector('.cart'),
    closeBtn = document.querySelector('.close'),
    field = document.querySelector('.cart-field');

OpenKor.addEventListener("click", () => {
    newShop.style.display = 'block'
})

closeBtn.addEventListener('click', () => {
    newShop.style.display = 'none'
})


buttons.forEach((item, i) => {

    item.addEventListener( 'click', () => {
        let cloneItem = Products[i].cloneNode(true),
            btn = cloneItem.querySelector('button');

        btn.remove()
        field.appendChild(cloneItem)
        Products[i].remove()
    })
})