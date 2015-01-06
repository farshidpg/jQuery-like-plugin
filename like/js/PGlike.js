/* P.W ( PG WOLF ) LIKE & UNLIKE PLUGIN  */
/* ALL RIGHT RESERVED FOR WEBFARSHID.COM 2014-2015 - END in  : 7/9/2014 AT 4:16 Am - IRAN [ TEHRAN ] */
/* Farshid Rezaiyan Programmer : -->
PHP5 ( OOP - MVC - Smarty - PDO - WebService ) - jQuery ( OOP - Ajac - UI - MOBILE - Animate ) - Javascript ( OOP - AJAX )  - lib ( xml & json ) - HTML5 - CSS3 - Bootstra -  Mootools - Mysql - NODE.js - HTACCESS - Mysql - SQLlite - Python - JAVA  ;)


--- WEBSITE ---- : http://webfarshid.com
---- Email ----  : info@webfarshid.com - farshidrezaiyan@gmail.com 
Phone : For see my phone number Run this php code ;) !
[

$Phone = array('A'=>'&#48;','B'=>'&#49;','C'=>'&#50;','D'=>'&#51;','E'=>'&#52;','F'=>'&#53;','G'=>'&#54;','H'=>'&#55;','I'=>'&#56;','j'=>'&#57;');
function phoneNumber($array,$code)
{
	if($code == "PGNumber")
	{
		$callback = "&#43".$array["j"].$array["I"]."(".$array["A"].")".$array["j"].$array["B"].$array["C"]." ".$array["I"].$array["F"].$array["H"]." ".$array["B"].$array["I"].$array["H"]."-".$array["A"];
 
	}
	else
	{
		$callback = "&#101;&#114;&#114;&#111;&#114;";
	}
	return $callback;
}
$Code = "PGNumber";
echo phoneNumber($Phone,$Code);


]
:) SRY i cant public my phone number ;)
*/
function PGlike(DIV)
{
	this.DIV = DIV;
	var DoLike = null;
	var DO = null;
	var DOUNLIKE = null;
	var TLF = null;
	var one = "P";
	var DoUnlike = null;
	var TolltipTXT = null;
	var POSTID = null;
	var one_2 = "G";
	var DATA = new Array();
	var DOLIKE = null;
	var one_3 = "l";
	var THIS = null;
	var one_4 = "i";
	var Parrent = null; // Div parrent of all elements
	var LikeElm = null; // like span
	var TotalLikeNumber = null;
	var one_5 = "k";
	var LK = null;
	
	
	var FunctionNameEX = "PGlike";
	var FunctionName = arguments.callee.toString().match(/function ([^\(]+)/)[1];
	//alert(FunctionName);
	if(FunctionName != one+one_2+one_3+one_4+one_5+'e'){ alert("You Have Error in LikePlugin(PG WOLF) Function Name is changed !!! "); stop(); return false;}
else
{
	// PERSIAN, ARABIC, URDO
	function convertDigitIn(enDigit)
	{
		var newValue="";
		for (var i=0;i<enDigit.length;i++)
		{
			var ch=enDigit.charCodeAt(i);
        	if (ch>=48 && ch<=57)
        	{
            	// european digit range
				var newChar=ch+1584;
				newValue=newValue+String.fromCharCode(newChar);
        	}
        	else
			{
          	  newValue=newValue+String.fromCharCode(ch);
			}
		}
		return newValue;
	}
	
	
	//Bounce Effect in jQuery UI  with JS ( single )
	function doBounce(element, times, distance, speed)
	{
    	for(var i = 0; i < times; i++)
		{
			element.animate({marginTop: '-='+distance}, speed).animate({marginTop: '+='+distance}, speed);
    	}     
	}
	
	function AJAX(DATA)
	{
		this.POSTID = POSTID;
		var result;
		$.ajax({
			    url : 'like.ajax.php',
                type: 'POST',
				data: {DATA:DATA},
				async: false,
				error: function()
				{
					//jAlert('error','خطایی رخ داده است','خطا');
					alert('خطایی رخ داده است');
					return result = '0';
				},
				statusCode:
				{
					404: function()
					{
						alert('صفحه ایجکس یافت نشد');
						result = '0';	
					},
				},
				success: function(callback)
				{ 
				this.callback = callback;
					//jAlert('info',callback,'خروجی ایجکس');
					//jAlert('success','با موفقیت لایک شد','موفق');		
					console.clear();
					console.log(callback);
					result = callback;
				}
		});
      
		return result;
	}
	
	$(DIV).children('div',1).click(function(){
		 THIS = $(this);
		 LK = THIS.attr('LK');
		 //alert(LK);
		 if(LK == 'like')
		 {
		 	Parrent = THIS.parent('div',1); // Div parrent of all elements
		 	LikeElmP = Parrent.children('div',2); // like parrent DIV
			LikeElm = LikeElmP.children('span',1); // like span
		 	TotalLikeNumber = LikeElm.text();
			POSTID = THIS.attr('P-ID');
		 	//alert(TotalLikeNumber);
		 	DoUnlike = LikeElm.html(parseInt(TotalLikeNumber)+parseInt('1'));
		 	if(DoUnlike)
		 	{
			 	//alert('liked');
			 	//AJAX FUCNXTION
				//doBounce(THIS, 2, '4px', 50);  // if dont use jquery UI
			    THIS.effect( "bounce", { times: 2 }, "fast" );
			 	THIS.css({'background-image':'url(images/like.png)'});
				THIS.attr('LK','unlike');
				THIS.attr('title','نمی پسندم');
				THIS.addClass('like');
				TotalLikeNumber = LikeElm.text();
				if(TotalLikeNumber >1){var TL = convertDigitIn(String(parseInt(TotalLikeNumber)-parseInt('1'))); TooltipTXT = "شما و "+convertDigitIn(TL)+" نفر دیگر این را میسندید";}else {TooltipTXT = "شما این را میپسندید";}
				THIS.parent().next('div').data('hint',TooltipTXT);
				THIS.parent().next('div').attr('data-hint',TooltipTXT);
				DATA =[{'postid':POSTID,'status':'liked'}];
				DOLIKE = AJAX(DATA);
				if(DOLIKE !='liked')
				{
					//alert('Unliked');
					 //AJAX FUCNXTION
			 		 //doBounce(THIS, 1, '4px', 60);  
					 if(TotalLikeNumber >0)
			 		 {
						LikeElm.html(parseInt(TotalLikeNumber)-parseInt('1'));
			 		 }
					 THIS.css({'background-image':'url(images/unlike.png)'});
					 THIS.attr('LK','like');
					 THIS.attr('title','می پسندم');
			 		 THIS.addClass('unlike');
					 TotalLikeNumber = LikeElm.text();
					 if(TotalLikeNumber > 1){TooltipTXT = TotalLikeNumber+" نفر این را میپسندند";} else {TooltipTXT = convertDigitIn(TotalLikeNumber)+" نفر این را میپسندد";}
					 if(TotalLikeNumber == 0){ TooltipTXT = "اولین نفر باشید که این را میسندید";}
					 THIS.parent().next('div').data('hint',TooltipTXT);
					 THIS.parent().next('div').attr('data-hint',TooltipTXT);
					//alert(TooltipTXT);
				}
			}
			
		 	else
		 	{
			 //alert('error');
			}
		 }
		 else if(LK == 'unlike')
		 {
		 	 Parrent = THIS.parent('div',1); // Div parrent of all elements
			 LikeElmP = Parrent.children('div',2); // like parrent DIV
			 LikeElm = LikeElmP.children('span',1); // like span
		 	 TotalLikeNumber = LikeElm.text();
			 POSTID = THIS.attr('P-ID');
		 	 //alert(TotalLikeNumber);
			 if(TotalLikeNumber >0)
			 {
			 	DoLike = LikeElm.html(parseInt(TotalLikeNumber)-parseInt('1'));
			 	if(DoLike)
		 	 	{
				 	//alert('Unliked');
				 	//AJAX FUCNXTION
			 		//doBounce(THIS, 2, '4px', 50);  // if dont use jquery UI
					THIS.effect( "bounce", { times: 2 }, "fast" );
					THIS.css({'background-image':'url(images/unlike.png)'});
					THIS.attr('LK','like');
					THIS.attr('title','می پسندم');
			 	 	THIS.addClass('unlike');
					TotalLikeNumber = LikeElm.text();
				 	if(TotalLikeNumber > 1){TooltipTXT = convertDigitIn(TotalLikeNumber)+" نفر این را میپسندند";} else {TooltipTXT = convertDigitIn(TotalLikeNumber)+" نفر این را میپسندد";}
				 	if(TotalLikeNumber == 0){ TooltipTXT = "اولین نفر باشید که این را میسندید";}
				 	THIS.parent().next('div').data('hint',TooltipTXT);
				 	THIS.parent().next('div').attr('data-hint',TooltipTXT);
				  	DATA =[{'postid':POSTID,'status':'unliked'}];
					//alert(TooltipTXT);	
					DOUNLIKE = new AJAX(DATA);
					if(DOUNLIKE =='liked')
					{
						LikeElm.html(parseInt(TotalLikeNumber)+parseInt('1'));
			 			THIS.css({'background-image':'url(images/like.png)'});
						THIS.attr('LK','unlike');
						THIS.attr('title','نمی پسندم');
						THIS.addClass('like');
						TotalLikeNumber = LikeElm.text();
						if(TotalLikeNumber >1){var TL = convertDigitIn(String(parseInt(TotalLikeNumber)-parseInt('1'))); TooltipTXT = "شما و "+convertDigitIn(TL)+" نفر دیگر این را میسندید";}else {TooltipTXT = "شما این را میپسندید";}
						THIS.parent().next('div').data('hint',TooltipTXT);
						THIS.parent().next('div').attr('data-hint',TooltipTXT);
				}
		 	}
		 	else
		 	{
			 //alert('error');
			 alert('خطایی رخ داده است');
		 	}
			
		}
		 else
		{
			//alert('شما این پست را نپسندیده اید');
			alert('شما این پست را نپسندیده اید');
		}
		 }	
	});	
}
}
// FOR USE \\  
$(document).ready(function(e) {
  PGlike('.LIKES');  
});