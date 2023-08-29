
var canvas = document.querySelector("canvas");
var player = document.getElementById("player1");
var enemyobject = document.getElementById("enemy");
var bulletobject = document.getElementById("lazer");
var enemybullet = document.getElementById("lazer");
var background = document.getElementById("background");
var scoreBox = document.getElementById("scoreBox");
var youloseImage = document.getElementById("youlose");
var playbutton = document.getElementById("play");
var pausemenuButton = document.getElementById("pausebutton");
var pausemenuImage = document.getElementById("pause");
var pausemenuButtonRestart = document.getElementById("player");
var pausemenuButtonMenu = document.getElementById("player");
var pausemenuButtonContinue = document.getElementById("player");
var rightArrow = document.getElementById("rightArrow");
var leftArrow = document.getElementById("leftArrow");
var PickAShipText = document.getElementById("PickAShipText");
var soundButton = document.getElementById("SoundButton");
var pickshipButton = document.getElementById("pick");
var RestartButton = document.getElementById("RestartButton");
var ContinueButton = document.getElementById("ContinueButton");
var MenuButton = document.getElementById("MenuButton");
var BackButton = document.getElementById("BackButton");
var loseMenu = document.getElementById("loseMenu");
var gameName = document.getElementById("gameName");
var bullets = [];
var enemybullets = [];
var y = 650;
var x = 700;
var speed = 4.6;
var volocityX = 0;
var volocityY = 0;
var num = 0;
var enemyxpos = 100;
canvas.width = window.innerWidth - 6;
canvas.height = window.innerHeight - 6.1;
var c = canvas.getContext('2d');
var enemysArray = [];
var spawnenemys = 0;
var spawnBullet = 0;
var playercollisioncheck = 0;
var howmany = 10;
var howmanybullets = 0;
var shoot = false;
var bulletDelay = 0;
var score;
var scorevalue = 0;
var random = Math.floor(Math.random() * (enemysArray.length));
var randomtime = Math.floor(Math.random() * 70) + 70;
var randomtime2 = 0;
var randomnumber = Math.floor(Math.random() * 9) + 1;
var randomnumber2 = Math.floor(Math.random() * 9) + 1;
var answer = randomnumber * randomnumber2;
var left = false;
var right = false;
var stopmoving = false;
var stopmoving2 = false;
var lives = 3;
var lives2 = 3;
var correctanswer = true;
var randomnumber3 = Math.floor(Math.random() * 10);
var witchenemy = 0;
var lifePositionx;
var lifePositionx2;
var enemybulletDelay = 0.3;
var enemyspeed = 0.025;
var youlosestop = false;
var oneTime = true; ``
var buttonPosX2 = canvas.width / 2 - 150;
var buttonPosY2 = canvas.height / 2 + 50;
var buttonPosX = canvas.width / 2 - 225;
var buttonPosY = canvas.height - 110;
var buttonPosX4 = canvas.width / 2 + 108;
var buttonPosY4 = canvas.height - 110;
var buttonPosX5 = canvas.width / 2 - 100;
var buttonPosY5 = canvas.height - 110;
var buttonPosX3 = canvas.width - 100;
var buttonPosY3 = 20;
var menu = true;
var lazerSound = new Audio("lazerSound.wav");
var lazerSound2 = new Audio("lazerSound2.wav");
var explode = new Audio("explode.wav");
var smallexplode = new Audio("smallexplode.wav");
var mathblasterMusic = new Audio("mathblaster.wav");
var pausemenu = false;
var pausemenuOffOrOn = true;
var enemybulletSpeed = 3;
var playerbulletSpeed = 6;
var pausemenuButtonRestartPosX = canvas.width / 4;
var pausemenuButtonRestartPosY = canvas.height / 3.2;
var pausemenuButtonMenuPosX = canvas.width / 1.95;
var pausemenuButtonMenuPosY = canvas.height / 3.2;
var pausemenuButtonContinuePosX = canvas.width / 2.6;
var pausemenuButtonContinuePosY = canvas.height / 2;
var selectShipButtonPosX = 50;
var selectShipButtonPosY = canvas.height - 170;
var rightArrowButtonPosX = canvas.width / 1.63;
var rightArrowButtonPosY = canvas.height / 1.8;
var leftArrowButtonPosX = canvas.width / 2.95;
var leftArrowButtonPosY = canvas.height / 1.8;
var pausemenuButtonContinuePosY = canvas.height / 2;
var selectionScene = false;
var whichShip = 1;
var newplayer = false;
var backButtonPosX = canvas.width / 2.25;
var backButtonPosY = canvas.height / 2.2;
var SoundButtonPosX = canvas.width - 150;
var SoundButtonPosY = 30;
var Sound = false;
var SoundOnOrOff = true;

