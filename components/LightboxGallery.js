import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import { useState } from "react";

import NextJsImage from "../components/NextJsImage";

export default function LightboxGallery({ images, open, setOpen }) {
  return (
    <div>
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={images}
        render={{ slide: NextJsImage }}
      />
    </div>
  );
}
