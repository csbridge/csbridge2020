function LessonsModel() {
   var that = {};
   var currentLesson;

   that.getNumUnits = function() {
      return LessonsModel.unitNames.length;
   }

   that.getNumLessons = function(unit) {
      var lesson = 0;
      while (true) {
         var lessonName = 'Unit' + unit + 'Lesson' + (lesson + 1);
         var fn = window[lessonName];
         if(typeof fn != 'function') {
            break;
         }
         lesson += 1;
      }
      return lesson;
   }

   that.createLesson = function(progressModel, finishedCallback) {

      if (progressModel.isAtHomescreen()) return HomeScreen(progressModel, finishedCallback);

      var unitIndex = progressModel.getUnitIndex();
      var lessonIndex = progressModel.getLessonIndex();

      var lessonName = 'Unit' + unitIndex + 'Lesson' + lessonIndex;

      currentLesson = window[lessonName](finishedCallback);
      return currentLesson;
   }

   return that;
}

LessonsModel.milestoneUnits = [5, 9, 13];
LessonsModel.unitNames = [
   'Meet Karel',
   'Commands',
   'Programs',
   'Functions',
   'Newspaper',
   'Repeat',
   'Conditionals',
   'While',
   'If',
   'Color',
   'Random',
   'Midpoint',
]

function AddEqualCheck(ide1, ide2, action, callback) {
   return function() {
      action();
      var model1 = ide1.getModel();
      var model2 = ide2.getModel();
      if (model1.equals(model2)) {
         callback();
      }
   }
}

function BasicIdeLesson(world, starterCode, unitTests, goalImages, finishedCallback) {
   var that = {};
   that.elements = [];
   
   var IDE_WIDTH = 0.95;
   var IDE_LEFT = (1- IDE_WIDTH) / 2;
   var IDE_TOP = 0.05;
   var IDE_HEIGHT = 0.76;
   var GOAL_TOP = 0.83;
   var GOAL_HEIGHT = 0.15;
   var GOAL_WIDTH = GOAL_HEIGHT / Const.LEARN_ASPECT_RATIO;
   var GOAL_SPACING = GOAL_HEIGHT / 5;
   var GOAL_TEXT_WIDTH = 0.16;
   var GOAL_TEXT_HEIGHT = 0.08;
   var GOAL_TEXT_TOP = GOAL_TOP + (GOAL_HEIGHT - GOAL_TEXT_HEIGHT)/2;
   var RUN_WIDTH = 0.2;
   var RUN_HEIGHT = 0.1;
   var ITERS_SPACING = 0.03;

   var numGoal = Object.keys(goalImages).length
   var goalIconsWidth = GOAL_TEXT_WIDTH + numGoal * GOAL_WIDTH + (numGoal - 1) * GOAL_SPACING;
   var intersWidth = goalIconsWidth + RUN_WIDTH + ITERS_SPACING;
   var intersLeft = (1 - intersWidth) / 2;
   var goalLeft = intersLeft + RUN_WIDTH + ITERS_SPACING
   var dim = {
      left:IDE_LEFT, 
      top:IDE_TOP, 
      width:IDE_WIDTH, 
      height:IDE_HEIGHT
   };
   
   var runDim = {
      left:intersLeft, 
      top:GOAL_TOP + (GOAL_HEIGHT - RUN_HEIGHT)/2, 
      width:RUN_WIDTH, 
      height:RUN_HEIGHT
   };
   
   var ideSettings = {};
   ideSettings.buttonBar = false;
   ideSettings.world = world;
   ideSettings.readOnly = true;
   that.ide = KarelIdeElement(dim, 'centerAreaDiv', ideSettings);
   var runButton = TextButton(runDim, 'Run', 'centerAreaDiv', function() {
      that.ide.getIde().playButton(runUnitTests);
   });
   runButton.setHeightFraction(0.60);
   runButton.setDisabled();
   that.elements.push(that.ide);
   that.elements.push(runButton);

   
   
   var i = 0;

   var goalTextDim = {
      left:goalLeft,
      top:GOAL_TEXT_TOP,
      height:GOAL_TEXT_HEIGHT,
      width:GOAL_TEXT_WIDTH
   }
   var goalText = TextElement(goalTextDim, 'Goal: ', 'centerAreaDiv');
   that.elements.push(goalText);
   that.goalElements = [];
   for (input in goalImages) {
      var left = goalLeft;
      left += i * (GOAL_WIDTH + GOAL_SPACING) + GOAL_TEXT_WIDTH;
      var goalDim = {
         left:left,
         top:GOAL_TOP,
         width:GOAL_WIDTH,
         height:GOAL_HEIGHT
      };
      var start = input;
      var goal = goalImages[input];
      var goal = UnitTestElement(goalDim, start, goal, 'centerAreaDiv');
      that.elements.push(goal);
      that.goalElements.push(goal);
      i++;
   }

   function runUnitTests() {
      var initialList = [];
      for (test in unitTests) {
         initialList.push(test);
      }
      var index = 0;

      function runUnitTest(index, failed) {
         if (index == initialList.length) {
            if (!failed)finishedCallback();
            for (var i =0; i < that.goalElements.length; i++) {
               that.goalElements[i].clearTestResult();
            }
         } else {
            
            var startWorld = initialList[index];
            var endWorld = unitTests[startWorld];

            var unitTestCallback = function(passedCurrent) {
               var timeoutFn = function() {
                  runUnitTest(index + 1, failed || !passedCurrent);
               }
               that.goalElements[index].animateTestResults(passedCurrent);
               setTimeout(timeoutFn, 400);
            }
            
            that.ide.runUnitTest(startWorld, endWorld, unitTestCallback);
            
         }
         
      }
      runUnitTest(0, false);
  
   }


   function finished() {
      runButton.setEnabled();
	   that.ide.getEditor().focus();
   }

   function animateCode() {
      
      that.ide.animateCode(starterCode, finished);
   }

   setTimeout(animateCode, 800);

   
   return that;
}

