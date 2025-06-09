// function normalizeArray(arr) {
//   if (arr.length > 10) {
//     arr = arr.slice(arr.length - 10);
//   } else if (arr.length < 10) {
//     while (arr.length < 10) {
//       const randomNumber = Math.floor(Math.random() * 100); 
//       arr.push(randomNumber);
//     }
//   }
//   return arr;
// }

// let myArray = [4, 7, 12]; 
// let result = normalizeArray(myArray);
// console.log(, result);

// function guessGame() {
//   const secret = Math.floor(Math.random() * 11);
//   let tries = 5;

//   while (tries > 0) {
//     let guess = parseInt(prompt(`შეიყვანეთ რიცხვი 0-დან 10-მდე. დაგრჩათ ${tries} ცდა:`), 10);

//     if (guess === secret) {
//       alert("თქვენ მოიგეთ!");
//       return;
//     }

//     tries--;

//     if (tries === 0) {
//       alert(`თქვენ წააგეთ! ჩაფიქრებული რიცხვი იყო ${secret}`);
//     } else {
//       let hint = guess < secret ? "მაღალია" : "დაბალია";
//       alert(`ჩაფიქრებული რიცხვი ${hint}. დაგრჩათ ${tries} ცდა.`);
//     }
//   }
// }

// guessGame();
