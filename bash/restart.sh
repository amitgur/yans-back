#!/bin/bash

# restart with git and forever

echo 'starting YANS on server with forever'
    echo "Stopping node thread"
    forever stop yans_back.js

    echo "Restarting bandpad-idm-back"
    # user
    rm ./log/forever.log

    forever start -l /home/bandpad/bandpad/yans-back/log/forever.log yans_back.js
