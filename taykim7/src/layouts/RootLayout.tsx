import { Header } from "../components/header/Header";
import { Footer } from "../components/footer/Footer";
import TestView from "./ListLayout";

export default function RootLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      <Header />

        <main className="flex-1 flex justify-center items-start">
          <div className="w-full bg-gray-0 rounded-xl">
            <TestView />
          </div>
        </main>

      <Footer />
    </div>
  );
}