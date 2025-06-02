import "./App.css";

import DocboxPdfViewer from "./components/pdf/DocboxPdfViewer";

function App() {
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <DocboxPdfViewer src="/brochure.pdf" onClose={() => {}} />
    </div>
  );
}

export default App;
