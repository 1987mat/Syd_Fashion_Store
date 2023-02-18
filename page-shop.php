<?php 
  get_header();
?>

  <div class="shop-container">
  <?php 

    if (!is_home()) { ?>
      <div class="breadcrumb">
        <?php get_breadcrumb(); ?>
      </div>
    <?php 
    } 
  the_content();
?>
</div>
<?php
get_footer();

