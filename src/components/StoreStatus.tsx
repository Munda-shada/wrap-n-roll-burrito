"use client";
import { useEffect, useState } from "react";
import { siteConfig } from "@/config/site";

export default function StoreStatus() {
  const [status, setStatus] = useState<{ isOpen: boolean; message: string } | null>(null);

  useEffect(() => {
    const checkStatus = () => {
      // Get current time in Ontario
      const now = new Date();
      const ontarioTime = new Intl.DateTimeFormat("en-US", {
        timeZone: "America/Toronto",
        hour: "numeric",
        minute: "numeric",
        hour12: false,
        weekday: "narrow",
      }).formatToParts(now);

      const hour = parseInt(ontarioTime.find(p => p.type === 'hour')?.value || "0");
      const dayIndex = now.getDay(); // 0-6
      
      const todaySchedule = siteConfig.openingHours.schedule.find(s => s.day === dayIndex);

      if (todaySchedule && hour >= todaySchedule.open && hour < todaySchedule.close) {
        setStatus({ 
          isOpen: true, 
          message: `Open Now • Closing at ${todaySchedule.close > 12 ? todaySchedule.close - 12 : todaySchedule.close} PM` 
        });
      } else {
        setStatus({ 
          isOpen: false, 
          message: "Closed • Opening at 11 AM" 
        });
      }
    };

    checkStatus();
    const interval = setInterval(checkStatus, 60000); // Re-check every minute
    return () => clearInterval(interval);
  }, []);

  if (!status) return null;

  return (
    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 w-fit">
      <span className={`relative flex h-2 w-2`}>
        <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${status.isOpen ? 'bg-green-400' : 'bg-red-400'}`}></span>
        <span className={`relative inline-flex rounded-full h-2 w-2 ${status.isOpen ? 'bg-green-500' : 'bg-red-500'}`}></span>
      </span>
      <span className="text-[10px] font-black uppercase tracking-widest text-white">
        {status.message}
      </span>
    </div>
  );
}