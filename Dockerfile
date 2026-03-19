# Stage 1: Build the React Application
FROM node:20-alpine as build

WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependacies
RUN npm install

# Copy the rest of the application code
COPY . .

# Add build-args for React environment variables
ARG REACT_APP_STRIPE_PUBLISHABLE_KEY
ARG REACT_APP_API_URL

ENV REACT_APP_STRIPE_PUBLISHABLE_KEY=$REACT_APP_STRIPE_PUBLISHABLE_KEY
ENV REACT_APP_API_URL=$REACT_APP_API_URL

# build the application
RUN npm run build


# Stage 2: Serve the application with Nginx
FROM nginx:alpine

# Copy the build output from the previous stage to Nginx html directory
COPY --from=build /app/build /usr/share/nginx/html

# Replace default Nginx config to support client-side routing
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 3000
EXPOSE 3000

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
