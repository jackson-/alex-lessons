var   a = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]
var less = []
var more = []

for (i = 0; i < a.length; i++)
    if (a[i] < 5) {
        less.push(a[i])
    }else {
        more.push(a[i])
    }console.log(less, more)