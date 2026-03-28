// layout-utils.ts

const layoutRelevantChanges = new Set(["anchor", "pos", "area"]);

export function isLayoutChange(id: string): boolean {
  return layoutRelevantChanges.has(id);
}
