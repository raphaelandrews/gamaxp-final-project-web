import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import * as C from "./Banner.styles";


export function Banner() {
    const [currentSlide, setCurrentSlide] = React.useState(0)
    const [loaded, setLoaded] = useState(false)
    const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
        initial: 0,
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel)
        },
        created() {
            setLoaded(true)
        },
    })

    return (
        <C.Wrapper>
            {<C.Slider ref={sliderRef}>
                <div className="keen-slider__slide">1</div>
                <div className="keen-slider__slide">2</div>
                <div className="keen-slider__slide">3</div>
                <div className="keen-slider__slide">4</div>
                <div className="keen-slider__slide">5</div>
                <div className="keen-slider__slide">6</div>
            </C.Slider>}

            {loaded && instanceRef.current && (
                <>
                    <C.ArrowButton
                        onClick={(e: any) =>
                            e.stopPropagation() || instanceRef.current?.prev()
                        }
                        disabled={currentSlide === 0}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none">
                            <path
                                stroke="var(--alt-color)"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeMiterlimit="10"
                                strokeWidth="2"
                                d="M15 19.92L8.48 13.4c-.77-.77-.77-2.03 0-2.8L15 4.08">
                            </path>
                        </svg>
                    </C.ArrowButton>

                    <C.ArrowButtonR
                        onClick={(e: any) =>
                            e.stopPropagation() || instanceRef.current?.next()
                        }
                        disabled={
                            currentSlide ===
                            instanceRef.current.track.details.slides.length - 1
                        }
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none">
                            <path
                                stroke="var(--alt-color)"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeMiterlimit="10"
                                strokeWidth="2"
                                d="M8.91 19.92l6.52-6.52c.77-.77.77-2.03 0-2.8L8.91 4.08">
                            </path>
                        </svg>
                    </C.ArrowButtonR>
                </>
            )}
        </C.Wrapper>
    )
}