// function
function removeDuplicate(names) {
    let newNames = [];
    for (const element of names) {
        if (newNames.indexOf(element) == -1) {
            newNames.push(element);
        }
    }
    return newNames;
}


const names = ['abul', 'babul', 'cabul', 'dabul', 'ebul',
    'fabul', 'ebul', 'fabul', 'abul', 'gabul', 'habul', 'dabul'];
console.log(removeDuplicate(names));