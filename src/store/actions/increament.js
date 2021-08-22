import {
INCREAMENT_REQUEST,
INCREAMENT_SUCESSS,
INCREAMENT_ERROR
}
from "../../config/types"

export const increamentRequest = (body, cb) => {
    console.log("body",body)
	return {
		type: INCREAMENT_REQUEST,
		body: { ...body },
		cb: cb || null
	};
};
export const increamentSuccess = data => {
    console.log("increament success",data)
	return {
		type: INCREAMENT_SUCESSS,
		payload: data
	};
};
export const increamentError = errorInfo => {
	return {
		type: INCREAMENT_ERROR,
		payload: errorInfo
	};
};