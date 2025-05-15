function submit_secret_credentials() {
  const xhttp = new XMLHttpRequest();
  xhttp.open('POST', 'InsecureLogin/login', true);
  //sending the request is obfuscated, to descourage js reading
  const _0xb7f9=['CaptainJack','BlackPearl','stringify','send'];xhttp[_0xb7f9[3]](JSON[_0xb7f9[2]]({username:_0xb7f9[0],password:_0xb7f9[1]}));
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState === 4 && xhttp.status === 200) {
      console.log(xhttp.responseText);
    }
  };
}