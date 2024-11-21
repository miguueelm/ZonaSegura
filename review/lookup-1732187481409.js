(function(window, undefined) {
  var dictionary = {
    "d354d480-0c5a-4ce4-8ffb-1bc538eb7f0b": "Crear Cuenta(terminado)",
    "81136910-6c78-40eb-b929-e5b8885c0e77": "Opciones de App 2",
    "69c2d655-2614-4a91-89eb-76e1ada836bb": "Detectar Acoso(Terminada)",
    "75171dcf-a872-471a-bd8c-4feae7af4eb0": "Aprendizaje Ejs prácticos",
    "fa317b0d-ee6c-47d3-8fb0-0dbed357638e": "Aprendizaje Tests ",
    "4da7b788-7063-4ed5-b548-c85b08121846": "Aprendizaje Test 1(terminado)",
    "419c2778-ae3b-4243-8508-ea0b3026e612": "Contactar con un profesional(Terminado)",
    "6f4b24dc-49e7-4f57-b271-33460850bb2d": "Iniciar Sesión (terminado)",
    "b1325691-3b63-4d26-911a-15f0a7529fc8": "Aprendizaje Eje Prático 1(Terminado)",
    "c7026546-23eb-47e5-9ed1-b789c1125b82": "Aprendizaje Teoría(terminada)",
    "e2dff015-37e8-44a6-a3c2-d9ac0cfbf00b": "Aprendizaje Comprueba tus conocimientos(terminado)",
    "5b506daf-a620-47ad-85aa-bc857db6fcff": "Opciones de App(terminado)",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Bienvenido",
    "ddf1ad96-1f4c-4838-b36b-ef0fa8b9b7a7": "Reportar siendo víctima/testigo(terminado)",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "5663106f-03ab-46f2-b5a9-69874bee02fb": "Dynamic panel 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "Board 1"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);