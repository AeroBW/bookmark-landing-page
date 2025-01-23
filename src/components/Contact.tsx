import { createSignal, Show } from "solid-js";
import { twMerge } from "tailwind-merge";

function Contact() {
  return (
    <div class="bg-soft-blue py-16">
      <div class="box max-w-lg space-y-8 text-center text-white">
        <div class="uppercase">35,000+ already joined</div>
        <h2 class="text-2xl lg:text-3xl">
          Stay up-to-date with what we're doing
        </h2>
        <Form />
      </div>
    </div>
  );
}

export default Contact;

function Form() {
  const [email, setEmail] = createSignal("");
  const [touched, setTouched] = createSignal(false);

  // Email validation function
  const isValidEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  // Validation state
  const isInvalid = () => touched() && !isValidEmail(email());

  const handleSubmit = (e: Event) => {
    e.preventDefault();
    setTouched(true);
    if (!isInvalid()) {
      setEmail("");
      setTouched(false);
    }
  };

  return (
    <form noValidate autocomplete="off" onSubmit={handleSubmit}>
      <div class="flex items-start gap-4 max-sm:flex-col">
        <div class="bg-soft-red w-full rounded-sm">
          <div
            class={twMerge(
              "border-soft-red relative rounded-sm",
              isInvalid() && "border-2",
            )}
          >
            <input
              value={email()}
              onInput={(e) => setEmail(e.currentTarget.value)}
              type="email"
              name="email"
              placeholder="Enter your email address"
              class={twMerge(
                "block w-full rounded-sm bg-white px-4 py-2 text-black focus:ring-2 focus:ring-black focus:outline-hidden",
                isInvalid() && "focus:ring-soft-red",
              )}
            />
            <Show when={isInvalid()}>
              <img
                src="/images/icon-error.svg"
                alt="error"
                class="pointer-events-none absolute top-1/2 right-4 -translate-y-1/2"
              />
            </Show>
          </div>
          <Show when={isInvalid()}>
            <div class="px-4 py-1 text-left text-xs italic">
              Whoops, make sure it's an email
            </div>
          </Show>
        </div>
        <button
          type="submit"
          class="btn bg-soft-red hover:text-soft-red hover:outline-soft-red block shrink-0 hover:cursor-pointer max-sm:w-full"
        >
          Contact Us
        </button>
      </div>
    </form>
  );
}
