score = 0;
cross = true;

audio = new Audio('game.mp3');
audiogo = new Audio('gameover.mp3');
setTimeout(() => 
{
    audio.play()
}, 1000);

document.onkeydown = function (e) 
{
    console.log("Key code is: ", e.keyCode)
    if (e.keyCode == 38) 
    {
        batman = document.querySelector('.batman');
        batman.classList.add('animateBat');
        setTimeout(() => 
        {
            batman.classList.remove('animateBat')
        }, 700);
    }
    if (e.keyCode == 39) 
    {
        batman = document.querySelector('.batman');
        batX = parseInt(window.getComputedStyle(batman, null).getPropertyValue('left'));
        batman.style.left = batX + 112 + "px";
    }
    if (e.keyCode == 37) 
    {
        batman = document.querySelector('.batman');
        batX = parseInt(window.getComputedStyle(batman, null).getPropertyValue('left'));
        batman.style.left = (batX - 112) + "px";
    }
}
setInterval(() => 
{
    batman = document.querySelector('.batman');
    gameover = document.querySelector('.gameover');
    obstacle = document.querySelector('.obstacle');

    bx = parseInt(window.getComputedStyle(batman, null).getPropertyValue('left'));
    by = parseInt(window.getComputedStyle(batman, null).getPropertyValue('top'));

    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));

    offsetX = Math.abs(bx - ox);
    offsetY = Math.abs(by - oy);
    if (offsetX < 60 && offsetY < 52) 
    {
        gameover.innerHTML = "Game Over - Reload to Play Again"
        obstacle.classList.remove('obstacleAni')
        audiogo.play();
        setTimeout(() => {
            audiogo.pause();
            audio.pause();
        }, 3000);
    }
    else if (offsetX < 145 && cross) 
    {
        score += 1;
        updateScore(score);
        cross = false;
        setTimeout(() => 
        {
            cross = true;
        }, 1000);
        setTimeout(() => 
        {
            aniDur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
            newDur = aniDur - 0.10;
            obstacle.style.animationDuration = newDur + 's';
            console.log('New animation duration: ', newDur)
        }, 500);

    }

}, 10);

function updateScore(score) 
{
    scoreCont.innerHTML = "Your Score: " + score
}