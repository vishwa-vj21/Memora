import { FC, useState } from "react";
import { Dialog } from "./ui/Dialog";
import { DialogTrigger } from "@radix-ui/react-dialog";
import { Button } from "./ui/Button";
import { Expand } from "lucide-react";

const PdfFullscreen = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <Dialog
      open={isOpen}
      onOpenChange={(v) => {
        if (!v) {
          setIsOpen(v);
        }
      }}
    >
      <DialogTrigger asChild>
        <Button className="gap-1.5" aria-label="fullscreen" variant="ghost">
          <Expand className="h-4 w-4" />
        </Button>
      </DialogTrigger>
    </Dialog>
  );
};

export default PdfFullscreen;
