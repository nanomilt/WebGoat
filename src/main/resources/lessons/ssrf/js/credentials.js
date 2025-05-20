function submit_secret_credentials() {
    const xhttp = new XMLHttpRequest();
    xhttp.open('POST', '#attack/307/100', true);
	//sending the request is obfuscated, to descourage js reading
	const _0xb7f9=["CaptainJack","BlackPearl","stringify","send"];
    xhttp[_0xb7f9[3]](JSON[_0xb7f9[2]]({username:_0xb7f9[0],password:_0xb7f9[1]}));
}