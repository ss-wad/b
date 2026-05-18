# 2b_docker

## How to Run

1. Make sure Docker Desktop is running.
2. Open a terminal in this folder and run these commands in order:

**1. Build the Docker image** (Builds the image using the Dockerfile in the current folder)
```bash
docker build -t app .
```

**2. Run the Docker container** (Starts the container in background and maps ports if it's a web server)
```bash
docker run -d -p 8080:80 app
```

## Step 3: How to View Your Work
If your app is a web server, once you run the container, open your browser and go to:
[http://localhost:8080](http://localhost:8080)

## Extra Commands

**1. Verify image creation** (Checks that your image was created successfully)
```bash
docker images
```

**2. Check running containers** (Verifies if the container is currently running)
```bash
docker ps
```

**3. Stop the container** (Stops the running container using its ID from the previous step)
```bash
docker stop <container_id>
```



