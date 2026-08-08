import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";
import useTheme from "../../hooks/useTheme";
import "./ThemeToggle.css";

export default function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      className={`theme-toggle ${isDark ? "dark" : "light"}`}
      onClick={toggleTheme}
      aria-label="Toggle Theme"
    >
      <span className="toggle-thumb">
        {isDark ? <HiOutlineSun size={18} /> : <HiOutlineMoon size={18} />}
      </span>

      <span className="toggle-track" />
    </button>
  );
}