function BasicIdeDemo(soln, world, starterCode, editable, finishedCallback) {
   var that = {};
   that.elements = [];
   
   var IDE_WIDTH = 0.95;
   var IDE_LEFT = (1- IDE_WIDTH) / 2;
   var IDE_TOP = 0.05;
   var IDE_HEIGHT = 0.75;
   var dim = {
      left:IDE_LEFT, 
      top:IDE_TOP, 
      width:IDE_WIDTH, 
      height:IDE_HEIGHT
   };
   
   var runDim = {
      left:0.35, 
      top:0.85, 
      width:0.3, 
      height:0.12
   };
   
   var ideSettings = {};
   ideSettings.buttonBar = false;
   ideSettings.world = world;
   ideSettings.readOnly = true;
   that.ide = KarelIdeElement(dim, 'centerAreaDiv', ideSettings);
   var runButton = TextButton(runDim, 'Run', 'centerAreaDiv', function() {
      that.ide.getIde().playButton(function() {
         
         finishedCallback();
      });
   });
   runButton.setHeightFraction(0.60);
   runButton.setDisabled();
   that.elements.push(that.ide);
   that.elements.push(runButton);


   function finished() {
      that.ide.getEditor().setReadOnly(true);
      runButton.setEnabled();
   }

   function animateCode() {
      
      that.ide.animateCode(starterCode, finished);
   }

   setTimeout(animateCode, 800);

   
   return that;
}

function Unit12Lesson1(finishedCallback) {
   var world = '7x7';
   var starterCode = 'midpointStarter.js';
   var unitTests = {
      '5x5':'5x5MidSoln',
      '7x7':'7x7MidSoln',
   };
   var goalImages = {
      'images/goals/start9.PNG' : 'images/goals/goal14.PNG',
      'images/goals/start8.PNG' : 'images/goals/goal15.PNG',
   };
   var that = BasicIdeLesson(world, starterCode, unitTests, goalImages, finishedCallback);
   return that; 
}

function Unit11Lesson2(finishedCallback) {
   var solution = 'karelCode/randomLesson2.js';
   var world = '9x9';
   var starterCode = 'randomLesson2.js';
   var that = BasicIdeDemo(solution, world, starterCode, false, finishedCallback);
   return that;  
}

