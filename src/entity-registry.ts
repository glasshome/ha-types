// Generated file - do not edit manually
// Home Assistant: 2025.12
// Package: 0.1.0
/** Home Assistant Entity Registry Entry. */
/** Complete schema with all 26+ fields from HA Core 2025.12. */
export interface EntityRegistryEntry {
  /** Alternate names/aliases for the entity */
  aliases: string[];
  /** Area ID where entity is located */
  area_id: string | null;
  /** Entity-specific capabilities */
  capabilities: Record<string, unknown> | null;
  /** Category assignments (scope -> category_id) */
  categories: Record<string, string>;
  /** Config entry ID that created this entity */
  config_entry_id: string | null;
  /** Config subentry ID (for multi-step configs) */
  config_subentry_id: string | null;
  /** When the entity was created (ISO 8601) */
  created_at: string;
  /** Device class (e.g., 'temperature', 'humidity') */
  device_class: string | null;
  /** Device ID this entity belongs to */
  device_id: string | null;
  /** What disabled this entity (if disabled) */
  disabled_by: RegistryEntryDisabler | null;
  /** Entity category (config, diagnostic, or null) */
  entity_category: EntityCategory | null;
  /** Unique entity identifier (e.g., 'light.living_room') */
  entity_id: string;
  /** Whether entity name includes device name */
  has_entity_name: boolean;
  /** What hid this entity (if hidden) */
  hidden_by: RegistryEntryHider | null;
  /** Custom icon override */
  icon: string | null;
  /** Internal registry entry ID (UUID) */
  id: string;
  /** Labels applied to this entity */
  labels: string[];
  /** When the entity was last modified (ISO 8601) */
  modified_at: string;
  /** Custom name override */
  name: string | null;
  /** Entity-specific options */
  options: Record<string, unknown>;
  /** Original device class from integration */
  original_device_class: string | null;
  /** Original icon from integration */
  original_icon: string | null;
  /** Original name from integration */
  original_name: string | null;
  /** Platform/integration that provides this entity */
  platform: string;
  /** Previous unique ID (for migration) */
  previous_unique_id: string | null;
  /** Suggested object ID */
  suggested_object_id: string | null;
  /** Bitmask of supported features */
  supported_features: number;
  /** Translation key for entity name */
  translation_key: string | null;
  /** Unique ID provided by integration */
  unique_id: string;
  /** Unit of measurement */
  unit_of_measurement: string | null;
}

/** What disabled a registry entry. */
export enum RegistryEntryDisabler {
  CONFIGENTRY = "config_entry",
  DEVICE = "device",
  HASS = "hass",
  INTEGRATION = "integration",
  USER = "user",
}

/** What hid a registry entry. */
export enum RegistryEntryHider {
  INTEGRATION = "integration",
  USER = "user",
}

/** Category of an entity. */
export enum EntityCategory {
  CONFIG = "config",
  DIAGNOSTIC = "diagnostic",
}
