import { useEffect } from "react";

export const useDisableInspect = () => {
    useEffect(() => {
        const handleContextMenu = (e: MouseEvent) => {
        e.preventDefault();
        };
        document.addEventListener("contextmenu", handleContextMenu);

        // Disable shortcut (F12, Ctrl+U, Ctrl+Shift+I/J/C)
        const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "F12") {
            e.preventDefault();
        }
        if (e.ctrlKey && e.shiftKey && ["I", "J", "C"].includes(e.key.toUpperCase())) {
            e.preventDefault();
        }
        if (e.ctrlKey && e.key.toUpperCase() === "U") {
            e.preventDefault();
        }
        };
        document.addEventListener("keydown", handleKeyDown);

        // Deteksi devtools terbuka
        const interval = setInterval(() => {
        if (
            window.outerWidth - window.innerWidth > 200 ||
            window.outerHeight - window.innerHeight > 200
        ) {
            document.body.innerHTML = "<h1 style='text-align:center;margin-top:50px;'>🚫 Akses dibatasi</h1>";
        }
        }, 1000);

        return () => {
        document.removeEventListener("contextmenu", handleContextMenu);
        document.removeEventListener("keydown", handleKeyDown);
        clearInterval(interval);
        };
  }, []);
}