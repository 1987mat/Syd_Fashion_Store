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
  <section class="product-slider">
    <h2>FIND YOUR STYLE</h2>
    <hr>
    <div class="carousel-container">
      <button class="prev-btn carousel-btn"><span class="dashicons dashicons-arrow-left-alt2"></span></button>
      <button class="next-btn carousel-btn"><span class="dashicons dashicons-arrow-right-alt2"></span></button>
      <div class="carousel-wrapper">
        <ul class="slider">
          <?php 
      
          $productQuery = new WP_Query(array(
            'posts_per_page' => 10,
            'post_type' => 'product',
            'order' => 'ASC'
          ));

          while ($productQuery->have_posts()) {
            $productQuery->the_post();
            ?>
            <li class="product-slide">
              <a href=<?php echo the_permalink(); ?> class="product-card">
                <?php echo the_post_thumbnail('medium', [ 'class' => 'product-image' ]);?>
                <div class="product-info">
                  <h3><?php echo the_title(); ?></h3>
                  <div class="price-wrapper">
                    <span>$<?php echo get_post_meta( get_the_ID(), '_regular_price', true); ?></span>
                  </div>
                </div>
              </a>
            </li>
            <?php
          }
          ?>
        </ul>
      </div>
    </div>
  </section>
  <section class="social">
    <h2>JOIN THE COMMUNITY</h2>
    <hr>
    <div class="social_images">
      <img src=<?php echo get_template_directory_uri() . '/images/feed1.jpg';?> alt="feed1">
      <img src=<?php echo get_template_directory_uri() . '/images/feed2.jpg';?> alt="feed2">
      <img src=<?php echo get_template_directory_uri() . '/images/feed3.jpg';?> alt="feed3">
    </div>
  </section>
</main>

<?php
  get_footer();
