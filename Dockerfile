FROM node:18-slim

WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Install dependencies
COPY package.json package-lock.json* ./
RUN npm ci

# Copy source code
COPY . .

# Build the Next.js app
RUN npm run build

# Next.js listens on 3000 by default
EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Start in production mode
CMD ["npm", "start"]

