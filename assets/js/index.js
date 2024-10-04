 let shopBox1 = document.querySelector('.shop-box-1');
 let shopBox2 = document.querySelector('.shop-box-2');
 let shopBox3 = document.querySelector('.shop-box-3');
 let shopBox4 = document.querySelector('.shop-box-4');
 let shopBox5 = document.querySelector('.shop-box-5');
 let shopBox6 = document.querySelector('.shop-box-6');
 let heroSec = document.querySelector('.hero');
 let shopSec = document.querySelector('.shops');
 let girlShops = document.querySelector('.girl-shops');
 let blogs = document.querySelector('.blogs');
 let shopsBtn = document.querySelector('.shops-btn');
 let footer = document.querySelector('footer');
 let body = document.querySelector('body');
 shopBox1.addEventListener('click', function () {
     heroSec.style.display='none';
     shopSec.style.display= 'none';
     girlShops.style.display= 'none';
     blogs.style.display = 'none';
     footer.style.display = 'none';
     let mainDiv = document.createElement('div');
     body.appendChild(mainDiv);
     mainDiv.style.height = '500px';
     mainDiv.style.width = '100%';
     mainDiv.style.marginTop = '100px';
     mainDiv.style.display = 'flex';
      blogs.style.display = 'block';
     footer.style.display = 'block'

 let divLaft = document.createElement('div');
  mainDiv.appendChild(divLaft);
  divLaft.style.height = '500px';
  divLaft.style.width = '50%';


  let divLaftImage = document.createElement('div');
  divLaft.appendChild(divLaftImage);
  divLaftImage.style.height = '400px';
  divLaftImage.style.width = '400px';
  divLaftImage.style.backgroundColor = 'whitesmoke';
  divLaftImage.style.marginTop = '50px';
  divLaftImage.style.marginLeft = '180px';
  divLaftImage.style.backgroundImage = 'url("assets/photos/No\ BG3.png")';
  divLaftImage.style.backgroundPosition = 'center';
  divLaftImage.style.backgroundRepeat = 'no-repeat';
  divLaftImage.style.backgroundSize = 'cover';
  divLaftImage.style.borderRadius = '20px';
 
  let divRight = document.createElement('div');
  mainDiv.appendChild(divRight);
  divRight.style.height = '500px';
  divRight.style.width = '50%';

  let divRightText = document.createElement('div');
  divRight.appendChild(divRightText);
  divRightText.style.height = '400px';
  divRightText.style.width = '525px';
  divRightText.style.marginTop = '15px';
  divRightText.style.borderRadius = '20px';
  let h1 = document.createElement('h1');
  divRightText.appendChild(h1);
  h1.innerText = 'Shoply Offer | Trending Shop Now';
  h1.style.paddingTop = '94px'
  h1.style.fontSize = '35px';
  h1.style.borderBottom = '2px solid gray';
  h1.style.fontWeight = '500';
  let h3 = document.createElement('h3');
  divRightText.appendChild(h3);
  h3.innerText = 'Special Offer :-';
 
  h3.style.fontSize = '25px';
  h3.style.fontWeight = '400';
  h3.style.paddingTop = '10px';
  let h2 = document.createElement('h2');
  divRightText.appendChild(h2);
  h2.innerText = '$20';
  let p = document.createElement('p');
  divRightText.appendChild(p);
  p.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, sunt beatae, maiores laborum eaque perferendis quidem exercitationem totam delectus at libero explicabo distinctio, dolorem alias at libero explicabo distinctio...';
  p.style.fontWeight = '400';
  p.style.paddingTop = '15px'
  let button = document.createElement('button');
  divRightText.appendChild(button);
  button.innerText = 'Back';
  button.style.height = '50px';
  button.style.width = '150px';
  button.style.border = 'none';
  button.style.backgroundColor = 'orange';
  button.style.borderRadius = '20px 80px 80px 20px';
  button.style.color = 'white';
  button.style.marginTop = '20px';
  button.style.fontSize = '15px';
  button.style.letterSpacing= '2px';
  button.style.cursor = 'pointer';
  let button2 = document.createElement('button');
  divRightText.appendChild(button2);
  button2.innerText = 'Add To Card';
  button2.style.height = '50px';
  button2.style.width = '150px';
  button2.style.border = 'none';
  button2.style.backgroundColor = 'orange';
  button2.style.borderRadius = '80px 20px 20px 80px';
  button2.style.color = 'white';
  button2.style.marginTop = '20px';
  button2.style.marginLeft = '50px'
  button2.style.fontSize = '15px';
  button2.style.letterSpacing= '2px';
  button2.style.cursor = 'pointer';

  button.addEventListener('click', function () {
    heroSec.style.display = 'flex';
    shopSec.style.display = 'block';
    girlShops.style.display = 'block'
    shopBox1.style.display = 'block';
    divLaft.style.display = 'none';
    divRight.style.display = 'none';
     blogs.style.display = 'block';
    footer.style.display = 'block'
  })
 });

 shopBox2.addEventListener('click', function () {
    heroSec.style.display='none';
    shopSec.style.display= 'none';
    girlShops.style.display= 'none';
    blogs.style.display = 'none';
    footer.style.display = 'none';
    let mainDiv = document.createElement('div');
    body.appendChild(mainDiv);
    mainDiv.style.height = '500px';
    mainDiv.style.width = '100%';
    mainDiv.style.marginTop = '100px';
    mainDiv.style.display = 'flex';

let divLaft = document.createElement('div');
 mainDiv.appendChild(divLaft);
 divLaft.style.height = '500px';
 divLaft.style.width = '50%';


 let divLaftImage = document.createElement('div');
 divLaft.appendChild(divLaftImage);
 divLaftImage.style.height = '400px';
 divLaftImage.style.width = '400px';
 divLaftImage.style.backgroundColor = 'whitesmoke';
 divLaftImage.style.marginTop = '50px';
 divLaftImage.style.marginLeft = '180px';
 divLaftImage.style.backgroundImage = 'url("assets/photos/fashion-product-2.jpg")';
 divLaftImage.style.backgroundPosition = 'center';
 divLaftImage.style.backgroundRepeat = 'no-repeat';
 divLaftImage.style.backgroundSize = 'cover';
 divLaftImage.style.borderRadius = '20px';

 let divRight = document.createElement('div');
 mainDiv.appendChild(divRight);
 divRight.style.height = '500px';
 divRight.style.width = '50%';

 let divRightText = document.createElement('div');
 divRight.appendChild(divRightText);
 divRightText.style.height = '400px';
 divRightText.style.width = '525px';
 divRightText.style.marginTop = '15px';
 divRightText.style.borderRadius = '20px';
 let h1 = document.createElement('h1');
 divRightText.appendChild(h1);
 h1.innerText = 'Shoply Offer | Trending Shop Now';
 h1.style.paddingTop = '94px'
 h1.style.fontSize = '35px';
 h1.style.borderBottom = '2px solid gray';
 h1.style.fontWeight = '500';
 let h3 = document.createElement('h3');
 divRightText.appendChild(h3);
 h3.innerText = 'Special Offer :-';

 h3.style.fontSize = '25px';
 h3.style.fontWeight = '400';
 h3.style.paddingTop = '10px';
 let h2 = document.createElement('h2');
 divRightText.appendChild(h2);
 h2.innerText = '$25';
 let p = document.createElement('p');
 divRightText.appendChild(p);
 p.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, sunt beatae, maiores laborum eaque perferendis quidem exercitationem totam delectus at libero explicabo distinctio, dolorem alias at libero explicabo distinctio...';
 p.style.fontWeight = '400';
 p.style.paddingTop = '15px'
 let button = document.createElement('button');
 divRightText.appendChild(button);
 button.innerText = 'Back';
 button.style.height = '50px';
 button.style.width = '150px';
 button.style.border = 'none';
 button.style.backgroundColor = 'orange';
 button.style.borderRadius = '20px 80px 80px 20px';
 button.style.color = 'white';
 button.style.marginTop = '20px';
 button.style.fontSize = '15px';
 button.style.letterSpacing= '2px';
 button.style.cursor = 'pointer';
 let button2 = document.createElement('button');
 divRightText.appendChild(button2);
 button2.innerText = 'Add To Card';
 button2.style.height = '50px';
 button2.style.width = '150px';
 button2.style.border = 'none';
 button2.style.backgroundColor = 'orange';
 button2.style.borderRadius = '80px 20px 20px 80px';
 button2.style.color = 'white';
 button2.style.marginTop = '20px';
 button2.style.marginLeft = '50px'
 button2.style.fontSize = '15px';
 button2.style.letterSpacing= '2px';
 button2.style.cursor = 'pointer';

 button.addEventListener('click', function () {
    heroSec.style.display = 'flex';
    shopSec.style.display = 'block';
    girlShops.style.display = 'block'
     shopBox1.style.display = 'block';
     divLaft.style.display = 'none';
     divRight.style.display = 'none';
      blogs.style.display = 'block';
     footer.style.display = 'block'
 })
});

