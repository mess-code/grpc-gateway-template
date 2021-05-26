// Original file: proto/policy/policy.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { CreatePolicyRequest as _policy_CreatePolicyRequest, CreatePolicyRequest__Output as _policy_CreatePolicyRequest__Output } from '../policy/CreatePolicyRequest';
import type { CreatePolicyResponse as _policy_CreatePolicyResponse, CreatePolicyResponse__Output as _policy_CreatePolicyResponse__Output } from '../policy/CreatePolicyResponse';

export interface PolicyClient extends grpc.Client {
  CreatePolicy(argument: _policy_CreatePolicyRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _policy_CreatePolicyResponse__Output) => void): grpc.ClientUnaryCall;
  CreatePolicy(argument: _policy_CreatePolicyRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _policy_CreatePolicyResponse__Output) => void): grpc.ClientUnaryCall;
  CreatePolicy(argument: _policy_CreatePolicyRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _policy_CreatePolicyResponse__Output) => void): grpc.ClientUnaryCall;
  CreatePolicy(argument: _policy_CreatePolicyRequest, callback: (error?: grpc.ServiceError, result?: _policy_CreatePolicyResponse__Output) => void): grpc.ClientUnaryCall;
  createPolicy(argument: _policy_CreatePolicyRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _policy_CreatePolicyResponse__Output) => void): grpc.ClientUnaryCall;
  createPolicy(argument: _policy_CreatePolicyRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _policy_CreatePolicyResponse__Output) => void): grpc.ClientUnaryCall;
  createPolicy(argument: _policy_CreatePolicyRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _policy_CreatePolicyResponse__Output) => void): grpc.ClientUnaryCall;
  createPolicy(argument: _policy_CreatePolicyRequest, callback: (error?: grpc.ServiceError, result?: _policy_CreatePolicyResponse__Output) => void): grpc.ClientUnaryCall;
  
}

export interface PolicyHandlers extends grpc.UntypedServiceImplementation {
  CreatePolicy: grpc.handleUnaryCall<_policy_CreatePolicyRequest__Output, _policy_CreatePolicyResponse>;
  
}

export interface PolicyDefinition extends grpc.ServiceDefinition {
  CreatePolicy: MethodDefinition<_policy_CreatePolicyRequest, _policy_CreatePolicyResponse, _policy_CreatePolicyRequest__Output, _policy_CreatePolicyResponse__Output>
}
