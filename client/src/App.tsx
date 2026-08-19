import { lazy, Suspense } from "react";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
const FormulaDetail = lazy(() => import("./pages/FormulaDetail"));
const NotFound = lazy(() => import("./pages/NotFound"));
const PolicyPlaceholder = lazy(() => import("./pages/PolicyPlaceholder"));


function Router() {
  return (
    <Suspense fallback={null}>
      <Switch>
        <Route path={"/"} component={Home} />
        <Route path={"/formula"} component={FormulaDetail} />
        <Route path={"/contact"} component={PolicyPlaceholder} />
        <Route path={"/privacy"} component={PolicyPlaceholder} />
        <Route path={"/terms"} component={PolicyPlaceholder} />
        <Route path={"/shipping-returns"} component={PolicyPlaceholder} />
        <Route path={"/accessibility"} component={PolicyPlaceholder} />
        <Route path={"/404"} component={NotFound} />
        {/* Final fallback route */}
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <Router />
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
