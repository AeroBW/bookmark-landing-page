import { For, Show } from "solid-js";
import { createStore } from "solid-js/store";
import { twMerge } from "tailwind-merge";

const qnas = [
  {
    question: "What is Bookmark?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.",
  },
  {
    question: "How can I request a new browser?",
    answer:
      "Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies.",
  },
  {
    question: "Is there a mobile app?",
    answer:
      "Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum.",
  },
  {
    question: "What about other Chromium browsers?",
    answer:
      "Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit.",
  },
];

const [isOpen, setIsOpen] = createStore([false, false, false, false]);

function FAQ() {
  return (
    <section>
      <div class="box max-w-lg space-y-12">
        <div class="space-y-4 text-center">
          <h2 class="text-2xl lg:text-3xl">Frequently Asked Questions</h2>
          <p>
            Here are some of our FAQs. If you have any other questions you'd
            like answered please feel free to email us.
          </p>
        </div>
        <Accordion />
        <a href="/info" class="btn mx-auto block w-max">
          More Info
        </a>
      </div>
    </section>
  );
}

export default FAQ;

function Accordion() {
  return (
    <div>
      <For each={qnas}>
        {(qna, i) => (
          <>
            <button
              onClick={() => setIsOpen(i(), !isOpen[i()])}
              class={twMerge(
                "border-grayish-blue/30 flex w-full items-center justify-between border-t-[1px] py-4 hover:cursor-pointer",
                i() === 3 ? (isOpen[3] ? "" : "border-b-[1px]") : "",
              )}
            >
              <div class="text-left">{qna.question}</div>
              <img
                src="/images/icon-arrow.svg"
                alt="arrow"
                class={twMerge(
                  "h-min transition-transform duration-300",
                  isOpen[i()] && "rotate-180",
                )}
              />
            </button>
            <div
              class={twMerge(
                "overflow-hidden transition-all duration-400 ease-in-out",
                isOpen[i()] ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
              )}
            >
              <p class="py-4">{qna.answer}</p>
            </div>
          </>
        )}
      </For>
    </div>
  );
}
