// @flow

export default (inputString /*: string */) /*: number */ => {
	return parseInt(
	inputString.split("").reduce(
		(acc /*: string */, letter /*: string */) /*: string */ => {
		const letterCode = letter.toLowerCase().charCodeAt(0) - 97 + 1;
		return acc + letterCode.toString();
		},
		"",
	),
	);
}