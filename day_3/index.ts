import { input } from "./data";

// const input = "xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))"

function formatString(string: string) {

    const data = string.match(/do\(\)|don\'t\(\)|mul\(\d{1,3},\d{1,3}\)/g)

    let out: (boolean | string[])[] = []
    if (data) {
        for (let i = 0; i < data.length; i++) {
            const tmp = data[i].match(/\d{1,3}/g)
            if (tmp) {
                out.push(tmp)
                continue
            }
            const doo = data[i].match(/do\(\)/g)
            const dont = data[i].match(/don\'t\(\)/g)
            if (doo) out.push(true)
            if (dont) out.push(false)
        }
    }
    return out
}
const values = formatString(input)

let total = 0
let enable = true

for (let i = 0; i < values.length; i++) {
    if (values[i] === true) {
        enable = true
        continue
    }
    if (values[i] === false) {
        enable = false
        continue
    }
    if (enable) {
        total += values[i][0] * values[i][1]
    }
}

console.log(total)
