const faqs = document.querySelectorAll('.faq')

faqs.forEach(faq => {
faq.addEventListener('click' , () =>{
    faq.classList.toggle('active')
})
})


document.getElementById('telegramButton').addEventListener('click', function() {
    
    var telegramLink = 'https://t.me/pulse_pro_service';
    window.open(telegramLink, '_blank');
});


document.getElementById('telegramButton2').addEventListener('click', function() {
    
    var telegramLink = 'https://t.me/pulse_pro_service';
    window.open(telegramLink, '_blank');
});






document.querySelector("#my-modalTwo .modal__boxTwo").addEventListener('click', event => {
  event._isClickWithInModal = true;
});
document.getElementById("my-modalTwo").addEventListener('click', event => {
  if (event._isClickWithInModal) return;
  event.currentTarget.classList.remove('open');
  scrollController.enabledScroll();
});




document.getElementById("footerButton").addEventListener("click", function() {
  document.getElementById("my-modalTwo").classList.add("open")
  scrollController.disabledScroll();
})


document.getElementById("closeMy-modal-btn").addEventListener("click", function() {
  document.getElementById("my-modalTwo").classList.remove("open")
  scrollController.enabledScroll();
})


window.addEventListener('keydown', (e) => {
  if (e.key === "Escape") {
      document.getElementById("my-modalTwo").classList.remove("open")
      scrollController.enabledScroll();
  }
});





