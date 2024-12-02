import { data } from "./data";

function isValidStep(x: number, y: number): boolean {
    const step = Math.abs(x - y)
    if (step > 0 && step < 4) {
        return true
    }
    return false
}

function increasing(x: number, y: number): boolean {
    return x < y ? true : false
}

let total = 0

for (let i = 0; i < data.length; i++) {
    let temp = data[i][0]
    const increase = increasing(data[i][3], data[i][4])
    let valid = true
    let dampenerUsed = false

    for (let j = 1; j < data[i].length; j++) {
        const element = data[i][j];

        if (!isValidStep(element, temp)) {
            if (!dampenerUsed) {
                dampenerUsed = true
                temp = element
                continue
            }
            valid = false
        }
        if (increase !== increasing(temp, element)) {
            if (!dampenerUsed) {
                dampenerUsed = true
                temp = element
                continue
            }
            valid = false
        }

        temp = element
    }
    if (valid) {
        total++
    }


}
console.log(total)
