


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




