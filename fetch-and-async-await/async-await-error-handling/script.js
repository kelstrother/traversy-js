const getUsers = async () => {
  try {
    // const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const res = await fetch('http://httpstat.us/404');
    if (!res.ok) {
      throw new Error('Request Failed.')
    }
    const data = await res.text();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
// getUsers()

//! can catch the error after you call the function but its not preffered
const getPosts = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!res.ok) {
      throw new Error('Request Failed.')
    }
    const data = await res.json();
    console.log(data);
  } 
getPosts().catch(error => console.log(error))