function Unit11Lesson1(finishedCallback) {
   var solution = 'karelCode/randomLesson1.js';
   var world = '9x9';
   var starterCode = 'randomLesson1.js';
   var that = BasicIdeDemo(solution, world, starterCode, false, finishedCallback);
   return that;  
}

function Unit10Lesson2(finishedCallback) {
   var solution = 'karelCode/colorLesson2.js';
   var world = '3x6';
   var starterCode = 'colorLesson2.js';
   var that = BasicIdeDemo(solution, world, starterCode, false, finishedCallback);
   return that; 
}

function Unit10Lesson1(finishedCallback) {
   var solution = 'karelCode/colorLesson1.js';
   var world = '2x2';
   var starterCode = 'colorLesson1.js';
   var that = BasicIdeDemo(solution, world, starterCode, false, finishedCallback);
   return that; 
}

function Unit9Lesson2(finishedCallback) {
   var world = 'column1';
   var starterCode = 'columnStarter.js';
   var unitTests = {
      'column1':'column1Soln',
      'column2':'column2Soln',
   };
   var goalImages = {
      'images/goals/start16.PNG' : 'images/goals/goal16.PNG',
      'images/goals/start17.PNG' : 'images/goals/goal17.PNG',
   };
   var that = BasicIdeLesson(world, starterCode, unitTests, goalImages, finishedCallback);
   return that;
}

function Unit9Lesson1(finishedCallback) {
   var solution = 'karelCode/ifelse.js';
   var worlds = [
      'invert',
   ]
   var index = Math.floor(Math.random() * worlds.length);
   var world = worlds[index];
   var starterCode = 'ifelse.js';
   var that = BasicIdeDemo(solution, world, starterCode, false, finishedCallback);
   return that;
}

function Unit8Lesson5(finishedCallback) {
   var world = '8x8';
   var starterCode = 'whileLesson5.js';
   var unitTests = {
      '5x5':'5x5FillSoln',
      '8x8':'8x8FillSoln',
   };
   var goalImages = {
      'images/goals/start9.PNG' : 'images/goals/goal12.PNG',
      'images/goals/start8.PNG' : 'images/goals/goal13.PNG',
   };
   var that = BasicIdeLesson(world, starterCode, unitTests, goalImages, finishedCallback);
   return that; 
}

function Unit8Lesson4(finishedCallback) {
   var solution = 'karelCode/whileLesson4.js';
   var worlds = [
      'clean1',
   ]
   var index = Math.floor(Math.random() * worlds.length);
   var world = worlds[index];
   var starterCode = 'whileLesson4.js';
   var that = BasicIdeDemo(solution, world, starterCode, false, finishedCallback);
   return that; 
}

function Unit8Lesson3(finishedCallback) {
   var world = '8x8';
   var starterCode = 'whileLesson3.js';
   var unitTests = {
      '5x5':'5x5BeeperLineSoln',
      '8x8':'8x8BeeperLineSoln',
   };
   var goalImages = {
      'images/goals/start9.PNG' : 'images/goals/goal10.PNG',
      'images/goals/start8.PNG' : 'images/goals/goal11.PNG',
   };
   var that = BasicIdeLesson(world, starterCode, unitTests, goalImages, finishedCallback);
   return that; 
}

function Unit8Lesson2(finishedCallback) {
   var world = '8x8';
   var starterCode = 'whileLesson2.js';
   var unitTests = {
      '5x5':'5x5WallSoln',
      '8x8':'8x8WallSoln',
   };
   var goalImages = {
      'images/goals/start9.PNG' : 'images/goals/goal9.PNG',
      'images/goals/start8.PNG' : 'images/goals/goal8.PNG',
   };
   var that = BasicIdeLesson(world, starterCode, unitTests, goalImages, finishedCallback);
   return that; 
}

function Unit8Lesson1(finishedCallback) {
   var solution = 'karelCode/whileLesson1.js';
   var worlds = [
      'while1',
      'while2',
      'while3'
   ]
   var index = Math.floor(Math.random() * worlds.length);
   var world = worlds[index];
   var starterCode = 'whileLesson1.js';
   var that = BasicIdeDemo(solution, world, starterCode, false, finishedCallback);
   return that; 
}

