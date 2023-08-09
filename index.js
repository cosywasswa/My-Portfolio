const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-mobile');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

document.querySelectorAll('.link').forEach((n) => n
  .addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  }));

const container = document.querySelector('.container-all');
const allDetails = document.createElement('div');
container.appendChild(allDetails);
allDetails.innerHTML = `
<section class="grid-container" id="grid-container">
        <div class="recent-works">
          <h3>My Recent works</h3>
          <img class="line" src="images/images-self/line (2).png" />
        </div>
        <div class="works-container">
          <div class="box"></div>
          <div class="works1">
            <div class="works-head">
              <h3>Crypto-360</h3>
              <p class="paragraph">
              Crypto360 is a web application to display Crypto currencies from the coin cap API.
              </p>
            </div>
            <div class="languages">
              <ul class="langul">
                <li><a href="index.html">React</a></li>
                <li><a href="index.html">Redux</a></li>
                <li><a href="index.html">API</a></li>
                <li><a href="index.html">CSS</a></li>
              </ul>
            </div>
            <div class="visit">
            <button type="button" class="btn-1" id="btn-1" onclick="popupopen()">See Project</button>
            </div>
           
          </div>
        </div>
        </section>
       
      <div class="all-projects">
        <section class="project">
          <div class="text1">
            <h2>Save the plannet event website</h2>
          </div>
          <div class="text2 none">
            <p>
            SAVE the plannet is an event website that can be customized for any event by submitting events data
            </p>
          </div>
          <div class="projlang none">
            <ul>
              <li><a href="index.html">HTML</a></li>
              <li><a href="index.html">CSS</a></li>
              <li><a href="index.html">JavaScript</a></li>
            </ul>
          </div>
          <div class="seeproject">
          <button type="button" class="btn-1" btn-open1" id="btn-2" onclick="popupopen1()">See Project</button>
          </div>
        </section>
        <section class="project1">
          <div class="text1">
            <h2>API Movies Dashboard</h2>
          </div>
          <div class="text2">
            <p>
            A web Application dashbord to display movies, comments and likes
            </p>
          </div>
          <div class="projlang">
            <ul>
              <li><a href="index.html">HTML</a></li>
              <li><a href="index.html">API</a></li>
              <li><a href="index.html">JavaScript</a></li>
            </ul>
          </div>
          <div class="seeproject">
          <button type="button" class="btn-1" btn-open2" id="btn-3" onclick="popupopen2()">See Project</button>
          </div>
        </section>
        <section class="project2">
          <div class="text1">
            <h2>Bookstore React App</h2>
          </div>
          <div class="text2">
            <p>
            Aweb Application that displays A list of Books from an API 
            </p>
          </div>
          <div class="projlang">
            <ul>
              <li><a href="index.html">React</a></li>
              <li><a href="index.html">Sass</a></li>
              <li><a href="index.html">Redux</a></li>
            </ul>
          </div>
          <div class="seeproject">
          <button type="button" class="btn-1" btn-open3" id="btn-4" onclick="popupopen3()">See Project</button>
          </div>
        </section>
        <section class="project3">
          <div class="text1">
            <h2>Space travellers React Redux App</h2>
          </div>
          <div class="text2">
            <p>
            A SPA web Application for Booking Rockets and Space missions using API data
            </p>
          </div>
          <div class="projlang">
            <ul>
              <li><a href="index.html">React</a></li>
              <li><a href="index.html">Redux</a></li>
              <li><a href="index.html">API</a></li>
            </ul>
          </div>
          <div class="seeproject">
          <button type="button" class="btn-1" btn-open4" id="btn-5" onclick="popupopen4()">See Project</button>
          </div>
        </section>
        <section class="project4">
          <div class="text1">
            <h2>Math Magician React App</h2>
          </div>
          <div class="text2">
            <p>
            Math-Magician Application is a SPA with a calculator for basic calculations, User gets quotes from an API
            </p>
          </div>
          <div class="projlang">
            <ul>
              <li><a href="index.html">React</a></li>
              <li><a href="index.html">CSS</a></li>
              <li><a href="index.html">API</a></li>
            </ul>
          </div>
          <div class="seeproject">
          <button type="button" class="btn-1" btn-open5" id="btn-6" onclick="popupopen5()">See Project</button>
          </div>
        </section>
        <section class="project5">
          <div class="text1">
            <h2>To-Do-List Web Application</h2>
          </div>
          <div class="text2">
            <p>
            A to-do Application for tasks, completed tasks can be checked and deleted as completed
            </p>
          </div>
          <div class="projlang">
            <ul>
              <li><a href="index.html">HTML</a></li>
              <li><a href="index.html">JavaScript</a></li>
              <li><a href="index.html">CSS</a></li>
            </ul>
          </div>
          <div class="seeproject">
          <button type="button" class="btn-1" btn-open6" id="btn-7" onclick="popupopen6()">See Project</button>
          </div>
        </section>
      </div>
    
`;

