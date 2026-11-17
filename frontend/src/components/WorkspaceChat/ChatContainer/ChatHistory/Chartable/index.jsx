import { v4 } from "uuid";
import {
  AreaChart,
  BarChart,
  DonutChart,
  Legend,
  LineChart,
} from "@tremor/react";
import {
  Bar,
  CartesianGrid,
  ComposedChart,
  Funnel,
  FunnelChart,
  Line,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  RadialBar,
  RadialBarChart,
  ResponsiveContainer,
  Scatter,
  ScatterChart,
  Treemap,
  XAxis,
  YAxis,
} from "recharts";
import { Colors, getTremorColor } from "./chart-utils.js";
import CustomCell from "./CustomCell.jsx";
import Tooltip from "./CustomTooltip.jsx";
import { safeJsonParse } from "@/utils/request.js";
import { formatNumber } from "@/utils/dates";
import renderMarkdown from "@/utils/chat/markdown.js";
import DOMPurify from "dompurify";
import { memo, useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { saveAs } from "file-saver";
import { useGenerateImage } from "recharts-to-png";
import { LoaderCircle, Download } from "lucide-react";

// Axis and tooltip values in the UI language ("1.234,5" in Spanish).
const dataFormatter = (number) => formatNumber(number);

export function Chartable({ props }) {
  const { t } = useTranslation();
  const [getDivJpeg, { ref }] = useGenerateImage({
    quality: 1,
    type: "image/jpeg",
    options: {
      backgroundColor: "#393d43",
      padding: 20,
    },
  });
  const handleDownload = useCallback(async () => {
    const jpeg = await getDivJpeg();
    if (jpeg) saveAs(jpeg, `chart-${v4().split("-")[0]}.jpg`);
  }, []);

  const color = null;
  const showLegend = true;
  const content =
    typeof props.content === "string"
      ? safeJsonParse(props.content, null)
      : props.content;
  if (content === null) return null;

  const chartType = content?.type?.toLowerCase();
  const data =
    typeof content.dataset === "string"
      ? safeJsonParse(content.dataset, [])
      : content.dataset;
  const value = data.length > 0 ? Object.keys(data[0])[1] : "value";
  const title = content?.title;

  const renderChart = () => {
    switch (chartType) {
      case "area":
        return (
          <div className="bg-theme-bg-primary p-4 md:p-8 rounded-xl text-white light:border light:border-slate-300">
            <h3 className="text-lg text-theme-text-primary font-medium">
              {title}
            </h3>
            <AreaChart
              className="h-[350px]"
              data={data}
              index="name"
              categories={[value]}
              colors={[color || "blue", "cyan"]}
              showLegend={showLegend}
              valueFormatter={dataFormatter}
            />
          </div>
        );
      case "bar":
        return (
          <div className="bg-theme-bg-primary p-4 md:p-8 rounded-xl text-white light:border light:border-slate-300">
            <h3 className="text-lg text-theme-text-primary font-medium">
              {title}
            </h3>
            <BarChart
              className="h-[350px]"
              data={data}
              index="name"
              categories={[value]}
              colors={[color || "blue"]}
              showLegend={showLegend}
              valueFormatter={dataFormatter}
              layout={"vertical"}
              yAxisWidth={100}
            />
          </div>
        );
      case "line":
        return (
          <div className="bg-theme-bg-primary p-4 pb-12 md:p-8 md:pb-12 rounded-xl text-white h-[500px] w-full light:border light:border-slate-300">
            <h3 className="text-lg text-theme-text-primary font-medium">
              {title}
            </h3>
            <LineChart
              className="h-[400px]"
              data={data}
              index="name"
              categories={[value]}
              colors={[color || "blue"]}
              showLegend={showLegend}
              valueFormatter={dataFormatter}
            />
          </div>
        );
      case "composed":
        return (
          <div className="bg-theme-bg-primary p-4 md:p-8 rounded-xl text-white light:border light:border-slate-300">
            <h3 className="text-lg text-theme-text-primary font-medium">
              {title}
            </h3>
            {showLegend && (
              <Legend
                categories={[value]}
                colors={[color || "blue", color || "blue"]}
                className="mb-5 justify-end"
              />
            )}
            <ResponsiveContainer width="100%" height={260}>
              <ComposedChart data={data}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  horizontal
                  vertical={false}
                />
                <XAxis
                  dataKey="name"
                  tickLine={false}
                  axisLine={false}
                  interval="preserveStartEnd"
                  tick={{ transform: "translate(0, 6)", fill: "currentColor" }}
                  style={{
                    fontSize: "12px",
                    fontFamily: "Inter; Helvetica",
                  }}
                  padding={{ left: 10, right: 10 }}
                />
                <YAxis
                  tickLine={false}
                  axisLine={false}
                  type="number"
                  tick={{ transform: "translate(-3, 0)", fill: "currentColor" }}
                  style={{
                    fontSize: "12px",
                    fontFamily: "Inter; Helvetica",
                  }}
                />
                <Tooltip legendColor={getTremorColor(color || "blue")} />
                <Line
                  type="linear"
                  dataKey={value}
                  stroke={getTremorColor(color || "blue")}
                  dot={false}
                  strokeWidth={2}
                />
                <Bar
                  dataKey="value"
                  name="value"
                  type="linear"
                  fill={getTremorColor(color || "blue")}
                />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        );
      case "scatter":
        return (
          <div className="bg-theme-bg-primary p-4 md:p-8 rounded-xl text-white light:border light:border-slate-300">
            <h3 className="text-lg text-theme-text-primary font-medium">
              {title}
            </h3>
            {showLegend && (
              <div className="flex justify-end">
                <Legend
                  categories={[value]}
                  colors={[color || "blue", color || "blue"]}
                  className="mb-5"
                />
              </div>
            )}
            <ResponsiveContainer width="100%" height={260}>
              <ScatterChart data={data}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  horizontal
                  vertical={false}
                />
                <XAxis
                  dataKey="name"
                  tickLine={false}
                  axisLine={false}
                  interval="preserveStartEnd"
                  tick={{ transform: "translate(0, 6)", fill: "currentColor" }}
                  style={{
                    fontSize: "12px",
                    fontFamily: "Inter; Helvetica",
                  }}
                  padding={{ left: 10, right: 10 }}
                />
                <YAxis
                  tickLine={false}
                  axisLine={false}
                  type="number"
                  tick={{ transform: "translate(-3, 0)", fill: "currentColor" }}
                  style={{
                    fontSize: "12px",
                    fontFamily: "Inter; Helvetica",
                  }}
                />
                <Tooltip legendColor={getTremorColor(color || "blue")} />
                <Scatter
                  dataKey={value}
                  fill={getTremorColor(color || "blue")}
                />
              </ScatterChart>
            </ResponsiveContainer>
          </div>
        );
      case "pie":
        return (
          <div className="bg-theme-bg-primary p-4 md:p-8 rounded-xl text-white light:border light:border-slate-300">
            <h3 className="text-lg text-theme-text-primary font-medium">
              {title}
            </h3>
            <DonutChart
              data={data}
              category={value}
              index="name"
              colors={[
                color || "cyan",
                "violet",
                "rose",
                "amber",
                "emerald",
                "teal",
                "fuchsia",
              ]}
              // No actual legend for pie chart, but this will toggle the central text
              showLabel={showLegend}
              valueFormatter={dataFormatter}
              customTooltip={customTooltip}
            />
          </div>
        );
      case "radar":
        return (
          <div className="bg-theme-bg-primary p-4 md:p-8 rounded-xl text-white light:border light:border-slate-300">
            <h3 className="text-lg text-theme-text-primary font-medium">
              {title}
            </h3>
            {showLegend && (
              <div className="flex justify-end">
                <Legend
                  categories={[value]}
                  colors={[color || "blue", color || "blue"]}
                  className="mb-5"
                />
              </div>
            )}
            <ResponsiveContainer width="100%" height={400}>
              <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
                <PolarGrid />
                <PolarAngleAxis
                  dataKey="name"
                  tick={{ fill: "currentColor" }}
                />
                <PolarRadiusAxis tick={{ fill: "currentColor" }} />
                <Tooltip legendColor={getTremorColor(color || "blue")} />
                <Radar
                  dataKey="value"
                  stroke={getTremorColor(color || "blue")}
                  fill={getTremorColor(color || "blue")}
                  fillOpacity={0.6}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        );
      case "radialbar":
        return (
          <div className="bg-theme-bg-primary p-4 md:p-8 rounded-xl text-white light:border light:border-slate-300">
            <h3 className="text-lg text-theme-text-primary font-medium">
              {title}
            </h3>
            {showLegend && (
              <div className="flex justify-end">
                <Legend
                  categories={[value]}
                  colors={[color || "blue", color || "blue"]}
                  className="mb-5"
                />
              </div>
            )}
            <ResponsiveContainer width="100%" height={300}>
              <RadialBarChart
                cx="50%"
                cy="50%"
                innerRadius={20}
                outerRadius={140}
                barSize={10}
                data={data}
              >
                <RadialBar
                  angleAxisId={15}
                  label={{
                    position: "insideStart",
                    fill: getTremorColor(color || "blue"),
                  }}
                  dataKey="value"
                />
                <Tooltip legendColor={getTremorColor(color || "blue")} />
              </RadialBarChart>
            </ResponsiveContainer>
          </div>
        );
      case "treemap":
        return (
          <div className="bg-theme-bg-primary p-4 md:p-8 rounded-xl text-white light:border light:border-slate-300">
            <h3 className="text-lg text-theme-text-primary font-medium">
              {title}
            </h3>
            {showLegend && (
              <div className="flex justify-end">
                <Legend
                  categories={[value]}
                  colors={[color || "blue", color || "blue"]}
                  className="mb-5"
                />
              </div>
            )}
            <ResponsiveContainer width="100%" height={260}>
              <Treemap
                data={data}
                dataKey="value"
                stroke="#fff"
                fill={getTremorColor(color || "blue")}
                content={<CustomCell colors={Object.values(Colors)} />}
              >
                <Tooltip legendColor={getTremorColor(color || "blue")} />
              </Treemap>
            </ResponsiveContainer>
          </div>
        );
      case "funnel":
        return (
          <div className="bg-theme-bg-primary p-4 md:p-8 rounded-xl text-white light:border light:border-slate-300">
            <h3 className="text-lg text-theme-text-primary font-medium">
              {title}
            </h3>
            {showLegend && (
              <div className="flex justify-end">
                <Legend
                  categories={[value]}
                  colors={[color || "blue", color || "blue"]}
                  className="mb-5"
                />
              </div>
            )}
            <ResponsiveContainer width="100%" height={300}>
              <FunnelChart data={data}>
                <Tooltip legendColor={getTremorColor(color || "blue")} />
                <Funnel
                  dataKey="value"
                  color={getTremorColor(color || "blue")}
                />
              </FunnelChart>
            </ResponsiveContainer>
          </div>
        );
      default:
        return <p>{t("chat-history.chart.unsupported")}</p>;
    }
  };

  if (!!props.chatId) {
    return (
      <div className="flex justify-start w-full">
        <div className="py-2 px-4 w-full flex flex-col md:max-w-[80%]">
          <div className="relative w-full">
            <DownloadGraph onClick={handleDownload} />
            <div ref={ref}>{renderChart()}</div>
            <span
              className="flex flex-col gap-y-1 mt-2"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(renderMarkdown(content.caption)),
              }}
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-start w-full">
      <div className="py-2 px-4 w-full flex flex-col md:max-w-[80%]">
        <div className="relative w-full">
          <DownloadGraph onClick={handleDownload} />
          <div ref={ref}>{renderChart()}</div>
        </div>
        <span
          className="flex flex-col gap-y-1 mt-2"
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(renderMarkdown(content.caption)),
          }}
        />
      </div>
    </div>
  );
}

