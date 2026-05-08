import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";

export function MobileMenu({ currentPath }) {
  const links = [
    { href: "/", label: "Inicio" },
    { href: "/sobreMi", label: "Sobre mí" },
    { href: "/proyectos", label: "Proyectos" },
    { href: "/contacto", label: "Contacto" },
  ];

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          aria-label="Abrir menú"
        >
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="bg-background/95 backdrop-blur-md border-border"
      >
        <SheetTitle className="sr-only">Menú de Navegación</SheetTitle>
        <nav className="flex flex-col gap-6 mt-10">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-lg transition-colors hover:text-foreground ${
                currentPath === link.href
                  ? "text-foreground font-medium"
                  : "text-muted-foreground"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
