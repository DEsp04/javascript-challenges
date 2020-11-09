const mostRecurrent = (set) => {
  let countMe = {};

  set.forEach((item) => {
    countMe.hasOwnProperty(item) ? countMe[item]++ : countMe[item] = 1;
  })
  console.log(countMe);
}
mostRecurrent([1, 2, 3, 4, 5]);


module.exports = mostRecurrent
