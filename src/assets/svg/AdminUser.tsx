import IconTypes from "./IconTypes";

export const AdminUserIcon: React.FC<IconTypes> = (props: IconTypes) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg"
            width={props.width}
            height={props.height}
            viewBox="0 0 24 24"
            fill="none">
            <path
                d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10ZM3.41 22c0-3.87 3.85-7 8.59-7 .96 0 1.89.13 2.76.37"
                stroke={props.color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round">
            </path>
            <path
                d="M22 18c0 .75-.21 1.46-.58 2.06-.21.36-.48.68-.79.94-.7.63-1.62 1-2.63 1a3.97 3.97 0 0 1-3.42-1.94A3.92 3.92 0 0 1 14 18c0-1.26.58-2.39 1.5-3.12A3.999 3.999 0 0 1 22 18Z"
                stroke={props.color}
                strokeWidth="2"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round">
            </path>
            <path d="m16.44 18 .99.99 2.13-1.97"
                stroke={props.color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round">
            </path>
        </svg>
    );
};

