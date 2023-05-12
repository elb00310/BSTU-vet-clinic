   //калькулятор
   var op;
   function min (event) {
     if (event.target.classList.contains('minus-icon')) {
          func();
         };
       };

   function pl (event) {
     if (event.target.classList.contains('plus-icon')) {
            func();
         };
       };
      
       const cmin = document.querySelectorAll(".minus-icon");
       for (let i = 0; i < cmin.length; i++) {
         cmin[i].addEventListener("click", min);
       }

       const cpl = document.querySelectorAll(".plus-icon");
       for (let i = 0; i < cpl.length; i++) {
         cpl[i].addEventListener("click", pl);
       }

   function prover(cif,nom) {
     if (cif>=0){
       document.getElementById(nom).innerHTML = cif;
     } else{
       document.getElementById(nom).innerHTML = 0;
     }
   }

     function func() {
     var result;
     var num1 = Number(document.getElementById("result").textContent);
       switch (op) {
         case '+44':
         var nomer="cf1";
         var cifra = Number(document.getElementById("cf1").textContent);
         cifra=cifra+1;
         prover(cifra,nomer);
         result = num1 + 44;
           break;
         case '-44':
         var nomer="cf1";
         var cifra = Number(document.getElementById("cf1").textContent);
         if (cifra!=0){
          cifra=cifra-1;
          prover(cifra,nomer);
          result = num1 - 44;
         }
           break;
       case '+212':
         var nomer="cf2";
         var cifra = Number(document.getElementById("cf2").textContent);
         cifra=cifra+1;
         prover(cifra,nomer);
         result = num1 + 212;
           break;
         case '-212':
         var nomer="cf2";
         var cifra = Number(document.getElementById("cf2").textContent);
         if (cifra!=0){
          cifra=cifra-1;
          prover(cifra,nomer);
          result = num1 - 212;
         }
           break;
       case '+85':
         var nomer="cf3";
         var cifra = Number(document.getElementById("cf3").textContent);
         cifra=cifra+1;
         prover(cifra,nomer);
         result = num1 + 85;
           break;
         case '-85':
         var nomer="cf3";
         var cifra = Number(document.getElementById("cf3").textContent);
         if (cifra!=0){
          cifra=cifra-1;
          prover(cifra,nomer);
          result = num1 - 85;
         }
           break;
       case '+5':
         var nomer="cf4";
         var cifra = Number(document.getElementById("cf4").textContent);
         cifra=cifra+1;
         prover(cifra,nomer);
         result = num1 + 5;
           break;
         case '-5':
         var nomer="cf4";
         var cifra = Number(document.getElementById("cf4").textContent);
         if (cifra!=0){
          cifra=cifra-1;
          prover(cifra,nomer);
          result = num1 - 5;
         }
           break;
       }
     if (result>=0){
     document.getElementById("result").innerHTML = result;
     } 
     }




     //ссылки
     var gitHubText = document.getElementById("gitHubText");
     if (gitHubText) {
       gitHubText.addEventListener("click", function () {
         window.open("https://github.com/");
       });
     }
     
     var figmaText = document.getElementById("figmaText");
     if (figmaText) {
       figmaText.addEventListener("click", function () {
         window.open(
           "https://www.figma.com/file/nGp21tqy0V6RtFlRI1mQp8/dog?node-id=19%3A187&t=veWYQzbno9XWlxno-1"
         );
       });
     }
           
     //переход на главную
     var button2 = document.getElementById("button2");
     if (button2) {
       button2.addEventListener("click", function (e) {
         window.location.href = 'index.html';
       });
     }
     
     var zap = document.getElementById("zap");
     if (zap) {
       zap.addEventListener("click", function (e) {
         window.location.href = 'index.html';
       });
     }


     //пуш уведомление и перезагр
     var pus2 = document.querySelector('.btn-zapis');
     if (pus2) {
       pus2.addEventListener("click", function (e) {
         alert("Запись выполнена успешно!");

         location.reload(); return false;
       });
     }

