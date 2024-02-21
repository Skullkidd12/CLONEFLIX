let teste = document.documentElement.innerHTML
function CreateTextFile() {
   var blob = new Blob([teste], {
   type: "text/plain;charset=utf-8",
   });
   saveAs(blob, "download.html"); 
   }

   