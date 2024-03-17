// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     images : {
//         domains : [
//             "oaidalleapiprodscus.blob.core.windows.net",
//             "replicate.delivery",
//             "images.remotePatterns",
//         ]
//     }
// }

// module.exports = nextConfig


import createNextIntlPlugin from 'next-intl/plugin';
 
const withNextIntl = createNextIntlPlugin();
 
/** @type {import('next').NextConfig} */
const nextConfig = {
    images : {
        domains : [
            "oaidalleapiprodscus.blob.core.windows.net",
            "replicate.delivery",
            "images.remotePatterns",
        ]
    }
}
 
export default withNextIntl(nextConfig);
