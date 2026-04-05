import type { Domain } from "./domains";
import type { HAEvent } from "./events";
import type { ServiceCall, ServiceName } from "./services";

// Generated file - do not edit manually
// Home Assistant: 2025.12
// Package: 0.1.0
// WebSocket API types
// Reference: https://developers.home-assistant.io/docs/api/websocket/
// ============================================
// AUTH PHASE
// ============================================
/** Server sends this immediately after connection. */
export interface AuthRequired {
  type: "auth_required";
  ha_version: string;
}

/** Client sends credentials. */
export interface Auth {
  type: "auth";
  access_token: string;
}

/** Server confirms successful authentication. */
export interface AuthOk {
  type: "auth_ok";
  ha_version: string;
}

/** Server rejects authentication. */
export interface AuthInvalid {
  type: "auth_invalid";
  message: string;
}
// ============================================
// COMMAND TYPES
// ============================================
/** All WebSocket command type strings. */
export type WsCommandType =
  | "ai_task/preferences/get"
  | "ai_task/preferences/set"
  | "analytics"
  | "analytics/preferences"
  | "application_credentials/config"
  | "application_credentials/config_entry"
  | "assist_pipeline/device/capture"
  | "assist_pipeline/device/list"
  | "assist_pipeline/language/list"
  | "assist_pipeline/pipeline_debug/get"
  | "assist_pipeline/pipeline_debug/list"
  | "assist_pipeline/run"
  | "assist_satellite/get_configuration"
  | "assist_satellite/intercept_wake_word"
  | "assist_satellite/set_wake_words"
  | "assist_satellite/test_connection"
  | "auth/current_user"
  | "auth/delete_all_refresh_tokens"
  | "auth/delete_refresh_token"
  | "auth/long_lived_access_token"
  | "auth/refresh_token_set_expiry"
  | "auth/refresh_tokens"
  | "auth/sign_path"
  | "backup/agents/info"
  | "backup/can_decrypt_on_download"
  | "backup/config/info"
  | "backup/config/update"
  | "backup/delete"
  | "backup/details"
  | "backup/end"
  | "backup/generate"
  | "backup/generate_with_automatic_settings"
  | "backup/info"
  | "backup/restore"
  | "backup/start"
  | "backup/subscribe_events"
  | "blueprint/delete"
  | "blueprint/import"
  | "blueprint/list"
  | "blueprint/save"
  | "blueprint/substitute"
  | "bluetooth/subscribe_advertisements"
  | "bluetooth/subscribe_connection_allocations"
  | "bluetooth/subscribe_scanner_details"
  | "bluetooth/subscribe_scanner_state"
  | "calendar/event/create"
  | "calendar/event/delete"
  | "calendar/event/update"
  | "call_service"
  | "camera/capabilities"
  | "camera/get_prefs"
  | "camera/stream"
  | "camera/update_prefs"
  | "camera/webrtc/candidate"
  | "camera/webrtc/get_client_config"
  | "camera/webrtc/offer"
  | "cloud/cloudhook/create"
  | "cloud/cloudhook/delete"
  | "cloud/remove_data"
  | "cloud/status"
  | "cloud/subscription"
  | "cloud/update_prefs"
  | "cloud/webrtc/ice_servers"
  | "condition_platforms/subscribe"
  | "config/area_registry/create"
  | "config/area_registry/delete"
  | "config/area_registry/list"
  | "config/area_registry/reorder"
  | "config/area_registry/update"
  | "config/auth/create"
  | "config/auth/update"
  | "config/auth_provider/homeassistant/admin_change_password"
  | "config/auth_provider/homeassistant/admin_change_username"
  | "config/auth_provider/homeassistant/change_password"
  | "config/auth_provider/homeassistant/create"
  | "config/auth_provider/homeassistant/delete"
  | "config/category_registry/create"
  | "config/category_registry/delete"
  | "config/category_registry/list"
  | "config/category_registry/update"
  | "config/device_registry/list"
  | "config/device_registry/update"
  | "config/entity_registry/get"
  | "config/entity_registry/get_automatic_entity_ids"
  | "config/entity_registry/get_entries"
  | "config/entity_registry/list"
  | "config/entity_registry/list_for_display"
  | "config/entity_registry/remove"
  | "config/entity_registry/update"
  | "config/floor_registry/create"
  | "config/floor_registry/delete"
  | "config/floor_registry/list"
  | "config/floor_registry/reorder"
  | "config/floor_registry/update"
  | "config/label_registry/create"
  | "config/label_registry/delete"
  | "config/label_registry/list"
  | "config/label_registry/update"
  | "config_entries/get"
  | "config_entries/subscribe"
  | "conversation/agent/homeassistant/debug"
  | "conversation/agent/homeassistant/language_scores"
  | "conversation/agent/list"
  | "conversation/chat_log/subscribe"
  | "conversation/chat_log/subscribe_index"
  | "conversation/process"
  | "conversation/sentences/list"
  | "device_automation/action/capabilities"
  | "device_automation/action/list"
  | "device_automation/condition/capabilities"
  | "device_automation/condition/list"
  | "device_automation/trigger/capabilities"
  | "device_automation/trigger/list"
  | "dhcp/subscribe_discovery"
  | "diagnostics/get"
  | "diagnostics/list"
  | "dynalite/get-config"
  | "dynalite/save-config"
  | "energy/fossil_energy_consumption"
  | "energy/get_prefs"
  | "energy/info"
  | "energy/save_prefs"
  | "energy/solar_forecast"
  | "energy/validate"
  | "entity/source"
  | "execute_script"
  | "extract_from_target"
  | "fire_event"
  | "frontend/get_system_data"
  | "frontend/get_user_data"
  | "frontend/set_system_data"
  | "frontend/set_user_data"
  | "frontend/subscribe_system_data"
  | "frontend/subscribe_user_data"
  | "generic_camera/start_preview"
  | "get_conditions_for_target"
  | "get_config"
  | "get_services"
  | "get_services_for_target"
  | "get_states"
  | "get_triggers_for_target"
  | "group/start_preview"
  | "hardware/info"
  | "hardware/subscribe_system_status"
  | "hassio/update/config/info"
  | "hassio/update/config/update"
  | "history/history_during_period"
  | "history/stream"
  | "history_stats/start_preview"
  | "homeassistant/expose_entity"
  | "homeassistant/expose_entity/list"
  | "homeassistant/expose_new_entities/get"
  | "homeassistant/expose_new_entities/set"
  | "integration/setup_info"
  | "integration/wait"
  | "knx/create_device"
  | "knx/create_entity"
  | "knx/delete_entity"
  | "knx/get_base_data"
  | "knx/get_entity_config"
  | "knx/get_entity_entries"
  | "knx/get_knx_project"
  | "knx/get_schema"
  | "knx/group_monitor_info"
  | "knx/group_telegrams"
  | "knx/project_file_process"
  | "knx/project_file_remove"
  | "knx/subscribe_telegrams"
  | "knx/update_entity"
  | "knx/validate_entity"
  | "labs/list"
  | "labs/update"
  | "lcn/devices"
  | "lcn/devices/add"
  | "lcn/devices/delete"
  | "lcn/devices/scan"
  | "lcn/entities"
  | "lcn/entities/add"
  | "lcn/entities/delete"
  | "logbook/event_stream"
  | "logbook/get_events"
  | "logger/integration_log_level"
  | "logger/log_info"
  | "logger/log_level"
  | "manifest/get"
  | "manifest/list"
  | "media_player/browse_media"
  | "media_player/search_media"
  | "media_source/browse_media"
  | "media_source/local_source/remove"
  | "media_source/resolve_media"
  | "mobile_app/push_notification_channel"
  | "mobile_app/push_notification_confirm"
  | "mold_indicator/start_preview"
  | "mqtt/device/debug_info"
  | "mqtt/subscribe"
  | "network"
  | "network/configure"
  | "network/url"
  | "number/device_class_convertible_units"
  | "persistent_notification/get"
  | "persistent_notification/subscribe"
  | "ping"
  | "recorder/adjust_sum_statistics"
  | "recorder/change_statistics_unit"
  | "recorder/clear_statistics"
  | "recorder/get_statistics_metadata"
  | "recorder/import_statistics"
  | "recorder/info"
  | "recorder/list_statistic_ids"
  | "recorder/statistic_during_period"
  | "recorder/statistics_during_period"
  | "recorder/update_statistics_issues"
  | "recorder/update_statistics_metadata"
  | "recorder/validate_statistics"
  | "render_template"
  | "repairs/get_issue_data"
  | "repairs/ignore_issue"
  | "repairs/list_issues"
  | "search/related"
  | "sensor/device_class_convertible_units"
  | "sensor/numeric_device_classes"
  | "shopping_list/items"
  | "shopping_list/items/add"
  | "shopping_list/items/clear"
  | "shopping_list/items/remove"
  | "shopping_list/items/reorder"
  | "shopping_list/items/update"
  | "ssdp/subscribe_discovery"
  | "statistics/start_preview"
  | "subscribe_bootstrap_integrations"
  | "subscribe_entities"
  | "subscribe_events"
  | "subscribe_trigger"
  | "supported_features"
  | "system_health/info"
  | "system_log/list"
  | "template/start_preview"
  | "test_condition"
  | "thread/add_dataset_tlv"
  | "thread/delete_dataset"
  | "thread/discover_routers"
  | "thread/get_dataset_tlv"
  | "thread/list_datasets"
  | "thread/set_preferred_border_agent"
  | "thread/set_preferred_dataset"
  | "threshold/start_preview"
  | "time_date/start_preview"
  | "todo/item/list"
  | "todo/item/move"
  | "todo/item/subscribe"
  | "trace/contexts"
  | "trace/debug/breakpoint/clear"
  | "trace/debug/breakpoint/list"
  | "trace/debug/breakpoint/set"
  | "trace/debug/breakpoint/subscribe"
  | "trace/debug/continue"
  | "trace/debug/step"
  | "trace/debug/stop"
  | "trace/get"
  | "trace/list"
  | "trigger_platforms/subscribe"
  | "unsubscribe_events"
  | "update/release_notes"
  | "usb/scan"
  | "validate_config"
  | "weather/convertible_units"
  | "weather/subscribe_forecast"
  | "webhook/handle"
  | "wyoming/info"
  | "zeroconf/subscribe_discovery"
  | "zha/devices/permit";
