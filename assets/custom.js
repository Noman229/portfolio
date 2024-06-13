// Site Menus
const navigation = document.getElementById('navigation')
const navLinks = [
  {title: 'Services', navUrl: 'services'},
  {title: 'Projects', navUrl: 'projects'},
  {title: 'Reviews', navUrl: 'reviews'},
  {title: 'Contact', navUrl: 'contact'},
]

navLinks.forEach((navItem) => {
  navigation.innerHTML += `
    <li class="nav-item text-lg-start text-center"><a class="nav-link fw-semibold fs-5 text-dark" href="#${navItem.navUrl}">${navItem.title}</a></li>
  `
})


// Site Services
const serviceRow = document.getElementById('serviceRow')
const services = [
  {title: 'Redesign & Develop', details: "We build beautiful, effective WordPress websites that help our clients sell their products and services"},
  {title: 'Speed Optimization', details: "Optimize your WordPress site's speed for faster load times and better user experience with expert techniques."},
  {title: 'Secure Website', details: "Security ensures your WordPress website remains safe from threats, protecting your data and maintaining user trust."},
  {title: 'Bugs Fix', details: "Expert in resolving WordPress bugs efficiently, ensuring smooth and flawless website performance for all users."},
  {title: 'E-commerce Site', details: "An WordPress e-commerce site enables online shopping, offering convenience and a wide product range for customers."},
]

services.forEach((serviceItem) => {
  serviceRow.innerHTML += `
    <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration="1300">
			<div class="card-services d-block position-relative w-100 rounded text-decoration-none pt-5 pb-4 px-5">
        <h3 class="fs-5 fw-semibold">${serviceItem.title}</h3>
				<p class="text-dark lh-sm">${serviceItem.details}</p>
				<div class="go-corner"></div>
			</div>
		</div>
  `
})

// Site Projects
const projectsRow = document.getElementById('projectsRow')
const projects = [
  {title: 'Logo Marky', details: '', image: '/assets/images/portfolio-mockup/logo-marky.jpg', url: 'https://logomarky.com/'},
  {title: 'Emart Comfort', details: '', image: '/assets/images/portfolio-mockup/emart-comfort.jpg', url: 'https://emartcomfort.com/'},
  {title: 'Greene', details: '', image: '/assets/images/portfolio-mockup/greene.jpg', url: 'https://testingsitelink.online/greene/'},
  {title: 'Green Residency Muzaffarabad', details: '', image: 'assets/images/portfolio-mockup/green-residency-muzaffarabad.jpg', url: 'https://greenresidencymuzaffarabad.com/'},
  {title: 'Take Out Eats', details: '', image: 'assets/images/portfolio-mockup/take-out-eats.jpg', url: 'https://take-out-eats.com/'},
  {title: 'Commeverest', details: '', image: 'assets/images/portfolio-mockup/commeverest.jpg', url: 'https://testingsitelink.online/commeverest/'},
]

projects.forEach((projectItem) => {
  projectsRow.innerHTML += `
    <div class="gallery_product mb-4 col-md-4 col-6 col-xs-6" data-aos="fade-up" data-aos-duration="1000">
			<a href="${projectItem.image}" data-toggle="lightbox"><img src="${projectItem.image}" class="border w-100 rounded"></a>
		</div>
  `
})

// Site Reviews
const reviewsRow = document.getElementById('reviewsRow')
const reviews = [
  {name: 'Muhammad', review: 'Noman is an excellent developer. Done the job as requested. Highly Recommended!!!', country: 'Pakistan', city: 'Lahore', rating: ''},
  {name: 'Kaushik Tejani', review: 'Noman is passionate about his work. He knows very well how to finish work on time. I was thrilled with working with him. I also want to work with him in our future task.', country: 'India', city: 'Ahemedabad', rating: ''},
  {name: 'Saqib Sohail', review: 'My working experience with Noman khan excellent, He is efficient in WordPress. Project delivered on time. I highly recommend to work with Noman and wants more work in future.', country: 'Finland', city: 'Helsinki', rating: ''},
  {name: 'Faisal', review: 'I enjoyed working with him. His communication was top-notch, he met all deadlines.', country: 'Australia', city: 'Sydney', rating: ''},
]

reviews.forEach((reviewItem) => {
  reviewsRow.innerHTML += `
    <div class="col-lg-4">
      <div class="review-item bg-light m-lg-4 m-2 border rounded text-center p-3">
        <img src="assets/images/user-image.png" class="rounded-circle mx-auto" width="100" alt="Client Image">
        <h6 class="fw-bold my-2">${reviewItem.name}</h6>
        <ul class="list-unstyled d-flex justify-content-center my-2">
          <li><a href="#"><i class="fas fa-star text-warning"></i></a></li>
          <li><a href="#"><i class="fas fa-star text-warning"></i></a></li>
          <li><a href="#"><i class="fas fa-star text-warning"></i></a></li>
          <li><a href="#"><i class="fas fa-star text-warning"></i></a></li>
          <li><a href="#"><i class="fas fa-star text-warning"></i></a></li>
        </ul>
        <blockquote class="pullquote mb-0 position-relative py-4 px-2" style="min-height: 200px;">
          <p class="mb-0 text-dark lh-base">${reviewItem.review}</p>
        </blockquote>
        <h6 class="fs-6 text-dark fw-semibold">${reviewItem.country} <span class="text-primary d-block mt-2">${reviewItem.city}</span></h6>
      </div>
    </div>
  `
})

$(document).ready(function(){
  $(".filter-button").click(function(){
    var value = $(this).attr('data-filter');
    if(value == "all"){
      $('.filter').show('1000');
    }
    else{
      $(".filter").not('.'+value).hide('3000');
      $('.filter').filter('.'+value).show('3000');
    }
  });
  if ($(".filter-button").removeClass("active")) {
    $(this).removeClass("active");
  }
  $(this).addClass("active");

  // Back to Top Button
  var btn = $('.back-btn-wrap');
  $(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });

  btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
  });
  
  $('.review-slider-row').slick({
    dots: true,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  AOS.init();
});