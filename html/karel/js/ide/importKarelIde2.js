/**
 * Class: Karel Importer
 * --------------
 * Creates the elements that compose a Karel IDE including
 * A run button, a stop button, a world choser a text editor
 * and a canvas. Wires up all the elements so that you can
 * program Karel! The elements can have their style modified using
 * css.
 *
 * Assumes that the necessary Karel libraries have already been imported.
 *
 * Usage: In the body of an HTML page you can include the line
 * <script src="js/importKarelIde.js"></script>
 */
function ImportKarelIde2(settings) {
   that = {};

   var dim = {left:0, top:0, width:1, height:1};
   that.div = document.getElementById('main');
   that.ide = KarelIdeElement(dim, 'main');
   that.ide.resize();
   that.ide.inheritVisibility();

   window.onresize = function() {
      windowWidth = $(window).width(); 
      windowHeight = $(window).height();
      that.div.style.left = 0 + 'px';
      that.div.style.top = 0 + 'px';
      that.div.style.width = windowWidth + 'px';
      that.div.style.height = windowHeight + 'px';
      that.ide.resize();
   }
   return that;
}