// ============================================
// COMMAND REQUEST INTERFACES
// ============================================
export interface AiTaskPreferencesGetRequest {
  id: number;
  type: "ai_task/preferences/get";
}

export interface AiTaskPreferencesSetRequest {
  id: number;
  type: "ai_task/preferences/set";
  gen_data_entity_id?: unknown;
  gen_image_entity_id?: unknown;
}

export interface AnalyticsRequest {
  id: number;
  type: "analytics";
}

export interface AnalyticsPreferencesRequest {
  id: number;
  type: "analytics/preferences";
  preferences: unknown;
}

export interface ApplicationCredentialsConfigRequest {
  id: number;
  type: "application_credentials/config";
}

export interface ApplicationCredentialsConfigEntryRequest {
  id: number;
  type: "application_credentials/config_entry";
  config_entry_id: string;
}

export interface AssistPipelineDeviceCaptureRequest {
  id: number;
  type: "assist_pipeline/device/capture";
  device_id: string;
  timeout: unknown;
}

export interface AssistPipelineDeviceListRequest {
  id: number;
  type: "assist_pipeline/device/list";
}

export interface AssistPipelineLanguageListRequest {
  id: number;
  type: "assist_pipeline/language/list";
}

export interface AssistPipelinePipelineDebugGetRequest {
  id: number;
  type: "assist_pipeline/pipeline_debug/get";
  pipeline_id: string;
  pipeline_run_id: string;
}

export interface AssistPipelinePipelineDebugListRequest {
  id: number;
  type: "assist_pipeline/pipeline_debug/list";
  pipeline_id: string;
}

export interface AssistPipelineRunRequest {
  id: number;
  type: "assist_pipeline/run";
  start_stage: unknown;
  end_stage: unknown;
  input?: Record<string, unknown>;
  pipeline?: string;
  conversation_id?: unknown;
  device_id?: unknown;
  timeout?: unknown;
}

export interface AssistSatelliteGetConfigurationRequest {
  id: number;
  type: "assist_satellite/get_configuration";
  entity_id: unknown;
}

export interface AssistSatelliteInterceptWakeWordRequest {
  id: number;
  type: "assist_satellite/intercept_wake_word";
  entity_id: unknown;
}

export interface AssistSatelliteSetWakeWordsRequest {
  id: number;
  type: "assist_satellite/set_wake_words";
  entity_id: unknown;
  wake_word_ids: unknown;
}

export interface AssistSatelliteTestConnectionRequest {
  id: number;
  type: "assist_satellite/test_connection";
  entity_id: unknown;
}

export interface AuthCurrentUserRequest {
  id: number;
  type: "auth/current_user";
}

export interface AuthDeleteAllRefreshTokensRequest {
  id: number;
  type: "auth/delete_all_refresh_tokens";
  token_type?: string;
  delete_current_token?: boolean;
}

export interface AuthDeleteRefreshTokenRequest {
  id: number;
  type: "auth/delete_refresh_token";
  refresh_token_id: string;
}

export interface AuthLongLivedAccessTokenRequest {
  id: number;
  type: "auth/long_lived_access_token";
  lifespan: number;
  client_name: string;
  client_icon?: string;
}

export interface AuthRefreshTokenSetExpiryRequest {
  id: number;
  type: "auth/refresh_token_set_expiry";
  refresh_token_id: string;
  enable_expiry: boolean;
}

export interface AuthRefreshTokensRequest {
  id: number;
  type: "auth/refresh_tokens";
}

export interface AuthSignPathRequest {
  id: number;
  type: "auth/sign_path";
  path: string;
  expires?: number;
}

export interface BackupAgentsInfoRequest {
  id: number;
  type: "backup/agents/info";
}

export interface BackupCanDecryptOnDownloadRequest {
  id: number;
  type: "backup/can_decrypt_on_download";
  backup_id: string;
  agent_id: string;
  password: string;
}

export interface BackupConfigInfoRequest {
  id: number;
  type: "backup/config/info";
}

export interface BackupConfigUpdateRequest {
  id: number;
  type: "backup/config/update";
  agents?: unknown;
  automatic_backups_configured?: boolean;
  create_backup?: unknown;
  retention?: unknown;
  schedule?: unknown;
}

export interface BackupDeleteRequest {
  id: number;
  type: "backup/delete";
  backup_id: string;
}

export interface BackupDetailsRequest {
  id: number;
  type: "backup/details";
  backup_id: string;
}

export interface BackupEndRequest {
  id: number;
  type: "backup/end";
}

export interface BackupGenerateRequest {
  id: number;
  type: "backup/generate";
  agent_ids: unknown;
  include_addons?: unknown;
  include_all_addons?: boolean;
  include_database?: boolean;
  include_folders?: unknown;
  include_homeassistant?: boolean;
  name?: unknown;
  password?: unknown;
}

export interface BackupGenerateWithAutomaticSettingsRequest {
  id: number;
  type: "backup/generate_with_automatic_settings";
}

export interface BackupInfoRequest {
  id: number;
  type: "backup/info";
}

export interface BackupRestoreRequest {
  id: number;
  type: "backup/restore";
  backup_id: string;
  agent_id: string;
  password?: string;
  restore_addons?: unknown;
  restore_database?: boolean;
  restore_folders?: unknown;
  restore_homeassistant?: boolean;
}

export interface BackupStartRequest {
  id: number;
  type: "backup/start";
}

export interface BackupSubscribeEventsRequest {
  id: number;
  type: "backup/subscribe_events";
}

export interface BlueprintDeleteRequest {
  id: number;
  type: "blueprint/delete";
  domain: string;
  path: unknown;
}

export interface BlueprintImportRequest {
  id: number;
  type: "blueprint/import";
  url: unknown;
}

export interface BlueprintListRequest {
  id: number;
  type: "blueprint/list";
  domain: string;
}

export interface BlueprintSaveRequest {
  id: number;
  type: "blueprint/save";
  domain: string;
  path: unknown;
  yaml: string;
  source_url?: unknown;
  allow_override?: boolean;
}

export interface BlueprintSubstituteRequest {
  id: number;
  type: "blueprint/substitute";
  domain: string;
  path: unknown;
  input: Record<string, unknown>;
}

export interface BluetoothSubscribeAdvertisementsRequest {
  id: number;
  type: "bluetooth/subscribe_advertisements";
}

export interface BluetoothSubscribeConnectionAllocationsRequest {
  id: number;
  type: "bluetooth/subscribe_connection_allocations";
  config_entry_id?: string;
}

export interface BluetoothSubscribeScannerDetailsRequest {
  id: number;
  type: "bluetooth/subscribe_scanner_details";
  config_entry_id?: string;
}

export interface BluetoothSubscribeScannerStateRequest {
  id: number;
  type: "bluetooth/subscribe_scanner_state";
  config_entry_id?: string;
}

export interface CalendarEventCreateRequest {
  id: number;
  type: "calendar/event/create";
  entity_id: string;
}

export interface CalendarEventDeleteRequest {
  id: number;
  type: "calendar/event/delete";
  entity_id: string;
}

export interface CalendarEventUpdateRequest {
  id: number;
  type: "calendar/event/update";
  entity_id: string;
}
/**
 * Call a service with type-safe domain, service, and service_data parameters.
 * @template D - The domain to call the service on
 * @template S - The service to call (constrained by domain)
 * @example
 * ```typescript
 * const cmd: CallServiceRequest<"light", "turn_on"> = {
 *   id: 1,
 *   type: "call_service",
 *   domain: "light",
 *   service: "turn_on", // Autocompletes to light services only!
 *   service_data: {
 *     brightness: 255,  // Autocompletes to valid fields!
 *   },
 * };
 * ```
 */