function update() {
  pausemenuButtonRestartPosX = canvas.width / 4;
  pausemenuButtonRestartPosY = canvas.height / 3.2;
  pausemenuButtonMenuPosX = canvas.width / 1.95;
  pausemenuButtonMenuPosY = canvas.height / 3.2;
  pausemenuButtonContinuePosX = canvas.width / 2.6;
  pausemenuButtonContinuePosY = canvas.height / 2;
  selectShipButtonPosX = 50;
  selectShipButtonPosY = canvas.height - 170;
  rightArrowButtonPosX = canvas.width / 1.63;
  rightArrowButtonPosY = canvas.height / 1.8;
  leftArrowButtonPosX = canvas.width / 2.95;
  leftArrowButtonPosY = canvas.height / 1.8;
  pausemenuButtonContinuePosY = canvas.height / 2;
  canvas.width = window.innerWidth - 6;
  canvas.height = window.innerHeight - 6.1;
  SoundButtonPosX = canvas.width - 150;
  SoundButtonPosY = 30;
  if (Sound == false) {
    mathblasterMusic.pause();
  }
  if (menu) {
    if (Sound) {
      mathblasterMusic.play();
    } else {
      mathblasterMusic.pause();
    }
    canvas.width = window.innerWidth - 6;
    canvas.height = window.innerHeight - 6.1;
    c.drawImage(background, 0, 0, canvas.width, canvas.height * 1.2);
    c.drawImage(playbutton, 680, 500, 200, 200);
    c.drawImage(pickshipButton, selectShipButtonPosX, selectShipButtonPosY, 150, 150);
    c.drawImage(player, selectShipButtonPosX + 30, selectShipButtonPosY + 20, 90, 90);
    c.drawImage(PickAShipText, selectShipButtonPosX + 5, selectShipButtonPosY - 50, 150, 50);
    c.drawImage(soundButton, SoundButtonPosX, SoundButtonPosY, 140, 140);
    c.drawImage(gameName, canvas.width / 2 - 220, 70, 450, 200);
    addEventListener("click", function move(e) {
      console.log(e);
      var mouseX = e.clientX;
      var mouseY = e.clientY;
      if (mouseX > buttonPosX2 + 60) {
        if (mouseX < buttonPosX2 + 270) {
          if (mouseY > buttonPosY2 + 60) {
            if (mouseY < buttonPosY2 + 280) {
              menu = false;
            }
          }
        }
      }
      if (mouseX > SoundButtonPosX) {
        if (mouseX < SoundButtonPosX + 100) {
          if (mouseY > SoundButtonPosY) {
            if (mouseY < SoundButtonPosY + 100) {
              if (menu) {
                if (SoundOnOrOff) {
                  Sound = true;
                  SoundOnOrOff = false;
                  soundButton = document.getElementById("SoundButton");
                } else {
                  Sound = false;
                  SoundOnOrOff = true;
                  soundButton = document.getElementById("SoundOff");
                }
              }

            }
          }
        }
      }
      if (mouseX > selectShipButtonPosX) {
        if (mouseX < selectShipButtonPosX + 150) {
          if (mouseY > selectShipButtonPosY) {
            if (mouseY < selectShipButtonPosY + 150) {
              if (menu) {
                selectionScene = true;
                menu = false;
              }

            }
          }
        }
      }
    });
    window.requestAnimationFrame(update);
  }
  if (selectionScene) {
    c.drawImage(background, 0, 0, canvas.width, canvas.height * 1.2);
    c.drawImage(rightArrow, rightArrowButtonPosX, rightArrowButtonPosY, 40, 40);
    c.drawImage(leftArrow, leftArrowButtonPosX, leftArrowButtonPosY, 40, 40);
    c.drawImage(PickAShipText, canvas.width / 2 - 145, 50, 280, 70);
    c.drawImage(player, backButtonPosX, backButtonPosY, 150, 150);
    newplayer = true;
    addEventListener("click", function move(e) {
      var mouseX = e.clientX;
      var mouseY = e.clientY;
      if (mouseX > rightArrowButtonPosX) {
        if (mouseX < rightArrowButtonPosX + 40) {
          if (mouseY > rightArrowButtonPosY) {
            if (mouseY < rightArrowButtonPosY + 40) {
              if (newplayer) {
                whichShip += 1;
                if (whichShip >= 5) {
                  whichShip = 1;
                }
                player = document.getElementById("player" + whichShip);
                newplayer = false;
              }
            }
          }
        }
      }
      if (mouseX > leftArrowButtonPosX) {
        if (mouseX < leftArrowButtonPosX + 40) {
          if (mouseY > leftArrowButtonPosY) {
            if (mouseY < leftArrowButtonPosY + 40) {
              if (newplayer) {
                whichShip -= 1;
                if (whichShip <= 0) {
                  whichShip = 4;
                }
                player = document.getElementById("player" + whichShip);
                newplayer = false;
              }
            }
          }
        }
      }
      if (mouseX > backButtonPosX) {
        if (mouseX < backButtonPosX + 150) {
          if (mouseY > backButtonPosY) {
            if (mouseY < backButtonPosY + 150) {
              menu = true;
              selectionScene = false;
            }
          }
        }
      }
    });
    window.requestAnimationFrame(update);
  }
  if (youlosestop == false && menu == false && selectionScene == false) {
    random = Math.floor(Math.random() * (enemysArray.length));
    canvas.width = window.innerWidth - 6;
    canvas.height = window.innerHeight - 6.1;
    if (left) {
      volocityX = -speed;
    }
    if (x <= 0) {
      x += speed;
    }
    if (right) {
      volocityX = speed;
    }
    if (x >= canvas.width - player.width / 7) {
      x -= speed;
    }
    if (stopmoving && stopmoving2) {
      volocityX = 0;
      volocityY = 0;
    }
    draw();
    collisioncheck();
    x += volocityX;
    y += volocityY;
    if (lives <= 0) {
      youlosestop = true;
    }
    else {
      window.requestAnimationFrame(update);
    }
    if (lives2 <= 0) {
      lives -= 1;
      explode = new Audio("explode.wav");
      explode.play();
      lives2 = 3;
    }
  }
  if (youlosestop) {
    c.drawImage(RestartButton, buttonPosX, buttonPosY, 120, 100);
    c.drawImage(RestartButton, buttonPosX4, buttonPosY4, 120, 100);
    c.drawImage(RestartButton, buttonPosX5, buttonPosY5, 200, 100);
    c.drawImage(background, 0, 0, canvas.width, canvas.height * 1.2);
    c.drawImage(loseMenu, canvas.width / 2 - 320, 25, 650, 700);
    c.fillStyle = "orange";
    c.font = "bold 50px sans-serif";
    score = c.fillText(scorevalue, canvas.width / 2 - 25, canvas.height / 2 + 80);
    window.requestAnimationFrame(update);
    addEventListener("click", function move(e) {
      var mouseX = e.clientX;
      var mouseY = e.clientY;
      if (mouseX > buttonPosX) {
        if (mouseX < buttonPosX + 120) {
          if (mouseY > buttonPosY) {
            if (mouseY < buttonPosY + 100) {
              bullets = [];
              enemybullets = [];
              y = 650;
              x = 700;
              speed = 5;
              volocityX = 0;
              volocityY = 0;
              num = 0;
              enemyxpos = 100;
              canvas.width = window.innerWidth - 6;
              canvas.height = window.innerHeight - 6.1;
              enemysArray = [];
              spawnenemys = 0;
              spawnBullet = 0;
              playercollisioncheck = 0;
              howmany = 10;
              howmanybullets = 0;
              shoot = false;
              bulletDelay = 0;
              scorevalue = 0;
              random = Math.floor(Math.random() * (enemysArray.length));
              randomtime = Math.floor(Math.random() * 70) + 70;
              randomtime2 = 0;
              randomnumber = Math.floor(Math.random() * 9) + 1;
              randomnumber2 = Math.floor(Math.random() * 9) + 1;
              answer = randomnumber * randomnumber2;
              left = false;
              right = false;
              stopmoving = false;
              stopmoving2 = false;
              lives = 3;
              lives2 = 3;
              correctanswer = true;
              randomnumber3 = Math.floor(Math.random() * 10);
              witchenemy = 0;
              enemybulletDelay = 0.3;
              lifePositionx;
              lifePositionx2;
              enemyspeed = 0.025;
              youlosestop = false;
              oneTime = true;
              selectionScene = true;
              window.cancelAnimationFrame(update);
            }
          }
        }
      }
      if (mouseX > buttonPosX4) {
        if (mouseX < buttonPosX4 + 120) {
          if (mouseY > buttonPosY) {
            if (mouseY < buttonPosY + 100) {
              bullets = [];
              enemybullets = [];
              y = 650;
              x = 700;
              speed = 5;
              volocityX = 0;
              volocityY = 0;
              num = 0;
              enemyxpos = 100;
              canvas.width = window.innerWidth - 6;
              canvas.height = window.innerHeight - 6.1;
              enemysArray = [];
              spawnenemys = 0;
              spawnBullet = 0;
              playercollisioncheck = 0;
              howmany = 10;
              howmanybullets = 0;
              shoot = false;
              bulletDelay = 0;
              scorevalue = 0;
              random = Math.floor(Math.random() * (enemysArray.length));
              randomtime = Math.floor(Math.random() * 70) + 70;
              randomtime2 = 0;
              randomnumber = Math.floor(Math.random() * 9) + 1;
              randomnumber2 = Math.floor(Math.random() * 9) + 1;
              answer = randomnumber * randomnumber2;
              left = false;
              right = false;
              stopmoving = false;
              stopmoving2 = false;
              lives = 3;
              lives2 = 3;
              correctanswer = true;
              randomnumber3 = Math.floor(Math.random() * 10);
              witchenemy = 0;
              enemybulletDelay = 0.3;
              lifePositionx;
              lifePositionx2;
              enemyspeed = 0.025;
              youlosestop = false;
              oneTime = true;
              window.cancelAnimationFrame(update);
            }
          }
        }
      }
      if (mouseX > buttonPosX5) {
        if (mouseX < buttonPosX5 + 200) {
          if (mouseY > buttonPosY) {
            if (mouseY < buttonPosY + 100) {
              bullets = [];
              enemybullets = [];
              y = 650;
              x = 700;
              speed = 5;
              volocityX = 0;
              volocityY = 0;
              num = 0;
              enemyxpos = 100;
              canvas.width = window.innerWidth - 6;
              canvas.height = window.innerHeight - 6.1;
              enemysArray = [];
              spawnenemys = 0;
              spawnBullet = 0;
              playercollisioncheck = 0;
              howmany = 10;
              howmanybullets = 0;
              shoot = false;
              bulletDelay = 0;
              scorevalue = 0;
              random = Math.floor(Math.random() * (enemysArray.length));
              randomtime = Math.floor(Math.random() * 70) + 70;
              randomtime2 = 0;
              randomnumber = Math.floor(Math.random() * 9) + 1;
              randomnumber2 = Math.floor(Math.random() * 9) + 1;
              answer = randomnumber * randomnumber2;
              left = false;
              right = false;
              stopmoving = false;
              stopmoving2 = false;
              lives = 3;
              lives2 = 3;
              correctanswer = true;
              randomnumber3 = Math.floor(Math.random() * 10);
              witchenemy = 0;
              enemybulletDelay = 0.3;
              lifePositionx;
              lifePositionx2;
              enemyspeed = 0.025;
              youlosestop = false;
              oneTime = true;
              menu = true;
              window.cancelAnimationFrame(update);
            }
          }
        }
      }
    });
  }
  if (Sound) {
    mathblasterMusic.play();
  }
}
function draw() {
  c.drawImage(background, 0, 0, canvas.width, canvas.height * 1.2);
  c.drawImage(player, x, y, 80, 70);
  c.drawImage(pausemenuButton, buttonPosX3, buttonPosY3, 75, 75)
  for (var i = 0; i < lives; i++) {
    c.drawImage(player, lifePositionx, canvas.height - 50, 30, 30);
    lifePositionx += 40;
  }
  for (var i = 0; i < lives2; i++) {
    c.drawImage(player, lifePositionx2, canvas.height - 40, 20, 20);
    lifePositionx2 -= 40;
  }
  lifePositionx = canvas.width - 130;
  lifePositionx2 = canvas.width - 160;
  if (enemysArray.length <= 0) {
    if (enemybulletDelay < 1) {
      enemybulletDelay += 0.08;
    }
    num = 0;
    howmany = 10;
    enemyxpos = 300;
    while (num < howmany) {
      bullets = [];
      handleEnemys();
      num += 1;
    }
    if (enemyspeed < 0.2) {
      enemyspeed += 0.015;
    }
  }
  if (pausemenu == false) {
    if (randomtime2 >= randomtime) {
      enemybullets.push(new bullet2);
      if (Sound) {
        lazerSound2 = new Audio("lazerSound2.wav");
        lazerSound2.play();
      }
      randomtime = Math.floor(Math.random() * 70) + 120 - enemysArray.length * 4;
      randomtime2 = 0;

    }
    randomtime2 += enemybulletDelay;
  }
  bullets.forEach(value => {
    value.update();
    value.draw();
    bullets = bullets.filter((value) => value.y + 45 > 0);
  });
  enemybullets.forEach(value => {
    value.update();
    value.draw();
    enemybullets = enemybullets.filter((value) => value.y < canvas.height);
    if (value.y + 40 <= y + 70) {
      if (value.y - 40 >= y - 70) {
        if (value.x - 10 >= x - 10) {
          if (value.x <= x + 90) {
            enemybullets.splice(enemybullets.indexOf(value), 1);
            explode = new Audio("explode.wav");
            explode.play()
            lives -= 1;
          }
        }
      }
    }
  });
  enemysArray.forEach(value => {
    value.update();
    value.draw();
    bullets.forEach(bulletobject => {
      if (bulletobject.y - 40 <= value.y + 80) {
        if (bulletobject.y + 40 >= value.y - 80) {
          if (bulletobject.x - 10 >= value.x - 10) {
            if (bulletobject.x <= value.x + 60) {
              if (value.number == answer) {
                scorevalue += 1;
                correctanswer = true;
                if (Sound) {
                  explode = new Audio("explode.wav");
                  explode.play();
                }
                enemysArray.splice(enemysArray.indexOf(value), 1);
                bullets.splice(bulletobject, 1);
                enemysArray.forEach(value => {
                  value.number = Math.floor(Math.random() * 99) + 1;
                })
                randomnumber = Math.floor(Math.random() * 9) + 1;
                randomnumber2 = Math.floor(Math.random() * 9) + 1;
                answer = randomnumber * randomnumber2;
                randomnumber3 = Math.floor(Math.random() * enemysArray.length);
                witchenemy = 0;
              } else {
                lives2 -= 1;
                if (Sound) {
                  smallexplode = new Audio("smallexplode.wav");
                  smallexplode.play();
                }
                bullets.splice(bulletobject, 1);
              }
            }
          }
        }
      }
    });

    if (value.y > canvas.height - value.height) {
      lives--;
    }
    witchenemy++;
    if (witchenemy > enemysArray.length) {
      witchenemy = 0;
    }
  });
  if (pausemenu == false) {
    if (bulletDelay >= 80) {
      if (shoot) {
        bullets.push(new bullet);
        if (Sound) {
          lazerSound2 = new Audio("lazerSound2.wav");
          lazerSound.play();
        }
        bulletDelay = 0;
      }
    }
  }

  c.drawImage(scoreBox, 1, 1, 360, 130);
  c.fillStyle = "lightgreen";
  c.font = "bold 36px sans-serif";
  score = c.fillText(scorevalue, 85, 75);
  c.fillStyle = "gray";
  c.font = "bold 90px sans-serif";
  c.fillText(randomnumber + "  X  " + randomnumber2, canvas.width / 2.5, 100);
  bulletDelay++;
  if (pausemenu) {
    c.drawImage(pausemenuImage, canvas.width / 4, canvas.height / 3.6, 700, 300);
    c.drawImage(RestartButton, pausemenuButtonRestartPosX, pausemenuButtonRestartPosY, 300, 100);
    c.drawImage(MenuButton, pausemenuButtonMenuPosX, pausemenuButtonMenuPosY, 300, 100);
    c.drawImage(ContinueButton, pausemenuButtonContinuePosX, pausemenuButtonContinuePosY, 300, 100);
    addEventListener("click", function move(e) {
      var mouseX = e.clientX;
      var mouseY = e.clientY;
      if (mouseX > pausemenuButtonRestartPosX) {
        if (mouseX < pausemenuButtonRestartPosX + 300) {
          if (mouseY > pausemenuButtonRestartPosY) {
            if (mouseY < pausemenuButtonRestartPosY + 100) {
              bullets = [];
              enemybullets = [];
              y = 650;
              x = 700;
              speed = 5;
              volocityX = 0;
              volocityY = 0;
              num = 0;
              enemyxpos = 100;
              canvas.width = window.innerWidth - 6;
              canvas.height = window.innerHeight - 6.1;
              enemysArray = [];
              spawnenemys = 0;
              spawnBullet = 0;
              playercollisioncheck = 0;
              howmany = 10;
              howmanybullets = 0;
              shoot = false;
              bulletDelay = 0;
              scorevalue = 0;
              random = Math.floor(Math.random() * (enemysArray.length));
              randomtime = Math.floor(Math.random() * 70) + 70;
              randomtime2 = 0;
              randomnumber = Math.floor(Math.random() * 9) + 1;
              randomnumber2 = Math.floor(Math.random() * 9) + 1;
              answer = randomnumber * randomnumber2;
              left = false;
              right = false;
              stopmoving = false;
              stopmoving2 = false;
              lives = 3;
              lives2 = 3;
              correctanswer = true;
              randomnumber3 = Math.floor(Math.random() * 10);
              witchenemy = 0;
              enemybulletDelay = 0.3;
              lifePositionx;
              lifePositionx2;
              enemyspeed = 0.025;
              youlosestop = false;
              oneTime = true;
              pausemenu = false;
            }
          }
        }
      }
      if (mouseX > pausemenuButtonMenuPosX) {
        if (mouseX < pausemenuButtonMenuPosX + 300) {
          if (mouseY > pausemenuButtonMenuPosY) {
            if (mouseY < pausemenuButtonMenuPosY + 100) {
              bullets = [];
              enemybullets = [];
              y = 650;
              x = 700;
              speed = 5;
              volocityX = 0;
              volocityY = 0;
              num = 0;
              enemyxpos = 100;
              canvas.width = window.innerWidth - 6;
              canvas.height = window.innerHeight - 6.1;
              enemysArray = [];
              spawnenemys = 0;
              spawnBullet = 0;
              playercollisioncheck = 0;
              howmany = 10;
              howmanybullets = 0;
              shoot = false;
              bulletDelay = 0;
              scorevalue = 0;
              random = Math.floor(Math.random() * (enemysArray.length));
              randomtime = Math.floor(Math.random() * 70) + 70;
              randomtime2 = 0;
              randomnumber = Math.floor(Math.random() * 9) + 1;
              randomnumber2 = Math.floor(Math.random() * 9) + 1;
              answer = randomnumber * randomnumber2;
              left = false;
              right = false;
              stopmoving = false;
              stopmoving2 = false;
              lives = 3;
              lives2 = 3;
              correctanswer = true;
              randomnumber3 = Math.floor(Math.random() * 10);
              witchenemy = 0;
              enemybulletDelay = 0.3;
              lifePositionx;
              lifePositionx2;
              enemyspeed = 0.025;
              youlosestop = false;
              oneTime = true;
              menu = true;
              pausemenu = false;
            }
          }
        }
      }
      if (mouseX > pausemenuButtonContinuePosX) {
        if (mouseX < pausemenuButtonContinuePosX + 300) {
          if (mouseY > pausemenuButtonContinuePosY) {
            if (mouseY < pausemenuButtonContinuePosY + 100) {
              pausemenu = false;
            }
          }
        }
      }
    });
  }
}
class enemys {
  constructor() {
    this.x = enemyxpos;
    this.y = 100;
    this.width = 70;
    this.height = 50;
    this.number = Math.floor(Math.random() * 99) + 1;
    enemyxpos += 100;
  }
  update() {
    if (pausemenu == false) {
      this.y += enemyspeed;
    }
    if (correctanswer) {
      if (witchenemy == randomnumber3) {
        this.number = answer;
        correctanswer = false;
      }
    }
  }
  draw() {
    c.drawImage(enemyobject, this.x, this.y, this.width, this.height);
    c.fillStyle = "white";
    c.font = "bold 30px sans-serif";
    c.fillText(this.number, this.x + 20, this.y + 40);
  }
}
class bullet {
  constructor() {
    this.x = x + 35;
    this.y = y;
    this.width = 10;
    this.height = 40;
    howmanybullets += 1
  }
  update() {
    if (pausemenu == false) {
      this.y -= playerbulletSpeed;
    }
  }
  draw() {
    c.drawImage(bulletobject, this.x, this.y, this.width, this.height);
  }
}
class bullet2 {
  constructor() {
    this.x = enemysArray[random].x + enemysArray[random].width / 2;
    this.y = enemysArray[random].y + enemysArray[random].height;
    this.width = 10;
    this.height = 40;
  }
  update() {
    if (pausemenu == false) {
      this.y += enemybulletSpeed;
    }
  }
  draw() {
    c.drawImage(enemybullet, this.x, this.y, this.width, this.height);
  }
}
function handleEnemys() {
  enemysArray.push(new enemys());
}
function collisioncheck() {
  while (playercollisioncheck < enemysArray.length) {
    if (y - 70 <= enemysArray[playercollisioncheck].y) {
      if (y + 40 >= enemysArray[playercollisioncheck].y) {
        if (x - 80 <= enemysArray[playercollisioncheck].x) {
          if (x + 50 >= enemysArray[playercollisioncheck].x) {
            lives -= 1;
          }
        }
      }
    }
    playercollisioncheck++;
  }
  playercollisioncheck = 0;
}

