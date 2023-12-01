/*
Question:
    Write a function called stringifyNumbers which takes in an object and finds all of the values 
    which are numbers and converts them to strings. Recursion would be a great way to solve this!

Sample Input:
    let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}
stringifyNumbers(obj)

{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
} 
*/

const stringifyNumbers = obj => {
    const inputObj = { ...obj };
    const helper = arg => {
        for (let key in arg) {
            if (typeof arg[key] === "object") helper(arg[key]);
            else if (typeof arg[key] === "number") arg[key] = arg[key].toString();
        }
    }
    helper(inputObj)
    return inputObj;
}