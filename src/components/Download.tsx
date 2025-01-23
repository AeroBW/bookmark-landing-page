import { For } from "solid-js";
import { twMerge } from "tailwind-merge";

const browsers = [
  {
    name: "Chrome",
    version: "62",
    image: "/images/logo-chrome.svg",
  },
  {
    name: "Firefox",
    version: "55",
    image: "/images/logo-firefox.svg",
  },
  {
    name: "Opera",
    version: "46",
    image: "/images/logo-opera.svg",
  },
];

function Download() {
  return (
    <section>
      <div class="box space-y-8 text-center">
        <div class="mx-auto max-w-lg space-y-4">
          <h2 class="text-2xl lg:text-3xl">Download the extension</h2>
          <p>
            We've got more browsers in the pipeline. Please do let us know if
            you've got a favourite you'd like us to prioritize.
          </p>
        </div>
        <div class="box grid gap-8 lg:grid-cols-3 lg:grid-rows-9">
          <For each={browsers}>
            {(browser, i) => (
              <div
                class={twMerge(
                  "rounded-lg py-6 shadow-xl lg:row-span-7",
                  i() === 0 && "lg:col-start-1 lg:row-start-1",
                  i() === 1 && "lg:col-start-2 lg:row-start-2",
                  i() === 2 && "lg:col-start-3 lg:row-start-3",
                )}
              >
                <img src={browser.image} alt={browser.name} class="mx-auto" />
                <div class="my-6">
                  <h3 class="text-xl">Add to {browser.name}</h3>
                  <p class="text-sm">Minimum version {browser.version}</p>
                </div>
                <img
                  src="/images/bg-dots.svg"
                  alt="separator"
                  class="mb-6 w-full"
                />
                <a href={`/${browser.name.toLowerCase()}`} class="btn">
                  Add & Install Extension
                </a>
              </div>
            )}
          </For>
        </div>
      </div>
    </section>
  );
}

export default Download;
