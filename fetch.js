const url = ""
const url2 = "https://www.thecocktaildb.com/api/json/v1/1/random.php"

// Opcion 1
// let data = fetch(url)

// let partialData = data.then((res) => res.json())
// let finalData = partialData.then((result) => console.log(result.value))


// Opcion 2
// fetch(url)

// .then((res) => res.json())
// .then((result) => console.log(result.value))
// .catch((error) => console.log(error))

function fetchDataRetry (url, maxRetries, interval, url2){

    let retries = 0;

    const fetchData = () => {
    
    fetch(url)

    .then((res) => res.json())
    .then((result) => console.log(result.value))

    .catch((error) => {
        
        console.log(error)

        retries++

        if(retries < maxRetries){
            return setTimeout(fetchData, interval)
        }else{
            //console.log("Maximo de intentos alcanzado")
            return fetchDataRetry(url2, 1, 1000)
        }
    })
    
    }

    return fetchData()
}

let result = fetchDataRetry(url, 5, 1000)
console.log("🚀 ~ result:", result)












