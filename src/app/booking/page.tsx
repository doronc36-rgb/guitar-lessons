import type { Metadata } from "next";
import BookingClient from "./BookingClient";

export const metadata: Metadata = {
  title: "קביעת שיעור",
  description: "קבעו שיעור ניסיון קצר. יתרונות וקריאה לפעולה לשיחה/וואטסאפ.",
};

export default function BookingPage() {
  return <BookingClient />;
}


