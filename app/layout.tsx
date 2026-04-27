import "./globals.css";
import Link from "next/link";

export const metadata = { title: "SAMSOS Portal", description: "SAM.gov opportunity intelligence portal" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body><main className="shell"><nav className="nav"><div className="brand">SAMSOS</div><div className="actions"><Link href="/">Dashboard</Link><Link href="/opportunities">Opportunities</Link><Link href="/submissions">Submissions</Link><Link href="/reports/monthly">Monthly Report</Link></div></nav>{children}</main></body></html>;
}
