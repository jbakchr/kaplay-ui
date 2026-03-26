// src/components/container/container.styles.ts

/**
 * Default styles for all UI Containers.
 *
 * These values will later be applied visually (Phase 2 Step 3),
 * but for now they simply exist as the container's internal style model.
 */
export const defaultContainerStyles = {
  backgroundColor: "rgba(0, 0, 0, 0.4)", // translucent dark background
  borderColor: "rgba(255, 255, 255, 0.1)", // subtle border
  borderWidth: 0,
  radius: 0,
};

/**
 * Placeholder: in the future, this will apply the
 * default styles to the actual Kaplay GameObj.
 */
export function applyDefaultContainerStyles(_container: any) {
  // Implementation will come later in Phase 2 Step 3.
}
