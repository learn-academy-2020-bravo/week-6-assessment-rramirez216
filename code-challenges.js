
// conosle.log function
const cl = (value) => {
    return console.log(value);
    
}

// ASSESSMENT 6: Coding Practical Questions


// --------------------1) Create a function that takes in an array of objects and returns a sentence about each person with their names capitalized.

var people = [
  { name: "ford prefect", occupation: "hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "radio employee" }
]
// Expected output example: "Ford Prefect is a hitchhiker." "Zaphod Beeblebrox is a president of the galaxy." "Arthus Dent is a radio employee."




// create a function that takes in an array as an argument
const nameAndOccupation = (arr) => {
    // iterate through the array to access the objects and its value
    let nameArray = arr.map((value, index) => {
        // split the name into an an array and capitalize the name
        let name = value.name.split(' ')
        let occupation = value.occupation
        let firstName = name[0]
        let lastName = name[1]
        let capitalizedFirst = firstName.charAt(0).toUpperCase() + firstName.slice(1)
        let capitalizedLast = lastName.charAt(0).toUpperCase() + lastName.slice(1)
        // print out the value with string interpolation
        return `"${capitalizedFirst} ${capitalizedLast} is a ${occupation}."`
    })
    //return the name array and join the with a space inbetween each string
    return nameArray.join(' ')
}


cl(nameAndOccupation(people))

// --------------------2) Create a function that takes in a mixed data array and returns an array of only the remainder of the numbers when divided by 3.

var testingArray1 = [23, "Heyyyy!", 45, -9, 0, "Yo", false]
// Expected output: [ 2, 0, -0, 0 ]
var testingArray2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]



// create a function that takes in an array as an argument
const remainderOfNumbers = (arr) => {
    // filter out the non numbers in the array
    return arr.filter(value => typeof value === "number").map(value => {
        // map through and return the raimainder of the numbers
        return value % 3
    })
}

cl(remainderOfNumbers(testingArray1))
cl(remainderOfNumbers(testingArray2))





// --------------------3) Create a function that takes in two arrays as arguments returns one array with no duplicate values.

var testingArray3 = [3, 7, "hi", 10, 3, "hello", 4, "hi"]
var testingArray4 = [7, "hi", 3, 1, "hi", 4, "hello", 4, 7]
// Expected output: [ 3, 7, "hi", 10, "hello", 4, 1 ]



// create a function that takes in two arrays as an argument
const NoDuplicates = (arr1, arr2) => {
    // concate both arrays
    let concatedArr = arr1.concat(arr2)
    // use the filter to iterate over the array
    // use index of to find the index of the value inside the arrayß
    return concatedArr.filter((value, index) => concatedArr.indexOf(value) === index)
}

cl(NoDuplicates(testingArray3, testingArray4))
