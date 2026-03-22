# @glasshome/ha-types

TypeScript type definitions and constants for Home Assistant domains, services, events, and WebSocket API.

Auto-generated from Home Assistant Core source code.

## Install

```bash
npm install @glasshome/ha-types
```

## Usage

### Runtime values

```typescript
import { KNOWN_DOMAINS } from "@glasshome/ha-types";

// KNOWN_DOMAINS is an array of all Home Assistant domain strings
console.log(KNOWN_DOMAINS.length); // 2000+
console.log(KNOWN_DOMAINS.includes("light")); // true
```

### Type imports

```typescript
import type { Domain, ServiceCall, HAEvent } from "@glasshome/ha-types";

// Domain is a union of all known HA domain strings
const domain: Domain = "light";

// ServiceCall describes a service invocation
const call: ServiceCall = {
  domain: "light",
  service: "turn_on",
  target: { entity_id: "light.living_room" },
  data: { brightness: 255 },
};
```

### Device & entity constants

```typescript
import {
  CONNECTION_BLUETOOTH,
  CONNECTION_NETWORK_MAC,
  CONNECTION_UPNP,
  CONNECTION_ZIGBEE,
} from "@glasshome/ha-types";
```

### WebSocket API types

```typescript
import type {
  CallServiceRequest,
  SubscribeEventsRequest,
  WsResult,
  AuthRequired,
} from "@glasshome/ha-types";
```

## What's included

| Module | Exports |
|--------|---------|
| Domains | `Domain` type, `KNOWN_DOMAINS` array |
| Services | `ServiceCall`, `ServiceName`, `Services`, per-domain service types |
| Events | `HAEvent`, `CoreEventType`, event data types |
| Entity Registry | `EntityRegistryEntry`, `EntityCategory`, disabler/hider types |
| Device Registry | `DeviceEntry`, connection constants |
| Area Registry | `AreaEntry` |
| WebSocket | Auth types, command request types, result types |
| Constants | 317 domain-specific constants |

## License

MIT
