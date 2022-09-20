
self.addEventListener("install", (event) => {
  console.log("install");
});


self.addEventListener("fetch", (event) => {
  const resp = new Response(
    `
            body {
                color: grey;
                background-color: lightgrey;
            }   
        `,
    {
      headers: {
        "Content-Type": "text/css",
      },
    }
  );
  actividadImagen(event);
});

function actividadImagen (event) {
    if (event.request.url.includes(".jpg")) {
        console.log(event.request.url);
        event.respondWith(fetch("img/gato.jpg"));
    } 
}