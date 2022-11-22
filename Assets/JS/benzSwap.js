// let body = document.querySelector("body")

// body.classList.toggle("dark-mode")
// console.log(body)



let body = document.querySelector("body")
// body.classList.toggle("dark-mode")

        console.log(body)

        



        let header = document.querySelector("header")
        console.log(header)

        let nav = document.querySelector("nav")
        console.log(nav)

        let allNav = document.querySelector(".all-nav-bar.all-borders")


        let navLogo = document.querySelector(".logo.all-borders")

        console.log(navLogo)


        let navLogoImage = document.querySelector(".logo.all-borders > img").src

        console.log(navLogoImage)

        let navLogoText = document.querySelector(".logo p")

        let ulNav = document.querySelector("ul")

        console.log(ulNav)

        let navigationContent1 = document.querySelectorAll("ul li a  label")

        console.log(navigationContent1)



        let navigationContent2 = document.querySelector("ul a  .governance")

        let navigationContent3 = document.querySelector("ul a  .faq")

        let navigationContent4 = document.querySelector("ul a  .blog")

        let navigationContent5 = document.querySelector("ul a  .community")

        let navigationContent6 = document.querySelector("ul a  .docs")

        let navigationContent7 = document.querySelector("ul a  .launchApp")

        let launchApp = document.querySelector(".launch-app")

        console.log(launchApp)


        let launchApp2 = document.querySelector(".btn.btn-2.launch-app-btn")

        console.log(launchApp2);
        
        

        console.log(navigationContent1)


        console.log(navLogoText)

        let learnMore1 = document.querySelector(".btn.btn3.learn-more-button")

        console.log(learnMore1)

        let learnMore2 = document.querySelector(".btn.btn4.learn-more-button")

        console.log(learnMore2)



        let coreFeaturesContainers1 = document.querySelector(".core-features-layer > div")

        console.log(coreFeaturesContainers1)


        let coreFeaturesContainers2 = document.querySelector(".initial-total-supply.all-borders")

        console.log(coreFeaturesContainers2)


        let coreFeaturesContainers3 = document.querySelector(".reward-of-total-liquidity-providers.all-borders")

        console.log(coreFeaturesContainers3)


        let coreFeaturesContainers4 = document.querySelector(".governance-token.all-borders")

        console.log(coreFeaturesContainers4)


        let coreFeaturesContainers5 = document.querySelector(".yield-farming-reward.all-borders")

        console.log(coreFeaturesContainers5)


        let coreFeaturesContainers6 = document.querySelector(".BenzSwap-protocol-transaction-fee.all-borders")

        console.log(coreFeaturesContainers6)



        let btnm = document.querySelectorAll(".btn")
        
        console.log(btnm)


        let toggleMode = document.querySelector(".toggle.all-borders")
        console.log(toggleMode)

        toggleMode.addEventListener("click", ()=> {
            toggleMode.style.float = "right"

            body.classList.toggle("dark-mode")
            

            if (body.classList.contains("dark-mode"))   {
                // btnm.classList.toggle("btn-dark-mode")
                
                header.style.backgroundColor ="#000"
                nav.style.backgroundColor = "#000"
                allNav.style.backgroundColor = "#000"
                navLogo.style.backgroundColor = "#000"
                navLogoText.style.color = "#fff"
    
    
                ulNav.style.backgroundColor = "#000"
                // navigationContent1.style.color = "#fff"
    
                // navigationContent2.style.color = "#fff"
                
                // navigationContent3.style.color = "#fff"
    
                // navigationContent4.style.color = "#fff"
    
                // navigationContent5.style.color = "#fff"
    
                // navigationContent6.style.color = "#fff"
    
                // navigationContent7.style.color = "#fff"
    
                launchApp.style.backgroundColor = "#000"
    
                launchApp2.style.backgroundColor = "var(--btnBackgroundColor)"
                console.log(launchApp2)
                launchApp2.style.color = "#fff"
    
    
    
    
    
    
                navLogoImage = "../images/benzswap-logo/BENSWAP-LOGO-14-removebg-preview.png"
                console.log(navLogoImage);
    
    
    
                learnMore1.style.backgroundColor = "#000"
                learnMore1.style.color = "#fff"
                
    
                learnMore2.style.backgroundColor = "transparent"
                learnMore2.style.color = "#fff"
    
                coreFeaturesContainers1.style.backgroundColor = "transparent"
                
                coreFeaturesContainers1.style.boxShadow = "none"
    
                coreFeaturesContainers2.style.backgroundColor = "rgba(200, 194, 194, 0.5)"
    
                coreFeaturesContainers2.style.boxShadow = "none"
    
    
                coreFeaturesContainers3.style.backgroundColor = "rgba(200, 194, 194, 0.5)"
    
                coreFeaturesContainers3.style.boxShadow = "none"
    
    
                coreFeaturesContainers4.style.backgroundColor = "rgba(200, 194, 194, 0.5)"
    
                coreFeaturesContainers4.style.boxShadow = "none"
    
    
                coreFeaturesContainers5.style.backgroundColor = "rgba(200, 194, 194, 0.5)"
    
                coreFeaturesContainers5.style.boxShadow = "none"
    
    
                coreFeaturesContainers6.style.backgroundColor = "rgba(200, 194, 194, 0.5)"
    
                coreFeaturesContainers6.style.boxShadow = "none"
    
            }
            else        {
                
                toggleMode.style.float = "left"

            }
            

            if (! body.classList.contains("dark-mode")) {

                header.style.backgroundColor ="initial"
                nav.style.backgroundColor = "initial"
                allNav.style.backgroundColor = "initial"
                navLogo.style.backgroundColor = "initial"
                navLogoText.style.color = "initial"
    
    
                ulNav.style.backgroundColor = "inital"
                navigationContent1.style.color = "inital"
    
                navigationContent2.style.color = "inital"
                
                navigationContent3.style.color = "inital"
    
                navigationContent4.style.color = "inital"
    
                navigationContent5.style.color = "inital"
    
                navigationContent6.style.color = "inital"
    
                navigationContent7.style.color = "inital"
    
                launchApp.style.backgroundColor = "inital"

                
            }

            // else    {
            //         toggleMode.style.float = "right"
            //     }


        })


        