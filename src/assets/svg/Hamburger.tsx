import IconTypes from "./IconTypes";

export const HamburgerIcon: React.FC<IconTypes> = (props: IconTypes) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={props.width} height={props.height} viewBox="0 0 24 24" fill="none">
            <path d="M3 7h18M3 12h18M3 17h18"
                stroke={props.color}
                strokeWidth="2"
                strokeLinecap="round">
            </path>
        </svg>
    );
};