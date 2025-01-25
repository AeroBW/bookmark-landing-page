function Hero() {
  return (
    <section>
      <div class="box grid items-center gap-8 lg:grid-cols-2">
        <div class="grid place-items-center lg:col-start-2">
          <div class="after:bg-soft-blue relative inline-block after:absolute after:bottom-0 after:left-20 after:-z-10 after:h-3/4 after:w-dvw after:rounded-full">
            <img
              src="/images/illustration-hero.svg"
              alt="Person browsing website with bookmark manager interface"
              class="relative z-20 max-lg:max-h-80"
            />
          </div>
        </div>
        <div class="space-y-4 max-lg:text-center lg:col-start-1 lg:row-start-1">
          <h1 class="text-3xl lg:text-4xl">A Simple Bookmark Manager</h1>
          <p>
            A clean and simple interface to organize your favourite websites.
            Open a new browser tab and see your sites load instantly. Try it for
            free.
          </p>
          <div class="flex items-center gap-4 max-lg:justify-center">
            <a href="/chrome" class="btn">
              Get it on Chrome
            </a>
            <a
              href="/firefox"
              class="btn bg-grayish-blue/10 text-dark-blue hover:text-dark-blue hover:outline-dark-blue shadow-lg hover:shadow-none"
            >
              Get it on Firefox
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
