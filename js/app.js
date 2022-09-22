// Se asegura de que el navegador usado tiene soporte para service worker
if (navigator.serviceWorker) {
    console.log("Es compatible sin escrúpulos");
 
    navigator.serviceWorker.register("./sw.js");
}