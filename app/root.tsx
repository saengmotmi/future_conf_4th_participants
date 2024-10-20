import { Outlet, Scripts, ScrollRestoration } from "react-router";
import { GlobalStyle } from "./styles";

export function Layout() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>퓨쳐콘 4th!</title>
      </head>
      <body>
        <Outlet />
        <GlobalStyle />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export function HydrateFallback() {
  return <div>Loading...</div>;
}

export default function Root({ children }: { children: React.ReactNode }) {
  return children;
}

export function ErrorBoundary() {
  return <h1>Something went wrong</h1>;
}
