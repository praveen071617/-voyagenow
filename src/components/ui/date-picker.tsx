"use client";

import * as React from "react";
import { createPortal } from "react-dom";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";

interface DatePickerProps {
  date: Date | undefined;
  onDateChange: (date: Date | undefined) => void;
  placeholder?: string;
  disabled?: boolean;
  minDate?: Date;
  className?: string;
}

export function DatePicker({
  date,
  onDateChange,
  placeholder = "Pick a date",
  disabled,
  minDate,
  className,
}: DatePickerProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);
  const buttonRef = React.useRef<HTMLButtonElement>(null);
  const [position, setPosition] = React.useState({ top: 0, left: 0 });

  React.useEffect(() => {
    setMounted(true);
  }, []);

  React.useEffect(() => {
    if (isOpen && buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setPosition({
        top: rect.bottom + window.scrollY + 8,
        left: rect.left + window.scrollX,
      });
    }
  }, [isOpen]);

  // Close on escape key
  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      return () => document.removeEventListener("keydown", handleEscape);
    }
  }, [isOpen]);

  const calendarPortal = mounted && isOpen ? createPortal(
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0"
        style={{ zIndex: 9998 }}
        onClick={() => setIsOpen(false)}
      />
      {/* Calendar dropdown */}
      <div
        className="fixed rounded-xl border border-white/20 bg-[#12121a] shadow-2xl"
        style={{
          zIndex: 9999,
          top: position.top,
          left: position.left,
        }}
      >
        <Calendar
          mode="single"
          selected={date}
          onSelect={(newDate) => {
            onDateChange(newDate);
            setIsOpen(false);
          }}
          disabled={(d) => {
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            if (minDate) {
              const min = new Date(minDate);
              min.setHours(0, 0, 0, 0);
              return d < min;
            }
            return d < today;
          }}
          initialFocus
        />
      </div>
    </>,
    document.body
  ) : null;

  return (
    <div className={cn("relative", className)}>
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        disabled={disabled}
        className={cn(
          "flex h-10 w-full items-center justify-between rounded-lg border border-white/10 bg-white/[0.06] px-3 py-2 text-sm text-white hover:bg-white/[0.1] focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors",
          !date && "text-white/50",
          isOpen && "ring-2 ring-purple-500"
        )}
      >
        {date ? format(date, "MMM dd, yyyy") : placeholder}
        <CalendarIcon className="h-4 w-4 text-white/50" />
      </button>
      {calendarPortal}
    </div>
  );
}
