(function() {
	const hoccoban = document.createElement('div');
	hoccoban.id = "hoccoban-chrome-extension-root-akl-vuong";	
	// Listen to the action triggered from background.js --> when clicked on the icon on the bar
	chrome.runtime.onMessage.addListener(
	   function(request, sender, sendResponse) {
	      if( request.message === "clicked_browser_action") {
	        toggle();	              
	      }
	   }
	);

	function toggle(){
	   if(hoccoban.style.display === "none"){
	     hoccoban.style.display = "block";
	   }else{
	     hoccoban.style.display = "none";
	   }
	}
	const html = document.querySelector("html");
	const contentDisplay = html.innerHTML;
	hoccoban.innerHTML = contentDisplay;	
	document.body.appendChild(hoccoban);
})();


