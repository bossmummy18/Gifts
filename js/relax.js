$(document).mousemove(function(e) {
    if (document.getElementById('time').offsetWidth < 1)
    {
        window.location.href = 'score.html?score=' + score;
    }

    if (document.getElementById('time').offsetWidth < 165)
    {
        document.getElementById('time').style.backgroundColor = '#FE0000';
    }
    else if (document.getElementById('time').offsetWidth < 330)
    {
        document.getElementById('time').style.backgroundColor = '#FFB000';
    }
    else
    {
        document.getElementById('time').style.backgroundColor = '#16FF00';
    }

    $("#follow").css({
        left: e.pageX + 1,
        top: e.pageY + 1
    });
});

gsap.fromTo('#time', {width: 495}, {width: 0, duration: 60, ease: 'none'});

function order1_click()
{
    if (JSON.stringify(select.sort()) == JSON.stringify(orders[0].sort()))
    {
        pop.play();

        gsap.fromTo('#btn1', {opacity: 1}, {opacity: 0.25, duration: 0.25});

        score += select.length * 10;

        document.getElementById('score').innerHTML = score;

        select = [];
        document.getElementById('follow').src = '';
        document.getElementById('follow').style.display = 'none';

        setTimeout(function() {
            let rand = Math.floor(Math.random() * 7);
            orders[0] = foods[rand][0];
            document.getElementById('order1').src = 'image/' + foods[rand][1];

            gsap.fromTo('#btn1', {opacity: 0.5}, {opacity: 1, duration: 0.25});
        }, 250);
    }
}

function order2_click()
{
    if (JSON.stringify(select.sort()) == JSON.stringify(orders[1].sort()))
    {
        pop.play();

        gsap.fromTo('#btn2', {opacity: 1}, {opacity: 0.25, duration: 0.25});

        score += select.length * 10;

        document.getElementById('score').innerHTML = score;

        select = [];
        document.getElementById('follow').src = '';
        document.getElementById('follow').style.display = 'none';

        setTimeout(function() {
            let rand = Math.floor(Math.random() * 7);
            orders[1] = foods[rand][0];
            document.getElementById('order2').src = 'image/' + foods[rand][1];

            gsap.fromTo('#btn2', {opacity: 0.5}, {opacity: 1, duration: 0.25});
        }, 250);
    }
}

function order3_click()
{
    if (JSON.stringify(select.sort()) == JSON.stringify(orders[2].sort()))
    {
        pop.play();

        gsap.fromTo('#btn3', {opacity: 1}, {opacity: 0.25, duration: 0.25});

        score += select.length * 10;

        document.getElementById('score').innerHTML = score;

        select = [];
        document.getElementById('follow').src = '';
        document.getElementById('follow').style.display = 'none';

        setTimeout(function() {
            let rand = Math.floor(Math.random() * 7);
            orders[2] = foods[rand][0];
            document.getElementById('order3').src = 'image/' + foods[rand][1];

            gsap.fromTo('#btn3', {opacity: 0.5}, {opacity: 1, duration: 0.25});
        }, 250);
    }
}