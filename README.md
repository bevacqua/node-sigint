node-sigint
===========

node-sigint simply enables the expected `SIGINT` behavior in windows platforms

Installation

    npm install node-sigint

Usage: 

    require('node-sigint');

Now the current process will emit `SIGINT` when it receives a `SIGINT` signal.