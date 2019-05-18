function VideoElement(dim, parentId, videoId) {
    var that = {};
   that.div = document.createElement('div');
   that = MakeAbsoluteDiv(that, parentId, dim);



   var videoUrl = 'http://player.vimeo.com/video/10584463?title=0&amp;byline=0&amp;portrait=0';
   var video = document.createElement('iframe');
   video.style.width = "100%";
   video.style.height = "100%";
   video.setAttribute("src", videoUrl);
   video.setAttribute('frameBorder', '0');
   
   that.div.appendChild(video);

   var resizeFn = that.resize;
   that.resize = function() {
      resizeFn();
   }

   return that;
}
