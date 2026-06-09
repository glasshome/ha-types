// ============================================
// CORE CONFIG TYPES
// ============================================
/** Home Assistant unit system, as returned by the `get_config` WebSocket command. */
export interface HassUnitSystem {
  /** Length unit (e.g. "km", "mi") */
  length: string;
  /** Accumulated precipitation unit (e.g. "mm", "in") */
  accumulated_precipitation?: string;
  /** Area unit (e.g. "m²", "ft²") */
  area?: string;
  /** Mass unit (e.g. "g", "lb") */
  mass: string;
  /** Pressure unit (e.g. "Pa", "psi") */
  pressure?: string;
  /** Temperature unit, including the degree sign (e.g. "°C", "°F") */
  temperature: string;
  /** Volume unit (e.g. "L", "gal") */
  volume: string;
  /** Wind speed unit (e.g. "m/s", "mph") */
  wind_speed?: string;
}

/** Home Assistant core config, as returned by the `get_config` WebSocket command. */
export interface HassConfig {
  latitude: number;
  longitude: number;
  elevation: number;
  /** Active unit system (metric vs US customary) */
  unit_system: HassUnitSystem;
  /** Friendly name of the installation */
  location_name: string;
  /** IANA time zone (e.g. "Europe/Berlin") */
  time_zone: string;
  /** Loaded integration domains */
  components: string[];
  config_dir: string;
  version: string;
  config_source: string;
  /** Lifecycle state (e.g. "RUNNING") */
  state: string;
  external_url: string | null;
  internal_url: string | null;
  /** ISO 4217 currency code (e.g. "EUR", "USD") */
  currency: string;
  /** ISO 3166-1 alpha-2 country code, or null if unset */
  country: string | null;
  /** UI language as a BCP 47 tag (e.g. "en", "de") */
  language: string;
}
