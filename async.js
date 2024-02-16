const url = "https://rickandmortyapi.com/api/character"
const url2 = "https://rickandmortyapi.com/api/location"
const url3 = "https://rickandmortyapi.com/api/episode"


// function fetchData (){

// let starTime = performance.now();

// let character = fetch(url).then((res) => res.json())
// let location = fetch(url2).then((res) => res.json())
// let episode = fetch(url3).then((res) => res.json())

// Promise.all([character, location, episode])

// .then((data) => {

//     let endTime = performance.now()

//     let [char, loc , ep] = data 
    
//     let responseTime = endTime - starTime
    
//     console.log("🚀 ~ .then ~ responseTime:", responseTime)
//     // console.log(char.results, loc.results, ep.results)

// })
// .catch((error) => console.log(error))

// }

// const fetch = async () => {}

async function fetchData (){
try{

    let starTime = performance.now()

    let character = await fetch(url)
    let location = await fetch(url2)
    let episode = await fetch(url3)


    let charData = await character.json();
    let locData = await location.json();
    let epData = await episode.json();

    let endTime = performance.now()

    let responseTime = endTime - starTime
    
    let result = {
        characters :charData,
        location: locData,
        episodes: epData
    }
    
    console.log("🚀 ~ fetchData ~ responseTime:", responseTime)
    //console.log("🚀 ~ fetchData ~ result:", result)
} catch (error) {

    console.log(error)

}
    
}

fetchData()