shopBox3.addEventListener('click', function () {
    heroSec.style.display='none';
    shopSec.style.display= 'none';
    girlShops.style.display= 'none';
    blogs.style.display = 'none';
    footer.style.display = 'none';
    let mainDiv = document.createElement('div');
    body.appendChild(mainDiv);
    mainDiv.style.height = '500px';
    mainDiv.style.width = '100%';
    mainDiv.style.marginTop = '100px';
    mainDiv.style.display = 'flex';

let divLaft = document.createElement('div');
 mainDiv.appendChild(divLaft);
 divLaft.style.height = '500px';
 divLaft.style.width = '50%';


 let divLaftImage = document.createElement('div');
 divLaft.appendChild(divLaftImage);
 divLaftImage.style.height = '400px';
 divLaftImage.style.width = '400px';
 divLaftImage.style.backgroundColor = 'whitesmoke';
 divLaftImage.style.marginTop = '50px';
 divLaftImage.style.marginLeft = '180px';
 divLaftImage.style.backgroundImage = 'url("assets/photos/No\ BG2.png")';
 divLaftImage.style.backgroundPosition = 'center';
 divLaftImage.style.backgroundRepeat = 'no-repeat';
 divLaftImage.style.backgroundSize = 'cover';
 divLaftImage.style.borderRadius = '20px';

 let divRight = document.createElement('div');
 mainDiv.appendChild(divRight);
 divRight.style.height = '500px';
 divRight.style.width = '50%';

 let divRightText = document.createElement('div');
 divRight.appendChild(divRightText);
 divRightText.style.height = '400px';
 divRightText.style.width = '525px';
 divRightText.style.marginTop = '15px';
 divRightText.style.borderRadius = '20px';
 let h1 = document.createElement('h1');
 divRightText.appendChild(h1);
 h1.innerText = 'Shoply Offer | Trending Shop Now';
 h1.style.paddingTop = '94px'
 h1.style.fontSize = '35px';
 h1.style.borderBottom = '2px solid gray';
 h1.style.fontWeight = '500';
 let h3 = document.createElement('h3');
 divRightText.appendChild(h3);
 h3.innerText = 'Special Offer :-';

 h3.style.fontSize = '25px';
 h3.style.fontWeight = '400';
 h3.style.paddingTop = '10px';
 let h2 = document.createElement('h2');
 divRightText.appendChild(h2);
 h2.innerText = '$23';
 let p = document.createElement('p');
 divRightText.appendChild(p);
 p.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, sunt beatae, maiores laborum eaque perferendis quidem exercitationem totam delectus at libero explicabo distinctio, dolorem alias at libero explicabo distinctio...';
 p.style.fontWeight = '400';
 p.style.paddingTop = '15px'
 let button = document.createElement('button');
 divRightText.appendChild(button);
 button.innerText = 'Back';
 button.style.height = '50px';
 button.style.width = '150px';
 button.style.border = 'none';
 button.style.backgroundColor = 'orange';
 button.style.borderRadius = '20px 80px 80px 20px';
 button.style.color = 'white';
 button.style.marginTop = '20px';
 button.style.fontSize = '15px';
 button.style.letterSpacing= '2px';
 button.style.cursor = 'pointer';
 let button2 = document.createElement('button');
 divRightText.appendChild(button2);
 button2.innerText = 'Add To Card';
 button2.style.height = '50px';
 button2.style.width = '150px';
 button2.style.border = 'none';
 button2.style.backgroundColor = 'orange';
 button2.style.borderRadius = '80px 20px 20px 80px';
 button2.style.color = 'white';
 button2.style.marginTop = '20px';
 button2.style.marginLeft = '50px'
 button2.style.fontSize = '15px';
 button2.style.letterSpacing= '2px';
 button2.style.cursor = 'pointer';

 button.addEventListener('click', function () {
    heroSec.style.display = 'flex';
    shopSec.style.display = 'block';
    girlShops.style.display = 'block'
    shopBox1.style.display = 'block';
    divLaft.style.display = 'none';
    divRight.style.display = 'none';
     blogs.style.display = 'block';
    footer.style.display = 'block'
 })
});

