

document.addEventListener("DOMContentLoaded", () => {
   const tree = document.querySelector('#tree');

   function addSpan() {
      for (let li of tree.querySelectorAll('li')) {
         let span = document.createElement('span');
         li.prepend(span);
         span.append(span.nextSibling);
      };
   };

   addSpan();


   tree.addEventListener('click', (event) => {
      let target = event.target;

      function dropDownMenuList() {
         if (target.tagName == 'SPAN') {
            let pizdykContainer = target.parentNode.querySelector('ul');
            if (!pizdykContainer) return;
            console.log(pizdykContainer);
            pizdykContainer.hidden = !pizdykContainer.hidden;
         }
      }

      function buttonClose() {
         if (target.tagName == 'BUTTON') {
            let childButton = target.parentNode.querySelector('ul');
            if (childButton) {
              //треба знайти першу кнопку, від неї провести перевірку на нащадка ul, потім як знайшли його то робиво хіден його
               console.log('нащадки є');
               childButton.hidden = !childButton.hidden;
            } else if (!childButton) {
               console.log('нащадків немає');
            };
         };
      };

      dropDownMenuList();
      buttonClose();
   });
});