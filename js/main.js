window.addEventListener('scroll', ()=>{
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0)
})

//show/hide faq answer
const faqs = document.querySelectorAll('.faq');
faqs.forEach(faq => {
    faq.addEventListener('click', ()=>{
        faq.classList.toggle('open');

        //change icon
        const icon = faq.querySelector('.faq-icon i');
        if(icon.className === 'uli uli-plus'){
            icon.className = 'uli uli-minus'
        }
        else{
            icon.className = 'uli uli-plus'
        }
    })
})


//show/hide nav menu
const menu = document.querySelector('.nav_menu');
const menuBtn = document.querySelector('.open-menu-btn');
const closeBtn = document.querySelector('.close-mennu-btn');

menuBtn.addEventListener('click', ()=>{
    menu.style.display = 'flex';
})

