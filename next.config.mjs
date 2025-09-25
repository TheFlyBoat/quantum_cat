import fs from 'fs';

/** @type {import('next').NextConfig} */
const pkg = JSON.parse(fs.readFileSync('./package.json', 'utf8'));

const nextConfig = {
  env: {
    NEXT_PUBLIC_APP_VERSION: pkg.version,
  },
};

export default nextConfig;
