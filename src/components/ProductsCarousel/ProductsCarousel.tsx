import React, { useState } from "react";
import { Wrapper, Slider, Slide, ArrowButton, ArrowButtonR, Dots, Dot } from "./styles";
import "./style.css";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import { Container } from "../../styles/global"
import { StoreProduct } from "../StoreProduct/StoreProduct"
import StoreProducts from "../../data/items.json";

export default function ProductsCarousel() {
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
        slides: {
            perView: 4,
            spacing: 16,
        },
    })
    
    return (
        <Container>
            <Wrapper>
                {<Slider ref={sliderRef}>
                    {StoreProducts.map((item, index) => (
                        <Slide key={index + 1} className="keen-slider__slide">
                            <StoreProduct {...item} />
                        </Slide>
                    ))}
                </Slider>}
                {loaded && instanceRef.current && (
                    <>
                        <ArrowButton
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
                                    stroke="#000000"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeMiterlimit="10"
                                    strokeWidth="2"
                                    d="M15 19.92L8.48 13.4c-.77-.77-.77-2.03 0-2.8L15 4.08">
                                </path>
                            </svg>
                        </ArrowButton>

                        <ArrowButtonR
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
                                <path stroke="#000000"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeMiterlimit="10"
                                    strokeWidth="2"
                                    d="M8.91 19.92l6.52-6.52c.77-.77.77-2.03 0-2.8L8.91 4.08">
                                </path>
                            </svg>
                        </ArrowButtonR>
                    </>
                )}
            </Wrapper>
            {loaded && instanceRef.current && (
                <Dots>
                    {[
                        ...Array(instanceRef.current.track.details.slides.length - 3).keys(),
                    ].map((idx) => {
                        return (
                            <Dot
                                key={idx}
                                onClick={() => {
                                    instanceRef.current?.moveToIdx(idx)
                                }}
                                className={"dot" + (currentSlide === idx ? " active" : "")}
                            >
                            </Dot>
                        )
                    })}
                </Dots>
            )}
        </Container>
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
