---
title: Server Configuration
---
Fiction uses `config.json` as main configuration file. It's parsed by `_configParser` function on startup and requires `shelljq` module to be loaded.

```json
{
    // Main configuration
    "core": "socat", // Command to use to start the TCP server. Supported options are: bash, socat, ncat, netcat
    "address": "0.0.0.0", // Server's source IP address
    "port": 8080, // Server's TCP port
    // SSL configuration
    "ssl": { 
        "enabled": false,
        "key": "", // requires absolute path to key file when SSL is enabled
        "cert": "" // requires absolute path to certificate file when SSL is enabled
    },
    "encode_routes": false, // whether encode .routes file, more secure but less performant
    // Logging options
    "logs": { 
        "show_addr": false, // log client IP address
        "show_ua": false, // log User-Agent; only for development mode
        "show_headers": false // log ALL client headers; only for development mode
    },
    // Hot-Reload options
    // requires inotifywait package, otherwise md5sum is used as fallback
    "hot_reload": {
        "enabled": true,
        // what files should be monitored. Either absolute path or relative path to Fiction's main directory, wildcard is supported
        "files": ["pages/*"], 
        "interval": 2 // only applicable when md5sum is used instead of inotifywait; changes the interval of file comparing in seconds
    },
    // What plugins to bundle with website
    // "lucide-icons": adds <script> to load Lucide Icons (https://lucide.dev/icons/)
    // "tailwindcss": loads TailwindCSS (https://tailwindcss.com/) using play CDN
    "plugins": [
        "lucide-icons",
        "tailwindcss"
    ]
}
```