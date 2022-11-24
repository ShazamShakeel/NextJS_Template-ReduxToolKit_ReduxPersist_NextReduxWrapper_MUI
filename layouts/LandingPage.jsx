import localFont from "@next/font/local";

const sfProFont = localFont({
  src: "../assets/fonts/sanfrancisco-regular-webfont.woff",
});

export default function LandingPage({ children }) {
  return <main className={sfProFont.className}>{children}</main>;
}
