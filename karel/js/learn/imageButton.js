function ImageButton(dim, src, clickCallback, clickable) {

   var ICON_WIDTH = 0.5;
   var ICON_TIMEOUT = 500;

   var that = {};
   that.div = document.createElement('img');
   that = MakeAbsoluteDiv(that, 'centerAreaDiv', dim);
   //var id = Counter.getUniqueId();
   //that.div.id = id;
   that.div.setAttribute('src', 'images/puzzleFrame.png');
   that.div.className = 'imageButton';
   

   var topOffset = dim.height * 0.2;
   var innerDim = {
      left:dim.left,
      top:dim.top + topOffset,
      width:dim.width,
      height:dim.height - topOffset
   }
   that.innerImage = {};
   that.innerImage.div = document.createElement('img');
   that.innerImage = MakeAbsoluteDiv(that.innerImage, 'centerAreaDiv', innerDim);
   that.innerImage.div.setAttribute('src', src);
   that.innerImage.div.className = 'innerImage';

   that.coverDiv = {};
   that.coverDiv.div = document.createElement('span');
   that.coverDiv = MakeAbsoluteDiv(that.coverDiv, 'centerAreaDiv', dim);
   that.coverDiv.inheritVisibility();
   if (clickable){
      that.coverDiv.div.className = 'coverDiv';
   } else {
      that.coverDiv.div.className = 'coverDivNoHighlight'; 
   }

   that.coverDiv.div.onclick = function() {
      clickCallback();
   }
   
   var fadeFn = that.fadeOut;
   that.fadeOut = function(time) {
      fadeFn(time);
	  that.innerImage.fadeOut(time);
   }

   var deleteFn = that.deleteDiv;
   that.deleteDiv = function() {
      deleteFn();
      that.innerImage.deleteDiv();
      that.coverDiv.deleteDiv();
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

      function onFadeAwayFinish() {
         that.iconElement.deleteDiv();
      }

      function animateFadeAway() {
         $(that.iconElement.div).fadeOut('slow', onFadeAwayFinish);
         //$(that.innerImage.div).fadeOut('slow');
      }
      
      setTimeout(animateFadeAway,ICON_TIMEOUT);
   }
   
   that.getLabelSlotDim = function() {
      return { 
         left: dim.left, 
         top: dim.top, 
		 width: dim.width,
		 height: 0.2 * dim.height
      };
   }
   
   that.getLabelSlotPos = function() {
      return {
	     left: that.left + 'px',
		 top: that.top + 'px'
	  }
   }

   // This code NEEDs to be refractored to reduce repeated
   // code with that.animateIncorrect
   that.animateCorrect = function(label, animationFinished) {
      that.createHoverIcon('./images/correct.png');

      function fadeAwayAnimation() {
         $(that.iconElement.div).fadeOut('slow');
		 $(that.coverDiv.div).fadeOut('slow');
         $(label.div).fadeOut('slow', animationFinished);
      }

      function onFlyAnimationFinish() {
         setTimeout(fadeAwayAnimation,ICON_TIMEOUT, onFadeAwayFinish);
      }

      function onFadeAwayFinish() {
         that.iconElement.deleteDiv();
		 that.coverDiv.deleteDiv();
         label.deleteDiv();
         animationFinished();
      }

      label.div.className = 'roundedNoShadow';
      $($(label.div)).animate(that.getLabelSlotPos(), 'fast', onFlyAnimationFinish); 
      label.leftFraction = that.leftFraction;
      label.topFraction = that.topFraction;
      
   }

   var resize = that.resize;
   that.resize = function() {
      resize();
      if (that.iconElement) {
         that.iconElement.resize();
      }
      that.innerImage.resize();
      that.coverDiv.resize();
   }
   
   return that;
}
