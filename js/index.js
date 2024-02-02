document.addEventListener("DOMContentLoaded", () => {
  const paperPlane = document.querySelector("#landing__paper_plane");
  const slider = document.querySelector("#wrapper");
  const sections = gsap.utils.toArray(".section__parallax");
  const landingTexts = gsap.utils.toArray("#landing__text");
  const navBarLinks = gsap.utils.toArray(".navbar__link");
  const paperPlaneTransform = document.querySelector(
    "#landing__paper_plane_transform"
  );

  let scrollLength = 0;
  (document.querySelectorAll('section')).forEach((element) => {
    scrollLength += element.offsetWidth;
  })
  // scrollLength += 323;

  let paperPlaneScrolling = document.documentElement.clientWidth * (1905/100);


  ////create fade in of the landing page
  gsap.from(navBarLinks, {
    opacity: 0,
    stagger: 0.2,
    duration: 0.5,
    delay: 1,
  });

  gsap.from('#landing__paper_plane_transform',{
    opacity: 0,
    delay: 1.2,
    duration: 1,
    // scrub: true
  })

  gsap.from(landingTexts, {
    yPercent: 200,
    stagger: 0.2,
    duration: 0.5,
    delay: 0.3,
  });


  gsap.from("#landing__wall", {
    yPercent: 200,
    duration: 1,
  });

  gsap.from("#landing__wall_upper", {
    yPercent: 200,
    duration: 1,
  });
  ////end of creating fade in of the landing page

  //create the animation timeline
  let tl = gsap.timeline({
    defaults: {
      ease: "none",
    },
    scrollTrigger: {
      trigger: slider,
      pin: true,
      scrub: true,
      end: () => "+=" + scrollLength,
    },
  });



  //create the horizontal scroll
  tl.to(slider, {
    xPercent: -1905.5
  });

  //make paperPlane stay in scroll
  tl.to("#landing__paper_plane_transform", {
    x: paperPlaneScrolling,
  }, 0);

  //implementing face in effect in each section
  sections.forEach((stop, index) => {
    tl.from(stop.querySelector("p"), {
      opacity: 0,
      scrollTrigger: {
        trigger: stop,
        start: "5% left",
        end: "15% left",
        containerAnimation: tl,
        scrub: true,
      },
    }, "<");

    tl.to(stop.querySelector(".text__card"), {
      opacity: 0,
      scrollTrigger: {
        trigger: stop,
        start: "85% right",
        end: "95% right",
        containerAnimation: tl,
        scrub: true,
      },
    }, "<");

    tl.to(stop.querySelector(".text__card"), {
      xPercent: 220,
      scrollTrigger: {
        trigger: stop,
        start: "5% left",
        end: "95% right",
        containerAnimation: tl,
        scrub: true,
      },
    });

  });


  ////Create parallax effect
  tl.to('#cloud__cloud1', {
    xPercent: -30,
    scrollTrigger: {
      trigger: '#cloud__cloud1',
      start: "left right",
        end: "right left",
        containerAnimation: tl,
      scrub: true,
    }
  })

  tl.to('#cloud__cloud2', {
    xPercent: -30,
    scrollTrigger: {
      trigger: '#cloud__cloud2',
      start: "left right",
        end: "right left",
        containerAnimation: tl,
      scrub: true,
    }
  })

  tl.to('#cloud__cloud3', {
    xPercent: -30,
    scrollTrigger: {
      trigger: '#cloud__cloud3',
      start: "left right",
        end: "right left",
        containerAnimation: tl,
      scrub: true,
    }
  })

  tl.to('#city__city2', {
    xPercent: -10,
    scrollTrigger: {
      trigger: '#city__city2',
      start: "left right",
        end: "right left",
        containerAnimation: tl,
      scrub: true,
    }
  })

  tl.to('#mountain__mountain2', {
    xPercent: -30,
    scrollTrigger: {
      trigger: '#mountain__mountain2',
      start: "left right",
        end: "right left",
        containerAnimation: tl,
      scrub: true,
    }
  })

  tl.to('#mountain__mountain3', {
    xPercent: -30,
    scrollTrigger: {
      trigger: '#mountain__mountain3',
      start: "left right",
        end: "right left",
        containerAnimation: tl,
      scrub: true,
    }
  })

  tl.to('#mountain__mountain4', {
    xPercent: -30,
    scrollTrigger: {
      trigger: '#mountain__mountain4',
      start: "left right",
        end: "right left",
        containerAnimation: tl,
      scrub: true,
    }
  })

  tl.to('#hotairballoons__hotAirBalloon4', {
    xPercent: -150,
    scrollTrigger: {
      trigger: '#hotairballoons__hotAirBalloon4',
      start: "-30% right",
        end: "200% left",
        containerAnimation: tl,
      scrub: true,
    }
  })
  tl.to('#hotairballoons__hotAirBalloon1', {
    xPercent: -150,
    scrollTrigger: {
      trigger: '#hotairballoons__hotAirBalloon1',
      start: "-30% right",
        end: "200% left",
        containerAnimation: tl,
      scrub: true,
    }
  })

  tl.to('#hotairballoons__hotAirBalloon3', {
    xPercent: -100,
    scrollTrigger: {
      trigger: '#hotairballoons__hotAirBalloon3',
      start: "-30% right",
        end: "200% left",
        containerAnimation: tl,
      scrub: true,
    }
  })

  tl.to('#hotairballoons__hotAirBalloon5', {
    xPercent: -100,
    scrollTrigger: {
      trigger: '#hotairballoons__hotAirBalloon5',
      start: "-30% right",
        end: "200% left",
        containerAnimation: tl,
      scrub: true,
    }
  })

  tl.to('#hotairballoons__hotAirBalloon7', {
    xPercent: -10,
    scrollTrigger: {
      trigger: '#hotairballoons__hotAirBalloon7',
      start: "-30% right",
        end: "200% left",
        containerAnimation: tl,
      scrub: true,
    }
  })

  tl.to('#hotairballoons__hotAirBalloon6', {
    xPercent: -10,
    scrollTrigger: {
      trigger: '#hotairballoons__hotAirBalloon6',
      start: "-30% right",
        end: "200% left",
        containerAnimation: tl,
      scrub: true,
    }
  })




  // smooth scroll
  const lenis = new Lenis();

  lenis.on("scroll", (e) => {
    // console.log(e);
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  let lastScrollTop = 0;

  //set paperPlan transform
  paperPlane.style.scale = "1 1";
  //Flip paper plan to fit the direction of the moovement
  window.addEventListener(
    "scroll",
    function () {
      var currentScroll = window.scrollY || document.documentElement.scrollTop;
      if (currentScroll > lastScrollTop) {
        // user is scrolling down

        // var transform = window
        //   .getComputedStyle(paperPlaneTransform)
        //   .getPropertyValue("transform");
        // if (transform && transform.indexOf("rotateY(0deg)") !== 0) {
        //   paperPlaneTransform.style.transform =
        //     paperPlaneTransform.style.transform.replace(
        //       /rotateY\([^)]*\)/,
        //       "rotateY(0deg)"
        //     );
        // }

        paperPlane.style.scale = '1 1'
      } else {
        paperPlane.style.scale = '-1 1'
      }
      lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Pour gérer les bords
    },
    false
  );



});

let nav_tl = gsap.timeline();

function scrollToContact(e) {
  e.preventDefault();
  const contactContainerPosition = document.documentElement.clientWidth * 20.05;
  nav_tl.to(window, { duration: 2.5, scrollTo: contactContainerPosition });
}

function scrollToOffer(e) {
  e.preventDefault();
  const contactContainerPosition = document.documentElement.clientWidth * 11.05;
  nav_tl.to(window, { duration: 2.5, scrollTo: contactContainerPosition });
}

function scrollToAbout(e) {
  e.preventDefault();
  const contactContainerPosition = document.documentElement.clientWidth * 7.05;
  nav_tl.to(window, { duration: 2.5, scrollTo: contactContainerPosition });
}

document.querySelector('#navbar__link_about').addEventListener("click", scrollToAbout)
document.querySelector('#navbar__link_offer').addEventListener("click", scrollToOffer)
document.querySelector('#navbar__link_contact').addEventListener("click", scrollToContact)
