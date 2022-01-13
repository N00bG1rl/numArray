const numbers = ['5688848', '34593834', '4902348020', '56578922']
// Collect numbers that has 3 or 4 same digits
const resultArr = []

numbers.map(num => {
  const count = num.split('').reduce((prev, curr) => {
    prev[curr] = (prev[curr] || 0) + 1

    return prev
  }, {})

  for (let value of Object.values(count)) {
    if ([3, 4].includes(value)) {
      resultArr.push(num)
    }
  }
})

console.log(resultArr) // => [ '5688848', '34593834', '4902348020' ]
