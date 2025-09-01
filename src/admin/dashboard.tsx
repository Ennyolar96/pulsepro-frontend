import { cn } from "@/components/utils";
import {
  BookOpen,
  GraduationCap,
  MoreHorizontal,
  TrendingDown,
  TrendingUp,
  Trophy,
  Users,
} from "lucide-react";
import type { FC, ReactElement } from "react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Line,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

type MetricCardProps = {
  title: string;
  value: string;
  change: number;
  changeText: string;
  icon: FC<{ className?: string }>;
  bgColor: string;
  iconBg: string;
  className?: string;
};

type StudentPoint = {
  month: string;
  "2024": number;
  "2025": number;
};

type CourseRegistration = {
  month: string;
  students: number;
  "First Aid": number;
  BLS: number;
  ACLS: number;
  PCTW: number;
  PALS: number;
};

type PieSlice = {
  name: string;
  value: number;
  color: string;
};

type Message = {
  id: number;
  email: string;
  message: string;
  avatar: string;
};

/* ─────────────────────────────────────────────
   DUMMY DATA
───────────────────────────────────────────── */

const studentData: StudentPoint[] = [
  { month: "Jan", 2024: 250, 2025: 600 },
  { month: "Feb", 2024: 600, 2025: 950 },
  { month: "Mar", 2024: 950, 2025: 950 },
  { month: "Apr", 2024: 950, 2025: 580 },
  { month: "May", 2024: 580, 2025: 850 },
  { month: "Jun", 2024: 850, 2025: 500 },
  { month: "Jul", 2024: 380, 2025: 450 },
  { month: "Aug", 2024: 50, 2025: 850 },
  { month: "Sep", 2024: 850, 2025: 500 },
  { month: "Oct", 2024: 500, 2025: 950 },
  { month: "Nov", 2024: 950, 2025: 600 },
  { month: "Dec", 2024: 600, 2025: 0 },
];

/* Registration per month for the bar-chart */
const courseData: CourseRegistration[] = [
  {
    month: "Jan",
    students: 70,
    "First Aid": 45,
    BLS: 0,
    ACLS: 20,
    PCTW: 30,
    PALS: 26,
  },
  {
    month: "Feb",
    students: 95,
    "First Aid": 45,
    BLS: 25,
    ACLS: 0,
    PCTW: 30,
    PALS: 26,
  },
  {
    month: "Mar",
    students: 88,
    "First Aid": 45,
    BLS: 25,
    ACLS: 20,
    PCTW: 0,
    PALS: 26,
  },
  {
    month: "Apr",
    students: 100,
    "First Aid": 45,
    BLS: 25,
    ACLS: 20,
    PCTW: 30,
    PALS: 0,
  },
  {
    month: "May",
    students: 75,
    "First Aid": 45,
    BLS: 25,
    ACLS: 20,
    PCTW: 30,
    PALS: 26,
  },
  {
    month: "Jun",
    students: 80,
    "First Aid": 45,
    BLS: 25,
    ACLS: 20,
    PCTW: 30,
    PALS: 26,
  },
  {
    month: "Jul",
    students: 85,
    "First Aid": 45,
    BLS: 25,
    ACLS: 20,
    PCTW: 30,
    PALS: 26,
  },
  {
    month: "Aug",
    students: 90,
    "First Aid": 45,
    BLS: 25,
    ACLS: 20,
    PCTW: 30,
    PALS: 26,
  },
  {
    month: "Sep",
    students: 65,
    "First Aid": 45,
    BLS: 25,
    ACLS: 20,
    PCTW: 30,
    PALS: 26,
  },
  {
    month: "Oct",
    students: 95,
    "First Aid": 45,
    BLS: 25,
    ACLS: 20,
    PCTW: 30,
    PALS: 26,
  },
  {
    month: "Nov",
    students: 82,
    "First Aid": 45,
    BLS: 25,
    ACLS: 20,
    PCTW: 30,
    PALS: 26,
  },
  {
    month: "Dec",
    students: 88,
    "First Aid": 45,
    BLS: 25,
    ACLS: 20,
    PCTW: 30,
    PALS: 26,
  },
];

const pieData: PieSlice[] = [
  { name: "First Aid & CPR", value: 35, color: "#8B5CF6" },
  { name: "BLS", value: 25, color: "#06B6D4" },
  { name: "ACLS", value: 20, color: "#F59E0B" },
  { name: "PCTW", value: 15, color: "#10B981" },
  { name: "PALS", value: 5, color: "#EF4444" },
];

const messages: Message[] = [
  {
    id: 1,
    email: "janecooper@gmail.com",
    message: "Hi, I need to change my delivery address.",
    avatar: "👩‍💼",
  },
  {
    id: 2,
    email: "fisherman12@gmail.com",
    message: "Hello, I'm not getting the correct pricing.",
    avatar: "👨‍💼",
  },
];

