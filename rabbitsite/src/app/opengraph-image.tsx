import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#F8F8F8",
        }}
      >
        <div
          style={{
            fontSize: 64,
            fontWeight: 700,
            color: "#003366",
          }}
        >
          修修 Xiuqi Li
        </div>
      </div>
    ),
    size
  );
}