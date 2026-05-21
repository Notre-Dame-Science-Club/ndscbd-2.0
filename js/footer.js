document.addEventListener('DOMContentLoaded', function () {
  const footer = `
<footer class="space-footer">

  <div class="footer-stars"></div>

  <div class="footer-container">

    <div class="footer-links">
      <h3>Navigation</h3>
      <a href="index.html">Home</a>
      <a href="activities.html">Activities</a>
      <a href="publication.html">Publication</a>
      <a href="executives.html">Executives</a>
    </div>

    <div class="footer-logo">
      <img src="images/logo-2.0.png" alt="Notre Dame Science Club Logo">
      <h2>Notre Dame Science Club</h2>
      <a href="developers.html" class="dev-btn">🚀 Developers</a>
    </div>

    <div class="footer-contact">
      <h3>Contact</h3>
      <p>📍 G.P.O Box 5, Toyenbee Circular Rd,<br>Dhaka 1000</p>
      <p>📧 ndsc.org@gmail.com</p>
      <p>📞 +880-1568-171970</p>
      <div class="social-buttons">
        <a href="https://www.facebook.com/NDSCOfficial" target="_blank" class="btn facebook">
          <i class="fa fa-facebook fa-lg"></i>
          <span></span>
        </a>
        <a href="https://www.instagram.com/ndsc_official/" target="_blank" class="btn instagram">
          <i class="fa fa-instagram fa-lg"></i>
          <span></span>
        </a>
        <a href="https://www.linkedin.com/company/notre-dame-science-club/" target="_blank" class="btn linkedin">
          <i class="fa fa-linkedin fa-lg"></i>
          <span></span>
        </a>
      </div>
    </div>

  </div>

  <div class="footer-bottom">
    <p>© 2026 Notre Dame Science Club (NDSC). Official Website of Notre Dame Science Club.</p>
  </div>

</footer>`;

  const placeholder = document.getElementById('footer-placeholder');
  if (placeholder) placeholder.outerHTML = footer;
});
