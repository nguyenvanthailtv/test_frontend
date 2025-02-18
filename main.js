const products = document.querySelectorAll('.product-item__top')
products.forEach((item) => {
    item.addEventListener('click', (e) => {
        const productShow = document.querySelector('.product-item.show')
        if(productShow) productShow.classList.remove('show')
        item.parentElement?.classList.toggle('show')
    })
})