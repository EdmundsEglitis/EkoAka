import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

import Home from "./pages/Home";
import Grodi from "./pages/Grodi";
import Parsedzes from "./pages/Parsedzes";
import Kanalizacijas from "./pages/Kanalizacijas";
import DzeramaUdensAkas from "./pages/DzeramaUdensAkas";
import Kontakti from "./pages/Kontakti";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/grodi" element={<Grodi />} />
        <Route path="/parsedzes" element={<Parsedzes />} />
        <Route path="/kanalizacijas-sistemas" element={<Kanalizacijas />} />
        <Route path="/dzerama-udens-akas" element={<DzeramaUdensAkas />} />
        <Route path="/kontakti" element={<Kontakti />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