export interface CallServiceRequest<
  D extends Domain = Domain,
  S extends ServiceName<D> = ServiceName<D>,
> {
  id: number;
  type: "call_service";
  domain: D;
  service: S;
  service_data?: ServiceCall<D, S>;
  target?: {
    entity_id?: string | string[];
    device_id?: string | string[];
    area_id?: string | string[];
  };
  return_response?: boolean;
}

export interface CameraCapabilitiesRequest {
  id: number;
  type: "camera/capabilities";
  entity_id: string;
}

export interface CameraGetPrefsRequest {
  id: number;
  type: "camera/get_prefs";
  entity_id: string;
}

export interface CameraStreamRequest {
  id: number;
  type: "camera/stream";
  entity_id: string;
  format?: unknown;
}

export interface CameraUpdatePrefsRequest {
  id: number;
  type: "camera/update_prefs";
  entity_id: string;
}

export interface CameraWebrtcCandidateRequest {
  id: number;
  type: "camera/webrtc/candidate";
  entity_id: string;
  session_id: string;
  candidate: unknown;
}

export interface CameraWebrtcGetClientConfigRequest {
  id: number;
  type: "camera/webrtc/get_client_config";
  entity_id: string;
}

export interface CameraWebrtcOfferRequest {
  id: number;
  type: "camera/webrtc/offer";
  entity_id: string;
  offer: string;
}

export interface CloudCloudhookCreateRequest {
  id: number;
  type: "cloud/cloudhook/create";
  webhook_id: string;
}

export interface CloudCloudhookDeleteRequest {
  id: number;
  type: "cloud/cloudhook/delete";
  webhook_id: string;
}

export interface CloudRemoveDataRequest {
  id: number;
  type: "cloud/remove_data";
}

export interface CloudStatusRequest {
  id: number;
  type: "cloud/status";
}

export interface CloudSubscriptionRequest {
  id: number;
  type: "cloud/subscription";
}

export interface CloudUpdatePrefsRequest {
  id: number;
  type: "cloud/update_prefs";
}

export interface CloudWebrtcIceServersRequest {
  id: number;
  type: "cloud/webrtc/ice_servers";
}

export interface ConditionPlatformsSubscribeRequest {
  id: number;
  type: "condition_platforms/subscribe";
}

export interface ConfigEntriesGetRequest {
  id: number;
  type: "config_entries/get";
  type_filter?: unknown;
  domain?: string;
}

export interface ConfigEntriesSubscribeRequest {
  id: number;
  type: "config_entries/subscribe";
  type_filter?: unknown;
}

export interface ConfigAreaRegistryCreateRequest {
  id: number;
  type: "config/area_registry/create";
  aliases?: Record<string, unknown>;
  floor_id?: string;
  humidity_entity_id?: unknown;
  icon?: string;
  labels?: unknown;
  name: string;
  picture?: unknown;
  temperature_entity_id?: unknown;
}

export interface ConfigAreaRegistryDeleteRequest {
  id: number;
  type: "config/area_registry/delete";
  area_id: string;
}

export interface ConfigAreaRegistryListRequest {
  id: number;
  type: "config/area_registry/list";
}

export interface ConfigAreaRegistryReorderRequest {
  id: number;
  type: "config/area_registry/reorder";
  area_ids: unknown;
}

export interface ConfigAreaRegistryUpdateRequest {
  id: number;
  type: "config/area_registry/update";
  aliases?: Record<string, unknown>;
  area_id: string;
  floor_id?: unknown;
  humidity_entity_id?: unknown;
  icon?: unknown;
  labels?: unknown;
  name?: string;
  picture?: unknown;
  temperature_entity_id?: unknown;
}

export interface ConfigAuthProviderHomeassistantAdminChangePasswordRequest {
  id: number;
  type: "config/auth_provider/homeassistant/admin_change_password";
  user_id: string;
  password: string;
}

export interface ConfigAuthProviderHomeassistantAdminChangeUsernameRequest {
  id: number;
  type: "config/auth_provider/homeassistant/admin_change_username";
  user_id: string;
  username: string;
}

export interface ConfigAuthProviderHomeassistantChangePasswordRequest {
  id: number;
  type: "config/auth_provider/homeassistant/change_password";
  current_password: string;
  new_password: string;
}

export interface ConfigAuthProviderHomeassistantCreateRequest {
  id: number;
  type: "config/auth_provider/homeassistant/create";
  user_id: string;
  username: string;
  password: string;
}

export interface ConfigAuthProviderHomeassistantDeleteRequest {
  id: number;
  type: "config/auth_provider/homeassistant/delete";
  username: string;
}

export interface ConfigAuthCreateRequest {
  id: number;
  type: "config/auth/create";
  name: string;
  group_ids?: unknown;
  local_only?: boolean;
}

export interface ConfigAuthUpdateRequest {
  id: number;
  type: "config/auth/update";
  user_id: string;
  name?: string;
  is_active?: boolean;
  group_ids?: unknown;
  local_only?: boolean;
}

export interface ConfigCategoryRegistryCreateRequest {
  id: number;
  type: "config/category_registry/create";
  scope: string;
  name: string;
  icon?: unknown;
}

export interface ConfigCategoryRegistryDeleteRequest {
  id: number;
  type: "config/category_registry/delete";
  scope: string;
  category_id: string;
}

export interface ConfigCategoryRegistryListRequest {
  id: number;
  type: "config/category_registry/list";
  scope: string;
}

export interface ConfigCategoryRegistryUpdateRequest {
  id: number;
  type: "config/category_registry/update";
  scope: string;
  category_id: string;
  name?: string;
  icon?: unknown;
}

export interface ConfigDeviceRegistryListRequest {
  id: number;
  type: "config/device_registry/list";
}

export interface ConfigDeviceRegistryUpdateRequest {
  id: number;
  type: "config/device_registry/update";
  area_id?: unknown;
  device_id: string;
  disabled_by?: unknown;
  labels?: unknown;
  name_by_user?: unknown;
}

export interface ConfigEntityRegistryGetRequest {
  id: number;
  type: "config/entity_registry/get";
  entity_id: string;
}

export interface ConfigEntityRegistryGetAutomaticEntityIdsRequest {
  id: number;
  type: "config/entity_registry/get_automatic_entity_ids";
  entity_ids: Record<string, unknown>;
}

export interface ConfigEntityRegistryGetEntriesRequest {
  id: number;
  type: "config/entity_registry/get_entries";
  entity_ids: Record<string, unknown>;
}

export interface ConfigEntityRegistryListRequest {
  id: number;
  type: "config/entity_registry/list";
}

export interface ConfigEntityRegistryListForDisplayRequest {
  id: number;
  type: "config/entity_registry/list_for_display";
}

export interface ConfigEntityRegistryRemoveRequest {
  id: number;
  type: "config/entity_registry/remove";
  entity_id: string;
}

export interface ConfigEntityRegistryUpdateRequest {
  id: number;
  type: "config/entity_registry/update";
  entity_id: string;
  aliases?: Record<string, unknown>;
  area_id?: unknown;
  categories?: unknown;
  device_class?: unknown;
  icon?: unknown;
  labels?: unknown;
  name?: unknown;
  new_entity_id?: string;
  disabled_by?: unknown;
  hidden_by?: unknown;
}

export interface ConfigFloorRegistryCreateRequest {
  id: number;
  type: "config/floor_registry/create";
  name: string;
  aliases?: Record<string, unknown>;
  icon?: unknown;
  level?: unknown;
}

export interface ConfigFloorRegistryDeleteRequest {
  id: number;
  type: "config/floor_registry/delete";
  floor_id: string;
}

export interface ConfigFloorRegistryListRequest {
  id: number;
  type: "config/floor_registry/list";
}

export interface ConfigFloorRegistryReorderRequest {
  id: number;
  type: "config/floor_registry/reorder";
  floor_ids: unknown;
}

export interface ConfigFloorRegistryUpdateRequest {
  id: number;
  type: "config/floor_registry/update";
  floor_id: string;
  aliases?: Record<string, unknown>;
  icon?: unknown;
  level?: unknown;
  name?: string;
}

export interface ConfigLabelRegistryCreateRequest {
  id: number;
  type: "config/label_registry/create";
  name: string;
  color?: unknown;
  description?: unknown;
  icon?: unknown;
}

export interface ConfigLabelRegistryDeleteRequest {
  id: number;
  type: "config/label_registry/delete";
  label_id: string;
}

export interface ConfigLabelRegistryListRequest {
  id: number;
  type: "config/label_registry/list";
}

export interface ConfigLabelRegistryUpdateRequest {
  id: number;
  type: "config/label_registry/update";
  label_id: string;
  color?: unknown;
  description?: unknown;
  icon?: unknown;
  name?: string;
}

export interface ConversationAgentHomeassistantDebugRequest {
  id: number;
  type: "conversation/agent/homeassistant/debug";
  sentences: unknown;
  language?: string;
  device_id?: unknown;
}

