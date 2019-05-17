function ProgressBar(engine) {
   var HEIGHT_FRACTION = 0.06;

   var that = {};
   var progressBoxes = [];

   var div = document.getElementById('progressBarDiv');

   function init() {
   }

   that.getHeight = function() {
      return $('#progressBarDiv').height();
   }

   that.createLessonIcons = function(progressModel) {
      // Remove all the old lessons
      for (var i = 0; i < progressBoxes.length; i++) {
         progressBoxes[i].deleteDiv();
      }
      progressBoxes.length = 0;
      
      var numLessons = progressModel.getNumLessons();
      for (var i = 0; i < numLessons; i++) {
         var unit = progressModel.getUnitIndex();
         var lesson = i + 1;
         var toolTip = 'Lesson: ' + lesson;
         progressBoxes.push(ProgressBox(engine, lesson, 'none', toolTip));
      }

      that.updateLessonIcons(progressModel);
      that.resize(true);
   }

   that.updateLessonIcons = function(progressModel) {
      var numLessons = progressModel.getNumLessons();
      for (var i = 0; i < numLessons; i++) {
         var lessonIndex = (i + 1);
         var status = progressModel.getLessonStatus(lessonIndex);
         var current = progressModel.getLessonIndex() == lessonIndex;
         progressBoxes[i].setCurrent(current);
         progressBoxes[i].setStatus(status);
      }
   }

   that.resize = function(show) {
      var contentHeight = $('#content').height();
      var progressHeight = contentHeight * HEIGHT_FRACTION;
      if(!show) progressHeight = 0;
      div.style.height = progressHeight + 'px';
   
      var y = contentHeight - progressHeight;
      div.style.top = (y) + 'px';
      for (var i = 0; i < progressBoxes.length; i++) {
         progressBoxes[i].setPos(i, progressBoxes.length);
      }
   }

   init();
   return that;

}
