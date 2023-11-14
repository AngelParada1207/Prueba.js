// Funcion enviar datos
function enviardatos(){
    var documentos=document.getElementById("documentos").value;
    var nombres=document.getElementById("nombres").value;
    var email=document.getElementById("email").value;
    var roles = document.getElementById("roles").value;
    var pwd = document.getElementById("pwd").value;
    
    
    
    document.getElementById("tableD").innerHTML+= `
    <tr>
        <td>${documentos}</td>
        <td>${nombres}</td>
        <td>${email}</td>
        <td>${roles}</td>
        <td>${pwd}</td>     
    </tr>
    `
    
    

    //alert("los datos ingresados son: "+ documentos);

}