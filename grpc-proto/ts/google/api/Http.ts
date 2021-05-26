// Original file: proto/google/api/http.proto

import type { HttpRule as _google_api_HttpRule, HttpRule__Output as _google_api_HttpRule__Output } from '../../google/api/HttpRule';

export interface Http {
  'rules'?: (_google_api_HttpRule)[];
  'fully_decode_reserved_expansion'?: (boolean);
}

export interface Http__Output {
  'rules': (_google_api_HttpRule__Output)[];
  'fully_decode_reserved_expansion': (boolean);
}
