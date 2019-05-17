function HomeScreen(progressModel, finishedCallback) {
   var CONTINUE_WIDTH = 0.4;
   var CONTINUE_HEIGHT = 0.1;
   var CONTINUE_TOP = 0.1;
   var VIDEO_WIDTH = 0.4;
   var VIDEO_HEIGHT = 0.35;
   var VIDEO_TOP = 0.5;
   var PROGRESS_BAR_TOP = 0.3;
   var PROGRESS_BOX_WIDTH = 0.05;
   var PROGRESS_BOX_SPACING = 0.02;
   var that = {};
   that.elements = [];

   var continueDim = {
      left:(1 - CONTINUE_WIDTH) / 2, 
      top:CONTINUE_TOP, 
      width:CONTINUE_WIDTH, 
      height:CONTINUE_HEIGHT
   };
   var continueEvent = function() {
      var destinationUrl = 'lessons.html#';
      destinationUrl += progressModel.getHashForLesson(1, 1, 'english');
      window.location = destinationUrl;
   }
   var text = progressModel.hasStarted() ? 'Continue' : 'Start';
   var continueButton = TextButton(continueDim, text, 'content', continueEvent);
   that.elements.push(continueButton);

   that.elements = createUnitProgressDivs(progressModel, that.elements);

   var videoDim = {
      left:(1 - VIDEO_WIDTH) / 2, 
      top:VIDEO_TOP, 
      width:VIDEO_WIDTH, 
      height:VIDEO_HEIGHT
   };
   var imageWidth = 0.4 / Const.LEARN_ASPECT_RATIO;
   var imageDim = {
      left:(1 - imageWidth) / 2, 
      top:VIDEO_TOP, 
      width:imageWidth, 
      height:0.4
   };
   //var video = VideoElement(videoDim, 'content', 'GQlzz6jGCfI');
   //that.elements.push(video);
   var image = ImageElement(imageDim, 'images/stanford.gif', 'content');
   that.elements.push(image);


   function createUnitProgressDivs(progressModel, elements) {
      unitProgressList = progressModel.getUnitProgressList();
      var num = unitProgressList.length;
      var barWidth = num * (PROGRESS_BOX_WIDTH) + (num - 1) * PROGRESS_BOX_SPACING;
      var unitHeight = PROGRESS_BOX_WIDTH * Const.LEARN_ASPECT_RATIO;
      var barTop = PROGRESS_BAR_TOP;
      var barLeft = (1 - barWidth) / 2;
   
      for (var i = 0; i < unitProgressList.length; i++) {
         var offset = i * (PROGRESS_BOX_WIDTH + PROGRESS_BOX_SPACING);
         var left = barLeft + offset;
         var dim = {
            left: left,
            top: barTop,
            width: PROGRESS_BOX_WIDTH,
            height: unitHeight
         };
         var tooltip = LessonsModel.unitNames[i];
         var unit = i + 1;
         var callback = function(unit) {
            var hash = progressModel.getHashForLesson(unit, 1);
            var url = "lessons.html#" + hash;
            window.location = url;
         };
         var element = UnitBox('content',  dim, callback, unit, 'notStarted', tooltip);
         elements.push(element);
      }
      return elements;
   }
   
   return that; 
}
