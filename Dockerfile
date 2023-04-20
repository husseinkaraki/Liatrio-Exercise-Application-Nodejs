# Choose the official Node.js LTS (Long Term Support) base image
FROM node:lts

# Create app directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the dependencies
RUN npm ci --only=production

# Copy the application source code to the working directory
COPY . .

# Expose the application port
EXPOSE 8080

# Start the application
CMD [ "node", "dist/index.js" ]
