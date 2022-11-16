gsap.registerPlugin(CSSRulePlugin);

var tl = gsap.timeline({defaults:{opacity: 0, ease:"back"}});

function init() {
  tl.from("#demo", {ease:"linear", autoAlpha:0})
    .from("h1", {x:80, duration:1})
    .from("h2", {x:-80, duration:1}, "<")
    .from("p", {y:30}, "-=0.2")
    .from("button", {y:50}, "-=0.4")
    .from("#items > g", {scale:0, transformOrigin:"50% 50%", stagger: 0.1}, "-=0.5")
  }

window.addEventListener("load", function(event) {
init();
});
