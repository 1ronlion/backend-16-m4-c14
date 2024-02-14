const array = [1,2,3,4,5,6,7,8]

function printNumber (arr, cb){
    
    let data = arr.map((element) => element + 1)

    return data.map((number) => cb(number))

}

function double (number) {

    return number * 2 

}

function triple (number) {

    return number * 3 

}

let result = printNumber(array, triple)
console.log("🚀 ~ result:", result)
