<?php
// qustion number 1 
function qustion1(){
    $colors = array('white', 'green', 'red') ;
    echo "<h2> Colors : </h2> <ul>  ";
    for ($i=0; $i < count($colors) ; $i++) { 
        echo "<li> $colors[$i] </li>";
    }
    echo "</ul> <br> ";
}
function qustion2($contry){
    $cities= array( "Italy"=>"Rome", "Luxembourg"=>"Luxembourg", "Belgium"=> "Brussels", "Denmark"=>"Copenhagen", "Finland"=>"Helsinki", "France" => "Paris", "Slovakia"=>"Bratislava", "Slovenia"=>"Ljubljana", "Germany" => "Berlin", "Greece" => "Athens", "Ireland"=>"Dublin", "Netherlands"=>"Amsterdam", "Portugal"=>"Lisbon", "Spain"=>"Madrid" ); 
    echo "<h3> The capital of $contry is :  $cities[$contry] </h3>" ;
}
function qustion3(){
    $color = array (4 => 'white', 6 => 'green', 11=> 'red'); 
    $k =  array_key_first($color);
    echo " <h2> the first element in array is : $color[$k] </h2>";
}
function qustion4(){
    $fruits = array("d" => "lemon", "a" => "orange", "b" => "banana", "c" => "apple");
 echo " <pre> <h3> ";
 asort($fruits);
 print_r($fruits);
 echo " </h3></pre> ";

}
function qustion8(){
    $words =  array("abcd","abc","de","hjjj","g","wer");
    $max = strlen($words[0]);
    $min = strlen($words[5]);
    for ($i=0; $i < count($words) ; $i++) { 
        if($max < strlen($words[$i]) ){
            $max = strlen($words[$i]);
        }
        if($min > strlen($words[$i]) ){
            $min = strlen($words[$i]);
        }
    }
    echo " <h2> the lowerest string length is $min and the largest string length is $max </h3> ";
}
qustion1();
qustion2("Italy");
qustion3();
qustion4();
qustion8();