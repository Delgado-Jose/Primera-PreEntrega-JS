let arreglo = [];
let opcion ="";

while(opcion !== "0"){
    opcion = mostrarMenu();
    if((arreglo.length === 0)&&(opcion!=="1")&&(opcion !=="0")){
        alert("*** ERROR ***: Debe ingresar el largo del array!");
    }else{
        switch(opcion){
            case "1":
                ingresarLargo();    
                break;
            case "2":
                mostrarSubMenuABM();
                break;
            case "3":
                mostrarArray();
                break;
            case "4":
                buscarDatos();
                break;
            case "5":
                verificarTipoDatos();
                break;
            case "0":
                alert("Gracias por Utilizar Este Software!");
                break;
            default:
                alert("*** ERROR ***: No ha ingresado una opción válida!");
        }
    }
}
function mostrarMenu(){
    let menu = "::: ORGANIZADOR DE ARRAY :::\n";
    menu += "   1 - Establecer Largo del Array.\n";
    menu += "   2 - Alta, Baja y Modificación de Datos.\n";
    menu += "   3 - Mostrar Datos.\n";
    menu += "   4 - Buscar un Dato.\n";
    menu += "   5 - Ordenar Datos.\n";
    menu += "   0 - Salir.\n";
    let opcion = prompt(menu+"Ingrese una opción del Menu:");
    if(opcion === null){
        opcion="0";
    }
    return opcion;
}
function ingresarLargo(){
    let aLargo = parseInt(prompt("Ingrese el largo deseado para el array:"));
    if(aLargo > 0 ){
        arreglo = new Array(aLargo);
        alert("AVISO: Largo establecido correctamente!");
    }else{
        alert("*** ERROR ***: Valor incorrecto, ingrese un valor numerico mayor a 0!");
    }        
}
function mostrarSubMenuABM(){
    chequearLugaresDisponibles();
    let subMenu = "::: ABM DE DATOS :::\n 1) Alta.\n 2) Baja.\n 3) Modificación.\n 4) Volver al Menú Principal.\n";
    let opcionABM = prompt(subMenu+"\nIngrese una opción:");
    if(opcionABM === null){
        opcionABM = "4";
    }
    switch(opcionABM){
        case "1":
            agregarDato();
            break;
        case "2":
            eliminarDato();
            break;
        case "3":
            modificarDato();
            break;
        case "4":
            break;
        default:
            alert("*** ERROR ***: No ha ingresado una opción válida!");
            mostrarSubMenuAbm();
            break;
    }
}
function agregarDato(){
    for(let i=0;i<arreglo.length;i++){
        arreglo[i]=prompt("Ingrese un dato:  (Lugares Utilizados: "+i+" de "+arreglo.length+")");
    }
}
function modificarDato(){
    opcionModificar = confirm("ATENCIÓN: ¿Realmente Desea Modificar un Dato?");
    if(opcionModificar){
        mostrarArray();
        let datoActual = prompt("Dato a sustituir:");
        let datoNuevo = prompt("Nuevo dato:");
        let encontrado = false;        
        for(let i=0;i<arreglo.length;i++){
            if(datoActual === arreglo[i]){
                arreglo[i]=datoNuevo;
                alert("AVISO: Dato actualizado correctamente!");
                encontrado= true;
                break;
            }
        }
        if(encontrado === false){
            alert("*** ERROR ***: El dato a modificar no existe en el array!");
        } 
    }
}
function eliminarDato(){
    mostrarArray();
    let datoAbajar = prompt("Ingrese el Dato a Dar de Baja:");
    let encontrado = false;
    for(let i =0;i<arreglo.length;i++){
        if(datoAbajar===arreglo[i]){
            if(confirm("ATENCIÓN: Dato Encontrado, ¿Desea Continuar con la Baja?")){
                arreglo[i]="";
                encontrado=true;
                alert("AVISO: Baja Realizada Correctamente!");
                break;
            }else{
                alert("AVISO: Baja Cancelada.");
                break;
            }            
        }
    }
    if(encontrado === false){
        alert("ATENCIÓN: El Dato a Dar de Baja no Existe en el Array!")
    }
}
function chequearLugaresDisponibles(){
    for(let i = 0;i<arreglo.length;i++){
        if(arreglo[i] === ""){
            let opcionLugar = prompt("::: LUGAR LIBRE ::: \n Hay un Lugar Disponible en el Array.\n ¿Desea Utilizarlo? s/n");
            if(opcionLugar === "s"){
                arreglo[i]=prompt("Ingrese el nuevo dato:");
                alert("AVISO: Dato ingresado correctamente.");
            }else if(opcionLugar === "n"){
                alert("AVISO: No se realizaron cambios, el lugar queda disponible.")
                return;
            }else{
                alert("*** ERROR ***: No ha ingresado una opción válida!");
            }
        }
    }    
}
function mostrarArray(){
    alert("::: ARRAY :::\n\n  [ "+arreglo.join(" | ")+" ]");
}
function buscarDatos(){
    let dato = prompt("Dato a buscar:");
    let indice = arreglo.indexOf(dato);
    if(indice !== -1){
        alert("El Dato: "+dato+" se Encuentra en el Lugar: "+indice+" del Array!");
    }else{
        alert("ATENCIÓN: El Dato No Existe en el Array!");
    }
}
function verificarTipoDatos(){
    let datosNumericos = true;
    let datosCadena = true;
    let numero = 0;
    for(let i=0;i<arreglo.length;i++){
        numero = parseFloat(arreglo[i]);
        if(isNaN(numero)){
            datosNumericos = false;
        }else{
            datosCadena = false;
        }
    }
    if(datosNumericos){
        ordenarArray("numerico");
    }else if(datosCadena){
        ordenarArray("cadena");
    }else{
        alert("ATENCIÓN: No se pueden ordenar datos de tipos mixtos en el array!");
    }
}
function ordenarArray(tipo){
    if(tipo === "numerico"){
        arreglo.sort((a, b) => a - b);
    }else if(tipo === "cadena"){
        arreglo.sort();
    }
    alert("AVISO: Array Ordenado!\n[ "+arreglo.join(" | ")+" ]");
}

