import { NextRequest, NextResponse } from "next/server";
import POSTS from "@/json/posts.json";

export function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const idx = searchParams.get("idx");
  const post = POSTS.filter((post) => post.idx === Number(idx));

  if (!post) {
    return NextResponse.json(
      { errorMsg: "포스트가 존재하지 않습니다." },
      { status: 404 }
    );
  }

  return NextResponse.json({ data: post }, { status: 200 });
}
