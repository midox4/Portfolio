

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
        strings: ["Développeur Web", "Full Stack JS", "Tunisien","Passionné par le Coding"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Développeur Web", "Full Stack JS", "Tunisien","Passionné par le Coding"],
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

function validateform(){  
    var name=document.myForm.name.value;  
        var email=document.myForm.email.value;  
    var sub=document.myForm.sub.value;  
var message=document.myForm.message.value;  
  
if (name==null || name==""){  
  alert("veuillez écrire votre nom ");  
  return false;  
}else if (email==null || email==""){  
 
  alert("Svp mettez votre Email.");  
  return false;  
  } else if (sub==null || sub==""){  
 
  alert("Svp mettez votre sujet."); 
  return false;  

  } else if (message==null || message==""){
       alert("Svp écrire votre message."); 
 
  return false;  
  }  
  } 


       const form = document.querySelectorAll('.form');
        function sendMSg(e){
            e.preventDefault();

           
           const name = document.querySelectorAll('.name');
           const email = document.querySelectorAll('.email');
          const  sub = document.querySelectorAll('.sub');
           const mssg = document.querySelectorAll('.message');
            
            
         
           
            Email.send({
        Host : "smtp.gmail.com",
        Username : "ahmedohafsi@gmail.com",
        Password : "lhabutzjyiwnezux",
        To : 'ahmedohafsi@gmail.com',
        From : email.value,
        Name:name.value,
        Subject : sub.value,
        Body : mssg.value
        
    }).then(
        message => alert('Email Bien Reçu ! Bonne journée')

    );
            form.forEach(input => {
        input.value = '';
    });
  
    };
form.addEventListener('submit',sendMSg);

  
/*
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
    
*/
