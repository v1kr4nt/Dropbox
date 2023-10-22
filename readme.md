## Project Overview

This Node.js application serves as a file synchronization tool. It watches a local directory for changes and automatically uploads new or modified files to a remote server. It also provides an HTTP endpoint to receive files from clients.

## Project Dependencies

This project uses several Node.js packages:

- `dotenv`: For reading environment variables.
- `node-watch`: For monitoring changes in the local directory.
- `node-fetch`: For making HTTP requests to the remote server.
- `fs`: For file system operations.
- `express`: For setting up a simple HTTP server.
- `multer`: For handling file uploads via HTTP requests.
- `form-data`: For creating multipart/form-data requests.
- `path`: For handling file paths.

## Configuration

This project relies on environment variables that are typically set in a `.env` file. You should create a `.env` file in the project directory and configure the following variables:

- `SYNC_OUT_DIR`: The local directory to monitor for file changes.
- `SYNC_IN_DIR`: The local directory where files received from the remote server will be saved.
- `REMOTE_URL`: The URL of the remote server where files will be uploaded.
- `PORT`: The port on which the HTTP server will listen.

Here's an example of a `.env` file:

```env
SYNC_OUT_DIR=/path/to/sync/out/dir
SYNC_IN_DIR=/path/to/sync/in/dir
REMOTE_URL=http://remote-server-url
PORT=3000
```

## Usage

1. Install the project dependencies by running `npm install`.

2. Configure your environment variables in the `.env` file as mentioned above.

3. Start the application using `node your-app-file.js` or another method you prefer.

4. The application will watch the local directory specified in `SYNC_OUT_DIR`. When a file is created or modified, it will be automatically uploaded to the remote server specified in `REMOTE_URL`.

5. You can also manually upload a file by sending a POST request to `http://localhost:PORT/files` with a file attached.

6. Files received from the remote server will be saved in the local directory specified in `SYNC_IN_DIR`.

## HTTP Endpoint

### `POST /files`

- Use this endpoint to manually upload a file to the local directory.
- Send a POST request to `http://localhost:PORT/files` with a `file` field in the form data.
- The uploaded file will be saved in the `SYNC_IN_DIR` directory.

## Example `curl` Command

You can use the following `curl` command to manually upload a file:

```bash
curl -X POST -F "file=@/path/to/your/file" http://localhost:PORT/files
```

Replace `/path/to/your/file` with the path to the file you want to upload, and `PORT` with the configured port for your server.

Feel free to modify and expand on this template to suit your project's needs.
