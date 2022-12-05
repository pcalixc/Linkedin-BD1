

let usuarioActual;
let usuarios;
let mensajes;
let publicaciones;
let invitaciones;
let contactos;
let grupos;
let empleos;
let personas;
let usuarioGrupo;
let formacion;
let empresas;



const cargarUsuarios= async () => {
    const respuesta = await fetch('/usuarios', {
        method: "get"});
        usuarios = await respuesta.json();
        console.log('Usuarios', usuarios)
    }
cargarUsuarios();

const cargarFormacion= async () => {
    const respuesta = await fetch('/formacion', {
        method: "get"});
        formacion = await respuesta.json();
        console.log('formacion', formacion)
    }
    cargarFormacion();

    const cargarEmpresas= async () => {
        const respuesta = await fetch('/empresas', {
            method: "get"});
            empresas = await respuesta.json();
            console.log('empresas', empresas)
        }
        cargarEmpresas();



async function cargarPersonas() {
    const respuesta = await fetch('/personas', {
        method: "get"
    });
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

const cargarContactos= async () => {
    const respuesta = await fetch('/contactos', {
        method: "get"});
        contactos = await respuesta.json();
        console.log("contactos",contactos)
    }

cargarContactos();

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
            usuarioActual=[`${enteredUser}`,`${enteredPassword}`, `${usuarios[i][2]}`,`${usuarios[i][3]}`,`${usuarios[i][4]}`,i ]
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
            <div style="color: var(--blue)" class="l1"><i class="fa-solid fa-circle"></i><strong>${usuarioActual[2]}</strong></div>
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
                <div id="opt-notifications"><i class="fa-solid fa-bell"></i>Notificaciones</div>
                <div id="opt-jobs" onclick="Menu('mr-jobs','opt-jobs')"><i class="fa-solid fa-suitcase"></i>Empleos</div>
                <div id="opt-mensajes" onclick="Menu('mr-messages','opt-mensajes')"><i class="fa-solid fa-message"></i>Mensajes</div>
                <div ><i class="fa-solid fa-bars"></i></i>Ajustes</div>

                </div>
                <div type="button" class="profile-info" onclick="MostrarPerfil(${usuarioActual[5]})">
                    <div class="profile-info-img" > <img style="width: 70px; height:80px" src="/img/perfil.png" alt=""></div>
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
            </div>
            
         `
            document.getElementById("changing").innerHTML+=``
            document.getElementById("changing").innerHTML+=`
            <div class="posts-space " id="posts-space">
                <div class="create-post ">
                    <p>Crear un post</p>
                    <input style="background-color: #e5e5e53d;" type="text" class="form-control" id="user" aria-describedby="newpost">
                    <div onclick="CrearPost()" class="post-button"><p>Publicar</p></div>     
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
                    
                </div>
            </div>
        </div>
      
        <div class="mr-contacts hide" id="mr-contacts">
            <div class="mi-red-contacts hide">
                <div class="contacts" id="contacts"><h5>Contactos</h5>


                    
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
    <div class="messages1-header"><h3>Usuario</h3></div>
    <div class="messages1" id="messages1">


    
    <input style="background-color: #e5e5e53d; margin-top: 450px; type="tex" class="form-control" id="user" aria-describedby="emailHelp">

    </div>
    </div>  

    


 
</div>
        
        
        
        `


        document.getElementById("all-posts").innerHTML+=``
        for(i=0; i<publicaciones.length-16;i++){
        let Id= publicaciones[i][4];
        let user1=usuarios[Id];
        let n=user1[2];
        let a=user1[4];
     

        
        document.getElementById("all-posts").innerHTML+=`
        <div class="post">
        <div class="post-profile-info">
            <div class="post-profile-info-left">
                <div onclick="MostrarPerfil(${Id})" class="post-profile-img"><img style="width: 50px; height:50px; border-radius: 10px;" src="/img/perfil.png" alt=""></div>
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
                    <div onclick="MostrarPerfil()" class="ms-img"><img style="height: 50px; width:50px; border-radius: 10px;" src="/img/perfil.png" alt="" ></div>
                    <div class="ms-content">
                        <div class="ms-content-name">Usuario</div>
                        <div </div>
                    </div>
                    </div>  
              `
              document.getElementById("invitations").innerHTML+=``
              
            for(i=0; i<invitaciones.length-1; i++){ 
                let idr=invitaciones[i][0];
                let user1=usuarios[idr];
                let nombre=usuarios[idr][2];
                let apellido=usuarios[idr][4];
                let info=usuarios[idr][3]


                //if()

                
              document.getElementById("invitations").innerHTML+=`
              <div class="invitation">
              <div class="invitacion-left">
                  <div onclick="MostrarPerfil(${idr})" class="inv-img"><img style="height: 50px; width:50px; border-radius: 10px;" src="/img/perfil.png" alt="" ></div>
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

          document.getElementById("contacts").innerHTML+=``
              
            for(i=0; i<invitaciones.length-1; i++){ 
                let idr=contactos[i][0];
                let user1=usuarios[idr];
                let nombre=usuarios[idr][2];
                let apellido=usuarios[idr][4];
                let info=usuarios[idr][3]
                //if()

                
              document.getElementById("contacts").innerHTML+=`
              <div class="invitation">
              <div class="invitacion-left">
                  <div onclick="MostrarPerfil(${idr})" class="inv-img"><img style="height: 50px; width:50px; border-radius: 10px;" src="/img/perfil.png" alt="" ></div>
                  <div class="inv-content">
                      <div class="inv-name">${nombre} ${apellido}</div>
                      <div style="font-size: x-small;" class="inv-text">${info}</div>
                  </div>
              </div>
              <div class="invitacion-rigth">
                  <div class="acept-invitation">Enviar mensaje</div>
                  <div></div>
              </div> 
          </div>`}

          document.getElementById("groups").innerHTML+=``
          for(i=0; i<grupos.length-1; i++){ 

          document.getElementById("groups").innerHTML+=

          `<div class="group">
          <div class="group-img"><img style="height: 50px; width:50px; border-radius: 10px;" src="/img/grupo.jpg" alt="" ></div>
          <div class="group-content">
              <div class="group-name">${grupos[i][1]}</div>
              <div style="font-size: x-small;" class="group-text">informacion</div>
          </div>
  </div>`}

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

function MostrarPerfil(id){
    console.log(id)
    console.log(usuarios[id])
    document.getElementById('home').classList.add('hide');
    document.getElementById('myModal').classList.remove('hide');
    //document.getElementById('profile-mm').innerHTML=``

    
    document.getElementById('profile-mm').innerHTML+=
    `
    
    
    <div class="container">
      <div class="row">
        <div class="col-lg-4">
          <div class="card shadow-sm">
            <div class="card-header bg-transparent text-center">
              <img class="profile_img" src="/img/perfil.png" alt="student dp">
              <h3>${usuarios[id][2]} ${usuarios[id][4]}</h3>
            </div>
            <div class="card-body">
              <p class="mb-0"><strong class="pr-1"></strong>${usuarios[id][3]}</p>
              <p class="mb-0"><strong class="pr-1"></strong>${personas[id][5]}</p>
              <p class="mb-0"><strong class="pr-1"></strong></p>
            </div>
          </div>
        </div>
        <div class="col-lg-8">
          <div class="card shadow-sm">
            <div class="card-header bg-transparent border-0">
              <h3 class="mb-0"><i class="far fa-clone pr-1"></i>Educacion</h3>
            </div>
            <div class="card-body pt-0">
              <table class="table table-bordered">
                <tr>
                  <th width="30%">1</th>
                  <td width="2%">:</td>
                  <td>${formacion[id][1]}, ${formacion[id][2]}</td>
                </tr>
              </table>
            </div>
          </div>
          <div></div>
          <div></div>

          <div class="col-lg-8">
          <div class="card shadow-sm">
            <div class="card-header bg-transparent border-0">
              <h3 class="mb-0"><i class="far fa-clone pr-1"></i>Experiencia Laboral</h3>
            </div>
            <div class="card-body pt-0">
              <table class="table table-bordered">
                <tr>
                  <th width="30%">1</th>
                  <td width="2%">:</td>
                  <td>${empresas[id][1]}, ${empresas[id][2]}</td>
                </tr>
              </table>
            </div>
          </div>
            <div style="height: 26px"></div>
          <div class="card shadow-sm">
            <div class="card-header bg-transparent border-0">
              <h3 class="mb-0"><i class="far fa-clone pr-1"></i>Informacion General</h3>
            </div>
            <div class="card-body pt-0">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            
          </div>
        </div>
      </div>
    </div>
  </div>

`

   
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
            "Content-type": "application/json; charset=UTF-8"
        }}).then(res => {

        console.log('Success:', res);

        document.getElementById('new-acc-screen').classList.add('oculto');
        document.getElementById('sign-in-screen').classList.remove('oculto');
    })
    .catch(error => console.error('Error:', error))
    cargarPersonas();
}

function Back(){
    document.getElementById('home').classList.remove('hide');
     document.getElementById('myModal').classList.add('hide');
     document.getElementById('profile-mm').innerHTML=``
    console.log('jjjjjjjjjjjjjjjjj')
}


