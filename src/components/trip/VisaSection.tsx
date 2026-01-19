"use client";

import { motion } from "framer-motion";
import { FileText, CheckCircle, AlertCircle } from "lucide-react";
import { GlassCard } from "@/components/shared/GlassCard";
import { Destination } from "@/lib/utils/calculations";
import { formatCurrency } from "@/lib/utils/currency";

interface VisaSectionProps {
  destination: Destination;
}

export function VisaSection({ destination }: VisaSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.7 }}
    >
      <GlassCard hover={false} className="p-5">
        <div className="flex items-start gap-4">
          <div
            className={`p-3 rounded-xl ${
              destination.visa_required ? "bg-yellow-500/10" : "bg-green-500/10"
            }`}
          >
            <FileText
              className={`h-6 w-6 ${
                destination.visa_required ? "text-yellow-400" : "text-green-400"
              }`}
            />
          </div>

          <div className="flex-1">
            <h3 className="text-lg font-semibold text-white">Visa Information</h3>

            <div className="mt-4 space-y-3">
              {/* Status */}
              <div className="flex items-center gap-2">
                {destination.visa_required ? (
                  <AlertCircle className="h-5 w-5 text-yellow-400" />
                ) : (
                  <CheckCircle className="h-5 w-5 text-green-400" />
                )}
                <span
                  className={`font-medium ${
                    destination.visa_required ? "text-yellow-400" : "text-green-400"
                  }`}
                >
                  {destination.visa_required ? "Visa Required" : "FREE for Indian passport holders"}
                </span>
              </div>

              {/* Details */}
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div>
                  <p className="text-white/40 text-sm">Type</p>
                  <p className="text-white">{destination.visa_type || "N/A"}</p>
                </div>
                {destination.visa_cost > 0 && (
                  <div>
                    <p className="text-white/40 text-sm">Cost</p>
                    <p className="text-white">{formatCurrency(destination.visa_cost)}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
}
