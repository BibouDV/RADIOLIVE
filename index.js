const Client = require('./src/client.js')
const client = new Client({ fetchAllMembers: true, disableEveryone: true })

client.login("NjY3MTQ0NTcyNTEzNTUwMzM2.Xi1mXw.KYKn2MFwNiLvs8CDqhDQxi1U5IE").catch(e => client.log('error', e))
