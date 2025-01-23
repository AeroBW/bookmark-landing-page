import { createSignal, For } from "solid-js";
import { twMerge } from "tailwind-merge";

const tabs = ["Simple Bookmarking", "Speedy Searching", "Easy Sharing"];
const content = [
  {
    title: "Bookmark in one click",
    description:
      "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
    image: "/images/illustration-features-tab-1.svg",
  },
  {
    title: "Intelligent search",
    description:
      "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
    image: "/images/illustration-features-tab-2.svg",
  },
  {
    title: "Share your bookmarks",
    description:
      "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
    image: "/images/illustration-features-tab-3.svg",
  },
];
const [index, setIndex] = createSignal(0);

function Features() {
  return (
    <section>
      <div class="box space-y-12">
        <div class="mx-auto max-w-lg space-y-4 text-center">
          <h2 class="text-2xl lg:text-3xl">Features</h2>
          <p class="mx-auto">
            Our aim is to make it quick and easy for you to access your
            favourite websites. Your bookmarks sync between your devices so you
            can access them on the go.
          </p>
        </div>
        <Tab />
        <Content />
      </div>
    </section>
  );
}

export default Features;

function Tab() {
  return (
    <div class="grid gap-4 text-center sm:grid-cols-3 sm:border-b-[1px] sm:border-b-grayish-blue lg:mx-auto lg:w-2/3">
      <For each={tabs}>
        {(tab, i) => (
          <button
            onClick={() => setIndex(i())}
            class="max-sm:border-b-[1px] max-sm:border-b-grayish-blue"
          >
            <div
              class={twMerge(
                "mx-auto pb-4 max-sm:w-max",
                i() === index() && "border-b-2 border-soft-red",
              )}
            >
              {tab}
            </div>
          </button>
        )}
      </For>
    </div>
  );
}

function Content() {
  const activeContent = () => content[index()];
  return (
    <div class="grid items-center gap-16 lg:grid-cols-2">
      <div class="grid place-items-center">
        <div class="relative inline-block">
          <img
            src={activeContent().image}
            alt={activeContent().title}
            class="max-lg:max-h-80"
          />
          <div class="absolute -bottom-8 right-16 -z-10 h-5/6 w-[2000px] rounded-full bg-soft-blue" />
        </div>
      </div>
      <div class="space-y-4 max-lg:text-center">
        <h2 class="text-2xl">{activeContent().title}</h2>
        <p>{activeContent().description}</p>
        <a
          href={`/${tabs[index()].toLowerCase().replace(/\s+/g, "-")}`}
          class="btn inline-block"
        >
          More Info
        </a>
      </div>
    </div>
  );
}
