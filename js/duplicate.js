const foods = [
    [['bread_bottom', 'meat', 'bread_top'], 'burger-10.png'],
    [['bread_bottom', 'tomato', 'bread_top'], 'burger-6.png'],
    [['bread_bottom', 'lettuce', 'bread_top'], 'burger-11.png'],
    [['bread_bottom', 'meat', 'tomato', 'bread_top'], 'burger-9.png'],
    [['bread_bottom', 'meat', 'lettuce', 'bread_top'], 'burger-13.png'],
    [['bread_bottom', 'tomato', 'lettuce', 'bread_top'], 'burger-8.png'],
    [['bread_bottom', 'meat', 'tomato', 'lettuce', 'bread_top'], 'full-burger.png']
];
const orders = [[], [], []];
let select = [];
let score = 0;
let audio = new Audio('sound/pop up.mp3');
let pop = new Audio('sound/bite.mp3');

for (let i = 1; i < 4; i++) {
    let rand = Math.floor(Math.random() * 7);
    orders[i - 1] = foods[rand][0];
    document.getElementById('order' + i).src = 'image/' + foods[rand][1];
}

function select_image()
{
    if (!select.includes('bread_top'))
    {
        if (select.includes('meat') && !select.includes('tomato') && !select.includes('lettuce'))
        {
            document.getElementById('follow').src = 'image/burger-2.png';
        }
        else if (select.includes('meat') && select.includes('tomato') && !select.includes('lettuce'))
        {
            document.getElementById('follow').src = 'image/burger-3.png';
        }
        else if (select.includes('meat') && select.includes('tomato') && select.includes('lettuce'))
        {
            document.getElementById('follow').src = 'image/burger-4.png';
        }
        else if (!select.includes('meat') && select.includes('tomato') && !select.includes('lettuce'))
        {
            document.getElementById('follow').src = 'image/burger-5.png';
        }
        else if (!select.includes('meat') && select.includes('tomato') && select.includes('lettuce'))
        {
            document.getElementById('follow').src = 'image/burger-7.png';
        }
        else if (!select.includes('meat') && !select.includes('tomato') && select.includes('lettuce'))
        {
            document.getElementById('follow').src = 'image/burger-12.png';
        }
        else if (select.includes('meat') && !select.includes('tomato') && select.includes('lettuce'))
        {
            document.getElementById('follow').src = 'image/burger-14.png';
        }
    }
}

function bread_bottom_click()
{
    audio.play();

    select = ['bread_bottom'];

    document.getElementById('follow').src = 'image/bread-bottom.png';
    document.getElementById('follow').style.display = 'block';
}

function meat_click()
{
    if (!select.includes('meat') && select.includes('bread_bottom'))
    {
        audio.play();

        select.push('meat');

        select_image();
    }
}

function tomato_click()
{
    if (!select.includes('tomato') && select.includes('bread_bottom'))
    {
        audio.play();

        select.push('tomato');

        select_image();
    }
}

function lettuce_click()
{
    if (!select.includes('lettuce') && select.includes('bread_bottom'))
    {
        audio.play();

        select.push('lettuce');

        select_image();
    }
}

function bread_top_click()
{
    if (!select.includes('bread_top') && select.includes('bread_bottom') && select.length != 1)
    {
        audio.play();

        select.push('bread_top');

        if (!select.includes('meat') && select.includes('tomato') && !select.includes('lettuce'))
        {
            document.getElementById('follow').src = 'image/burger-6.png';
        }
        else if (!select.includes('meat') && select.includes('tomato') && select.includes('lettuce'))
        {
            document.getElementById('follow').src = 'image/burger-8.png';
        }
        else if (select.includes('meat') && select.includes('tomato') && !select.includes('lettuce'))
        {
            document.getElementById('follow').src = 'image/burger-9.png';
        }
        else if (select.includes('meat') && !select.includes('tomato') && !select.includes('lettuce'))
        {
            document.getElementById('follow').src = 'image/burger-10.png';
        }
        else if (!select.includes('meat') && !select.includes('tomato') && select.includes('lettuce'))
        {
            document.getElementById('follow').src = 'image/burger-11.png';
        }
        else if (select.includes('meat') && !select.includes('tomato') && select.includes('lettuce'))
        {
            document.getElementById('follow').src = 'image/burger-13.png';
        }
        else if (select.includes('meat') && select.includes('tomato') && select.includes('lettuce'))
        {
            document.getElementById('follow').src = 'image/full-burger.png';
        }
    }
}