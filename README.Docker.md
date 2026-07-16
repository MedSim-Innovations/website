# Create a PRODUCTION build

docker build --tag medsim-innovations-website .

## View the image to confirm

docker images

```
REPOSITORY                TAG               IMAGE ID       CREATED         SIZE
medsim-innovations-website             latest            8c5fc80f098e   14 seconds ago   130MB
```

## Run the containerized application

docker run -p 3000:3000 medsim-innovations-website

### To run in the background instead (detached from the terminal)

docker run -d -p 3000:3000 --name medsim-innovations website

## Confirm that the container is running

docker ps

```
CONTAINER ID   IMAGE           COMMAND                  CREATED             STATUS             PORTS                    NAMES
f49b74736a9d   website   "node server.js"         About a minute ago   Up About a minute   0.0.0.0:3000->3000/tcp medsim-innovations
```

## To stop the application

docker stop medsim-innovations-website

### (or)

docker stop medsim-innovations


# Run the application in DEVELOPMENT mode

docker compose watch dev-server