export interface ConversationAgentHomeassistantLanguageScoresRequest {
  id: number;
  type: "conversation/agent/homeassistant/language_scores";
  language?: string;
  country?: string;
}

export interface ConversationAgentListRequest {
  id: number;
  type: "conversation/agent/list";
  language?: string;
  country?: string;
}

export interface ConversationChatLogSubscribeRequest {
  id: number;
  type: "conversation/chat_log/subscribe";
  conversation_id: string;
}

export interface ConversationChatLogSubscribeIndexRequest {
  id: number;
  type: "conversation/chat_log/subscribe_index";
}

export interface ConversationProcessRequest {
  id: number;
  type: "conversation/process";
  text: string;
  conversation_id?: unknown;
  language?: string;
  agent_id?: unknown;
}

export interface ConversationSentencesListRequest {
  id: number;
  type: "conversation/sentences/list";
}

export interface DeviceAutomationActionCapabilitiesRequest {
  id: number;
  type: "device_automation/action/capabilities";
  action: Record<string, unknown>;
}

export interface DeviceAutomationActionListRequest {
  id: number;
  type: "device_automation/action/list";
  device_id: string;
}

export interface DeviceAutomationConditionCapabilitiesRequest {
  id: number;
  type: "device_automation/condition/capabilities";
  condition: unknown;
}

export interface DeviceAutomationConditionListRequest {
  id: number;
  type: "device_automation/condition/list";
  device_id: string;
}

export interface DeviceAutomationTriggerCapabilitiesRequest {
  id: number;
  type: "device_automation/trigger/capabilities";
  trigger: unknown;
}

export interface DeviceAutomationTriggerListRequest {
  id: number;
  type: "device_automation/trigger/list";
  device_id: string;
}

export interface DhcpSubscribeDiscoveryRequest {
  id: number;
  type: "dhcp/subscribe_discovery";
}

export interface DiagnosticsGetRequest {
  id: number;
  type: "diagnostics/get";
  domain: string;
}

export interface DiagnosticsListRequest {
  id: number;
  type: "diagnostics/list";
}

export interface DynaliteGetConfigRequest {
  id: number;
  type: "dynalite/get-config";
}

export interface DynaliteSaveConfigRequest {
  id: number;
  type: "dynalite/save-config";
  entry_id: string;
  config: unknown;
}

export interface EnergyFossilEnergyConsumptionRequest {
  id: number;
  type: "energy/fossil_energy_consumption";
  start_time: string;
  end_time: string;
  energy_statistic_ids: unknown;
  co2_statistic_id: string;
  period: unknown;
}

export interface EnergyGetPrefsRequest {
  id: number;
  type: "energy/get_prefs";
}

export interface EnergyInfoRequest {
  id: number;
  type: "energy/info";
}

export interface EnergySavePrefsRequest {
  id: number;
  type: "energy/save_prefs";
  energy_sources?: unknown;
  device_consumption?: unknown;
  device_consumption_water?: unknown;
}

export interface EnergySolarForecastRequest {
  id: number;
  type: "energy/solar_forecast";
}

export interface EnergyValidateRequest {
  id: number;
  type: "energy/validate";
}

export interface EntitySourceRequest {
  id: number;
  type: "entity/source";
}

export interface ExecuteScriptRequest {
  id: number;
  type: "execute_script";
  sequence: unknown;
  variables?: Record<string, unknown>;
}

export interface ExtractFromTargetRequest {
  id: number;
  type: "extract_from_target";
  target: unknown;
  expand_group?: boolean;
}

export interface FireEventRequest {
  id: number;
  type: "fire_event";
  event_type: string;
  event_data?: Record<string, unknown>;
}

export interface FrontendGetSystemDataRequest {
  id: number;
  type: "frontend/get_system_data";
  key: string;
}

export interface FrontendGetUserDataRequest {
  id: number;
  type: "frontend/get_user_data";
  key?: string;
}

export interface FrontendSetSystemDataRequest {
  id: number;
  type: "frontend/set_system_data";
  key: string;
  value: unknown;
}

export interface FrontendSetUserDataRequest {
  id: number;
  type: "frontend/set_user_data";
  key: string;
  value: unknown;
}

export interface FrontendSubscribeSystemDataRequest {
  id: number;
  type: "frontend/subscribe_system_data";
  key: string;
}

export interface FrontendSubscribeUserDataRequest {
  id: number;
  type: "frontend/subscribe_user_data";
  key?: string;
}

export interface GenericCameraStartPreviewRequest {
  id: number;
  type: "generic_camera/start_preview";
  flow_id: string;
  flow_type?: unknown;
  user_input?: Record<string, unknown>;
}

export interface GetConditionsForTargetRequest {
  id: number;
  type: "get_conditions_for_target";
  target: unknown;
  expand_group?: boolean;
}

export interface GetConfigRequest {
  id: number;
  type: "get_config";
}

export interface GetServicesRequest {
  id: number;
  type: "get_services";
}

export interface GetServicesForTargetRequest {
  id: number;
  type: "get_services_for_target";
  target: unknown;
  expand_group?: boolean;
}

export interface GetStatesRequest {
  id: number;
  type: "get_states";
}

export interface GetTriggersForTargetRequest {
  id: number;
  type: "get_triggers_for_target";
  target: unknown;
  expand_group?: boolean;
}

export interface GroupStartPreviewRequest {
  id: number;
  type: "group/start_preview";
  flow_id: string;
  flow_type: unknown;
  user_input: Record<string, unknown>;
}

export interface HardwareInfoRequest {
  id: number;
  type: "hardware/info";
}

export interface HardwareSubscribeSystemStatusRequest {
  id: number;
  type: "hardware/subscribe_system_status";
}

export interface HassioUpdateConfigInfoRequest {
  id: number;
  type: "hassio/update/config/info";
}

export interface HassioUpdateConfigUpdateRequest {
  id: number;
  type: "hassio/update/config/update";
  add_on_backup_before_update?: boolean;
  add_on_backup_retain_copies?: unknown;
  core_backup_before_update?: boolean;
}

export interface HistoryStatsStartPreviewRequest {
  id: number;
  type: "history_stats/start_preview";
  flow_id: string;
  flow_type: unknown;
  user_input: Record<string, unknown>;
}

export interface HistoryHistoryDuringPeriodRequest {
  id: number;
  type: "history/history_during_period";
  start_time: string;
  end_time?: string;
  entity_ids: unknown;
  include_start_time_state?: boolean;
  significant_changes_only?: boolean;
  minimal_response?: boolean;
  no_attributes?: boolean;
}

export interface HistoryStreamRequest {
  id: number;
  type: "history/stream";
  start_time: string;
  end_time?: string;
  entity_ids: unknown;
  include_start_time_state?: boolean;
  significant_changes_only?: boolean;
  minimal_response?: boolean;
  no_attributes?: boolean;
}

export interface HomeassistantExposeEntityRequest {
  id: number;
  type: "homeassistant/expose_entity";
  assistants: unknown;
  entity_ids: unknown;
  should_expose: boolean;
}

export interface HomeassistantExposeEntityListRequest {
  id: number;
  type: "homeassistant/expose_entity/list";
}

export interface HomeassistantExposeNewEntitiesGetRequest {
  id: number;
  type: "homeassistant/expose_new_entities/get";
  assistant: unknown;
}

export interface HomeassistantExposeNewEntitiesSetRequest {
  id: number;
  type: "homeassistant/expose_new_entities/set";
  assistant: unknown;
  expose_new: boolean;
}

export interface IntegrationSetupInfoRequest {
  id: number;
  type: "integration/setup_info";
}

export interface IntegrationWaitRequest {
  id: number;
  type: "integration/wait";
  domain: string;
}

export interface KnxCreateDeviceRequest {
  id: number;
  type: "knx/create_device";
  name: string;
  area_id?: string;
}

/** Note: This command uses spread operators in Python; some fields may be missing. */
export interface KnxCreateEntityRequest {
  id: number;
  type: "knx/create_entity";
}

export interface KnxDeleteEntityRequest {
  id: number;
  type: "knx/delete_entity";
}

export interface KnxGetBaseDataRequest {
  id: number;
  type: "knx/get_base_data";
}

export interface KnxGetEntityConfigRequest {
  id: number;
  type: "knx/get_entity_config";
}

export interface KnxGetEntityEntriesRequest {
  id: number;
  type: "knx/get_entity_entries";
}

export interface KnxGetKnxProjectRequest {
  id: number;
  type: "knx/get_knx_project";
}

export interface KnxGetSchemaRequest {
  id: number;
  type: "knx/get_schema";
}

export interface KnxGroupMonitorInfoRequest {
  id: number;
  type: "knx/group_monitor_info";
}

export interface KnxGroupTelegramsRequest {
  id: number;
  type: "knx/group_telegrams";
}

export interface KnxProjectFileProcessRequest {
  id: number;
  type: "knx/project_file_process";
  file_id: string;
  password: string;
}

