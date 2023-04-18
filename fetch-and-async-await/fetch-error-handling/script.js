// fetch('http://httpstat.us/200').then((res) => {
//   return res
// })
// .then(() => {
//     console.log('success')
// });

//~ catch() runs on network error, but not on status code errors
// fetch('http://hello.us/200').then((res) => {
//   return res
// })
// .then(() => {
//     console.log('success')
// })
// .catch((error) => {
//   console.log(error);
// })

//! manually checking for status errors

//? test with response.ok
// fetch('http://httpstat.us/404').then((response) => {
//   if (!response.ok) {
//     throw new Error('Request Failed.')
//   }
//   return response
// })
// .then(() => {
//     console.log('success')
// })
// .catch((error) => {
//   console.log(error);
// })

//? check for specific code
fetch("http://httpstat.us/404")
  .then((response) => {
    if (response.status === 404) {
      throw new Error("Not Found");
    } else if (response.status === 500) {
      throw new Error("Server Error");
    } else if (response.status !== 200) {
      throw new Error("Request Failed");
    }
    return response;
  })
  .then(() => {
    console.log("success");
  })
  .catch((error) => {
    console.log(error);
  });
