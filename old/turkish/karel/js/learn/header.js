function Header() {
   var HEIGHT_FRACTION = 0.05;
   var LESSON_TITLE_X_FRACTION = 0.26;

   var that = {};

   var div = document.getElementById('headerDiv');

   var lessonTitle = TitleElement(LESSON_TITLE_X_FRACTION, '');

   var homeButtonDim = {
      left:0, 
      top:0, 
      width:0.246, 
      height:1
   };

   var referenceDim = {
      left:0.86,
      top:0,
      width:0.14,
      height:1.0,
   }
   
   
   var homeButton = {};
   homeButton.div = document.createElement('div');
   homeButton.div.id = 'homeButton';
   homeButton = MakeAbsoluteDiv(homeButton, 'headerDiv', homeButtonDim);
   var logo = document.createElement('img');
   var linkUrl = "learn.html";
   var link = document.createElement('a');
   link.setAttribute('href', linkUrl);
   
   logo.id = 'homeButtonImage';
   logo.setAttribute('src', 'images/logo.png');
   var resize = homeButton.resize;
   homeButton.resize = function() {
      resize();
      var logo = document.getElementById('homeButtonImage');
      logo.style.height = homeButton.div.style.height;
      logo.style.width = homeButton.div.style.width;
   }
   homeButton.div.className = 'nonFadeInDiv';
   div.appendChild(homeButton.div);
   link.appendChild(logo);
   homeButton.div.appendChild(link);

   var referenceLink = {};
   referenceLink.div = document.createElement('a');
   referenceLink = MakeAbsoluteDiv(referenceLink, 'headerDiv', referenceDim);
   referenceLink.div.setAttribute('href', 'javascript:ReferenceDialog.createReferenceDialog()');
   referenceLink.div.className = 'resizableLink';
   referenceLink.div.innerHTML = 'Reference'

   that.getHeight = function() {
      return $('#headerDiv').height();
   }

   that.resize = function(show) {
      var contentHeight = $('#content').height();
      var headerHeight = contentHeight * HEIGHT_FRACTION;
      if(!show) headerHeight = 0;
      if(!show) homeButton.div.style.display = "none"
      div.style.height = headerHeight + 'px';
      lessonTitle.resize();
      homeButton.resize();
      var centerHeight = $('#headerDiv').height();
      var referenceLinkHeight = centerHeight * 0.5;
      referenceLink.div.style.fontSize = referenceLinkHeight + 'px';
      referenceLink.div.style.lineHeight = centerHeight + 'px';
      referenceLink.resize();
   }

   that.updateHeader = function(progressModel) {
      var text = 'Unit ' + progressModel.getUnitIndex();
      text += ' Lesson ' + progressModel.getLessonIndex();
      lessonTitle.setText(text);
   }
   
   return that;

}
