
// დავალება 1. ამოიღეთ user ცვლადის სტუდენტის სტატუსი;

// let user = {
//     firstName: 'giorgi',
//     lastName: 'smith',
//     age: 25,
//     studentStatus: 'active'
// }

// console.log(user.studentStatus);

// 2. შექმენით მასივი, და დაბეჭდეთ სათითაოდ თითოეული ელემენტი(for da while ციკლით);

// let array = ['giorgi', 'dato', 'eka', 'nino', 25, null, 50];
// for (let item of array) {
//     console.log(item);
// }

// let array = ['giorgi', 'dato', 'eka', 'nino', 25, null, 50];
// let x = 0;
// while (x < array.length) {
//     console.log(array[x]);
//     x++;
// }

// 3. შექმენით მასივი, და ამოიღეთ ყველა რიცხვი რომელიც მეტია 5ზე, for ციკლის გამოყენებით.

// let numbers = [5, 6, 10, 25, 3, 7, 4, 100, 28, 36, 89];
// for (let item of numbers) {
//     if (item > 5) {
//         console.log(item);
//     }
// }

// 4. თუ უსერის ასაკი ნაკლებია 18-ზე და სტუდენტის სტატუსი აქტიურია დაიბეჭდოს ტექსტი:  
// Hello;
// თუ უსერის სახელი უდრის ლევანს მაშინ დაიბეჭდოს ტექსტი: hello levani;
// თუ უსერის სტუდენტის სტატუსი აქტიურია ან უსერის ასაკი ნაკლებია 25ზე დაიბეჭდოს ტექსტი: hello world;
// ყველა დანარჩენ შემთხვევაში დაილოგოს ტექსტი: error;

// let user = {
//     name: 'giorgi',
//     age: 20,
//     studentStatus: 'active'
// }
// if (user.age < 18) {
//     console.log('hello');
// } else if (user.name == 'levani') {
//     console.log('hello levani');
// } else if (user.studentStatus == 'active' || user.age < 25) {
//     console.log('hello world');
// } else {
//     console.log('error');
// }

// 5. გამოიტანეთ მარტო სრტინგები

// let array = ['watermelon', 'pear', 10, 45, 50, 'apple', 'ananas'];
// for (let item of array) {
//     if (typeof item == 'string')
//     console.log(item);
// }

// 6. მოცემული მასივიდან for ციკლი-ს საშუალებით კონსოლში გამოიტანეთ მხოლოდ დადებითი რიცხვები

// let array = [ [2, -3, 5, 10], [25, -24, -11, 100] , [-6, -7, 10] ];
// for (let item of array) {
//     for (let x of item) {
//         if (x > 0) {
//             console.log(x);
//         }
//     }
// }

// 7. 1.ამოიღეთ მარტო ლუწი რიცხვები 2.ამოიღეთ კენტი რიცხვები

// let array = [2, 3, 5, 10, 25, 24, 11, 100, 6, 7, 10];
// for (let item of array) {
//     if (item % 2 == 0) {
//         console.log(item);
//     }
// }
// let array = [2, 3, 5, 10, 25, 24, 11, 100, 6, 7, 10];
// for (let item of array) {
//     if (item % 2 == 1) {
//         console.log(item);
//     }
// }

// 8. კონსოლში გამოიტანეთ მარტო ის ობიექტი, რომლის status property-ის მნიშვნელობა არის true;

// let users = [
//     {username: 'giorgi', status: false},
//     {username: 'levani', status: false},
//     {username: 'anna', status: true}
// ]
   
// for (let item of users) {
//     if (item.status == true) {
//         console.log(item.username);
//     }
// }