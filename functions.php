<?php

  function loadScripts() {
    wp_register_style('style', get_template_directory_uri() . '/css/style.css');
    wp_enqueue_style('style');
    wp_enqueue_style('dashicons');
    wp_enqueue_script('main-js', get_theme_file_uri('/build/index.js'), array(), '1.0', true);
  }

  add_action('wp_enqueue_scripts', 'loadScripts');
  function mytheme_add_woocommerce_support() {
    add_theme_support('woocommerce');
  }
  
  // Add WooCommerce support
  add_action( 'after_setup_theme', 'mytheme_add_woocommerce_support' );


// // Override Woocommerce CSS
// add_filter( 'woocommerce_enqueue_styles', '__return_false' );

  function register_my_menus() {
    register_nav_menus(
      array(
        'header' => __( 'Menu Header' )
      )
    );
  }
  
  add_action( 'init', 'register_my_menus' );

function get_breadcrumb() {

  echo '<a href="'.home_url().'" rel="nofollow" class="breadcrumb-link">Home</a>';

  if (is_category() || is_single()) {
      echo "&nbsp;&nbsp;&#187;&nbsp;&nbsp;";
      the_category(' &#187; ');
      if (is_single()) {
        echo " &nbsp;&nbsp;&#187;&nbsp;&nbsp; ";
        the_title();
      }
  } else if (is_page()) {
    echo "&nbsp;&nbsp;&#187;&nbsp;&nbsp;";
    echo the_title();
  } else if (is_search()) {
    echo "&nbsp;&nbsp;&#187;&nbsp;&nbsp;Search Results for... ";
    echo '"<em>';
    echo the_search_query();
    echo '</em>"';
  }
}


