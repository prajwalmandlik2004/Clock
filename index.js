function myfunction() {
    let curDate = new Date();
    curDate.toLocaleDateString();
    document.getElementById("date").innerHTML = curDate;
  }
  
  function myFun() {
    var t = new Date().toLocaleTimeString();
    document.getElementById("time").innerHTML = t;
  }
  
  function myFunction() {
    var d = new Date().toLocaleDateString();
    document.getElementById("demo").innerHTML = d;
  }
  const stopNum = document.querySelector('#timer');
  const btn2 = document.querySelector('#btn2');
  const stopInterval = document.querySelector('#btn3');
  let timeRef;
  let num = 0;
  
  const showMyName = () => {
    stopNum.innerHTML = "";
    timeRef = setInterval(() => {
      stopNum.innerHTML = `${num}`;
      num++;
    }, 1100);
  };
  btn2.addEventListener('click', showMyName);
  stopInterval.addEventListener('click', () => {
    clearInterval(timeRef);
  });