"use client";

import { useEffect, useState } from "react";

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = ["home", "specialist", "why-us", "contact"];

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      // Get all intersecting entries
      const intersecting = entries.filter((entry) => entry.isIntersecting);
      
      if (intersecting.length > 0) {
        // Find the section that's most visible
        let mostVisible = intersecting[0];
        let maxRatio = intersecting[0].intersectionRatio;

        intersecting.forEach((entry) => {
          if (entry.intersectionRatio > maxRatio) {
            maxRatio = entry.intersectionRatio;
            mostVisible = entry;
          }
        });

        const sectionId = mostVisible.target.id;
        if (sections.includes(sectionId)) {
          setActiveSection(sectionId);
        }
      }
    };

    // Different observer options for different sections
    const createObserver = (sectionId: string) => {
      let options;
      
      if (sectionId === "contact") {
        // Footer needs different detection - trigger when it's visible at bottom
        options = {
          root: null,
          rootMargin: "-10% 0px -10% 0px",
          threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5],
        };
      } else {
        // Other sections use standard detection
        options = {
          root: null,
          rootMargin: "-20% 0px -60% 0px",
          threshold: [0, 0.1, 0.2, 0.3],
        };
      }

      return new IntersectionObserver(observerCallback, options);
    };

    const observers: IntersectionObserver[] = [];

    // Observe all sections with appropriate observers
    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        const observer = createObserver(sectionId);
        observer.observe(element);
        observers.push(observer);
      }
    });

    // Also check on scroll for better accuracy
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      const documentHeight = document.documentElement.scrollHeight;
      
      // If near bottom, activate contact
      if (scrollPosition + 200 >= documentHeight) {
        setActiveSection("contact");
        return;
      }

      // Check sections from bottom to top
      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = rect.top + window.scrollY;
          const elementBottom = elementTop + rect.height;
          
          // If section is in viewport
          if (scrollPosition >= elementTop - 100 && scrollPosition <= elementBottom) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    // Initial check
    handleScroll();
    
    // Listen to scroll events for better detection
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      observers.forEach((observer) => observer.disconnect());
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return activeSection;
}
