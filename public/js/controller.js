
let usuarioActual;
let usuarios;
let mensajes;
let publicaciones;
let invitaciones;
//let seguidos;
let grupos;
let empleos;
let personas;
let usuarioGrupo;

const cargarPersonas= async () => {
    const respuesta = await fetch('/personas', {
        method: "get"});
        personas = await respuesta.json();
    }

cargarPersonas();

const cargarInvitaciones= async () => {
    const respuesta = await fetch('/invitaciones', {
        method: "get"});
        invitaciones = await respuesta.json();
        console.log("invitaciones",invitaciones)
    }

cargarInvitaciones();

    const cargarUsuarioGrupos= async () => {
        const respuesta = await fetch('/usuariogrupo', {
            method: "get"});
            usuarioGrupo = await respuesta.json();
            
        }
    cargarUsuarioGrupos();

const cargarEmpleos= async () => {
    const respuesta = await fetch('/empleos', {
        method: "get"});
        empleos = await respuesta.json();
    }
cargarEmpleos();

const cargarUsuarios= async () => {
    const respuesta = await fetch('/usuarios', {
        method: "get"});
        usuarios = await respuesta.json();
        console.log('Usuarios', usuarios)
    }
cargarUsuarios();

const cargarPublicaciones= async () => {
    const respuesta = await fetch('/publicaciones', {
        method: "get"});
        publicaciones = await respuesta.json();
    }
    cargarPublicaciones();

    const cargarMensajes= async () => {
        const respuesta = await fetch('/mensajes', {
            method: "get"});
            mensajes = await respuesta.json();
        }
        cargarMensajes();

        const cargarGrupos= async () => {
            const respuesta = await fetch('/grupos', {
                method: "get"});
                grupos = await respuesta.json();
            }
            cargarGrupos();

function verificarUsuario(){
    let enteredUser= document.getElementById("user").value;
    let enteredPassword=document.getElementById("password").value;

    for (i=0; i<usuarios.length;i++){
        if (usuarios[i][0] ==enteredUser && usuarios[i][1]==enteredPassword) {
            usuarioActual=[`${enteredUser}`,`${enteredPassword}`, `${usuarios[i][2]}`,`${usuarios[i][3]}`,`${usuarios[i][4]}`,`${i}` ]
        }     }
        console.log(usuarioActual)

    if(usuarioActual!=null){
        SetHomeScreen();
    }else{
        alert("Usuario o contrasena incorrecta");
        }
    } 

