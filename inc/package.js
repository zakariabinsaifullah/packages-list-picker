(function ($) {
	const $packages = $('.wp-block-ppb-packages-picker');

	if ($packages.length) {
		[...$packages].forEach(($package) => {
			const $packageList = $($package).find('.package-list');

			const $packageListOpener = $($package).find('.selected-package');

			// open package list
			$($packageListOpener).on('click', function () {
				$($package).find('.package-list-wrapper').addClass('active');
			});

			[...$packageList].forEach(($list) => {
				const listLabel = $($list).data('label');
				const listPrice = $($list).data('price');
				const listLink = $($list).data('link');

				$($list).on('click', function () {
					// change selected package label
					$($package)
						.find('.selected-package-item .package-label')
						.text(listLabel);
					// change selected package price
					$($package)
						.find('.selected-package-item .package-price')
						.text(listPrice);
					// change selected package link
					$($package).find('.package-btn').attr('href', listLink);
					// close package list
					$($package)
						.find('.package-list-wrapper')
						.removeClass('active');
				});
			});
		});
	}
})(jQuery);
