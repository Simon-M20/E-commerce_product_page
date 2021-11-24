export const addToCard = (plus, minus) => {
    const contador = document.getElementById('contador');
    const addBtn = document.getElementById('add');
    const countProducts = document.getElementById('count-product');
    const cartIcon = document.getElementById('icon-cart');
    const cartProduct = document.querySelector('.cart__show')
    const cardShow = document.querySelector('.show');
    
    const emptyCard = document.getElementById('empty-card');
    const addProducts = document.getElementById('add-cart');
    const checkoutBtn = document.getElementById('checkout');
    const bill = document.getElementById('bill');
    const deleteIcon = document.getElementById('delete')
    // console.log(contador);
    let numProduct = 0;

    function sacarCuentas () {
        let cuenta = 125.00 * numProduct;
        console.log(cuenta);
        return cuenta
    }
    
    document.addEventListener('click', e => {
        if (e.target === cartIcon) {
            cardShow.classList.toggle('is-active')

            if (numProduct === 0) {
                emptyCard.classList.remove('hidden');
                addProducts.classList.add('hidden');
                checkoutBtn.classList.add('hidden');
            } else {
                emptyCard.classList.add('hidden');
                addProducts.classList.remove('hidden');
                checkoutBtn.classList.remove('hidden');
            }
        }
        
        if (e.target.matches(`${plus} *`)) {
            numProduct++
            bill.textContent = '$' + sacarCuentas() + '.00';
            cartProduct.textContent = numProduct;
            contador.textContent = numProduct;
            countProducts.textContent = numProduct;
        }
        
        if (e.target.matches(`${minus} *`)) {
            numProduct--
            bill.textContent = '$' + sacarCuentas() + '.00';
            cartProduct.textContent = numProduct;
            contador.textContent = numProduct;
            countProducts.textContent = numProduct;
        }

        if (e.target === addBtn) {
            cartProduct.classList.add('is-active');
        }

        if (e.target === deleteIcon || e.target === checkoutBtn) {
            emptyCard.classList.remove('hidden');
            addProducts.classList.add('hidden');
            checkoutBtn.classList.add('hidden');
            contador.textContent = 0;
            cartProduct.textContent = 0;
            numProduct = 0;

            if (numProduct === 0) {
                emptyCard.classList.remove('hidden');
                addProducts.classList.add('hidden');
                checkoutBtn.classList.add('hidden');
            } else {
                emptyCard.classList.add('hidden');
                addProducts.classList.remove('hidden');
                checkoutBtn.classList.remove('hidden');
            }
        }

    })
}