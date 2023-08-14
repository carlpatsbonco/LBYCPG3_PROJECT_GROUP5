window.addEventListener('load', function () {
  loadContent('home.html');

  function loadContent(page) {
    $('.content').load(page, function (response, status, xhr) {
      if (status == 'error') {
        $('.content').html('<h2>Error loading content.</h2>');
      }
    });
  }

  $('.nav-link').on('click', function (e) {
    e.preventDefault();

    $('.nav-link').removeClass('active');
    $(this).addClass('active');

    let contentToLoad = $(this).attr('href');
    loadContent(contentToLoad);
  });

  var largeImage = document.getElementById('large-image');
  largeImage.style.maxWidth = '300px';
});

document.querySelectorAll('.image-container img').forEach(image => {
  image.onclick = () => {
    document.querySelector('.popup-img').style.display = 'block';
    document.querySelector('.popup-img img').src = image.getAttribute('src');
  }
});

document.querySelector('.popup-img span').onclick = () => {
  document.querySelector('.popup-img').style.display = 'none';
}