const popup = `
  
  <section class="project-details1" id="modal1" >
              <h2>CRYPTO-360</h2>
              <h3 class="h3tittle">Crypto-360</h3>
              <button onclick="popupclose()" class="closebutton" id="btn-close">&times;</button>
              <div class="programs">
                <ul class="programing">
                  <li>React</li>
                  <li>Redux</li>
                  <li>API</li>
                </ul>
                </div>
                <div class="all-div">
                <div class="img">
                <img class="details-img1" src="images/new-snaps/crypto-des.PNG" alt=" " />
                </div>
                <div class="leftcontent">
              <p class="project-text">

              Crypto360 is a web application to display Crypto currencies from the coin cap API.

                   <p class="p-elements"> A user can search for a crypto by name/symbol and the search results will be displayed on top of the list.
                   When a user clicks on a particular crypto, a details page opens containing details of the selected Crypto currency...</p>
              </p>
            <ul class="clicks">
              <li><a href="https://crypto360.onrender.com">See live</a> <img class="live" src="images/pop-up/Icon - live.svg" alt=" " /></li>
              <li><a href="https://github.com/cosywasswa/Crypto360">See source</a><img class="source" src="images/pop-up/Group source.svg" alt=" " /></li>
            </ul>
            </div>
            </div>
          </div>
        </section>
        `;

const sectionWorks = document.querySelector('.container-all');

const popwindow = document.createElement('div');
popwindow.innerHTML = popup;

popwindow.classList.add('close1');

function popupopen() {
  sectionWorks.prepend(popwindow);
  popwindow.classList.remove('close1');
  popwindow.classList.add('popup-container');
  const body = document.querySelector('body');
  body.style.overflow = 'hidden';
  document.body.classList.add('active-popup');
}
function popupclose() {
  popwindow.classList.remove('.popup-container');
  popwindow.classList.add('close1');
  sectionWorks.removeChild(popwindow);
  const body = document.querySelector('body');
  body.style.overflow = 'auto';
  document.body.classList.remove('active-popup');
}

const popup1 = `
<section class="project-details1" id="modal2" >
              <h2>Save the planet international conference</h2>
              <h3 class="h3tittle">Save the planet international conference</h3>
               <button onclick="popupclose1()" class="closebutton" id="btn-close">&times;</button>
              <div class="programs">
                <ul class="programing">
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                </ul>
                </div>
                <div class="all-div">
                <div class="img">
                <img class="details-img1" src="images/new-snaps/plannet-des.PNG" alt=" " />
                </div>
                <div class="leftcontent">
              <p class="project-text">

              Save the plannet conference-website is a project for 
              a global conference on climate change and Carbon-Zero.

                   <p class="p-elements"> It contains two pages i.e the home page and about me page.
                   it is a responsive site for both mobile and desktop users.</p>
              </p>
            <ul class="clicks">
              <li><a href="https://cosywasswa.github.io/Capstone-Project1/">See live</a> <img class="live" src="images/pop-up/Icon - live.svg" alt=" " /></li>
              <li><a href="https://github.com/cosywasswa/Capstone-Project1">See source</a><img class="source" src="images/pop-up/Group source.svg" alt=" " /></li>
            </ul>
            </div>
            </div>
          </div>
        </section>
      `;

const popwindow1 = document.createElement('div');
popwindow1.innerHTML = popup1;

popwindow1.classList.add('close1');

function popupopen1() {
  sectionWorks.prepend(popwindow1);
  popwindow1.classList.remove('close1');
  popwindow1.classList.add('popup-container');
  const body = document.querySelector('body');
  body.style.overflow = 'hidden';
  document.body.classList.add('active-popup');
}
function popupclose1() {
  popwindow1.classList.remove('.popup-container');
  popwindow1.classList.add('close1');
  sectionWorks.removeChild(popwindow1);
  const body = document.querySelector('body');
  body.style.overflow = 'auto';
  document.body.classList.remove('active-popup');
}

