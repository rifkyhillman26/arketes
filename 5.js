function sort_array(data) {
    var urut1 = data.sort(function (a, b) {
        return a.length > b.length
    })

    var tampung = []

    for (var i = 0; i < urut1.length; i++) {
        tampung.push(urut1[i].sort())
    }
    return tampung
}


var data = [
    ['a', 'c', 'b', 'e', 'd'],
    ['g', 'e', 'f']
]

var datalain = [
    ['g', 'h', 'i', 'j'],
    ['a', 'c', 'b', 'e', 'd'],
    ['g', 'e', 'f']
]

console.log(sort_array(data))
console.log(sort_array(datalain))