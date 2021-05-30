#!/bin/bash

rm -rf ts
mkdir -p ts

./node_modules/.bin/proto-loader-gen-types -I ./proto \
    --longs=String \
    --enums=String \
    --defaults \
    --oneofs --grpcLib=@grpc/grpc-js --outDir=./ts ./proto/**/*.proto
