<?php 
  get_header();
?>

<div class="sale_page_hero">
  <h1 data-animate>On Sale</h1>
</div>
<div class="sale_container">
  <?php 
    woocommerce_breadcrumb(); 
    the_content();
  ?>
</div>
<?php
get_footer();
