import React, { useRef } from "react";
import { motion } from "framer-motion";
import playAudio from "../../../utils/helpers/playAudio";
import { SPRING } from "../../../utils/motion";
import "./Tabs.scss";

interface TabsProps<T extends string> {
  id: string;
  label: string;
  items: { id: T; label: string }[];
  value: T;
  onChange: (id: T) => void;
}

export const tabId = (id: string, item: string) => `${id}-tab-${item}`;
export const panelId = (id: string, item: string) => `${id}-panel-${item}`;

export default function Tabs<T extends string>({
  id,
  label,
  items,
  value,
  onChange,
}: TabsProps<T>) {
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);

  const move = (event: React.KeyboardEvent, index: number) => {
    const last = items.length - 1;
    const targets: Record<string, number> = {
      ArrowRight: index === last ? 0 : index + 1,
      ArrowLeft: index === 0 ? last : index - 1,
      Home: 0,
      End: last,
    };
    const next = targets[event.key];

    if (next === undefined) return;

    event.preventDefault();
    onChange(items[next].id);
    tabs.current[next]?.focus();
  };

  return (
    <div className="tabs" role="tablist" aria-label={label}>
      {items.map((item, index) => {
        const selected = item.id === value;

        return (
          <button
            key={item.id}
            ref={(node) => {
              tabs.current[index] = node;
            }}
            id={tabId(id, item.id)}
            className={`tabs__tab${selected ? " tabs__tab--selected" : ""}`}
            type="button"
            role="tab"
            aria-selected={selected}
            aria-controls={panelId(id, item.id)}
            tabIndex={selected ? 0 : -1}
            onClick={() => onChange(item.id)}
            onKeyDown={(event) => move(event, index)}
            onMouseDown={playAudio}
            onMouseUp={playAudio}
          >
            {selected && (
              <motion.span
                className="tabs__fill"
                layoutId={`${id}-tab-fill`}
                transition={SPRING}
              />
            )}
            <span className="tabs__label">{item.label}</span>
          </button>
        );
      })}
    </div>
  );
}