const customTooltip = (props) => {
  const { payload, active } = props;
  if (!active || !payload) return null;
  const categoryPayload = payload?.[0];
  if (!categoryPayload) return null;
  return (
    <div className="w-56 bg-theme-bg-primary rounded-lg border p-2 text-white">
      <div className="flex flex-1 space-x-2.5">
        <div
          className={`flex w-1.5 flex-col bg-${categoryPayload?.color}-500 rounded`}
        />
        <div className="w-full">
          <div className="flex items-center justify-between space-x-8">
            <p className="whitespace-nowrap text-right text-tremor-content">
              {categoryPayload.name}
            </p>
            <p className="whitespace-nowrap text-right font-medium text-tremor-content-emphasis">
              {categoryPayload.value}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

function DownloadGraph({ onClick }) {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const handleClick = async () => {
    setLoading(true);
    await onClick?.();
    setLoading(false);
  };
  const label = loading
    ? t("chat-history.chart.downloading")
    : t("chat-history.chart.download");

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={loading}
      aria-label={label}
      title={label}
      className="absolute top-1 right-1 md:top-2 md:right-2 z-10 flex items-center justify-center w-11 h-11 rounded-full border-none text-theme-text-secondary hover:text-theme-text-primary transition-colors duration-quick disabled:cursor-wait"
    >
      {loading ? (
        <LoaderCircle
          strokeWidth={1.5}
          aria-hidden="true"
          className="w-5 h-5 animate-spin"
        />
      ) : (
        <Download strokeWidth={1.5} aria-hidden="true" className="w-5 h-5" />
      )}
    </button>
  );
}

export default memo(Chartable);
