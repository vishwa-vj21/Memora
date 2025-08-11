"use client";

import { useState } from "react";
import { Button } from "./ui/Button";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";

const UploadButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(v) => {
        if (!v) {
          setIsOpen(v);
        }
      }}
    >
      <DialogTrigger
        onClick={() => {
          setIsOpen(true);
        }}
        asChild
      >
        <Button>Upload PDF</Button>
      </DialogTrigger>

      <DialogContent>expamle</DialogContent>
    </Dialog>
  );
};

export default UploadButton;
