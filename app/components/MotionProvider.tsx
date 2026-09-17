"use client";

import { LazyMotion } from "motion/react";
import type { ReactNode } from "react";

/**
 * Defers Motion's feature bundle out of the first-load graph.
 *
 * Every animation on this page is an entrance translate, a hover transform, or the header
 * underline, so none of it needs to be ready before first paint. `strict` makes a stray
 * `motion.*` element throw during the static build instead of silently shipping the full bundle.
 */
export default function MotionProvider({ children }: { children: ReactNode }) {
  return (
    <LazyMotion features={async () => (await import("../lib/motion-features")).default} strict>
      {children}
    </LazyMotion>
  );
}
