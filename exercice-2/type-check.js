function type_check_v1(param, type){
	if(typeof param === "number" && type === "number") {
		return true;
	}
	else if(typeof param === "string" && type === "string") {
		return true;
	}
	else if(typeof param === "number" && type === "number") {
		return true;
	}
	else if(typeof param === "boolean" && type === "boolean") {
		return true;
	}
	else if(typeof param === "object" && param != null && type === "object") {
		return true;
	}
	else if(typeof param === "object" && type === "object") {
		return true;
	}
	else {
		return false;
	}
}
