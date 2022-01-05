function monterLegende() {
    document.querySelector('.texte13').style.display = 'block';
    return anime ({
        targets: '.texte13',
        translateY: '-5em',
        autoplay: false,
        duration: 300,
        easing: 'linear'
    }).play;
}

function descendreLegende() {
    document.querySelector('.texte13').style.display = 'block';
    return anime ({
        targets: '.texte13',
        translateX: '-500',
        autoplay: false,
        duration: 700,
        easing: 'linear'
    }).play;
}

function chang() {
    document.querySelector('.batjs').style.display = 'block';
    return anime ({
        targets: '.batjs',
        translateX: '-1000',
        autoplay: false,
        duration: 700,
        easing: 'linear'
    }).play;
}

function chang2() {
    document.querySelector('.batjs').style.display = 'block';
    return anime ({
        targets: '.batjs',
        translateX: '0',
        autoplay: false,
        duration: 700,
        easing: 'linear'
    }).play;
}

function carrousel3Images() {

    var images153 = document.querySelectorAll('.image153');
    let d = 2000;
    let delta = 1000;

    images153.forEach(function(img,indice) {
        img.style.zIndex = images153.length - indice;
    });

    let anim15 = anime.timeline({
        loop: true,
        delay: 0
    });

    anim15.add({
        targets: images153,
        translateX: [{value: '500', duration: d},
                     {value: '-500', duration: 0, delay: function(img,ind) {
                        if (ind == 0) return (2*delta)+d;
                        if (ind == 1) return delta;
                        return 0;
                     }},
                     {value: '0', duration: function(img,ind) {
                         if (ind == 3) return 0;
                         return d;
                     }}],
        easing: 'linear',
        delay: function(img,ind) {
            if (ind == 0) return delta;
            if (ind == 1) return (2*delta)+d;
            return (3*delta)+(2*d);
        }
    });
}