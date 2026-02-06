import {Footer} from "../layout/footer"
import { Navbar } from "../layout/navbar"
import { Outlet } from "react-router";

export function AppLayout() {
  return (
    <div className="min-h-screen overflow-x-hidden text-text">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}