function Unit7Lesson3(finishedCallback) {
   var buttonSrcs = [
      './images/puzzles/image5.png',
      './images/puzzles/image6.png',
      './images/puzzles/image7.png',
      './images/puzzles/image8.png',
   ];
   var labels = [
      '<code>notFacingSouth()</code>',
      '<code>frontIsBlocked()</code>',
      '<code>noBeepersPresent()</code>',
      '<code>rightIsClear()</code>'
   ];
   return PictureLesson(buttonSrcs, labels, finishedCallback, false);
}

function Unit7Lesson2(finishedCallback) {
   var buttonSrcs = [
      './images/puzzles/image1.png',
      './images/puzzles/image2.png',
      './images/puzzles/image3.png',
      './images/puzzles/image4.png',
   ];
   var labels = [
      '<code>frontIsClear()</code>',
      '<code>notFacingEast()</code>',
      '<code>leftIsClear()</code>',
      '<code>beepersPresent()</code>'
   ];
   return PictureLesson(buttonSrcs, labels, finishedCallback, false);
}

function Unit7Lesson1(finishedCallback) {
   var buttonSrcs = [
      './images/northIcon.png',
      './images/southIcon.png',
      './images/eastIcon.png',
      './images/westIcon.png',
   ];
   var labels = [
      '<code>facingNorth()</code>',
      '<code>facingSouth()</code>',
      '<code>facingEast()</code>',
      '<code>facingWest()</code>'
   ];
   return PictureLesson(buttonSrcs, labels, finishedCallback, false);
}

function Unit6Lesson2(finishedCallback) {

   var world = '3x3';
   var starterCode = 'repeatLesson2.js';
   var unitTests = {
      '3x3':'putFifty',
   };
   var goalImages = {
      'images/goals/start7.PNG' : 'images/goals/goal7.PNG',
   };
   var that = BasicIdeLesson(world, starterCode, unitTests, goalImages, finishedCallback);
   return that; 
}

function Unit6Lesson1(finishedCallback) {
   var solution = 'karelCode/repeatLesson1.js';
   var world = '3x3';
   var starterCode = 'repeatLesson1.js';
   var that = BasicIdeDemo(solution, world, starterCode, false, finishedCallback);
   return that;  
}

function Unit5Lesson1(finishedCallback) {
   var world = 'collectNewspaper';
   var starterCode = 'newspaperStarter.js';
   var unitTests = {
      'collectNewspaper':'collectNewspaperSoln',
   };
   var goalImages = {
      'images/goals/start6.PNG' : 'images/goals/goal6.PNG',
   };
   var that = BasicIdeLesson(world, starterCode, unitTests, goalImages, finishedCallback);
   return that; 
}

function Unit4Lesson2(finishedCallback) {
   var world = '2x2';
   var starterCode = 'fnsLesson2Starter.js';
   var unitTests = {
      '2x2':'turnArounds',
   };
   var goalImages = {
      'images/goals/start5.PNG' : 'images/goals/goal5.PNG',
   };
   var that = BasicIdeLesson(world, starterCode, unitTests, goalImages, finishedCallback);
   return that;   
}

function Unit4Lesson1(finishedCallback) {
   var solution = 'karelCode/fnsLesson1Starter.js';
   var world = 'turnRight';
   var starterCode = 'fnsLesson1Starter.js';
   var that = BasicIdeDemo(solution, world, starterCode, false, finishedCallback);
   return that;   
}

function Unit3Lesson6(finishedCallback) {
   var world = 'pickBeeper';
   var starterCode = 'runLesson6Starter.js';
   var unitTests = {
      'pickBeeper':'pickBeepers',
   };
   var goalImages = {
      'images/goals/start4.PNG' : 'images/goals/goal4.PNG',
   };
   var that = BasicIdeLesson(world, starterCode, unitTests, goalImages, finishedCallback);
   return that;   
}

function Unit3Lesson5(finishedCallback) {
   var world = 'putBeeper';
   var starterCode = 'runLesson5Starter.js';
   var unitTests = {
      'putBeeper':'putBeepers',
   };
   var goalImages = {
      'images/goals/start3.PNG' : 'images/goals/goal3.PNG',
   };
   var that = BasicIdeLesson(world, starterCode, unitTests, goalImages, finishedCallback);
   return that;   
}

