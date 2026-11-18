"use client";

import { useEffect, useRef, type ReactNode } from "react";

export function ScrollReveal({ children }: { children: ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const targets = container.querySelectorAll<HTMLElement>(".motion-enter");

    if (!("IntersectionObserver" in window)) {
      targets.forEach((target) => target.setAttribute("data-entered", "true"));
      container.setAttribute("data-scroll-ready", "true");
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        entry.target.setAttribute("data-entered", "true");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.05, rootMargin: "0px 0px -8% 0px" });

    targets.forEach((target) => observer.observe(target));
    container.setAttribute("data-scroll-ready", "true");

    return () => observer.disconnect();
  }, []);

  return <div className="scroll-reveal" ref={containerRef}>{children}</div>;
}
