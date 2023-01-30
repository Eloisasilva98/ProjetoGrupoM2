let menuMobileOff = true

$("#headerMobile").css({
    'height': '0vh',
    'display': 'none',
    'border-bottom': 'none'
})

$("#iconMenuMobile").on('click', () =>{
    if(menuMobileOff){
    $("#iconMenuMobile").attr('src', './assets/img/close-nav-icon.svg')

    $('header').css({
        'transition': '0.1s',
        'border-bottom': 'solid rgb(253, 194, 48)'
    })

    $("#headerMobile").css({
        'display': 'flex',
        'height': '0vh',
        'animation': 'animationMobileHeaderOn 0.3s',
        'animation-fill-mode': 'forwards'
    })

    $(".navMobile").css({
        'display': 'flex',
    })

    menuMobileOff = false

    } else{
        $("#iconMenuMobile").attr('src', './assets/img/nav-icon.svg')

        $('header').css({
            'border-bottom': 'none'
        })

        $("#headerMobile").css({
            'height': '20vh',
            'animation': 'animationMobileHeaderOff 0.3s',
            'animation-fill-mode': 'forwards',
        })

        $(".navMobile").css({
            'display': 'none'
        })

        setTimeout(displayNoneMenu, 300)
        menuMobileOff = true
    }    
})

function displayNoneMenu(){
    $("#headerMobile").css({
        'display': 'none',
    })
}