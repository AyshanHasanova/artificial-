const startBtn = document.querySelector(".start")
const navbarBtn =  document.querySelector(".salam")
const modal = document.querySelector(".modal")
const modalClose = document.querySelector(".modal-close")

const mobileMenyu = document.querySelector(".mobile-menyu")
const closeIcon = document.querySelector(".sagol")

// click dblclick mouseenter mouseleave
// Events DOM
navbarBtn.addEventListener("click", function() {
    mobileMenyu.classList.add("mobile-menyunu-acan")
})

closeIcon.addEventListener("click",function(){
    // DOM metodlari includes
    mobileMenyu.classList.remove("mobile-menyunu-acan")
})
startBtn.addEventListener("click",function(){
    modal.classList.add("modal-acan")
})
modalClose.addEventListener("click",function(){
    modal.classList.remove("modal-acan")
})

// bura swiper kodlari gelecek
const swiper = new Swiper(".shirketlerKaruseli", {
    slidesPerView: 4,
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      },
  });

  //  awards js kodu
  const karusel = new Swiper(".awardsKaruseli", {
    slidesPerView: 5,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 50,
      },
    },
  });


  const mukafatlarDivi = document.querySelector("#mukafatlar")

  window.addEventListener("load",getLocaldanMelumatlariGetir)


  async function getLocaldanMelumatlariGetir(){
    const unvan = "assets/mukafatlar.json"

    try{
       const gelenCavab = await fetch (unvan)
      
       const mukafatlar= await gelenCavab.json()
       console.log(mukafatlar)
       mukafatlar.forEach (function(birMukafat) {
        mukafatlarDivi.innerHTML += `
        <div class="swiper-slide text-center">
                          <div class="card rounded-0" >
                              <img src=${birMukafat.mukafat_shekli} class="card-img-top" alt="...">
                              <div class="card-body">
                                <h5 class="card-title">${birMukafat.mukafat_adi}</h5>
                                <p class="card-text">${birMukafat.mukafat_metni}</p>
                            
                              </div>
                            </div>
                        </div>
      
        `
       
     })
       
    }
    catch(err){

    }
  }
  new Accordion('.accordion-left');
  new Accordion('.accordion-right');

 
