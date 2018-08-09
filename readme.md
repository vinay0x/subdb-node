# The Node SubDB Wrapper

SubDB-Node is a simple wrapper for the awesome thesubdb.com API. The package exposes a main function `download` which takes in a file path and downloads a subtitle in the same directory with the same filename as the video.

# Installation 
`npm i subdb-node` to use the API.
`npm i -g subdb-node` to use the commandline tool.

## API Usage
```
const subdb = require('node-subdb')
subdb.download('path-to-video-file')
```
The function returns a Promise which resolves to `true` if a subtitle is found and downloaded. It returns `null` if no subtitles were found.

## Commandline Usage
`subdb <filePath>`
