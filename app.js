// function getEvenNumbers(arr) {
//     return arr.filter(num => num % 2 === 0);
// }

// console.log(getEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// function getGreaterThan50(arr) {
//     return arr.filter(num => num > 50);
// }

// console.log(getGreaterThan50([10, 20, 30, 40, 50, 60, 70, 80, 90, 100]));

// function getOddNumbers(arr) {
//     return arr.filter(num => num % 2 !== 0);

// }

// console.log(getOddNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// function getPositiveNumbers(arr) {
//     return arr.filter(num => num > 0)
// }

// console.log(getPositiveNumbers([-1, -2, -3, -4, -5, 1, 2, 3, 4, 5]))

// function longNamesFruits(arr) {
//     return arr.filter(fruit => fruit.length > 5)
// }

// console.log(longNamesFruits(["Apple", "Banana", "Kiwi", "Mango"]));


// function findTheLargestNumber(arr) {
//     return Math.max(...arr)
// }

// console.log(findTheLargestNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// function name(callback) {
//     console.log("Sujith K");
//     callback()
// }

// function place(callback) {
//     console.log("Malappuram");
//     callback()
// }

// function age() {
//     console.log(25);
// }

// name(()=>{
//     place(()=>{
//         age()
//     })
// })

// function name() {
//     return new Promise((resolve)=>{
//         console.log("Sujith K");
//         resolve()
//     })
// }

// function place() {
//     return new Promise((resolve) => {
//         console.log("Malappuram");
//         resolve();
//     });
// }

// function age() {
//     return new Promise((resolve) => {
//         console.log(25);
//         resolve();
//     });
// }

// name()
//     .then(() => place())
//     .then(() => age())
//     .then(() => console.log("Finished"));

// function walkDog(callback) {
//     setTimeout(() => {
//         console.log("You walk the dog");
//         callback();
//     }, 1500);
// }

// function cleanKitchen(callback) {
//     setTimeout(() => {
//         console.log("You clean the kitchen");
//         callback();
//     }, 2500);
// }

// function takeOutTrash(callback) {
//     setTimeout(() => {
//         console.log("You take out the trash");
//         callback();
//     }, 500);
// }

// walkDog(() => {
//     cleanKitchen(() => {
//         takeOutTrash(() => {
//             console.log("You finished all the chores!");
//         });
//     });
// });

// function walkDog() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {

//             const dogWalked = false;

//             if (dogWalked) {
//                 resolve("You walk the dog");
//             } else {
//                 reject("You didn't walk the dog")
//             }

//         }, 1500);
//     });
// }

// function cleanKitchen() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {

//             const kitchenCleaned = true;

//             if (kitchenCleaned) {
//                 resolve("You clean the kitchen");
//             } else {
//                 reject("You didn't clean the kitchen")
//             }

//         }, 2500);
//     });
// }

// function takeOutTrash() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {

//             const trashTakenOut = true;

//             if (trashTakenOut) {
//                 resolve("You take out the trash");
//             } else {
//                 reject("You didn't take out the trash")
//             }

//         }, 500);
//     });
// }

// walkDog()
//     .then(value => {
//         console.log(value);
//         return cleanKitchen();
//     })
//     .then(value => {
//         console.log(value);
//         return takeOutTrash();
//     })
//     .then(value => {
//         console.log(value);
//         console.log("You finished all the chores!");
//     })
//     .catch(error => console.error("Failed to complete the task:", error));

// function greet(name, callback) {
//     console.log("Hello " + name)
//     callback()
// }

// greet("Sujith K", () => {
//     console.log("Welcome!");
// })

// function greet(name, resolve) {
//     return new Promise((resolve, reject) => {
//         console.log("Hello " + name);
//         resolve()
//     })
// }

// greet("Sujith K")
//     .then(() => {
//         console.log("Welcome");

//     }).catch((error) => {
//         console.error("Error:", error);
//     });

// function walkDog() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("You walk the dog");
//             resolve()
//         }, 2500);
//     })
// }

// async function start() {
//     await walkDog();
//     console.log("Finished")
// }

// start()

// function downloadFile() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("File downloaded");
//             resolve()
//         }, 2000);
//     })
// }

// async function start() {
//     await downloadFile();
//     console.log("Open the file");
// }

// start()

// function walkDog() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let success = false;

//             if (success) {
//                 resolve("You walked the dog")
//             } else {
//                 reject("You didn't walk the dog")
//             }
//         }, 1500);
//     })
// }

// async function start() {
//     try {
//         let result = await walkDog()
//         console.log(result)
//     } catch (error) {
//         console.error("Error:", error);
//     }
// }

// start()

// function makeCoffe() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let coffeeAvailable = true;

//             if (coffeeAvailable) {
//                 resolve("Coffee is available")
//             } else {
//                 reject("No coffee available")
//             }
//         }, 2500);
//     })
// }

// async function start() {
//     try {
//         let result = await makeCoffe()
//         console.log(result)
//     } catch (error) {
//         console.error("Error:", error);
//     }
// }

// start();

