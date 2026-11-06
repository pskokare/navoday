
/*
 * NAVODAY CLINIC
 * CENTRALIZED HEADER AND FOOTER
 *
 * Source: Existing homepage HTML
 *
 * Required:
 * /css/bootstrap.min.css
 * /css/slicknav.min.css
 * /css/all.min.css
 * /css/custom.css
 * /js/jquery-3.7.1.min.js
 * /js/jquery.slicknav.js
 *
 * Containers:
 * #header-placeholder
 * #footer-placeholder
 */

(function () {
    'use strict';

    /* ==========================================
       ORIGINAL HEADER HTML
    ========================================== */

    const headerHTML = `
<header class="main-header index2-clinic-header" data-index2-header>
    <div class="header-sticky">
        <nav class="navbar navbar-expand-lg">
            <div class="container">

                <!-- Logo Start -->
                <a class="navbar-brand" href="./">
                    <img src="images/navoday-logo.png" alt="Logo">
                </a>
                <!-- Logo End -->

                <!-- Main Menu Start -->
                <div class="collapse navbar-collapse main-menu">
                    <div class="nav-menu-wrapper">

                        <ul class="navbar-nav mr-auto" id="index2-menu">

                            <li class="nav-item">
                                <a class="nav-link" href="./">Home</a>
                            </li>

                            <li class="nav-item submenu"><a class="nav-link" href="about">About</a>
                                <ul>

                                        <li class="nav-item"><a class="nav-link"
                                                href="about">About (Navoday Clinic)</a>
                                        </li>
                                        <li class="nav-item"><a class="nav-link"
                                                href="doctor/dr-pradipkumar-tupere">About (Dr. Pradipkumar Tupere)</a>
                                        </li>
                                        
                                    </ul>
                                </li>

                            <!-- Conditions Dropdown -->
                            <li class="nav-item submenu">
                                <a class="nav-link" href="service">
                                    Conditions
                                </a>

                                <ul>
                                    <li class="nav-item">
                                        <a class="nav-link" href="conditions/piles-treatment-kharadi-pune">
                                            Piles (Haemorrhoids)
                                        </a>
                                    </li>

                                    <li class="nav-item">
                                        <a class="nav-link" href="conditions/anal-fissure-treatment-kharadi-pune">
                                            Anal Fissure
                                        </a>
                                    </li>

                                    <li class="nav-item">
                                        <a class="nav-link" href="conditions/anal-fistula-treatment-kharadi-pune">
                                            Anal Fistula
                                        </a>
                                    </li>

                                    <li class="nav-item">
                                        <a class="nav-link" href="conditions/pilonidal-sinus-treatment-kharadi-pune">
                                            Pilonidal Sinus
                                        </a>
                                    </li>

                                    <li class="nav-item">
                                        <a class="nav-link" href="conditions/anal-stenosis-treatment-kharadi-pune">
                                            Anal Stricture
                                        </a>
                                    </li>

                                    <li class="nav-item">
                                    <a class="nav-link"
                                                href="conditions/piles-during-pregnancy">Piles During Pregnancy</a>
                                        </li>
                                        <li class="nav-item">
                                        <a class="nav-link"
                                                href="conditions/rectal-bleeding-evaluation-kharadi-pune">Rectal
                                                Bleeding Evaluation and Treatment</a>
                                        </li>
                                        <li class="nav-item">
                                        <a class="nav-link"
                                                href="conditions/pain-while-passing-stool-treatment-kharadi-pune">Painful
                                                Bowel Movements</a>
                                        </li>
                                        <li class="nav-item"><a class="nav-link"
                                                href="conditions/anal-itching-treatment-kharadi-pune">Anal Itching</a>
                                        </li>
                                        <li class="nav-item">
                                        <a class="nav-link"
                                                href="conditions/constipation-treatment-kharadi-pune">Constipation
                                                Treatment</a>
                                        </li>

                                </ul>
                            </li>

                            <!-- Treatments Mega Menu -->

                           <li class="nav-item submenu index2-treatments-menu">
                           <a class="nav-link" href="services" aria-expanded="false">
                             Treatments
                               </a>
                             <ul class="treatments-panel">

                             <!-- Piles -->
                             <li>
                               <span class="treatment-heading">Piles</span>

                                   <ul>
                               <li>
                             <a href="#">
                                 Injection Sclerotherapy
                             </a>
                            </li>
                             <li>
                              <a href="#">
                             HAL-RAR Treatment
                              </a>
                            </li>
                            <li>
                             <a href="#">
                                 THD (Transanal Dearterialisation)
                               </a>
                            </li>
                                <li>
                              <a href="#">
                             Laser Haemorrhoidoplasty
                              </a>
                            </li>
                         <li>
                        <a href="#">
                          MPH (Stapler)
                       </a>
                     </li>
                      <li>
                        <a href="#">
                        Infrared Coagulation
                       </a>
                     </li>
                    <li>
                      <a href="#">
                        Cryosurgery
                       </a>
                    </li>
                  </ul>
                     </li>

                    <!-- Fistula -->
                       <li>
                           <span class="treatment-heading">Fistula</span>

                        <ul>
                         <li>
                           <a href="#">
                        Laser Fistula Treatment (LFT)
                    </a>
                          </li>
                            <li>
                              <a href="#">
                              FiLaC Laser Closure
                             </a>
                           </li>
                         <li>
                            <a href="#">
                        VAAFT
                        </a>
                          </li>
                        <li>
                        <a href="#">
                        Internal Fistulectomy
                        </a>
                       </li>
                        <li>
                           <a href="#">
                        FiLaC with Flap
                          </a>
                          </li>
                         <li>
                    <a href="#">
                        Enterovaginal Fistulectomy
                    </a>
                </li>
            </ul>
        </li>

        <!-- Fissure -->
        <li>
            <span class="treatment-heading">Fissure</span>

            <ul>
                <li>
                    <a href="#">
                        CLIS Treatment
                    </a>
                </li>
                <li>
                    <a href="#">
                        Botox Treatment
                    </a>
                </li>
                <li>
                    <a href="#">
                        Laser Internal Sphincterotomy
                    </a>
                </li>
            </ul>
        </li>

        <!-- Pilonidal Sinus -->
        <li>
            <span class="treatment-heading">
                Pilonidal Sinus
            </span>

            <ul>
                <li>
                    <a href="#">
                        Multiple Z-Plasty
                    </a>
                </li>
                <li>
                    <a href="#">
                        Limberg Flap
                    </a>
                </li>
                <li>
                    <a href="#">
                        Karydakis Procedure
                    </a>
                </li>
                <li>
                    <a href="#">
                        Bascom's Cleft Lift
                    </a>
                </li>
            </ul>
        </li>

        <!-- Other Procedures -->
        <li>
            <span class="treatment-heading">
                Other Procedures
            </span>

            <ul>
                <li>
                    <a href="#">
                        STARR Procedure
                    </a>
                </li>
                <li>
                    <a href="#">
                        Whitehead Technique
                    </a>
                </li>
                <li>
                    <a href="#">
                        Suture Mucoplasty
                    </a>
                </li>
                <li>
                    <a href="#">
                        Radiofrequency
                    </a>
                </li>
                <li>
                    <a href="#">
                        Video Proctoscopy
                    </a>
                </li>
            </ul>
        </li>

        <li class="treatments-all">
            <a href="#">
                View all treatments →
            </a>
        </li>

    </ul>
</li>

<li class="nav-item">
    <a class="nav-link" href="#">
        Health Blog
    </a>
</li>
</ul>

<!--
                            Original legacy navigation retained.
                            Hidden by the original homepage CSS.
                        -->
                        <ul class="navbar-nav mr-auto" id="legacy-index2-menu">

                            <li class="nav-item submenu">
                                <a class="nav-link" href="./">Home</a>
                                <ul>
                                    <li class="nav-item">
                                        <a class="nav-link" href="index">
                                            Home - Version 1
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="index-2">
                                            Home - Version 2
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="index-3">
                                            Home - Version 3
                                        </a>
                                    </li>
                                </ul>
                            </li>

                            <li class="nav-item submenu">
                                <a class="nav-link" href="conditions/piles-treatment-kharadi-pune">
                                    Conditions
                                </a>
                                <ul>
                                    <li class="nav-item">
                                        <a class="nav-link" href="conditions/piles-treatment-kharadi-pune">
                                            Piles (Haemorrhoids)
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="conditions/anal-fissure-treatment-kharadi-pune">
                                            Anal Fissure
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="conditions/anal-fistula-treatment-kharadi-pune">
                                            Anal Fistula
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="conditions/pilonidal-sinus-treatment-kharadi-pune">
                                            Pilonidal Sinus
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="conditions/anal-stenosis-treatment-kharadi-pune">
                                            Anal Stricture
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link btn btn-outline-primary"
                                           href="conditions/"
                                           style="margin-top:10px;">
                                            View All
                                        </a>
                                    </li>
                                </ul>
                            </li>

                            <li class="nav-item submenu">
                                <a class="nav-link" href="./">
                                    Treatments
                                </a>

                                <ul class="d-flex justify-content-start"
                                    style="min-width:1200px;left:-200px;">

                                    <li>
                                        <div>
                                            <a class="nav-link btn btn-outline-primary"
                                               href="conditions"
                                               style="margin-top:10px;">View All</a>
                                            <a class="nav-link btn btn-outline-primary"
                                               href="conditions"
                                               style="margin-top:10px;">View All</a>
                                            <a class="nav-link btn btn-outline-primary"
                                               href="conditions"
                                               style="margin-top:10px;">View All</a>
                                            <a class="nav-link btn btn-outline-primary"
                                               href="conditions"
                                               style="margin-top:10px;">View All</a>
                                        </div>
                                    </li>

                                    <li>
                                        <div>
                                            <a class="nav-link btn btn-outline-primary"
                                               href="conditions"
                                               style="margin-top:10px;">View All</a>
                                            <a class="nav-link btn btn-outline-primary"
                                               href="conditions"
                                               style="margin-top:10px;">View All</a>
                                            <a class="nav-link btn btn-outline-primary"
                                               href="conditions"
                                               style="margin-top:10px;">View All</a>
                                            <a class="nav-link btn btn-outline-primary"
                                               href="conditions"
                                               style="margin-top:10px;">View All</a>
                                        </div>
                                    </li>

                                    <li>
                                        <div>
                                            <a class="nav-link btn btn-outline-primary"
                                               href="conditions"
                                               style="margin-top:10px;">View All</a>
                                            <a class="nav-link btn btn-outline-primary"
                                               href="conditions"
                                               style="margin-top:10px;">View All</a>
                                            <a class="nav-link btn btn-outline-primary"
                                               href="conditions"
                                               style="margin-top:10px;">View All</a>
                                            <a class="nav-link btn btn-outline-primary"
                                               href="conditions"
                                               style="margin-top:10px;">View All</a>
                                        </div>
                                    </li>

                                    <li>
                                        <div>
                                            <h4>piles</h4>
                                            <a class="nav-link btn btn-outline-primary"
                                               href="conditions"
                                               style="margin-top:10px;">View All</a>
                                            <a class="nav-link btn btn-outline-primary"
                                               href="conditions"
                                               style="margin-top:10px;">View All</a>
                                            <a class="nav-link btn btn-outline-primary"
                                               href="conditions"
                                               style="margin-top:10px;">View All</a>
                                            <a class="nav-link btn btn-outline-primary"
                                               href="conditions"
                                               style="margin-top:10px;">View All</a>
                                        </div>
                                    </li>

                                    <li class="nav-item">
                                        <a class="nav-link btn btn-outline-primary"
                                           href="conditions"
                                           style="margin-top:10px;">
                                            View All
                                        </a>
                                    </li>

                                </ul>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" href="about">
                                    About Us
                                </a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" href="blog">
                                    Blog
                                </a>
                            </li>

                            <li class="nav-item submenu">
                                <a class="nav-link" href="#">
                                    Pages
                                </a>
                                <ul>
                                    <li class="nav-item">
                                        <a class="nav-link" href="service-single">Service Details</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="blog-single">Blog Details</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="case-study">Case Study</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="case-study-single">Case Study Details</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="team">Our Team</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="team-single">Team Details</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="pricing">Pricing Plan</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="testimonials">Testimonials</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="image-gallery">Image Gallery</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="video-gallery">Video Gallery</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="faqs">FAQs</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="404">404</a>
                                    </li>
                                </ul>
                            </li>

                           

                            <li class="nav-item highlighted-menu">
                                <a class="nav-link" href="book-appointment">
                                    Book Appointment
                                </a>
                            </li>

                        </ul>

                    </div>

                    <!-- Header Button -->
                    <div class="header-btn">
                        <a href="book-appointment"
                           class="btn-default btn-highlighted">
                            Book Appointment
                        </a>
                    </div>

                </div>
                <!-- Main Menu End -->

                <div class="navbar-toggle"></div>

            </div>
        </nav>

        <div class="responsive-menu"></div>
    </div>
</header>
`;

    /* ==========================================
       ORIGINAL FOOTER HTML
    ========================================== */

    const footerHTML = `
<div class="main-footer-prime bg-section dark-section">
    <div class="container">
        <div class="row">

            <!-- Footer About -->
            <div class="col-xl-4">

                <div class="about-footer-prime">

                    <div class="footer-logo-prime">
                         <a href="/">
                                <img src="images/navoday-logo.png" alt="Navoday Clinic Pune logo">
                            </a>
                    </div>

                    <div class="about-footer-content-prime">
                        <p>
                            Specialist care for piles (Haemorrhoids),
                            fissure, fistula and pilonidal sinus in
                            Kharadi, Pune.
                        </p>
                    </div>

                    <div class="footer-social-links-prime">
                        <h3>Follow Us:</h3>

                        <ul>
                            <li>
                                <a href="https://www.facebook.com/navodayclinic"
                                   target="_blank"
                                   rel="noopener">
                                    <i class="fa-brands fa-facebook-f"></i>
                                </a>
                            </li>

                            <li>
                                <a href="https://www.instagram.com/navodayclinic"
                                   target="_blank"
                                   rel="noopener">
                                    <i class="fa-brands fa-instagram"></i>
                                </a>
                            </li>

                            <li>
                                <a href="https://www.youtube.com/@navodayclinic"
                                   target="_blank"
                                   rel="noopener">
                                    <i class="fa-brands fa-youtube"></i>
                                </a>
                            </li>

                            <li>
                                <a href="https://share.google/4iUmBX8byq7c5ZDeI"
                                   target="_blank"
                                   rel="noopener"
                                   title="Google Business Profile">
                                    <i class="fa-brands fa-google"></i>
                                </a>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>

            <!-- Footer Links -->
            <div class="col-xl-8">

                <div class="footer-links-box-prime">

                    <div class="footer-links-prime footer-quick-links-prime">
                        <h2>Quick Links</h2>
                        <ul>
                            <li><a href="index">Home</a></li>
                            <li><a href="about">About (Navoday Clinic)</a></li>
                            <li><a href="doctor/dr-pradipkumar-tupere">About (Dr. Pradipkumar Tupere)</a></li>
                            <li><a href="service">Conditions</a></li>
                            <li><a href="treatments">Treatments</a></li>
                            <li><a href="blog">Health Blog</a></li>
                        </ul>
                    </div>

                    <div class="footer-links-prime footer-service-links-prime">
                        <h2>Conditions</h2>
                        <ul>
                            <li><a href="conditions/piles-treatment-kharadi-pune">Piles (Haemorrhoids)</a></li>
                            <li><a href="conditions/anal-fissure-treatment-kharadi-pune">Anal Fissure</a></li>
                            <li><a href="conditions/anal-fistula-treatment-kharadi-pune">Anal Fistula</a></li>
                            <li><a href="conditions/pilonidal-sinus-treatment-kharadi-pune">Pilonidal Sinus</a></li>
                            <li><a href="conditions/anal-stenosis-treatment-kharadi-pune">Anal Stricture</a></li>
                            <li><a href="conditions/piles-during-pregnancy">Piles During Pregnancy</a></li>
                            <li><a href="conditions/rectal-bleeding-evaluation-kharadi-pune">Rectal Bleeding Evaluation and Treatment</a></li>
                            <li><a href="conditions/pain-while-passing-stool-treatment-kharadi-pune">Painful Bowel Movements</a></li>
                            <li><a href="conditions/constipation-treatment-kharadi-pune">Constipation</a></li>
                           
                        </ul>
                    </div>

                    <div class="footer-links-prime footer-privacy-policy-prime">
                        <h2>Resources</h2>
                        <ul>
                            <li><a href="health-tips">Health Tips</a></li>
                            <li><a href="faqs">FAQs</a></li>
                            <li><a href="book-appointment">Contact</a></li>
                            <li><a href="privacy-policy">Privacy Policy</a></li>
                            <li><a href="terms-and-conditions">Terms and Conditions</a></li>
                        </ul>
                    </div>

                </div>
            </div>

            <!-- Footer Contact -->
            <div class="col-lg-12">

                <div class="footer-contact-items-list-prime">

                    <!-- Location -->
                    <div class="footer-contact-item-prime">
                        <div class="icon-box">
                            <img src="images/icon-location-white.svg" alt="">
                        </div>

                        <div class="footer-contact-item-content-prime">
                            <p>Navoday Clinic</p>
                            <h3>
                                Mundwa -Kharadi Rd, near Nyati Plaza, Thite Nagar, Kharadi, Pune, Maharashtra 411014
                            </h3>
                        </div>
                    </div>

                    <!-- Phone -->
                    <div class="footer-contact-item-prime">
                        <div class="icon-box">
                            <img src="images/icon-phone-white.svg" alt="">
                        </div>

                        <div class="footer-contact-item-content-prime">
                            <p>Phone</p>
                            <h3>
                                <a href="tel:+917720868686">
                                    +91 7720 868 686
                                </a>
                            </h3>
                        </div>
                    </div>

                    <!-- WhatsApp -->
                    <div class="footer-contact-item-prime">
                        <div class="icon-box">
                            <img src="images/icon-phone-white.svg" alt="">
                        </div>

                        <div class="footer-contact-item-content-prime">
                            <p>WhatsApp</p>
                            <h3>
                                <a href="https://wa.me/919922427393"
                                   target="_blank"
                                   rel="noopener">
                                    +91 9922427393 
                                </a>
                            </h3>
                        </div>
                    </div>

                    <!-- Email -->
                    <div class="footer-contact-item-prime">
                        <div class="icon-box">
                            <img src="images/icon-mail-white.svg" alt="">
                        </div>

                        <div class="footer-contact-item-content-prime">
                            <p>Email</p>
                            <h3>
                                <a href="mailto:appointment@navodayclinic.com">
                                    appointment@navodayclinic.com
                                </a>
                            </h3>
                        </div>
                    </div>

                    <!-- Timings -->
                    <div class="footer-contact-item-prime">
                        <div class="icon-box">
                            <i class="fa-regular fa-clock"
                               aria-hidden="true"></i>
                        </div>

                        <div class="footer-contact-item-content-prime">
                            <p>Timings</p>
                            <h3>
                                Monday - Saturday:
                                10:00 AM - 2:00 PM, 5:00 PM - 9:00 PM
                                <br>
                                Sunday: Closed
                            </h3>
                        </div>
                    </div>

                </div>

                <!-- Map Section -->
                <div class="footer-map-location">

                    <div class="footer-map-location__details">

                        <p class="footer-map-location__eyebrow">
                            Visit Navoday Clinic
                        </p>

                        <h2>Find us in Kharadi</h2>

                        <p>
                            Conveniently located near Nyati Plaza, Thite Nagar, Kharadi, Pune.
                        </p>

                        <a
                            href="https://www.google.com/maps/place/Gold+Rush+hospital+%E2%80%94+O%26M+by+Navoday+Clinic+Pvt+Ltd/@18.5501716,73.937304,17z/data=!3m1!4b1!4m6!3m5!1s0x3bc2c30927ea74c9:0xffeea1dfc1f7bfa0!8m2!3d18.5501716!4d73.937304!16s%2Fg%2F11zyflz8qq?entry=ttu&g_ep=EgoyMDI2MTEwMi4wIKXMDSoASAFQAw%3D%3D"
                            class="footer-map-location__directions"
                            target="_blank"
                            rel="noopener">

                            Get directions

                            <i class="fa-solid fa-arrow-up-right-from-square"
                               aria-hidden="true"></i>
                        </a>

                    </div>

                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.529068189906!2d73.937304!3d18.550171600000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c30927ea74c9%3A0xffeea1dfc1f7bfa0!2sGold%20Rush%20hospital%20%E2%80%94%20O%26M%20by%20Navoday%20Clinic%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1793943542140!5m2!1sen!2sin"
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                        title="Navoday Clinic Kharadi Map">
                    </iframe>

                </div>

            </div>

            <!-- Footer Disclaimer -->
            <div class="col-lg-12">

                <div class="footer-copyright-text-prime"
                     style="margin-bottom:0;">

                    <p>
                        <strong>Dr. Pradipkumar Tupere</strong>,
                        MBBS, MS (General Surgery).
                        Medical registration no. 2012/05/2332
                    </p>

                    <p style="font-size:0.97em;margin:4px 0;">
                        <strong>Disclaimer:</strong>
                        The information on this website is for
                        general awareness and does not replace
                        a medical consultation. Treatment is
                        advised only after examination.
                    </p>

                    <p>
                        © 2026 Navoday Clinic. All rights reserved.
                    </p>

                </div>

            </div>

        </div>
    </div>
</div>
`;

    /* ==========================================
       HOMEPAGE HEADER & FOOTER CSS
       Preserves the original selectors
    ========================================== */

    const sharedStyles = `
.index2-clinic-header #legacy-index2-menu {
    display: none;
}

.index2-clinic-header .index2-treatments-menu > .treatments-panel {
    position: fixed;
    left: 50%;
    top: var(--index2-dropdown-top, 120px);
    width: min(1200px, calc(100vw - 30px));
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    gap: 24px;
    padding: 24px 30px 18px;
    transform: translateX(-50%) scale(1, .8);
    transform-origin: top;
    z-index: 210;
}

.index2-clinic-header
.index2-treatments-menu.is-open > .treatments-panel {
    visibility: visible;
    opacity: 1;
    transform: translateX(-50%) scale(1, 1);
    padding: 24px 30px 18px;
}

.index2-clinic-header .treatments-panel > li {
    margin: 0;
    padding: 0;
}

.index2-clinic-header .treatments-panel .treatment-heading {
    display: block;
    padding: 0 0 10px;
    border-bottom: 1px solid var(--dark-divider-color);
    font-size: 13px;
    font-weight: 700;
    letter-spacing: .08em;
    text-transform: uppercase;
}

.index2-clinic-header .treatments-panel li ul {
    position: static;
    width: auto;
    background: transparent;
    border-radius: 0;
    opacity: 1;
    visibility: visible;
    transform: none;
    padding: 6px 0 0 !important;
}

.index2-clinic-header .treatments-panel li ul li a {
    padding: 6px 0 !important;
}

.index2-clinic-header .treatments-panel .treatments-all {
    grid-column: 1 / -1;
    border-top: 1px solid var(--dark-divider-color);
    padding-top: 14px;
    margin-top: 3px;
}

.index2-clinic-header .treatments-panel .treatments-all a {
    font-weight: 700;
}

@media (max-width: 991px) {
    .index2-clinic-header
    .index2-treatments-menu > .treatments-panel {
        position: absolute;
        display: block;
        left: 0;
        top: 100%;
        width: 235px;
        padding: 0;
        transform: scale(1, .8);
    }

    .index2-clinic-header
    .index2-treatments-menu.is-open > .treatments-panel {
        padding: 5px 0;
        transform: scale(1, 1);
    }

    .index2-clinic-header .treatments-panel .treatment-heading {
        padding: 8px 20px;
        border: 0;
    }

    .index2-clinic-header .treatments-panel li ul {
        display: none;
    }

    .index2-clinic-header .treatments-panel .treatments-all {
        border: 0;
        margin: 0;
        padding: 0;
    }
}

/* Original dropdown colours */
.index2-clinic-header .main-menu ul ul,
.index2-clinic-header .responsive-menu .slicknav_menu {
    background: #fff;
}

.index2-clinic-header .main-menu ul ul li a,
.index2-clinic-header .treatments-panel .treatment-heading,
.index2-clinic-header .responsive-menu .slicknav_nav .slicknav_row,
.index2-clinic-header .responsive-menu .slicknav_nav li a {
    color: var(--primary-color);
}

.index2-clinic-header .main-menu ul ul li a:hover,
.index2-clinic-header .responsive-menu .slicknav_nav a:hover,
.index2-clinic-header .responsive-menu .slicknav_nav .slicknav_row:hover {
    color: var(--accent-color);
}

.index2-clinic-header .responsive-menu .slicknav_arrow:after {
    color: var(--primary-color);
}

.index2-clinic-header
.main-menu .index2-treatments-menu > .treatments-panel {
    border-top-color: var(--accent-color);
    border-radius: 0 0 14px 14px;
    box-shadow: 0 18px 36px rgba(8, 54, 59, .16);
}

.index2-clinic-header .treatments-panel .treatment-heading {
    color: var(--accent-color);
    border-color: #e6e8e9;
    font-size: 12px;
}

.index2-clinic-header .treatments-panel li ul li a {
    font-size: 14px;
    line-height: 1.35;
}

.index2-clinic-header
#index2-menu > .submenu:not(.index2-treatments-menu) > ul li a {
    font-size: 15px;
    line-height: 1.35;
}

.index2-clinic-header
#index2-menu > .submenu:not(.index2-treatments-menu) > ul li:last-child a {
    margin-top: 5px;
    padding-top: 12px !important;
    border-top: 1px solid #e6e8e9;
    color: var(--accent-color);
    font-weight: 700;
}

@media (min-width: 992px) {
    .index2-clinic-header
    .main-menu
    .index2-treatments-menu:not(.is-open) > .treatments-panel {
        visibility: hidden;
        opacity: 0;
        pointer-events: none;
        transform: translateX(-50%) scale(1, .8);
        padding: 0;
    }

    .index2-clinic-header
    .main-menu
    .index2-treatments-menu.is-open > .treatments-panel {
        pointer-events: auto;
    }

    .index2-clinic-header .treatments-panel li ul li a {
        padding: 5px 0 !important;
        line-height: 2;
    }
}

@media (max-width: 991px) {
    .index2-clinic-header .responsive-menu .slicknav_menu {
        border-top: 1px solid #e6e8e9;
        box-shadow: 0 14px 28px rgba(8, 54, 59, .13);
    }

    .index2-clinic-header
    .responsive-menu .slicknav_nav > li > a,
    .index2-clinic-header
    .responsive-menu .slicknav_nav > li > .slicknav_row {
        padding: 14px 20px;
        border-bottom: 1px solid #edf0f1;
        font-size: 16px;
        font-weight: 600;
    }

    .index2-clinic-header
    .responsive-menu .slicknav_nav > li > ul:not(.treatments-panel) > li > a {
        padding: 9px 20px 9px 38px !important;
        color: #526066;
        font-size: 14px !important;
        font-weight: 500;
    }

    .index2-clinic-header
    .slicknav_menu .index2-treatments-menu > .treatments-panel {
        position: static;
        display: block;
        width: 100%;
        margin: 0 !important;
        padding: 4px 0 !important;
        transform: none;
    }

    .index2-clinic-header
    .slicknav_menu .treatments-panel > li,
    .index2-clinic-header
    .slicknav_menu .treatments-panel li ul {
        width: 100%;
        margin: 0 !important;
        padding: 0 !important;
    }

    .index2-clinic-header
    .slicknav_menu .treatments-panel > li.slicknav_parent > .slicknav_row {
        padding: 12px 20px 10px 38px;
        border-top: 1px solid #edf0f1;
        background: #fff7fb;
        color: var(--accent-color);
        font-size: 12px;
        font-weight: 800;
        letter-spacing: .08em;
    }

    .index2-clinic-header
    .slicknav_menu .treatments-panel .treatment-heading {
        display: block;
        padding: 0;
        color: inherit;
    }

    .index2-clinic-header
    .slicknav_menu .treatments-panel li ul {
        display: block;
        overflow: visible;
    }

    .index2-clinic-header
    .slicknav_menu .treatments-panel li ul li a {
        display: block;
        padding: 8px 20px 8px 56px !important;
        margin: 0 !important;
        color: #526066;
        font-size: 14px !important;
        font-weight: 500;
        line-height: 1.35;
        white-space: normal;
    }

    .index2-clinic-header
    .slicknav_menu .treatments-panel .treatments-all {
        padding: 9px 0 !important;
        border-top: 1px solid #e6e8e9;
    }

    .index2-clinic-header
    .slicknav_menu .treatments-panel .treatments-all a {
        padding-left: 38px !important;
        color: var(--accent-color);
        font-weight: 700;
    }
}

/* Original footer map styling */
.footer-map-location {
    display: grid;
    grid-template-columns: minmax(280px, .9fr) minmax(0, 1.1fr);
    margin-top: 28px;
    overflow: hidden;
    border-radius: 20px;
    background: var(--secondary-color);
    box-shadow: 0 18px 35px rgba(0, 0, 0, .18);
}

.footer-map-location__details {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 42px;
    color: var(--white-color);
}

.footer-map-location__eyebrow {
    margin: 0 0 10px;
    color: var(--accent-color);
    font-size: 13px;
    font-weight: 800;
    letter-spacing: .08em;
    text-transform: uppercase;
}

.footer-map-location h2 {
    margin: 0 0 14px;
    color: var(--white-color);
    font-size: clamp(26px, 3vw, 38px);
}

.footer-map-location__details > p:not(.footer-map-location__eyebrow) {
    margin: 0;
    color: rgba(255, 255, 255, .78);
    line-height: 1.65;
}

.footer-map-location__directions {
    display: inline-flex;
    align-items: center;
    gap: 9px;
    margin-top: 25px;
    padding: 13px 20px;
    border-radius: 8px;
    color: var(--white-color);
    background: var(--accent-color);
    font-weight: 700;
}

.footer-map-location__directions:hover {
    color: var(--white-color);
    background: #c91370;
}

.footer-map-location iframe {
    width: 100%;
    min-height: 300px;
    border: 0;
    display: block;
}

.footer-contact-item-prime .icon-box i {
    color: var(--white-color);
    font-size: 25px;
}

@media (max-width: 767px) {
    .footer-map-location {
        grid-template-columns: 1fr;
        margin-top: 20px;
    }

    .footer-map-location__details {
        padding: 30px 25px;
    }

    .footer-map-location iframe {
        min-height: 260px;
    }
}
`;

    /* ==========================================
       ADD SHARED STYLES
    ========================================== */

    function addSharedStyles() {

        if (
            document.getElementById(
                'navoday-shared-header-footer-styles'
            )
        ) {
            return;
        }

        const style = document.createElement('style');

        style.id = 'navoday-shared-header-footer-styles';
        style.textContent = sharedStyles;

        document.head.appendChild(style);
    }

    /* ==========================================
       RESOLVE ASSET PATHS

       Original paths remain in the templates.
       When mounted, relative paths are resolved
       against the site root.

       This allows nested doctor/service URLs.
    ========================================== */

    function resolveTemplatePaths(container) {

        container.querySelectorAll('[href], [src]')
            .forEach(function (element) {

                ['href', 'src'].forEach(function (attribute) {

                    const value = element.getAttribute(attribute);

                    if (
                        !value ||
                        value.startsWith('/') ||
                        value.startsWith('#') ||
                        value.startsWith('//') ||
                        /^[a-z][a-z0-9+.-]*:/i.test(value)
                    ) {
                        return;
                    }

                    element.setAttribute(
                        attribute,
                        '/' + value.replace(/^\.\//, '')
                    );

                });

            });
    }

    /* ==========================================
       INITIALIZE HEADER NAVIGATION
    ========================================== */

    function initializeIndex2Menu() {

        if (typeof window.jQuery === 'undefined') {
            console.warn('Navoday header requires jQuery.');
            return false;
        }

        const $ = window.jQuery;

        const header = document.querySelector(
            '[data-index2-header]'
        );

        if (!header) return false;

        if (
            !$.fn ||
            typeof $.fn.slicknav !== 'function'
        ) {
            console.warn('Navoday header requires SlickNav.');
            return false;
        }

        /* Initialize only the actual index2 menu */
        if (!header.querySelector('.slicknav_menu')) {

            $('#index2-menu').slicknav({
                label: '',
                prependTo: '.index2-clinic-header .responsive-menu'
            });

        }

        const item = header.querySelector(
            '.index2-treatments-menu'
        );

        if (!item) return true;

        const trigger = item.querySelector('a');
        const panel = item.querySelector('.treatments-panel');

        if (!trigger || !panel) return true;

        const desktop = window.matchMedia(
            '(min-width: 992px)'
        );

        let closeTimer;

        /* Original dropdown positioning */
        function setPanelPosition() {

            header.style.setProperty(
                '--index2-dropdown-top',
                Math.round(
                    header.getBoundingClientRect().bottom
                ) + 'px'
            );

        }

        function openMenu() {

            if (!desktop.matches) return;

            window.clearTimeout(closeTimer);

            item.classList.add('is-open');

            trigger.setAttribute(
                'aria-expanded',
                'true'
            );

            setPanelPosition();
        }

        function closeMenuSoon() {

            if (!desktop.matches) return;

            window.clearTimeout(closeTimer);

            closeTimer = window.setTimeout(function () {

                item.classList.remove('is-open');

                trigger.setAttribute(
                    'aria-expanded',
                    'false'
                );

            }, 220);
        }

        function cancelClose() {
            window.clearTimeout(closeTimer);
        }

        /* Click */
        trigger.addEventListener('click', function (event) {

            if (!desktop.matches) return;

            event.preventDefault();

            if (item.classList.contains('is-open')) {
                closeMenuSoon();
            } else {
                openMenu();
            }

        });

        /* Hover */
        trigger.addEventListener('mouseenter', openMenu);
        trigger.addEventListener('mouseleave', closeMenuSoon);

        panel.addEventListener('mouseenter', cancelClose);
        panel.addEventListener('mouseleave', closeMenuSoon);

        /* Outside click */
        document.addEventListener('click', function (event) {

            if (!header.contains(event.target)) {
                closeMenuSoon();
            }

        });

        /* Escape key */
        document.addEventListener('keydown', function (event) {

            if (event.key === 'Escape') {

                window.clearTimeout(closeTimer);

                item.classList.remove('is-open');

                trigger.setAttribute(
                    'aria-expanded',
                    'false'
                );

            }

        });

        /* Responsive resizing */
        window.addEventListener('resize', function () {

            if (desktop.matches) {

                setPanelPosition();

            } else {

                window.clearTimeout(closeTimer);

                item.classList.remove('is-open');

                trigger.setAttribute(
                    'aria-expanded',
                    'false'
                );

            }

        });

        setPanelPosition();

        return true;
    }

    /* ==========================================
       MOUNT HEADER AND FOOTER
    ========================================== */

    function mount() {

        const headerPlaceholder = document.getElementById(
            'header-placeholder'
        );

        const footerPlaceholder = document.getElementById(
            'footer-placeholder'
        );

        if (!headerPlaceholder && !footerPlaceholder) {
            return;
        }

        addSharedStyles();

        /* Inject header */
        if (headerPlaceholder) {

            if (
                !headerPlaceholder.querySelector(
                    '[data-index2-header]'
                )
            ) {

                headerPlaceholder.innerHTML = headerHTML;

                resolveTemplatePaths(headerPlaceholder);
            }

            /* Initialize only once */
            if (
                headerPlaceholder.dataset.navodayMenuReady !== 'true'
            ) {

                const initialized = initializeIndex2Menu();

                if (initialized) {
                    headerPlaceholder.dataset.navodayMenuReady = 'true';
                }

            }

        }

        /* Inject footer */
        if (footerPlaceholder) {

            if (
                !footerPlaceholder.querySelector(
                    '.main-footer-prime'
                )
            ) {

                footerPlaceholder.innerHTML = footerHTML;

                resolveTemplatePaths(footerPlaceholder);

            }

        }

    }

    /* ==========================================
       START AFTER DOM IS READY
    ========================================== */

    if (document.readyState === 'loading') {

        document.addEventListener(
            'DOMContentLoaded',
            mount,
            { once: true }
        );

    } else {

        mount();

    }

})();
