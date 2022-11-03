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
    <title>Inversa de una Matriz</title>
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
    
    function inversa($matriz){
   
        $I=[[]];
        $aux=0;
        $pivote=0;
        $n=sizeof($matriz);
    
        //Matriz Original
        imprimir_matriz($matriz,'A');
    
        //Llenando matriz identidad
        for ($i=0; $i <$n ; $i++) { 
            for ($j=0; $j <$n ; $j++) { 
                $I[$i][$j]=0;
    
                if ($i==$j) {
                    $I[$i][$j]=1;
                }
            }
        }
    
        //Reduccion por renglones
        for ($k=0; $k < $n; $k++) { 
            $pivote=$matriz[$k][$k];
    
            for ($l=0; $l < $n; $l++) { 
                $matriz[$k][$l]=$matriz[$k][$l]/$pivote;
                $I[$k][$l]=$I[$k][$l]/$pivote;
    
            }
    
            for ($m=0; $m < $n; $m++) { 
                if ($k!=$m) {
                    $aux=$matriz[$m][$k];
    
                    for ($x=0; $x < $n; $x++) { 
                        $matriz[$m][$x]=$matriz[$m][$x]-$aux*$matriz[$k][$x];
                        $I[$m][$x]=$I[$m][$x]-$aux*$I[$k][$x];
                    }
                }
            }
    
        }
        
        //Matriz Inversa
        imprimir_matriz($I,'A^{-1}');
    
    
    }
    
    /*$matriz=[[3,5,1],
        [2,4,6],
        [4,1,8]];*/
    
    $matriz = $_POST['matrizA'];
    include('../Formatos/formato.php');
   
    echo '<div class="container">';
        echo '<div class="card">';
            echo '<div class="circle">';
                echo '<div class="matriz_aleatoriaTitulo">';
                    echo '<h2>Inversa de una Matriz</h2>';
                echo '</div>';
            echo '</div>';

            echo '<div class="menu-icons mt-3">';
                echo '<div class="iconos">';
                    echo '<div title="Atras" class="mx-2"><a href="javascript:window.history.back();" value=""><i class="fa-solid fa-rotate-left mx-2"></i>Atras</a></div>';
                    echo '<div title="Inicio" class="mx-2"><a href="../index.php"><i class="fa-solid fa-house-chimney mx-2"></i>Inicio</a></div>';
                echo '</div>';
            echo '</div>';

            echo '<div class="content">';

                if (sizeof($matriz)==sizeof($matriz[0])) {
                    if (determinante($matriz)!=0) {
                        inversa($matriz);
                    }else{
                        echo "<h3>La Matriz dada no es Invertible</h3>";
                    }
                }else{
                    echo "<h3>La Matriz dada no es cuadrada</h3>";
                }

            echo '</div>';
        echo '</div>';
    echo '</div>';

    ?>

</body>
</html>