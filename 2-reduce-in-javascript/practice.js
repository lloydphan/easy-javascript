// Viet ham findMin(numberList) su dung reduce

const findMin = (numberList) => {
    if (!Array.isArray(numberList) || numberList.length === 0) return null;
    return numberList.reduce((min, number) => {
        return min < number ? min : number;
    }, numberList[0])
}

console.log('Find Min:' + findMin([99, 300, 201, 2009, 5111]))

const findMaxEvenNumber = (numberList) => {
    if (!Array.isArray(numberList) || numberList.length === 0) return null;
    return numberList.reduce((max, number) => {
        return (max > number && max % 2 == 0) ? max : number;
    }, numberList[0])
}

console.log('Find Max Even:' + findMaxEvenNumber([99, 300, 201, 2009, 5111, 600]))

// const itemList = [
//     {id: 'key1', value: 'Superman'},
//     {id: 'key2', value: 'Wonder Woman'},
//     {id: 'key3', value: 'Spider Man'},
// ];
//
// is converted to
//
// const itemMap = {
//     key1 = 'Superman',
//     key2 = 'Wonder Woman',
//     key3 = 'Spider Man'
// }

// Object.keys(obj).map(key => obj[key].value).reduce((previous, current) => previous + current);


const convertObjectToArray = (objInput) => {
    var itemArr = []
    Object.entries(objInput).reduce((arr, value, index) => {
        if (value[0] !== undefined) {
            itemArr.push({id: value[0], value: value[1]});
        }
    }, []);
    return itemArr;
}

const objNe1 = {
    key1: 'Superman',
    key2: 'Wonder Woman',
    key3: 'Spider Man'
}

console.log(convertObjectToArray(objNe1));