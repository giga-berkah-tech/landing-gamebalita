# Stage 1: Build
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy source code
COPY . .

# Build static site
RUN npm run build

# Stage 2: Production
FROM nginx:alpine

# Copy built static files
COPY --from=builder /app/out /usr/share/nginx/html

# Copy nginx config (optional, buat custom config)
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]