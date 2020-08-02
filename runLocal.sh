#!/bin/bash

# trap ctrl-c and call ctrl_c()
trap ctrl_c INT

function ctrl_c() {
	echo "Terminating..."
	kill -9 %1
}

python3 -m http.server --directory docs &
watchmedo auto-restart --directory templates --pattern '*' --recursive python3 compile.py