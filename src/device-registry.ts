// Generated file - do not edit manually
// Home Assistant: 2025.12
// Package: 0.1.0
// ============================================
// CONNECTION TYPE CONSTANTS
// ============================================
/** Connection type: bluetooth */
export const CONNECTION_BLUETOOTH = "bluetooth";
/** Connection type: mac */
export const CONNECTION_NETWORK_MAC = "mac";
/** Connection type: upnp */
export const CONNECTION_UPNP = "upnp";
/** Connection type: zigbee */
export const CONNECTION_ZIGBEE = "zigbee";
// ============================================
// ENUMS
// ============================================
/** What disabled a device entry. */
export enum DeviceEntryDisabler {
    CONFIGENTRY = "config_entry",
    INTEGRATION = "integration",
    USER = "user"
}

/** Device entry type. */
export enum DeviceEntryType {
    SERVICE = "service"
}
// ============================================
// DEVICE ENTRY INTERFACE
// ============================================
/** Home Assistant Device Registry Entry. */
/** Complete schema with all fields from HA Core device_registry.py. */
/** Devices represent physical/logical devices that can have multiple entities. */
export interface DeviceEntry {
    /** Area ID where device is located */
    area_id: string | null;
    /** Config entry IDs associated with this device */
    config_entries: string[];
    /** Mapping of config entry ID to subentry IDs (added in 1.9) */
    config_entries_subentries: Record<string, Array<string | null>>;
    /** URL for device configuration */
    configuration_url: string | null;
    /** Set of (connection_type, value) tuples (e.g., MAC addresses, normalized) */
    connections: Array<[string, string]>;
    /** When the device was created (ISO 8601 timestamp) */
    created_at: string;
    /** What disabled this device (if disabled) */
    disabled_by: DeviceEntryDisabler | null;
    /** Device entry type (SERVICE) */
    entry_type: DeviceEntryType | null;
    /** Hardware version */
    hw_version: string | null;
    /** Unique device identifier (UUID) */
    id: string;
    /** Set of (domain, identifier) tuples for worldwide unique identification */
    identifiers: Array<[string, string]>;
    /** Labels applied to this device */
    labels: string[];
    /** Device manufacturer */
    manufacturer: string | null;
    /** Device model */
    model: string | null;
    /** Model identifier */
    model_id: string | null;
    /** When the device was last modified (ISO 8601 timestamp) */
    modified_at: string;
    /** User-customized device name override */
    name_by_user: string | null;
    /** Device name */
    name: string | null;
    /** Primary config entry ID (added in 1.6) */
    primary_config_entry: string | null;
    /** Device serial number */
    serial_number: string | null;
    /** Software/firmware version */
    sw_version: string | null;
    /** Parent device ID (for device topology/hierarchy) */
    via_device_id: string | null;
}
