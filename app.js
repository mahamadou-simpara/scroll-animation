const scrollElements = document.querySelectorAll('.scroll');



const Handlescrolling = () => {
console.log(window.innerHeight);

const innerHeight = (window.innerHeight * 4 / 5)

for (let i = 0; i < scrollElements.length; i++){
    // console.log(scrollElements[i]);
    scrollElements[i].getBoundingClientRect();

    console.log(scrollElements[i].getBoundingClientRect().top);

    const elementHeight = scrollElements[i].getBoundingClientRect().top

    if(innerHeight > elementHeight){
        scrollElements[i].classList.add('show')
    }else{
        scrollElements[i].classList.remove('show')
    }
}

}

window.addEventListener('scroll', Handlescrolling)

// Handlescrolling()