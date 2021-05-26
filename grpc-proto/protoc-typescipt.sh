#!/usr/bin/bash

rm -rf typescript
mkdir -p typescript

protoc -I ./proto \
    --plugin=./node_modules/.bin/protoc-gen-ts_proto \
    --ts_proto_out=typescript \
    --ts_proto_opt=forceLong=long \
    --ts_proto_opt=env=node \
    --ts_proto_opt=lowerCaseServiceMethods=true \
    --ts_proto_opt=outputJsonMethods=false \
    --ts_proto_opt=addGrpcMetadata=true \
    --ts_proto_opt=outputServices=grpc-js \
    ./proto/**/*.proto