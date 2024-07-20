// Code your solution here
function findMatching(drivers, nameToMatch) {
    return drivers.filter(driverName => {
        return driverName.toUpperCase() === nameToMatch.toUpperCase();
    })
}

function fuzzyMatch(driverNames, startsWithString) {
    return driverNames.filter(driverName => {
        return driverName.startsWith(startsWithString);
    })
}

function matchName(drivers, name){
    return drivers.filter(driver => {
        return driver.name === name;
        })
}

function myFilter(arrayOfItems, callBackFunc) {
    const filteredItemsToReturn = [];

    for(item of arrayOfItems){
        if(callBackFunc(item) === true) {
            filteredItemsToReturn.push(item);
        };
    }

    return filteredItemsToReturn;
}

const names = ["Alice", "Alex", "Bob"];
const filterNames = myFilter(names, (item) => {
    return item.startsWith("Al")
});