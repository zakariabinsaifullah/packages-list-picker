import Icons from './icons';
import { Button, Popover } from '@wordpress/components';
import { useState } from '@wordpress/element';

const IconPicker = ({ icon, onChange }) => {
	const [showIconsPanel, setShowIconsPanel] = useState(false);

	return (
		<div className="ppb-icon-picker">
			<Button
				className="icon-picker__btn"
				onClick={() => setShowIconsPanel(true)}
			>
				{Icons[icon]}
			</Button>
			{showIconsPanel && (
				<Popover>
					<div className="ppb-icon-picker__panel">
						{Object.keys(Icons).map((selectedIcon, iconIndex) => {
							return (
								<button
									className={`icon-picker__btn ${
										icon === selectedIcon ? 'active' : ''
									}`}
									key={iconIndex}
									onClick={() => {
										onChange(selectedIcon);
										setShowIconsPanel(false);
									}}
								>
									{Icons[selectedIcon]}
								</button>
							);
						})}
					</div>
				</Popover>
			)}
		</div>
	);
};

export default IconPicker;
