/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { InspectorControls } = wp.blockEditor;
const { PanelBody, TextControl, BaseControl, ColorPalette, Button } =
	wp.components;
const { Fragment } = wp.element;

const Inspector = ({ attributes, setAttributes }) => {
	const {
		packages,
		btnLabel,
		features,
		containerBgColor,
		containerBorder,
		containerBorderRadius,
		enableContainerBoxShadow,
		packagesBgColor,
		packageListLabelColor,
		packageListPriceColor,
		btnColor,
		btnBgColor,
	} = attributes;

	return (
		<InspectorControls>
			<PanelBody
				title={__('Packages List', 'packages-picker')}
				initialOpen={false}
			>
				<BaseControl>
					<div className="packages-list-wrapper">
						{packages && packages.length > 0 && (
							<Fragment>
								{packages.map((item, index) => {
									return (
										<div
											className="single-list"
											key={index}
										>
											<TextControl
												label={__(
													'Package Name',
													'packages-picker'
												)}
												value={item.label}
												onChange={(value) => {
													const newPackages = [
														...packages,
													];
													newPackages[index].label =
														value;
													setAttributes({
														packages: newPackages,
													});
												}}
												placeholder={__(
													'Label…',
													'packages-picker'
												)}
											/>
											<TextControl
												label={__(
													'Package Price',
													'packages-picker'
												)}
												value={item.price}
												onChange={(value) => {
													const newPackages = [
														...packages,
													];
													newPackages[index].price =
														value;
													setAttributes({
														packages: newPackages,
													});
												}}
												placeholder={__(
													'Price…',
													'packages-picker'
												)}
											/>
											<TextControl
												label={__(
													'Package Link',
													'packages-picker'
												)}
												value={item.link}
												onChange={(value) => {
													const newPackages = [
														...packages,
													];
													newPackages[index].link =
														value;
													setAttributes({
														packages: newPackages,
													});
												}}
												placeholder={__(
													'Link…',
													'packages-picker'
												)}
											/>
											<Button
												className="remove-btn"
												onClick={() => {
													const newPackages = [
														...packages,
													];
													newPackages.splice(
														index,
														1
													);
													setAttributes({
														packages: newPackages,
													});
												}}
												icon="trash"
											/>
										</div>
									);
								})}
							</Fragment>
						)}
					</div>
				</BaseControl>
				<Button
					variant="primary"
					onClick={() => {
						const newPackages = [...packages];
						newPackages.push({
							label: 'Package Name',
							price: '$50',
							link: '#',
						});
						setAttributes({ packages: newPackages });
					}}
					icon="insert"
				>
					{__('Add Package', 'packages-picker')}
				</Button>
			</PanelBody>
			<PanelBody
				title={__('Button', 'packages-picker')}
				initialOpen={false}
			>
				<TextControl
					label={__('Button Label', 'packages-picker')}
					value={btnLabel}
					onChange={(value) => {
						setAttributes({ btnLabel: value });
					}}
					placeholder={__('Label…', 'packages-picker')}
				/>
			</PanelBody>
			<PanelBody
				title={__('Features', 'packages-picker')}
				initialOpen={false}
			>
				SFSDF
			</PanelBody>
		</InspectorControls>
	);
};

export default Inspector;
