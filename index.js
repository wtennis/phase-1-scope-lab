var customerName = 'bob';

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
    console.log(customerName);
}

function setBestCustomer() {
    bestCustomer = 'not bob';
}

function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
}

const leastFavoriteCustomer = "Zeek";
function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = "Joe";
}