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
export { type Domain } from "./domains";
export { KNOWN_DOMAINS } from "./domains";
// ============================================
// SERVICE TYPES
// ============================================
export { type ServiceCall, type ServiceName, type Services } from "./services";
export type * from "./services";
// ============================================
// EVENT TYPES
// ============================================
export { type CoreEventType, type EventCallServiceData, type EventStateChangedData, type HAEvent } from "./events";
// ============================================
// ENTITY REGISTRY TYPES
// ============================================
export { type EntityRegistryEntry, type RegistryEntryDisabler, type RegistryEntryHider, type EntityCategory } from "./entity-registry";
// ============================================
// DEVICE REGISTRY TYPES
// ============================================
export { type DeviceEntry, type DeviceEntryDisabler, type DeviceEntryType } from "./device-registry";
export { CONNECTION_BLUETOOTH, CONNECTION_NETWORK_MAC, CONNECTION_UPNP, CONNECTION_ZIGBEE } from "./device-registry";
// ============================================
// AREA REGISTRY TYPES
// ============================================
export { type AreaEntry } from "./area-registry";
// ============================================
// WEBSOCKET API TYPES
// ============================================
// Core types
export { type WsCommandType, type WsResult, type WsResultSuccess, type WsResultError, type WsEventMessage, type WsPong, type CommandRequest, type CommandFields } from "./websocket";
// Auth types
export { type AuthRequired, type Auth, type AuthOk, type AuthInvalid } from "./websocket";
// Commonly used command types
export { type CallServiceRequest, type SubscribeEventsRequest, type UnsubscribeEventsRequest, type GetStatesRequest, type GetServicesRequest, type GetConfigRequest, type PingRequest, type FireEventRequest } from "./websocket";
// ============================================
// CONSTANTS
// ============================================
export * from "./constants";