const popup2 = `
<section class="project-details1">
              <h2>VIDVIB Movies</h2>
              <h3 class="h3tittle">VIDVIB Movies Dashboard</h3>
               <button onclick="popupclose2()" class="closebutton" id="btn-close">&times;</button>
              <div class="programs">
                <ul class="programing">
                  <li>HTML</li>
                  <li>API</li>
                  <li>JavaScript</li>
                </ul>
                </div>
                <div class="all-div">
                <div class="img">
                <img class="details-img1" src="images/new-snaps/desktop-vidvib.png" alt=" " />
                </div>
                <div class="leftcontent">
              <p class="project-text">

              VidVib is a web application that displays a list of movies from an API. 
              Users can like and add comments to a movie of their preference
              </p>
              <p class="p-elements"> 
                   It is a responsive web site for both mobile and desktop users.</p>
            <ul class="clicks">
              <li><a href="https://vidvib-3aeiihv7h-ticoniq.vercel.app/">See live</a> <img class="live" src="images/pop-up/Icon - live.svg" alt=" " /></li>
              <li><a href="https://github.com/cosywasswa/vidvib">See source</a><img class="source" src="images/pop-up/Group source.svg" alt=" " /></li>
            </ul>
            </div>
            </div>
          </div>
        </section>
`;

const popwindow2 = document.createElement('div');
popwindow2.innerHTML = popup2;

popwindow2.classList.add('close1');

function popupopen2() {
  sectionWorks.prepend(popwindow2);
  popwindow2.classList.remove('close1');
  popwindow2.classList.add('popup-container');
  const body = document.querySelector('body');
  body.style.overflow = 'hidden';
  document.body.classList.add('active-popup');
}
function popupclose2() {
  popwindow2.classList.remove('.popup-container');
  popwindow2.classList.add('close1');
  sectionWorks.removeChild(popwindow2);
  const body = document.querySelector('body');
  body.style.overflow = 'auto';
  document.body.classList.remove('active-popup');
}

const popup3 = `
<section class="project-details1">
              <h2>Bookstore Web App</h2>
              <h3 class="h3tittle">Bookstore Web App</h3>
               <button onclick="popupclose3()" class="closebutton" id="btn-close">&times;</button>
              <div class="programs">
                <ul class="programing">
                  <li>React</li>
                  <li>Redux</li>
                  <li>API</li>
                </ul>
                </div>
                <div class="all-div">
                <div class="img">
                <img class="details-img1" src="images/new-snaps/desktop-bookstore.png" alt=" " />
                </div>
                <div class="leftcontent">
              <p class="project-text">

              The Bookstore is a React and Redux website that allows users to add a book to the list, 
              displays list of books, 
              remove a book from the list.
              </p>
            <ul class="clicks">
              <li><a href="https://bookstore-app-7x8z.onrender.com/">See live</a> <img class="live" src="images/pop-up/Icon - live.svg" alt=" " /></li>
              <li><a href="https://github.com/cosywasswa/Bookstore-React">See source</a><img class="source" src="images/pop-up/Group source.svg" alt=" " /></li>
            </ul>
            </div>
            </div>
          </div>
        </section>
`;

const popwindow3 = document.createElement('div');
popwindow3.innerHTML = popup3;

popwindow3.classList.add('close1');

function popupopen3() {
  sectionWorks.prepend(popwindow3);
  popwindow3.classList.remove('close1');
  popwindow3.classList.add('popup-container');
  const body = document.querySelector('body');
  body.style.overflow = 'hidden';
  document.body.classList.add('active-popup');
}
function popupclose3() {
  popwindow3.classList.remove('.popup-container');
  popwindow3.classList.add('close1');
  sectionWorks.removeChild(popwindow3);
  const body = document.querySelector('body');
  body.style.overflow = 'auto';
  document.body.classList.remove('active-popup');
}

const popup4 = `
<section class="project-details1">
              <h2>Space travellers hub</h2>
              <h3 class="h3tittle">Space travellers hub</h3>
               <button onclick="popupclose4()" class="closebutton" id="btn-close">&times;</button>
              <div class="programs">
                <ul class="programing">
                  <li>React</li>
                  <li>Redux</li>
                  <li>API</li>
                </ul>
                </div>
                <div class="all-div">
                <div class="img">
                <img class="details-img1" src="images/new-snaps/desktop-traveller.png" alt=" " />
                </div>
                <div class="leftcontent">
              <p class="project-text">

              Space-travelers-hub is a web application for a company that provides commercial and 
              scientific space travel services. 
              The application will allow users to book rockets and join selected space missions. 
              Created by Cosmas and Munish.
              </p>
            <ul class="clicks">
              <li><a href="https://space-travelers-react.onrender.com/">See live</a> <img class="live" src="images/pop-up/Icon - live.svg" alt=" " /></li>
              <li><a href="https://github.com/cosywasswa/space-travelers-hub">See source</a><img class="source" src="images/pop-up/Group source.svg" alt=" " /></li>
            </ul>
            </div>
            </div>
          </div>
        </section>
`;

