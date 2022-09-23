function generarpdf (){
    let nombres = document.getElementById('Nombres').value;
    let = apellidos =document.getElementsById('Apellidos').value;
    let = documento = document.getElementById('documento').value;
    let =  hostitalizacion = document.getElementById('descripcion').value;
    let = FechaIngreso = document.getElementById('ingreso').value;
    let = FechaSalida = document.getElementById('salida').value;

    var documentoPDF = new jsPDF();
    documentoPDF.setFontSize(20);
    documentoPDF.text(15, 15, 'Cita medica');
    documentoPDF.setFontSize(12);
    documentoPDF.text(20,30, 'Fecha: ' + new Date());
    documentoPDF.setFontSize(10);
    documentoPDF.text(20, 40, 'Nombres: ' + nombres);
    documentoPDF.text(20, 50, 'Apellidos: ' + apellidos);
    documentoPDF.text(20, 60, 'Documento: ' + Documento);
    documentoPDF.text(20, 70, 'Motivo por Hospitalizacion: ' + descripcion);
    documentoPDF.text(20, 80, 'Fecha de Ingreso: ' + FechaIngreso);
    documentoPDF.text(20, 90, 'Fecha de Salida: ' + FechaSalida);
    documentoPDF.save('Cita');
 
}
function calculardias(){
    let FechaIngreso = new Date (document.getElementById('ingreso').value);
    let FechaSalida =new Date (document.getElementById('salida').value);
    if(FechaSalida>= FechaIngreso){
        alert("Fecha correcta ");
    let fechaResultado = FechaSalida - FechaIngreso;
     alert("la cantidad de milesegundos es: " + fechaResultado);
     let dias = Math.floor(fechaResultado/(1000*60*60*24))+1;
     alert(dias);
     return dias
    }else{
        alert("Fecha de inicio no puede ser mayor a fecha de salida  ");
    
        document.getElementById('ingreso').value = "";
        document.getElementById('salida').value  = "";
    }

}

function calculoValor(dias){
    let valor = 75000;
    let subtotal = valor * dias;
    return subtotal; 
}

