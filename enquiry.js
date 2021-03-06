
const axios = require('axios')

axios({
	method: 'get',
	baseURL: 'https://sandboxapi.fsi.ng',
	url: '/sterling/TransferAPIs/api/Spay/InterbankNameEnquiry?',
	params: {
		  Referenceid: "01",
		  RequestType: "01",
		  Translocation: "01",
		  ToAccount: "0037514056",
		  destinationbankcode: "000001"
		},
	headers: {
		"Sandbox-Key": "53e88dec53ed1cc4125ea1b8c65f4712",
		"Ocp-Apim-Subscription-Key": "t",
		"Ocp-Apim-Trace": "true",
		"Appid": "69",
		"Content-Type": "application/json",
		"ipval": 0
		}
	})
	.then((response) => console.log(response.data))
	.catch((error) => console.log(error.data))