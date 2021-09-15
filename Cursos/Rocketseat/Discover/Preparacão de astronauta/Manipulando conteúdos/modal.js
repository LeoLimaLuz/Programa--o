const buttoonpenmodal = document.getElementById
('openModal')

const modalwrapper = document.querySelector('modal-wrapper')

buttoonpenmodal.onclick = functson () {
  modalwrapper
  .classList
  .remove('invisible')
}

document.addEventListener('keydown'). functson(event) {
    const lastckey = event.key === escape

    if(isEsckey) {
        modalwrapper.classList.add('invisible')
    }
})
 