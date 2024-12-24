const fs = require('fs')

global.creator = 'DedeSann'// yourname
global.MONGO_DB_URI = "mongodb+srv://jagaakun21:yCfFLm6v1N5YjoKe@cluster0.o3tea.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0" //database mongodb 
global.ACTIVATION_TOKEN_SECRET = "SannGanteng" //isi apa aja bebas
global.your_email = "asep5673456@gmail.com" //email
global.email_password = "ywcn viyf wngn exsg" //application password email
global.limitCount = 10000
global.YUOR_PORT = 5000
global.loghandler = {
	noapikey:{
		status: 403,
        message: 'Input parameter apikey',
        creator: `${creator}`,
        result: "error"
    },
    error: {
        status: 503,
        message: 'Service Unavaible, Sedang dalam perbaikan',
        creator: `${creator}`
    },
    apikey: {
    	status: 403,
    	message: 'Forbiden, Invalid apikey',
    	creator: `${creator}`
    },
    noturl: {
    	status: 403,
    	message: 'Forbiden, Invlid url, masukkan parameter url',
    	creator: `${creator}`,
    }
}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
	delete require.cache[file]
	require(file)
})
