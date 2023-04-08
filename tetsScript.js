

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
   /*-------------------------------------------------------------------------------------------------------*/

   tree.addEventListener('click', (event) => {
      let target = event.target;
      let childContainer = target.parentNode.querySelector('ul');
      
      /*---------------------------------------------------------*/
      function dropDownMenuList() {
         if (target.tagName == 'SPAN' && childContainer) {
            childContainer.hidden = !childContainer.hidden;
         };
      };
      /*---------------------------------------------------------------------------------------------------*/
      function firstButtonStepHidden() {
         if (target.tagName == 'BUTTON' && childContainer) {//шукаємо батю а в ньому Ул
            if (childContainer.hidden == true) {
               childContainer.hidden = !childContainer.hidden;
            } else if (childContainer.hidden == false) {//другий рівень вкладеності
               let nextChildContainer = childContainer.children; //дізнаємось скільки дітей в ul
               let numChildren = nextChildContainer.length;

               for (let i = 0; i < numChildren; i++) {  //перебрали всі   ul  li
                  let ulInChildren = nextChildContainer[i].querySelector('ul');

                  if (ulInChildren.hidden) {
                     ulInChildren.hidden = !ulInChildren.hidden;
                     ulInChildren.style.color = "red";
                  } else {
                     return;
                  }
                  console.log(ulInChildren);
               }
            };
         };
      };
      /*---------------------------------------------------------*/
      function endButtonHiddenAll() {
         if (target.tagName == 'BUTTON' && !childContainer) {
            let childAllChildCont = target.closest('.targetForBtnClose').children;
            
            for (let i = 0; i < childAllChildCont.length; i++) {
               if (childAllChildCont[i].tagName == "UL") { 
                  childAllChildCont[i].hidden = !childAllChildCont[i].hidden;
               };
            };
         };
      };
      /*---------------------------------------------------------*/
      dropDownMenuList();
      firstButtonStepHidden();
      endButtonHiddenAll();
   });
});