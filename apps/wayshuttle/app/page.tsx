import Button from "@repo/ui/Button";

export default function Home() {
  return (
    <main>
      <h1>WayShuttle</h1>
      <Button>Test UI Component</Button>
      <a href={process.env.WAYHOME_URL}>WayHome</a>
    </main>
  );
}
