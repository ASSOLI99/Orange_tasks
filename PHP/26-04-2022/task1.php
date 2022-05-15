<?php 
$arrm  =  array(
    array(0 , 0 , 0 ,0 , 0),
    array(0 , 0 , 0 ,0 , 0),
    array(0 , 0 , 0 ,0 , 0),
    array(0 , 0 , 0 ,0 , 0),
    array(0 , 0 , 0 ,0 , 0)
    
);
function PrintIndexArray($a){
   echo "<h1> Array : </h1> <br> ****************************** </h3> <br>";
    for($i = 0 ; $i<count($a) ; $i++){
        echo "<h3>" . $a[$i] . "</h3><br>";
    }
    echo "****************************** <br>";
}
function PrintMultiArray($a){
    echo "<h1> Array : </h1> <br> ****************************** <br>";
    echo "<h3> ";
    for($i = 0 ; $i < count($a) ; $i++){
        echo "<pre> ";
        for($j = 0 ; $j<count($a[$i]) ; $j++){
            echo  "\t  " . $a[$i][$j] . " ";
        }
        echo "<br> </pre>";
     }
     echo "</h3>****************************** <br>";
 }

 // add all the integers between 0 and 30 and display the total.
function FillIntger($a){
    $n = 1 ; 
    $total = 0 ;
    for($i=0 ; $i < 6 ; $i++ ){
        for($j = 0 ; $j < 5 ; $j++ ){
            $a[$i][$j] = $n;
            $total = $total + $n;
            $n++;
        }
    }
    PrintMultiArray($a);
    echo " <h2> the total of the array is : $total";
}

// display needed pattern 
function FillElement ($a) {
    for($i=0 ; $i < 5 ; $i++ ){
        for($j = 0 ; $j < 5 ; $j++ ){
            if($i==$j){
            $a[$i][$j] = $i+1;
            }
        }
    } 
    PrintMultiArray($a);
}

// calcoulate the number Factorial
function FactorialNum($num){
    
    if($num == 1 || $num == 0  ){
    echo " <h2> the factorial of $num is : 1 </h2> ";
    }
    else{
        $sum = $num;
        for($i = $num ; 2<= $i ;$i-- ){
            $sum = $sum * ($i-1) ;
        }
        echo " <h2> the factorial of $num is : $sum </h2> ";
    }
    
}
// Create Fibonacci Array   
function Fibonacci($n){
        if ($n <= 1)
            return $n;
        return Fibonacci($n-1) + Fibonacci($n-2);
} 


// qustion number 1 

function qustion1($ar){
    FillIntger($ar);
}


// qustion number 4 

function qustion4($ar){
    FillElement($ar);
}

// qustion number 5 

function qustion5($n){
    FactorialNum($n);
}

// qustion number 6 

function qustion6($nu){
    echo "<pre> <h3> ";
    for($i = 0 ; $i < $nu ; $i++){
     echo ", " .  Fibonacci($i);
    }
    echo " </h3> </pre>";
}

// qustion number 9 

function qustion9(){
    echo "<pre> <h3>";
    $n =1;
    for ($i=0; $i < 6; $i++) { 
        for ($j=0; $j <$i ; $j++) { 
            echo " $n";
            $n++;
        }
      
        
        echo "<br>";
    }
    echo "</h3> </pre>";
    
}



qustion1($arrm);
qustion4($arrm);
qustion5(5);
qustion6(10);
qustion9();