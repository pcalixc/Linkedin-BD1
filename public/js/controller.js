
let usuarioActual;
let usuarios;
let publicaciones;
let invitaciones;
let seguidos;

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
        console.log('publicaciones', publicaciones)
    }
cargarUsuarios();

function verificarUsuario(){
    let enteredUser= document.getElementById("user").value;
    let enteredPassword=document.getElementById("password").value;

    for (i=0; i<usuarios.length;i++){
        if (usuarios[i][0] ==enteredUser && usuarios[i][1]==enteredPassword) {
            usuarioActual=[`${enteredUser}`,`${enteredPassword}`, `${usuarios[i][2]}`,`${usuarios[i][3]}`,`${usuarios[i][4]}`,`${usuarios[i][5]}` ]
        }     }
        console.log(usuarioActual)
        let seguidos = usuarioActual[4].split(' ');
        let invitaciones = usuarioActual[5].split(' ');
        console.log(seguidos);
        console.log(invitaciones);

    if(usuarioActual!=null){
        SetHomeScreen();
    }else{
        alert("Usuario o contrasena incorrecta");
        }
    } 

function SetHomeScreen(){
    document.getElementById("home").innerHTML= ``
    
    document.getElementById("home").innerHTML+=
    `        <div class="linkedin-header1">
    <div class="l1">${usuarioActual[2]}</div>
    <div class="l1"><img id="logo" src="../img/linkedinlogo.png" alt=""></div>
    <div></div>
</div>
<div class="home-screen hide">
<div class="hs-menu-profile">
    <div class="menu">
        <div class="button-active" id="opt-posts" onclick="Menu('posts-space','opt-posts')"><i class="fa-solid fa-house"></i></i>Inicio</div id="opt-posts">
        <div id="opt-invitations" onclick="Menu('mr-invitations','opt-invitations')"><i class="fa-solid fa-users"></i>Mi red</div id="opt-posts">
        <div id="opt-contacts" onclick="Menu('mr-contacts','opt-contacts')"><i class="fa-solid fa-address-book"></i>Contactos</div id="opt-posts">
        <div id="opt-groups" onclick="Menu('mr-groups','opt-groups')"><i class="fa-solid fa-users-line"></i>Grupos</div id="opt-posts">
        <div id="opt-notifications" onclick="Menu('mr-notifications','opt-notifications')"><i class="fa-solid fa-bell"></i>Notificaciones</div>
        <div ><i class="fa-solid fa-suitcase"></i>Empleos</div>
        <div ><i class="fa-solid fa-message"></i>Mensajes</div>
        <div ><i class="fa-solid fa-bars"></i></i>Ajustes</div>
    </div>
    <div class="profile-info">
        <div class="profile-info-img"> <img style="width: 70px; height:80px" src="/img/messi.jpg" alt=""></div>
        <h6>${usuarioActual[2]}</h6>
        <div>${usuarioActual[3]}</div>
    </div>
</div>

<div class="changing hide">
    <div class="posts-space " id="posts-space">
        <div class="create-post ">
            Crear un nuevo post...
        </div>
        <div class="all-posts ">
            <div class="post">
                <div class="post-profile-info">
                  
                    <div class="post-profile-info-left">
                        <div class="post-profile-img"><img style="width: 50px; height:50px; border-radius: 10px;" src="/img/perfil2.jpeg" alt=""></div>
                        <div class="post-profile-name"><h6>Banco Atlantida</h6></div>
                        <div style="font-size: small;" class="post-date">Hace 20 horas</div>
                    </div>
                    <div class="post-profile-info-rigth">
                        <div><i class="fa-solid fa-ellipsis"></i></div>
                    </div>
                </div>
                <div class="post-content">
                    <p>Maecenas hendrerit porttitor integer viverra lorem metus et in eu. Rhoncus dignissim in et id arcu amet, aliquam vivamus. Mauris eget at risus quis. Viverra integer platea leo, mauris. Proin diam sit ut ac eget sed egestas congue. Dictum at aliquam felis id enim feugiat donec purus. Amet, bibendum nibh scelerisque et in nisl. Pretium posuere eu molestie non eget nisl quisque nibh vulputate. Neque odio mauris tortor eu aliquet morbi. Posuere porttitor cursus risus, viverra faucibus leo in egestas. Pharetra, cursus pellente...</p>
                </div>
                <div class="post-actions">
                    <i class="fa-regular fa-heart"></i>
                    <i class="fa-regular fa-comment"></i>
                    <i class="fa-regular fa-share-from-square"></i>
                </div>
            </div>
        </div>
    </div>

    <div class="mr-invitations hide" id="mr-invitations">
        <div class="mi-red-invitationes ">
            <div class="invitations "><h5>Invitaciones</h5>
                <div class="invitation">
                    <div class="invitacion-left">
                        <div class="inv-img"><img style="height: 50px; width:50px; border-radius: 10px;" src="/img/perfil2.jpeg" alt="" ></div>
                        <div class="inv-content">
                            <div class="inv-name">Banco Atlantida</div>
                            <div style="font-size: x-small;" class="inv-text">Economista.</div>
                        </div>
                    </div>
                    <div class="invitacion-rigth">
                        <div class="acept-invitation">Aceptar</div>
                        <div class="ignore-invitation">ignorar</div>

                    </div>

                  
                </div>
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
                <div class="contact">
                    <div class="contact-left">
                        <div class="cont-img"><img style="height: 50px; width:50px; border-radius: 10px;" src="/img/perfil2.jpeg" alt="" ></div>
                        <div class="cont-content">
                            <div class="cont-name">Banco Atlantida</div>
                            <div style="font-size: x-small;" class="cont-text">Economista.</div>
                        </div>
                    </div>
                    <div class="contact-rigth">
                        <div class="send-message">Enviar Menssaje</div>
                    </div>     
                </div>
            </div>
        </div>

    </div>

    <div class="mr-groups hide" id="mr-groups">
        <div class="mi-red-groups">
            <div class="groups"><h5>Grupos</h5>
                <div class="group">
                        <div class="group-img"><img style="height: 50px; width:50px; border-radius: 10px;" src="/img/perfil2.jpeg" alt="" ></div>
                        <div class="group-content">
                            <div class="group-name">Finance Club</div>
                            <div style="font-size: x-small;" class="group-text">grupo fjdjk.</div>
                        </div>
                  
                     
                </div>
            </div>
        </div>

    </div>

    <div class="mr-notifications hide" id="mr-notifications">
        notif
    </div>

</div>

<div class="hs-messages">
    <div class="messages-header"><h3>Mensajes</h3></div>
    <div class="messages">
        <div class="message">
            <div class="ms-img"><img style="height: 50px; width:50px; border-radius: 10px;" src="/img/perfil2.jpeg" alt="" ></div>
            <div class="ms-content">
                <div class="ms-content-name">Banco Atlantida</div>
                <div style="font-size: x-small;" class="ms-content-text">Duis proin eu sagittis fermentum eget pharetra.</div>
            </div>
        </div>
    </div>
</div>
</div>
    `


    document.getElementById('RegistroUsuario').classList.add('hide');
    document.getElementById('home').classList.remove('hide');
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




