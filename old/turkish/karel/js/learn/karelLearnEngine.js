function KarelLearnEngine() {

   var that = {};

   var windowWidth = $(window).width();
   var windowHeight = $(window).height();
   var topicIndex = 0;
   var slideIndex = 0;
   var content = Content();

   
   var lessonsModel = LessonsModel();
   var progressModel = ProgressModel(lessonsModel);

   that.header = Header();
   that.centerArea = CenterArea();
   that.progressBar = ProgressBar(that);

   that.onWindowResize = function() {
      resize();
   }

   that.onHashChange = function () {
      var previousUnit = progressModel.getUnitIndex();
      var previousLesson = progressModel.getLessonIndex();
      progressModel.loadHash();
      var newUnit = progressModel.getUnitIndex();
      var newLesson = progressModel.getLessonIndex();
      if (newUnit != previousUnit || newLesson != previousLesson) {
         render(newUnit != previousUnit);
      }
   }

   that.changeLesson = function(lesson) {
      progressModel.changeLesson(lesson);
      that.centerArea.fadeOutElements(finishedChangeAnimation);
   }

   function render(newUnit) {
      //console.log('render');
      if (!progressModel.isAtHomescreen()) {
         if (newUnit) {
            that.progressBar.createLessonIcons(progressModel);
         } else {
            that.progressBar.updateLessonIcons(progressModel);
         }
         that.header.updateHeader(progressModel);
      }
     
      that.centerArea.createLesson(progressModel, lessonsModel, lessonFinished);
      progressModel.setHash();
   }

   function init() {
      render(true);
      resize();
   }

   function lessonFinished() {
      progressModel.finishedLesson();
      that.centerArea.fadeOutElements(finishedChangeAnimation);
   }

   function finishedChangeAnimation() {
      render(progressModel.isStartingNewUnit());  
   }

   function resize() {
      windowWidth = $(window).width(); 
      windowHeight = $(window).height();

      content.resize(progressModel);
      that.progressBar.resize(!progressModel.isAtHomescreen());
      that.header.resize(!progressModel.isAtHomescreen());
      var headerHeight = that.header.getHeight();

      var bodyHeight = content.getHeight();
      bodyHeight -= that.progressBar.getHeight();
      bodyHeight -= headerHeight;

      that.centerArea.setTop (headerHeight);
      that.centerArea.setHeight(bodyHeight);
      that.centerArea.resize();
   }

   
   init();
   return that;
}
