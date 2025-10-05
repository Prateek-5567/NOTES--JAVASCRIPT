// whenever you click on any image it gets disappeared but not entire ul only that particular li and only work on images

const images = document.querySelector('.images');
images.addEventListener('click', function (e) {
  //   console.log(e.target.parentNode);
  let target = e.target.parentNode;
  console.log('you clicked on a ', target.tagName);
  if (e.target.tagName.toLowerCase() == 'img') {
    console.log('element erased : ', target);
    target.remove();
    // or you may : target.parentNode.removeChild(target);
  }
});

document
  .querySelector('a')
  .addEventListener('click', (e) => e.preventDefault());
