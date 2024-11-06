import Button from "@repo/ui/Button";
import { cookies } from "next/headers";

const Home = async () => {
  const cookieStore = await cookies();
  const value = cookieStore.get("foo");

  return (
    <main>
      <h1>WayHome</h1>
      <Button>Test UI Component</Button>
      <a href={process.env.WAYSHUTTLE_URL}>WayShuttle</a>
      <div>{value?.value}</div>
    </main>
  );
};

export default Home;