function SetHomeScreen(){
    document.getElementById("home").innerHTML= ``
    
    document.getElementById("home").innerHTML+=
    `   <div class="linkedin-header1">
            <div class="l1">${usuarioActual[2]}</div>
            <div class="l1"><img id="logo" src="../img/linkedinlogo.png" alt=""></div>
            <div></div>
        </div>
        <div class="home-screen" id="home-screen">
        </div>
        `
        document.getElementById("home-screen").innerHTML+=``

        document.getElementById("home-screen").innerHTML+=
        `            <div class="hs-menu-profile">
                <div class="menu">

                <div class="button-active" id="opt-posts" onclick="Menu('posts-space','opt-posts')"><i class="fa-solid fa-house"></i></i>Inicio</div>
                <div id="opt-invitations" onclick="Menu('mr-invitations','opt-invitations')"><i class="fa-solid fa-users"></i>Mi red</div >
                <div id="opt-contacts" onclick="Menu('mr-contacts','opt-contacts')"><i class="fa-solid fa-address-book"></i>Contactos</div >
                <div id="opt-groups" onclick="Menu('mr-groups','opt-groups')"><i class="fa-solid fa-users-line"></i>Grupos</div>
                <div id="opt-notifications" onclick="Menu('mr-notifications','opt-notifications')"><i class="fa-solid fa-bell"></i>Notificaciones</div>
                <div id="opt-jobs" onclick="Menu('mr-jobs','opt-jobs')"><i class="fa-solid fa-suitcase"></i>Empleos</div>
                <div id="opt-mensajes" onclick="Menu('mr-messages','opt-mensajes')"><i class="fa-solid fa-message"></i>Mensajes</div>
                <div ><i class="fa-solid fa-bars"></i></i>Ajustes</div>

                </div>
                <div class="profile-info">
                    <div class="profile-info-img"> <img style="width: 70px; height:80px" src="/img/messi.jpg" alt=""></div>
                    <h6>${usuarioActual[2]}</h6>
                    <div>${usuarioActual[3]}</div>
                </div>
            </div>

            <div class="changing hide" id="changing">
            </div>
            <div class="hs-messages" id=hs-messages>
                <div class="messages-header"><h3>Mensajes</h3></div>



                <div class="messages" id="messages">
                </div>
            </div>`
            document.getElementById("changing").innerHTML+=``
            document.getElementById("changing").innerHTML+=`
            <div class="posts-space " id="posts-space">
                <div class="create-post ">
                    Crear un nuevo post...
                </div>
                <div class="all-posts" id="all-posts">
                </div>
                </div>
            </div>

        <div class="mr-invitations hide" id="mr-invitations">
            <div class="mi-red-invitationes ">
                <div class="invitations" id="invitations"> 



                </div>
                <div class="may-know"><h5>Personas que quizas conozcas</h5>
                    <div class="mk-card">
                        <div class="mk-img"><img style="height: 50px; width:50px; border-radius: 10px;" src="/img/perfil2.jpeg" alt=""></div>
                        <div class="mk-name">name</div>
                        <div class="mk-connect">conectar</div>
                    </div>
                </div>
            </div>
        </div>
      
        <div class="mr-contacts hide" id="mr-contacts">
            <div class="mi-red-contacts hide">
                <div class="contacts"><h5>Contactos</h5>


                    
                </div>
            </div>
        </div>

        <div class="mr-groups hide" id="mr-groups">
            <div class="mi-red-groups">
                <div class="groups" id="groups"><h5>Grupos</h5> 
                
                

                </div>
            </div>
        </div>

        <div class="mr-notifications hide" id="mr-notifications">
            notif
        </div>

        <div class="mr-jobs hide" id="mr-jobs">
            <div class="mi-red-jobs">
            <div class="jobs" id="jobs"><h5>Empleos</h5>

                
            </div>
    </div>
    
        </div>

    <div class="mr-messages hide" id="mr-messages">


    messages
</div>
        
        
        
        `


        document.getElementById("all-posts").innerHTML+=``
        for(i=0; i<publicaciones.length-16;i++){
        let Id= publicaciones[i][4];
        let user1=usuarios[Id];
        let n=user1[2];
        let a=user1[4]

        
        document.getElementById("all-posts").innerHTML+=`
        <div class="post">
        <div class="post-profile-info">
            <div class="post-profile-info-left">
                <div class="post-profile-img"><img style="width: 50px; height:50px; border-radius: 10px;" src="/img/perfil.png" alt=""></div>
                <div class="post-profile-name"><h6>${n} ${a}</h6></div>
                <div style="font-size: small;" class="post-date">Hace 20 horas</div>
            </div>
            <div class="post-profile-info-rigth">
                <div><i class="fa-solid fa-ellipsis"></i></div>
            </div>
        </div>
        <div class="post-content">
            ${publicaciones[i][3]}
        </div>
        <div class="post-actions">
            <i class="fa-regular fa-heart"></i>
            <i class="fa-regular fa-comment"></i>
            <i class="fa-regular fa-share-from-square"></i>
        </div>
    </div>
        `}

            document.getElementById("messages").innerHTML+=``

                document.getElementById("messages").innerHTML+=`
           
                <div class="message">
                    <div class="ms-img"><img style="height: 50px; width:50px; border-radius: 10px;" src="/img/perfil.png" alt="" ></div>
                    <div class="ms-content">
                        <div class="ms-content-name">Banco Atlantida</div>
                        <div </div>
                    </div>
                    </div>  
              `
              document.getElementById("invitations").innerHTML+=``
              
            for(i=0; i<invitaciones.length-1; i++){ 
                let idr=invitaciones[i][0];
                let nombre=usuarios[idr][2];
                let apellido=usuarios[idr][4];
                let info=usuarios[idr][3]
                //if()

                
              document.getElementById("invitations").innerHTML+=`
              <div class="invitation">
              <div class="invitacion-left">
                  <div class="inv-img"><img style="height: 50px; width:50px; border-radius: 10px;" src="/img/perfil.png" alt="" ></div>
                  <div class="inv-content">
                      <div class="inv-name">${nombre} ${apellido}</div>
                      <div style="font-size: x-small;" class="inv-text">${info}</div>
                  </div>
              </div>
              <div class="invitacion-rigth">
                  <div class="acept-invitation">Seguir de Vuelta</div>
                  <div class="ignore-invitation">ignorar</div>
              </div> 
          </div>`}

          document.getElementById("groups").innerHTML+=``

          document.getElementById("groups").innerHTML+=

          `<div class="group">
          <div class="group-img"><img style="height: 50px; width:50px; border-radius: 10px;" src="/img/grupo.jpg" alt="" ></div>
          <div class="group-content">
              <div class="group-name">Finance Club</div>
              <div style="font-size: x-small;" class="group-text">grupo fjdjk.</div>
          </div>
  </div>`

  document.getElementById("jobs").innerHTML+=``
for(i=0; i<empleos.length; i++){

  document.getElementById("jobs").innerHTML+=

  `      <div class="invitation">
  <div class="invitacion-left">
      <div class="inv-img"><img style="height: 50px; width:50px; border-radius: 10px;" src="/img/job.jpeg" alt="" ></div>
      <div class="inv-content">
          <div class="inv-name">${empleos[i][1]}</div>
          <div style="font-size: x-small;" class="inv-text">Vacantes: ${empleos[i][2]}</div>
          <div style="font-size: x-small;" class="inv-text">Sueldo: ${empleos[i][3]}</div>
      </div>
  </div>
  <div class="invitacion-rigth">
      <div id="aply" type="button" class="acept-invitation">APLICAR</div>
      
  </div> 
</div>`
}



    document.getElementById('RegistroUsuario').classList.add('hide');
    document.getElementById('home').classList.remove('hide');
}




