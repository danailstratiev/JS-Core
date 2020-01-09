function sortByTwoCriteria(arr) {
    
    arr.sort((a, b) => {
        return a.length - b.length || a.localeCompare(b);
    }).forEach(x => console.log(x));

    
}

sortByTwoCriteria(['alpha', 
'beta', 
'gamma']
);