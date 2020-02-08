function cutRope(number)
{
    if(number < 2) {
        return 0
    }
    if(number === 2) {
        return 1
    }
    if(number === 3) {
        return 2
    }
    let arr = [0, 0, 1, 2], max = 0
    for(let i=4; i<=number; i++) {
        max = 0
        for(let j=1; j <= i/2; j++) {
            let res = arr[j] * arr[i - j]
            max = res > max ? res : max
            arr[i] = max
        }
    }
    return arr[number]
}