function UnitTestElement(dim, srcStart, srcGoal, parentId) {
   var that = {};

   var ICON_WIDTH = 0.5;
   var ICON_TIMEOUT = 500;
   
   that.div = document.createElement('div');
   that = MakeAbsoluteDiv(that, parentId, dim);
   that.image = document.createElement('img');
   that.image.setAttribute('src', srcGoal);
   that.image.className = 'nonFadeInDiv';
   that.image.style.height = "100%";
   that.image.style.width = "100%";
   that.div.appendChild(that.image);
   

   var resizeFn = that.resize;
   that.resize = function() {
      resizeFn();
      that.image.style.height = that.div.style.height + 'px';
      that.image.style.width = that.div.style.width + 'px';
   }

   that.div.onmouseover = function() {
      that.image.setAttribute('src', srcStart);
   }
   
   that.div.onmouseout = function() {
      that.image.setAttribute('src', srcGoal);
   }

   that.clearTestResult = function() {
      $(that.iconElement.div).fadeOut('slow');
   }

   that.animateTestResults = function(passed) {
      if (passed) { 
         that.animateCorrect();
      } else {
         that.animateIncorrect();
      }
   }

   that.demo = function() {
      that.isLarge = true;
   }

   that.createHoverIcon = function(iconSrc) {
      var width = ICON_WIDTH * dim.width;
      var centerHeight = $('#centerAreaDiv').height();
      var centerWidth = $('#centerAreaDiv').width();
      var centerRatio = centerWidth / centerHeight;
      var height = width * centerRatio;
      var iconElementDim  = {
         left: dim.left + (dim.width-width)/2,
         top: dim.top + (dim.height-height)/2,
         width:width,
         height:height
      };
      that.iconElement = {};
      that.iconElement.div = document.createElement('img');
      that.iconElement = MakeAbsoluteDiv(that.iconElement, 'centerAreaDiv', iconElementDim);
      that.iconElement.div.setAttribute('src', iconSrc);
      that.iconElement.inheritVisibility();
      that.iconElement.resize();
   }

   that.animateIncorrect = function() {
      that.createHoverIcon('./images/wrong.png');
   }

   that.animateCorrect = function() {
      that.createHoverIcon('./images/correct.png');
      
   }
   
   return that;
}
