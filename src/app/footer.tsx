import { FaRegHandPeace } from "react-icons/fa6";
import { A } from "./components/a";

export function Footer() {
  return (
    <footer className="p-6 pt-3 pb-6 flex text-xs text-center mt-3 dark:text-gray-400 text-gray-500 font-mono">
      <div className="grow text-left">
        Christ Abessolo (
        <A target="_blank" href="https://www.linkedin.com/in/christ-rova/">
          @rova
        </A>
        )
      </div>
      <div>
        <A target="_blank" href="https://github.com/RovaEncoder">
          Source
        </A>
      </div>
    </footer>
  );
}
