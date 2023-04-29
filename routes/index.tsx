import { Head } from "$fresh/runtime.ts";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Deno KV CMS</title>
      </Head>
      <div class="min-h-screen flex">
        <div class="p-4 flex-shrink-0 border-r-1 border-gray-200 min-w-[280px]">
          <h1 class="font-bold">Pages</h1>
        </div>
        <div class="p-4 flex-1 border-r-1 border-gray-200"></div>
        <div class="p-4 flex-1">
          <Counter start={3} />
        </div>
      </div>
    </>
  );
}
