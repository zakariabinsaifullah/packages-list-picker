/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { InspectorControls, PanelColorSettings } = wp.blockEditor;
const { PanelBody, TextControl, BaseControl, Button, RangeControl } =
	wp.components;
const { Fragment } = wp.element;

const Inspector = ({ attributes, setAttributes }) => {
	const {
		packages,
		btnLabel,
		containerBgColor,
		containerBorderRadius,
		packageListLabelColor,
		packageListPriceColor,
		btnColor,
		btnBgColor,
		iconColor,
		featureListColor,
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
				title={__('Container Style', 'packages-picker')}
				initialOpen={false}
			>
				<RangeControl
					label={__('Border Radius', 'packages-picker')}
					value={containerBorderRadius}
					onChange={(value) =>
						setAttributes({ containerBorderRadius: value })
					}
					min={0}
					max={100}
				/>
			</PanelBody>
			<PanelColorSettings
				title={__('Container Colors', 'packages-picker')}
				initialOpen={false}
				colorSettings={[
					{
						value: containerBgColor,
						onChange: (value) =>
							setAttributes({ containerBgColor: value }),
						label: __('Background Color', 'packages-picker'),
					},
				]}
			/>
			<PanelColorSettings
				title={__('Packages Colors', 'packages-picker')}
				initialOpen={false}
				colorSettings={[
					{
						value: packageListLabelColor,
						onChange: (value) =>
							setAttributes({ packageListLabelColor: value }),
						label: __('Label Color', 'packages-picker'),
					},
					{
						value: packageListPriceColor,
						onChange: (value) =>
							setAttributes({ packageListPriceColor: value }),
						label: __('Price Color', 'packages-picker'),
					},
				]}
			/>
			<PanelColorSettings
				title={__('Button Colors', 'packages-picker')}
				initialOpen={false}
				colorSettings={[
					{
						value: btnColor,
						onChange: (value) => setAttributes({ btnColor: value }),
						label: __('Text Color', 'packages-picker'),
					},
					{
						value: btnBgColor,
						onChange: (value) =>
							setAttributes({ btnBgColor: value }),
						label: __('Background Color', 'packages-picker'),
					},
				]}
			/>
			<PanelColorSettings
				title={__('Features Colors', 'packages-picker')}
				initialOpen={false}
				colorSettings={[
					{
						value: iconColor,
						onChange: (value) =>
							setAttributes({ iconColor: value }),
						label: __('Icon Color', 'packages-picker'),
					},
					{
						value: featureListColor,
						onChange: (value) =>
							setAttributes({ featureListColor: value }),
						label: __('List Color', 'packages-picker'),
					},
				]}
			/>
		</InspectorControls>
	);
};

export default Inspector;
