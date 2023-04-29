// import { Handlers, PageProps } from "$fresh/server.ts";
// import { Head } from "$fresh/runtime.ts";
// import Counter from "../islands/Counter.tsx";
// import tw from 'twind';

// interface Page {
//   name: string;
//   content: string;
// }

// const kv = await Deno.openKv();

// export const handler: Handlers<Page | null> = {
//   async GET(_, ctx) {
//     await kv.set(["pages", "home"], { name: "home", content: '<p>hello world!</p>' });
//     const res = await kv.get(["pages", "home"]);

//     if (!res.value) {
//       return ctx.render(null);
//     }
//     const user: Page = res.value;
//     return ctx.render(user);
//   },
// };

// export default function Home({ data }: PageProps<Page | null>) {
//   if (!data) {
//     return <h1>Pages not found</h1>
//   }
//   return (
//     <>
//       <Head>
//         <title>Deno KV CMS</title>
//       </Head>
//       <div class="min-h-screen flex">
//         <div class="p-4 flex-shrink-0 border-r-1 border-gray-200 min-w-[280px]">
//           <h1 class="font-bold">Pages</h1>
//           {data.name}
//           <button className={tw}>New Page</button>
//         </div>
//         <div class="p-4 flex-1 border-r-1 border-gray-200"></div>
//         <div class="p-4 flex-1">
//           <Counter start={3} />
//         </div>
//       </div>
//     </>
//   );
// }