shopBox4.addEventListener('click', function () {
    heroSec.style.display='none';
    shopSec.style.display= 'none';
    girlShops.style.display= 'none';
    blogs.style.display = 'none';
    footer.style.display = 'none';
    let mainDiv = document.createElement('div');
    body.appendChild(mainDiv);
    mainDiv.style.height = '500px';
    mainDiv.style.width = '100%';
    mainDiv.style.marginTop = '100px';
    mainDiv.style.display = 'flex';

let divLaft = document.createElement('div');
 mainDiv.appendChild(divLaft);
 divLaft.style.height = '500px';
 divLaft.style.width = '50%';


 let divLaftImage = document.createElement('div');
 divLaft.appendChild(divLaftImage);
 divLaftImage.style.height = '400px';
 divLaftImage.style.width = '400px';
 divLaftImage.style.backgroundColor = 'whitesmoke';
 divLaftImage.style.marginTop = '50px';
 divLaftImage.style.marginLeft = '180px';
 divLaftImage.style.backgroundImage = 'url("assets/photos/banner-01.jpg")';
 divLaftImage.style.backgroundPosition = 'center';
 divLaftImage.style.backgroundRepeat = 'no-repeat';
 divLaftImage.style.backgroundSize = 'cover';
 divLaftImage.style.borderRadius = '20px';

 let divRight = document.createElement('div');
 mainDiv.appendChild(divRight);
 divRight.style.height = '500px';
 divRight.style.width = '50%';

 let divRightText = document.createElement('div');
 divRight.appendChild(divRightText);
 divRightText.style.height = '400px';
 divRightText.style.width = '525px';
 divRightText.style.marginTop = '15px';
 divRightText.style.borderRadius = '20px';
 let h1 = document.createElement('h1');
 divRightText.appendChild(h1);
 h1.innerText = 'Shoply Offer | Trending Shop Now';
 h1.style.paddingTop = '94px'
 h1.style.fontSize = '35px';
 h1.style.borderBottom = '2px solid gray';
 h1.style.fontWeight = '500';
 let h3 = document.createElement('h3');
 divRightText.appendChild(h3);
 h3.innerText = 'Special Offer :-';

 h3.style.fontSize = '25px';
 h3.style.fontWeight = '400';
 h3.style.paddingTop = '10px';
 let h2 = document.createElement('h2');
 divRightText.appendChild(h2);
 h2.innerText = '$20';
 let p = document.createElement('p');
 divRightText.appendChild(p);
 p.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, sunt beatae, maiores laborum eaque perferendis quidem exercitationem totam delectus at libero explicabo distinctio, dolorem alias at libero explicabo distinctio...';
 p.style.fontWeight = '400';
 p.style.paddingTop = '15px'
 let button = document.createElement('button');
 divRightText.appendChild(button);
 button.innerText = 'Back';
 button.style.height = '50px';
 button.style.width = '150px';
 button.style.border = 'none';
 button.style.backgroundColor = 'orange';
 button.style.borderRadius = '20px 80px 80px 20px';
 button.style.color = 'white';
 button.style.marginTop = '20px';
 button.style.fontSize = '15px';
 button.style.letterSpacing= '2px';
 button.style.cursor = 'pointer';
 let button2 = document.createElement('button');
 divRightText.appendChild(button2);
 button2.innerText = 'Add To Card';
 button2.style.height = '50px';
 button2.style.width = '150px';
 button2.style.border = 'none';
 button2.style.backgroundColor = 'orange';
 button2.style.borderRadius = '80px 20px 20px 80px';
 button2.style.color = 'white';
 button2.style.marginTop = '20px';
 button2.style.marginLeft = '50px'
 button2.style.fontSize = '15px';
 button2.style.letterSpacing= '2px';
 button2.style.cursor = 'pointer';

 button.addEventListener('click', function () {
    heroSec.style.display = 'flex';
    shopSec.style.display = 'block';
    girlShops.style.display = 'block'
    shopBox1.style.display = 'block';
    divLaft.style.display = 'none';
    divRight.style.display = 'none';
     blogs.style.display = 'block';
     footer.style.display = 'block'
 })
});

