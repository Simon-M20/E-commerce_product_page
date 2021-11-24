export const lightBox = () => {
    const productImg = document.querySelectorAll('.main__products');
    const lightBox__container = document.querySelector('.lightbox');
    const lightBoxImg = document.querySelector('.lightbox__img');
    const closeIcon = document.querySelector('.close img')
    console.log(closeIcon);

    productImg.forEach(el => {
        el.addEventListener('click', e => {
            // console.log(e.target);
            document.body.classList.add('no-scroll')
            lightBox__container.classList.add('move');
            lightBoxImg.classList.add('showImg')
        })
    });

    document.addEventListener('click', e => {
        if (e.target === closeIcon) {
            document.body.classList.remove('no-scroll')
            lightBox__container.classList.remove('move');
            lightBoxImg.classList.remove('showImg')
            
        }
    })


}