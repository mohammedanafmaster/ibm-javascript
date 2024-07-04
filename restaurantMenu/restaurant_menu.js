let breakfastMenu = ['Pancakes- $12', 'Eggs Benedict -$22.99', 'Oatmeal -$21.99', 'Frittata -$15'];
let mainCourseMenu = ['Steak', 'Pasta', 'Burger', 'Salmon'];
let dessertMenu = ['Cake', 'Ice Cream', 'Pudding', 'Fruit Salad'];

const breakfastMenuItems = breakfastMenu.map((item, index) =>  `<p>Item ${index+1}: ${item}</p>`).join("");
document.getElementById("breakfastMenuItems").innerHTML = breakfastMenuItems;

 let mainCourseMenuItems = '';
mainCourseMenu.forEach((item, index) => {
mainCourseMenuItems += `<p>Item ${index + 1}: ${item}</p>`;});
document.getElementById('maincourseMenuItems').innerHTML = mainCourseMenuItems;

let dessertMenuItems = '';
for (let i = 0; i < dessertMenu.length; i++) {
    dessertMenuItems += `<p>Item ${i+1}: ${dessertMenu[i]}</p>`;
}
document.getElementById("dessertMenuItems").innerHTML = dessertMenuItems;