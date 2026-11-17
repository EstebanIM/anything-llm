import { Tooltip as RechartsTooltip } from "recharts";

/**
 * Chart tooltip on the page surface. Text uses the theme text tokens so it
 * reads in both themes; the series color only appears in the swatch.
 */
export default function Tooltip({ legendColor, ...props }) {
  return (
    <RechartsTooltip
      wrapperStyle={{ outline: "none" }}
      isAnimationActive={false}
      cursor={{ fill: "#d1d5db", opacity: "0.15" }}
      position={{ y: 0 }}
      {...props}
      content={({ active, payload, label }) => {
        return active && payload ? (
          <div className="bg-theme-bg-primary text-sm rounded-lg border border-zinc-700 light:border-slate-300 shadow-lg">
            <div className="border-b border-zinc-700 light:border-slate-300 py-2 px-4">
              <p className="!m-0 text-theme-text-primary font-medium">
                {label}
              </p>
            </div>
            <div className="space-y-1 py-2 px-4">
              {payload.map(({ value, name }, idx) => (
                <div
                  key={`id-${idx}`}
                  className="flex items-center justify-between gap-x-8"
                >
                  <div className="flex items-center gap-x-2">
                    <span
                      aria-hidden="true"
                      className="shrink-0 h-3 w-3 rounded-full border-2 border-theme-bg-primary shadow-md"
                      style={{ backgroundColor: legendColor }}
                    />
                    <p className="!m-0 font-medium tabular-nums text-right whitespace-nowrap text-theme-text-primary">
                      {value}
                    </p>
                  </div>
                  <p className="!m-0 whitespace-nowrap font-normal text-theme-text-secondary">
                    {name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ) : null;
      }}
    />
  );
}
