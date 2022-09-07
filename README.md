
## Olá eu sou o John Willian aliore 

-🎓Hoje Formado em Front-End
-📚 Estudando Back-End
-😁 Pronomuns: Ele/Dele

<div align="center">
  <a href="https://github.com/johnwillianaliore">
  <img height="150em" src="https://github-readme-stats.vercel.app/api?username=johnwillianaliore&show_icons=true&theme=cobalt&include_all_commits=true&count_private=true"/>
  <img height="150em" src="https://github-readme-stats.vercel.app/api/top-langs/?username=johnwillianaliore&layout=compact&langs_count=7&theme=cobalt"/>
</div>

<div style="display: inline_block"><br>
  <img align="center" alt="John-Js" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg">
  <img align="center" alt="John-Ts" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-plain.svg">
  <img align="center" alt="John-React" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg">
  <img align="center" alt="John-HTML" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg">
  <img align="center" alt="John-CSS" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg">
  ##
  
  <div> 
  <a href="https://www.youtube.com/channel/UCOFHXlLes4DDlC_YyFXwOBA" target="_blank"><img src="https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white" target="_blank"></a>
  <a href="https://instagram.com/rafaballerini" target="_blank"><img src="https://img.shields.io/badge/-Instagram-%23E4405F?style=for-the-badge&logo=instagram&logoColor=white" target="_blank"></a>
 	<a href="https://www.twitch.tv/ustongames" target="_blank"><img src="https://img.shields.io/badge/Twitch-9146FF?style=for-the-badge&logo=twitch&logoColor=white" target="_blank"></a>
 <a href="https://discord.gg/John Willian Aliore (Uston)#7844" target="_blank"><img src="https://img.shields.io/badge/Discord-7289DA?style=for-the-badge&logo=discord&logoColor=white" target="_blank"></a> 
  <a href = "mailto:john.jwa123@gmail.com"><img src="https://img.shields.io/badge/-Gmail-%23333?style=for-the-badge&logo=gmail&logoColor=white" target="_blank"></a>
  <a href="https://www.linkedin.com/in/john-willian-aliore-9b842a188/" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a> 
 
  ![Snake animation](https://github.com/johnwillianaliore/johnwillianaliore/blob/output/github-contribution-grid-snake.svg)
 
</div>
 const dino = document.querySelector('.dino');
const background = document.querySelector('.background');

let isJumping = false;
let isGameOver = false;
let position = 0;

function handleKeyUp(event) {
  if (event.keyCode === 32) {
    if (!isJumping) {
      jump();
    }
  }
}

function jump() {
  isJumping = true;

  let upInterval = setInterval(() => {
    if (position >= 150) {
    
      clearInterval(upInterval);

      let downInterval = setInterval(() => {
        if (position <= 0) {
          clearInterval(downInterval);
          isJumping = false;
        } else {
          position -= 18;
          dino.style.bottom = position + 'px';
        }
      }, 18);
    } else {
      
      position += 18;
      dino.style.bottom = position + 'px';
    }
  }, 18);
}

function createCactus() {
  const cactus = document.createElement('div');
  let cactusPosition = 1000;
  let randomTime = Math.random() * 6000;

  if (isGameOver) return;

  cactus.classList.add('cactus');
  background.appendChild(cactus);
  cactus.style.left = cactusPosition + 'px';

  let leftTimer = setInterval(() => {
    if (cactusPosition < -60) {
      
      clearInterval(leftTimer);
      background.removeChild(cactus);
    } else if (cactusPosition > 0 && cactusPosition < 60 && position < 60) {
     
      clearInterval(leftTimer);
      isGameOver = true;
      document.body.innerHTML = '<h1 class="game-over">Fim de jogo</h1>';
    } else {
      cactusPosition -= 10;
      cactus.style.left = cactusPosition + 'px';
    }
  }, 20);

  setTimeout(createCactus, randomTime);
}

createCactus();
document.addEventListener('keyup', handleKeyUp);
