var alist = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]
var blist = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
var found = {}
var common = []

for (i = 0; i < alist.length; i++) {
    found[alist[i]] = true
}

for (j = 0; j < blist.length; j++) {
    if(found.hasOwnProperty([blist[j]])){
        common.push(blist[j])
    }
}

console.log(common)