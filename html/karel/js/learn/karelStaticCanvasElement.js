function KarelStaticCanvasElement(dim, worldName) {
   var that = {};
   that.div = document.createElement('canvas');
   that = MakeAbsoluteDiv(that, 'centerAreaDiv', dim);

   var karelIde = KarelIde(null, that.div, worldName);

   var resize = that.resize;
   that.resize = function() {
      resize();
      karelIde.resizeCanvas(that.width, that.height);
   }

   that.getIde = function() {
      return karelIde;
   }


   that.animate = function(commandsUrl, animationFinished) {
      that.aniFinishedCallback = animationFinished;   
      loadDoc(commandsUrl, animateCommandsLoaded);
   }

   function animateCommandsLoaded(text) {
      that.aniIndex = 0;
      that.aniCommands = text.split("\n");
      animateLine();
   }

   function animateLine() {
      if (that.aniIndex >= that.aniCommands.length) {
         that.aniFinishedCallback();
         return;
      }
      if (!that.aniCommands[that.aniIndex]) {
         that.aniFinishedCallback();
         return;
      }
      var command = that.aniCommands[that.aniIndex].replace(/^\s+|\s+$/g, '');
      if (command == 'move') karelIde.stepMove();
      if (command == 'turnLeft')karelIde.stepTurnLeft();
      if (command == 'turnRight')karelIde.stepTurnRight();
      if (command == 'turnAround')karelIde.stepTurnAround();
      if (command == 'putBeeper')karelIde.stepPutBeeper();
      if (command == 'pickBeeper')karelIde.stepPickBeeper();
      that.aniIndex += 1;
      setTimeout(animateLine, 150);
   }
   
   that.resize();

   return that;
}