function Unit3Lesson4(finishedCallback) {
   var world = 'singleStep';
   var starterCode = 'runLesson4Starter.js';
   var unitTests = {
      'singleStep':'singleSteps',
   };
   var goalImages = {
      'images/goals/start2.PNG' : 'images/goals/goal2.PNG',
   };
   var that = BasicIdeLesson(world, starterCode, unitTests, goalImages, finishedCallback);
   return that;  
}

function Unit3Lesson3(finishedCallback) {
   var solution = 'karelCode/unit2Lesson3Soln.js';
   var world = '4x4';
   var starterCode = 'runLesson3Starter.js';
   var unitTests = {
      '4x4':'4x4s',
   };
   var goalImages = {
      'images/goals/start1.PNG' : 'images/goals/goal1.PNG',
   };
   var that = BasicIdeLesson(world, starterCode, unitTests, goalImages, finishedCallback);
   return that; 
}

function Unit3Lesson2(finishedCallback) {
   var solution = 'karelCode/unit2Lesson2Soln.js';
   var world = '4x4';
   var starterCode = 'runLesson2Starter.js';
   var that = BasicIdeDemo(solution, world, starterCode, false, finishedCallback);
   return that; 
}


function Unit3Lesson1(finishedCallback) {
   var solution = 'karelCode/unit2Lesson1Soln.js';
   var world = '4x4';
   var starterCode = 'runLesson1Starter.js';
   var that = BasicIdeDemo(solution, world, starterCode, false, finishedCallback);
   return that;   
}

function Unit2Lesson8(finishedCallback) {
   var buttons = {
       move : true,
	   turnLeft : true,
	   putBeeper : true,
	   pickBeeper : true
   };
   return ButtonLesson(buttons, 'ledge', 'karelCode/unit1Lesson5Soln.js', finishedCallback);
}

function Unit2Lesson7(finishedCallback) {
   var buttons = {
       move : true,
	   turnLeft : true,
	   putBeeper : true,
	   pickBeeper : true
   };
   return ButtonLesson(buttons, '1x3Beeper', 'karelCode/moveAndPickSln.js', finishedCallback);
}

function Unit2Lesson6(finishedCallback) {
   var buttons = {
       move : true,
	   turnLeft : true,
	   putBeeper : true,
	   pickBeeper : true
   };
   return ButtonLesson(buttons, '1x3', 'karelCode/unit1Lesson4Soln.js', finishedCallback);
}

function Unit2Lesson5(finishedCallback) {
   var buttons = {
       move : false,
	   turnLeft : false,
	   putBeeper : true,
	   pickBeeper : false
   };
   return ButtonLesson(buttons, '1x1', 'karelCode/simplePutSln.js', finishedCallback);
}

function Unit2Lesson4(finishedCallback) {
   var buttons = {
       move : true,
	   turnLeft : true,
	   putBeeper : false,
	   pickBeeper : false
   };
   return ButtonLesson(buttons, 'turnLeft', 'karelCode/unit1Lesson3Soln.js', finishedCallback);
}

function Unit2Lesson3(finishedCallback) {
   var buttons = {
       move : false,
	   turnLeft : true,
	   putBeeper : false,
	   pickBeeper : false
   };
   return ButtonLesson(buttons, '1x1', 'karelCode/simpleTurnLeftSln.js', finishedCallback);
}

function Unit2Lesson2(finishedCallback) {
   var buttons = {
       move : true,
	   turnLeft : false,
	   putBeeper : false,
	   pickBeeper : false
   };
   return ButtonLesson(buttons, 'move', 'karelCode/unit1Lesson2Soln.js', finishedCallback);
}

function Unit2Lesson1(finishedCallback) {
   var buttons = {
       move : true,
	   turnLeft : false,
	   putBeeper : false,
	   pickBeeper : false
   };
   return ButtonLesson(buttons, '2x2', 'karelCode/simpleMoveSln.js', finishedCallback);
}

