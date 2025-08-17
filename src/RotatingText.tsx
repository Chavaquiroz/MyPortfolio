"use client";

import React, {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useState,
} from "react";
import {
  motion,
  AnimatePresence,
  type VariantLabels,
  type Target,
  type TargetAndTransition,
} from "motion/react";
import type { Transition } from "motion/react";

import "./css/RotatingText.css";

function cn(...classes: (string | undefined | null | boolean)[]): string {
  return classes.filter(Boolean).join(" ");
}

export interface RotatingTextRef {
  next: () => void;
  previous: () => void;
  jumpTo: (index: number) => void;
  reset: () => void;
}

export interface RotatingTextProps
  extends Omit<
    React.ComponentPropsWithoutRef<typeof motion.span>,
    "children" | "transition" | "initial" | "animate" | "exit"
  > {
  texts: string[];
  transition?: Transition;
  initial?: boolean | Target | VariantLabels;
  animate?: boolean | VariantLabels | TargetAndTransition;
  exit?: Target | VariantLabels;
  animatePresenceMode?: "sync" | "wait";
  animatePresenceInitial?: boolean;
  rotationInterval?: number;
  staggerDuration?: number;
  staggerFrom?: "first" | "last" | "center" | "random" | number;
  loop?: boolean;
  auto?: boolean;
  splitBy?: string;
  onNext?: (index: number) => void;
  mainClassName?: string;
  splitLevelClassName?: string;
  elementLevelClassName?: string;

  /** Clip (recorte) para que solo se vea dentro del viewport */
  clip?: boolean;
  /** Alto del viewport de recorte (matchea tu caja morada). Puede ser número (px) o CSS (ej: "40px", "2.5em"). */
  viewportHeight?: number | string;
  /** Ancho opcional del viewport (normalmente no hace falta). */
  viewportWidth?: number | string;
}

