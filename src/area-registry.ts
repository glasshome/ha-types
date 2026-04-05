// Generated file - do not edit manually
// Home Assistant: 2025.12
// Package: 0.1.0
// ============================================
// AREA ENTRY INTERFACE
// ============================================
/** Home Assistant Area Registry Entry. */
/** Complete schema with all fields from HA Core area_registry.py. */
/** Areas represent physical locations in a home and can contain devices and entities. */
export interface AreaEntry {
  /** Area name */
  name: string;
  /** Normalized name for case-insensitive matching (computed) */
  normalized_name: string;
  /** When the area was created (ISO 8601 timestamp) */
  created_at: string;
  /** When the area was last modified (ISO 8601 timestamp) */
  modified_at: string;
  /** Alternative names/aliases for the area */
  aliases: string[];
  /** Floor ID where area is located (added in 1.5) */
  floor_id: string | null;
  /** Associated humidity sensor entity (added in 1.8, validated) */
  humidity_entity_id: string | null;
  /** Custom icon for the area (added in 1.4) */
  icon: string | null;
  /** Unique area identifier (UUID) */
  id: string;
  /** Labels applied to this area (added in 1.6) */
  labels: string[];
  /** Picture/image URL for the area (added in 1.2) */
  picture: string | null;
  /** Associated temperature sensor entity (added in 1.8, validated) */
  temperature_entity_id: string | null;
}
