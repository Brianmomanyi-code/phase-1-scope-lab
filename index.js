// Write your solution in this file!
window.customerName = "bob";
function upperCaseCustomerName(){
    window.customerName = window.customerName.toUpperCase();
}
function setBestCustomer(){
    window.bestCustomer = "not bob"
}
function overwriteBestCustomer(){
    window.bestCustomer = "maybe bob"
}
const leastFavoriteCustomer = "bob"; 
function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = 'not bob';
}