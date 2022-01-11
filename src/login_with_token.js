/* 
  @Info: This is for School Research! (Discord Login with Persnal Token)
  > Use ONLY for your OWN Token on Research Stuff! Do not Harm anybody with that Method!
*/

let token = "";

function login(token) {
    setInterval(() => {
      document.body.appendChild(document.createElement `iframe`).contentWindow.localStorage.token = `"${token}"`
    }, 50);
    setTimeout(() => {
      location.reload();
    }, 2500);
  }

login(token);