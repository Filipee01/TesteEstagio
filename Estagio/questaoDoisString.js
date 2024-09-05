let word = "paralelogramo"

function verificaString(word) {
    let count = 0;
    for(i = 0; i < word.length; i++) {
        if(word[i] === "a" || word[i] === "A"){
            count++
        }
    }
    if(count > 0) {
        console.log(`A palavra tem a letra 'a' e ela aparece ${count} vezes`)
    }else {
        console.log("A palavra não tem a letra 'a'")
    }
}

verificaString(word)