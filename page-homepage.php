<?php
  get_header();
?>

<main>
  <section class="hero">
    <div class="heading" data-animate>
      <h4>Get Inspired</h4>
      <h1>GLAMOUR ICON</h1>
      <a href="<?php echo site_url('/shop');?>" aria-label="shop">SHOP NOW</a>
    </div>
  </section>
  <section class="shop_sale_section">
    <a href="<?php echo site_url('/shop');?>" aria-label="shop" class="card-link" data-animate>
      <div>
        <img src=<?php echo get_template_directory_uri() . '/images/collection.jpg';?> alt="social-media-photo">
      <span>NEW COLLECTION</span>
      </div>

    </a>
    <a href="<?php echo site_url('/sale-page');?>" aria-label="sale" class="card-link" data-animate>
      <div>
        <img src=<?php echo get_template_directory_uri() . '/images/sale.jpg';?> alt="social-media-photo">
        <span>SALE</span>
      </div>
    </a>
  </section>
  <section class="social">
    <h2 data-animate>JOIN THE COMMUNITY</h2>
    <hr data-animate>
    <div class="social-images" data-animate>
      <img src=<?php echo get_template_directory_uri() . '/images/feed1_optimized.jpg';?> alt="social-media-photo">
      <img src=<?php echo get_template_directory_uri() . '/images/feed2.jpg';?> alt="social-media-photo2">
      <img src=<?php echo get_template_directory_uri() . '/images/feed3_optimized.jpg';?> alt="social-media-photo3">
      <img src=<?php echo get_template_directory_uri() . '/images/feed4.jpg';?> alt="social-media-photo4">
    </div>
  </section>
</main>

<?php
  get_footer();
