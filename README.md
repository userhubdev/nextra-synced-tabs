# nextra-synced-tabs

Synchronize selected tabs in your Nextra site and store the selected index in local storage

![Demo](/.readme/synced-tabs.gif)

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

## API Reference

### \<SyncedTabs\>

#### Props

| Name         | Type              | Description                                     |
| ------------ | ----------------- | ----------------------------------------------- |
| name         | `string`          | The name of the tab group.                      |
| items        | `React.ReactNode` | The tab names to be displayed in the tab group. |
| defaultIndex | `number`          | The default selected index of the tab group.    |
| children     | `React.ReactNode` | The content panel for each tab.                 |
