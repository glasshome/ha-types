// Generated file - do not edit manually
// Home Assistant: 2025.12
// Package: 0.1.0
/** Core Home Assistant event types. */
export type CoreEventType =
  | "call_service"
  | "component_loaded"
  | "core_config_updated"
  | "homeassistant_close"
  | "homeassistant_start"
  | "homeassistant_started"
  | "homeassistant_stop"
  | "labs_updated"
  | "logbook_entry"
  | "logging_changed"
  | "lovelace_updated"
  | "panels_updated"
  | "recorder_5min_statistics_generated"
  | "service_registered"
  | "service_removed"
  | "shopping_list_updated"
  | "state_changed"
  | "state_reported"
  | "themes_updated";

/** Event data for state_changed event. */
export interface EventStateChangedData {
  /** Entity whose state changed */
  entity_id: string;
  /** Previous state (null if entity just appeared) */
  old_state: unknown | null;
  /** New state (null if entity was removed) */
  new_state: unknown | null;
}

/** Event data for call_service event. */
export interface EventCallServiceData {
  /** Domain of the service */
  domain: string;
  /** Service name */
  service: string;
  /** Service call data */
  service_data?: Record<string, unknown>;
}

/** Generic event envelope. */
export interface HAEvent<T = unknown> {
  /** Event type */
  event_type: CoreEventType | string;
  /** Event data */
  data: T;
  /** When the event was fired (ISO 8601) */
  time_fired: string;
  /** Origin of the event */
  origin?: string;
  /** Event context */
  context?: {
    /** Context ID */
    id: string;
    /** Parent context ID */
    parent_id: string | null;
    /** User ID that triggered the event */
    user_id: string | null;
  };
}
