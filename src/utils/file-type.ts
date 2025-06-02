import audio from "../assets/audio.svg";
import document from "../assets/document.svg";
import generic from "../assets/generic.svg";
import image from "../assets/image.svg";
import pdf from "../assets/pdf.svg";
import ppt from "../assets/ppt.svg";
import txt from "../assets/txt.svg";
import video from "../assets/video.svg";
import xls from "../assets/xls.svg";
import { FileType } from "../types/file-type";

export const FILE_TYPE_ICON_MAPPING: Record<FileType, string> = {
  [FileType.Audio]: audio,
  [FileType.Document]: document,
  [FileType.Image]: image,
  [FileType.Pdf]: pdf,
  [FileType.Presentation]: ppt,
  [FileType.Text]: txt,
  [FileType.Video]: video,
  [FileType.Spreadsheet]: xls,
  [FileType.Generic]: generic,
};
