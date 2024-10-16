function sumOfSeries(n){
    if(n == 0){
        return 0
    }
    return n+sumOfSeries(n-1)
}

var f = sumOfSeries(4)
console.log(f)