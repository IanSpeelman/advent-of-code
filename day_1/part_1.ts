import { list1, list2 } from "./input_day_1";
const sortfunction = (a: number, b: number): number => a > b ? 1 : -1

// const list1 = [3, 4, 2, 1, 3, 3]
// const list2 = [4, 3, 5, 3, 9, 3]

const sorted1 = list1.sort(sortfunction)
const sorted2 = list2.sort(sortfunction)

let distance = 0;
let score = 0;

for (let i = 0; i < sorted1.length; i++) {
    distance += Math.abs(sorted1[i] - sorted2[i])
    score += sorted1[i] * sorted2.filter((value) => value === sorted1[i]).length
}
// expect 11 on test data
console.log(distance)
// expect 31 on test data
console.log(score)
