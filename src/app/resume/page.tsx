import React from "react";
import type { Metadata } from "next";
import ResumeView from "@/components/resume/ResumeView";

export const metadata: Metadata = {
  title: "Khushboo Kumari – Resume | Full-Stack Developer",
  description:
    "Resume of Khushboo Kumari, Full-Stack Developer with 3+ years of experience in React.js, Next.js, Node.js, and Express.js.",
};

export default function ResumePage() {
  return <ResumeView />;
}
