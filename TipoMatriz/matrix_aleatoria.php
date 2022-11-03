<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
  <!-- <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" /> -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
  <link rel="stylesheet" href="../css/styles_card.css">
  <link rel="icon" type="image/png" href="../favicon-16x16.png" sizes="16x16">
  <script src="https://use.fontawesome.com/354b8f6e45.js"></script>
  <script src="https://kit.fontawesome.com/e6dfebc255.js" crossorigin="anonymous"></script>
  <script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="../js/main.js"></script>
  <title>Matriz Aleatoria</title>
</head>
<body>

<?php
    header("Cache-Control: no-store, no-cache, must-revalidate, max-age=0");
    header("Cache-Control: post-check=0, pre-check=0", false);
    header("Pragma: no-cache");
?>

    <form id="formulario" method="POST">
        <div class="container">
            <div class="card">

                <div class="circle">
                    <div class="matriz_aleatoriaTitulo">
                        <h2>Matriz Aleatoria</h2>
                    </div>
                </div>  

                <div class="menu-icons mt-3">
                    <div class="iconos">
                        <div title="Atras" class="mx-2"><a href="../index.php" value=""><i class="fa-solid fa-rotate-left mx-2"></i>Atras</a></div>
                        <div title="Inicio" class="mx-2"><a href="../index.php"><i class="fa-solid fa-house-chimney mx-2"></i>Inicio</a></div>
                        <div title="Inicio" class="mx-2"><a href="#" style="display:none" id="generador" onclick="genera_campos_matriz_aleatoria_1();genera_campos_matriz_aleatoria_2()"><i class="fa-solid fa-right-to-bracket mx-2"></i>Generar Matriz</a></div>
                        <div title="Borrar" id="clean" style="display:none" class="mx-2"><a href="#" onclick="eliminarMatrices()"><i class="fa-solid fa-trash mx-2"></i>Borrar</a></div>
                    </div>
                </div>

                <div class="content">
                        <!-- <p>Muestra el menu de operaciones aritmeticas y factorizaciones de matrices, con matrices formadas por numeros ingresados por el usuario.</p> -->
                        <div class="row">
                            <div class="col-12">
                                <div class="mb-3">
                                    <label for="inputState">Seleccione el tipo de operacion que desea realizar</label>
                                    <select onchange="ruta();cantidadMatrices_al()" style="color:black" required name="membership" id="opSel" class="form-select">
                                        <option selected disabled value="">Elegir Operacion</option>
                                        <option value="suma">Suma de Matrices</option>
                                        <option value="resta">Resta de Matrices</option>
                                        <option value="producto1">Multiplicacion de Matrices</option>
                                        <option value="producto3">Multiplicacion de Matrices por un Escalar</option>
                                        <option value="producto2">Multiplicacion de Matrices por un Vector</option>
                                        <option value="convolucion">Convolucion de Matrices</option>
                                        <option value="transpuesta">Transpuesta</option>
                                        <option value="inversa">Inversa</option>
                                        <option value="potencia">Potencia</option>
                                        <option value="factorizacion">Factorizacion LU</option>
                                    </select>
                                </div>
                            </div>

                            <!-- <div class="row">
                                <div clas="col-12">
                                    <div class="mb-3">
                                        <p class="text-center">                                        
                                            <img src="../img/suma.png" alt="">
                                        </p>
                                    </div>
                                </div>
                            </div> -->

                            <!-- Matriz A -->
                            <div class="matriz-A" id="matriz-A">

                            </div>

                            <!-- Matriz B -->
                            <div class="matriz-B mt-4" id="matriz-B">

                            </div>
                        </div>

                        <div class="row" id="valorMatriz1"></div>
                        <div class="row" id="valorMatriz2"></div>

                    <input type="submit" id="send" style="background: #6470A3;color:white;display:none;" class="form-control" value="Realizar Operación">
                </div>
            </div>
        </div>

    </form>  
</body>
</html>
