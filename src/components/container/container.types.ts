// src/components/container/container.types.ts

/**
 * UIContainerOptions (initial minimal version)
 *
 * Only width and height are required at this stage.
 *
 * Phase 2 Step 3 introduces padding:
 *
 *   padding?: number
 *
 * Padding is optional. Default = 0.
 * Padding represents empty space INSIDE the container.
 * Children added to the container are offset by the padding
 * on all sides (top, left, right, bottom).
 *
 * Example:
 * const panel = k.addContainer({
 *   width: 300,
 *   height: 200,
 *   padding: 16,
 * });
 */
export interface UIContainerOptions {
  width: number;
  height: number;

  anchor?: string; // "center" and so on

  // Added in Phase 2 Step 3:
  padding?: number;
}

/**
 * UIContainerReturn (initial minimal version)
 *
 * The container will eventually merge this with a Kaplay GameObj.
 */
export interface UIContainerReturn {
  uiWidth: number;
  uiHeight: number;
  addChild(child: any): void;
}
