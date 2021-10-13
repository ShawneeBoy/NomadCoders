const intro = document.querySelector(".intro");
const logo = document.querySelector(".introHeader");
const logoSpan = document.querySelectorAll(".introText");

function handleSplashScreen(e){
  
  intro.style.opacity = "100%";
  
  setTimeout(()=>{
    logoSpan.forEach((span, idx)=>{
      setTimeout(()=>{
        span.classList.add("active");
      }, (idx+1)*400);
    });
    
    setTimeout(()=>{
      logoSpan.forEach((span, idx)=>{
        setTimeout(()=>{
          span.classList.remove("active");
          span.classList.add("fade");
        }, (idx+1)*50);
      });
    }, 2000);
    
    setTimeout(()=>{
      intro.style.top = "-100vh";
    }, 2300);
    
    
  });
}

window.addEventListener('DOMContentLoaded', handleSplashScreen);

