# Use Node.js LTS version
FROM node:18

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the app source code
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Start the app
CMD [ "npm", "start" ]


# # Build the image
# docker build -t nodejs-web-app .

# # Run the container
# docker run -p 3000:3000 nodejs-web-app
