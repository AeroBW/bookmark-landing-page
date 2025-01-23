import { For } from "solid-js";
import { navItems } from "./Header";

function MainNav() {
  return (
    <div class="flex items-center gap-8 max-lg:hidden">
      <nav aria-label="Main navigation">
        <ul class="flex items-center gap-8 uppercase">
          <For each={navItems}>
            {(item) => (
              <li>
                <a
                  class="transition duration-100 ease-in-out hover:text-soft-red"
                  href={`/${item.toLowerCase()}`}
                >
                  {item}
                </a>
              </li>
            )}
          </For>
        </ul>
      </nav>
      <a
        href="/login"
        class="btn bg-soft-red uppercase hover:text-soft-red hover:outline-soft-red"
      >
        Login
      </a>
    </div>
  );
}

export default MainNav;
