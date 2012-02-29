Event.observe(window, 'load', function(){
	   var el = document.createElement('div');
	   var regClick = 0;
	   el.setAttribute('ongesturestart', 'return;');
	   var navEl = $$('#nav>li>a');
	   if(typeof el.ongesturestart == "function"){
	   	  navEl.invoke('observe', 'click', function(navClick){
	   	      
	   	      if(regClick == 0){
	   	          Event.stop(navClick);
	   	          regClick = 1;
	   	      }else{
	   	          regClick = 0;
	   	      }
	   	      
	   	  });
	   }
});