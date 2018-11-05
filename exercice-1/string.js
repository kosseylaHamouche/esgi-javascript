function ucfirst(string) {
	return string.charAt(0).toUppercase()+string.slice(1);
}

function capitalize(string) {
	let str = string.slit(" ");
	let strf = "";

	for (let test in str) {
		strf += str[test].charAt(0).toUpperCase()+str[test].slice(1)+" ";
	}
	return strf;
}

function camelCase(string) {
	let str = string.slit(" ");
	let strf = "";

	for (let test in str) {
		strf += str[test].charAt(0).toUpperCase()+str[test].slice(1);
	}
	return strf;
}

function snake_case(string) {
	return (string.split(' ').join('_'));
}

function leet(string) {
	
}