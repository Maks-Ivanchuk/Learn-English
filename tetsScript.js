

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
   let isChanged = false;//чи змінили ми контейнер з ul на hidden
   let countStep = 1;

   tree.addEventListener('click', (event) => {
      let target = event.target;
      let childContainer = target.parentNode.querySelector('ul');
      

      function firstButton() {
         let visible1 = target.closest('.targetForBtnClose').querySelectorAll('.visible1');
         let visible2 = target.closest('.targetForBtnClose').querySelectorAll('.visible2');
         let visible3 = target.closest('.targetForBtnClose').querySelectorAll('.visible3');

         if (target.tagName == 'BUTTON' && childContainer) {
            console.log(countStep);
            if (countStep == 1 || countStep == 6) {
               for (let i = 0; i < visible1.length; i++) {
                  if (visible1[i].hidden == true) {
                     visible1[i].hidden = false;
                  } else if (visible1[i].hidden == false) {
                     visible1[i].hidden = true;
                     countStep = 0;
                  }
               }
               countStep++;
            } else if (countStep == 2 || countStep == 5) {
               for (let i = 0; i < visible2.length; i++) {
                  if (visible2[i].hidden == true) {
                     visible2[i].hidden = false;
                  } else if (visible2[i].hidden == false) {
                     visible2[i].hidden = true;
                  }
               }
               countStep++;
            } else if (countStep == 3 || countStep == 4 ) {
               for (let i = 0; i < visible3.length; i++) {
                  if (visible3[i].hidden == true) {
                     visible3[i].hidden = false;
                  } else if (visible3[i].hidden == false) {
                     visible3[i].hidden = true;
                  }
               }
               countStep++;
            }   
         }
      };
      /*---------------------------------------------------                                        ------*/
      function dropDownMenuList() {
         if (target.tagName == 'SPAN' && childContainer) {
            childContainer.hidden = !childContainer.hidden;
         };
      };
      /*---------------------------------------------------------------------------------------------------*/
      function endButtonHiddenAll() {
         if (target.tagName == 'BUTTON' && !childContainer) {
            let childAllChildCont = target.closest('.targetForBtnClose').children;
            
            for (let i = 0; i < childAllChildCont.length; i++) {
               if (childAllChildCont[i].tagName == "UL") { 
                  childAllChildCont[i].hidden = !childAllChildCont[i].hidden;
               };
            };
            countStep = 1;
         };
      };
      /*---------------------------------------------------------*/
      dropDownMenuList();
      firstButton();
      endButtonHiddenAll();






      //! переписую по новому, це страре, просто зніми комент і все буде як раніше
      //function firstButton() {
      //    if (target.tagName == 'BUTTON' && childContainer) {//шукаємо батю а в ньому Ул
      //       if (childContainer.hidden == true && !isChanged) {
      //          childContainer.hidden = !childContainer.hidden;
      //          isChanged = true;

      //       } else if (childContainer.hidden == false) {//другий рівень вкладеності
      //          let nextChildContainer = childContainer.children; //дізнаємось скільки дітей в ul
      //          let numChildren = nextChildContainer.length;
                  
      //          for (let i = 0; i < numChildren; i++) {  //перебрали всі   ul  li
      //             let ulInChildren = nextChildContainer[i].querySelector('ul');

      //             if (ulInChildren.hidden) {
      //                ulInChildren.hidden = !ulInChildren.hidden;
      //                ulInChildren.style.color = "red";
      //             } else {
      //                return;
      //             }
      //             console.log(ulInChildren);
      //          }
      //       };
      //    };
      // };
   });
});