shopBox5.addEventListener('click', function () {
    heroSec.style.display='none';
    shopSec.style.display= 'none';
    girlShops.style.display= 'none';
    blogs.style.display = 'none';
    footer.style.display = 'none';
    let mainDiv = document.createElement('div');
    body.appendChild(mainDiv);
    mainDiv.style.height = '500px';
    mainDiv.style.width = '100%';
    mainDiv.style.marginTop = '100px';
    mainDiv.style.display = 'flex';

let divLaft = document.createElement('div');
 mainDiv.appendChild(divLaft);
 divLaft.style.height = '500px';
 divLaft.style.width = '50%';


 let divLaftImage = document.createElement('div');
 divLaft.appendChild(divLaftImage);
 divLaftImage.style.height = '400px';
 divLaftImage.style.width = '400px';
 divLaftImage.style.backgroundColor = 'whitesmoke';
 divLaftImage.style.marginTop = '50px';
 divLaftImage.style.marginLeft = '180px';
 divLaftImage.style.backgroundImage = 'url("assets/photos/Banner-05.jpeg")';
 divLaftImage.style.backgroundPosition = 'center';
 divLaftImage.style.backgroundRepeat = 'no-repeat';
 divLaftImage.style.backgroundSize = 'cover';
 divLaftImage.style.borderRadius = '20px';

 let divRight = document.createElement('div');
 mainDiv.appendChild(divRight);
 divRight.style.height = '500px';
 divRight.style.width = '50%';

 let divRightText = document.createElement('div');
 divRight.appendChild(divRightText);
 divRightText.style.height = '400px';
 divRightText.style.width = '525px';
 divRightText.style.marginTop = '15px';
 divRightText.style.borderRadius = '20px';
 let h1 = document.createElement('h1');
 divRightText.appendChild(h1);
 h1.innerText = 'Shoply Offer | Trending Shop Now';
 h1.style.paddingTop = '94px'
 h1.style.fontSize = '35px';
 h1.style.borderBottom = '2px solid gray';
 h1.style.fontWeight = '500';
 let h3 = document.createElement('h3');
 divRightText.appendChild(h3);
 h3.innerText = 'Special Offer :-';

 h3.style.fontSize = '25px';
 h3.style.fontWeight = '400';
 h3.style.paddingTop = '10px';
 let h2 = document.createElement('h2');
 divRightText.appendChild(h2);
 h2.innerText = '$20';
 let p = document.createElement('p');
 divRightText.appendChild(p);
 p.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, sunt beatae, maiores laborum eaque perferendis quidem exercitationem totam delectus at libero explicabo distinctio, dolorem alias at libero explicabo distinctio...';
 p.style.fontWeight = '400';
 p.style.paddingTop = '15px'
 let button = document.createElement('button');
 divRightText.appendChild(button);
 button.innerText = 'Back';
 button.style.height = '50px';
 button.style.width = '150px';
 button.style.border = 'none';
 button.style.backgroundColor = 'orange';
 button.style.borderRadius = '20px 80px 80px 20px';
 button.style.color = 'white';
 button.style.marginTop = '20px';
 button.style.fontSize = '15px';
 button.style.letterSpacing= '2px';
 button.style.cursor = 'pointer';
 let button2 = document.createElement('button');
 divRightText.appendChild(button2);
 button2.innerText = 'Add To Card';
 button2.style.height = '50px';
 button2.style.width = '150px';
 button2.style.border = 'none';
 button2.style.backgroundColor = 'orange';
 button2.style.borderRadius = '80px 20px 20px 80px';
 button2.style.color = 'white';
 button2.style.marginTop = '20px';
 button2.style.marginLeft = '50px'
 button2.style.fontSize = '15px';
 button2.style.letterSpacing= '2px';
 button2.style.cursor = 'pointer';

 button.addEventListener('click', function () {
    heroSec.style.display = 'flex';
    shopSec.style.display = 'block';
    girlShops.style.display = 'block'
    shopBox1.style.display = 'block';
    divLaft.style.display = 'none';
    divRight.style.display = 'none';
     blogs.style.display = 'block';
     footer.style.display = 'block'
   
 })
});