function ButtonLesson(buttonMap, world, solution, finishedCallback) {
   var that = {};

   var dynamicDim = {left:0.515, top:0.2, width:0.3, height:0.3};
   var staticDim = {left:0.185, top:0.2, width:0.3, height:0.3};
   var staticKarel = KarelStaticCanvasElement(staticDim,world);
   var dynamicKarel = KarelStaticCanvasElement(dynamicDim,world);
   var textDim1 = {left:0.185, top:0.1, width:0.3, height:0.074};
   var textDim2 = {left:0.515, top:0.1, width:0.3, height:0.074};
   var buttonDim1 = {left:0.35, top:0.7, width:0.3, height:0.12};
   var ide = dynamicKarel.getIde();

   that.elements = [];
   that.elements.push(staticKarel);
   that.elements.push(dynamicKarel);
   that.elements.push(TextBox(textDim1, 'Goal'));
   that.elements.push(TextBox(textDim2, 'World'));
   
   var actionMap = {};
   actionMap.move = AddEqualCheck(ide, staticKarel.getIde(), ide.stepMove, finishedCallback);
   actionMap.turnLeft = AddEqualCheck(ide, staticKarel.getIde(), ide.stepTurnLeft, finishedCallback);
   actionMap.putBeeper = AddEqualCheck(ide, staticKarel.getIde(), ide.stepPutBeeper, finishedCallback);
   actionMap.pickBeeper = AddEqualCheck(ide, staticKarel.getIde(), ide.stepPickBeeper, finishedCallback);
   
   var textMap = {};
   textMap.move = '<b>move();</b>';
   textMap.turnLeft = '<b>turnLeft();</b>';
   textMap.putBeeper = '<b>putBeeper();</b>';
   textMap.pickBeeper = '<b>pickBeeper();</b>';
   
   var buttonDim = [];
   buttonDim.push({left:0.185, top:0.65, width:0.3, height:0.12});
   buttonDim.push({left:0.515, top:0.65, width:0.3, height:0.12});
   buttonDim.push({left:0.185, top:0.8, width:0.3, height:0.12});
   buttonDim.push({left:0.515, top:0.8, width:0.3, height:0.12});
   
   var numButtons = 0;
   for (key in buttonMap) {
      if (buttonMap[key]) numButtons++;
   }

   that.buttons = [];
   var dimIndex = 0;
   for (key in buttonMap) {
      if (!buttonMap[key]) continue;
      var dim = buttonDim[dimIndex];
	  if (dimIndex == numButtons - 1 && numButtons % 2 == 1) {
         dim.left = (0.185 + 0.515) / 2 ;
	  }	  
	  var text = textMap[key];
	  var action = actionMap[key];
      that.buttons.push(KarelCommandButton(dim, text, action));
	  dimIndex++;
   }
   
   for (var i = 0; i < that.buttons.length; i++ ) {
      that.elements.push(that.buttons[i]);
   }

   function animationFinished() {
      for(var i = 0; i < that.buttons.length; i++) {
         that.buttons[i].setEnabled();
      }
   }

   function startAnimation() {
      for(var i = 0; i < that.buttons.length; i++) {
         that.buttons[i].setDisabled();
      }
      staticKarel.animate(solution, animationFinished);
   }  

   setTimeout(startAnimation, 1500);
   
   return that;
} 

function PictureDemo(buttonSrcs, labels, finishedCallback) {
   var that = {};
   var textDim = {left:0.342, top:0.014, width:0.316, height:0.074};

   var positions = [
      {left:0.169, top:0.11, width:0.316, height:0.42},
      {left:0.515, top:0.11, width:0.316, height:0.42},
      {left:0.169, top:0.56, width:0.316, height:0.42},
      {left:0.515, top:0.56, width:0.316, height:0.42}
   ];
   
   that.elements = [];
   that.imageButtons = [];
   for (var i = 0; i < buttonSrcs.length; i++) {
	 var callback = function(){};
	 var button = ImageButton(positions[i], buttonSrcs[i], callback, false);
	 that.elements.push(button);
	 that.imageButtons.push(button);
  }
  
  that.demoImage = function() {
     if (that.imageIndex == that.imageButtons.length) {
	    finishedCallback();
		return;
     }
	 var labelText = labels[that.imageIndex];
	 var labelDim = that.imageButtons[that.imageIndex].getLabelSlotDim();
     var label = TextBox(labelDim, labelText);
     label.setTextHeightFraction(0.6);
	 label.resize();
     that.elements.push(label);
	 $(label.div).fadeIn(500);
	 that.imageIndex += 1;
	 setTimeout(that.demoImage, 2000);
  }
  
  that.imageIndex = 0;
  setTimeout(that.demoImage, 500);
  
  return that;
}

