<html>
	<head>
		<title>Assignment3</title>
		<link href="board.css" media="screen" rel="stylesheet" type="text/css" />
	</head>
	<body>
	<br>	
	<?php echo"Part1: Charlie";
	echo "<br>";?>	
	<br>
	
		<?php
		function isBitten(){
			$t=rand(1,2);
				if($t == 1){
					return true;
				}else{
					return false;
			    }
		}	
			$a = isBitten();
				if($a == true){
					echo "Charlie ate my lunch";
				}else{
					echo "Charlie did not ate my lunch";
			}
			echo "<br>";
			
		?>		
<br>	
	<?php echo"Part2: Checker board";?>	
<br>	
    <?php
		$t=0;
			echo '<table class=center cellspacing="1px" cellpadding="1px">';
				for($i=0; $i<9; $i++){
					echo "<tr>";
				for($j=0; $j<9; $j++){
					$t=$t+1;
				      if($t%2 == 0){
					echo '<td class=red></td>';
			          }else{
			        echo '<td class=black>"</td>';
				      }
				    }
			        echo "</tr>";
				}
			   echo "</table>";
			   echo "<br>";
	?>	
<br>	
	<?php echo"Part3:";
	echo "<br>";?>	
<br>	
			<?php
		 $m=array('January','February','March','April','May','June','July','August','September','October','November','December');
		 $t = count($m);
			for($i=0; $i<$t; $i++){
				echo $m[$i];
				echo "<br>";
			}
		?>
		
<br>		
			
		<?php
		 $m = array('January','February','March','April','May','June','July','August','September','October','November','December');
		 $t = count($m);
			for($i=0; $i<$t; $i++){
				sort($m);
				echo $m[$i];
				echo "<br>";
			}
		?>
<br>		
		<?php
		 $m=array('January','February','March','April','May','June','July','August','September','October','November','December');
			foreach($m as $i){
				echo $i;
				echo "<br>";
			}
		?>
		
<br>		
		<?php
		 $m=array('January','February','March','April','May','June','July','August','September','October','November','December');
		 sort($m);
			foreach($m as $i){
				echo $i;
				echo "<br>";
			}
		?>
<br>
        <?php echo"Part4:";
		echo "<br>";?>
<br>		
			<?php
		$list=['Chama Gaucha' => '40.50', 
		       'Aviva by Kameel' => '15.00',
			   'Bone’s Restaurant' => '65.00', 
			   'Umi Sushi Buckhead' => '40.50',
			   'Fandangles' => '30.00', 
			   'Capital Grille' => '60.50', 
			   'Canoe' => '35.50', 
			   'One Flew South' => '21.00', 
			   'Fox Bros. BBQ' => '15.00', 
			   'South City Kitchen Midtown' => '29.00'];
    ?>

		<?php echo 'According to the Trip Advisor, the 10 best Restaurants in Atlanta based up votes for
2016 are as follows: '?>

	<table border="1">
	<tr>
		<th><?php echo 'Restaurant Name' ?></th>
        <th><?php echo 'Average Cost' ?></th>
	</tr>
	<?php foreach($list as $x=>$y):?>
	<tr>
		<td><?php echo ($x);?></td>
		<td><?php echo ($y);?></td>
	</tr>	
	<?php endforeach; ?>
	</table>
	<?php echo "<br>";?>

	
	<?php
		asort($list);
	?>
	
	
	<?php echo '10 best Restaurants in Atlanta ordered by Price:'?>
	<table border="1">
	<tr>
		<th><?php echo 'Restaurant Name' ?></th>
        <th><?php echo 'Average Cost' ?></th>
	</tr>
	<?php foreach($list as $x=>$x_value):?>
	<tr>
		<td><?php echo ($x);?></td>
		<td><?php echo ($x_value);?></td>
	</tr>	
	<?php endforeach; ?>
	</table>
	<?php echo "<br>";?>
	
	<?php echo '10 best Restaurants in Atlanta ordered by Name:'?>
	<?php
		ksort($list);
	?>
		<table border="1">
	<tr>
		<th><?php echo 'Restaurant Name' ?></th>
        <th><?php echo 'Average Cost' ?></th>
	</tr>
	<?php foreach($list as $y=>$y_value):?>
	<tr>
		<td><?php echo ($y);?></td>
		<td><?php echo ($y_value);?></td>
	</tr>	
	<?php endforeach; ?>
	</table>
	<?php echo "<br>";?>
	</body>
</html>	