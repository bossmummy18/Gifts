$(document).mousemove(function(e) {
    if (document.getElementById('time1').offsetWidth < 1 ||
        document.getElementById('time2').offsetWidth < 1 ||
        document.getElementById('time3').offsetWidth < 1)
    {
        window.location.href = 'score.html?score=' + score;
    }

    for (let i = 1; i < 4; i++) {
        if (document.getElementById('time' + i).offsetWidth < 52)
        {
            document.getElementById('time' + i).style.backgroundColor = '#FE0000';
        }
        else if (document.getElementById('time' + i).offsetWidth < 104)
        {
            document.getElementById('time' + i).style.backgroundColor = '#FFB000';
        }
        else
        {
            document.getElementById('time' + i).style.backgroundColor = '#16FF00';
        }
    }

    $("#follow").css({
        left: e.pageX + 1,
        top: e.pageY + 1
    });
});

gsap.fromTo('#time1', {width: 155}, {width: 0, duration: 10, ease: 'none'});
gsap.fromTo('#time2', {width: 155}, {width: 0, duration: 10, ease: 'none'});
gsap.fromTo('#time3', {width: 155}, {width: 0, duration: 10, ease: 'none'});

function order1_click()
{
    if (JSON.stringify(select.sort()) == JSON.stringify(orders[0].sort()))
    {
        pop.play();

        document.getElementById('time1').style.width = 155;

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

            gsap.fromTo('#time1', {width: 155}, {width: 0, duration: 10, ease: 'none'});
            gsap.fromTo('#btn1', {opacity: 0.5}, {opacity: 1, duration: 0.25});
        }, 250);
    }
}

function order2_click()
{
    if (JSON.stringify(select.sort()) == JSON.stringify(orders[1].sort()))
    {
        pop.play();

        document.getElementById('time2').style.width = 155;

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

            gsap.fromTo('#time2', {width: 155}, {width: 0, duration: 10, ease: 'none'});
            gsap.fromTo('#btn2', {opacity: 0.5}, {opacity: 1, duration: 0.25});
        }, 250);
    }
}

function order3_click()
{
    if (JSON.stringify(select.sort()) == JSON.stringify(orders[2].sort()))
    {
        pop.play();

        document.getElementById('time3').style.width = 155;

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

            gsap.fromTo('#time3', {width: 155}, {width: 0, duration: 10, ease: 'none'});
            gsap.fromTo('#btn3', {opacity: 0.5}, {opacity: 1, duration: 0.25});
        }, 250);
    }
}