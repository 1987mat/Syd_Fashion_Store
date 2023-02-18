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


function add_search_modal() {
	echo 
  "<div class='search_wrapper'>
    <div class='search_input_field'>
      <input type='text' placeholder='Search...' class='search-input'>
      <span class='close-icon'>&#10006;</span>
    </div>
  </div>";
}

// Add a hidden search modal 
add_action( 'wp_footer', 'add_search_modal' );


function register_search() {
  register_rest_route('store/v1', '/search', [
    'methods'  => WP_REST_SERVER::READABLE,
    'callback' => 'search_results'
  ]);
}

function search_results( $data ) {
  $mainQuery = new WP_Query(array(
    'posts_per_page' => 10,
    'post_type' => 'product',
    'post_status' => 'publish',
    's' => sanitize_text_field($data['term'])
  ));

  $results = array();

  while ($mainQuery->have_posts()) {
    $mainQuery->the_post();

    array_push($results, array(
      'title' => get_the_title(),
      'url' => get_the_permalink(),
      'image' => get_the_post_thumbnail_url(0, 'landscape'),
      'price' => get_post_meta( get_the_ID(), '_regular_price', true)
    ));
  }

  return $results;
}

add_action('rest_api_init', 'register_search');

function get_breadcrumb() {

  echo '<a href="'.home_url().'" rel="nofollow" class="breadcrumb-link">Home</a>';

  if (is_category() || is_single()) {
      echo "&nbsp;&nbsp;&#187;&nbsp;&nbsp;";
      the_category(' &#187; ');
      if (is_single()) {
        echo " &nbsp;&nbsp;&#187;&nbsp;&nbsp; ";
        the_title();
      }
  } elseif (is_page()) {
    echo "&nbsp;&nbsp;&#187;&nbsp;&nbsp;";
    echo the_title();
  } elseif (is_search()) {
    echo "&nbsp;&nbsp;&#187;&nbsp;&nbsp;Search Results for... ";
    echo '"<em>';
    echo the_search_query();
    echo '</em>"';
  }
}


