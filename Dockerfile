# Stage 1: Build stage
FROM node:18-alpine AS builder

# Install necessary tools
RUN npm install -g corepack pnpm

# Set working directory
WORKDIR /app

# Copy package.json and pnpm-lock.yaml separately
COPY package.json pnpm-lock.yaml ./

# Install dependencies using pnpm
RUN corepack enable pnpm && pnpm i --frozen-lockfile

# Copy the rest of the application
COPY . .

# Run the build command
RUN corepack enable pnpm && pnpm run build

# Stage 2: Runtime stage
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy built files from the previous stage
COPY --from=builder /app .

# Expose port 3000
EXPOSE 3000

# Define the command to run the application
CMD ["pnpm", "run", "preview"]
