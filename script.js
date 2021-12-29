// navigation
// 1. memunculkan navigasi pada tampilan mobile
let burgerBtn = document.querySelector('.burger-button input');
let navLinkContainer = document.querySelector('#navbar .container');

burgerBtn.addEventListener('click', () => navLinkContainer.classList.toggle('nav-active'))

// 2. membuat efek pada link pada tampilan web
let link = document.querySelectorAll('.link');

function activeClass(){
    link.forEach( (item) =>
        item.classList.remove('active')
    );

    this.classList.add('active');
}

link.forEach( (item) =>
    item.addEventListener('mouseover', activeClass)
)



// jumbotron
// 1. slider pada gambar jumbo
let slider = document.querySelectorAll('.jumbotron .slider .slide');
let index = 0;

let autoSlide = setInterval(function(){
    
    for(let i = 0; i < slider.length; i++){
        if(i == slider.length){
            i = 0
        }
        slider[i].classList.remove('slide-active');
    }

    index++;
    if(index == slider.length){
        index = 0;
    }
    slider[index].classList.add('slide-active');

}, 3000)



// Gallery / Portfolio
// 1. mengubah display displayImg saat gambar thumb di click / lightbox
let thumbnails = document.querySelectorAll('.thumb');
let displayImgContainer = document.querySelector('.displayImg-container');
let displayImg = document.querySelector('.displayImg');


thumbnails.forEach(function(thumb){
    thumb.addEventListener('click', function(e){
        displayImgContainer.classList.add('targetted');
        displayImg.src = e.target.src;
    })
})

// 2. mengubah display saat tombol close di click
let closeBtn = document.querySelector('#gallery .close');

closeBtn.addEventListener('click', function(){
    displayImgContainer.classList.remove('targetted')
})



// Contact 
// 1. Menjalankan Calculator
let displayNumber = document.querySelector('.display-number');
let calculatorButtons = document.querySelectorAll('.calculator .button');

calculatorButtons.forEach(function(button){
    button.addEventListener('click', function(e){
        switch(e.target.innerText){
            case '↩' : 
                displayNumber.innerText = displayNumber.innerText.slice(0 , -1);
                break;

            case 'C' : 
                displayNumber.innerText = '';
                break;

            case '=' : 
                if(displayNumber.innerText == ''){
                    displayNumber.innerText = 'ERROR !'
                }
                try{
                    displayNumber.innerText = eval(displayNumber.innerText);
                    break;
                } catch{
                    displayNumber.innerText = 'ERROR !'
                    break;
                }
                
            default : 
                displayNumber.innerText += e.target.innerText;
                break;
        }
    })
})



//  melakukan scroll pada navigasi ke elemen yang di tuju
$('.page-scroll').on('click', function(e){
    let tujuan = $(this).attr('href');
    // let elemenTujuan = $(tujuan);
    
    $('html,body').animate({
        scrollTop : $(tujuan).offset().top - 80
    }, 500)

    e.preventDefault()
})


// Melakukan Aksi ketika window di scroll
$(window).scroll(function(){
    let wScroll = $(this).scrollTop();
    let aboutTop = $('#about').offset().top - 300;
    let pAbout = $('#about p')


    if(wScroll > aboutTop){
        $(pAbout).addClass('pMuncul')
    }
}) 