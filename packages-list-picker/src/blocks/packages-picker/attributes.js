const attributes = {
	uniqueID: {
		type: 'string',
	},
	blockStyle: {
		type: 'object',
	},
	packages: {
		type: 'array',
		default: [
			{
				label: 'Package 1',
				price: '$100',
			},
		],
	},
	selectedPackage: {
		type: 'number',
		default: 0,
	},
	btnLabel: {
		type: 'string',
		default: 'Buy Now',
	},
	features: {
		type: 'array',
		default: [
			{
				text: 'Feature 1',
				icon: 'shield',
			},
		],
	},
	containerBgColor: {
		type: 'string',
	},
	containerBorderRadius: {
		type: 'number',
	},
	packageListLabelColor: {
		type: 'string',
	},
	packageListPriceColor: {
		type: 'string',
	},
	btnColor: {
		type: 'string',
	},
	btnBgColor: {
		type: 'string',
	},
	iconColor: {
		type: 'string',
	},
	featureListColor: {
		type: 'string',
	},
};

export default attributes;
