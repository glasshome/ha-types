# @glasshome/ha-types

TypeScript type definitions for Home Assistant entities, services, and WebSocket API.

## Install

```bash
bun add @glasshome/ha-types
```

## Quick Start

```typescript
import type { HassEntity, HassService } from "@glasshome/ha-types";

const entity: HassEntity = {
  entity_id: "light.living_room",
  state: "on",
  attributes: { brightness: 255 },
  // ...
};
```

## Documentation

Full docs at [glasshome.app/docs](https://glasshome.app/docs)

## License

MIT
