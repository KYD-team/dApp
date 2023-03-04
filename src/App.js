import { useEffect } from "react";
import { tKey } from "./tkey";

import Dashboard from './Dashboard';

export default function App() {
  useEffect(() => {
    const init = async () => {
      // Initialization of Service Provider
      try {
        await (tKey.serviceProvider).init();
      } catch (error) {
        console.error(error);
      }
    };
    init();
  }, []);

  return (
    <div className="app">
      <Dashboard />
    </div>
  );
}