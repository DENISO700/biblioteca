//controladores
function eliminarMatrices() {
    document.getElementById('formulario').reset();
    document.getElementById("matriz-A").innerHTML =``;
    document.getElementById("matriz-B").innerHTML =``;
    document.getElementById("valorMatriz1").innerHTML =``;
    document.getElementById("valorMatriz2").innerHTML =``;
    document.getElementById("generador").style.display='none';
    document.getElementById("clean").style.display='none';
    document.getElementById("send").style.display='none';

}

function ruta() {
  var form = document.getElementById("formulario");

  if (document.getElementById('opSel').value=="suma") {
    form.setAttribute("action", "../OperacionesMatrices/suma.php");
  }else if (document.getElementById('opSel').value=="resta") {
    form.setAttribute("action", "../OperacionesMatrices/resta.php");
  }else if (document.getElementById('opSel').value=="producto1") {
    form.setAttribute("action", "../OperacionesMatrices/multiplicacion.php");
  }else if (document.getElementById('opSel').value=="transpuesta") {
    form.setAttribute("action", "../OperacionesMatrices/transpuesta.php");
  }else if (document.getElementById('opSel').value=="inversa") {
    form.setAttribute("action", "../OperacionesMatrices/inversa.php");
  }else if (document.getElementById('opSel').value=="potencia") {
    form.setAttribute("action", "../OperacionesMatrices/potencia.php");
  }else if (document.getElementById('opSel').value=="factorizacion") {
    form.setAttribute("action", "../Factorizaciones/F_LU.php");
  }else if (document.getElementById('opSel').value=="producto2") {
    form.setAttribute("action", "../OperacionesMatrices/multiplicacionVector.php");
  }else if (document.getElementById('opSel').value=="producto3") {
    form.setAttribute("action", "../OperacionesMatrices/multiplicacionEscalar.php");
  }else if (document.getElementById('opSel').value=="convolucion") {
    form.setAttribute("action", "../OperacionesMatrices/convolucion.php");
  }

  
}

//matrices aleatorias

