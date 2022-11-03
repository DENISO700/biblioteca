<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" /> -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
    <link rel="stylesheet" href="../css/styles_card.css">
    <link rel="icon" type="image/png" href="../favicon-16x16.png" sizes="16x16">
    <script src="https://use.fontawesome.com/354b8f6e45.js"></script>
    <script src="https://kit.fontawesome.com/e6dfebc255.js" crossorigin="anonymous"></script>
    <script src="../js/main.js"></script>
    <title>Factorizacion LU</title>
</head>
<body>
    <?php
    echo '<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>';

    function determinante($A){
      $aux=0;
      $pivote=0;
      $pivote2=0;
      $det=1;
      $n=sizeof($A);
  
      for ($i=0; $i < $n; $i++) { 
          $pivote=$A[$i][$i];
  
          for ($j=$i+1; $j < $n; $j++) { 
              $pivote2=$A[$j][$i];
              $aux=$pivote2/$pivote;
  
              for ($k=0; $k < $n; $k++) { 
                  $A[$j][$k]=$A[$j][$k]-$aux*$A[$i][$k];
              }
          }
      }
  
      for ($i=0; $i < $n; $i++) { 
          $det=$det*$A[$i][$i];
      }
  
      return $det;
    }

    function F_LU($A)
    {
      $n=sizeof($A[0]);
      $L = [[]];
      $U = [[]];
      $fil=sizeof($A);
      $col=sizeof($A[0]);
    
      //Matriz A
      imprimir_matriz($A,'A');
    
      for ($m=0; $m < $n; $m++) { 
          for ($l=0; $l < $n; $l++) { 
            $L[$m][$l]=0;
            $U[$m][$l]=0;
          }
      }
    
      for ($i=0; $i < $n; $i++) { 
        $L[$i][$i]=1;
    
        if ($i==0) {
          $U[0][0] = $A[0][0];
          for ($j=1; $j < $n; $j++) { 
            $U[0][$j]=$A[0][$j];
            $L[$j][0]=$A[$j][0]/$U[0][0];
          }
        }else {
    
          for ($j=$i; $j <$n ; $j++) { 
            $temp=0;
    
            for ($k=0; $k < $i; $k++) { 
              $temp = $temp+$L[$i][$k] * $U[$k][$j];
            }
            $U[$i][$j]=$A[$i][$j]-$temp;
          }
    
          for ($j=$i+1; $j <$n ; $j++) { 
            $temp=0;
    
            for ($k=0; $k < $i; $k++) { 
              $temp = $temp+$L[$j][$k] * $U[$k][$i];
            }
            $L[$j][$i] = ($A[$j][$i] - $temp)/$U[$i][$i];
          }
    
        }
        
      }

      //Matriz L
      imprimir_matriz($L,'L');
    
      //Matriz U
      imprimir_matriz($U,'U');
    

    
      $matrizLU["L"]=$L;
      $matrizLU["U"]=$U;
      return $matrizLU;
    }
   
    //$matriz=[[60, 30,20], [30,20, 15], [20,15,12]];
    
    $matriz = $_POST['matrizA'];
    //$fil=  $_POST["numeroFilasA"];
    //$col= $_POST["numeroColumnasA"];
    include('../Formatos/formato.php');
   
    echo '<div class="container">';
        echo '<div class="card">';
            echo '<div class="circle">';
                echo '<div class="matriz_aleatoriaTitulo">';
                    echo '<h2>Metodo de Factorización LU </h2>';
                echo '</div>';
            echo '</div>';

            echo '<div class="menu-icons mt-3">';
                echo '<div class="iconos">';
                    echo '<div title="Atras" class="mx-2"><a href="javascript:window.history.back();" value=""><i class="fa-solid fa-rotate-left mx-2"></i>Atras</a></div>';
                    echo '<div title="Inicio" class="mx-2"><a href="../index.php"><i class="fa-solid fa-house-chimney mx-2"></i>Inicio</a></div>';
                echo '</div>';
            echo '</div>';

            echo '<div class="content">';
            
            if ((sizeof($matriz)==sizeof($matriz[0]))) {
              if ((determinante($matriz)!=0)) {
                F_LU($matriz);
              } else {
                echo "<h3>La Matriz dada es singular, por lo que no tiene factorizacion LU</h3>";
              }             
            } else {
               echo "<h3>La Matriz dada no es cuadrada</h3>";
            }
        
              
            echo '</div>';
        echo '</div>';
    echo '</div>';

    ?>

</body>
</html>


