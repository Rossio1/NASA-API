/ When they click submit button get value from input
// const dateUi = document.querySelector('input');
// const clickUi = document.querySelector('button');
const clickUi = document.querySelector('button');


function nasa() {
  // Create variables for input and image elements
  const dateUi = document.querySelector('input').value;
  const nasaPic = document.querySelector('.pic');

  // Fetch data from api
  fetch(`https://api.nasa.gov/planetary/apod?date=${dateUi}&api_key=Qn0t2Ke09kRXOzHfiAARKgdJiuebukbaA6NsEpZG
`)
    .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
    .then(response => {
      nasaPic.src = response.url;
      console.log(response);

      // response.date.forEach(el => {

      // })
      // setInterval(() => {
      //   document.querySelector("img").src = imgArr[count]
      //   count++
      // }, 2000)
    })
    .catch(err => {
      console.log(`error ${err}`)
      alert("sorry, there are no results for your search")
    });

};

clickUi.addEventListener('click', nasa, false);
