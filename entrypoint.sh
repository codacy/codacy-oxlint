#!/bin/sh

exec node \
  --max-old-space-size=4608 \
  --max-semi-space-size=128 \
  --experimental-strip-types \
  /app/src/index.ts
