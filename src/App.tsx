import { ThemeProvider, ShellBar } from "@ui5/webcomponents-react";
import { ColoredTitle } from "./Components/ColoredTitle";
import Solution from "./Solution";
import "@ui5/webcomponents-icons/dist/AllIcons.js";

function App() {
  return (
    <ThemeProvider>
      <ShellBar primaryTitle="UI5 Web Components for React Developer Challenge" />
      {/* Add your name and change title based on Week */}
      <ColoredTitle title="Salil Mehta Week 4 - Adding New Rows" />
      <Solution />
    </ThemeProvider>
  );
}

export default App;
