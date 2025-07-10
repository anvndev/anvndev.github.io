var typed = new Typed('#elem', {
  strings: ['Software Engineer', 'Designer', 'Anvndev'],
  typeSpeed: 50,
  backSpeed: 30,
  loop: true
});

// Modal logic for introduction board
const contactBtn = document.querySelector('.action.contme');
const introModal = document.getElementById('intro-modal');
const closeDot = document.getElementById('intro-modal-close'); // now the red dot
const introTitle = document.getElementById('intro-title');
const introDesc = document.getElementById('intro-desc');
const introRandom = document.getElementById('intro-random');

const pixelQuotes = [
  'Life is like code: debug, refactor, repeat.',
  'Stay pixelated, stay unique.',
  '404: Boring life not found.',
  'Press Start to continue your journey.',
  'Glitch is just another form of art.',
  'Dream in pixels, live in reality.',
  'Insert coin to unlock happiness.',
  'Every bug is a lesson in disguise.',
  'Level up your life, one pixel at a time.',
  'Keep calm and code on.',
  'slow life',
  'Boot up your soul.',
  'Paused... but still progressing.',
  'Your vibe is valid, even at low resolution.',
  'Reality is just high-res imagination.',
  'You are the main character. Respawn if needed.',
  'Syntax error? Try again with style.',
  'Low battery, high potential.',
  'In a world of vectors, be a pixel.',
  'Stay glitched, stay golden.',
  'Loading... good things take time.',
  'Game over is just another beginning.',
  'Navigate life like an open world.',
  'Keep your heart in developer mode.',
  'One frame at a time, you’re animating greatness.',
  'Be the easter egg in someone’s story.',
  'Silence is just a muted track waiting to play.',
  'Sometimes, bugs are features of your story.',
  'Auto-saving... trust the process.',
  'Frame drop? Breathe. Continue.'
];

function animateLine(element, text, delay, isHTML) {
  if (isHTML) {
    // Animate HTML content (for introDesc)
    element.innerHTML = '';
    let i = 0;
    const plain = text.replace(/<[^>]+>/g, '');
    function typeChar() {
      if (i < plain.length) {
        // Find the next tag or character
        let nextTag = text.indexOf('<', i);
        if (nextTag === i) {
          // Find the end of the tag
          let endTag = text.indexOf('>', i);
          if (endTag !== -1) {
            element.innerHTML += text.slice(i, endTag + 1);
            i = endTag + 1;
            typeChar();
            return;
          }
        }
        element.innerHTML += text[i];
        i++;
        setTimeout(typeChar, 18);
      }
    }
    setTimeout(typeChar, delay);
  } else {
    element.textContent = '';
    let i = 0;
    function typeChar() {
      if (i < text.length) {
        element.textContent += text.charAt(i);
        i++;
        setTimeout(typeChar, 22);
      }
    }
    setTimeout(typeChar, delay);
  }
}

function showIntroModal() {
  const quote = pixelQuotes[Math.floor(Math.random() * pixelQuotes.length)];
  introModal.style.display = 'flex';
  void introModal.offsetWidth;
  introModal.querySelector('.intro-modal-content').style.animation = 'intro-slide-in 0.5s forwards';

  // Animate lines in order
  introTitle.textContent = '';
  introDesc.innerHTML = '';
  introRandom.textContent = '';
  introRandom.className = '';

  animateLine(introTitle, introTitle.getAttribute('data-text') || "Hello, I'm An Van Nguyen (anvndev)", 100, false);
  setTimeout(() => {
    // Animate the actual intro HTML (with <br> and <strong>)
    animateLine(introDesc, introDesc.getAttribute('data-text') ||
      "Thank you for visiting my page where I’ve gathered my most common contact links. \n I’m really glad you’re here and hope you find this helpful!", 0, true);
  }, 900);
  setTimeout(() => {
    if (quote === 'slow life') {
      introRandom.className = 'slow-life-dot special';
      introRandom.textContent = '●';
    } else {
      animateLine(introRandom, quote, 0, false);
    }
  }, 1800);
}

function hideIntroModal() {
  introModal.style.display = 'none';
}

contactBtn.addEventListener('click', function(e) {
  e.preventDefault();
  showIntroModal();
});

closeDot.addEventListener('click', hideIntroModal);

introModal.addEventListener('click', function(e) {
  if (e.target === introModal) hideIntroModal();
});
