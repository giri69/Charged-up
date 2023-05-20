<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <script
      src="https://kit.fontawesome.com/107267d544.js"
      crossorigin="anonymous"
    ></script>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css"
    />
    <link rel="stylesheet" href="style.css" />
    <title>CHARGED</title>
  </head>
  <body>
    <!--- header section starts-->
    <header class="header">
      <a href="#" class="logo"><span>CHARGED</span>UP</a>
      <nav class="navbar">
        <a href="#home">home</a>
        <a href="#about">about</a>
        <a href="#contact us">contact us</a>
        <a href="#social media">social media</a>
        <a href="#feedback">feedback</a>
        <a href="motioncapture.html" class="btn">Motion capture</a>
      </nav>
    </header>
    <!--- header section ends-->
    <!---home section begins-->
    <section class="home" id="home">
      <div class="swiper home-slider">
        <div class="swiper-wrapper">
          <div class="swiper-slide slide" style="background: url(image1.jpg)">
            <div class="content">
              <span><strong> Be Fit And Be Perfect</strong> </span>
              <h3>Your Body is Your Weapon keep it Strong.</h3>
              <a href="getcharged.html" class="btn">Get CHARGED</a>
            </div>
          </div>

          <div class="swiper-slide slide" style="background: url(image2.jpg)">
            <div class="content">
              <span><strong> Be Fit And Be Perfect</strong> </span>
              <h3>Your Body is Your Weapon keep it Strong.</h3>
              <a href="index.html" class="btn">Get CHARGED</a>
            </div>
          </div>

          <div class="swiper-slide slide" style="background: url(image3.jpg)">
            <div class="content">
              <span><strong> Be Fit And Be Perfect</strong> </span>
              <h3>Your Body is Your Weapon keep it Strong.</h3>
              <a href="index.html" class="btn">Get CHARGED</a>
            </div>
          </div>
        </div>

        <div class="swiper-pagination"></div>
      </div>
    </section>

    <!---home section ends-->
    <!--- about starts-->
    <section class="about" id="about">
      <div class="look">
        <img src="about.jpg" alt="img" />
        <img src="about2.jpg" alt="img" />
      </div>

      <div class="content">
        <span>about us</span>
        <h3 class="title" style="font-size: 40px">
          Every day is a change to become better
        </h3>
        <p style="color: red; font-size: 20px">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium
          harum neque officia, cumque quis eius repellendus possimus voluptas ea
          minima numquam expedita. Quis voluptates eveniet recusandae, non
          perferendis delectus doloremque.
        </p>
        <div class="box-container">
          <div class="box">
            <h3><i class="fas fa-check"></i>body and mind</h3>
            <p style="color: red; font-size: 20px">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est,
              enim.
            </p>
          </div>
          <div class="box">
            <h3><i class="fas fa-check"></i>healthy life</h3>
            <p style="color: red; font-size: 20px">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est,
              enim.
            </p>
          </div>
          <div class="box">
            <h3><i class="fas fa-check"></i>strategies</h3>
            <p style="color: red; font-size: 20px">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est,
              enim.
            </p>
          </div>
          <div class="box">
            <h3><i class="fas fa-check"></i>workout</h3>
            <p style="color: red; font-size: 20px">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est,
              enim.
            </p>
          </div>
        </div>
        <a href="#" class="btn">read more</a>
      </div>
    </section>

    <!-- about ends-->

    <!---contact us starts-->
    <section class="contact" id="contact us">
      <div class="content">
        <h2><span>Contact Us</span></h2>
        <p>
          Hi hello we chargers are always user friendly whenever you want to
          contact us we may always respond to your all quires and always be
          awaited hope you like our serveices
        </p>
      </div>
      <div class="container">
        <div class="contactInfo">
          <div class="box">
            <div class="icon"><i class="fa-solid fa-location-dot"></i></div>
            <div class="text">
              <h3><span>Address</span></h3>
              <p>3454 sugar road,<br />Amaravathi,Maharastra,<br />532105</p>
            </div>
          </div>
          <div class="box">
            <div class="icon"><i class="fa-solid fa-phone"></i></div>
            <div class="text">
              <h3><span>Phone</span></h3>
              <p>522-0908-7609</p>
            </div>
          </div>
          <div class="box">
            <div class="icon"><i class="fa-regular fa-envelope"></i></div>
            <div class="text">
              <h3><span>Email</span></h3>
              <p>chargerup@gmail.com</p>
            </div>
          </div>
        </div>
        <div class="contactForm">
          <div class="id">
            <div class="pic">
              <i class="fa-solid fa-user"></i>
            </div>
            <input type="text" placeholder="full name " />
          </div>
          <div class="id">
            <div class="pic"><i class="fa-regular fa-envelope"></i></div>

            <input type="email" placeholder="mention email " />
          </div>
          <textarea cols="15" rows="5" placeholder="write here"></textarea>
          <div class="button"><button>Send</button></div>
        </div>
      </div>
    </section>

    <!---contact us ends-->
    <!--Social media starts-->
    <section class="social media" id="social media">
      <div class="media">
        <span>Follow us on</span>
        <h3>
          You can keep touch with us by following our social media handles
        </h3>
        <div class="ion"><i class="fa-brands fa-youtube"></i> CHARGED</div>
        <div class="ion">
          <i class="fa-brands fa-twitter"></i> CHARGED.OFFICIAL
        </div>
        <div class="ion"><i class="fa-brands fa-instagram"></i> CHARGED</div>
        <div class="ion"><i class="fa-brands fa-facebook"></i> CHARGED</div>
      </div>
    </section>
    <!---social media ends-->
    <!----feedback form starts-->
    <section class="feedback" id="feedback">
      <div class="content">
        <div><span>Give your Valuble feedback</span></div>
        <div class="id">
          <div class="pic">
            <i class="fa-solid fa-user"></i>
          </div>
          <input type="text" placeholder="full name " />
        </div>
        <div class="id">
          <div class="pic"><i class="fa-regular fa-envelope"></i></div>

          <input type="email" placeholder="mention email " />
        </div>
        <textarea cols="15" rows="5" placeholder="write here"></textarea>
        <div class="button"><button>Send</button></div>
      </div>
    </section>
    <!---feedback form ends-->
    <!------>

    <script src="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.js"></script>
    <script src="script.js"></script>
  </body>
</html>
