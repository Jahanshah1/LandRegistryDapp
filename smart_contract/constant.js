const abi = [
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_titleNumber",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "_owner",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "_location",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_registrationDate",
				"type": "uint256"
			}
		],
		"name": "registerLandTitle",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_titleNumber",
				"type": "uint256"
			}
		],
		"name": "verifyLandTitle",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_titleNumber",
				"type": "uint256"
			}
		],
		"name": "isLandTitleVerified",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]

const contract_address = '0xe7B0D21316F5876568Ea214e16da1937D19b2f7b'

