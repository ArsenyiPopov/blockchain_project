const colorButton = document.getElementById('colorButton');
  const originalBackground = window.getComputedStyle(colorButton).getPropertyValue('background');

  colorButton.addEventListener('mouseover', function() {
    colorButton.style.background = originalBackground;
  });

  colorButton.addEventListener('mouseout', function() {
    colorButton.style.background = 'linear-gradient(93.78deg, #3264F8 0%, #F02EE5 100%)';
  });