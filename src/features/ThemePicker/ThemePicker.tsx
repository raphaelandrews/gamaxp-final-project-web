import { ReactNode, useContext } from "react";
import { ThemeContext } from "@/context";

import { Span, ThemePickerContainer, ThemePickerDefault } from "./ThemePicker.styles";
import { Button } from "@/components";

import { lightTheme } from "@/styles";

interface ThemePickerProps {
    height?: string;
    children?: ReactNode;
}

export const ThemePicker = (props: ThemePickerProps) => {
    const { toggleSetTheme } = useContext(ThemeContext);

    return (
        <ThemePickerContainer>       
                <ThemePickerDefault>
                    <Button
                        action={() => toggleSetTheme("light")}
                        minWidth="136px"
                        padding="1rem"
                        border={`2px solid ${lightTheme.colors.primary}`}
                        borderRadius=".5rem"
                        backgroundColor={lightTheme.colors.background}>
                        <Span
                            fontFamily={lightTheme.fonts.primary}
                            fontSize="var(--fs-5)"
                            color={lightTheme.colors.primary}
                        >
                            Light
                        </Span>

                        <Span padding=".25rem 0 0">
                            <Span
                                display="inline-block"
                                textAlign="left"
                                textIndent="100%"
                                whiteSpace="nowrap"
                                width="1.25rem"
                                height="1.25rem"
                                borderRadius="50%"
                                backgroundColor={lightTheme.colors.primary}
                                boxShadow={`0 0 0 2px ${lightTheme.colors.background}`}
                                verticalAlign="bottom"
                                overflow="hidden"
                            />
                            <Span
                                display="inline-block"
                                textAlign="left"
                                textIndent="100%"
                                whiteSpace="nowrap"
                                width="1.25rem"
                                height="1.25rem"
                                borderRadius="50%"
                                backgroundColor={lightTheme.colors.alternative}
                                boxShadow={`0 0 0 2px ${lightTheme.colors.background}`}
                                verticalAlign="bottom"
                                overflow="hidden"
                            />
                            <Span
                                display="inline-block"
                                textAlign="left"
                                textIndent="100%"
                                whiteSpace="nowrap"
                                width="1.25rem"
                                height="1.25rem"
                                borderRadius="50%"
                                backgroundColor={lightTheme.colors.quaternary}
                                boxShadow={`0 0 0 2px ${lightTheme.colors.background}`}
                                verticalAlign="bottom"
                                overflow="hidden"
                            />
                            <Span
                                display="inline-block"
                                textAlign="left"
                                textIndent="100%"
                                whiteSpace="nowrap"
                                width="1.25rem"
                                height="1.25rem"
                                borderRadius="50%"
                                backgroundColor={lightTheme.colors.backgroundAlt}
                                boxShadow={`0 0 0 2px ${lightTheme.colors.background}`}
                                verticalAlign="bottom"
                                overflow="hidden"
                            />
                            <Span
                                display="inline-block"
                                textAlign="left"
                                textIndent="100%"
                                whiteSpace="nowrap"
                                width="1.25rem"
                                height="1.25rem"
                                borderRadius="50%"
                                backgroundColor={lightTheme.colors.tertiary}
                                boxShadow={`0 0 0 2px ${lightTheme.colors.background}`}
                                verticalAlign="bottom"
                                overflow="hidden"
                            />

                        </Span>
                    </Button>
                    <Button
                        action={() => toggleSetTheme("dark")}
                        minWidth="136px"
                        padding="1rem"
                        border={`2px solid ${lightTheme.colors.primary}`}
                        borderRadius=".5rem"
                        backgroundColor={lightTheme.colors.background}>
                        <Span
                            fontFamily={lightTheme.fonts.primary}
                            fontSize="var(--fs-5)"
                            color={lightTheme.colors.primary}
                        >
                            Light
                        </Span>

                        <Span padding=".25rem 0 0">
                            <Span
                                display="inline-block"
                                textAlign="left"
                                textIndent="100%"
                                whiteSpace="nowrap"
                                width="1.25rem"
                                height="1.25rem"
                                borderRadius="50%"
                                backgroundColor={lightTheme.colors.primary}
                                boxShadow={`0 0 0 2px ${lightTheme.colors.background}`}
                                verticalAlign="bottom"
                                overflow="hidden"
                            />
                            <Span
                                display="inline-block"
                                textAlign="left"
                                textIndent="100%"
                                whiteSpace="nowrap"
                                width="1.25rem"
                                height="1.25rem"
                                borderRadius="50%"
                                backgroundColor={lightTheme.colors.alternative}
                                boxShadow={`0 0 0 2px ${lightTheme.colors.background}`}
                                verticalAlign="bottom"
                                overflow="hidden"
                            />
                            <Span
                                display="inline-block"
                                textAlign="left"
                                textIndent="100%"
                                whiteSpace="nowrap"
                                width="1.25rem"
                                height="1.25rem"
                                borderRadius="50%"
                                backgroundColor={lightTheme.colors.quaternary}
                                boxShadow={`0 0 0 2px ${lightTheme.colors.background}`}
                                verticalAlign="bottom"
                                overflow="hidden"
                            />
                            <Span
                                display="inline-block"
                                textAlign="left"
                                textIndent="100%"
                                whiteSpace="nowrap"
                                width="1.25rem"
                                height="1.25rem"
                                borderRadius="50%"
                                backgroundColor={lightTheme.colors.backgroundAlt}
                                boxShadow={`0 0 0 2px ${lightTheme.colors.background}`}
                                verticalAlign="bottom"
                                overflow="hidden"
                            />
                            <Span
                                display="inline-block"
                                textAlign="left"
                                textIndent="100%"
                                whiteSpace="nowrap"
                                width="1.25rem"
                                height="1.25rem"
                                borderRadius="50%"
                                backgroundColor={lightTheme.colors.tertiary}
                                boxShadow={`0 0 0 2px ${lightTheme.colors.background}`}
                                verticalAlign="bottom"
                                overflow="hidden"
                            />

                        </Span>
                    </Button>
                    <Button
                        action={() => toggleSetTheme("cyberpunk")}
                        minWidth="136px"
                        padding="1rem"
                        border={`2px solid ${lightTheme.colors.primary}`}
                        borderRadius=".5rem"
                        backgroundColor={lightTheme.colors.background}>
                        <Span
                            fontFamily={lightTheme.fonts.primary}
                            fontSize="var(--fs-5)"
                            color={lightTheme.colors.primary}
                        >
                            Light
                        </Span>

                        <Span padding=".25rem 0 0">
                            <Span
                                display="inline-block"
                                textAlign="left"
                                textIndent="100%"
                                whiteSpace="nowrap"
                                width="1.25rem"
                                height="1.25rem"
                                borderRadius="50%"
                                backgroundColor={lightTheme.colors.primary}
                                boxShadow={`0 0 0 2px ${lightTheme.colors.background}`}
                                verticalAlign="bottom"
                                overflow="hidden"
                            />
                            <Span
                                display="inline-block"
                                textAlign="left"
                                textIndent="100%"
                                whiteSpace="nowrap"
                                width="1.25rem"
                                height="1.25rem"
                                borderRadius="50%"
                                backgroundColor={lightTheme.colors.alternative}
                                boxShadow={`0 0 0 2px ${lightTheme.colors.background}`}
                                verticalAlign="bottom"
                                overflow="hidden"
                            />
                            <Span
                                display="inline-block"
                                textAlign="left"
                                textIndent="100%"
                                whiteSpace="nowrap"
                                width="1.25rem"
                                height="1.25rem"
                                borderRadius="50%"
                                backgroundColor={lightTheme.colors.quaternary}
                                boxShadow={`0 0 0 2px ${lightTheme.colors.background}`}
                                verticalAlign="bottom"
                                overflow="hidden"
                            />
                            <Span
                                display="inline-block"
                                textAlign="left"
                                textIndent="100%"
                                whiteSpace="nowrap"
                                width="1.25rem"
                                height="1.25rem"
                                borderRadius="50%"
                                backgroundColor={lightTheme.colors.backgroundAlt}
                                boxShadow={`0 0 0 2px ${lightTheme.colors.background}`}
                                verticalAlign="bottom"
                                overflow="hidden"
                            />
                            <Span
                                display="inline-block"
                                textAlign="left"
                                textIndent="100%"
                                whiteSpace="nowrap"
                                width="1.25rem"
                                height="1.25rem"
                                borderRadius="50%"
                                backgroundColor={lightTheme.colors.tertiary}
                                boxShadow={`0 0 0 2px ${lightTheme.colors.background}`}
                                verticalAlign="bottom"
                                overflow="hidden"
                            />

                        </Span>
                    </Button>
                    <Button
                        action={() => toggleSetTheme("light")}
                        minWidth="136px"
                        padding="1rem"
                        border={`2px solid ${lightTheme.colors.primary}`}
                        borderRadius=".5rem"
                        backgroundColor={lightTheme.colors.background}>
                        <Span
                            fontFamily={lightTheme.fonts.primary}
                            fontSize="var(--fs-5)"
                            color={lightTheme.colors.primary}
                        >
                            Light
                        </Span>

                        <Span padding=".25rem 0 0">
                            <Span
                                display="inline-block"
                                textAlign="left"
                                textIndent="100%"
                                whiteSpace="nowrap"
                                width="1.25rem"
                                height="1.25rem"
                                borderRadius="50%"
                                backgroundColor={lightTheme.colors.primary}
                                boxShadow={`0 0 0 2px ${lightTheme.colors.background}`}
                                verticalAlign="bottom"
                                overflow="hidden"
                            />
                            <Span
                                display="inline-block"
                                textAlign="left"
                                textIndent="100%"
                                whiteSpace="nowrap"
                                width="1.25rem"
                                height="1.25rem"
                                borderRadius="50%"
                                backgroundColor={lightTheme.colors.alternative}
                                boxShadow={`0 0 0 2px ${lightTheme.colors.background}`}
                                verticalAlign="bottom"
                                overflow="hidden"
                            />
                            <Span
                                display="inline-block"
                                textAlign="left"
                                textIndent="100%"
                                whiteSpace="nowrap"
                                width="1.25rem"
                                height="1.25rem"
                                borderRadius="50%"
                                backgroundColor={lightTheme.colors.quaternary}
                                boxShadow={`0 0 0 2px ${lightTheme.colors.background}`}
                                verticalAlign="bottom"
                                overflow="hidden"
                            />
                            <Span
                                display="inline-block"
                                textAlign="left"
                                textIndent="100%"
                                whiteSpace="nowrap"
                                width="1.25rem"
                                height="1.25rem"
                                borderRadius="50%"
                                backgroundColor={lightTheme.colors.backgroundAlt}
                                boxShadow={`0 0 0 2px ${lightTheme.colors.background}`}
                                verticalAlign="bottom"
                                overflow="hidden"
                            />
                            <Span
                                display="inline-block"
                                textAlign="left"
                                textIndent="100%"
                                whiteSpace="nowrap"
                                width="1.25rem"
                                height="1.25rem"
                                borderRadius="50%"
                                backgroundColor={lightTheme.colors.tertiary}
                                boxShadow={`0 0 0 2px ${lightTheme.colors.background}`}
                                verticalAlign="bottom"
                                overflow="hidden"
                            />

                        </Span>
                    </Button>
                </ThemePickerDefault>
        </ThemePickerContainer>
    )
}