const scroll = document.getElementById("scroll");
const scrollTwo = document.querySelector('#scrollUp')
const scrollThree = document.querySelector ('#scrollThree')
const modalContent = document.querySelector('.modal-content');

const scrollController = {
 scrollPosition: 0,
  disabledScroll() {
    scrollController.scrollPosition = window.scrollY;
document.body.style.cssText = `
overflow: hidden;
position: fixed;
top: -${scrollController.scrollPosition}px;
left: 0;
height: 100vh;
width: 100vw;
padding-right: ${window.innerWidth - document.body.offsetWidth}px
`;
document.documentElement.style.scrollBehavior = 'unset';
  },
  enabledScroll() {
    document.body.style.cssText = '';
    window.scroll({top:scrollController.scrollPosition})
    document.documentElement.style.scrollBehavior = '';
  },

}



scroll.addEventListener('click', () => {
  document.querySelector(".algoritms").scrollIntoView({ behavior: 'smooth' });
})



scrollTwo.addEventListener('click', () => {
  document.querySelector("header").scrollIntoView({ behavior: 'smooth' });
})


scrollThree.addEventListener('click', () => {
  document.querySelector(".rates").scrollIntoView({behavior:'smooth'});
})




document.getElementById("open-modal-btn").addEventListener("click", function() {
  document.getElementById("my-modal").classList.add("open")
  scrollController.disabledScroll();
})


document.getElementById("close-my-modal-btn").addEventListener("click", function() {
  document.getElementById("my-modal").classList.remove("open")
  scrollController.enabledScroll();
})


window.addEventListener('keydown', (e) => {
  if (e.key === "Escape") {
      document.getElementById("my-modal").classList.remove("open")
      scrollController.enabledScroll();
  }
});


document.querySelector("#my-modal .modal__box").addEventListener('click', event => {
  event._isClickWithInModal = true;
});
document.getElementById("my-modal").addEventListener('click', event => {
  if (event._isClickWithInModal) return;
  event.currentTarget.classList.remove('open');
  scrollController.enabledScroll();
});




document.getElementById("openModalBtn").addEventListener("click", function() {
  document.getElementById("my-modal").classList.add("open")
  scrollController.disabledScroll();
})


document.getElementById("close-my-modal-btn").addEventListener("click", function() {
  document.getElementById("my-modal").classList.remove("open")
  scrollController.enabledScroll();
})


window.addEventListener('keydown', (e) => {
  if (e.key === "Escape") {
      document.getElementById("my-modal").classList.remove("open")
      scrollController.enabledScroll();
  }
});


document.querySelector("#my-modal .modal__box").addEventListener('click', event => {
  event._isClickWithInModal = true;
});
document.getElementById("my-modal").addEventListener('click', event => {
  if (event._isClickWithInModal) return;
  event.currentTarget.classList.remove('open');
  scrollController.enabledScroll();
});




document.getElementById("openBtn").addEventListener("click", function() {
  document.getElementById("my-modal").classList.add("open")
  scrollController.disabledScroll();
})


document.getElementById("close-my-modal-btn").addEventListener("click", function() {
  document.getElementById("my-modal").classList.remove("open")
  scrollController.enabledScroll();
})


window.addEventListener('keydown', (e) => {
  if (e.key === "Escape") {
      document.getElementById("my-modal").classList.remove("open")
      scrollController.enabledScroll();
  }
});


document.querySelector("#my-modal .modal__box").addEventListener('click', event => {
  event._isClickWithInModal = true;
});
document.getElementById("my-modal").addEventListener('click', event => {
  if (event._isClickWithInModal) return;
  event.currentTarget.classList.remove('open');
  scrollController.enabledScroll();
});




document.getElementById("btnModal").addEventListener("click", function() {
  document.getElementById("my-modal").classList.add("open")
  scrollController.disabledScroll();
})


document.getElementById("close-my-modal-btn").addEventListener("click", function() {
  document.getElementById("my-modal").classList.remove("open")
  scrollController.enabledScroll();
})


window.addEventListener('keydown', (e) => {
  if (e.key === "Escape") {
      document.getElementById("my-modal").classList.remove("open")
      scrollController.enabledScroll();
  }
});


document.querySelector("#my-modal .modal__box").addEventListener('click', event => {
  event._isClickWithInModal = true;
});
document.getElementById("my-modal").addEventListener('click', event => {
  if (event._isClickWithInModal) return;
  event.currentTarget.classList.remove('open');
  scrollController.enabledScroll();
});


document.getElementById("ModalBtn").addEventListener("click", function() {
  document.getElementById("my-modal").classList.add("open")
  scrollController.disabledScroll();
})


document.getElementById("close-my-modal-btn").addEventListener("click", function() {
  document.getElementById("my-modal").classList.remove("open")
  scrollController.enabledScroll();
})


window.addEventListener('keydown', (e) => {
  if (e.key === "Escape") {
      document.getElementById("my-modal").classList.remove("open")
      scrollController.enabledScroll();
  }
});


document.querySelector("#my-modal .modal__box").addEventListener('click', event => {
  event._isClickWithInModal = true;
});
document.getElementById("my-modal").addEventListener('click', event => {
  if (event._isClickWithInModal) return;
  event.currentTarget.classList.remove('open');
  scrollController.enabledScroll();
});



document.getElementById("spider-btn").addEventListener("click", function() {
  document.getElementById("my-modal").classList.add("open")
  scrollController.disabledScroll();
})


document.getElementById("close-my-modal-btn").addEventListener("click", function() {
  document.getElementById("my-modal").classList.remove("open")
  scrollController.enabledScroll();
})


window.addEventListener('keydown', (e) => {
  if (e.key === "Escape") {
      document.getElementById("my-modal").classList.remove("open")
      scrollController.enabledScroll();
  }
});


document.querySelector("#my-modal .modal__box").addEventListener('click', event => {
  event._isClickWithInModal = true;
});
document.getElementById("my-modal").addEventListener('click', event => {
  if (event._isClickWithInModal) return;
  event.currentTarget.classList.remove('open');
  scrollController.enabledScroll();
});




modalContent.style.overflowY = 'auto';
modalContent.style.maxHeight = '80%';


































































