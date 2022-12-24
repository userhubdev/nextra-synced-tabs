# nextra-synced-tabs

Sync selected tabs in your Nextra site and store the selected index in local storage

## Installation

```bash
npm install nextra-synced-tabs
```

## Usage

```tsx
import { SyncedTabs } from "nextra-synced-tabs";

<SyncedTabs name="packageManager" items={["pnpm", "npm", "yarn"]}>
  <SyncedTabs.Tab>
    **pNPM**: Fast, disk space efficient package manager.
  </SyncedTabs.Tab>
  <SyncedTabs.Tab>
    **npm** is a package manager for the JavaScript programming language.
  </SyncedTabs.Tab>
  <SyncedTabs.Tab>**Yarn** is a software packaging system.</SyncedTabs.Tab>
</SyncedTabs>;
```