export interface KnxProjectFileRemoveRequest {
  id: number;
  type: "knx/project_file_remove";
}

export interface KnxSubscribeTelegramsRequest {
  id: number;
  type: "knx/subscribe_telegrams";
}

/** Note: This command uses spread operators in Python; some fields may be missing. */
export interface KnxUpdateEntityRequest {
  id: number;
  type: "knx/update_entity";
}

/** Note: This command uses spread operators in Python; some fields may be missing. */
export interface KnxValidateEntityRequest {
  id: number;
  type: "knx/validate_entity";
}

export interface LabsListRequest {
  id: number;
  type: "labs/list";
}

export interface LabsUpdateRequest {
  id: number;
  type: "labs/update";
  domain: string;
  preview_feature: string;
  enabled: boolean;
  create_backup?: boolean;
}

export interface LcnDevicesRequest {
  id: number;
  type: "lcn/devices";
  entry_id: string;
}

export interface LcnDevicesAddRequest {
  id: number;
  type: "lcn/devices/add";
  entry_id: string;
}

export interface LcnDevicesDeleteRequest {
  id: number;
  type: "lcn/devices/delete";
  entry_id: string;
}

export interface LcnDevicesScanRequest {
  id: number;
  type: "lcn/devices/scan";
  entry_id: string;
}

export interface LcnEntitiesRequest {
  id: number;
  type: "lcn/entities";
  entry_id: string;
}

export interface LcnEntitiesAddRequest {
  id: number;
  type: "lcn/entities/add";
  entry_id: string;
}

export interface LcnEntitiesDeleteRequest {
  id: number;
  type: "lcn/entities/delete";
  entry_id: string;
}

export interface LogbookEventStreamRequest {
  id: number;
  type: "logbook/event_stream";
  start_time: string;
  end_time?: string;
  entity_ids?: unknown;
  device_ids?: unknown;
}

export interface LogbookGetEventsRequest {
  id: number;
  type: "logbook/get_events";
  start_time: string;
  end_time?: string;
  entity_ids?: unknown;
  device_ids?: unknown;
  context_id?: string;
}

export interface LoggerIntegrationLogLevelRequest {
  id: number;
  type: "logger/integration_log_level";
  integration: string;
  level: unknown;
  persistence: unknown;
}

export interface LoggerLogInfoRequest {
  id: number;
  type: "logger/log_info";
}

export interface LoggerLogLevelRequest {
  id: number;
  type: "logger/log_level";
  module: string;
  level: unknown;
  persistence: unknown;
}

export interface ManifestGetRequest {
  id: number;
  type: "manifest/get";
  integration: string;
}

export interface ManifestListRequest {
  id: number;
  type: "manifest/list";
  integrations?: unknown;
}

export interface MediaPlayerBrowseMediaRequest {
  id: number;
  type: "media_player/browse_media";
  entity_id: string;
}

export interface MediaPlayerSearchMediaRequest {
  id: number;
  type: "media_player/search_media";
  entity_id: string;
}

export interface MediaSourceBrowseMediaRequest {
  id: number;
  type: "media_source/browse_media";
}

export interface MediaSourceLocalSourceRemoveRequest {
  id: number;
  type: "media_source/local_source/remove";
  media_content_id: string;
}

export interface MediaSourceResolveMediaRequest {
  id: number;
  type: "media_source/resolve_media";
  expires?: number;
}

export interface MobileAppPushNotificationChannelRequest {
  id: number;
  type: "mobile_app/push_notification_channel";
  webhook_id: string;
  support_confirm?: boolean;
}

export interface MobileAppPushNotificationConfirmRequest {
  id: number;
  type: "mobile_app/push_notification_confirm";
  webhook_id: string;
  confirm_id: string;
}

export interface MoldIndicatorStartPreviewRequest {
  id: number;
  type: "mold_indicator/start_preview";
  flow_id: string;
  flow_type: unknown;
  user_input: Record<string, unknown>;
}

export interface MqttDeviceDebugInfoRequest {
  id: number;
  type: "mqtt/device/debug_info";
  device_id: string;
}

export interface MqttSubscribeRequest {
  id: number;
  type: "mqtt/subscribe";
  topic: unknown;
  qos?: unknown;
}

export interface NetworkRequest {
  id: number;
  type: "network";
}

export interface NetworkConfigureRequest {
  id: number;
  type: "network/configure";
  config: unknown;
}

export interface NetworkUrlRequest {
  id: number;
  type: "network/url";
}

export interface NumberDeviceClassConvertibleUnitsRequest {
  id: number;
  type: "number/device_class_convertible_units";
  device_class: string;
}

export interface PersistentNotificationGetRequest {
  id: number;
  type: "persistent_notification/get";
}

export interface PersistentNotificationSubscribeRequest {
  id: number;
  type: "persistent_notification/subscribe";
}

export interface PingRequest {
  id: number;
  type: "ping";
}

export interface RecorderAdjustSumStatisticsRequest {
  id: number;
  type: "recorder/adjust_sum_statistics";
  statistic_id: string;
  start_time: string;
  adjustment: unknown;
  adjustment_unit_of_measurement: unknown;
}

export interface RecorderChangeStatisticsUnitRequest {
  id: number;
  type: "recorder/change_statistics_unit";
  statistic_id: string;
  new_unit_of_measurement: unknown;
  old_unit_of_measurement: unknown;
}

export interface RecorderClearStatisticsRequest {
  id: number;
  type: "recorder/clear_statistics";
  statistic_ids: unknown;
}

export interface RecorderGetStatisticsMetadataRequest {
  id: number;
  type: "recorder/get_statistics_metadata";
  statistic_ids?: unknown;
}

export interface RecorderImportStatisticsRequest {
  id: number;
  type: "recorder/import_statistics";
  metadata: unknown;
  stats: unknown;
}

export interface RecorderInfoRequest {
  id: number;
  type: "recorder/info";
}

export interface RecorderListStatisticIdsRequest {
  id: number;
  type: "recorder/list_statistic_ids";
  statistic_type?: unknown;
}

/** Note: This command uses spread operators in Python; some fields may be missing. */
export interface RecorderStatisticDuringPeriodRequest {
  id: number;
  type: "recorder/statistic_during_period";
  statistic_id: string;
  types?: unknown;
  units?: unknown;
}

export interface RecorderStatisticsDuringPeriodRequest {
  id: number;
  type: "recorder/statistics_during_period";
  start_time: string;
  end_time?: string;
  statistic_ids: unknown;
  period: unknown;
  units?: unknown;
  types?: unknown;
}

export interface RecorderUpdateStatisticsIssuesRequest {
  id: number;
  type: "recorder/update_statistics_issues";
}

export interface RecorderUpdateStatisticsMetadataRequest {
  id: number;
  type: "recorder/update_statistics_metadata";
  statistic_id: string;
  unit_class?: unknown;
  unit_of_measurement: unknown;
}

export interface RecorderValidateStatisticsRequest {
  id: number;
  type: "recorder/validate_statistics";
}

export interface RenderTemplateRequest {
  id: number;
  type: "render_template";
  template: string;
  entity_ids?: Record<string, unknown>;
  variables?: Record<string, unknown>;
  timeout?: number;
  strict?: boolean;
  report_errors?: boolean;
}

export interface RepairsGetIssueDataRequest {
  id: number;
  type: "repairs/get_issue_data";
  domain: string;
  issue_id: string;
}

export interface RepairsIgnoreIssueRequest {
  id: number;
  type: "repairs/ignore_issue";
  domain: string;
  issue_id: string;
  ignore: boolean;
}

export interface RepairsListIssuesRequest {
  id: number;
  type: "repairs/list_issues";
}

export interface SearchRelatedRequest {
  id: number;
  type: "search/related";
  item_type: unknown;
  item_id: string;
}

export interface SensorDeviceClassConvertibleUnitsRequest {
  id: number;
  type: "sensor/device_class_convertible_units";
  device_class: string;
}

export interface SensorNumericDeviceClassesRequest {
  id: number;
  type: "sensor/numeric_device_classes";
}

export interface ShoppingListItemsRequest {
  id: number;
  type: "shopping_list/items";
}

export interface ShoppingListItemsAddRequest {
  id: number;
  type: "shopping_list/items/add";
  name: string;
}

export interface ShoppingListItemsClearRequest {
  id: number;
  type: "shopping_list/items/clear";
}

export interface ShoppingListItemsRemoveRequest {
  id: number;
  type: "shopping_list/items/remove";
  item_id: string;
}

export interface ShoppingListItemsReorderRequest {
  id: number;
  type: "shopping_list/items/reorder";
  item_ids: unknown;
}

export interface ShoppingListItemsUpdateRequest {
  id: number;
  type: "shopping_list/items/update";
  item_id: string;
  name?: string;
  complete?: boolean;
}

export interface SsdpSubscribeDiscoveryRequest {
  id: number;
  type: "ssdp/subscribe_discovery";
}

export interface StatisticsStartPreviewRequest {
  id: number;
  type: "statistics/start_preview";
  flow_id: string;
  flow_type: unknown;
  user_input: Record<string, unknown>;
}

