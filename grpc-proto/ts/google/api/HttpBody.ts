// Original file: proto/google/api/httpbody.proto

import type { Any as _google_protobuf_Any, Any__Output as _google_protobuf_Any__Output } from '../../google/protobuf/Any';

export interface HttpBody {
  'content_type'?: (string);
  'data'?: (Buffer | Uint8Array | string);
  'extensions'?: (_google_protobuf_Any)[];
}

export interface HttpBody__Output {
  'content_type': (string);
  'data': (Buffer);
  'extensions': (_google_protobuf_Any__Output)[];
}
