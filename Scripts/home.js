let content;
(function(content){

    function AboutButtonClick() {
        console.log("About Button Clicked!");
    }

    function AboutButtonOver(event) {
        event.currentTarget.style.opacity = 0.3;
    }

    function AboutButtonOut(event) {
        event.currentTarget.style.opacity = 1.0;
    }

    function HomeContent() {
        console.log("%c Home Content Accessed...", "font-weight:bold; font-size: 20px;");
      //  let AboutButton = document.getElementById("AboutButton");

      //  AboutButton.textContent = "About";
//-------

        // add the HTML Element to the page somewhere 
        // in this case I'm attaching a button to the first forml element
     //   document.forms[0].appendChild(cancelButton);
        console.log(location.pathname);
        document.title = "Home page";
        // use the history object to wipe out the url 
        history.pushState("", document.title, "/HomePage");


        // use the location object to output my pathname
        console.log(location.pathname);

        // show your hostname - domain name
        console.log(location.hostname);



//---
        // About Button event listener
        AboutButton.addEventListener("click", AboutButtonClick);
        AboutButton.addEventListener("mouseover", AboutButtonOver);
        AboutButton.addEventListener("mouseout", AboutButtonOut);
    }

    // attach HomeContent function to the "content" namespace
    content.HomeContent = HomeContent;

})(content || (content = {}));