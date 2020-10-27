// 1.Tham tri va tham chieu la gi
// 2.Các khái niệm
//   - stored by value
//   - stored by reference
//   - pass by value
//   - pass by reference

// 3. Cách khắc phục lỗi liên quan tới reference
// 4. Có liên quan gì đến ReactJS, Redux không ?


// THAM TRỊ - VALUE TYPE

// |                   |
// |  number           |
// |  string           |
// |  boolean          | ===> Lưu luôn giá trị vào vùng nhớ
// |  null, undefined  |
// |___________________|

// THAM CHIEU - REFERENCE

// |                   |                                 |                    |
// |  object, array    |                                 |     {'Hau'}        |
// |                   |                                 |     1B2F           |
// |  const a = {'Hau'}| ===> Lưu vào địa chỉ vùng nhớ   |                    |
// |                   |                                 |                    |
// |___________________|                                 |____________________|
//  => chỉ lưu địa chỉ nơi giữ giá trị
//  => phép gán với object === copy địa chỉ
//  const b = a; b cũng trỏ về địa chỉ của a


// Tham tri

let a  = 5;
let b  = a;

a = 10;
console.log(b);

// Tham Chieu

const a = { name : 'Hau'};
const b = a;
a.name = 'PO';
console.log(b);

// Truyen tham so dang tham tri - pass by value
// function doMagic1(number) {
//     number = 10;
// }

const a = 5;
doMagic1(a);
console.log(a);

// Truyen tham so dang tham chieu - pass by reference 
// function doMagic2(obj) {
//     obj.name = 'Po';
// }

const a = { name: 'Hau'};

doMagic2(a);

console.log(a.name);


// Lam sao de khong bi dinh tham chieu
// --> Clone Object
// --> Clone array
// ES6: spread opeartor (...)

const a = { name : 'Hau'};

const b = { ...a};

a.name = 'Po';
console.log(b.name);

const a = [1, 2, 3];
const b = [ ...a];

a.push(4);
console.log(b);