//----------------------------------------------------------------------------------
function Menu(show, option){
    document.getElementById(show).classList.remove('hide');
    document.getElementById(option).classList.add('button-active');

    tags=['posts-space','mr-invitations','mr-contacts','mr-groups','mr-notifications', 'mr-jobs', 'mr-messages']
    tags1=['opt-posts','opt-invitations','opt-contacts','opt-groups','opt-notifications','opt-jobs','opt-mensajes']

    for(i=0; i<7; i++){
        if(tags[i]!=show && document.getElementById(tags[i]).classList.value!=`${tags[i]} hide`){
            document.getElementById(tags[i]).classList.add('hide');
        }
    }

    for(i=0; i<7; i++){
        if(tags1[i]!=option && document.getElementById(tags1[i]).classList.value==`button-active` ){
            document.getElementById(tags1[i]).classList.remove('button-active');

        }
    }

}

function PantallaCrearCuenta(){
    document.getElementById('new-acc-screen').classList.remove('hide');
    document.getElementById('sign-in-screen').classList.add('hide');

    
}

function CrearNuevaCuenta(){
    document.getElementById('new-acc-screen').classList.add('hide');
    document.getElementById('sign-in-screen').classList.remove('hide');
}

function GuardarPersona(){
    document.getElementById('log-in-form1').classList.add('hide');
    document.getElementById('log-in-form2').classList.remove('hide');

    let id= 31;
    let p_nombre= document.getElementById('new-nombre').value;
    let p_apellido=document.getElementById('new-apellido').value;
    let correo=document.getElementById('new-correo').value;

    fetch('/nuevapersona',{
        method: "post",
        body: JSON.stringify({id,p_nombre,p_apellido,correo
                    }),
        headers:{
            Accept: "application/json",
            "Content-Type": "application/json"
        }}).then(res => {
        alert("Usuario creado");

        console.log('Success:', res);

        document.getElementById('new-acc-screen').classList.add('oculto');
        document.getElementById('sign-in-screen').classList.remove('oculto');
    })
    .catch(error => console.error('Error:', error))
    cargarPersonas();
}


