mkdir -p go

protoc -I ./proto \
    --go_out ./go \
    --go_opt paths=source_relative \
    --go-grpc_out ./go \
    --go-grpc_opt paths=source_relative \
    ./proto/**/*.proto