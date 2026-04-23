-- CreateTable
CREATE TABLE "workspace_folders" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "parent_id" INTEGER,
    "order" INTEGER NOT NULL DEFAULT 0,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lastUpdatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "workspace_folders_parent_id_fkey" FOREIGN KEY ("parent_id") REFERENCES "workspace_folders" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- AlterTable
ALTER TABLE "workspaces" ADD COLUMN "folderId" INTEGER REFERENCES "workspace_folders"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- CreateIndex
CREATE UNIQUE INDEX "workspace_folders_slug_key" ON "workspace_folders"("slug");

-- CreateIndex
CREATE INDEX "workspace_folders_parent_id_idx" ON "workspace_folders"("parent_id");

-- CreateIndex
CREATE INDEX "workspaces_folderId_idx" ON "workspaces"("folderId");
