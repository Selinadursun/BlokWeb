# Procesverslag
Markdown is een simpele manier om HTML te schrijven.  
Markdown cheat cheet: [Hulp bij het schrijven van Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

Nb. De standaardstructuur en de spartaanse opmaak van de README.md zijn helemaal prima. Het gaat om de inhoud van je procesverslag. Besteedt de tijd voor pracht en praal aan je website.

Nb. Door *open* toe te voegen aan een *details* element kun je deze standaard open zetten. Fijn om dat steeds voor de relevante stuk(ken) te doen.





## Jij

<details open>
  <summary>uitwerken voor kick-off werkgroep</summary>

  ### Auteur:
  Selina Dursun 

  #### Je startniveau:
  blauw en rood 

  #### Je focus:
  responsive 
 
</details>





## Je website

<details open>
  <summary>uitwerken voor kick-off werkgroep</summary>

  ### Je opdracht:
  https://www.abnamro.nl/nl/prive/index.html 

  #### Screenshot(s) van de eerste pagina (small screen): 
  ABN AMRO 
  <img src="readme-images/Startpagina-ABN-AMRO.jpeg" width="375px" alt="startpagina">

  #### Screenshot(s) van de tweede pagina (small screen):
  hier de naam van de pagina  
  <img src="readme-images/Cashback-pagina-ABN-AMRO.jpeg" width="375px" alt="Pagina cashback bij een nieuwe creditcard">
 
</details>



## Toegankelijkheidstest 1/2 (week 1)

<details>
  <summary>uitwerken na test in 2<sup>e</sup> werkgroep</summary>

  ### Bevindingen
  Lijst met je bevindingen die in de test naar voren kwamen:



Wat werkt goed
	•	Content en knoppen/links zijn meestal duidelijk omschreven.
	•	De website is met het toetsenbord te bedienen en interactieve elementen hebben een zichtbare focus.
	•	Op mobiel zijn knoppen voldoende groot, is er geen horizontaal scrollen en is er genoeg ruimte tussen interactieve elementen.
	•	Lijsten worden correct opgebouwd met <ul> en <li>.
	•	Veel afbeeldingen hebben een alt-tekst of een lege alt value wanneer ze decoratief zijn.


Globale Code
	•	HTML-validatie geeft foutmeldingen (o.a. verkeerde of ontbrekende rel-attributen bij <link>).

Headings 
	•	Sommige headings zijn niet logisch opgebouwd of niet duidelijk.
	•	De H1-heading is vaak te algemeen, zoals “Pensioen”. 

Dit beschrijft niet waar de pagina precies over gaat. Een H1 moet het hoofdonderwerp van de pagina helder benoemen. Denk aan bijvoorbeeld “welkom bij ABN AMRO bankieren”, zou een wat meer verhelderende h1 zijn binnen een startpagina. 

Links & Knoppen (screenreader test)

diverse linkteksten geven niet genoeg context wanneer ze door een screenreader worden voorgelezen zoals:

“begin met een plan”, “naar de actie”, “wijzig het”, “prive selected”, “bekijk actie”, “meld je aan webinar”

Zonder de visuele context is niet duidelijk welk plan, welke actie, wat er gewijzigd moet worden of wat ‘selected’ betekent.
Dit maakt de links voor screenreadergebruikers onduidelijk en niet beschrijvend en duidelijk genoeg.

Afbeeldingen
	•	Niet alle afbeeldingen die betekenis hebben krijgen een passende alt tekst. Sommige alt attributes zijn leeg terwijl ze dat niet zouden moeten zijn.

Media (video en audio)
	•	De onderdelen kregen een NO omdat er op de bezochte ABN AMRO pagina’s geen media aanwezig was. Dus n.t.v. en geen fout.

</details>



## Breakdownschets (week 1)

<details>
  <summary>uitwerken na afloop 3<sup>e</sup> werkgroep</summary>

  ### de hele pagina: 
  <img src="readme-images/gehele-pagina.jpg" width="375px" alt="breakdown van de hele pagina">

  ### dynamisch deel (bijv menu): 
  <img src="readme-images/zoekbalk.jpg" width="375px" alt="breakdown van een zoekbalk binnen de ABN AMRO pagina>

  ### wellicht nog een dynamisch deel (bijv filter): 
  <img src="readme-images/hamburger-menu.jpg" width="375px" alt="breakdown van hamburger menu van de ABN AMRO pagina">

</details>





## Voortgang 1 (week 2)

<details>
  <summary>uitwerken voor 1<sup>e</sup> voortgang</summary>

  ### Stand van zaken
  hier dit ging goed & dit was lastig (neem ook screenshots op van delen van je website en code)


  ### Agenda voor meeting
  samen met je groepje opstellen

  | student 1     | student 2          | student 3            | student 4        |
  | Selina        | Naz               | Challisa              | Jonah              |
  | gebruiken we  | HTML indeling      hebben we de     
  | grid/flexbox  | op een logische     article elementen      
  | goed.         | volgorde            op de juiste plek      
                  |ingedeeld?           gebruikt?              
          
  worden de child/parent
  goed gekoppeld binnen de
  codes (html/css)

  wat is handiger om 
  te gebruiken em of rem

  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  Tijdens de meeting hebben we de html structuur gecontroleerd en verbeterd zodat alle parent/child kloppen. We hebben afgesproken om Flexbox en Grid op consistente plekken te gebruiken en de CSS te verdelen over drie stylesheets. Daarnaast is besproken om labels bij inputs toe te voegen voor toegankelijkheid en rem/em op de juiste manier te gebruiken. 

</details>





## Voortgang 2 (week 3)

<details>
  <summary>uitwerken voor 2<sup>e</sup> voortgang</summary>

  ### Stand van zaken
  hier dit ging goed & dit was lastig (neem ook screenshots op van delen van je website en code)


  ### Agenda voor meeting
  samen met je groepje opstellen

  | Selina      | Naz       | Chalissa   | Jonah    |
  | ---            | ---                | ---          | ---              |
  |           | en dit             | en ik dit    | en dan ik dat    |
  |            | dit als er tijd is | nog een punt | dit wil ik zeker |
  | links met trans-
     itie in combinatie
     met een icon hoe doe ik dat   
     link vervangen
     naar button omdat ze het zelfde doen en ik wil dus een transitie  | ...                | ...          | ...              |


  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - De transitie met de pijl is gelukt door content "" te gebruiken 
  - door dat de buttons en links het zelfde doen namelijk naar een andere pagina leiden ben ik van plan om ze het zelfde te te stylen 

</details>





## Toegankelijkheidstest 2/2 (week 4)

<details>
  <summary>uitwerken na test in 9<sup>e</sup> werkgroep</summary>

  ### Bevindingen
  Lijst met je bevindingen die in de test naar voren kwamen (geef ook aan wat er verbeterd is):

Geen HTML-fouten meer. De code is volledig gevalideerd. 

Kleuren en contrasten zijn verbeterd. Dankzij CSS-variabelen is het kleurgebruik consistent en duidelijk leesbaar.

Dark mode is toegevoegd en werkt goed. Kleuren passen zich automatisch aan en blijven voldoende contrast houden.

Duidelijke focus states. Interactieve elementen (zoals de input bar) hebben een zichtbare focus waardoor toetsenbordnavigatie goed werkt.

Headings zijn verbeterd. De H1 heeft nu een duidelijkere betekenis en een aria-label met een visual hidden label voor screenreaders.

De site is goed responsive. Door gebruik van Grid en Flexbox past de layout zich netjes aan op mobiel en desktop.


</details>





## Voortgang 3 (week 4)

<details>
  <summary>uitwerken voor 3<sup>e</sup> voortgang</summary>

  ### Stand van zaken
  hier dit ging goed & dit was lastig (neem ook screenshots op van delen van je website en code)


  ### Agenda voor meeting
  samen met je groepje opstellen

  | Selina     | Naz         | Chalissa   | Jonah       |
  | ---       
Logo svg kleurt niet wit 
aside hover animatie 
button linken aan tweede pagina 
is first of type beter of first child ?
Hamburger "menu" als content gezet of in een p?
Hoe weet ik of ik te veel margin hebt gebruikt en genoeg grid/flex



  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - de svg is er opnieuw in de code gezet nu werkte het wel 
  - de rotate hover animatie is er een bron gegeven welke ik kan gebruiken 
  - first of type en nth of type kunnen in beide gevallen worden gebruikt 
  - 

</details>





## Eindgesprek (week 5)

<details>
  <summary>uitwerken voor eindgesprek</summary>

  ### Je uitkomst - karakteristiek screenshots:
  <img src="readme-images/readme-images:home-pagina.jpeg" width="375px" alt="uitomst home pagina">
<img src=" readme-images/cashback-pagina.jpeg" width="375px" alt="uitomst home pagina">

  ### Dit ging goed/Heb ik geleerd: 
 Ik merkte dat de vormgeving goed ging. Door te letten op kleuren, ruimte en uitlijning werd mijn website overzichtelijk. Tijdens het maken heb ik ook veel geleerd over Grid, Flexbox en het positioneren van elementen. Hierdoor werd mijn site automatisch beter responsive omdat onderdelen zich goed aanpassen aan verschillende schermgroottes. Daarnaast heb ik geleerd om beter te letten op toegankelijkheid. 

Bijvoorbeeld:
- dat inputvelden een duidelijke focus moeten hebben als je erop klikt
- dat links en knoppen een hover-effect moeten hebben
- dat feedback belangrijk is voor de gebruiker

Mijn aantekeningen en de oefeningen uit de lessen hielpen mij hierbij heel veel. Eigenlijk hebben we bijna alles al in de les behandeld, waardoor ik het goed kon toepassen tijdens het bouwen.


  <img src="readme-images/home-pagina-input.jpg" width="375px" alt="top">


  ### Dit was lastig/Is niet gelukt:
Het hamburgermenu was voor mij de grootste uitdaging. Ik heb online bronnen gebruikt om te leren hoe je een hamburger-icoon opbouwt en hoe je een animatie maakt met drie lagen.

De lesopdracht was één laags en dat lukte mij wel. Maar ik kreeg daar geen voldoening van dus wilde ik graag een drie laags animatie maken. Daardoor kostte het veel meer tijd om alles technisch goed te krijgen.

Wat mij uiteindelijk niet is gelukt, is dat het hamburger-icoon automatisch verandert naar een aside of dropdownmenu op grotere schermen. Ik wilde dat de navigatie bij large screens vanzelf zou overschakelen naar een uitgebreid menu maar dat kreeg ik niet goed werkend binnen de tijd.

  <img src="readme-images/readme-images:hamburger-menu-laag 1.jpeg" width="375px" alt="bummer">
    <img src="readme-images/readme-images:hamburger-menu-laag 2.jpeg" width="375px" alt="bummer">
      <img src="readme-images/readme-images:hamburger-menu-laag 3.jpeg" width="375px" alt="bummer">

      orginele ABN AMRO site hamburger menu die veranderd naar dropdown:
 <img src="readme-images/ABN-AMBRO-dropdown- menu- groot-scherm" width="375px" alt="bummer">
  

  Daarnaast kreeg ik vlak voor de deadline ook nog een nieuw probleem.. er ontstond ineens een horizontale scroll op mijn site. Die had eerder nooit gezeten. Op desktop en tijdens het schalen van mijn scherm kon ik dit oplossen met overflow-x: hidden, maar op mobiel bleef de horizontale scroll toch terugkomen. Ik heb geprobeerd te kijken of er elementen te breed waren of negatieve waarden de oorzaak waren, maar niets hielp. Hierdoor heb ik dit helaas niet meer kunnen oplossen voor de deadline :/.

</details>





## Bronnenlijst

<details open>
  <summary>continu bijhouden terwijl je werkt</summary>

  Nb. Wees specifiek ('css-tricks' als bron is bijv. niet specifiek genoeg). 
  Nb. ChatGpT en andere AI horen er ook bij.
  Nb. Vermeld de bronnen ook in je code.

1. https://www.a11yproject.com/posts/visually-hidden/
2. https://www.a11yproject.com/posts/skip-nav-links/
3. https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details
4. https://stackoverflow.com/questions/77386169 styling-svg-summary-details-element-marker
5. https://codepen.io/shooft/pen/Qwjaojy
6. https://developer.mozilla.org/en-US/docs/Web/CSS/transition
7. https://developer.mozilla.org/en-US/docs/Web/CSS/transform
8. https://www.w3schools.com/cssref/func_translatey.php
9. https://developer.mozilla.org/en-US/docs/Web/CSS/overflow-y
10. https://unicodeplus.com/
11. https://www.toptal.com/designers/htmlarrows/symbols/
12. https://codepen.io/shooft/pen/Qwjaojy
13. https://www.youtube.com/watch?v=R00QiudbD4Y
14. https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
15. https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onclick
16. https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
17. https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key
18. https://developer.mozilla.org/en-US/docs/Web/API/Document/keydown_event
19. https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll
20. https://developer.mozilla.org/en-US/docs/Web/API/NodeList/forEach
21. https://html.spec.whatwg.org/multipage/interaction.html#the-hidden-attribute
22. https://developer.mozilla.org/en-US/docs/Web/API/Element/removeAttribute
</details>