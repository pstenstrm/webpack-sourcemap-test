import Promise from 'bluebird'

export default async () => {
	console.log('func');
	await new Promise((resolve, reject) => reject('string'));
}
