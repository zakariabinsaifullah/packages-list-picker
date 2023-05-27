/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
// eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
/**
 * WordPress dependencies
 */
import { useBlockProps, RichText } from '@wordpress/block-editor';
const { Fragment, useEffect, useState } = wp.element;
import { __ } from '@wordpress/i18n';
import { Popover, Button } from '@wordpress/components';

// editor style
import './editor.scss';

/**
 * Internal dependencies
 */
import Inspector from './inspector';
import { softMinifyCssStrings } from '../../helper/softminify';

// icons
import IconPicker from './IconPicker';

/**
 * Edit function
 */

export default function Edit({ attributes, setAttributes, clientId }) {
	const {
		uniqueId,
		blockStyle,
		packages,
		selectedPackage,
		btnLabel,
		features,
		containerBgColor,
		containerBorderRadius,
		packageListLabelColor,
		packageListPriceColor,
		btnColor,
		btnBgColor,
		iconColor,
		featureListColor,
	} = attributes;

	// Unique ID
	useEffect(() => {
		if (!uniqueId) {
			setAttributes({
				uniqueId: 'ppb-' + clientId.slice(0, 8),
			});
		}
	}, []);

	// Block Props
	const blockProps = useBlockProps({
		className: uniqueId,
	});

	/**
	 * Block Styles
	 */
	const deskStyles = `
		.${uniqueId}.wp-block-ppb-packages-picker { 
			background-color: ${containerBgColor};
			border-radius: ${containerBorderRadius}px;
		}
		.${uniqueId}.wp-block-ppb-packages-picker .package-label {
			color: ${packageListLabelColor} !important;
		}
		.${uniqueId}.wp-block-ppb-packages-picker .package-price {
			color: ${packageListPriceColor} !important;
		}
		.${uniqueId}.wp-block-ppb-packages-picker .package-btn {
			color: ${btnColor} !important;
			background-color: ${btnBgColor} !important;
		}
		.${uniqueId}.wp-block-ppb-packages-picker .features-list-item svg {
			fill: ${iconColor} !important;
		}
		.${uniqueId}.wp-block-ppb-packages-picker .features-list-item {
			color: ${featureListColor} !important;
		}
	`;
	const tabStyles = ``;
	const mobStyles = ``;

	/**
	 * Block All Styles
	 */
	const blockStyleCss = `
		${deskStyles}
		@media (max-width: 1024px) and (min-width: 768px) {
			${tabStyles}
		}
		@media (max-width: 767px) {
			${mobStyles}
		}
	`;

	// Set Block Styles
	useEffect(() => {
		if (JSON.stringify(blockStyle) !== JSON.stringify(blockStyleCss)) {
			setAttributes({ blockStyle: blockStyleCss });
		}
	}, [attributes]);

	// Show Packages
	const [showPackages, setShowPackages] = useState(false);

	return (
		<Fragment>
			<style>{`${softMinifyCssStrings(blockStyleCss)}`}</style>
			<Inspector attributes={attributes} setAttributes={setAttributes} />
			<div {...blockProps}>
				<div className="package-wrapper">
					<div className="package-btn-group">
						<button
							className="selected-package"
							onClick={() => setShowPackages(true)}
						>
							{packages && packages.length > 0 && (
								<li className="selected-package-item">
									<span className="package-label">
										{packages &&
											packages[selectedPackage].label}
									</span>
									<span className="package-price">
										{packages &&
											packages[selectedPackage].price}
									</span>
								</li>
							)}
							{showPackages && (
								<Popover
									position="bottom center"
									onFocusOutside={() =>
										setShowPackages(false)
									}
									offset={5}
								>
									<div className="package-list-wrapper">
										{packages && packages.length > 0 && (
											<Fragment>
												{packages.map((item, index) => {
													return (
														<li
															className="package-list"
															key={index}
															onClick={() => {
																setAttributes({
																	selectedPackage:
																		index,
																});
																// set show package to false
																setShowPackages(
																	false
																);
															}}
														>
															<span className="package-label">
																{item.label}
															</span>
															<span className="package-price">
																{item.price}
															</span>
														</li>
													);
												})}
											</Fragment>
										)}
									</div>
								</Popover>
							)}
						</button>
						<a
							className="package-btn"
							href={
								packages &&
								packages.length > 0 &&
								packages[selectedPackage].link
							}
						>
							{btnLabel}
						</a>
					</div>
				</div>
				<div className="features-list-wrapper">
					{features && features.length > 0 && (
						<ul className="features-list">
							{features.map((item, index) => {
								return (
									<li
										className="features-list-item"
										key={index}
									>
										<IconPicker
											icon={item.icon}
											onChange={(value) => {
												const newFeatures = [
													...features,
												];
												newFeatures[index].icon = value;
												setAttributes({
													features: newFeatures,
												});
											}}
										/>
										<RichText
											tagName="span"
											className="features-list-item-text"
											value={item.text}
											onChange={(value) => {
												const newFeatures = [
													...features,
												];
												newFeatures[index].text = value;
												setAttributes({
													features: newFeatures,
												});
											}}
										/>
									</li>
								);
							})}
						</ul>
					)}
					<Button
						variant="primary"
						className="add-feature-btn"
						icon="insert"
						onClick={() => {
							const newFeatures = [...features];
							newFeatures.push({
								text: __('New Feature', 'packages-picker'),
								icon: 'shield',
							});
							setAttributes({ features: newFeatures });
						}}
					>
						{__('Add Feature', 'packages-picker')}
					</Button>
				</div>
			</div>
		</Fragment>
	);
}
