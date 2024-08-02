const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'ed0818dcb0mshfb9b57f663f4d27p19c3aajsnd9d67144d73d',
		'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
	}
};
const searchcity = document.querySelector(".searchcity")
const click1 = document.querySelector(".check")
const cityname = document.querySelector(".city")
const temperature = document.querySelector(".temperature1")
const feelslike1 = document.querySelector(".feelslike1")
const humidity = document.querySelector(".humidity")
const windspeed = document.querySelector(".wind")
const rain = document.querySelector(".rain")
const cloud = document.querySelector(".cloud")
const picture = document.querySelector(".pic")


async function weather() {
    console.log(searchcity.value);
    const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${searchcity.value}`;
    const data = await fetch(url,options)
     const result = await data.json()
     console.log(result.location.name)
     cityname.innerText = result.location.name+","+""+ result.location.country
     temperature.innerText = result.current.temp_c
     feelslike1.innerText = result.current.feelslike_c
     humidity.innerText = result.current.humidity
     windspeed.innerText = result.current.wind_kph
     rain.innerText = result.current.cloud
     cloud.innerText = result.current.condition.text
     const pic = result.current.condition.icon
     picture.src = pic

    //  const num = pic.slice(39,42)
    //  picture.style.backgroundimage = url(`//cdn.weatherapi.com/weather/64x64/day/${num}.png`)

}
click1.addEventListener("click",weather)

