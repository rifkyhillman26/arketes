function cetak_gambar(num) {
    console.log('--- panjang ---')
    for (var i = 1; i <= num; i++) {
        var tmp = ''
        for (var j = 1; j <= num; j++) {
            if (i == Math.floor(num / 2) + 1) {
                tmp += ' * '
            } else {
                if (j == 1 || j === num) {
                    tmp += ' * '
                } else {
                    tmp += ' = '
                }
            }
        }
        console.log(tmp)
    }
}

cetak_gambar(5)