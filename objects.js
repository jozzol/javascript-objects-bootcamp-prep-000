var meals = {};
var meals = new Object();
var meals = { breakfast: "oatmeal"};
var meals = new Object({breakgast: "oatmeal"});
const firstMeal = "breakfast";
var meals = {firstMeal: "oatmeal"};
//objects key would be "firstmeal", not "breakgast"
var meals = {[firstMeal]: "oatmeal"}
//objects key would be "breakfast"
//dot notation
meals.breakfast // "oatmeal"
meals["breakfast"] //"oatmeal"
meals[firstMeal] //"oatmeal"
meals.firstMeal //undefined
var meals = {
  breakfast: "oatmeal",
  lunch: "burrito",
  dinner: "steak"
}
meals.snack = "yogurt";
meals.snack //"yogurt"
meals["snack"]//"yogurt"
meals.lunch //"burrito"
meals["second breakfast"] = "bagel"
var sweetMeal = "dessert"
meals[sweetMeal] = "cake";
meals.dessert // "cake"
meals[sweetMeal] // "cake"
