const cityName=document.getElementById("input_text");
const temp=document.getElementById("city_temp");
const emoji=document.getElementById("emoji");

const output=document.getElementById("city_name");
console.log(output);
const url=`https://api.openweathermap.org/data/2.5/weather?q=jabalpur&appid=8cafa8c363922238df06e8659bca1e2f`

const response=fetch(url);
   console.log(response); 







    const getinfo=async(event)=>{
        event.preventDefault();
       cityVal=cityName.value;
    if(cityVal===""){
        output.innerText=`Inappropriate input is given by user`;
    }
    else{
        try{
           let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=8cafa8c363922238df06e8659bca1e2f`
            let response= await fetch(url);
            const data=await response.json();
            const arrdata=[data];
            
            output.innerText=`Please `;
            let temp_cal=(arrdata[0].main.temp-273.15).toFixed(2);
            temp.innerHTML=temp_cal;
            output.innerText=arrdata[0].sys.country+", " + arrdata[0].name;
            let descVal=arrdata[0].weather.description;
            if(descVal=='clear'){
                emoji.innerHTML="<i class='fa-solid fa-sun fa-3x'style='color:yellow'></i>"
            }
            else if(descVal=='clouds'){
                emoji.innerHTML  = "<i class='fa-solid fa-clouds fa-3x'></i>"
            }
            else if(descVal=='rain'){
                emoji.innerHTML  = "<i class='fa-solid fa-cloud-showers-heavy fa-3x'style='color:blue'></i>"
            }
            else{
                
                emoji.innerHTML  = "<i class='fa-solid fa-cloud-sun fa-3x' style='color:rgb(17, 224, 217)'></i>" ;
            }
            temp.style.opacity=1;
            emoji.style.opacity=1;
        }
        catch{
            output.innerText=`Please write approppriate name of the city`;
        }
    }
    }

    clicked_2.addEventListener('click',getinfo);
