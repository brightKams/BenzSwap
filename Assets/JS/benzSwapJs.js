let body = document.querySelector("body");
    console.log(body);

let toggleMode = document.querySelector(".toggle.all-borders");
    console.log(toggleMode);

    let header = document.querySelector("header");
    console.log(header);

    let nav = document.querySelector("nav");
    console.log(nav);

    let allNav = document.querySelector(".all-nav-bar.all-borders");


    let navLogo = document.querySelector(".logo.all-borders");

    let navLogoText = document.querySelector(".logo p");

    let ulNav = document.querySelector("ul");


    let navigationContent1 = document.querySelector("ul li a  .protocol")

        console.log(navigationContent1)



        let navigationContent2 = document.querySelector("ul a  .governance");

        let navigationContent3 = document.querySelector("ul a  .faq");

        let navigationContent4 = document.querySelector("ul a  .blog");

        let navigationContent5 = document.querySelector("ul a  .community");

        let navigationContent6 = document.querySelector("ul a  .docs");

        let navigationContent7 = document.querySelector("ul a  .launchApp");


    let roadMapImage = document.querySelector(".road-map-third-layer.all-borders");
    console.log(roadMapImage);

    roadMapImage.classList.toggle("roadMapImage-light");

    toggleMode.addEventListener("click", ()=> {
        

        body.classList.toggle("dark-mode");


        if(body.classList.contains("dark-mode"))    {
                
            
            toggleMode.style.float = "right";
             header.style.backgroundColor ="#000";
            nav.style.backgroundColor = "#000";
            allNav.style.backgroundColor = "#000";;
            navLogoText.style.left = "0px";
            ulNav.style.backgroundColor = "#000";

            navigationContent1.style.color = "#fff"
    
            navigationContent2.style.color = "#fff"
            
            navigationContent3.style.color = "#fff"

            navigationContent4.style.color = "#fff"

            navigationContent5.style.color = "#fff"

            navigationContent6.style.color = "#fff"

            navigationContent7.style.color = "#fff"



            roadMapImage.classList.toggle("roadMapImage-dark");
            // navLogoImage = "../images/benzswap-logo/BENSWAP-LOGO-14-removebg-preview.png";
                console.log(navLogoImage);


        }
        
        

        else if (!body.classList.contains("dark-mode"))  {
            toggleMode.style.float = "left";
            header.style.backgroundColor ="#fff";
            nav.style.backgroundColor = "#fff";
            allNav.style.backgroundColor = "#fff";
            // navLogo.style.backgroundColor = "#fff";
            // navLogoText.style.left = "-25px";
            ulNav.style.backgroundColor = "#fff";

            navigationContent1.style.color = "#000"
    
            navigationContent2.style.color = "#000"
            
            navigationContent3.style.color = "#000"

            navigationContent4.style.color = "#000"

            navigationContent5.style.color = "#000"

            navigationContent6.style.color = "#000"

            navigationContent7.style.color = "#000"


            roadMapImage.classList.toggle("roadMapImage-dark");
            // roadMapImage.style.backgroundImage = "url(../images/background-images/roadmap-light.png)"
        }
    
    })

   