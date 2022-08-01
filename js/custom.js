// Question 5: (Adding interactivity features on apple.com website’s footer section)
// The following question is based on the responsive Apple website you built back in phase 1. As we didn't cover JavaScript back then, we didn't implement some of the interactive features of the website that are provided by JavaScript. You can use apple.com’s responsive code we wrote from the link provided below to implement the interactivity of apple.com's footer section.

// Responsive code for apple.com:
// ● https://evangadi.com/files/apple/responsive-code-jquery-for-footer.zip
// You can refer to apple.com’s live website to check how the footer behaves:
// ● https://www.apple.com/

// In summary, the footer fully displays all the five columns in expanded state while viewed on desktop or tablet size devices. You are required to implement the following mobile size features.

// Features on mobile size devices:
// ● Each of the five columns collapse to a single column. Make these columns collapse to a single column.

// ● All the sub-links under each <h3> are hidden. Hide these sub-links

// ● There is also a newly added "+" sign on the right side of each <h3> to trigger the expansion of the sub-links upon onclick event. Add the added "+" sign on the right side of each <h3>. (Hint: everything up to this point can be achieved without using any JavaScript at all. Bootstrap and CSS would be enough to achieve these).

// ● When users click on the "+" sign, the hidden sub-links under the respective <h3> slide down and show. Then the "+" sign changes to the "x" sign. (Hint: Use jQuery to implement the following feature)

//////////////////
  // let sal = $("#sal");
  // $(".shop").click(function () {
  //   if ($(window).width() <= 768) {
  //     sal.toggle();
  //     $(".shop").toggleClass("font");
  //   }
  // });
  // $(window).on("resize", (e) => {
  //   if ($(window).width() <= 768) {
  //     sal.css("display", "none");
  //   } else {
  //     sal.css("display", "block");
  //   }
  // });


// let coll = $(".collapsible");
// $(".collapsible").on("click", function () {
//   $(".collapsible.active:after ").css({
//     fontFamily: "FontAwesome",
//     content: "\f00d",
//     paddingLeft: "10px",
//     position: "absolute",
//     right: "25px",
//   });
// });

let coll = $(".collapsible");
$(coll).click(function () {
  $(".collapsible.active:after ").css({
  fontFamily: "Font Awesome 5 Free",
  fontWeight: 900,
  content: "\f007",
  });
});


//////////////////


// let coll = $(".collapsible");
// $(coll).on("click", function () {
// $(".collapsible.active:after ").css({
  // fontFamily: "FontAwesome",
  // content: "\f00d",
  // paddingLeft: "10px",
  // position: "absolute",
  // right: "25px"
// });
// });



// $(".collapsible").click(function () {
//   // $(".footer-links-wrapper h3").addClass("fa-solid fa-xmark");
//   $(".collapsible").toggleClass("font");
// });

// ● When users click on the "+" sign, the sub-links slide up and get hidden. Note: this interactivity only happens on mobile size devices. (Hint: Use jQuery to implement the following feature)

// if ($(window).width() < 768) {
//   $(".footer-links-wrapper").addClass("screen");
// } else {
//   $(".footer-links-wrapper").removeClass("screen");
// }
// $(window).on("resize", function () {
//   if ($(window).width() < 768) {
//     $(".footer-links-wrapper").addClass("screen");
//   } else {
//     $(".footer-links-wrapper").removeClass("screen");
//   }
// });
// $(document).on("click", ".screen h3", function () {
//   $(this).next("ul").slideToggle();
//   $(this).toggleClass("expanded");
// });

// use reload to refresh page so the list doesn't stay hidden



// if ($(window).width() <= 768) {  
//   let coll = document.getElementsByClassName("collapsible");

//   for (i = 0; i < coll.length; i++) {
//     coll[i].addEventListener("click", function () {
//       this.classList.toggle("active");
//       let content = this.nextElementSibling;
//       if (content.style.display === "block") {
//         content.style.display = "none";
//       } else {
//         content.style.display = "block";
//       }
//     });
//   } 
  
//   $(window).on("resize", (e) => {
//       if ($(window).width() <= 768) {
//         $(".list").css("display", "none");
//       } else {
//         $(".list").css("display", "block");
//       }
//     });
// }


  let sal = $("#sal");
  $(".shop").click(function () {
    if ($(window).width() <= 768) {
      sal.toggle();
      $(".shop").toggleClass("font");
    }
  });
  $(window).on("resize", (e) => {
    if ($(window).width() <= 768) {
      sal.css("display", "none");
    } else {
      sal.css("display", "block");
    }
  });


  let services = $("#services");
  $(".services").click(function () {
    if ($(window).width() <= 768) {
      services.toggle();
      $(".services").toggleClass("font");
    }
  });
  $(window).on("resize", (e) => {
    if ($(window).width() <= 768) {
      services.css("display", "none");
    } else {
      services.css("display", "block");
    }
  });


let account = $("#account");
$(".account").click(function () {
  if ($(window).width() <= 768) {
    account.toggle();
    $(".account").toggleClass("font");
  }
});
$(window).on("resize", (e) => {
  if ($(window).width() <= 768) {
    account.css("display", "none");
  } else {
    account.css("display", "block");
  }
});

let store = $("#store");
$(".store").click(function () {
  if ($(window).width() <= 768) {
    store.toggle();
    $(".store").toggleClass("font");
  }
});
$(window).on("resize", (e) => {
  if ($(window).width() <= 768) {
    store.css("display", "none");
  } else {
    store.css("display", "block");
  }
});

let business = $("#business");
$(".business").click(function () {
  if ($(window).width() <= 768) {
    business.toggle();
    $(".business").toggleClass("font");
  }
});
$(window).on("resize", (e) => {
  if ($(window).width() <= 768) {
    business.css("display", "none");
  } else {
    business.css("display", "block");
  }
});

let education = $("#education");
$(".education").click(function () {
  if ($(window).width() <= 768) {
    education.toggle();
    $(".education").toggleClass("font");
  }
});
$(window).on("resize", (e) => {
  if ($(window).width() <= 768) {
    education.css("display", "none");
  } else {
    education.css("display", "block");
  }
});

let health = $("#health");
$(".health").click(function () {
  if ($(window).width() <= 768) {
    health.toggle();
    $(".health").toggleClass("font");
  }
});
$(window).on("resize", (e) => {
  if ($(window).width() <= 768) {
    health.css("display", "none");
  } else {
    health.css("display", "block");
  }
});

let values = $("#values");
$(".values").click(function () {
  if ($(window).width() <= 768) {
    values.toggle();
    $(".values").toggleClass("font");
  }
});
$(window).on("resize", (e) => {
  if ($(window).width() <= 768) {
    values.css("display", "none");
  } else {
    values.css("display", "block");
  }
});

let about = $("#about");
$(".about").click(function () {
  if ($(window).width() <= 768) {
    about.toggle();
    $(".about").toggleClass("font");
  }
});
$(window).on("resize", (e) => {
  if ($(window).width() <= 768) {
    about.css("display", "none");
  } else {
    about.css("display", "block");
  }
});