export interface SubscribeBootstrapIntegrationsRequest {
  id: number;
  type: "subscribe_bootstrap_integrations";
}

/** Note: This command uses spread operators in Python; some fields may be missing. */
export interface SubscribeEntitiesRequest {
  id: number;
  type: "subscribe_entities";
  entity_ids?: Record<string, unknown>;
}

export interface SubscribeEventsRequest {
  id: number;
  type: "subscribe_events";
  event_type?: string;
}

export interface SubscribeTriggerRequest {
  id: number;
  type: "subscribe_trigger";
  trigger: unknown;
  variables?: Record<string, unknown>;
}

export interface SupportedFeaturesRequest {
  id: number;
  type: "supported_features";
  features: unknown;
}

export interface SystemHealthInfoRequest {
  id: number;
  type: "system_health/info";
}

export interface SystemLogListRequest {
  id: number;
  type: "system_log/list";
}

export interface TemplateStartPreviewRequest {
  id: number;
  type: "template/start_preview";
  flow_id: string;
  flow_type: unknown;
  user_input: Record<string, unknown>;
}

export interface TestConditionRequest {
  id: number;
  type: "test_condition";
  condition: unknown;
  variables?: Record<string, unknown>;
}

export interface ThreadAddDatasetTlvRequest {
  id: number;
  type: "thread/add_dataset_tlv";
  source: string;
  tlv: string;
}

export interface ThreadDeleteDatasetRequest {
  id: number;
  type: "thread/delete_dataset";
  dataset_id: string;
}

export interface ThreadDiscoverRoutersRequest {
  id: number;
  type: "thread/discover_routers";
}

export interface ThreadGetDatasetTlvRequest {
  id: number;
  type: "thread/get_dataset_tlv";
  dataset_id: string;
}

export interface ThreadListDatasetsRequest {
  id: number;
  type: "thread/list_datasets";
}

export interface ThreadSetPreferredBorderAgentRequest {
  id: number;
  type: "thread/set_preferred_border_agent";
  dataset_id: string;
  border_agent_id: unknown;
  extended_address: string;
}

export interface ThreadSetPreferredDatasetRequest {
  id: number;
  type: "thread/set_preferred_dataset";
  dataset_id: string;
}

export interface ThresholdStartPreviewRequest {
  id: number;
  type: "threshold/start_preview";
  flow_id: string;
  flow_type: unknown;
  user_input: Record<string, unknown>;
}

export interface TimeDateStartPreviewRequest {
  id: number;
  type: "time_date/start_preview";
  flow_id: string;
  flow_type: unknown;
  user_input: Record<string, unknown>;
}

export interface TodoItemListRequest {
  id: number;
  type: "todo/item/list";
  entity_id: string;
}

export interface TodoItemMoveRequest {
  id: number;
  type: "todo/item/move";
  entity_id: string;
  uid: string;
  previous_uid?: string;
}

export interface TodoItemSubscribeRequest {
  id: number;
  type: "todo/item/subscribe";
  entity_id: unknown;
}

export interface TraceContextsRequest {
  id: number;
  type: "trace/contexts";
}

export interface TraceDebugBreakpointClearRequest {
  id: number;
  type: "trace/debug/breakpoint/clear";
  domain: unknown;
  item_id: string;
  node: string;
  run_id?: string;
}

export interface TraceDebugBreakpointListRequest {
  id: number;
  type: "trace/debug/breakpoint/list";
}

export interface TraceDebugBreakpointSetRequest {
  id: number;
  type: "trace/debug/breakpoint/set";
  domain: unknown;
  item_id: string;
  node: string;
  run_id?: string;
}

export interface TraceDebugBreakpointSubscribeRequest {
  id: number;
  type: "trace/debug/breakpoint/subscribe";
}

export interface TraceDebugContinueRequest {
  id: number;
  type: "trace/debug/continue";
  domain: unknown;
  item_id: string;
  run_id: string;
}

export interface TraceDebugStepRequest {
  id: number;
  type: "trace/debug/step";
  domain: unknown;
  item_id: string;
  run_id: string;
}

export interface TraceDebugStopRequest {
  id: number;
  type: "trace/debug/stop";
  domain: unknown;
  item_id: string;
  run_id: string;
}

export interface TraceGetRequest {
  id: number;
  type: "trace/get";
  domain: unknown;
  item_id: string;
  run_id: string;
}

export interface TraceListRequest {
  id: number;
  type: "trace/list";
  domain: unknown;
  item_id?: string;
}

export interface TriggerPlatformsSubscribeRequest {
  id: number;
  type: "trigger_platforms/subscribe";
}

export interface UnsubscribeEventsRequest {
  id: number;
  type: "unsubscribe_events";
  subscription: number;
}

export interface UpdateReleaseNotesRequest {
  id: number;
  type: "update/release_notes";
  entity_id: string;
}

export interface UsbScanRequest {
  id: number;
  type: "usb/scan";
}

export interface ValidateConfigRequest {
  id: number;
  type: "validate_config";
  triggers?: unknown;
  conditions?: unknown;
  actions?: unknown;
}

export interface WeatherConvertibleUnitsRequest {
  id: number;
  type: "weather/convertible_units";
}

export interface WeatherSubscribeForecastRequest {
  id: number;
  type: "weather/subscribe_forecast";
  entity_id: unknown;
  forecast_type: unknown;
}

export interface WebhookHandleRequest {
  id: number;
  type: "webhook/handle";
  webhook_id: string;
  method: unknown;
  body?: string;
  headers?: unknown;
  query?: string;
}

export interface WyomingInfoRequest {
  id: number;
  type: "wyoming/info";
}

export interface ZeroconfSubscribeDiscoveryRequest {
  id: number;
  type: "zeroconf/subscribe_discovery";
}

/** Note: This command uses spread operators in Python; some fields may be missing. */
export interface ZhaDevicesPermitRequest {
  id: number;
  type: "zha/devices/permit";
}
// ============================================
// RESPONSE TYPES
// ============================================
/** Successful command result. */
export interface WsResultSuccess<T = unknown> {
  id: number;
  type: "result";
  success: true;
  result: T;
}

/** Command error result. */
export interface WsResultError {
  id: number;
  type: "result";
  success: false;
  error: {
    code: string;
    message: string;
    translation_key?: string;
    translation_domain?: string;
    translation_placeholders?: Record<string, unknown>;
  };
}

