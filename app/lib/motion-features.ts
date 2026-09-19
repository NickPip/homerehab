/**
 * Motion's full DOM feature set, loaded as its own async chunk.
 *
 * `domMax` is required rather than `domAnimation` because the header's active-section underline
 * uses `layoutId`, which is a shared-layout animation.
 */
export { domMax as default } from "motion/react";
