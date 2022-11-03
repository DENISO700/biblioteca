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
    <title>Multiplicacion de Matriz por Un Escalar</title>
</head>
<body>
    <?php
    echo '<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>';

    function multiplicacionEscalar($A,$escalar){
        $filas=sizeof($A);
        $columnas2=sizeof($A[0]);
        $C=[[]];
    
        //Matriz A
        imprimir_matriz($A,'A');
    
        for ($i=0; $i < $filas; $i++) { 
            for ($m=0; $m < $columnas2; $m++) { 
                $C[$i][$m]=$A[$i][$m]*$escalar;
            }
        }
        
        //Matriz C
        imprimir_matriz($C,"($escalar)A");
        return $C;
    
    }
    
    // $matriz=[[2, -1], [3,5]];
    // $matriz2=[[2, -4], [3,8]];
    // $matriz3=[[2, -4], [3,8],[1,0]];
    // $delta=9;
    
    $matriz = $_POST['matrizA'];
    $delta = $_POST['escalar'];
    include('../Formatos/formato.php');
   
    echo '<div class="container">';
        echo '<div class="card">';
            echo '<div class="circle">';
                echo '<div class="matriz_aleatoriaTitulo">';
                    echo '<h2>Multiplicacion de Matrices por un Escalar</h2>';
                echo '</div>';
            echo '</div>';

            echo '<div class="menu-icons mt-3">';
                echo '<div class="iconos">';
                    echo '<div title="Atras" class="mx-2"><a href="javascript:window.history.back();" value=""><i class="fa-solid fa-rotate-left mx-2"></i>Atras</a></div>';
                    echo '<div title="Inicio" class="mx-2"><a href="../index.php"><i class="fa-solid fa-house-chimney mx-2"></i>Inicio</a></div>';
                echo '</div>';
            echo '</div>';

            echo '<div class="content">';
                multiplicacionEscalar($matriz,$delta);
            echo '</div>';
        echo '</div>';
    echo '</div>';

    ?>

</body>
</html>