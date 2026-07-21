"use client";

import { motion } from "framer-motion";

export default function DashboardVisual({ label = "Intelligence dashboard placeholder" }: { label?: string }) {
  return (
    <div className="dashboard-grid relative min-h-[320px] overflow-hidden rounded border border-white/10 bg-navy-950 p-5 text-white shadow-premium">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,217,150,0.26),transparent_28%),radial-gradient(circle_at_80%_0%,rgba(217,164,65,0.22),transparent_26%)]" />
      <div className="relative grid gap-4">
        <div className="flex items-center justify-between">
          <span className="rounded bg-white/10 px-3 py-1 text-xs font-semibold text-emerald-300">
            {label}
          </span>
          <span className="h-2 w-20 rounded-full bg-gold-300/80" />
        </div>
        <div className="grid gap-3 sm:grid-cols-3">
          {["AI readiness", "Talent signal", "Capital view"].map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.12 }}
              className="rounded border border-white/10 bg-white/10 p-4"
            >
              <p className="text-xs text-white/55">{item}</p>
              <p className="mt-4 text-2xl font-semibold">{[82, 74, 91][index]}%</p>
              <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${[82, 74, 91][index]}%` }}
                  transition={{ duration: 1.2, delay: 0.2 }}
                  className="h-full rounded-full bg-emerald-400"
                />
              </div>
            </motion.div>
          ))}
        </div>
        <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded border border-white/10 bg-white/10 p-4">
            <div className="flex h-44 items-end gap-2">
              {[44, 68, 54, 82, 72, 94, 76, 88].map((height, index) => (
                <motion.span
                  key={height + index}
                  initial={{ height: 12 }}
                  animate={{ height }}
                  transition={{ duration: 0.8, delay: index * 0.08 }}
                  className="flex-1 rounded-t bg-gradient-to-t from-emerald-500 to-gold-300"
                />
              ))}
            </div>
          </div>
          <div className="rounded border border-white/10 bg-white/10 p-4">
            <div className="space-y-4">
              {["Enterprise AI", "Workforce systems", "Financial intelligence", "Advisory pipeline"].map((item) => (
                <div key={item}>
                  <div className="flex justify-between text-xs text-white/65">
                    <span>{item}</span>
                    <span>Active</span>
                  </div>
                  <div className="mt-2 h-2 rounded-full bg-white/10">
                    <div className="h-full w-3/4 rounded-full bg-gold-300" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
