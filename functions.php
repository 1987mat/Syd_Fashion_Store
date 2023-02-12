<?php

  function loadScripts() {
    wp_register_style('style', get_template_directory_uri() . '/css/style.css');
    wp_enqueue_style('style');
    wp_enqueue_style('dashicons');
    wp_enqueue_script('main-js', get_theme_file_uri('/build/index.js'), array(), '1.0', true);

    // Make url relative for AJAX requests
    wp_localize_script('main-js', 'siteData', array(
      'root_url' => get_site_url(),
      'nonce' => wp_create_nonce('wp_rest')
    ));
  }

  add_action('wp_enqueue_scripts', 'loadScripts');


  function register_my_menus() {
    register_nav_menus(
      array(
        'header' => __( 'Menu Header' )
      )
    );
  }
  
  add_action( 'init', 'register_my_menus' );