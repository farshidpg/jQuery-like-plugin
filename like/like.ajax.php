<?php
/*
function LIKEandUNLIKE()
{
	if(isset($_POST) && ($_POST['DATA'] != ''))
	{
		require_once('../../include/connection.inc.php');
		require_once('../../include/const.functions.inc.php');
		include_once('../../include/const.inc.php');
		require_once('../class.userInfo/class.userInfo.GET.php');
		require_once('../jdf/jdf.GET.php');
		$DATA = $_POST['DATA'];
		$postid = $DATA[0]['postid'];
		$status = $DATA[0]['status'];
		$IP = USER_IP;
		$query = "SELECT * FROM tbl_likes WHERE postid='$postid' AND ip='$IP'";
		$mysql = mysql_query($query) or die (mysql_error());
		$fetch = mysql_fetch_assoc($mysql);
		$numRows = mysql_num_rows($mysql);
		$LK_STATUS = $fetch['status'];
		if($numRows >0)
		{
			if(($LK_STATUS=="y"))
			{
				$update = mysql_query("update tbl_likes set status='n' where postid='$postid' AND ip='$IP'") or die(mysql_error());
				if($update)
				{
					$result = "unliked";
				}
				else
				{
					$result = "liked";
				}
			}
			elseif($LK_STATUS=="n")
			{
				$update = mysql_query("update tbl_likes set status='y' where postid='$postid' AND ip='$IP'") or die(mysql_error());
				if($update)
				{
					$result = "liked";
				}
				else
				{
					$result = "unliked";
				}
			}
		}
		else
		{
			$insert = mysql_query("insert into tbl_likes(id,postid,ip,status)values('','$postid','$IP','y')") or die(mysql_error());
			if($insert)
			{
				$result = "liked";
			}
			else
			{
				$result = "unliked";
			}
		}
	}
	return $result;
}
$LIKEandUNLIKE = LIKEandUNLIKE();
echo $LIKEandUNLIKE;
*/
		$DATA = $_POST['DATA'];
		$postid = $DATA[0]['postid'];
		$status = $DATA[0]['status'];
		
		echo $status;
?>