import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Layout from "./components/Layout";

const Home = lazy(() => import("./pages/Home"));
const Kontakti = lazy(() => import("./pages/Kontakti"));
const Grodi = lazy(() => import("./pages/Grodi"));
const Parsedzes = lazy(() => import("./pages/Parsedzes"));
const Kanalizacijas = lazy(() => import("./pages/Kanalizacijas"));
const DzeramaUdensAkas = lazy(() => import("./pages/DzeramaUdensAkas"));
const NotFound = lazy(() => import("./pages/NotFound"));

export default function App() {
  return (
    <Suspense fallback={<div className="container" style={{ padding: 24 }}>Ielādējas…</div>}>
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
    </Suspense>
  );
}
