let avatar = document.getElementById('avatar')
let intro = document.getElementById('intro')
let quote = document.getElementById('quote')
let vector = document.getElementById('vector-frame')

function fade (el, init_y, end_y, init_opac, last_opac) {
    el.animate([
      {transform: `translatey(${init_y}em)`,
          opacity: init_opac,
      },
      {transform: `translatey(${end_y}em)`,
          opacity: last_opac,
      }
    ], {
      duration: 500,

      fill: "forwards",
      easing: 'ease-in-out'
    })
}


avatar.addEventListener('mouseover', () => {
  fade(intro,0, 10, 1, 0);
  fade(quote, 0, -16, 1, 1);
  fade(vector, 10, 0, 0,1);
});

avatar.addEventListener('mouseleave', () => {
  fade(intro,10, 0, 0, 1);
  fade(quote, -16, 0, 1, 1);
  fade(vector, 0, 10, 1,0);
});

