import { Menubar } from "primereact/menubar";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();

  const items = [
    {
      label: "Home",
      icon: "pi pi-fw pi-file",
      command: () => {
        if (router.pathname === "/") return;
        router.push({ pathname: "/" });
      },
    },
    {
      label: "API",
      icon: "pi pi-globe",
    },
    {
      label: "GitHub",
      icon: "pi pi-github",
      command: () =>
        window
          .open("https://github.com/rohitdhas/link-preview-generator", "_blank")
          .focus(),
    },
    {
      label: "Quit",
      icon: "pi pi-fw pi-power-off",
      command: () => window.close(),
    },
  ];

  return (
    <Menubar
      start={<h1 className="text-[2.5rem] font-bold mx-4">🔥</h1>}
      model={items}
      onClick={(e) => console.log(e.target)}
    />
  );
}
