const point = document.querySelectorAll('.point')
const imageSlider = document.querySelectorAll('.image-slider')
const leftBtn = document.getElementById('left-btn')
const rightBtn = document.getElementById('right-btn')

point[0].classList.add('active-image')
imageSlider[0].classList.add('active-image')

let counter = 0;

for(let i=0; i<point.length; i++) {
    point[i].addEventListener('click', ()=> {
        for(let k=0; k<imageSlider.length; k++) {
            point[k].classList.remove('active-image')
            imageSlider[k].classList.remove('active-image')
        }
        counter = i;
        point[counter].classList.add('active-image');
        imageSlider[counter].classList.add('active-image');
    })
}

leftBtn.addEventListener('click', ()=> {
    for(let k=0; k<imageSlider.length; k++) {
        point[k].classList.remove('active-image')
        imageSlider[k].classList.remove('active-image')
    }
    counter--;
    if(counter<0) {
        counter = imageSlider.length-1
    }
    point[counter].classList.add('active-image');
    imageSlider[counter].classList.add('active-image');
})

rightBtn.addEventListener('click', ()=> {
    for(let k=0; k<imageSlider.length; k++) {
        point[k].classList.remove('active-image')
        imageSlider[k].classList.remove('active-image')
    }
    counter++;
    if(counter>=imageSlider.length) {
        counter = 0
    }
    point[counter].classList.add('active-image');
    imageSlider[counter].classList.add('active-image');
})