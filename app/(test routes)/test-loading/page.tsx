async function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default async function TestLoadingPage() {
  await wait(3000);

  return <div>Loaded</div>;
}