/** Result union type. */
export type WsResult<T = unknown> = WsResultSuccess<T> | WsResultError;
// ============================================
// EVENT MESSAGES
// ============================================
/** Event notification from subscription. */
/** Wraps a Home Assistant event (HAEvent) with WebSocket message metadata. */
/** @see HAEvent for the event structure */
export interface WsEventMessage<T = unknown> {
  id: number;
  type: "event";
  event: HAEvent<T>;
}
// ============================================
// UTILITY TYPES
// ============================================
/** Pong response to ping. */
export interface WsPong {
  id: number;
  type: "pong";
}
// ============================================
// COMMAND REGISTRY
// ============================================
export interface Commands {
  "ai_task/preferences/get": AiTaskPreferencesGetRequest;
  "ai_task/preferences/set": AiTaskPreferencesSetRequest;
  analytics: AnalyticsRequest;
  "analytics/preferences": AnalyticsPreferencesRequest;
  "application_credentials/config": ApplicationCredentialsConfigRequest;
  "application_credentials/config_entry": ApplicationCredentialsConfigEntryRequest;
  "assist_pipeline/device/capture": AssistPipelineDeviceCaptureRequest;
  "assist_pipeline/device/list": AssistPipelineDeviceListRequest;
  "assist_pipeline/language/list": AssistPipelineLanguageListRequest;
  "assist_pipeline/pipeline_debug/get": AssistPipelinePipelineDebugGetRequest;
  "assist_pipeline/pipeline_debug/list": AssistPipelinePipelineDebugListRequest;
  "assist_pipeline/run": AssistPipelineRunRequest;
  "assist_satellite/get_configuration": AssistSatelliteGetConfigurationRequest;
  "assist_satellite/intercept_wake_word": AssistSatelliteInterceptWakeWordRequest;
  "assist_satellite/set_wake_words": AssistSatelliteSetWakeWordsRequest;
  "assist_satellite/test_connection": AssistSatelliteTestConnectionRequest;
  "auth/current_user": AuthCurrentUserRequest;
  "auth/delete_all_refresh_tokens": AuthDeleteAllRefreshTokensRequest;
  "auth/delete_refresh_token": AuthDeleteRefreshTokenRequest;
  "auth/long_lived_access_token": AuthLongLivedAccessTokenRequest;
  "auth/refresh_token_set_expiry": AuthRefreshTokenSetExpiryRequest;
  "auth/refresh_tokens": AuthRefreshTokensRequest;
  "auth/sign_path": AuthSignPathRequest;
  "backup/agents/info": BackupAgentsInfoRequest;
  "backup/can_decrypt_on_download": BackupCanDecryptOnDownloadRequest;
  "backup/config/info": BackupConfigInfoRequest;
  "backup/config/update": BackupConfigUpdateRequest;
  "backup/delete": BackupDeleteRequest;
  "backup/details": BackupDetailsRequest;
  "backup/end": BackupEndRequest;
  "backup/generate": BackupGenerateRequest;
  "backup/generate_with_automatic_settings": BackupGenerateWithAutomaticSettingsRequest;
  "backup/info": BackupInfoRequest;
  "backup/restore": BackupRestoreRequest;
  "backup/start": BackupStartRequest;
  "backup/subscribe_events": BackupSubscribeEventsRequest;
  "blueprint/delete": BlueprintDeleteRequest;
  "blueprint/import": BlueprintImportRequest;
  "blueprint/list": BlueprintListRequest;
  "blueprint/save": BlueprintSaveRequest;
  "blueprint/substitute": BlueprintSubstituteRequest;
  "bluetooth/subscribe_advertisements": BluetoothSubscribeAdvertisementsRequest;
  "bluetooth/subscribe_connection_allocations": BluetoothSubscribeConnectionAllocationsRequest;
  "bluetooth/subscribe_scanner_details": BluetoothSubscribeScannerDetailsRequest;
  "bluetooth/subscribe_scanner_state": BluetoothSubscribeScannerStateRequest;
  "calendar/event/create": CalendarEventCreateRequest;
  "calendar/event/delete": CalendarEventDeleteRequest;
  "calendar/event/update": CalendarEventUpdateRequest;
  call_service: CallServiceRequest<Domain, ServiceName<Domain>>;
  "camera/capabilities": CameraCapabilitiesRequest;
  "camera/get_prefs": CameraGetPrefsRequest;
  "camera/stream": CameraStreamRequest;
  "camera/update_prefs": CameraUpdatePrefsRequest;
  "camera/webrtc/candidate": CameraWebrtcCandidateRequest;
  "camera/webrtc/get_client_config": CameraWebrtcGetClientConfigRequest;
  "camera/webrtc/offer": CameraWebrtcOfferRequest;
  "cloud/cloudhook/create": CloudCloudhookCreateRequest;
  "cloud/cloudhook/delete": CloudCloudhookDeleteRequest;
  "cloud/remove_data": CloudRemoveDataRequest;
  "cloud/status": CloudStatusRequest;
  "cloud/subscription": CloudSubscriptionRequest;
  "cloud/update_prefs": CloudUpdatePrefsRequest;
  "cloud/webrtc/ice_servers": CloudWebrtcIceServersRequest;
  "condition_platforms/subscribe": ConditionPlatformsSubscribeRequest;
  "config_entries/get": ConfigEntriesGetRequest;
  "config_entries/subscribe": ConfigEntriesSubscribeRequest;
  "config/area_registry/create": ConfigAreaRegistryCreateRequest;
  "config/area_registry/delete": ConfigAreaRegistryDeleteRequest;
  "config/area_registry/list": ConfigAreaRegistryListRequest;
  "config/area_registry/reorder": ConfigAreaRegistryReorderRequest;
  "config/area_registry/update": ConfigAreaRegistryUpdateRequest;
  "config/auth_provider/homeassistant/admin_change_password": ConfigAuthProviderHomeassistantAdminChangePasswordRequest;
  "config/auth_provider/homeassistant/admin_change_username": ConfigAuthProviderHomeassistantAdminChangeUsernameRequest;
  "config/auth_provider/homeassistant/change_password": ConfigAuthProviderHomeassistantChangePasswordRequest;
  "config/auth_provider/homeassistant/create": ConfigAuthProviderHomeassistantCreateRequest;
  "config/auth_provider/homeassistant/delete": ConfigAuthProviderHomeassistantDeleteRequest;
  "config/auth/create": ConfigAuthCreateRequest;
  "config/auth/update": ConfigAuthUpdateRequest;
  "config/category_registry/create": ConfigCategoryRegistryCreateRequest;
  "config/category_registry/delete": ConfigCategoryRegistryDeleteRequest;
  "config/category_registry/list": ConfigCategoryRegistryListRequest;
  "config/category_registry/update": ConfigCategoryRegistryUpdateRequest;
  "config/device_registry/list": ConfigDeviceRegistryListRequest;
  "config/device_registry/update": ConfigDeviceRegistryUpdateRequest;
  "config/entity_registry/get": ConfigEntityRegistryGetRequest;
  "config/entity_registry/get_automatic_entity_ids": ConfigEntityRegistryGetAutomaticEntityIdsRequest;
  "config/entity_registry/get_entries": ConfigEntityRegistryGetEntriesRequest;
  "config/entity_registry/list": ConfigEntityRegistryListRequest;
  "config/entity_registry/list_for_display": ConfigEntityRegistryListForDisplayRequest;
  "config/entity_registry/remove": ConfigEntityRegistryRemoveRequest;
  "config/entity_registry/update": ConfigEntityRegistryUpdateRequest;
  "config/floor_registry/create": ConfigFloorRegistryCreateRequest;
  "config/floor_registry/delete": ConfigFloorRegistryDeleteRequest;
  "config/floor_registry/list": ConfigFloorRegistryListRequest;
  "config/floor_registry/reorder": ConfigFloorRegistryReorderRequest;
  "config/floor_registry/update": ConfigFloorRegistryUpdateRequest;
  "config/label_registry/create": ConfigLabelRegistryCreateRequest;
  "config/label_registry/delete": ConfigLabelRegistryDeleteRequest;
  "config/label_registry/list": ConfigLabelRegistryListRequest;
  "config/label_registry/update": ConfigLabelRegistryUpdateRequest;
  "conversation/agent/homeassistant/debug": ConversationAgentHomeassistantDebugRequest;
  "conversation/agent/homeassistant/language_scores": ConversationAgentHomeassistantLanguageScoresRequest;
  "conversation/agent/list": ConversationAgentListRequest;
  "conversation/chat_log/subscribe": ConversationChatLogSubscribeRequest;
  "conversation/chat_log/subscribe_index": ConversationChatLogSubscribeIndexRequest;
  "conversation/process": ConversationProcessRequest;
  "conversation/sentences/list": ConversationSentencesListRequest;
  "device_automation/action/capabilities": DeviceAutomationActionCapabilitiesRequest;
  "device_automation/action/list": DeviceAutomationActionListRequest;
  "device_automation/condition/capabilities": DeviceAutomationConditionCapabilitiesRequest;
  "device_automation/condition/list": DeviceAutomationConditionListRequest;
  "device_automation/trigger/capabilities": DeviceAutomationTriggerCapabilitiesRequest;
  "device_automation/trigger/list": DeviceAutomationTriggerListRequest;
  "dhcp/subscribe_discovery": DhcpSubscribeDiscoveryRequest;
  "diagnostics/get": DiagnosticsGetRequest;
  "diagnostics/list": DiagnosticsListRequest;
  "dynalite/get-config": DynaliteGetConfigRequest;
  "dynalite/save-config": DynaliteSaveConfigRequest;
  "energy/fossil_energy_consumption": EnergyFossilEnergyConsumptionRequest;
  "energy/get_prefs": EnergyGetPrefsRequest;
  "energy/info": EnergyInfoRequest;
  "energy/save_prefs": EnergySavePrefsRequest;
  "energy/solar_forecast": EnergySolarForecastRequest;
  "energy/validate": EnergyValidateRequest;
  "entity/source": EntitySourceRequest;
  execute_script: ExecuteScriptRequest;
  extract_from_target: ExtractFromTargetRequest;
  fire_event: FireEventRequest;
  "frontend/get_system_data": FrontendGetSystemDataRequest;
  "frontend/get_user_data": FrontendGetUserDataRequest;
  "frontend/set_system_data": FrontendSetSystemDataRequest;
  "frontend/set_user_data": FrontendSetUserDataRequest;
  "frontend/subscribe_system_data": FrontendSubscribeSystemDataRequest;
  "frontend/subscribe_user_data": FrontendSubscribeUserDataRequest;
  "generic_camera/start_preview": GenericCameraStartPreviewRequest;
  get_conditions_for_target: GetConditionsForTargetRequest;
  get_config: GetConfigRequest;
  get_services: GetServicesRequest;
  get_services_for_target: GetServicesForTargetRequest;
  get_states: GetStatesRequest;
  get_triggers_for_target: GetTriggersForTargetRequest;
  "group/start_preview": GroupStartPreviewRequest;
  "hardware/info": HardwareInfoRequest;
  "hardware/subscribe_system_status": HardwareSubscribeSystemStatusRequest;
  "hassio/update/config/info": HassioUpdateConfigInfoRequest;
  "hassio/update/config/update": HassioUpdateConfigUpdateRequest;
  "history_stats/start_preview": HistoryStatsStartPreviewRequest;
  "history/history_during_period": HistoryHistoryDuringPeriodRequest;
  "history/stream": HistoryStreamRequest;
  "homeassistant/expose_entity": HomeassistantExposeEntityRequest;
  "homeassistant/expose_entity/list": HomeassistantExposeEntityListRequest;
  "homeassistant/expose_new_entities/get": HomeassistantExposeNewEntitiesGetRequest;
  "homeassistant/expose_new_entities/set": HomeassistantExposeNewEntitiesSetRequest;
  "integration/setup_info": IntegrationSetupInfoRequest;
  "integration/wait": IntegrationWaitRequest;
  "knx/create_device": KnxCreateDeviceRequest;
  "knx/create_entity": KnxCreateEntityRequest;
  "knx/delete_entity": KnxDeleteEntityRequest;
  "knx/get_base_data": KnxGetBaseDataRequest;
  "knx/get_entity_config": KnxGetEntityConfigRequest;
  "knx/get_entity_entries": KnxGetEntityEntriesRequest;
  "knx/get_knx_project": KnxGetKnxProjectRequest;
  "knx/get_schema": KnxGetSchemaRequest;
  "knx/group_monitor_info": KnxGroupMonitorInfoRequest;
  "knx/group_telegrams": KnxGroupTelegramsRequest;
  "knx/project_file_process": KnxProjectFileProcessRequest;
  "knx/project_file_remove": KnxProjectFileRemoveRequest;
  "knx/subscribe_telegrams": KnxSubscribeTelegramsRequest;
  "knx/update_entity": KnxUpdateEntityRequest;
  "knx/validate_entity": KnxValidateEntityRequest;
  "labs/list": LabsListRequest;
  "labs/update": LabsUpdateRequest;
  "lcn/devices": LcnDevicesRequest;
  "lcn/devices/add": LcnDevicesAddRequest;
  "lcn/devices/delete": LcnDevicesDeleteRequest;
  "lcn/devices/scan": LcnDevicesScanRequest;
  "lcn/entities": LcnEntitiesRequest;
  "lcn/entities/add": LcnEntitiesAddRequest;
  "lcn/entities/delete": LcnEntitiesDeleteRequest;
  "logbook/event_stream": LogbookEventStreamRequest;
  "logbook/get_events": LogbookGetEventsRequest;
  "logger/integration_log_level": LoggerIntegrationLogLevelRequest;
  "logger/log_info": LoggerLogInfoRequest;
  "logger/log_level": LoggerLogLevelRequest;
  "manifest/get": ManifestGetRequest;
  "manifest/list": ManifestListRequest;
  "media_player/browse_media": MediaPlayerBrowseMediaRequest;
  "media_player/search_media": MediaPlayerSearchMediaRequest;
  "media_source/browse_media": MediaSourceBrowseMediaRequest;
  "media_source/local_source/remove": MediaSourceLocalSourceRemoveRequest;
  "media_source/resolve_media": MediaSourceResolveMediaRequest;
  "mobile_app/push_notification_channel": MobileAppPushNotificationChannelRequest;
  "mobile_app/push_notification_confirm": MobileAppPushNotificationConfirmRequest;
  "mold_indicator/start_preview": MoldIndicatorStartPreviewRequest;
  "mqtt/device/debug_info": MqttDeviceDebugInfoRequest;
  "mqtt/subscribe": MqttSubscribeRequest;
  network: NetworkRequest;
  "network/configure": NetworkConfigureRequest;
  "network/url": NetworkUrlRequest;
  "number/device_class_convertible_units": NumberDeviceClassConvertibleUnitsRequest;
  "persistent_notification/get": PersistentNotificationGetRequest;
  "persistent_notification/subscribe": PersistentNotificationSubscribeRequest;
  ping: PingRequest;
  "recorder/adjust_sum_statistics": RecorderAdjustSumStatisticsRequest;
  "recorder/change_statistics_unit": RecorderChangeStatisticsUnitRequest;
  "recorder/clear_statistics": RecorderClearStatisticsRequest;
  "recorder/get_statistics_metadata": RecorderGetStatisticsMetadataRequest;
  "recorder/import_statistics": RecorderImportStatisticsRequest;
  "recorder/info": RecorderInfoRequest;
  "recorder/list_statistic_ids": RecorderListStatisticIdsRequest;
  "recorder/statistic_during_period": RecorderStatisticDuringPeriodRequest;
  "recorder/statistics_during_period": RecorderStatisticsDuringPeriodRequest;
  "recorder/update_statistics_issues": RecorderUpdateStatisticsIssuesRequest;
  "recorder/update_statistics_metadata": RecorderUpdateStatisticsMetadataRequest;
  "recorder/validate_statistics": RecorderValidateStatisticsRequest;
  render_template: RenderTemplateRequest;
  "repairs/get_issue_data": RepairsGetIssueDataRequest;
  "repairs/ignore_issue": RepairsIgnoreIssueRequest;
  "repairs/list_issues": RepairsListIssuesRequest;
  "search/related": SearchRelatedRequest;
  "sensor/device_class_convertible_units": SensorDeviceClassConvertibleUnitsRequest;
  "sensor/numeric_device_classes": SensorNumericDeviceClassesRequest;
  "shopping_list/items": ShoppingListItemsRequest;
  "shopping_list/items/add": ShoppingListItemsAddRequest;
  "shopping_list/items/clear": ShoppingListItemsClearRequest;
  "shopping_list/items/remove": ShoppingListItemsRemoveRequest;
  "shopping_list/items/reorder": ShoppingListItemsReorderRequest;
  "shopping_list/items/update": ShoppingListItemsUpdateRequest;
  "ssdp/subscribe_discovery": SsdpSubscribeDiscoveryRequest;
  "statistics/start_preview": StatisticsStartPreviewRequest;
  subscribe_bootstrap_integrations: SubscribeBootstrapIntegrationsRequest;
  subscribe_entities: SubscribeEntitiesRequest;
  subscribe_events: SubscribeEventsRequest;
  subscribe_trigger: SubscribeTriggerRequest;
  supported_features: SupportedFeaturesRequest;
  "system_health/info": SystemHealthInfoRequest;
  "system_log/list": SystemLogListRequest;
  "template/start_preview": TemplateStartPreviewRequest;
  test_condition: TestConditionRequest;
  "thread/add_dataset_tlv": ThreadAddDatasetTlvRequest;
  "thread/delete_dataset": ThreadDeleteDatasetRequest;
  "thread/discover_routers": ThreadDiscoverRoutersRequest;
  "thread/get_dataset_tlv": ThreadGetDatasetTlvRequest;
  "thread/list_datasets": ThreadListDatasetsRequest;
  "thread/set_preferred_border_agent": ThreadSetPreferredBorderAgentRequest;
  "thread/set_preferred_dataset": ThreadSetPreferredDatasetRequest;
  "threshold/start_preview": ThresholdStartPreviewRequest;
  "time_date/start_preview": TimeDateStartPreviewRequest;
  "todo/item/list": TodoItemListRequest;
  "todo/item/move": TodoItemMoveRequest;
  "todo/item/subscribe": TodoItemSubscribeRequest;
  "trace/contexts": TraceContextsRequest;
  "trace/debug/breakpoint/clear": TraceDebugBreakpointClearRequest;
  "trace/debug/breakpoint/list": TraceDebugBreakpointListRequest;
  "trace/debug/breakpoint/set": TraceDebugBreakpointSetRequest;
  "trace/debug/breakpoint/subscribe": TraceDebugBreakpointSubscribeRequest;
  "trace/debug/continue": TraceDebugContinueRequest;
  "trace/debug/step": TraceDebugStepRequest;
  "trace/debug/stop": TraceDebugStopRequest;
  "trace/get": TraceGetRequest;
  "trace/list": TraceListRequest;
  "trigger_platforms/subscribe": TriggerPlatformsSubscribeRequest;
  unsubscribe_events: UnsubscribeEventsRequest;
  "update/release_notes": UpdateReleaseNotesRequest;
  "usb/scan": UsbScanRequest;
  validate_config: ValidateConfigRequest;
  "weather/convertible_units": WeatherConvertibleUnitsRequest;
  "weather/subscribe_forecast": WeatherSubscribeForecastRequest;
  "webhook/handle": WebhookHandleRequest;
  "wyoming/info": WyomingInfoRequest;
  "zeroconf/subscribe_discovery": ZeroconfSubscribeDiscoveryRequest;
  "zha/devices/permit": ZhaDevicesPermitRequest;
}

/** Extract the request interface for a specific command type. */
/** */
/** @example */
/** ```typescript */
/** type CallServiceReq = CommandRequest<'call_service'>; */
/** // CallServiceRequest with all fields */
/** ``` */
export type CommandRequest<T extends WsCommandType> = T extends keyof Commands
  ? Commands[T]
  : never;
/** Extract just the command-specific fields (without id and type). */
/** */
/** @example */
/** ```typescript */
/** type CallServiceFields = CommandFields<'call_service'>; */
/** // { domain: string; service: string; ... } */
/** ``` */
export type CommandFields<T extends WsCommandType> = Omit<CommandRequest<T>, "id" | "type">;
