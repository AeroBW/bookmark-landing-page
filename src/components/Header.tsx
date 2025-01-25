import { createSignal, onMount, onCleanup } from "solid-js";
import MainNav from "./MainNav";
import MobileNav from "./MobileNav";
import { twMerge } from "tailwind-merge";

export const navItems = ["Features", "Pricing", "Contact"];

function Header() {
  const [scrollY, setScrollY] = createSignal(0);
  const [lastScrollY, setLastScrollY] = createSignal(0);
  const [isHidden, setIsHidden] = createSignal(false);

  let ticking = false;

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (!ticking) {
      window.requestAnimationFrame(() => {
        setScrollY(currentScrollY);

        // Scroll direction detection
        if (currentScrollY > lastScrollY()) {
          // Scrolling down
          if (currentScrollY > 50) {
            setIsHidden(true);
          }
        } else {
          // Scrolling up
          setIsHidden(false);
        }

        setLastScrollY(currentScrollY);
        ticking = false;
      });

      ticking = true;
    }
  };

  onMount(() => {
    window.addEventListener("scroll", handleScroll);
  });

  onCleanup(() => {
    window.removeEventListener("scroll", handleScroll);
  });

  return (
    <header
      class={twMerge(
        "sticky top-0 z-50 w-full py-6 transition-transform duration-300 ease-out",
        isHidden() && "-translate-y-full",
        scrollY() > 50 &&
          "border-b-grayish-blue bg-grayish-blue/30 border-b-1 backdrop-blur-md",
      )}
    >
      <div class="box flex items-center justify-between">
        <a href="/">
          <img src="/images/logo-bookmark.svg" alt="bookmark logo" />
        </a>
        <MainNav />
        <MobileNav />
      </div>
    </header>
  );
}

export default Header;
