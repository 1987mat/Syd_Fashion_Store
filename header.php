<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Glamour Icon</title>
  <?php wp_head();?>
</head>
<body <?php body_class();?>>
  <header class="site_header">
    <div class="header_wrapper">
      <div class="hamburger">
        <div></div>
      </div>
      <div class="menu_wrapper">
        <?php 
          wp_nav_menu( array( 
            'theme_location' => 'header'));
        ?>
        <div class="social_mobile_nav">
          <a href="" class="instagram"><span class="dashicons dashicons-instagram"></span></a>
          <a href="" class="facebook"><span class="dashicons dashicons-facebook"></span></a>
          <a href="" class="twitter"><span class="dashicons dashicons-twitter"></span></a>
          <a href="" class="youtube"><span class="dashicons dashicons-youtube"></span></a>
        </div>
      </div>
      <div class="logo-social_wrapper">
        <a class="logo_link" href="<?php echo site_url('');?>" aria-label="homepage"><img src=<?php echo get_template_directory_uri() . '/images/logo.png';?> alt="logo"></a>
        <!-- <div class="social_header">
          <a href="" class="instagram"><span class="dashicons dashicons-instagram"></span></a>
          <a href="" class="facebook"><span class="dashicons dashicons-facebook"></span></a>
          <a href="" class="twitter"><span class="dashicons dashicons-twitter"></span></a>
          <a href="" class="youtube"><span class="dashicons dashicons-youtube"></span></a>
        </div> -->
      </div>
      <div class="login-wrapper">
        <a href=<?php echo site_url('/my-account');?> aria-label="my-account"><span class="dashicons dashicons-admin-users"></span></a>
      </div>
    </div>
  </header>
  
