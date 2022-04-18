import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import introData from "../../data/intro-data.json"
import "../../scss/components/_intro.scss"

gsap.registerPlugin(ScrollTrigger)

export default function Intro(props) {
    gsap.defaults({
        ease: 'none',
    })

    ScrollTrigger.defaults({
        toggleActions: 'play none none none',
        start: 'top bottom-=40px',
        // markers: true,
    })

    const el = useRef(null)
    const q = gsap.utils.selector(el)

    useEffect(() => {
        const introTitle = q(".intro__title")
        const introDesc = q(".intro__description")

        gsap.fromTo(introTitle, {
            clipPath: "inset(100% 0% 0% 0%)"
        }, {
            clipPath: "inset(0% 0% 0% 0%)",
            scrollTrigger: {
                trigger: introTitle,
            }
        })

        gsap.fromTo(introDesc, {
            autoAlpha: 0
        }, {
            autoAlpha: 1,
            scrollTrigger: {
                trigger: introDesc,
            }
        })
    })

    return(
        <section className={"intro"} ref={el}>
            <div className="intro__container">
                <h2 className={"intro__title"}>{introData.[props.id].title}</h2>
                <p className={"intro__description"}>{introData.[props.id].description}</p>
            </div>
        </section>
    )
}