# Use an official Node.js runtime as the base image for amd64 architecture
FROM node:18-alpine AS builder

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the app's source code to the container
COPY . .

# Build the Next.js app
RUN npm run build

# Switch to a slimmer runtime image for serving the app
FROM node:18-slim

# Expose the port that Next.js runs on (usually 3000)

EXPOSE 80

WORKDIR /app

# Copy the built Next.js app from the builder stage
COPY --from=builder /app/ .

# Start the Next.js app in production mode

CMD [ "npm", "start" ]

