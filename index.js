const app = "I don't do much.";
const token = "81c96bf385beafd7530f3b3cca18fd3c30e4fc57"
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));