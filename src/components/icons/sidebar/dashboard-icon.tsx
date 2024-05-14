const DashboardIcon = ({ color, ...props }: React.SVGProps<SVGSVGElement>) => {
    return (
        <svg
            width={"16"}
            height={"16"}
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M12.6667 3.33333V4.66667H10V3.33333H12.6667ZM6 3.33333V7.33333H3.33333V3.33333H6ZM12.6667 8.66667V12.6667H10V8.66667H12.6667ZM6 11.3333V12.6667H3.33333V11.3333H6ZM14 2H8.66667V6H14V2ZM7.33333 2H2V8.66667H7.33333V2ZM14 7.33333H8.66667V14H14V7.33333ZM7.33333 10H2V14H7.33333V10Z"
                fill={color ?? "currentColor"}
            />
        </svg>
    );
};

export default DashboardIcon;
