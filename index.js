let avatar = document.getElementById('avatar')
let intro = document.getElementById('intro')

avatar.addEventListener('mouseover', hideIntro);

function hideIntro () {
  intro.style = 'display: none;'
  
  // intro.style = 'display: none';
}

avatar.addEventListener('mouseleave', showIntro)
function showIntro() {
  intro.style = 'display: inline'
}