# Use the latest Node.js image as the base
FROM node:latest

# Install nodemon globally for hot reloading
RUN npm install -g nodemon

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json first to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Expose the port your app runs on
EXPOSE 5500

# Dockerfile
CMD ["nodemon", "--legacy-watch", "index.js"]

