import LiveSyncToggle from "./Features/LiveSync/toggle";

export const configurableFeatures = {
  experimental_live_file_sync: {
    titleKey: "admin-pages.experimental.live-sync-title",
    component: LiveSyncToggle,
    key: "experimental_live_file_sync",
  },
};
