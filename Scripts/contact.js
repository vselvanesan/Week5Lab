(function(content){

    function ContactContent() {
        console.log("%c Contact Content Accessed...", "font-weight:bold; font-size: 20px;");
        
        document.getElementsByClassName("card-title")[0].textContent = "Contact You!";

        // create a new HTML Element
        let cancelButton = document.createElement("button");
        // configure the HTML Element
        cancelButton.setAttribute("class", "btn btn-warning");
        cancelButton.classList.add("btn-lg");
        cancelButton.textContent = "Cancel";
        cancelButton.addEventListener("click", function(event){
            event.preventDefault();
            window.open("index.html","_parent");
        });

        // add the HTML Element to the page somewhere 
        // in this case I'm attaching a button to the first forml element
        document.forms[0].appendChild(cancelButton);
        console.log(location.pathname);
        document.title = "Contact Page";
        // use the history object to wipe out the url 
        history.pushState("", document.title, "/ContactPage");

        // use the location object to output my pathname
        console.log(location.pathname);

        // show your hostname - domain name
        console.log(location.hostname);

    }

    content.ContactContent = ContactContent;
   
})(content || (content = {}));


