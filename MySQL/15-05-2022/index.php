<?php
include "connection.php";
error_reporting(E_ERROR | E_WARNING | E_PARSE);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
</head>
<body>
<form action="connection.php" method="GET">
    <div>fruit_id<input type="text" name="fruit_id"></div>
    <div>fruit_name<input type="text" name="fruit_name"></div>
    <div>fruit_color<input type="text" name="fruit_color"></div>
    <div>fruit_size<input type="text" name="fruit_size"></div>
    <div>ship_date<input type="text" name="ship_date"></div>
<input type="submit" name="add" value="ADD">
<input type="submit" name="delete" value="delete">
<input type="submit" name="update" value="UPDATE">
</form>
<!-- create table -->
<table class="table">
  <thead class="thead-light">
    <tr>
      <th scope="col">fruit_id</th>
      <th scope="col">fruit_name</th>
      <th scope="col">fruit_color</th>
      <th scope="col">fruit_size</th>
      <th scope="col">ship_date</th>
    </tr>
  </thead>
  <tbody>
    <?php
    $res = mysqli_query($connection,"select * from fruit");
    while($row = mysqli_fetch_array($res)){
        echo "<tr>";
        echo "<td>";echo $row["fruit_id"]; echo "</td>";
        echo "<td>";echo $row["fruit_name"]; echo "</td>";
        echo "<td>";echo $row["fruit_color"]; echo "</td>";
        echo "<td>";echo $row["fruit_size"]; echo "</td>";
        echo "<td>";echo $row["ship_date"]; echo "</td>";
        echo "</tr>";
    }
    ?>
  </tbody>
</table>
</body>
</html>