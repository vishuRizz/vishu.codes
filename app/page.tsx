import { redirect } from "next/navigation";

/** Fallback if config redirects are skipped (e.g. some edge hosts). */
export default function Home() {
  redirect("https://vishu.app");
}
