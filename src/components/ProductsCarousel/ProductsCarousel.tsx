import React, { useState } from "react";
import * as G from "../../styles/GlobalStyles"
import * as C from "./Product.styles";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import { StoreProduct } from "../StoreProduct/StoreProduct"
import StoreProducts from "../../data/items.json";


export default function ProductsCarousel({ children }: { children: JSX.Element }) {
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
        breakpoints: {
            "(min-width: 320px)": {
              slides: { perView: 1, spacing: 5 },
            },
            "(min-width: 500px)": {
              slides: { perView: 2, spacing: 16 },
            },
            "(min-width: 800px)": {
              slides: { perView: 3, spacing: 10 },
            },
            "(min-width: 1000px)": {
              slides: { perView: 4, spacing: 10 },
            },
            "(min-width: 1200px)": {
              slides: { perView: 5, spacing: 10 },
            },
          },
          slides: { perView: 1 },
     
        loop: true,
        mode: "free-snap",
      
    })


    return (
        <G.Container>
            <C.Wrapper>
                {<C.Slider ref={sliderRef}>
                    {children}
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
        </G.Container>
    )
}

function Arrow(props: {
    disabled: boolean
    left?: boolean
    onClick: (e: any) => void
}) {
    const disabeld = props.disabled ? " arrow--disabled" : ""
    return (
        <svg
            onClick={props.onClick}
            className={`arrow ${props.left ? "arrow--left" : "arrow--right"
                } ${disabeld}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
        >
            {props.left && (
                <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
            )}
            {!props.left && (
                <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
            )}
        </svg>
    )
}
