

$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    
    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Développeur", "Web", "Full Stack", "Junior"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Développeur", "Web", "Full Stack", "Junior"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});

    var btn = document.getElementById('btn');
    btn.addEventListener('click',function(e){
        e.preventDefault();

        const inputs = document.querySelectorAll('#name, #email, #sub, #message');
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var sub = document.getElementById('sub').value;
        var message = document.getElementById('message').value;
        var body = 'name: ' +name+ '<br/> email: ' + email + '<br/> subject: '  + sub + '<br/> message: '  + message;
        Email.send({
    Host : "smtp.gmail.com",
    Username : "ahmedohafsi@gmail.com",
    Password : "hqyxgwrpxewzhawu",
    To : 'ahmedohafsi@gmail.com',
    From : email,
    Subject : sub,
    Body : body
    
}).then(
    message => alert('Email Bien Reçu ! Bonne journée')

);
inputs.forEach(input => {
    input.value = '';
  });
});

  

// clear all text fields form 
    const form = document.querySelector('#myF');
    const name = document.querySelector('#name');
    const email = document.querySelector('#email');
    const sub = document.querySelector('#sub');
    const msg = document.querySelector('#message');

    const checkUsername = () => {

        let valid = false;
    
        const min = 3,
            max = 25;
    
        const username = name.value.trim();
    
        if (!isRequired(username)) {
            showError(name, 'Username cannot be blank.');
        } else if (!isBetween(username.length, min, max)) {
            showError(name, `Username must be between ${min} and ${max} characters.`)
        } else {
            showSuccess(name);
            valid = true;
        }
        return valid;
    };
    
    
    const checkEmail = () => {
        let valid = false;
        const email = email.value.trim();
        if (!isRequired(email)) {
            showError(email, 'Email cannot be blank.');
        } else if (!isEmailValid(email)) {
            showError(email, 'Email is not valid.')
        } else {
            showSuccess(email);
            valid = true;
        }
        return valid;
    };
    

