import MainNav from "./MainNav";
import MobileNav from "./MobileNav";

export const navItems = ["Features", "Pricing", "Contact"];

function Header() {
  return (
    <header class="sticky top-0 z-50 w-full py-6">
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
