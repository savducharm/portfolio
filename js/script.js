console.log('Hi there! Welcome to my protfolio :)')

function menuToggle () {
  var x = document.getElementById('myNavtoggle')
  if (x.className === 'navtoggle') {
    x.className += ' responsive'
  } else {
    x.className = 'navtoggle'
  }
}

// Get the modal
var modal = document.getElementById('myModal')

// Get the images and bind an onclick event on each to insert it inside the modal
// use its "alt" text as a caption
var images = document.querySelectorAll('.img-pop')
var modalImg = document.getElementById('img01')
var captionText = document.getElementById('caption')
for (let i = 0; i < images.length; i++) {
  images[i].onclick = function () {
    modal.style.display = 'block'
    modalImg.src = this.src
    captionText.innerHTML = this.alt
  }
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName('close')[0]

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = 'none'
}

function UnCryptMailto (s) {
  var n = 0
  var r = ''
  for (var i = 0; i < s.length; i++) {
    n = s.charCodeAt(i)
    if (n >= 8364) {
      n = 128
    }
    r += String.fromCharCode(n - 1)
  }
  return r
}

function linkTo_UnCryptMailto (s) {
  location.href = UnCryptMailto(s)
}
