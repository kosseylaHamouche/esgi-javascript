function type_check_v1(param, type){
	if(typeof param === type) {
		return true;
	}
	else if (Array.isArray(param) && type ==='array'){
		return true;
	}
	else {
		return false;
	}
}