// function login(username, password) {
//     return new Promise((resolve, reject) => {
//         if (username === "Sujith K" && password === "12345") {
//             resolve("Login Successfull")
//         } else {
//             reject("Invalid username or password")
//         }
//     })
// }

// async function start(params) {
//     try {
//         let result = await login("Ajith", "12345")
//         console.log(result);
//     } catch (error) {
//         console.error("Error:", error);

//     }
// }

// start()

// function checkAge(age) {
//     return new Promise((resolve, reject) => {
//         if (age >= 18) {
//             resolve("You are eligible")
//         } else {
//             reject("You are not eligible")
//         }
//     })
// }

// async function start() {
//     try {
//         let result = await checkAge(25)
//         console.log(result);
//     } catch (error) {
//         console.error("Error:", error);
//     }
// }

// start()

// function makePayment(amount) {
//     return new Promise((resolve, reject) => {
//         if (amount > 0) {
//             resolve("Payment successful");
//         } else {
//             reject("Payment failed");
//         }
//     })
// }

// async function start() {
//     try {
//         let result = await makePayment(0)
//         console.log(result);
//     } catch (error) {
//         console.error("Error:", error);

//     }
// }

// start()

// function checkInternet() {
//     return new Promise((resolve, reject) => {
//         let connected = true;

//         if (connected) {
//             resolve("Internet Connected")
//         } else {
//             reject("Internet not Connected")
//         }
//     })
// }

// async function start(params) {
//     try {
//         let result = await checkInternet()
//         console.log(result);
//     } catch (error) {
//         console.error("Error:", error);
//     }
// }

// start()

// function checkProduct(product) {
//     return new Promise((resolve, reject) => {
//         if (product === "Laptop") {
//             resolve("Laptop is available")
//         } else {
//             reject("Laptop is not available")
//         }
//     })
// }

// async function start() {
//     try {
//         let result = await checkProduct("Laptop")
//         console.log(result);
//     } catch (error) {
//         console.error("Error :", error);
//     }
// }

// start()

// function task1() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Task 1 completed")
//         }, 1500);
//     })
// }

// function task2() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Task 2 completed")
//         }, 2000);
//     })
// }

// function task3() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Task 3 completed")
//         }, 2500);
//     })
// }

// Promise.all([
//     task1(),
//     task2(),
//     task3()
// ])

//     .then((result) => {
//         console.log(result);
//     }).catch((err) => {
//         console.error("Error:", err);

//     });

// function getRestaurant() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Restaurant found")
//         }, 1500);
//     })
// }

// function getMenu() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Menu loaded")
//         }, 2000);
//     })
// }

// function getDeliveryParter() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Delivery partner found")
//         }, 2500);
//     })
// }

// Promise.all([
//     getRestaurant(),
//     getMenu(),
//     getDeliveryParter()
// ]).then((result) => {
//     console.log(result);
// }).catch((err) => {
//     console.error("Error:", err);
// });

// const heading = document.getElementById("heading")

// heading.textContent = "Hello Sujith"

// console.log(heading);


// const element = document.getElementById("element")

// element.textContent = "Learning Javascript"

// console.log(element);

// const title = document.querySelector("#title")
// title.textContent = "I Love DOM"
// console.log(title)

// const message = document.querySelector(".message")
// message.textContent = "DOM is Easy"
// console.log(message);

// const button = document.querySelector("#button")
// button.textContent = "Text Change"
// console.log(button);

// const title = document.querySelector("#title");
// const button = document.querySelector("#btn");

// button.addEventListener("click", function () {
//     title.textContent = "Button Clicked"
// })

// function changeTitle(params) {
//     title.textContent = "Button Clicked"
// }

// button.addEventListener("click", changeTitle)

// const count = document.querySelector("#count")
// const increaseButton = document.querySelector("#increase")
// const decreaseButton = document.querySelector("#decrease")

// let number = 0;

// function increaseCount() {
//     number++;
//     count.textContent = number;
// }

// function decreaseCount() {
//     number--;
//     count.textContent = number;
// }

// increaseButton.addEventListener("click", increaseCount)
// decreaseButton.addEventListener("click", decreaseCount)

// const buttons = document.querySelectorAll(".buy");

// buttons.forEach(function (button) {
//     button.addEventListener("click", function () {
//         console.log("Product added to cart");

//     })
// })

// const buttons = document.querySelectorAll(".watch");

// buttons.forEach(function (button) {
//     button.addEventListener("click", function () {

//         const movie = button.parentElement;
//         const title = movie.querySelector("h2")

//         console.log("Playing: " + title.textContent);
//     })
// })

// const buttons = document.querySelectorAll(".buy");

// buttons.forEach(function (button) {

//     button.addEventListener("click", function () {

//         const product = button.parentElement;
//         const title = product.querySelector("h2");

//         console.log(title.textContent);

//     });

// });

// const box = document.querySelector("#box");

// box.innerHTML = "<h1>Hello Sujith</h1>"

// const title = document.querySelector("#title");

// title.innerText = "Hello Sujith";

// const title1 =  document.querySelector(".title")

// title1.textContent = "Hello Sujith"

