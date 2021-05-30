/* eslint-disable */
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import * as Long from "long";
import {
  makeGenericClientConstructor,
  ChannelCredentials,
  ChannelOptions,
  UntypedServiceImplementation,
  handleUnaryCall,
  Client,
  ClientUnaryCall,
  Metadata,
  CallOptions,
  ServiceError,
} from "@grpc/grpc-js";

export const protobufPackage = "policy";

/** The request message containing the user's name */
export interface CreatePolicyRequest {
  name: string;
}

/** The response message containing the greetings */
export interface CreatePolicyResponse {
  message: string;
}

const baseCreatePolicyRequest: object = { name: "" };

export const CreatePolicyRequest = {
  encode(
    message: CreatePolicyRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): CreatePolicyRequest {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCreatePolicyRequest } as CreatePolicyRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<CreatePolicyRequest>): CreatePolicyRequest {
    const message = { ...baseCreatePolicyRequest } as CreatePolicyRequest;
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    return message;
  },
};

const baseCreatePolicyResponse: object = { message: "" };

export const CreatePolicyResponse = {
  encode(
    message: CreatePolicyResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.message !== "") {
      writer.uint32(10).string(message.message);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): CreatePolicyResponse {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCreatePolicyResponse } as CreatePolicyResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.message = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromPartial(object: DeepPartial<CreatePolicyResponse>): CreatePolicyResponse {
    const message = { ...baseCreatePolicyResponse } as CreatePolicyResponse;
    if (object.message !== undefined && object.message !== null) {
      message.message = object.message;
    } else {
      message.message = "";
    }
    return message;
  },
};

/** Here is the overall greeting service definition where we define all our endpoints */
export const PolicyService = {
  /** Sends a greeting */
  createPolicy: {
    path: "/policy.Policy/CreatePolicy",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreatePolicyRequest) =>
      Buffer.from(CreatePolicyRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreatePolicyRequest.decode(value),
    responseSerialize: (value: CreatePolicyResponse) =>
      Buffer.from(CreatePolicyResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => CreatePolicyResponse.decode(value),
  },
} as const;

export interface PolicyServer extends UntypedServiceImplementation {
  /** Sends a greeting */
  createPolicy: handleUnaryCall<CreatePolicyRequest, CreatePolicyResponse>;
}

export interface PolicyClient extends Client {
  /** Sends a greeting */
  createPolicy(
    request: CreatePolicyRequest,
    callback: (
      error: ServiceError | null,
      response: CreatePolicyResponse
    ) => void
  ): ClientUnaryCall;
  createPolicy(
    request: CreatePolicyRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: CreatePolicyResponse
    ) => void
  ): ClientUnaryCall;
  createPolicy(
    request: CreatePolicyRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: CreatePolicyResponse
    ) => void
  ): ClientUnaryCall;
}

export const PolicyClient = makeGenericClientConstructor(
  PolicyService,
  "policy.Policy"
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ChannelOptions>
  ): PolicyClient;
};

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined
  | Long;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

// If you get a compile-error about 'Constructor<Long> and ... have no overlap',
// add '--ts_proto_opt=esModuleInterop=true' as a flag when calling 'protoc'.
if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
