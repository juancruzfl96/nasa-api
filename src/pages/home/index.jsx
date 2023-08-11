import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import Header from "../../components/Header";
import Dashboard from "../../components/Dashboard";

const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const rover = searchParams.get("rover") || "";
  const camera = searchParams.get("camera") || "";
  const date =
    searchParams.get("date") || new Date().toISOString().split("T")[0];
  const sol = searchParams.get("sol") || "";

  useEffect(() => {
    setSearchParams({
      rover: rover || "curiosity",
      ...(!sol && { date }),
      ...(sol && { sol }),
      ...(camera && { camera }),
    });
  }, [rover, camera, date, sol, setSearchParams]);

  return (
    <div style={{ backgroundColor: "white", height: "100%" }}>
      <Header />
      <Dashboard
        rover={rover}
        sol={sol}
        date={date}
        camera={camera}
        key={`${rover}${sol}${date}${camera}`}
      />
    </div>
  );
};

export default Home;
