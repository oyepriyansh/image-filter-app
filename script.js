const image = document.getElementById('image');
const fileInput = document.getElementById('file');

function previewImage(event) {
  const reader = new FileReader();
  reader.onload = () => {
    image.src = reader.result;
  };
  reader.readAsDataURL(event.target.files[0]);
}

function applyFilter(filter) {
  switch(filter) {
    case 'none':
      image.style.filter = 'none';
      break;
    case 'grayscale':
      image.style.filter = 'grayscale(100%)';
      break;
    case 'sepia':
      image.style.filter = 'sepia(100%)';
      break;
    case 'invert':
      image.style.filter = 'invert(100%)';
      break;
    case 'hue-rotate':
      image.style.filter = 'hue-rotate(90deg)';
      break;
    case 'blur':
      image.style.filter = 'blur(5px)';
      break;
    case 'brightness':
      image.style.filter = 'brightness(150%)';
      break;
    case 'contrast':
      image.style.filter = 'contrast(150%)';
      break;
    case 'saturate':
      image.style.filter = 'saturate(200%)';
      break;
  }
}

fileInput.addEventListener('change', (event) => {
  previewImage(event);
});

document.querySelectorAll('.filter').forEach(button => {
  button.addEventListener('click', () => {
    applyFilter(button.dataset.filter);
  });
});