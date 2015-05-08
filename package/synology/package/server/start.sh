#!/bin/sh

export FILEBOT_NODE_HOST="$SERVER_NAME"
export FILEBOT_NODE_AUTH="SYNO"

export FILEBOT_NODE_HTTP="YES"
export FILEBOT_NODE_HTTP_PORT="5452"

export FILEBOT_NODE_HTTPS="YES"
export FILEBOT_NODE_HTTPS_PORT="5453"
export FILEBOT_NODE_HTTPS_KEY="/usr/syno/etc/ssl/ssl.key/server.key"
export FILEBOT_NODE_HTTPS_CRT="/usr/syno/etc/ssl/ssl.crt/server.crt"

export FILEBOT_CMD="filebot"
export FILEBOT_CMD_CWD="$SYNOPKG_PKGDEST_VOL"
export FILEBOT_CMD_UID=`id -u $SYNO_WEBAPI_USERNAME`
export FILEBOT_CMD_GID=`cat /etc/group | grep 'administrators' | cut -d: -f3` # cannot use `id -u $SYNO_WEBAPI_USERNAME` because the result is 100:users but we need 101:administrators because users don't have execute permissions

export FILEBOT_NODE_CLIENT="client"

# set user
export USER="$SYNO_WEBAPI_USERNAME"

# set working dir
cd "$SYNOPKG_PKGDEST"

# --max_executable_size (max size of executable memory (in Mbytes))
# (NOT YET SUPPORTED SYNO NODE.JS) --optimize_for_size (Enables optimizations which favor memory size over execution speed.)
# --use_idle_notification (Use idle notification to reduce memory footprint.)
/usr/bin/node --max_executable_size=16 --use_idle_notification "server/app.js"
