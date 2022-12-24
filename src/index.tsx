import { Tab, Tabs } from "nextra-theme-docs";
import * as React from "react";
import { useIsClient, useLocalStorage } from "usehooks-ts";

/**
 * Synchronize selected tabs in your Nextra site and store the selected index in local storage
 *
 * @example
 * ```tsx
 * import { SyncedTabs } from "nextra-synced-tabs"
 *
 * <SyncedTabs name="my-tabs" items={["Tab 1", "Tab 2"]}>
 *   <SyncedTabs.Tab>Content 1</SyncedTabs.Tab>
 *   <SyncedTabs.Tab>Content 2</SyncedTabs.Tab>
 * </SyncedTabs>
 * ```
 */
export function SyncedTabs({
  name,
  items,
  defaultIndex,
  children,
}: Omit<React.ComponentProps<typeof Tabs>, "selectedIndex"> & {
  name: string;
}) {
  const isClient = useIsClient();
  const [storedIndex, setIndex] = useLocalStorage(name, defaultIndex);

  return (
    <Tabs
      items={items}
      // Need this to bypass hydration issues
      selectedIndex={isClient ? storedIndex : defaultIndex}
      onChange={(value) => setIndex(value)}
    >
      {children}
    </Tabs>
  );
}

SyncedTabs.Tab = Tab;
