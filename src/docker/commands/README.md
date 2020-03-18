---
title: Docker Commands
---

# Docker commands

## run

Start a container

`docker run nginx`

#### options

| param  | result                                              | example                                |
| ------ | --------------------------------------------------- | -------------------------------------- |
| -d     | run the container in detached mode                  | `docker run -d nginx`                  |
| --name | assign a specified name to the container            | `docker run --name mycontainer nginx`  |
| -i     | enable command line input to the attached container | `docker run -i nginx`                  |
| -t     | enable full terminal control of the container       | `docker run -it nginx`                 |
| -p     | map a port on the host to a port on the container   | `docker run -p 80:5000 nginx`          |
| -v     | map the storage volume to an external directory     | `docker run -v /path/to/storage nginx` |

#### Tags

You can add a tag to the image name to specify a version

`docker run redis:4.0`

## stop

Stop a container

`docker stop silly_sammett`

You can find the name of a container via [ps](#ps) and confirm it has stopped via [ps -a](#ps)

## rm

Stop and remove a container

`docker rm silly_sammett`

You can find the name of a container via [ps](#ps) and confirm it has stopped via [ps -a](#ps)

## pull

Download an image. Note that [run](#run) will automatically download an image before running it. Pull simply downloads the image without starting a container.

`docker pull nginx`

## ps

List all running containers

`docker ps`

#### options

| param | result                                   | example        |
| ----- | ---------------------------------------- | -------------- |
| -a    | show both running and stopped containers | `docker ps -a` |

## images

List downloaded images

`docker images`

## rmi

Remove an image. Note that all containers made from this image must be deleted via [rm](#rm) first

`docker rmi nginx`

You can find the name of an image via [images](#images)

## exec

Execute a command on a running container

`docker exec silly_sammett cat /etc/hosts`

## attach

Attach a terminal to an existing container via a container's name or ID

`docker attach a043d`

You can find the name or ID of a container via [ps](#ps)

## inspect

Retrieve a JSON object detailing a container

`docker inspect silly_sammett`

You can find the name of a container via [ps](#ps)

## logs

View the logs of a container

`docker logs silly_sammett`

You can find the name or ID of a container via [ps](#ps)
