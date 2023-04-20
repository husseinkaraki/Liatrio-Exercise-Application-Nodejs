

## Prerequisites

- Node v18.16.0
- Docker 

## Run the App
`npm start dev`

## Docker

To build the image `docker build -t liatrio:v1 .`

To run the image `docker run -d -p 8080:8080 --name liatrio-container liatrio:v1
280dc02c41e7bfea49597a513233cfea2e514083abfe48d783d93a939e2b3e19`

## Potential Issues
- Change Docker Desktop config - builtKit to false