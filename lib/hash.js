const crypto = require('crypto')
const fs = require('fs')
const { promisify } = require('util')
const statAsync = promisify(fs.stat)

module.exports.computeHash = async(filePath) => {
	try{	
		const buffer = new Buffer(65536*2)		
		const fileStats = await statAsync(filePath)
		fileSize = fileStats.size
		const fileId = fs.openSync(filePath,'r')

		fs.readSync(fileId, buffer, 0, 65536, 0)
		fs.readSync(fileId, buffer, 65536, 65536, fileSize-65536)
		return crypto.createHash('md5').update(buffer).digest('hex')
	} catch (err) {
		return null
		console.log("Error while computing hash : ", err)
	}
}


