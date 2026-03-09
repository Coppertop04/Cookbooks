(function() {
  const savedTheme = localStorage.getItem('user-theme');
  if (savedTheme) {
    document.body.classList.add(savedTheme);
  } else {
    document.body.classList.add('lux'); // Your default
  }
})();