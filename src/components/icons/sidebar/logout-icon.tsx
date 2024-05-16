const LogoutIcon = ({ color, ...props }: React.SVGProps<SVGSVGElement>) => {
    return (
        <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M9.33333 3.33333L8.39333 4.27333L9.44667 5.33333H4V6.66667H9.44667L8.39333 7.72L9.33333 8.66667L12 6L9.33333 3.33333ZM1.33333 1.33333H6V0H1.33333C0.6 0 0 0.6 0 1.33333V10.6667C0 11.4 0.6 12 1.33333 12H6V10.6667H1.33333V1.33333Z"
                fill={color ?? "currentColor"}
            />
        </svg>
    );
};

export default LogoutIcon;
