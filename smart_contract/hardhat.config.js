// https://eth-ropsten.alchemyapi.io/v2/jD53_c1aasPNlxzAU3tF_Vz9aAxB_Zzm

require("@nomiclabs/hardhat-waffle");

module.exports = {
	solidity: "0.8.0",
	networks: {
		ropsten: {
			url: "https://eth-ropsten.alchemyapi.io/v2/jD53_c1aasPNlxzAU3tF_Vz9aAxB_Zzm",
			accounts: [
				"2c56f3cdedac64da3b70834102a95f3d86e396f1a1ff8b4540b2f06e490d982d",
			],
		},
	},
};
