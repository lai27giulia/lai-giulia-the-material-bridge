import { redirect } from "next/navigation";

export default function RootPage() {
  // Fallback server-side: il redirect principale lo gestisce già il middleware.
  redirect("/es");
}