function cantidadMatrices_al() {

    document.getElementById("generador").style.removeProperty("display");
    document.getElementById("matriz-A").innerHTML =``;
    document.getElementById("matriz-B").innerHTML =``;
    document.getElementById("valorMatriz1").innerHTML =``;
    document.getElementById("valorMatriz2").innerHTML =``;

    if (document.getElementById('opSel').value=="suma" ||document.getElementById('opSel').value=="resta"||document.getElementById('opSel').value=="producto1" ) {
  
        document.getElementById("matriz-A").innerHTML =``;
        document.getElementById("matriz-B").innerHTML =``;
  
        document.getElementById("matriz-A").innerHTML =
        ` 
        <div class="row">
              <div class="col-12">
                  <div class="mb-3">
                      <div class="form-group row">
                          <label for="matriz_a" class="col-sm-4 col-form-label matriz_Label"><b>Matriz A</b></label>
                          <div class="col-sm-4">
                              <input type="number" class="form-control" min="1" required id="filasA" placeholder="No. Filas">
                          </div>
                          <div class="col-sm-4">
                              <input type="number" class="form-control" min="1" required id="columnasA" placeholder="No. Columnas">
                          </div>
                      </div>
                  </div>
              </div>
  
              <div class="col-12">
                  <div class="mb-3">
                      <div class="form-group row">
                          <label for="matriz_a" class="col-sm-4 col-form-label matriz_Label"><b>Rango</b></label>
                          <div class="col-sm-4">
                              <input type="number" class="form-control" id="minA" required placeholder="Rango Minimo">
                          </div>
                          <div class="col-sm-4">
                              <input type="number" class="form-control" id="maxA" required placeholder="Rango Maximo">
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          `;  
        
        document.getElementById("matriz-B").innerHTML =
        ` 
        <div class="row">
              <div class="col-12">
                  <div class="mb-3">
                      <div class="form-group row">
                          <label for="matriz_b" class="col-sm-4 col-form-label matriz_Label"><b>Matriz B</b></label>
                          <div class="col-sm-4">
                              <input type="number" class="form-control" min="1" id="filasB" placeholder="No. Filas">
                          </div>
                          <div class="col-sm-4">
                              <input type="number" class="form-control" min="1" id="columnasB" placeholder="No. Columnas">
                          </div>
                      </div>
                  </div>
              </div>
  
              <div class="col-12">
                  <div class="mb-3">
                      <div class="form-group row">
                          <label for="matriz_a" class="col-sm-4 col-form-label matriz_Label"><b>Rango</b></label>
                          <div class="col-sm-4">
                              <input type="number" class="form-control" id="minB" placeholder="Rango Minimo">
                          </div>
                          <div class="col-sm-4">
                              <input type="number" class="form-control" id="maxB"  placeholder="Rango Maximo">
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        `;  
  
    }
  
    if (document.getElementById('opSel').value=="transpuesta" ||document.getElementById('opSel').value=="inversa"|| document.getElementById('opSel').value=="factorizacion") {
  
      document.getElementById("matriz-A").innerHTML =``;
      document.getElementById("matriz-B").innerHTML =``;
  
      document.getElementById("matriz-A").innerHTML =
      ` 
      <div class="row">
            <div class="col-12">
                <div class="mb-3">
                    <div class="form-group row">
                        <label for="matriz_a" class="col-sm-4 col-form-label matriz_Label"><b>Matriz A</b></label>
                        <div class="col-sm-4">
                            <input type="number" class="form-control" min=1 required id="filasA" placeholder="No. Filas">
                        </div>
                        <div class="col-sm-4">
                            <input type="number" class="form-control" min=1 required id="columnasA" placeholder="No. Columnas">
                        </div>
                    </div>
                </div>
            </div>
  
            <div class="col-12">
                <div class="mb-3">
                    <div class="form-group row">
                        <label for="matriz_a" class="col-sm-4 col-form-label matriz_Label"><b>Rango</b></label>
                        <div class="col-sm-4">
                            <input type="number" class="form-control" id="minA" required placeholder="Rango Minimo">
                        </div>
                        <div class="col-sm-4">
                            <input type="number" class="form-control" id="maxA" required placeholder="Rango Maximo">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;   
    }
  
    if (document.getElementById('opSel').value=="potencia" ) {
  
      document.getElementById("matriz-A").innerHTML =``;
      document.getElementById("matriz-B").innerHTML =``;
  
      document.getElementById("matriz-A").innerHTML =
      ` 
      <div class="row">
            <div class="col-12">
                <div class="mb-3">
                    <div class="form-group row">
                        <label for="matriz_a" class="col-sm-4 col-form-label matriz_Label"><b>Matriz A</b></label>
                        <div class="col-sm-4">
                            <input type="number" class="form-control" required min=1 id="filasA" placeholder="No. Filas">
                        </div>
                        <div class="col-sm-4">
                            <input type="number" class="form-control" required min=1 id="columnasA" placeholder="No. Columnas">
                        </div>
                    </div>
                </div>
            </div>
  
            <div class="col-12">
                <div class="mb-3">
                    <div class="form-group row">
                        <label for="matriz_a" class="col-sm-4 col-form-label matriz_Label"><b>Rango</b></label>
                        <div class="col-sm-4">
                            <input type="number" class="form-control" required id="minA" placeholder="Rango Minimo">
                        </div>
                        <div class="col-sm-4">
                            <input type="number" class="form-control" required id="maxA" placeholder="Rango Maximo">
                        </div>
                    </div>
                </div>
            </div>
  
            <div class="col-12">
                  <div class="mb-3">
                      <div class="form-group row">
                          <label for="matriz_a" class="col-sm-4 col-form-label matriz_Label"><b>Exponente</b></label>
                          <div class="col-sm-4">
                              <input type="number" class="form-control" required name="n" id="n" placeholder="Exponente">
                          </div>
                      </div>
                  </div>
            </div>
        </div>
        `;   
    }
  
    if (document.getElementById('opSel').value=="producto2" ) {
  
      document.getElementById("matriz-A").innerHTML =``;
      document.getElementById("matriz-B").innerHTML =``;
  
      document.getElementById("matriz-A").innerHTML =
      ` 
      <div class="row">
            <div class="col-12">
                <div class="mb-3">
                    <div class="form-group row">
                        <label for="matriz_a" class="col-sm-4 col-form-label matriz_Label"><b>Matriz A</b></label>
                        <div class="col-sm-4">
                            <input type="number" class="form-control" required min=1 id="filasA" placeholder="No. Filas">
                        </div>
                        <div class="col-sm-4">
                            <input type="number" class="form-control" required min=1 id="columnasA" placeholder="No. Columnas">
                        </div>
                    </div>
                </div>
            </div>
  
            <div class="col-12">
                <div class="mb-3">
                    <div class="form-group row">
                        <label for="matriz_a" class="col-sm-4 col-form-label matriz_Label"><b>Rango</b></label>
                        <div class="col-sm-4">
                            <input type="number" class="form-control" required id="minA" placeholder="Rango Minimo">
                        </div>
                        <div class="col-sm-4">
                            <input type="number" class="form-control" required id="maxA" placeholder="Rango Maximo">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;   
      
      document.getElementById("matriz-B").innerHTML =
        ` 
        <div class="row">
              <div class="col-12">
                  <div class="mb-3">
                      <div class="form-group row">
                          <label for="matriz_b" class="col-sm-4 col-form-label matriz_Label"><b>Vector</b></label>
                          <div class="col-sm-4">
                              <input type="number" class="form-control" required min=1 id="filasB" placeholder="No. Filas">
                          </div>
                          <div class="col-sm-4">
                              <input type="number" class="form-control" required id="columnasB" value=1 readOnly placeholder="No. Columnas">
                          </div>
                      </div>
                  </div>
              </div>
  
              <div class="col-12">
                  <div class="mb-3">
                      <div class="form-group row">
                          <label for="matriz_a" class="col-sm-4 col-form-label matriz_Label"><b>Rango</b></label>
                          <div class="col-sm-4">
                              <input type="number" class="form-control" required id="minB" placeholder="Rango Minimo">
                          </div>
                          <div class="col-sm-4">
                              <input type="number" class="form-control" required id="maxB"  placeholder="Rango Maximo">
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        `;  
  
    }
  
    if (document.getElementById('opSel').value=="producto3" ) {
  
      document.getElementById("matriz-A").innerHTML =``;
      document.getElementById("matriz-B").innerHTML =``;
  
      document.getElementById("matriz-A").innerHTML =
      ` 
      <div class="row">
            <div class="col-12">
                <div class="mb-3">
                    <div class="form-group row">
                        <label for="matriz_a" class="col-sm-4 col-form-label matriz_Label"><b>Matriz A</b></label>
                        <div class="col-sm-4">
                            <input type="number" class="form-control" required min=1 id="filasA" placeholder="No. Filas">
                        </div>
                        <div class="col-sm-4">
                            <input type="number" class="form-control" required min=1 id="columnasA" placeholder="No. Columnas">
                        </div>
                    </div>
                </div>
            </div>
  
            <div class="col-12">
                <div class="mb-3">
                    <div class="form-group row">
                        <label for="matriz_a" class="col-sm-4 col-form-label matriz_Label"><b>Rango</b></label>
                        <div class="col-sm-4">
                            <input type="number" class="form-control" required id="minA" placeholder="Rango Minimo">
                        </div>
                        <div class="col-sm-4">
                            <input type="number" class="form-control" required id="maxA" placeholder="Rango Maximo">
                        </div>
                    </div>
                </div>
            </div>
  
            <div class="col-12">
              <div class="mb-3">
                  <div class="form-group row">
                      <label for="matriz_a" class="col-sm-4 col-form-label matriz_Label"><b>Escalar</b></label>
                      <div class="col-sm-4">
                          <input type="number" class="form-control" step="any" required name="escalar" id="escalar" placeholder="Escalar">
                      </div>
                  </div>
              </div>
            </div>
        </div>
        `;       
  
  
    }
  
    if (document.getElementById('opSel').value=="convolucion") {
  
      document.getElementById("matriz-A").innerHTML =``;
      document.getElementById("matriz-B").innerHTML =``;
  
      document.getElementById("matriz-A").innerHTML =
      ` 
      <div class="row">
        <div class="col-12">
            <div class="mb-3">
                <label >Seleccione el nucleo que desea utilizar</label>
                <select style="color:black" required name="kernel" id="kernel" class="form-select">
                    <option selected disabled value="">Elegir nucleo</option>
                    <option value="identidad">Identidad</option>
                    <option value="horizontal">Deteccion de Bordes Horizontales</option>
                    <option value="vertical">Deteccion de Bordes Verticales</option>
                    <option value="diagonal">Deteccion de Bordes Diagonales</option>
                </select>
            </div>
        </div>
      </div>

      <div class="row">
            <div class="col-12">
                <div class="mb-3">
                    <div class="form-group row">
                        <label for="matriz_a" class="col-sm-4 col-form-label matriz_Label"><b>Matriz A</b></label>
                        <div class="col-sm-4">
                            <input type="number" class="form-control" required min=4 id="filasA" placeholder="No. Filas">
                        </div>
                        <div class="col-sm-4">
                            <input type="number" class="form-control" required min=4 id="columnasA" placeholder="No. Columnas">
                        </div>
                    </div>
                </div>
            </div>
  
            <div class="col-12">
                <div class="mb-3">
                    <div class="form-group row">
                        <label for="matriz_a" class="col-sm-4 col-form-label matriz_Label"><b>Rango</b></label>
                        <div class="col-sm-4">
                            <input type="number" class="form-control" required id="minA" placeholder="Rango Minimo">
                        </div>
                        <div class="col-sm-4">
                            <input type="number" class="form-control" required id="maxA" placeholder="Rango Maximo">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;    
    }
  
    
}

function genera_campos_matriz_aleatoria_1() {

  document.getElementById("clean").removeAttribute('style');
  document.getElementById("send").style.removeProperty("display");
  var body = document.getElementById("valorMatriz1");
  var tabla   = document.createElement("table");
  var tblhead = document.createElement("thead")
  var divhead = document.createElement("div")
  var phead = document.createElement("p")
  var tblheader= document.createElement("th")
  tblheader.setAttribute("colspan",document.getElementById('columnasA').value)
  var textoCabecera = document.createTextNode("MATRIZ A");
  phead.appendChild(textoCabecera);
  var tblBody = document.createElement("tbody");

  for (var i = 0; i < document.getElementById('filasA').value; i++) {
    var hilera = document.createElement("tr");

    for (var j = 0; j < document.getElementById('columnasA').value; j++) {
      var celda = document.createElement("td");
      var campo = document.createElement("input");
      celda.style.width=`calc(100%/${document.getElementById('columnasA').value})`
      campo.setAttribute("type","number")
      campo.setAttribute("style","color:black")
      campo.setAttribute("class","text-center")
      campo.setAttribute("placeholder",`a${i}${j}`)
      campo.setAttribute("id",`a${i}${j}`)
      campo.setAttribute("readOnly","")
      campo.classList.add('form-control');
      campo.setAttribute("name",`matrizA[${i}][${j}]`)
      let semilla=Math.floor(Math.random()*(document.getElementById('maxA').value - document.getElementById('minA').value + 1)) ;
      let valor = semilla + parseInt(document.getElementById('minA').value)
      campo.setAttribute("value",valor)
      celda.appendChild(campo);
      hilera.appendChild(celda);
    }
    tblBody.appendChild(hilera);
  }

  tabla.appendChild(tblhead);
  tblhead.appendChild(tblheader);
  tblheader.appendChild(divhead);
  divhead.appendChild(phead);
  divhead.classList.add("matriz_genTitulo");
  phead.classList.add("mt-2");
  tabla.appendChild(tblBody);
  body.appendChild(tabla);
  tabla.setAttribute("border", "2");
  tabla.setAttribute("id", "tabla1");
  tabla.classList.add("content-table","mt-0");

  
}

function genera_campos_matriz_aleatoria_2() {

  //document.getElementById("valorMatriz2").innerHTML =``;
  var body = document.getElementById("valorMatriz2");
  var tabla   = document.createElement("table");
  var tblhead = document.createElement("thead")
  var divhead = document.createElement("div")
  var phead = document.createElement("p")
  var tblheader= document.createElement("th")
  tblheader.setAttribute("colspan",document.getElementById('columnasB').value)
  var textoCabecera = document.createTextNode("MATRIZ B");
  phead.appendChild(textoCabecera);
  var tblBody = document.createElement("tbody");

  for (var i = 0; i < document.getElementById('filasB').value; i++) {
    var hilera = document.createElement("tr");

    for (var j = 0; j < document.getElementById('columnasB').value; j++) {
      var celda = document.createElement("td");
      var campo = document.createElement("input");
      celda.style.width=`calc(100%/${document.getElementById('columnasB').value})`
      campo.setAttribute("type","number")
      campo.setAttribute("style","color:black")
      campo.setAttribute("class","text-center")
      campo.setAttribute("placeholder",`b${i}${j}`)
      campo.setAttribute("id",`b${i}${j}`)
      campo.setAttribute("readOnly","")
      campo.classList.add('form-control');
      campo.setAttribute("name",`matrizB[${i}][${j}]`)
      let semilla=Math.floor(Math.random()*(document.getElementById('maxB').value - document.getElementById('minB').value + 1)) ;
      let valor2 = semilla + parseInt(document.getElementById('minB').value)
      campo.setAttribute("value",valor2)
      celda.appendChild(campo);
      hilera.appendChild(celda);
    }
    tblBody.appendChild(hilera);
  }

  tabla.appendChild(tblhead);
  tblhead.appendChild(tblheader);
  tblheader.appendChild(divhead);
  divhead.appendChild(phead);
  divhead.classList.add("matriz_genTitulo");
  phead.classList.add("mt-2");
  tabla.appendChild(tblBody);
  body.appendChild(tabla);
  tabla.setAttribute("border", "2");
  tabla.setAttribute("id", "tabla2");
  tabla.classList.add("content-table","mt-0");

  
}

//matrices personalizadas

function cantidadMatrices() {
    document.getElementById("generador").style.removeProperty("display");
    document.getElementById("matriz-A").innerHTML =``;
    document.getElementById("matriz-B").innerHTML =``;
    document.getElementById("valorMatriz1").innerHTML =``;
    document.getElementById("valorMatriz2").innerHTML =``;

    if (document.getElementById('opSel').value=="suma" ||document.getElementById('opSel').value=="resta"||document.getElementById('opSel').value=="producto1" ) {
  
        document.getElementById("matriz-A").innerHTML =``;
        document.getElementById("matriz-B").innerHTML =``;
  
        document.getElementById("matriz-A").innerHTML =
        ` 
        <div class="row">
              <div class="col-12">
                  <div class="mb-3">
                      <div class="form-group row">
                          <label for="matriz_a" class="col-sm-4 col-form-label matriz_Label"><b>Matriz A</b></label>
                          <div class="col-sm-4">
                              <input type="number" class="form-control" required min="1" id="filasA" placeholder="No. Filas">
                          </div>
                          <div class="col-sm-4">
                              <input type="number" class="form-control" required min="1" id="columnasA" placeholder="No. Columnas">
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          `;  
        
        document.getElementById("matriz-B").innerHTML =
        ` 
        <div class="row">
              <div class="col-12">
                  <div class="mb-3">
                      <div class="form-group row">
                          <label for="matriz_b" class="col-sm-4 col-form-label matriz_Label"><b>Matriz B</b></label>
                          <div class="col-sm-4">
                              <input type="number" class="form-control" required min="1" id="filasB" placeholder="No. Filas">
                          </div>
                          <div class="col-sm-4">
                              <input type="number" class="form-control" required min="1" id="columnasB" placeholder="No. Columnas">
                          </div>
                      </div>
                  </div>
              </div>
        </div>
        `;  
  
    }
  
    if (document.getElementById('opSel').value=="transpuesta" ||document.getElementById('opSel').value=="inversa"|| document.getElementById('opSel').value=="factorizacion") {
  
      document.getElementById("matriz-A").innerHTML =``;
      document.getElementById("matriz-B").innerHTML =``;
  
      document.getElementById("matriz-A").innerHTML =
      ` 
      <div class="row">
            <div class="col-12">
                <div class="mb-3">
                    <div class="form-group row">
                        <label for="matriz_a" class="col-sm-4 col-form-label matriz_Label"><b>Matriz A</b></label>
                        <div class="col-sm-4">
                            <input type="number" class="form-control" required min=1 id="filasA" placeholder="No. Filas">
                        </div>
                        <div class="col-sm-4">
                            <input type="number" class="form-control" required min=1 id="columnasA" placeholder="No. Columnas">
                        </div>
                    </div>
                </div>
            </div>
       </div>
        `;   
    }
  
    if (document.getElementById('opSel').value=="potencia" ) {
  
      document.getElementById("matriz-A").innerHTML =``;
      document.getElementById("matriz-B").innerHTML =``;
  
      document.getElementById("matriz-A").innerHTML =
      ` 
      <div class="row">
            <div class="col-12">
                <div class="mb-3">
                    <div class="form-group row">
                        <label for="matriz_a" class="col-sm-4 col-form-label matriz_Label"><b>Matriz A</b></label>
                        <div class="col-sm-4">
                            <input type="number" class="form-control" required min=1 id="filasA" placeholder="No. Filas">
                        </div>
                        <div class="col-sm-4">
                            <input type="number" class="form-control" required min=1 id="columnasA" placeholder="No. Columnas">
                        </div>
                    </div>
                </div>
            </div>
    
            <div class="col-12">
                  <div class="mb-3">
                      <div class="form-group row">
                          <label for="matriz_a" class="col-sm-4 col-form-label matriz_Label"><b>Exponente</b></label>
                          <div class="col-sm-4">
                              <input type="number" class="form-control" required name="n" id="n" placeholder="Exponente">
                          </div>
                      </div>
                  </div>
            </div>
        </div>
        `;   
    }
  
    if (document.getElementById('opSel').value=="producto2" ) {
  
      document.getElementById("matriz-A").innerHTML =``;
      document.getElementById("matriz-B").innerHTML =``;
  
      document.getElementById("matriz-A").innerHTML =
      ` 
      <div class="row">
            <div class="col-12">
                <div class="mb-3">
                    <div class="form-group row">
                        <label for="matriz_a" class="col-sm-4 col-form-label matriz_Label"><b>Matriz A</b></label>
                        <div class="col-sm-4">
                            <input type="number" class="form-control" required min=1 id="filasA" placeholder="No. Filas">
                        </div>
                        <div class="col-sm-4">
                            <input type="number" class="form-control" required min=1 id="columnasA" placeholder="No. Columnas">
                        </div>
                    </div>
                </div>
            </div>
       </div>
        `;   
      
      document.getElementById("matriz-B").innerHTML =
        ` 
        <div class="row">
              <div class="col-12">
                  <div class="mb-3">
                      <div class="form-group row">
                          <label for="matriz_b" class="col-sm-4 col-form-label matriz_Label"><b>Vector</b></label>
                          <div class="col-sm-4">
                              <input type="number" class="form-control" min=1 id="filasB" placeholder="No. Filas">
                          </div>
                          <div class="col-sm-4">
                              <input type="number" class="form-control" required min=1 id="columnasB" value=1 readOnly placeholder="No. Columnas">
                          </div>
                      </div>
                  </div>
              </div>
  
          </div>
        `;  
  
    }
  
    if (document.getElementById('opSel').value=="producto3" ) {
  
      document.getElementById("matriz-A").innerHTML =``;
      document.getElementById("matriz-B").innerHTML =``;
  
      document.getElementById("matriz-A").innerHTML =
      ` 
      <div class="row">
            <div class="col-12">
                <div class="mb-3">
                    <div class="form-group row">
                        <label for="matriz_a" class="col-sm-4 col-form-label matriz_Label"><b>Matriz A</b></label>
                        <div class="col-sm-4">
                            <input type="number" class="form-control" required min=1 id="filasA" placeholder="No. Filas">
                        </div>
                        <div class="col-sm-4">
                            <input type="number" class="form-control" required min=1 id="columnasA" placeholder="No. Columnas">
                        </div>
                    </div>
                </div>
            </div>
  
            <div class="col-12">
              <div class="mb-3">
                  <div class="form-group row">
                      <label for="matriz_a" class="col-sm-4 col-form-label matriz_Label"><b>Escalar</b></label>
                      <div class="col-sm-4">
                          <input type="number" class="form-control" step="any" required name="escalar" id="escalar" placeholder="Escalar">
                      </div>
                  </div>
              </div>
            </div>
        </div>
        `;       
  
  
    }
  
    if (document.getElementById('opSel').value=="convolucion") {
  
      document.getElementById("matriz-A").innerHTML =``;
      document.getElementById("matriz-B").innerHTML =``;
  
      document.getElementById("matriz-A").innerHTML =
      ` 
      <div class="row">
        <div class="col-12">
            <div class="mb-3">
                <label >Seleccione el nucleo que desea utilizar</label>
                <select style="color:black" required name="kernel" id="kernel" class="form-select">
                    <option selected disabled value="">Elegir nucleo</option>
                    <option value="identidad">Identidad</option>
                    <option value="horizontal">Deteccion de Bordes Horizontales</option>
                    <option value="vertical">Deteccion de Bordes Verticales</option>
                    <option value="diagonal">Deteccion de Bordes Diagonales</option>
                </select>
            </div>
        </div>
      </div>

      <div class="row">
            <div class="col-12">
                <div class="mb-3">
                    <div class="form-group row">
                        <label for="matriz_a" class="col-sm-4 col-form-label matriz_Label"><b>Matriz A</b></label>
                        <div class="col-sm-4">
                            <input type="number" class="form-control" required min=4 id="filasA" placeholder="No. Filas">
                        </div>
                        <div class="col-sm-4">
                            <input type="number" class="form-control" required min=4 id="columnasA" placeholder="No. Columnas">
                        </div>
                    </div>
                </div>
            </div>

        </div>
        `;    
    }
   
}

function genera_campos_matriz_1() {
    document.getElementById("clean").removeAttribute('style');
    document.getElementById("send").style.removeProperty("display");
    document.getElementById("valorMatriz1").innerHTML =``;
    var body = document.getElementById("valorMatriz1");
    var tabla   = document.createElement("table");
    var tblhead = document.createElement("thead")
    var divhead = document.createElement("div")
    var phead = document.createElement("p")
    var tblheader= document.createElement("th")
    tblheader.setAttribute("colspan",document.getElementById('columnasA').value)
    var textoCabecera = document.createTextNode("MATRIZ A");
    phead.appendChild(textoCabecera);
    var tblBody = document.createElement("tbody");
  
    for (var i = 0; i < document.getElementById('filasA').value; i++) {
      var hilera = document.createElement("tr");
  
      for (var j = 0; j < document.getElementById('columnasA').value; j++) {
        var celda = document.createElement("td");
        var campo = document.createElement("input");
        celda.style.width=`calc(100%/${document.getElementById('columnasA').value})`
        campo.setAttribute("type","number")
        campo.setAttribute("style","color:black")
        campo.setAttribute("class","text-center")
        campo.setAttribute("placeholder",`a${i}${j}`)
        campo.setAttribute("id",`a${i}${j}`)
        campo.setAttribute("enabled","")
        campo.setAttribute("required","")
        campo.classList.add('form-control');
        //campo.style.width=`calc(100%/${document.getElementById('columnasB').value})`
        campo.setAttribute("name",`matrizA[${i}][${j}]`)
        celda.appendChild(campo);
        hilera.appendChild(celda);
      }
      tblBody.appendChild(hilera);
    }
  
    tabla.appendChild(tblhead);
    tblhead.appendChild(tblheader);
    tblheader.appendChild(divhead);
    divhead.appendChild(phead);
    divhead.classList.add("matriz_genTitulo");
    phead.classList.add("mt-2");
    tabla.appendChild(tblBody);
    body.appendChild(tabla);
    tabla.setAttribute("border", "2");
    tabla.setAttribute("id", "tabla1");
    tabla.classList.add("content-table","mt-0");
  
    
}
  
function genera_campos_matriz_2() {
    document.getElementById("valorMatriz2").innerHTML =``;
    var body = document.getElementById("valorMatriz2");
    var tabla   = document.createElement("table");
    var tblhead = document.createElement("thead")
    var divhead = document.createElement("div")
    var phead = document.createElement("p")
    var tblheader= document.createElement("th")
    tblheader.setAttribute("colspan",document.getElementById('columnasB').value)
    var textoCabecera = document.createTextNode("MATRIZ B");
    phead.appendChild(textoCabecera);
    var tblBody = document.createElement("tbody");
  
    for (var i = 0; i < document.getElementById('filasB').value; i++) {
      var hilera = document.createElement("tr");
  
      for (var j = 0; j < document.getElementById('columnasB').value; j++) {
        var celda = document.createElement("td");
        var campo = document.createElement("input");
        celda.style.width=`calc(100%/${document.getElementById('columnasB').value})`
        campo.setAttribute("type","number")
        campo.setAttribute("style","color:black")
        campo.setAttribute("class","text-center")
        campo.setAttribute("placeholder",`b${i}${j}`)
        campo.setAttribute("id",`b${i}${j}`)
        campo.setAttribute("enabled","")
        campo.setAttribute("required","")
        campo.classList.add('form-control');
        //campo.style.width=`calc(100%/${document.getElementById('columnasB').value})`
        campo.setAttribute("name",`matrizB[${i}][${j}]`)
        celda.appendChild(campo);
        hilera.appendChild(celda);
      }
      tblBody.appendChild(hilera);
    }
  
    tabla.appendChild(tblhead);
    tblhead.appendChild(tblheader);
    tblheader.appendChild(divhead);
    divhead.appendChild(phead);
    divhead.classList.add("matriz_genTitulo");
    phead.classList.add("mt-2");
    tabla.appendChild(tblBody);
    body.appendChild(tabla);
    tabla.setAttribute("border", "2");
    tabla.setAttribute("id", "tabla2");
    tabla.classList.add("content-table","mt-0");
  
    
}




