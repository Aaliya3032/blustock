// app/api/certificate/route.js
import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
import fontkit from "@pdf-lib/fontkit";

import { getCourseDetails } from "@/queries/courses";
import { getLoggedInUser } from "@/lib/loggedin-user";
import { getReport } from "@/queries/reports";
import { formatMyDate } from "@/lib/date";

// --------------------------------
// API Route
// --------------------------------
export async function GET(request) {
  try {
    // -----------------
    // Query Params
    // -----------------
    const searchParams = request.nextUrl.searchParams;
    const courseId = searchParams.get("courseId");

    // -----------------
    // Fetch Data
    // -----------------
    const course = await getCourseDetails(courseId);
    const loggedInUser = await getLoggedInUser();
    const report = await getReport({ course: courseId, student: loggedInUser.id });

    const completionDate = report?.completion_date
      ? formatMyDate(report?.completion_date)
      : formatMyDate(Date.now());

    const completionInfo = {
      name: `${loggedInUser?.firstName} ${loggedInUser?.lastName}`,
      completionDate: completionDate,
      courseName: course.title,
      instructor: `${course?.instructor?.firstName} ${course?.instructor?.lastName}`,
      instructorDesignation: `${course?.instructor?.designation}`,
      sign: "/sign.png",
    };

    // -----------------
    // Create PDF
    // -----------------
    const pdfDoc = await PDFDocument.create();
    pdfDoc.registerFontkit(fontkit);

    // -----------------
    // Fonts (Absolute URLs)
    // -----------------
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    const kalamFontBytes = await fetch(`${baseUrl}/fonts/kalam/Kalam-Regular.ttf`).then(res =>
      res.arrayBuffer()
    );
    const montserratItalicFontBytes = await fetch(
      `${baseUrl}/fonts/montserrat/Montserrat-Italic.ttf`
    ).then(res => res.arrayBuffer());
    const montserratFontBytes = await fetch(
      `${baseUrl}/fonts/montserrat/Montserrat-Medium.ttf`
    ).then(res => res.arrayBuffer());

    const kalamFont = await pdfDoc.embedFont(kalamFontBytes);
    const montserratItalic = await pdfDoc.embedFont(montserratItalicFontBytes);
    const montserrat = await pdfDoc.embedFont(montserratFontBytes);
    const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman);

    // -----------------
    // Page Setup
    // -----------------
    const page = pdfDoc.addPage([841.89, 595.28]);
    const { width, height } = page.getSize();

    // -----------------
    // Logo
    // -----------------
    const logoBytes = await fetch(`${baseUrl}/logo.png`).then(res => res.arrayBuffer());
    const logo = await pdfDoc.embedPng(logoBytes);
    const logoDimns = logo.scale(0.5);
    page.drawImage(logo, {
      x: width / 2 - logoDimns.width / 2,
      y: height - logoDimns.height,
      width: logoDimns.width,
      height: logoDimns.height,
    });

    // -----------------
    // Title
    // -----------------
    const titleFontSize = 30;
    const titleText = "Certificate Of Completion";
    const titleTextWidth = montserrat.widthOfTextAtSize(titleText, titleFontSize);

    page.drawText(titleText, {
      x: width / 2 - titleTextWidth / 2,
      y: height - (logoDimns.height - 20),
      size: titleFontSize,
      font: montserrat,
      color: rgb(0.0078, 0.2039, 0.4863),
    });

    // -----------------
    // Name Label
    // -----------------
    const nameLabelText = "This certificate is hereby bestowed upon";
    const nameLabelFontSize = 20;
    const nameLabelTextWidth = montserratItalic.widthOfTextAtSize(
      nameLabelText,
      nameLabelFontSize
    );

    page.drawText(nameLabelText, {
      x: width / 2 - nameLabelTextWidth / 2,
      y: height - (logoDimns.height + 28),
      size: nameLabelFontSize,
      font: montserratItalic,
      color: rgb(0, 0, 0),
    });

    // -----------------
    // Name
    // -----------------
    const nameText = completionInfo.name;
    const nameFontSize = 40;
    const nameTextWidth = timesRomanFont.widthOfTextAtSize(nameText, nameFontSize);

    page.drawText(nameText, {
      x: width / 2 - nameTextWidth / 2,
      y: height - (logoDimns.height + 82),
      size: nameFontSize,
      font: kalamFont,
      color: rgb(0.0078, 0.2039, 0.4863),
    });

    // -----------------
    // Details Info
    // -----------------
    const detailsText = `This is to certify that ${completionInfo.name} successfully completed the ${completionInfo.courseName} course on ${completionInfo.completionDate} by ${completionInfo.instructor}`;
    const detailsFontSize = 16;

    page.drawText(detailsText, {
      x: width / 2 - 700 / 2,
      y: height - 380,
      size: detailsFontSize,
      font: montserrat,
      color: rgb(0, 0, 0),
      maxWidth: 700,
      wordBreaks: [" "],
    });

    // -----------------
    // Signatures
    // -----------------
    const signatureBoxWidth = 300;
    page.drawText(completionInfo.instructor, {
      x: width - signatureBoxWidth,
      y: 90,
      size: detailsFontSize,
      font: timesRomanFont,
      color: rgb(0, 0, 0),
    });
    page.drawText(completionInfo.instructorDesignation, {
      x: width - signatureBoxWidth,
      y: 72,
      size: 10,
      font: timesRomanFont,
      color: rgb(0, 0, 0),
      maxWidth: 250,
    });
    page.drawLine({
      start: { x: width - signatureBoxWidth, y: 110 },
      end: { x: width - 60, y: 110 },
      thickness: 1,
      color: rgb(0, 0, 0),
    });

    const signBytes = await fetch(`${baseUrl}${completionInfo.sign}`).then(res =>
      res.arrayBuffer()
    );
    const sign = await pdfDoc.embedPng(signBytes);

    page.drawImage(sign, {
      x: width - signatureBoxWidth,
      y: 115,
      width: 180,
      height: 54,
    });

    // -----------------
    // Pattern Background
    // -----------------
    const patternBytes = await fetch(`${baseUrl}/pattern.jpg`).then(res => res.arrayBuffer());
    const pattern = await pdfDoc.embedJpg(patternBytes);

    page.drawImage(pattern, {
      x: 0,
      y: 0,
      width: width,
      height: height,
      opacity: 0.2,
    });

    // -----------------
    // Save PDF and Respond
    // -----------------
    const pdfBytes = await pdfDoc.save();
    return new Response(pdfBytes, {
      headers: { "content-type": "application/pdf" },
    });
  } catch (error) {
    console.error("PDF generation error:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
  
}
