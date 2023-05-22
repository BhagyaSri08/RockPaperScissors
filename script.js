        const gameContainer=document.querySelector(".container");
        userResult=document.querySelector(".user_result img");
        cpuResult=document.querySelector(".cpu_result img");
        result=document.querySelector(".result");
        optionImages=document.querySelectorAll(".option_image")
        // userScore=document.querySelector(".user_score .user_marks");
        // cpuScore=document.querySelector(".cpu_score .cpu_marks");
        // userScore=document.getElementById("user_marks");
        // cpuScore=document.getElementById("cpu_marks");
        var userScores=0;
        var cpuScores=0;
        // console.log(gameContainer,userResult,cpuResult,result,optionImages,userScore,cpuScore);
        optionImages.forEach((image,index) => {
            image.addEventListener("click",(e)=>{
                image.classList.add("active");

                userResult.src=cpuResult.src='hands/rock.jpg';
                result.textContent="Wait...";
                //Loop through each option img again
                optionImages.forEach((image2,index2)=>{
                    //If current index doesn't match the clicked index
                    //Remove the "active" class from the other options
                    index!=index2 && image2.classList.remove("active");

                    
                });
                
                gameContainer.classList.add("start");

                //set a timeout to delay the result caluculations

                let time=setTimeout(()=>{
                    gameContainer.classList.remove("start");
                    //Get the source of the clicked image
                let imageSrc=e.target.querySelector("img").src;
                userResult.src=imageSrc;
                // console.log(imageSrc);


                //Generate a random number b/w 0 and 2
                let randomNumber=Math.floor(Math.random()*3);
                // console.log(randomNumber);
                //cpu img options
                let cpuImages=['hands/rock.jpg',"hands/paper.jpg","hands/scissors.jpg"]
                cpuResult.src=cpuImages[randomNumber];

                //Assign letter to the cpu option
                let cpuValue=["R","P","S"][randomNumber];
                //Assign letter to clicked option(based on index)
                let userValue=["R","P","S"][index];

                // console.log(cpuValue,userValue);

                //Create object with all possible outcomes
                let outcomes={
                    RR:"Draw",
                    RP:"Cpu",
                    RS:"You",
                    PR:"You",
                    PP:"Draw",
                    PS:"Cpu",
                    SR:"Cpu",
                    SP:"You",
                    SS:"Draw"
                }
                //look outcome based on user and cpu options
                let outComeValue=outcomes[userValue+cpuValue];
                result.textContent=userValue===cpuValue? "Match Draw" :`${outComeValue} Won!!`;
                // result.textContent=userValue==="R" && cpuValue==="S"? userScore++ : userScore=0;           
                // console.log(outComeValue);
                 // result.textContent=userValue+cpuValue==="RS"?userScore++: userScore=0;
                // result.textContent=userValue+cpuValue==="PR"?userScore++: userScore=0;
                // result.textContent=userValue+cpuValue==="SP"?userScore++: userScore=0;
                // result.textContent=userValue+cpuValue==="SR"?cpuScore++: cpuScore=0;
                // result.textContent=userValue+cpuValue==="PR"?cpuScore++: cpuScore=0;
                // result.textContent=userValue+cpuValue==="SP"?cpuScore++: cpuScore=0;
                // console.log(outComeValue);
                if (userValue+cpuValue=="RS" || userValue+cpuValue=="PR" || userValue+cpuValue=="SP"){
                    userScores++;
                    // console.log("hi",userScores);
                }
                if (userValue+cpuValue=="SR" || userValue+cpuValue=="RP" || userValue+cpuValue=="PS"){
                    cpuScores++;
                }
                // console.log(document.getElementById("user_marks").value);
                document.getElementById("user_marks").innerHTML=userScores;
                document.getElementById("cpu_marks").innerHTML=cpuScores;
                if (userScores>cpuScores){
                result.textContent="YOU Won!!";
                }
                else if (userScores<cpuScores){
                result.textContent="CPU Won!!";
                }
                else if(userScores==cpuScores){
                    // console.log("Match Draw");
                    result.textContent="Match Draw!!";
                }
                },1000);
                
            });
        });