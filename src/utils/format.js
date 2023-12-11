export const checkType = (val) => Object.prototype.toString.call(val).slice(8, -1) // 返回数据类型，用于判断
export function purifyObject(obj) {
	const res = {}
	if (obj === null || obj === undefined) {
		return res
	}
	for (const key in obj) {
		if (checkType(obj[key]) === 'Object') {
			res[key] = purifyObject(obj[key])
		} else if (obj[key] !== null && obj[key] !== undefined) {
			res[key] = obj[key]
		}
	}
	return res
}
export function purifyObjectPost(obj) {
	const res = {}
	if (obj === null || obj === undefined) {
		return res
	}
	for (const key in obj) {
		if (checkType(obj[key]) === 'Object') {
			res[key] = purifyObject(obj[key])
		} else if (obj[key] !== null && obj[key] !== undefined) {
			res[key] = obj[key]
		}
	}
	return res
}


