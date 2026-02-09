# ---- Base image (builder) ----
FROM node:18-alpine AS builder

# Set work directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy seluruh source code
COPY . .

# Build Next.js
RUN npm run build

# ---- Production image ----
FROM node:18-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production

# Copy only the necessary output
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules

EXPOSE 3000

# Jalankan Next.js
CMD ["npm", "start"]
