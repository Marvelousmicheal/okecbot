import { gsap } from "gsap";


export function staggerAnimation(nodel, node2){
  gsap.to([nodel, node2],{
    duration: 0.9,
    height: "100%",
    transformOrigin:"right top",
    ease: "power3",
    stagger:{
      amount:0.3,
    }
  })
}

export function staggerNav(node1, node2, node3, node4) {
  gsap.from([node1, node2, node3, node4], {
    duration: 0.8,
    y: 180,
    delay: 0.5,
    ease: "power3,inOut",
  });
}

export function staggerRevealAnimation(node1) {
  gsap.from(node1, {
    y: 70,

    duration: 1,
    delay: 0.5,
    opacity: 0,
    ease: "power3,inOut",
  });
}