function PictureLesson(buttonSrcs, labels, finishedCallback, demo) {
   var that = {};
   var textDim = {left:0.342, top:0.014, width:0.316, height:0.074};

   var positions = [
      {left:0.169, top:0.11, width:0.316, height:0.42},
      {left:0.515, top:0.11, width:0.316, height:0.42},
      {left:0.169, top:0.56, width:0.316, height:0.42},
      {left:0.515, top:0.56, width:0.316, height:0.42}
   ];
   
   that.generatePuzzle = function() {
      var orderMap = [];
      var indicies = [];
      for (var i = 0; i < buttonSrcs.length; i++){
         indicies.push(i);
      }
      for (var i = 0; i < buttonSrcs.length; i++) {
         var maxIndex = indicies.length;
         var randomIndex = Math.floor(Math.random()*maxIndex);
         orderMap.push(indicies[randomIndex]);
         indicies.splice(randomIndex, 1);
      }
      
      that.elements = [];
	  that.imageButtons = [];
      for (var i = 0; i < buttonSrcs.length; i++) {
         var buttonIndex = orderMap.indexOf(i);
         var callback;
         switch(i) {
            case 0: callback = function(){that.buttonClicked(0)}; break;
            case 1: callback = function(){that.buttonClicked(1)}; break;
            case 2: callback = function(){that.buttonClicked(2)}; break;
            case 3: callback = function(){that.buttonClicked(3)}; break;
         }
         var button = ImageButton(positions[i], buttonSrcs[buttonIndex], callback, true);
         that.elements.push(button);
		 that.imageButtons.push(button);
      }

      that.answerIndex = orderMap[that.questionIndex];
      var questionLabel = labels[that.questionIndex];
	  var labelDim = textDim;
      that.questionBox = TextBox(labelDim, questionLabel);
      that.questionBox.setTextHeightFraction(0.6);
      that.elements.push(that.questionBox);
   }

   that.buttonClicked = function(index) {
      if (index == that.answerIndex) {
         var button = that.elements[index];
         button.animateCorrect(that.questionBox, that.nextPuzzle);
      } else {
         that.elements[index].animateIncorrect();
      }
   }

   that.nextPuzzle = function() {
      function finishedFadeOut() {
         for (var i = 0; i < that.elements.length; i++) {
            that.elements[i].deleteDiv();

         }
         that.generatePuzzle();
         for (var i =0; i < that.elements.length; i++) {
            that.elements[i].resize();
            if (that.elements[i].innerImage != undefined) {
               $(that.elements[i].innerImage.div).fadeIn(600);
            }
            $(that.elements[i].div).fadeIn(600);
         }
      }
   
      that.questionIndex += 1;
      if (that.questionIndex >= buttonSrcs.length) {
         finishedCallback();
      } else {
         for (var i = 0; i < that.elements.length; i++) {
            if (that.elements[i].innerImage != undefined) {
               $(that.elements[i].innerImage.div).fadeOut(600);
            }
            $(that.elements[i].div).fadeOut(600);
         }
         setTimeout(finishedFadeOut, 600);
      }
   }
   
   that.questionIndex = 0;
   that.generatePuzzle();
   
   return that;
}

function Unit1Lesson2(finishedCallback) {
   var buttonSrcs = [
      './images/karelIcon.png',
      './images/beeperIcon.png',
      './images/world.png',
      './images/wall.png',
   ];
   var labels = [
      'Karel',
      'Beeper',
      'World',
      'Wall'
   ];
   return PictureLesson(buttonSrcs, labels, finishedCallback, false);
}

function Unit1Lesson1(finishedCallback) {
   var buttonSrcs = [
      './images/karelIcon.png',
      './images/beeperIcon.png',
      './images/world.png',
      './images/wall.png',
   ];
   var labels = [
      'Karel',
      'Beeper',
      'World',
      'Wall'
   ];
   return PictureDemo(buttonSrcs, labels, finishedCallback, true);
}



