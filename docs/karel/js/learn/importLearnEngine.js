
function ImportLearnEngine() {
   var learnEngine = KarelLearnEngine();
   window.onresize = learnEngine.onWindowResize;
   window.onhashchange = learnEngine.onHashChange;
}

window.onload = function() {
   ImportLearnEngine();
}
