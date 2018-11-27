function type_check_v1(param, type){
	if(typeof param === "number" && typeof type === "number") {
		return true;
	}
	else if(typeof param === "string" && typeof type === "string") {
		return true;
	}
	else if(typeof param === "number" && typeof type === "number") {
		return true;
	}
	else if(typeof param === "boolean" && typeof type === "boolean") {
		return true;
	}
	else if(typeof param === "object" && param != null && typeof type === "object") {
		return true;
	}
	else {
		return false;
	}
}
