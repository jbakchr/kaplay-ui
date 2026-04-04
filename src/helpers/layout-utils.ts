// layout-utils.ts

const layoutRelevantChanges = new Set(["anchor", "rect"]);

export function isLayoutChange(id: string): boolean {
  return layoutRelevantChanges.has(id);
}
