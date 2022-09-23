function generarpdf (){
    let nombres = document.getElementById('Nombres').value;
    let apellidos = document.getElementById('Apellidos').value;
    let documento = document.getElementById('documento').value;
    let descripcion= document.getElementById('descripcion').value;
    let FechaIngreso = document.getElementById('ingreso').value;
    let FechaSalida  = document.getElementById('salida').value;
    let radio = document.getElementById('eleccion').value;
    let grupo = document.getElementById('grupo').value;
   
   var documentoPDF = new jsPDF();
   documentoPDF.setFontSize(20);
   documentoPDF.text(15, 15, 'Cita medica');
   documentoPDF.setFontSize(12);
   documentoPDF.text(20,30, 'Fecha: ' + new Date());
   documentoPDF.setFontSize(10);
   documentoPDF.text(20, 40, 'Nombres: ' + nombres);
   documentoPDF.text(20, 50, 'Apellidos: ' + apellidos);
   documentoPDF.text(20, 60, 'Motivo de hospitalizacion: ' + descripcion);
   documentoPDF.text(20, 70, 'ingreso: ' + FechaIngreso);
   documentoPDF.text(20, 80, 'salida: ' + FechaSalida);
   documentoPDF.text(20, 90, 'cuenta con sisben: ' + radio);
   documentoPDF.text(20,100, 'Grupo de sisben: '+ grupo);
   documentoPDF.save('cita medica');
}
