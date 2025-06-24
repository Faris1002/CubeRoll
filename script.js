let cube = document.getElementById('cube');
let rollBtn = document.getElementById('rollBtn');
let historyList = document.getElementById('historyList');
let statList=document.getElementById("statList");


let faceMap = {
  1: { x: 0,   y: 0,   symbol: "⚀" },   // front
  2: { x: 0,   y: 180, symbol: "⚁" },   // back
  3: { x: -90, y: 0,   symbol: "⚂" },   // top
  4: { x: 90,  y: 0,   symbol: "⚃" },   // bottom
  5: { x: 0,   y: 90,  symbol: "⚄" },   // left
  6: { x: 0,   y: -90, symbol: "⚅" }    // right
};
let history = [];
let stats = {
  "⚀": 0,
  "⚁": 0,
  "⚂": 0,
  "⚃": 0,
  "⚄": 0,
  "⚅": 0
};

rollBtn.addEventListener('click', () => {
  let roll = Math.floor(Math.random() * 6) + 1;
  let { x, y, symbol } = faceMap[roll];
  cube.classList.add('animate-roll');

  setTimeout(() => {
    cube.style.transform = `rotateX(${x}deg) rotateY(${y}deg)`;
    cube.classList.remove('animate-roll');
  }, 500);
  history.push(symbol);
  stats[symbol]++;
  updateHistory();
  updateStats();
});

function updateHistory() {
  historyList.innerHTML = "";
  let index=0;
  history.forEach((face, index) => {
    setTimeout(() => {
      let li = document.createElement("li");
      li.innerHTML = `<span>Roll ${index + 1}:</span><span>${face}</span>`;
      historyList.appendChild(li);
      historyList.prepend(li);
    }, 600);
    
  });
}
function updateStats() {
  statList.innerHTML = "";
  for (let [symbol,count] of Object.entries(stats)) {

    let li = document.createElement("li");
    li.innerHTML = `<span>${symbol}</span>:${count}`;
    statList.appendChild(li);
  }
}

let clearbtn=document.getElementById("clear");
clearbtn.addEventListener("click",(e)=>{
  historyList.innerHTML = "";
  statList.innerHTML = "";
  history=[];
  for(let i in stats){
    stats[i]=0;

  }
  updateStats();
});


