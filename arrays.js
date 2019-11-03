var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(chocolateBars, candy){
return [candy, ... chocolateBars];
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, candy){
chocolateBars.unshift(candy);
return chocolateBars;
}

function addElementToEndOfArray(chocolateBars, candy){
return [...chocolateBars, candy]
}

function destructivelyAddElementToEndOfArray(chocolateBars, candy){
chocolateBars.push(candy);
return chocolateBars;
}

function accessElementInArray(chocolateBars, index){
return chocolateBars[index];
}

function destructivelyRemoveElementFromBeginningOfArray(chocolateBars, candy){
chocolateBars.shift(candy);
}

function removeElementFromBeginningOfArray(chocolateBars){
chocolateBars.slice(1);
}