const popwindow4 = document.createElement('div');
popwindow4.innerHTML = popup4;

popwindow4.classList.add('close1');

function popupopen4() {
  sectionWorks.prepend(popwindow4);
  popwindow4.classList.remove('close1');
  popwindow4.classList.add('popup-container');
  const body = document.querySelector('body');
  body.style.overflow = 'hidden';
  document.body.classList.add('active-popup');
}
function popupclose4() {
  popwindow4.classList.remove('.popup-container');
  popwindow4.classList.add('close1');
  sectionWorks.removeChild(popwindow4);
  const body = document.querySelector('body');
  body.style.overflow = 'auto';
  document.body.classList.remove('active-popup');
}

const popup5 = `
<section class="project-details1">
              <h2>Math Magicians</h2>
              <h3 class="h3tittle">Math Magicians Application</h3>
               <button onclick="popupclose5()" class="closebutton" id="btn-close">&times;</button>
              <div class="programs">
                <ul class="programing">
                  <li>React</li>
                  <li>Sass</li>
                  <li>CSS</li>
                </ul>
                </div>
                <div class="all-div">
                <div class="img">
                <img class="details-img1" src="images/new-snaps/desktop-math.png" alt=" " />
                </div>
                <div class="leftcontent">
              <p class="project-text">

              "Math magicians" is a website for all fans of mathematics. 
              It is a Single Page App (SPA) that allows users to: Make simple calculations. 
              Read a random math-related quote.
              </p>
            <ul class="clicks">
              <li><a href="https://math-magician-react-tvvm.onrender.com/">See live</a> <img class="live" src="images/pop-up/Icon - live.svg" alt=" " /></li>
              <li><a href="https://github.com/cosywasswa/Math-magicians">See source</a><img class="source" src="images/pop-up/Group source.svg" alt=" " /></li>
            </ul>
            </div>
            </div>
          </div>
        </section>
`;
const popwindow5 = document.createElement('div');
popwindow5.innerHTML = popup5;

popwindow5.classList.add('close1');

function popupopen5() {
  sectionWorks.prepend(popwindow5);
  popwindow5.classList.remove('close1');
  popwindow5.classList.add('popup-container');
  const body = document.querySelector('body');
  body.style.overflow = 'hidden';
  document.body.classList.add('active-popup');
}
function popupclose5() {
  popwindow5.classList.remove('.popup-container');
  popwindow5.classList.add('close1');
  sectionWorks.removeChild(popwindow5);
  const body = document.querySelector('body');
  body.style.overflow = 'auto';
  document.body.classList.remove('active-popup');
}

const popup6 = `
<section class="project-details1">
              <h2>To-Do-List</h2>
              <h3 class="h3tittle">ToDo-List Application</h3>
               <button onclick="popupclose6()" class="closebutton" id="btn-close">&times;</button>
              <div class="programs">
                <ul class="programing">
                  <li>HTML</li>
                  <li>JavaScript</li>
                  <li>CSS</li>
                </ul>
                </div>
                <div class="all-div">
                <div class="img">
                <img class="details-img1" src="images/new-snaps/desktop-todo.png" alt=" " />
                </div>
                <div class="leftcontent">
              <p class="project-text">

              To-Do-List is an application for adding new To-Do-List tasks by use of array of objects.
              When a user inputs a task items using the input field, it is added to the existing list. 
              The user also can removes a task by use of a delete icon and can also updated the task description
              </p>
            <ul class="clicks">
              <li><a href="index.html">See live</a> <img class="live" src="images/pop-up/Icon - live.svg" alt=" " /></li>
              <li><a href="index.html">See source</a><img class="source" src="images/pop-up/Group source.svg" alt=" " /></li>
            </ul>
            </div>
            </div>
          </div>
        </section>
`;

const popwindow6 = document.createElement('div');
popwindow6.innerHTML = popup6;

popwindow6.classList.add('close1');

function popupopen6() {
  sectionWorks.prepend(popwindow6);
  popwindow6.classList.remove('close1');
  popwindow6.classList.add('popup-container');
  const body = document.querySelector('body');
  body.style.overflow = 'hidden';
  document.body.classList.add('active-popup');
}
function popupclose6() {
  popwindow6.classList.remove('.popup-container');
  popwindow6.classList.add('close1');
  sectionWorks.removeChild(popwindow6);
  const body = document.querySelector('body');
  body.style.overflow = 'auto';
  document.body.classList.remove('active-popup');
}

popupclose();
popupclose1();
popupclose2();
popupclose3();
popupclose4();
popupclose5();
popupclose6();
popupopen();
popupopen1();
popupopen2();
popupopen3();
popupopen4();
popupopen5();
popupopen6();
