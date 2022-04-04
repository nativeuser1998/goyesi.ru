//Here you need to import necessary scripts to gulp:
// 
//JS-ФУНКЦИЯ ОПРЕДЕЛЕНИЯ ПОДДЕРЖКИ WEBP, — формат сжатия изображений.

function testWebP(callback) {

   var webP = new Image();
   webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
   };
   webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

   if (support == true) {
      document.querySelector('body').classList.add('webp');
   } else {
      document.querySelector('body').classList.add('no-webp');
   }
});;

// let iconMenu = document.querySelector(".icon-menu");
// let body = document.querySelector("body");
// let menuBody = document.querySelector(".menu__body");
// if (iconMenu) {
//    iconMenu.addEventListener("click", function () {
//       iconMenu.classList.toggle("active");
//       body.classList.toggle("lock");
//       menuBody.classList.toggle("active");
//    });
// }

// //Клик вне области
// $(document).on('click touchstart', function (e) {
//    if (!$(e.target).is(".select *")) {
//       $('.select').removeClass('active');
//    };
// });
