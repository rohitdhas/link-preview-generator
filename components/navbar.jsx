import { Menubar } from "primereact/menubar";

export default function Navbar() {
  const items = [
    {
      label: "Home",
      icon: "pi pi-home",
      command: () => window.open("#top", "_self"),
    },
    {
      label: "API",
      icon: "pi pi-globe",
      command: () => window.open("#api", "_self"),
    },
    {
      label: "GitHub",
      icon: "pi pi-github",
      command: () =>
        window
          .open("https://github.com/rohitdhas/link-preview-generator", "_blank")
          .focus(),
    },
  ];

  return (
    <Menubar
      className="!fixed !top-0 !left-0 !right-0 !z-10 shadow-md"
      start={<h1 className="text-[2.5rem] font-bold mx-4">🔥</h1>}
      model={items}
    />
  );
}
