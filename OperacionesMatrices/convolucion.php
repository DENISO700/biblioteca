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
    <title>Convolucion de Matrices</title>
</head>
<body>
    <?php
    echo '<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>';
   
function convolucion($matriz,$kernel){
    
        $c=[[]];
        $matrizRellena=[[]];
        $N=sizeof($kernel);

                //Matriz Rellena 0
                for($i=0;$i<sizeof($matriz)+2;$i++){
                    for ($j=0; $j < sizeof($matriz[0])+2; $j++) { 
                            $matrizRellena[$i][$j]=0;
                        }
                    }
                    
                //Llenando el centro
                for ($k=0; $k < sizeof($matrizRellena)-2; $k++) { 
                    for ($m=0; $m <sizeof($matrizRellena[0]) -2; $m++) {               
                        $matrizRellena[$k+1][$m+1]=$matriz[$k][$m];
                    }        
                }
    
                //mostrando A
                imprimir_matriz($matriz,'A');
       
                //Matriz Kernel
                imprimir_matriz($kernel,'K');
    
                $c=$matriz;
                $filas=sizeof($matriz)-2;
                $columnas=sizeof($matriz[0])-2;
    
                for ($i=0; $i < $filas; $i++) { 
                    for ($j=0; $j <$columnas ; $j++) { 
                        $valor=0;
                        for ($k=0; $k < sizeof($kernel); $k++) { 
                            for ($m=0; $m <sizeof($kernel[0]) ; $m++) {               
                                $valor=$valor + ($matrizRellena[$i+$k][$j+$m]*$kernel[$k][$m]);
                            }        
                        }
                        $c[$i][$j]=$valor;   
                    }
                }
    
                //Matriz Kernel de A hasta los bordes
                imprimir_matriz($c,'K(A)');
    
        return $c;
    
}
    
    // $A = [[35,40,41,45,50],
    //      [40,40,42,46,52],
    //      [42,46,50,55,55],
    //      [48,52,56,58,60],
    //      [56,60,65,70,75]];
    
    /*$B = [[35,40,41,45,50],
         [40,40,42,46,52],
         [42,46,50,55,55],
         [48,52,56,58,60]];*/
    
    /*$K = [[-2,-1,0],
         [-1,1,1],
         [0,1,2]];*/
    
    $identidad = [[0,0,0],
                  [0,1,0],
                  [0,0,0]];
    
    $horizontal = [[1,0,-1],
                  [0,0,0],
                  [-1,0,1]];
    
    $vertical =  [[0,-1,0],
                  [-1,4,-1],
                  [0,-1,0]];
    
    $diagonal =  [[-1,-1,-1],
                  [-1,8,-1],
                  [-1,-1,-1]];
    
    
    $B = $_POST['matrizA'];
    $nucleo = $_POST['kernel'];

    include('../Formatos/formato.php');
   
    echo '<div class="container">';
        echo '<div class="card">';
            echo '<div class="circle">';
                echo '<div class="matriz_aleatoriaTitulo">';
                    echo '<h2>Convolución de Matrices</h2>';
                echo '</div>';
            echo '</div>';

            echo '<div class="menu-icons mt-3">';
                echo '<div class="iconos">';
                    echo '<div title="Atras" class="mx-2"><a href="javascript:window.history.back();" value=""><i class="fa-solid fa-rotate-left mx-2"></i>Atras</a></div>';
                    echo '<div title="Inicio" class="mx-2"><a href="../index.php"><i class="fa-solid fa-house-chimney mx-2"></i>Inicio</a></div>';
                echo '</div>';
            echo '</div>';

            echo '<div class="content">';

                if (($nucleo=='identidad')&&(sizeof($B)>sizeof($identidad)) && (sizeof($B[0])>sizeof($identidad))) {
                    convolucion($B,$identidad);
                } elseif (($nucleo=='horizontal')&&(sizeof($B)>sizeof($horizontal)) && (sizeof($B[0])>sizeof($horizontal))) {
                    convolucion($B,$horizontal);
                }  elseif (($nucleo=='vertical')&&(sizeof($B)>sizeof($vertical)) && (sizeof($B[0])>sizeof($vertical))) {
                    convolucion($B,$vertical);
                }  elseif (($nucleo=='diagonal')&&(sizeof($B)>sizeof($diagonal)) && (sizeof($B[0])>sizeof($diagonal))) {
                    convolucion($B,$diagonal);
                } else{
                    echo "<h3>La Matriz no es compatible con la Convolucion, con el Kernel dado</h3>";
                }

      
            echo '</div>';
        echo '</div>';
    echo '</div>';

    ?>

</body>
</html>