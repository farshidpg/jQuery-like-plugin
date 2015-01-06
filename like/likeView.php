<?php

/*================ EN - FA NUMBER FUNCTION =================*/
function persiannum($text) { // مبدل اعداد انگلیسی به فارسی برای استفاده در موارد لازم
$english_numbrers = array('1' , '2' , '3' , '4' , '5' , '6' , '7' , '8' , '9' , '10' , '11' , '12' , '13' , '14' , '15' , '16' , '17' , '18' , '19' , '20' , '21', '22' , '23' , '24' , '25' , ' 26' , ' 27' , ' 28' , '29' , '30' , '31' , '32' , '33' , '34' , '35' , '0', '-');
$persin_numbrers = array('۱' , '۲' , '۳' , '۴' , '۵' , '۶' , '۷' , '۸', '۹' , '۱۰' , '۱۱' , '۱۲' , '۱۳' , '۱۴' , '۱۵' , '۱۶' , '۱۷' , '۱۸' , '۱۹' , '۲۰' , '۲۱', '۲۲' , '۲۳' , '۲۴' , '۲۵' , ' ۲۶' , ' ۲۷' , ' ۲۸' , '۲۹' , '۳۰' , '۳۱' , '۳۲' , '۳۳' , '۳۴' , '۳۵' , '۰', '-');
return str_replace($english_numbrers, $persin_numbrers, $text);
}

function englishnum($texten) { // مبدل لازم برای تبدیل اعداد فارسی به انگلیسی
$p_numbrers =array('۱' , '۲' , '۳' , '۴' , '۵' , '۶' , '۷' , '۸', '۹' , '۱۰' , '۱۱' , '۱۲' , '۱۳' , '۱۴' , '۱۵' , '۱۶' , '۱۷' , '۱۸' , '۱۹' , '۲۰' , '۲۱', '۲۲' , '۲۳' , '۲۴' , '۲۵' , ' ۲۶' , ' ۲۷' , ' ۲۸' , '۲۹' , '۳۰' , '۳۱' , '۳۲' , '۳۳' , '۳۴' , '۳۵' , '۰', '-');
$e_numbrers = array('1' , '2' , '3' , '4' , '5' , '6' , '7' , '8' , '9' , '10' , '11' , '12' , '13' , '14' , '15' , '16' , '17' , '18' , '19' , '20' , '21', '22' , '23' , '24' , '25' , ' 26' , ' 27' , ' 28' , '29' , '30' , '31' , '32' , '33' , '34' , '35' , '0', '-');
return str_replace($p_numbrers, $e_numbrers, $texten);

}
/*================ END * EN - FA NUMBER FUNCTION ==============*/


				function likeST($ID)
				{
					GLOBAL $IP ;
					$query = "SELECT * FROM tbl_likes WHERE postid='$ID' AND ip='$IP'";
					$mysql = mysql_query($query) or die (mysql_error());
					$fetch = mysql_fetch_assoc($mysql);
					$numRows = mysql_num_rows($mysql);
					$LK_STATUS = $fetch['status'];
					if($numRows >0)
					{
						if(($LK_STATUS=="n") || ($LK_STATUS=="d"))
						{
							$LIKEOBJ = "<div class=\"unlike\"  title=\"می پسندم\" LK=\"like\" P-ID=\"$ID\"></div>";
						}
						elseif($LK_STATUS=="y")
						{
							$LIKEOBJ .= "<div class=\"like\" title=\"نمی پسندم\" LK=\"unlike\" P-ID=\"$ID\"></div>";
						}
					}
					else
					{
						$LIKEOBJ .= "<div class=\"unlike\"  title=\"می پسندم\" LK=\"like\" P-ID=\"$ID\"></div>";
					}
					return $LIKEOBJ;
				}
				
				
				function LikeTotal($ID)
				{
					$query = "SELECT * FROM tbl_likes WHERE postid='$ID' AND status='y'";
					$mysql = mysql_query($query) or die (mysql_error());
					$numRows = mysql_num_rows($mysql);
					return $numRows;
				}
				
				
				function LikeTooltipText($ID)
				{
					GLOBAL $IP;
					$query = "SELECT * FROM tbl_likes WHERE postid='$ID' AND status='y'";
					$mysql = mysql_query($query) or die (mysql_error());
					$numRows = mysql_num_rows($mysql);
					if($numRows >0)
					{
						$query_user =  "SELECT * FROM tbl_likes WHERE postid='$ID'  AND ip='$IP' AND status='y'";
						$mysql_user = mysql_query($query_user) or die (mysql_error());
						$numRows_user = mysql_num_rows($mysql_user);
						if($numRows_user >0)
						{
							if($numRows <2)
							{
							$text = "شما این را می پسندید";
							}
							else
							{
								$text ="شما و ".persianNum($numRows-1)." نفر دیگر این را می پسندید";
							}
						}
						else
						{
							$text = persianNum($numRows)." نفر این را می سندند";
						}
					}
					else
					{
						$text = "اولین نفر باشید که این را می سندید";
					}
					return $text;
				}
				
				
				
				//echo likeST($ID); // like html elm
				//echo LikeTotal($ID); // Total of likes
				//echo LikeTooltipText($ID); // Tooltip text
?>