/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns:[
            {
                hostname: "ctqlsgdqdxtmapwwtslv.supabase.co",
                protocol: "https",
                port: "",
            },
            {
                hostname: "utfs.io",
                protocol: "https",
                port: "",
            }
        ]
    }
};

export default nextConfig;
