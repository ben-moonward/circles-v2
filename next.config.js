/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            // Redirect root route to dashboard
            {
                source: "/",
                destination: "/dashboard",
                permanent: true,
            },
        ];
    },
};

module.exports = nextConfig;
