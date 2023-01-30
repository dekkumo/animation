const cards = document.querySelectorAll('.card')
const greenLeaf = document.querySelector('.leaf_green')
const brownLeaf = document.querySelector('.leaf_brown')

const changeOneLeaf = () => {
  greenLeaf.style.left = '-3px'
  brownLeaf.style.right = '559px'
}

const changeTwoLeaf = () => {
  greenLeaf.style.left = '3px'
  brownLeaf.style.right = '563px'
}

const changeThreeLeaf = () => {
  greenLeaf.style.left = '6px'
  brownLeaf.style.right = '565px'
}

const changeFourLeaf = () => {
  greenLeaf.style.left = '9px'
  brownLeaf.style.right = '567px'
}

for (let i = 0; i < cards.length; i++) {
  cards[0].addEventListener('click', changeOneLeaf)
  cards[1].addEventListener('click', changeTwoLeaf)
  cards[2].addEventListener('click', changeThreeLeaf)
  cards[3].addEventListener('click', changeFourLeaf)
}

window.addEventListener('click', removeChange)

function removeChange(e) {
  if (e.target.closest('.card')) {
    return null
  } else {
    greenLeaf.style.left = '0px'
    brownLeaf.style.right = '561px'
  }
}