setInterval(function() {
    var date = new Date(),
        positions = [
          date.getHours() / 12,
          date.getMinutes() / 60,
          date.getSeconds() / 60
        ],
        clock = document.getElementById('clock1');
  
    positions.forEach(function(rotation, index) {
      clock.children[index].style.transform = 'rotate(' + rotation + 'turn)';
    });
  
  }, 1000);

  setInterval(function() {
    var date = new Date(),
        positions = (date.getSeconds() / 60)
        ,
        img = document.querySelector('#geirIMG');
  
    positions(function(rotation, index) {
      img[index].style.transform = 'rotate(' + rotation + 'turn)';
    });

  
  
  }, 1000);

  setInterval(function() {
    var date = new Date(),
        positions = [
          date.getHours() / 12,
          date.getMinutes() / 60,
          date.getSeconds() / 60
        ],
        clock = document.getElementById('clock2');
  
    positions.forEach(function(rotation, index) {
      clock.children[index].style.transform = 'rotate(' + rotation + 'turn)';
    });
  
  }, 1000);

  setInterval(function() {
    var date = new Date(),
        positions = (date.getSeconds() / 60)
        ,
        img = document.querySelector('#geirIMG');
  
    positions(function(rotation, index) {
      img[index].style.transform = 'rotate(' + rotation + 'turn)';
    });

  
  
  }, 1000);
  
    let geir = true
    let geirIMG = document.querySelector(".geirIMG");
    let clockDiv1 = document.getElementById("clock1")
    let clockDiv2 = document.getElementById("clock2")
    document.querySelector('body').addEventListener('click', e => {
      if(geir === false){
        geirIMG.setAttribute("src", "./img/gairer.png")
        clockDiv1.classList.remove('hidden')
        clockDiv2.classList.add('hidden')
        geir = true
      } else if(geir === true){
        geirIMG.setAttribute("src", "./img/geir.jfif")
        clockDiv1.classList.add('hidden')
        clockDiv2.classList.remove('hidden')
        geir = false
      }
    })