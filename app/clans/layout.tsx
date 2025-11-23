import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Clans",
    template: "%s | Clans"
  },
  description: "Clans Page",
};

export default function ClanLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>){
    return (
        <div>
            {children}
        </div>
    )
}