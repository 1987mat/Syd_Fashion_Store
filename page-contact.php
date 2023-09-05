<?php 
get_header();
?>

<div class="contact_page_hero">
  <h1 data-animate>Contact Us</h1>
</div>
<div class="contact_container">
  <div class="form_wrapper">
    <div class="contact_image">
      <img src=<?php echo get_template_directory_uri() . '/images/contact_2.jpg';?> alt="contact-image">
    </div>
    <div class="form_container">
      <h2>Let's Connect</h2>
      <form>
        <div class="form-group top">
          <div class="field-container">
            <input type="text" placeholder="Your name" required>
            <span class="dashicons dashicons-admin-users"></span>
          </div>
          <div class="field-container">
            <input type="email" placeholder="Email" required>
            <span class="dashicons dashicons-email"></span>
          </div>
          <div class="field-container">
            <input type="phone" placeholder="Phone number" required>
            <span class="dashicons dashicons-phone"></span>
          </div>
        </div>
        <div class="form-group bottom">
          <div class="field-container">
            <textarea rows="10" placeholder="Your message" required></textarea>
            <span class="dashicons dashicons-buddicons-pm"></span>
          </div>
        </div>
        <div class="submit-container">
          <input type="submit" class="submit-btn" value="Submit">
        </div>
      </form>
    </div>
  </div>
</div>

<?php
get_footer();