const RotatingText = forwardRef<RotatingTextRef, RotatingTextProps>(
  (props, ref) => {
    const {
      texts,
      transition = { type: "spring", damping: 25, stiffness: 300 },
      initial = { y: "100%", opacity: 0 },
      animate = { y: 0, opacity: 1 },
      exit = { y: "-120%", opacity: 0 },
      animatePresenceMode = "wait",
      animatePresenceInitial = false,
      rotationInterval = 2000,
      staggerDuration = 0,
      staggerFrom = "first",
      loop = true,
      auto = true,
      splitBy = "characters",
      onNext,
      mainClassName,
      splitLevelClassName,
      elementLevelClassName,
      clip = true,
      viewportHeight, // ej: "40px" o 40
      viewportWidth,
      ...rest
    } = props;

    const [currentTextIndex, setCurrentTextIndex] = useState<number>(0);

    const splitIntoCharacters = (text: string): string[] => {
      if (typeof Intl !== "undefined" && Intl.Segmenter) {
        const segmenter = new Intl.Segmenter("en", { granularity: "grapheme" });
        return Array.from(segmenter.segment(text), (s) => s.segment);
      }
      return Array.from(text);
    };

    const elements = useMemo(() => {
      const currentText: string = texts[currentTextIndex];
      if (splitBy === "characters") {
        const words = currentText.split(" ");
        return words.map((word, i) => ({
          characters: splitIntoCharacters(word),
          needsSpace: i !== words.length - 1,
        }));
      }
      if (splitBy === "words") {
        return currentText.split(" ").map((word, i, arr) => ({
          characters: [word],
          needsSpace: i !== arr.length - 1,
        }));
      }
      if (splitBy === "lines") {
        return currentText.split("\n").map((line, i, arr) => ({
          characters: [line],
          needsSpace: i !== arr.length - 1,
        }));
      }
      return currentText.split(splitBy).map((part, i, arr) => ({
        characters: [part],
        needsSpace: i !== arr.length - 1,
      }));
    }, [texts, currentTextIndex, splitBy]);

    const getStaggerDelay = useCallback(
      (index: number, total: number): number => {
        if (staggerFrom === "first") return index * staggerDuration;
        if (staggerFrom === "last") return (total - 1 - index) * staggerDuration;
        if (staggerFrom === "center") {
          const center = Math.floor(total / 2);
          return Math.abs(center - index) * staggerDuration;
        }
        if (staggerFrom === "random") {
          const r = Math.floor(Math.random() * total);
          return Math.abs(r - index) * staggerDuration;
        }
        return Math.abs((staggerFrom as number) - index) * staggerDuration;
      },
      [staggerFrom, staggerDuration]
    );

    const handleIndexChange = useCallback(
      (newIndex: number) => {
        setCurrentTextIndex(newIndex);
        onNext?.(newIndex);
      },
      [onNext]
    );

    const next = useCallback(() => {
      const nextIndex =
        currentTextIndex === texts.length - 1
          ? (loop ? 0 : currentTextIndex)
          : currentTextIndex + 1;
      if (nextIndex !== currentTextIndex) handleIndexChange(nextIndex);
    }, [currentTextIndex, texts.length, loop, handleIndexChange]);

    const previous = useCallback(() => {
      const prevIndex =
        currentTextIndex === 0
          ? (loop ? texts.length - 1 : currentTextIndex)
          : currentTextIndex - 1;
      if (prevIndex !== currentTextIndex) handleIndexChange(prevIndex);
    }, [currentTextIndex, texts.length, loop, handleIndexChange]);

    const jumpTo = useCallback(
      (index: number) => {
        const i = Math.max(0, Math.min(index, texts.length - 1));
        if (i !== currentTextIndex) handleIndexChange(i);
      },
      [texts.length, currentTextIndex, handleIndexChange]
    );

    const reset = useCallback(() => {
      if (currentTextIndex !== 0) handleIndexChange(0);
    }, [currentTextIndex, handleIndexChange]);

    useImperativeHandle(ref, () => ({ next, previous, jumpTo, reset }), [
      next,
      previous,
      jumpTo,
      reset,
    ]);

    useEffect(() => {
      if (!auto) return;
      const id = setInterval(next, rotationInterval);
      return () => clearInterval(id);
    }, [next, rotationInterval, auto]);

    // Estilo del viewport para recortar
    const viewportStyle: React.CSSProperties | undefined = clip
      ? {
          overflow: "hidden",
          display: "inline-block",
          position: "relative",
          height:
            typeof viewportHeight === "number"
              ? `${viewportHeight}px`
              : viewportHeight, // puede ser undefined → se usa line-height
          width:
            typeof viewportWidth === "number"
              ? `${viewportWidth}px`
              : viewportWidth,
          // Asegura que el texto no desborde verticalmente si no se define height:
          lineHeight: viewportHeight ? undefined : 1.1,
        }
      : undefined;

    return (
      <motion.span className={cn("text-rotate", mainClassName)} {...rest}>
        {/* Solo para accesibilidad: texto actual */}
        <span className="text-rotate-sr-only">{texts[currentTextIndex]}</span>

        {/* 📦 Viewport que recorta la animación */}
        <span className="text-rotate-viewport" style={viewportStyle}>
          <AnimatePresence mode={animatePresenceMode} initial={animatePresenceInitial}>
            <motion.span
              key={currentTextIndex}
              className={cn(splitBy === "lines" ? "text-rotate-lines" : "text-rotate")}
              aria-hidden="true"
              style={{ display: "inline-block", willChange: "transform, opacity" }}
            >
              {elements.map((wordObj, wordIndex, array) => {
                const prevCount = array
                  .slice(0, wordIndex)
                  .reduce((sum, w) => sum + w.characters.length, 0);

                const total = array.reduce(
                  (sum, w) => sum + w.characters.length,
                  0
                );

                return (
                  <span
                    key={wordIndex}
                    className={cn("text-rotate-word", splitLevelClassName)}
                    style={{ display: "inline-block" }}
                  >
                    {wordObj.characters.map((char, charIndex) => {
                      const baseDelay = getStaggerDelay(prevCount + charIndex, total);
                      return (
                        <motion.span
                          key={charIndex}
                          initial={initial}
                          animate={animate}
                          exit={exit}
                          transition={{ ...(transition as Transition), delay: baseDelay }}
                          className={cn("text-rotate-element", elementLevelClassName)}
                          style={{ display: "inline-block", willChange: "transform, opacity" }}
                        >
                          {char}
                        </motion.span>
                      );
                    })}
                    {wordObj.needsSpace && <span className="text-rotate-space"> </span>}
                  </span>
                );
              })}
            </motion.span>
          </AnimatePresence>
        </span>
      </motion.span>
    );
  }
);

RotatingText.displayName = "RotatingText";
export default RotatingText;
