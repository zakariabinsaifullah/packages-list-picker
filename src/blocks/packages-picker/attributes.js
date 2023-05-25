const attributes = {
	uniqueID: {
		type: 'string',
	},
	blockStyle: {
		type: 'object',
	},
	packages: {
		type: 'array',
		default: [],
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
		default: [],
	},
	containerBgColor: {
		type: 'string',
	},
	containerBorder: {
		type: 'object',
	},
	containerBorderRadius: {
		type: 'number',
	},
	enableContainerBoxShadow: {
		type: 'boolean',
		default: true,
	},
	packagesBgColor: {
		type: 'string',
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
};

export default attributes;