addEventListener("keydown", function move(e) {
  if (pausemenu == false) {
    if (e.code == "ArrowLeft") {
      stopmoving = false;
      left = true;
    }
    if (e.code == "ArrowRight") {
      stopmoving2 = false;
      right = true;
    }
    if (e.code == "Space") {
      shoot = true;
    }
  }

});
addEventListener("keyup", function move(e) {
  if (e.code == "ArrowLeft") {
    stopmoving = true;
    left = false;
  }
  if (e.code == "ArrowRight") {
    stopmoving2 = true;
    right = false;
  }
  if (e.code == "Space") {
    shoot = false;
  }
});
addEventListener("click", function move(e) {
  var mouseX = e.clientX;
  var mouseY = e.clientY;
  if (oneTime) {
    mathblasterMusic.play()
    Sound = true;
    SoundOnOrOff = false;
    soundButton = document.getElementById("SoundButton");
    oneTime = false;
  }
  if (menu == false && selectionScene == false) {
    if (mouseX > buttonPosX3) {
      if (mouseX < buttonPosX3 + 75) {
        if (mouseY > buttonPosY3) {
          if (mouseY < buttonPosY3 + 75) {
            pausemenu = true;
          }
        }
      }
    }
  }

});
window.requestAnimationFrame(update);


update();