/* ─────────────────────────────────────────────
   COMPONENTS
───────────────────────────────────────────── */

const MetricCard: FC<MetricCardProps> = ({
  title,
  value,
  change,
  changeText,
  icon: Icon,
  bgColor,
  iconBg,
  className,
}) => (
  <div
    className={cn(
      "bg-white rounded-2xl p-6 shadow-sm border border-gray-100",
      className
    )}
  >
    <div className="flex items-center justify-between mb-4">
      <div>
        <p className="text-gray-600 text-sm font-medium">{title}</p>
        <p className="text-3xl font-bold text-gray-900 mt-1">{value}</p>
      </div>
      <div
        className={`w-12 h-12 rounded-[23px] ${iconBg} flex items-center justify-center`}
      >
        <Icon className={`w-6 h-6 ${bgColor}`} />
      </div>
    </div>
    <div className="flex items-center">
      {change > 0 ? (
        <TrendingUp className="w-4 h-4 text-emerald-500 mr-1" />
      ) : (
        <TrendingDown className="w-4 h-4 text-red-500 mr-1" />
      )}
      <span
        className={`text-sm font-medium ${
          change > 0 ? "text-emerald-500" : "text-red-500"
        }`}
      >
        {Math.abs(change)}%
      </span>
      <span className="text-gray-500 text-sm ml-1">{changeText}</span>
    </div>
  </div>
);

