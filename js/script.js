const nxt = document.querySelector('.nxt');
const prev = document.querySelector('.prev');
const slide = document.querySelector('.pic');
const guitars = ['guitar1.jpg', 'guitar2.jpg', 'guitar3.jpg', 'guitar4.jpg'];
const baseURL = 'images/';
let index = 1;

nxt.onclick = function(e) {
    e.preventDefault();
    
    slide.src = baseURL + guitars[index];
    index = index + 1;
    console.log(index);

    if(index >= cars.length) {
        index = 0;
      }
    };

    prev.onclick = function(b) {
        b.preventDefault();
    
        slide.src = guitars[index] - baseURL;
        index = index - 1;
        console.log(index);
    
        if(index < guitars.length) {
            index = 3;
    
        }
    };
        
        


    
  

