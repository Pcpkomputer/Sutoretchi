var jamu = jamu || (function(){
	
var IsiIMG = $("#viewer");	
var pej = $(".wid60")[0]	
									
IsiIMG.empty();	


for(i = 0; i < pej.length ; i++)											
{
	
	url = pej[i].value;	
	//console.log(url);				
	IsiIMG.append('<div id=img'+i+'></div>')
	$('#img'+i).load( url +' #image', function() {
    //console.log("zzzzzzzzzzzzzzzzzz");
	$('#image').css("display", "inline");
	//var isi=$('#image').attr('src');
	//console.log(isi);
		});			
}
	return true;
  
})();