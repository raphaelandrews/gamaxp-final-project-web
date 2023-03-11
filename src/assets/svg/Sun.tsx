import IconTypes from "./IconTypes";

export const SunIcon: React.FC<IconTypes> = (props: IconTypes) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={props.width} height={props.height} fill="none">
            <path
                d="M12 18.5a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13Z"
                stroke={props.color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
            </path>
            <path d="m19.14 19.14-.13-.13m0-14.02.13-.13-.13.13ZM4.86 19.14l.13-.13-.13.13ZM12 2.08V2v.08ZM12 22v-.08.08ZM2.08 12H2h.08ZM22 12h-.08.08ZM4.99 4.99l-.13-.13.13.13Z"
                stroke={props.color}
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round">
            </path>
        </svg>
    );
};