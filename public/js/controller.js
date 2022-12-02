
let usuarioActual;
let usuarios;

const cargarUsuarios= async () => {
    const respuesta = await fetch('/usuarios', {
        method: "get"});
        usuarios = await respuesta.json();
        console.log('Usuarios', usuarios)
    }
cargarUsuarios();


function verificarUsuario(){
    let enteredUser= document.getElementById("user").value;
    let enteredPassword=document.getElementById("password").value;

    for (i=0; i<usuarios.length;i++){
        if (usuarios[i][0] ==enteredUser && usuarios[i][1]==enteredPassword) {
            usuarioActual=[`${enteredUser}`,`${enteredPassword}`]
        }     }
        console.log(usuarioActual)

    if(usuarioActual.length>0){
        SetHomeScreen();
        }else{
            alert("Usuario o contrasena incorrecta");
        }
    } 

function SetHomeScreen(){
    document.getElementById("info-perfil").innerHTML= ``
    
    document.getElementById("info-perfil").innerHTML+=
    ``


    //document.getElementById('RegistroUsuario').classList.add('hide');
    //document.getElementById('home').classList.remove('hide');
}




//----------------------------------------------------------------------------------
function Menu(show, option){
    document.getElementById(show).classList.remove('hide');
    document.getElementById(option).classList.add('button-active');

    tags=['posts-space','mr-invitations','mr-contacts','mr-groups','mr-notifications']
    tags1=['opt-posts','opt-invitations','opt-contacts','opt-groups','opt-notifications']

    for(i=0; i<5; i++){
        if(tags[i]!=show && document.getElementById(tags[i]).classList.value!=`${tags[i]} hide`){
            document.getElementById(tags[i]).classList.add('hide');
        }
    }

    for(i=0; i<5; i++){
        if(tags1[i]!=option && document.getElementById(tags1[i]).classList.value==`button-active` ){
            document.getElementById(tags1[i]).classList.remove('button-active');
        }
    }
}




