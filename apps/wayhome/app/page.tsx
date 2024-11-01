import Button from "@repo/ui/Button";

export default function Home() {
  return (
    <main>
      <h1>WayHome</h1>
      <Button>Test UI Component</Button>
      <a href={process.env.WAYSHUTTLE_URL}>WayShuttle</a>
    </main>
  );
}
