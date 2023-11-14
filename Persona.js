class Persona{

    constructor(id,nombre,email,rol,clave){
        this.id=id;
        this.nombre=nombre;
        this.email=email;
        this.rol=rol;
        this.clave=clave;
    }

    crearObjeto(){
        const idH=document.getElementById("documentos").value;
        persona.id=idH;

        const nombreH=document.getElementById("nombres").value;
        persona.nombre=nombreH;

        const emailH=document.getElementById("email").value;
        persona.email=emailH;

        const rolesH= document.getElementById("roles").value;
        persona.rol=rolesH;

        const claveH= document.getElementById("pwd").value;
        persona.clave=claveH;

        persona.leaObjeto();


    }

    leaObjeto(){
        document.getElementById("tableD").innerHTML+= `
        <tr>
        <td>${persona.id}</td>
        
        <td>${persona.nombre}</td>
        <td>${persona.email}</td>
        <td>${persona.rol}</td>
        <td>${persona.clave}</td>
        </tr>`;

    }
        

    
}
