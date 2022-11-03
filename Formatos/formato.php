<?php

function imprimir_matriz($matriz,$descripcion){
    echo "$$".$descripcion."= \begin{bmatrix}";
    for($i=0;$i<sizeof($matriz);$i++){
        for ($j=0; $j < sizeof($matriz[0]); $j++) { 
            echo "&";  
  
            //codigo prueba
           if (is_double($matriz[$i][$j])) {
              $conv=fraccion(round($matriz[$i][$j], 8));
 
              if ($conv[1]==1) {
                echo round($conv[0], 2);
              }else{
                echo "\\frac{".$conv[0]."}{".$conv[1]."}";
              }
  
            }else{
              echo round($matriz[$i][$j], 2);
            }
  
            echo "&";
            }
            echo "\\\\";
        }
        echo "\\end{bmatrix}$$";
        echo "<br>";
}

function fraccion($decimal){
    $str = strval($decimal); 
    $decimas=strlen(substr(strrchr($str, "."), 1));
  
    $b=pow(10,$decimas);
  
    $a=$decimal*$b;
  
    $mcd = mcd($a,$b);
 

    do {
      $mcd = mcd($a,$b);
      $a=$a/$mcd;
      $b=$b/$mcd;
      $conversion=[$a,$b];
    } while ($mcd!=1);


    return $conversion;

}

function mcd($a,$b) {
    while (($a % $b) != 0) {
     $c = $b;
     $b = $a % $b;
     $a = $c;
    }
    return $b;
}
?>