/**
 * WordPress dependencies
 */
import { useBlockProps, RichText } from '@wordpress/block-editor';
import { Fragment } from '@wordpress/element';

// import icons
import Icons from './icons';

/**
 * Save function
 */

export default function save({ attributes }) {
	const { uniqueId, packages, selectedPackage, btnLabel, features } =
		attributes;

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
				{features && features.length > 0 && (
					<ul className="features-list">
						{features.map((item, index) => {
							return (
								<li className="features-list-item" key={index}>
									{Icons[item.icon]}
									<RichText.Content
										tagName="span"
										className="features-list-item-text"
										value={item.text}
									/>
								</li>
							);
						})}
					</ul>
				)}
			</div>
		</div>
	);
}
