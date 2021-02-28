// this is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// one euro is:
const fromDollarToYen = (a) => {
    return a * 127.9
}

const fromEuroToDollar = (a) => {
    return a * 1.2
}

const fromYenToPound = (a) => {
    return a * 0.8
}

// just a console log for ourselves.
console.log(7,3)

// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)
module.exports = { sum, fromDollarToYen, fromEuroToDollar,fromYenToPound };