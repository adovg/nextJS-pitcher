import React from "react";

async function Page({ params }: { params: { id: string } }) {
  const { id } = await params;
  return <h1 className="text-3xl">User ID: {id}</h1>;
}

export default Page;
