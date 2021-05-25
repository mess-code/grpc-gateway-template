module grpc-gateway-template/helloworld-service

go 1.16

require (
	github.com/grpc-ecosystem/grpc-gateway/v2 v2.4.0 // indirect
	google.golang.org/grpc v1.38.0
	grpc-gateway-template/grpc-proto v0.0.0-00010101000000-000000000000
)

replace grpc-gateway-template/grpc-proto => ../grpc-proto
