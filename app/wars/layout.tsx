
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Wars",
    template: "%s | Wars", // Use a template for dynamic pages
  },
  description: "Wars Page",
};


export default function WarsLayout({
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