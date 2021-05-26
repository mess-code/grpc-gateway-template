// Original file: proto/google/api/http.proto

import type { CustomHttpPattern as _google_api_CustomHttpPattern, CustomHttpPattern__Output as _google_api_CustomHttpPattern__Output } from '../../google/api/CustomHttpPattern';
import type { HttpRule as _google_api_HttpRule, HttpRule__Output as _google_api_HttpRule__Output } from '../../google/api/HttpRule';

export interface HttpRule {
  'selector'?: (string);
  'get'?: (string);
  'put'?: (string);
  'post'?: (string);
  'delete'?: (string);
  'patch'?: (string);
  'body'?: (string);
  'custom'?: (_google_api_CustomHttpPattern | null);
  'additional_bindings'?: (_google_api_HttpRule)[];
  'response_body'?: (string);
  'pattern'?: "get"|"put"|"post"|"delete"|"patch"|"custom";
}

export interface HttpRule__Output {
  'selector': (string);
  'get'?: (string);
  'put'?: (string);
  'post'?: (string);
  'delete'?: (string);
  'patch'?: (string);
  'body': (string);
  'custom'?: (_google_api_CustomHttpPattern__Output | null);
  'additional_bindings': (_google_api_HttpRule__Output)[];
  'response_body': (string);
  'pattern': "get"|"put"|"post"|"delete"|"patch"|"custom";
}
