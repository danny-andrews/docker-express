# Express Docker Demo

## Setup

* Run `docker build . --tag=express-demo` to create a Docker image.
* Run `docker run --publish 3000:8080 --detach express-demo` to run your Docker container from the given image.

## Useful Commands

* List all images: `docker image ls`
