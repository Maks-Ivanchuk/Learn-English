document.addEventListener("DOMContentLoaded", () => {


   function addSpan() {
      let tree = document.querySelector('#tree');

      for (let li of tree.querySelectorAll('li')) {
         let span = document.createElement('span');
         li.prepend(span);
         span.append(span.nextSibling);
      }
   };

   addSpan();

   document.body.addEventListener('click', (event) => {

      function colorChange () {
         if (event.target.tagName != 'SPAN'){
            return;
         }

         if (event.target.style.color == "red") {
            event.target.style.color = "black";
         } else {
            event.target.style.color = "red"
         }
         console.log(event.target);
      }

      colorChange ();
   });
});