const Dashboard: FC = (): ReactElement => {
  return (
    <div className="max-w-7xl mx-auto p-3">
      {/* Metric cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <MetricCard
          title="Total Students"
          value="12,009"
          change={8.5}
          changeText="Up from yesterday"
          icon={Users}
          bgColor="text-[#8280FF]"
          iconBg="bg-purple-100"
          className="bg-[#8280FF0A] border-[#8280FF80]"
        />
        <MetricCard
          title="Total Tutors"
          value="100"
          change={-0.5}
          changeText="Down from last 4 months"
          icon={GraduationCap}
          bgColor="text-[#FEC53D]"
          iconBg="bg-yellow-100"
          className="bg-[#FEC53D0A] border-[#FEC53D80]"
        />
        <MetricCard
          title="Total Courses"
          value="108"
          change={2.6}
          changeText="Up from last week"
          icon={BookOpen}
          bgColor="text-[#4AD991]"
          iconBg="bg-emerald-100"
          className="bg-[#4AD9910A] border-[#4AD99196]"
        />
        <MetricCard
          title="Total Rewards"
          value="07"
          change={8.5}
          changeText="Up from yesterday"
          icon={Trophy}
          bgColor="text-[#FF9066]"
          iconBg="bg-orange-100"
          className="bg-[#FF90660A] border-[#FF906696]"
        />
      </div>

      {/* Line + Pie */}
      <div className="grid grid-cols-1 lg:grid-cols-5 lg:gap-6 mb-8">
        {/* Line Chart */}
        <div className="bg-[#D8D8D833] col-span-3 my-2 rounded-2xl p-6 shadow-sm border border-[#D8D8D880]">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">
            You got 12,009 students in the last 365 days
          </h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={studentData}
                margin={{
                  top: 5,
                  right: 0,
                  left: 0,
                  bottom: 5,
                }}
              >
                <CartesianGrid stroke="#D8D8D8" strokeDasharray="5 5" />
                <XAxis
                  dataKey="month"
                  tickLine={{ stroke: "#555" }}
                  axisLine={{ stroke: "#555" }}
                  tick={{ fontSize: 12, dy: 5, fill: "#9CA3AF" }}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: "#9CA3AF" }}
                  domain={[0, 1000]}
                  orientation="left"
                />
                <Tooltip
                  cursor={false}
                  contentStyle={{
                    backgroundColor: "#333",
                    border: "none",
                    borderRadius: "4px",
                  }}
                  labelStyle={{ color: "#fff" }}
                  formatter={(value) => [
                    `${value.toLocaleString()} students`,
                    "Students",
                  ]}
                  content={({ active, payload, label }) => {
                    if (active && payload && payload.length) {
                      const value = payload[0].value;
                      return (
                        <div
                          style={{
                            backgroundColor: "#333",
                            padding: "8px",
                            borderRadius: "4px",
                          }}
                        >
                          <p style={{ color: "#fff", marginBottom: 4 }}>
                            {label}
                          </p>
                          <p
                            style={{ color: "#fff" }}
                          >{`${value?.toLocaleString()} students`}</p>
                        </div>
                      );
                    }
                    return null;
                  }}
                />

                <defs>
                  <linearGradient id="gradient2024" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#06B6D4" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#06B6D4" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="gradient2025" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#01B3FF4D" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#01B3FF4D" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <Area
                  type="monotone"
                  dataKey="2024"
                  stroke="#8884d8"
                  fillOpacity={0.6}
                  fill="url(#gradient2024)"
                />
                <Area
                  type="monotone"
                  dataKey="2025"
                  stroke="#01B3FF0D"
                  fillOpacity={0.6}
                  fill="url(#gradient2025)"
                />
                <Line
                  type="monotone"
                  dataKey="2024"
                  stroke="#01B3FF"
                  strokeWidth={1}
                  dot={{ r: 4, fill: "#01B3FF" }}
                  fill="url(#gradient2024)"
                />
                <Line
                  type="monotone"
                  dataKey="2025"
                  stroke="#01B3FF"
                  strokeWidth={1}
                  dot={{ r: 4, fill: "#01B3FF" }}
                  activeDot={{ r: 3 }}
                  fill="url(#gradient2025)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div className="flex justify-center items-center mt-4 space-x-6">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-cyan-500 rounded-full mr-2" />
              <span className="text-sm text-gray-600">
                {new Date().getFullYear() - 1}
              </span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-sky-400 rounded-full mr-2" />
              <span className="text-sm text-gray-600">
                {new Date().getFullYear()}
              </span>
            </div>
          </div>
        </div>

        {/* Pie Chart */}
        <div className="col-span-2  my-2 bg-gradient-to-b from-[#D8D8D8] to-[#727272] rounded-2xl p-6 shadow-sm border border-[#D8D8D880]">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">
            Registered courses by students
          </h3>
          <div className="h-80 relative">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                  label
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      const data = payload[0].payload; // Get the actual data object
                      console.log({ active, payload });
                      return (
                        <div
                          style={{
                            background: "white",
                            border: "1px solid #ccc",
                            padding: "10px",
                            borderRadius: "4px",
                          }}
                        >
                          <p>
                            {data.name}: {data.value}
                          </p>
                        </div>
                      );
                    }
                    return null;
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="flex items-center justify-center">
            <div className="w-3 h-3 bg-[#F96607] rounded-full mr-2" />
            <span className="text-sm text-[#222222B2]">
              {new Date().getFullYear()}
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 lg:grid-cols-5 lg:gap-6">
        {/* Messages */}
        <div className="col-span-2 bg-[#00B69B0A] my-2 rounded-2xl p-6 shadow-sm border border-[#00B69B80]">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">
              Recent Messages
            </h3>
            <MoreHorizontal className="w-5 h-5 text-gray-400" />
          </div>
          <div className="space-y-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className="flex items-start space-x-3 border-b pb-3 border-[#22222280]"
              >
                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-lg">
                  {msg.avatar}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">
                    {msg.email}
                  </p>
                  <p className="text-sm text-gray-600 mt-1">{msg.message}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bar Chart */}
        <div className="col-span-3 bg-[#D8D8D833] my-2 rounded-2xl p-6 shadow-sm border border-[#D8D8D880]">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">
            Most registered courses by students in the last 365 days
          </h3>
          <div className="h-74">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={courseData} barCategoryGap="20%" barSize={8}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  dataKey="month"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: "#9CA3AF" }}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: "#9CA3AF" }}
                  domain={[0, 100]}
                />
                <Tooltip />
                <Bar dataKey="students" radius={[8, 8, 0, 0]}>
                  {courseData.map((entry, index) => (
                    <Cell
                      key={`cell-students-${index}`}
                      fill={entry.students === 0 ? "#D6DBED66" : "#8B5CF6"}
                    />
                  ))}
                </Bar>
                <Bar dataKey="First Aid" radius={[8, 8, 0, 0]}>
                  {courseData.map((entry, index) => (
                    <Cell
                      key={`cell-students-${index}`}
                      fill={entry.students === 0 ? "#D6DBED66" : "#06B6D4"}
                    />
                  ))}
                </Bar>
                <Bar dataKey="BLS" radius={[8, 8, 0, 0]}>
                  {courseData.map((entry, index) => (
                    <Cell
                      key={`cell-students-${index}`}
                      fill={entry.students === 0 ? "#D6DBED66" : "#F59E0B"}
                    />
                  ))}
                </Bar>
                <Bar dataKey="ACLS" radius={[8, 8, 0, 0]}>
                  {courseData.map((entry, index) => (
                    <Cell
                      key={`cell-students-${index}`}
                      fill={entry.students === 0 ? "#D6DBED66" : "#10B981"}
                    />
                  ))}
                </Bar>
                <Bar dataKey="PCTW" radius={[8, 8, 0, 0]}>
                  {courseData.map((entry, index) => (
                    <Cell
                      key={`cell-students-${index}`}
                      fill={entry.students === 0 ? "#D6DBED66" : "#EF4444"}
                    />
                  ))}
                </Bar>
                <Bar dataKey="PALS" radius={[8, 8, 0, 0]}>
                  {courseData.map((entry, index) => (
                    <Cell
                      key={`cell-students-${index}`}
                      fill={entry.students === 0 ? "#D6DBED66" : "#FF928A"}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
