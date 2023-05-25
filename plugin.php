<?php
/**
 * Plugin Name:       Packages List Picker 
 * Description:       A custom Gutenberg Block to show product packages picker in Gutenberg Editor.
 * Requires at least: 5.7
 * Requires PHP:      7.0
 * Version:           1.0.0
 * Author:            Zakaria Binsaifullah
 * Author URI:        https://makegutenblock.com
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:      packages-picker
 *
 * @package           @wordpress/create-block 
 */

 /**
  * @package Zero Configuration with @wordpress/create-block
  *  [boilerplate] && [BOILERPLATE] ===> Prefix
  */

// Stop Direct Access 
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Blocks Final Class
 */

final class PPB_BLOCKS_CLASS {
	public function __construct() {

		// define constants
		$this->define_constants();

		// block initialization
		add_action( 'init', [ $this, 'blocks_init' ] );

		// register blocks style
		add_filter( 'render_block', [ $this, 'generate_inline_style_on_render_block' ], 10, 2 );

		// enqueue frontend scripts
		add_action( 'enqueue_block_assets' , [ $this, 'enqueue_frontend_scripts' ] );
	}



	/**
	 * Initialize the plugin
	 */
	public static function init(){
		static $instance = false; 
		if( ! $instance ) {
			$instance = new self();
		}
		return $instance;
	}

	/**
	 * Define the plugin constants
	 */
	private function define_constants() {
		define( 'PPB_VERSION', '1.0.0' );
		define( 'PPB_URL', plugin_dir_url( __FILE__ ) );	
	}

	/**
	 * Enqueue Frontend Scripts
	 */
	public function enqueue_frontend_scripts() {
		if( ! is_admin() ) {
			wp_enqueue_script(  'ppb-blocks-frontend-js', PPB_URL . 'inc/package.js', array( 'jquery' ), PPB_VERSION, true );
		}
	}

	/**
	 * Blocks Registration 
	 */
	public function register_block( $name, $options = array() ) {
		register_block_type( __DIR__ . '/build/blocks/' . $name, $options );
	 }

	/**
	 * Blocks Initialization
	*/
	public function blocks_init() {
		$blocksList = [
			'packages-picker',
		];
		
		// register blocks
		if( ! empty( $blocksList ) ) {
			foreach( $blocksList as $block ) {
				$this->register_block( $block );
			}
		}
	}

	/**
     * Register Inline Style
     */
    function generate_inline_style_on_render_block($block_content, $block ) {

        if (isset($block['blockName']) && str_contains($block['blockName'], 'boilerplate/')) {
            if (isset($block['attrs']['blockStyle'])) {

                $style = $block['attrs']['blockStyle'];
                $handle = isset( $block['attrs']['uniqueId'] ) ? $block['attrs']['uniqueId'] : 'boilerplate-blocks';

                // convert style array to string
                if ( is_array($style) ) {
                    $style = implode(' ', $style);
                }

                // minify style to remove extra space
                $style = preg_replace( '/\s+/', ' ', $style );

                wp_register_style(
                    $handle,
                    false
                );
                wp_enqueue_style( $handle );
                wp_add_inline_style( $handle, $style );

            }
        }
        return $block_content;
    }

}

/**
 * Kickoff
*/

PPB_BLOCKS_CLASS::init();
