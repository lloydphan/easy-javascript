
// trong cái mớ hàm này
// for ... i, for ... off
// forEach
// filter
// map
// ...
// Cai ham de dien nhat la reduce()
// Ham nay lam gi
// Lap qua phan tu cua mang
// Tinh toan va tra ve ket qua cuoi cung

// Excercise 1

const sumFor = (numberList) => {
    let sum = 0;

    for (const number of numberList) {
        const newSum = sum + number;
        sum = newSum;
    }

    return sum;
}

console.log(sumFor([1, 2, 3, 4, 5]));

// Su dung reduce
// 1. Xac dinh gia tri khoi tao
// 2. Xac dinh cong thuc voi ket qua cua buoc truoc do
// Init value = 0
// result = prevResult + number

const sumReduce = (numberList) => {
    // return numberList.reduce((resultFromLastStep, curValue) => {}, 0)
    return numberList.reduce((sum, number) => sum + number, 0);
}

console.log(sumReduce([1, 2, 3, 4, 5]));

// Find the longest word in list
// Input : ['love', 'easy', 'frontend']
// Output : frontend

const findTheLongestWord = (wordList) => {
    if (!Array.isArray(wordList) || wordList.length === 0) return null;

    return wordList.reduce((theLongestWord, currentWord) => {
        return theLongestWord.length > currentWord.length ? theLongestWord : currentWord;
    }, wordList[0]);
}

console.log(findTheLongestWord(['love', 'easy', 'frontend']));

// Viet ham de chuyen doi mang thanh object su dung reduce

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
// 
// to use later as itemMap.key1, O(1)
// instead of look up in itemList with id = key1, O(1)

const arrayToObject = (itemList) => {
    return itemList.reduce((itemMap, item) => {
        itemMap[item.id] = item.value;
        return itemMap;
    }, {});
}

const itemList = [
    {id: 'key1', value: 'Superman'},
    {id: 'key2', value: 'Wonder Woman'},
    {id: 'key3', value: 'Spider Man'},
];

console.log(arrayToObject(itemList));

// Tóm lại
// Mình có thể dùng reduce() nếu như gặp 1 bài toán
// Lặp qua 1 mảng -> xử lý gì đó -> trả về 1 kết quả cuối cùng
// Ví dụ như tìm min max sum

