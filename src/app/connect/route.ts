import { NextResponse } from "next/server";
import { getContent } from "@/lib/content";

export function GET() {
  const content = getContent();
  return NextResponse.redirect(content.cta_widget.link);
}

