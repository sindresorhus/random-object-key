export default function randomObjectKey(object) {
	const keys = Object.keys(object);
	return keys[Math.floor(Math.random() * keys.length)];
}
