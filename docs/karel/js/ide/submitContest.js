submitter = new Submitter();

function Submitter() {

	this.submitButtonPressed = function() {
		
		if (application == null) return;
		var code = application.getCode();
		if (code == null) return;
		code = encodeURIComponent(code);

		
		form = document.createElement("form");
		form.action = 'submit';
		form.method = 'post';
		
		codeField = document.createElement("input");
		codeField.name = 'code';
		codeField.value = code;
		form.appendChild(codeField);
  		form.submit();								
	}

	function popup(url)  {
		var width  = 300;
		var height = 300;
		var left   = (screen.width  - width)/2;
		var top    = (screen.height - height)/2;
		var params = 'width='+width+', height='+height;
		params += ', top='+top+', left='+left;
		params += ', directories=no';
		params += ', location=no';
		params += ', menubar=no';
		params += ', resizable=no';
		params += ', scrollbars=no';
		params += ', status=no';
		params += ', toolbar=no';
		newwin=window.open(url,'myWindow', params);
	}
}
