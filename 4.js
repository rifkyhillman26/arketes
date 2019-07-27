function count_vowels(string) {
    var isi = []
    var vokal = "aiueoAIUEO"

    for (var i = 0; i < string.length; i++) {
        if (vokal.includes(string[i])) {
            isi = isi + string[i]
        }
    }
    return isi.length
}

console.log(count_vowels("progammer"));
console.log(count_vowels("hmm.."));