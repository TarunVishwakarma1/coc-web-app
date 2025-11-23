import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Players",
    template: "%s | Players"
  },
  description: "Players Page",
};

export default function PlayersLayout({
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