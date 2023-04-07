

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
   /*-----------------------------------------------------------------------------------*/

   tree.addEventListener('click', (event) => {
      let target = event.target;
      let childContainer = target.parentNode.querySelector('ul');
      let closeAll = target.closest('.targetForBtnClose').querySelector('ul');
      /*---------------------------------------------------------*/
      function dropDownMenuList() {
         if (target.tagName == 'SPAN' && childContainer) {
            childContainer.hidden = !childContainer.hidden;
         };
      };
      /*---------------------------------------------------------*/
      function firstButtonStepHidden() {
         if (target.tagName == 'BUTTON' && childContainer) {//шукаємо батю а в ньому Ул
            if (childContainer.hidden) {
               childContainer.hidden = !childContainer.hidden;
               console.log(childContainer);
            } else if (!childContainer.hidden) {//другий рівень вкладеності
               let nextchildContainer = childContainer.children; //дізнаємось скільки дітей в ul
               let numChildren = nextchildContainer.length;

               for (let i = 0; i < numChildren; i++) {  //перебрали всі   ul  li
                  let ulInChildren = nextchildContainer[i].querySelector('ul');

                  if (ulInChildren.hidden) {
                     ulInChildren.hidden = !ulInChildren.hidden;
                  } else {
                     return;
                  }
                  console.log(ulInChildren);
               }
            };
         };
      };
      /*---------------------------------------------------------*/
      function sortChildrenContainer() {
         let nextchildContainer = childContainer.children; //дізнаємось скільки дітей в ul
         let numChildren = nextchildContainer.length;

         if (childContainer.hidden) {//другий рівень вкладеності
            childContainer.hidden = !childContainer.hidden;
            if ()
               for (let i = 0; i < numChildren; i++) {  //перебрали всі   ul  li
                  let ulInChildren = nextchildContainer[i].querySelector('ul');

                  if (ulInChildren.hidden) {
                     ulInChildren.hidden = !ulInChildren.hidden;
                  } else {
                     return;
                  }
                  console.log(ulInChildren);
               }
         };
         /*---------------------------------------------------------*/
         function endButtonHiddenAll() {
            if (target.tagName == 'BUTTON' && !childContainer) {
               if (!closeAll) return;
               closeAll.hidden = !closeAll.hiden;
            };
         };
         /*---------------------------------------------------------*/
         dropDownMenuList();
         firstButtonStepHidden();
         endButtonHiddenAll();
      });
});