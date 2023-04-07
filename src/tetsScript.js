

document.addEventListener("DOMContentLoaded", () => {
   const tree = document.querySelector('#tree');
   let targetForBtnClose = document.querySelector('.targetFotBtnClose');

   function addSpan() {
      for (let li of tree.querySelectorAll('li')) {
         let span = document.createElement('span');
         li.prepend(span);
         span.append(span.nextSibling);
      };
   };

   addSpan();
   /*-----------------------------------------------------------------------------------*/

   tree.addEventListener('click', (event) => {
      let target = event.target;
      let childContainer = target.parentNode.querySelector('ul');
      let sd = childContainer.children.querySelector('ul');
      /*---------------------------------------------------------*/
      function dropDownMenuList() {
         if (target.tagName == 'SPAN' && childContainer) {
            childContainer.hidden = !childContainer.hidden;
         }
      }
      /*---------------------------------------------------------*/
      function hiddenStepButton() {
         if (target.tagName == 'BUTTON' && childContainer) {
            if (childContainer.hidden) {
               childContainer.hidden = !childContainer.hidden;
            };
         }
      };
      /*---------------------------------------------------------*/
      function closeButton() {
         if (target.tagName == 'BUTTON' && !childContainer) {
            if (!closeAll) return;
            closeAll.hidden = !closeAll.hiden;
         };
      };
      /*---------------------------------------------------------*/
      dropDownMenuList();
      hiddenStepButton();
      closeButton();
   });
});