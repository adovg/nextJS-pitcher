import Hello from "../components/page";

export default function Home() {
  console.log("Server?");
  return (
    <>
      <h1 className="text-3xl">Hello nextJs</h1>
      <Hello />
    </>
  );
}
