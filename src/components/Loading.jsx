"use client";
import PacmanLoader from "react-spinners/PacmanLoader";

export default function Loading() {
  return (
    <div className="flex justify-center pt-20">
      <PacmanLoader loading={true} color="#ffffff" />
    </div>
  );
}