const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) =>{
        console.log(entry)
        if(entry.isIntersecting){
            const animationType = entry.target.getAttribute('data-animation');

            switch(animationType){
                case 'slide-left':
                    entry.target.classList.add('slide-left');
                case 'scaleUp':
                    entry.target.classList.add('scaleUp');
                case 'slide-right':
                    entry.target.classList.add('slide-right');
                case 'slide-up':
                    entry.target.classList.add('slide-up');
            }

        }
    })
})

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el))
const leftHiddenElements = document.querySelectorAll('.hidden-left');
leftHiddenElements.forEach((el) => observer.observe(el))
const rightHiddenElements = document.querySelectorAll('.hidden-right');
rightHiddenElements.forEach((el) => observer.observe(el))
const scaleHiddenElements = document.querySelectorAll('.hidden-scale');
scaleHiddenElements.forEach((el) => observer.observe(el))
const downHiddenElements = document.querySelectorAll('.hidden-down');
downHiddenElements.forEach((el) => observer.observe(el))