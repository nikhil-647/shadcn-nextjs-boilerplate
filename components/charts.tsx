"use client";
import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

interface QuestionTypeChartProps {
  data?: Array<{ name: string; value: number }>;
}

interface DifficultyChartProps {
  data?: Array<{ name: string; value: number }>;
}

const COLORS_TYPES = ["#10b981", "#f59e0b", "#8b5cf6"];
const COLORS_DIFFICULTY = ["#22c55e", "#eab308", "#ef4444"];

export function QuestionTypeChart({ data }: QuestionTypeChartProps) {
  const defaultData = [
    { name: "Array", value: 45 },
    { name: "Recursion", value: 32 },
    { name: "DP", value: 28 },
  ];

  const chartData = data || defaultData;

  return (
    <Card className="border-slate-800 bg-slate-900">
      <CardHeader>
        <CardTitle className="text-slate-100">Question Types</CardTitle>
        <CardDescription className="text-slate-400">
          Questions solved by category
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={chartData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ name, value }) => `${name}: ${value}`}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {chartData.map((_, index) => (
                <Cell key={`cell-${index}`} fill={COLORS_TYPES[index]} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: "#1e293b",
                border: "1px solid #334155",
                borderRadius: "8px",
                color: "#f1f5f9",
              }}
            />
            <Legend wrapperStyle={{ color: "#cbd5e1" }} />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}

export function DifficultyChart({ data }: DifficultyChartProps) {
  const defaultData = [
    { name: "Easy", value: 35 },
    { name: "Medium", value: 48 },
    { name: "Hard", value: 22 },
  ];

  const chartData = data || defaultData;

  return (
    <Card className="border-slate-800 bg-slate-900">
      <CardHeader>
        <CardTitle className="text-slate-100">Difficulty Level</CardTitle>
        <CardDescription className="text-slate-400">
          Problems solved by difficulty
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={chartData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ name, value }) => `${name}: ${value}`}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {chartData.map((_, index) => (
                <Cell key={`cell-${index}`} fill={COLORS_DIFFICULTY[index]} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: "#1e293b",
                border: "1px solid #334155",
                borderRadius: "8px",
                color: "#f1f5f9",
              }}
            />
            <Legend wrapperStyle={{ color: "#cbd5e1" }} />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
