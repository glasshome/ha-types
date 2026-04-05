/**
 * ha-types - TypeScript types for Home Assistant
 *
 * Auto-generated types from Home Assistant Core source code.
 * Provides type-safe access to domains, services, events, and WebSocket API.
 */
// Generated file - do not edit manually
// Home Assistant: 2025.12
// Package: 0.1.0
// ============================================
// DOMAIN TYPES
// ============================================

// ============================================
// AREA REGISTRY TYPES
// ============================================
export type { AreaEntry } from "./area-registry";
// ============================================
// CONSTANTS
// ============================================
export * from "./constants";
// ============================================
// DEVICE REGISTRY TYPES
// ============================================
export {
  CONNECTION_BLUETOOTH,
  CONNECTION_NETWORK_MAC,
  CONNECTION_UPNP,
  CONNECTION_ZIGBEE,
  type DeviceEntry,
  type DeviceEntryDisabler,
  type DeviceEntryType,
} from "./device-registry";
export { type Domain, KNOWN_DOMAINS } from "./domains";
// ============================================
// ENTITY REGISTRY TYPES
// ============================================
export type {
  EntityCategory,
  EntityRegistryEntry,
  RegistryEntryDisabler,
  RegistryEntryHider,
} from "./entity-registry";
// ============================================
// EVENT TYPES
// ============================================
export type { CoreEventType, EventCallServiceData, EventStateChangedData, HAEvent } from "./events";
export type * from "./services";
// ============================================
// SERVICE TYPES
// ============================================
export type { ServiceCall, ServiceName, Services } from "./services";
// ============================================
// WEBSOCKET API TYPES
// ============================================
// Core types
// Auth types
// Commonly used command types
export type {
  Auth,
  AuthInvalid,
  AuthOk,
  AuthRequired,
  CallServiceRequest,
  CommandFields,
  CommandRequest,
  FireEventRequest,
  GetConfigRequest,
  GetServicesRequest,
  GetStatesRequest,
  PingRequest,
  SubscribeEventsRequest,
  UnsubscribeEventsRequest,
  WsCommandType,
  WsEventMessage,
  WsPong,
  WsResult,
  WsResultError,
  WsResultSuccess,
} from "./websocket";
