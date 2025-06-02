import {
  generateUploadButton,
  generateUploadDropzone,
} from "@uploadthing/react";

// Update the path below to the correct relative path where OurFileRouter is defined
import type { OurFileRouter } from "../app/api/uploadthing/core";

export const UploadButton = generateUploadButton<OurFileRouter>();
export const UploadDropzone = generateUploadDropzone<OurFileRouter>();
