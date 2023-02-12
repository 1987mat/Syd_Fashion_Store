<?php
  get_header();
?>

<main>
  <section class="hero">
    <div class="heading">
      <h4>Get Inspired</h4>
      <h1>GLAMOUR ICON</h1>
      <a href="<?php echo site_url('/shop');?>" aria-label="shop">SHOP NOW</a>
    </div>
  </section>
  </div>
  <section class="product-slider">slider here</section>
  <section class="social">
    <h2>JOIN THE COMMUNITY</h2>
    <hr>
    <div class="social_images">
      <img src=<?php echo get_template_directory_uri() . '/assets/feed1.jpg';?> alt="feed1">
      <img src=<?php echo get_template_directory_uri() . '/assets/feed2.jpg';?> alt="feed2">
      <img src=<?php echo get_template_directory_uri() . '/assets/feed3.jpg';?> alt="feed3">
    </div>
  </section>
</main>

<?php
  get_footer();
