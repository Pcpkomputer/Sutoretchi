var jamu = jamu || (function(){
	
var IsiIMG = $("#viewer");	
var pej = $(".wid60")[0]	
									
IsiIMG.empty();	
var link;
var isi="";
link=window.location.href;
$.getJSON("https://test-yudha.herokuapp.com/?mode=json&link="+link, function(data){
for(i=0;i<data.links.length;i++){
	isi+='<img src="'+data.links[i]+'" onload="loadImg(this)" style="display: inline;margin:0 auto;" width="777" id="image"/>'
}
IsiIMG.append(isi);
});
	return true;
  
})();