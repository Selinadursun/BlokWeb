/*bron: Sanne opdracht: https://codepen.io/shooft/pen/Qwjaojy*/
/* snap het niet*/

/* MENU OPENEN */
var openButton = document.querySelector("header > button");
openButton.onclick = openMenu;

function openMenu() {
  var deNav = document.querySelector("header nav");
  deNav.classList.add("toonMenu");

  // root-menu tonen
  showMenu(0);
  // Bron: YouTube – Web Dev Simplified: Submenu switching
  // https://www.youtube.com/watch?v=R00QiudbD4Y
}
/* MENU SLUITEN */

var sluitButton = document.querySelector("header nav > button");
// Bron (querySelector): MDN
// https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector

sluitButton.onclick = sluitMenu;
// Bron (onclick event handler): MDN
// https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onclick

function sluitMenu() {
  var deNav = document.querySelector("header nav");
  // Bron (querySelector): MDN

  deNav.classList.remove("toonMenu");
  // Bron (classList.remove): MDN
  // https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
}

/*  sluit menu met Escape */
window.onkeydown = function (e) {
  // Bron (keydown event): MDN
  // https://developer.mozilla.org/en-US/docs/Web/API/Document/keydown_event

  if (e.key === "Escape") sluitMenu();
  // Bron: MDN (KeyboardEvent.key)
  // https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key
};

/* SUBMENU  */

const nav = document.querySelector("header nav");
// Bron (querySelector): MDN

const menus = nav.querySelectorAll("ul");
// Bron (querySelectorAll + NodeList): MDN
// https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll

function showMenu(index) {
  menus.forEach((ul, i) => {
    // Bron (forEach op NodeList): MDN
    // https://developer.mozilla.org/en-US/docs/Web/API/NodeList/forEach

    if (i === index) ul.classList.add("open");
    // Bron (classList.add): MDN
    else ul.classList.remove("open");
    // Bron (classList.remove): MDN
  });
}

/* 
  Bron 1: Inleiding Programmeren – Jaar 1.
  Gebaseerd op de DOM-technieken uit de lessen.

  Bron 2: Web Dev Simplified – Responsive Navigation Menu with Submenus.
  https://www.youtube.com/watch?v=R00QiudbD4Y
*/

/* snap dit wel */
/* ROOT */
menus[0].querySelectorAll("button")[0].onclick = () => showMenu(1);
menus[0].querySelectorAll("button")[1].onclick = () => showMenu(2);
menus[0].querySelectorAll("button")[2].onclick = () => showMenu(3);
menus[0].querySelectorAll("button")[3].onclick = () => showMenu(4);

/* PRODUCTEN */
menus[1].querySelector("button").onclick = () => showMenu(0);
menus[1].querySelectorAll("a")[0].onclick = () => showMenu(5);
menus[1].querySelectorAll("a")[1].onclick = () => showMenu(6);
menus[1].querySelectorAll("a")[2].onclick = () => showMenu(7);
menus[1].querySelectorAll("a")[3].onclick = () => showMenu(8);
menus[1].querySelectorAll("a")[4].onclick = () => showMenu(9);
menus[1].querySelectorAll("a")[5].onclick = () => showMenu(10);
menus[1].querySelectorAll("a")[6].onclick = () => showMenu(11);

/* BETALEN */
menus[5].querySelector("button").onclick = () => showMenu(1);

/* HYPOTHEKEN */
menus[6].querySelector("button").onclick = () => showMenu(1);

/* GELD LENEN */
menus[7].querySelector("button").onclick = () => showMenu(1);

/* beleggen*/
menus[8].querySelector("button").onclick = () => showMenu(1);

/* sparen*/
menus[9].querySelector("button").onclick = () => showMenu(1);

/* verzekeren*/
menus[10].querySelector("button").onclick = () => showMenu(1);

/* pensioen*/
menus[11].querySelector("button").onclick = () => showMenu(1);

/* SITUATIE */
menus[2].querySelector("button").onclick = () => showMenu(0);
menus[2].querySelectorAll("a")[0].onclick = () => showMenu(12);
menus[2].querySelectorAll("a")[1].onclick = () => showMenu(13);
menus[2].querySelectorAll("a")[2].onclick = () => showMenu(14);
menus[2].querySelectorAll("a")[3].onclick = () => showMenu(15);
menus[2].querySelectorAll("a")[4].onclick = () => showMenu(16);
menus[2].querySelectorAll("a")[5].onclick = () => showMenu(17);
menus[2].querySelectorAll("a")[6].onclick = () => showMenu(18);

/*familie en relaties*/
menus[12].querySelector("button").onclick = () => showMenu(2);

/* wonen*/
menus[13].querySelector("button").onclick = () => showMenu(2);

/* studeren en werken*/
menus[14].querySelector("button").onclick = () => showMenu(2);

/*preferrend Banking*/
menus[15].querySelector("button").onclick = () => showMenu(2);

/*Senioren*/
menus[16].querySelector("button").onclick = () => showMenu(2);

/* ondernemers en medici*/
menus[17].querySelector("button").onclick = () => showMenu(2);

/* speciaal voor*/
menus[18].querySelector("button").onclick = () => showMenu(2);

/* ABN APP*/
menus[3].querySelector("button").onclick = () => showMenu(0);
menus[3].querySelectorAll("a")[0].onclick = () => showMenu(19);
menus[3].querySelectorAll("a")[1].onclick = () => showMenu(20);
menus[3].querySelectorAll("a")[2].onclick = () => showMenu(21);
menus[3].querySelectorAll("a")[3].onclick = () => showMenu(22);
menus[3].querySelectorAll("a")[4].onclick = () => showMenu(23);

/* abn app */
menus[19].querySelector("button").onclick = () => showMenu(3);

/* Internet bakieren */
menus[20].querySelector("button").onclick = () => showMenu(3);

/* Hulp bakieren */

menus[21].querySelector("button").onclick = () => showMenu(3);

/* Meer apps */
menus[22].querySelector("button").onclick = () => showMenu(3);

/* Veilig bankieren */
menus[23].querySelector("button").onclick = () => showMenu(3);

/* SERVICE */
menus[4].querySelector("button").onclick = () => showMenu(0);

/* Start */
showMenu(0);
