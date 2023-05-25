/**
 * WordPress dependencies
 */
import { useBlockProps, RichText } from '@wordpress/block-editor';
import { Fragment } from '@wordpress/element';

/**
 * Save function
 */

export default function save({ attributes }) {
	const {
		uniqueId,
		blockStyle,
		packages,
		selectedPackage,
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

	// Block Props
	const blockProps = useBlockProps.save({
		className: uniqueId,
	});

	return (
		<div {...blockProps}>
			<div className="package-wrapper">
				<div className="package-btn-group">
					<button className="selected-package">
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
				<div className="package-list-wrapper">
					{packages && packages.length > 0 && (
						<Fragment>
							{packages.map((item, index) => {
								return (
									<li
										className="package-list"
										key={index}
										data-label={item.label}
										data-price={item.price}
										data-link={item.link}
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
			</div>
			<div className="features-list-wrapper">
				<li>Feature #1</li>
				<li>Feature #2</li>
				<li>Feature #3</li>
			</div>
		</div>
	);
}
