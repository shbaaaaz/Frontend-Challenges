/*
Question:
    Write a function called collectStrings which accepts an object and returns an array of 
    all the values in the object that have a typeof string

Sample Input:
    const obj = {
        stuff: "foo",
        data: {
            val: {
                thing: {
                    info: "bar",
                    moreInfo: {
                        evenMoreInfo: {
                            weMadeIt: "baz"
                        }
                    }
                }
            }
        }
    }

collectStrings(obj) // ["foo", "bar", "baz"])
*/

const collectStrings = obj => {
    const result = [];
    const helper = inputObj => {
        for (let key in inputObj) {
            if (typeof inputObj[key] === "object") helper(inputObj[key]);
            else if (typeof inputObj[key] === "string") result.push(inputObj[key]);
        }
    }
    helper(obj);
    return result;
}