<?php 
  get_header();
?>

<div class="account_hero">
  <h1>My Account</h1>
</div>
<div class="account_container">
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