// const image = document.querySelector("#profile");
// const button = document.querySelector("#change");

// button.addEventListener("click", function () {
//     image.setAttribute("src", "https://i.pinimg.com/474x/85/b1/32/85b132280423fc8beadc3a29c9d42f8c.jpg?nii=t");
//     image.setAttribute("alt", "New Profile");
// });

// const button = document.querySelector("#btn");

// button.classList.add("active");

// button.classList.remove("active");

// const button = document.querySelector("#darkMode");

// button.addEventListener("click", function () {
//     document.body.classList.toggle("dark");
// });

// const button = document.querySelector("#btn");

// button.addEventListener("click", function () {

//     document.body.classList.toggle("red")

// });

// const box = document.querySelector("#box");

// const paragraph = document.createElement("p");

// paragraph.textContent = "Hello Sujith";

// box.append(paragraph);

// const container = document.querySelector("#container");

// const heading = document.createElement("h2");

// heading.textContent = "Learning DOM";

// container.append(heading);

// const list = document.querySelector("#list");

// const item1 = document.createElement("p");
// item1.textContent = "Apple";

// const item2 = document.createElement("p");
// item2.textContent = "Banana";

// const item3 = document.createElement("p");
// item3.textContent = "Orange";

// list.append(item1, item2, item3);

// const container = document.querySelector("#container");

// const mySkills = document.createElement("h2");
// mySkills.textContent = "My Skills"

// const languages1 = document.createElement("p")
// languages1.textContent = "HTML";

// const languages2 = document.createElement("p");
// languages2.textContent = "CSS";

// const languages3 = document.createElement("p");
// languages3.textContent = "JavaScript";

// container.append(mySkills, languages1, languages2, languages3)

// const container = document.querySelector("#container");

// const heading = document.createElement("h2");
// heading.textContent = "My Skills";

// container.prepend(heading);

// const list = document.querySelector("#list");

// const mySkills = document.createElement("h2");
// mySkills.textContent = "My Skills";

// list.prepend(mySkills);

// const message = document.querySelector("#message");

// message.remove()

// const item = document.querySelector("#item");
// const deleteButton = document.querySelector("#delete");

// deleteButton.addEventListener("click", function () {
//     item.remove();
// });

// const title = document.querySelector("#title");
// const removeTitle = document.querySelector("#remove");

// removeTitle.addEventListener("click", function () {
//     title.remove()
// })

// const container = document.querySelector("#container");

// const paragraph = document.createElement("p");

// paragraph.textContent = "Hello Sujith";

// container.appendChild(paragraph);

// const container = document.querySelector("#container");

// const heading = document.createElement("h2");

// heading.textContent = "My Skills";

// container.appendChild(heading);

// const nameInput = document.querySelector("#name");

// nameInput.addEventListener("input", function () {
//     console.log("User is typing");
// });

// const nameInput = document.querySelector("#name");

// nameInput.addEventListener("input", function () {
//     console.log(nameInput.value);
// });

// const nameInput = document.querySelector("#name");
// const message = document.querySelector("#message");

// nameInput.addEventListener("input", function () {
//     message.textContent = nameInput.value;
//     console.log(nameInput.value);
// });

// const nameInput = document.querySelector("#name");
// const output = document.querySelector("#output");

// nameInput.addEventListener("input", function () {

//     output.textContent = nameInput.value;

// });

// const course = document.querySelector("#course");
// const output = document.querySelector("#output");

// course.addEventListener("change", function () {
//     output.textContent = course.value;
// });

// const fruit = document.querySelector("#fruit");
// const output = document.querySelector("#output");

// fruit.addEventListener("change", function () {
//     output.textContent = fruit.value;
// });

// const form = document.querySelector("#form");

// form.addEventListener("submit", function (event) {
//     event.preventDefault();

//     console.log("Form submitted");
// });

// const form = document.querySelector("#loginForm");

// form.addEventListener("submit", function () {
//     console.log("Login clicked");
// });

// const form = document.querySelector("#loginForm");

// form.addEventListener("submit", function (event) {

//     event.preventDefault();

//     console.log("Login clicked");
// });

// const form = document.querySelector("#loginForm");
// const username = document.querySelector("#username");
// const message = document.querySelector("#message");

// form.addEventListener("submit", function (event) {

//     event.preventDefault();

//     message.textContent = "Welcome " + username.value;
// });

// const form = document.querySelector("#feedbackForm");
// const nameInput = document.querySelector("#name");
// const feedback = document.querySelector("#feedback");
// const result = document.querySelector("#result");

// form.addEventListener("submit", function (event) {
//     event.preventDefault();

//     result.textContent =
//         "Thank you " + nameInput.value + " for your feedback!";
// });

document.addEventListener("keydown", function (event) {
    console.log("You pressed: " + event.key);
});

const result = document.querySelector("#result");

document.addEventListener("keydown", function (event) {
    result.textContent = "You pressed: " + event.key;
})

const result = document.querySelector("#result");

document.addEventListener("keyup", function (event) {
    result.textContent = "You released: " + event.key;
});