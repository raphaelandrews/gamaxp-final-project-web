import React, { useEffect, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import * as C from "./ProductsCarousel.styles";

export function ProductsCarousel({ children }: { children: JSX.Element }) {
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
        loop: true,
        mode: "free",
        breakpoints: {
            "(min-width: 320px)": {
                slides: { perView: 1, spacing: 5 },
            },
            "(min-width: 500px)": {
                slides: { perView: 2, spacing: 24 },
            },
            "(min-width: 800px)": {
                slides: { perView: 3, spacing: 24 },
            },
            "(min-width: 1000px)": {
                slides: { perView: 4, spacing: 24 },
            },
            "(min-width: 1200px)": {
                slides: { perView: 5, spacing: 24 },
            },
        },
        slides: { perView: 1 },
    })


    return (
        <C.Wrapper>
            {<C.Slider ref={sliderRef}>
                {children}
            </C.Slider>}

            {loaded && instanceRef.current && (
                <>
                    <C.ArrowButton
                        onClick={(e: any) => e.stopPropagation() || instanceRef.current?.prev()}
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
                        onClick={(e: any) => e.stopPropagation() || instanceRef.current?.next()}

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
