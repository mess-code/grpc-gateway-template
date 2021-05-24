mkdir -p gateway

protoc -I ./proto \
    --grpc-gateway_out ./gateway \
    --grpc-gateway_opt paths=source_relative \
    ./proto/**/*.proto