
const year = 2024;

if (year % 400 == 0) {
    console.log(year, "is a leap year")
} else if (year % 100 == 0) {
    console.log(year, "is not a Leap Year")
} else if (year % 4 == 0) {
    console.log(year, "is a Leap Year")

} else {
    console.log(year, "is not a leap year")
}