import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import { Long } from 'long';

(async () => {
  const packageDefinition = protoLoader.loadSync('../../grpc-proto/proto/policy', {
    keepCase: false,
    enums: String,
    defaults: true,
    oneofs: true
  });

  const packageObject = grpc.loadPackageDefinition(packageDefinition);
})();
