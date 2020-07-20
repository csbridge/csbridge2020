function UnitProgress() {
   var that = {};

   var lessonProgressList = [];

   that.addLesson = function(status) {
      lessonProgressList.push(status);
   }

   that.lessonFinished = function(index) {
      lessonProgressList[index] = 'finished';
   }

   that.getLessonStatus = function(index) {
      return lessonProgressList[index];
   }

   that.getNumLessons = function() {
      return lessonProgressList.length;
   }

   that.isLastLesson = function(index) {
      return index + 1 >= lessonProgressList.length;
   }

   that.lessonStarted = function(index) {
      if(lessonProgressList[index] == 'notStarted') {
         lessonProgressList[index] = 'started';
      }
   }

   return that;

}