shopBox6.addEventListener('click', function () {
    heroSec.style.display='none';
    shopSec.style.display= 'none';
    girlShops.style.display= 'none';
    blogs.style.display = 'none';
    footer.style.display = 'none';
    let mainDiv = document.createElement('div');
    body.appendChild(mainDiv);
    mainDiv.style.height = '500px';
    mainDiv.style.width = '100%';
    mainDiv.style.marginTop = '100px';
    mainDiv.style.display = 'flex';

let divLaft = document.createElement('div');
 mainDiv.appendChild(divLaft);
 divLaft.style.height = '500px';
 divLaft.style.width = '50%';


 let divLaftImage = document.createElement('div');
 divLaft.appendChild(divLaftImage);
 divLaftImage.style.height = '400px';
 divLaftImage.style.width = '400px';
 divLaftImage.style.backgroundColor = 'whitesmoke';
 divLaftImage.style.marginTop = '50px';
 divLaftImage.style.marginLeft = '180px';
 divLaftImage.style.backgroundImage = 'url("assets/photos/images-1.jpg")';
 divLaftImage.style.backgroundPosition = 'center';
 divLaftImage.style.backgroundRepeat = 'no-repeat';
 divLaftImage.style.backgroundSize = 'cover';
 divLaftImage.style.borderRadius = '20px';

 let divRight = document.createElement('div');
 mainDiv.appendChild(divRight);
 divRight.style.height = '500px';
 divRight.style.width = '50%';

 let divRightText = document.createElement('div');
 divRight.appendChild(divRightText);
 divRightText.style.height = '400px';
 divRightText.style.width = '525px';
 divRightText.style.marginTop = '15px';
 divRightText.style.borderRadius = '20px';
 let h1 = document.createElement('h1');
 divRightText.appendChild(h1);
 h1.innerText = 'Shoply Offer | Trending Shop Now';
 h1.style.paddingTop = '94px'
 h1.style.fontSize = '35px';
 h1.style.borderBottom = '2px solid gray';
 h1.style.fontWeight = '500';
 let h3 = document.createElement('h3');
 divRightText.appendChild(h3);
 h3.innerText = 'Special Offer :-';

 h3.style.fontSize = '25px';
 h3.style.fontWeight = '400';
 h3.style.paddingTop = '10px';
 let h2 = document.createElement('h2');
 divRightText.appendChild(h2);
 h2.innerText = '$20';
 let p = document.createElement('p');
 divRightText.appendChild(p);
 p.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, sunt beatae, maiores laborum eaque perferendis quidem exercitationem totam delectus at libero explicabo distinctio, dolorem alias at libero explicabo distinctio...';
 p.style.fontWeight = '400';
 p.style.paddingTop = '15px'
 let button = document.createElement('button');
 divRightText.appendChild(button);
 button.innerText = 'Back';
 button.style.height = '50px';
 button.style.width = '150px';
 button.style.border = 'none';
 button.style.backgroundColor = 'orange';
 button.style.borderRadius = '20px 80px 80px 20px';
 button.style.color = 'white';
 button.style.marginTop = '20px';
 button.style.fontSize = '15px';
 button.style.letterSpacing= '2px';
 button.style.cursor = 'pointer';
 let button2 = document.createElement('button');
 divRightText.appendChild(button2);
 button2.innerText = 'Add To Card';
 button2.style.height = '50px';
 button2.style.width = '150px';
 button2.style.border = 'none';
 button2.style.backgroundColor = 'orange';
 button2.style.borderRadius = '80px 20px 20px 80px';
 button2.style.color = 'white';
 button2.style.marginTop = '20px';
 button2.style.marginLeft = '50px'
 button2.style.fontSize = '15px';
 button2.style.letterSpacing= '2px';
 button2.style.cursor = 'pointer';

 button.addEventListener('click', function () {
 button.style.display = 'flex';
 heroSec.style.display = 'flex';
 shopSec.style.display = 'block';
 girlShops.style.display = 'block'
 shopBox1.style.display = 'block';
 divLaft.style.display = 'none';
 divRight.style.display = 'none';
 blogs.style.display = 'block';
 footer.style.display = 'block'
 });
});

document.querySelectorAll('a[href^="#"]').forEach(ancher=>{
    ancher.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelectorAll('a[href^="#"]').forEach(nav=>{
            nav.style.color = '';
            nav.style.borderBottom = '';
        })
        this.style.color = 'orange';
        this.style.borderBottom = '3px solid orange'
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behaviour: "smooth"
        })
    })
});

