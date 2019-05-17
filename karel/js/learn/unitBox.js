function UnitBox(parentId, dim, callback, unit, status, tooltip) {

   var that = {};
   that.div = document.createElement('div');
   that = MakeAbsoluteDiv(that, parentId, dim);
   document.getElementById(parentId).appendChild(that.div);
   that.div.className = 'unitBox';
   setDefault();
   var current  = false;
   var label = null;
   that.div.onmouseover = onMouseOver;
   that.div.onmouseout = onMouseOut;
   that.div.onmousedown = onMouseDown;
   that.div.onmouseup = onMouseUp;
   that.div.onclick = function() {callback(unit)};
   that.div.title = tooltip;

   that.deleteDiv = function() {
      document.getElementById('progressBarDiv').removeChild(div);
   }
   
   that.setStatus = function(newStatus) {
      if (newStatus != status) {
         status = newStatus;
         setDefault();
      }
   }

   function onMouseUp() {
      that.div.style.background = 'blue';
   }

   function onMouseDown() {
      that.div.style.background = 'orange';
   }

   function onMouseOver() {
      that.div.style.background = 'blue';
   }

   function onMouseOut() {
      setDefault();
   }

   function setDefault() {
      if (current) {
         that.div.style.background = 'white';
      } else if (status == 'notStarted' || status == 'none') {
         that.div.style.background = 'grey';
      } else if (status == 'finished') {
         that.div.style.background = 'green';
      } else if (status == 'started') {
         that.div.style.background = 'lightblue';
      } else {
         throw 'status incorectly formated';
      }
   }
   
   return that;
}
