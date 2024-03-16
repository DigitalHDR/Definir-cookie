const cookieBox = document.querySelector('.container')
const botoes = document.querySelectorAll('.botoes')

const aceitarBtn = document.querySelector('#aceitarBtn')

const executaCodes = () => {
    if(document.cookie.includes('ValorDoCookie')) {
        return
    }
  cookieBox.classList.add('mostrar')

  botoes.forEach((btns) => {
    btns.addEventListener('click', () => {
      cookieBox.classList.remove('mostrar')

      if (aceitarBtn) {
        document.cookie = 'NomeDoCookie = ValorDoCookie; 15 Mar 2024 22:36:00'
      }
    })
  })
}

window.addEventListener('load', executaCodes)
