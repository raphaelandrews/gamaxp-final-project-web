import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import { Section } from "@/components";
import * as C from "./Banner.styles";
import { ArrowLeft, ArrowRight } from "@/assets/svg";

import banner1 from "../../assets/img/banner-1.png";
import banner2 from "../../assets/img/banner-2.png";
import banner3 from "../../assets/img/banner-3.png";

export function Banner() {
    const [currentSlide, setCurrentSlide] = React.useState(0)
    const [loaded, setLoaded] = useState(false)
    const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
        initial: 0,
        loop: true,
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel)
        },
        created() {
            setLoaded(true)
        },

    },
        [
            (slider) => {
                let timeout: ReturnType<typeof setTimeout>
                let mouseOver = false
                function clearNextTimeout() {
                    clearTimeout(timeout)
                }
                function nextTimeout() {
                    clearTimeout(timeout)
                    if (mouseOver) return
                    timeout = setTimeout(() => {
                        slider.next()
                    }, 2000)
                }
                slider.on("created", () => {
                    slider.container.addEventListener("mouseover", () => {
                        mouseOver = true
                        clearNextTimeout()
                    })
                    slider.container.addEventListener("mouseout", () => {
                        mouseOver = false
                        nextTimeout()
                    })
                    nextTimeout()
                })
                slider.on("dragStarted", clearNextTimeout)
                slider.on("animationEnded", nextTimeout)
                slider.on("updated", nextTimeout)
            },
        ]
    )

    return (
        <Section>
            <>
                {<C.Slider ref={sliderRef}>
                    <div className="keen-slider__slide"><img src={banner1} alt="" /></div>
                    <div className="keen-slider__slide"><img src={banner2} alt="" /></div>
                    <div className="keen-slider__slide"><img src={banner3} alt="" /></div>
                </C.Slider>}

                {loaded && instanceRef.current && (
                    <>
                        <C.ArrowButton
                            onClick={(e: any) => e.stopPropagation() || instanceRef.current?.prev()}
                            disabled={currentSlide === 0}
                            left="1rem"
                        >
                            <ArrowLeft width="24px" height="24px" color="var(--alt-color)" />
                        </C.ArrowButton>

                        <C.ArrowButton
                            onClick={(e: any) => e.stopPropagation() || instanceRef.current?.next()}
                            disabled={currentSlide === instanceRef.current.track.details.slides.length - 1}
                            right="1rem"
                        >
                            <ArrowRight width="24px" height="24px" color="var(--alt-color)" />
                        </C.ArrowButton>
                    </>
                )}
            </>
        </Section>
    )
}
