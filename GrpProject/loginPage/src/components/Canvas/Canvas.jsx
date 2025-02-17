// Made By Ayush Jha

import { useEffect, useRef, useState } from "react";
import * as fabric from "fabric";
import styles from "./canvas.module.css"; // Correctly import the CSS module

const ScrapbookCanvas = () => {
  const CanvasRef = useRef(null);
  const CanvasInstance = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [isErasing, setIsErasing] = useState(false);

  // Initialize Canvas
  useEffect(() => {
    if (!CanvasInstance.current && CanvasRef.current) {
      CanvasInstance.current = new fabric.Canvas(CanvasRef.current, {
        width: 780,
        height: 450,
        backgroundColor: "#fbf8e5", // Set background color directly
      });
      CanvasInstance.current.freeDrawingBrush = new fabric.PencilBrush(
        CanvasInstance.current
      );
      CanvasInstance.current.freeDrawingBrush.width = 5;
      CanvasInstance.current.freeDrawingBrush.color = "#000000";

      CanvasInstance.current.renderAll();
    }
  }, []);

  // Upload Image
  const ImageUpload = (event) => {
    if (!CanvasInstance.current) return;

    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function (e) {
      fabric.Image.fromURL(e.target.result, (img) => {
        if (!img) return;

        img.set({
          left: 100,
          top: 100,
          scaleX: 0.5,
          scaleY: 0.5,
          selectable: true,
        });

        img.scaleToWidth(200);
        CanvasInstance.current.add(img);
        CanvasInstance.current.setActiveObject(img);
        CanvasInstance.current.renderAll();
      });
    };
    reader.readAsDataURL(file);
  };

  // Toggle Doodle Mode
  const toggleDoodleMode = () => {
    if (!CanvasInstance.current) return;

    setIsDrawing((prev) => !prev);
    setIsErasing(false);

    CanvasInstance.current.isDrawingMode =
      !CanvasInstance.current.isDrawingMode;
    if (CanvasInstance.current.isDrawingMode) {
      if (CanvasInstance.current.freeDrawingBrush) {
        CanvasInstance.current.freeDrawingBrush.width = 5;
        CanvasInstance.current.freeDrawingBrush.color = "#000000";
      }
    }
  };

  // Toggle Eraser Mode
  const toggleEraserMode = () => {
    if (!CanvasInstance.current) return;

    setIsErasing((prev) => !prev);
    setIsDrawing(false);

    CanvasInstance.current.isDrawingMode =
      !CanvasInstance.current.isDrawingMode;
    if (CanvasInstance.current.isDrawingMode) {
      CanvasInstance.current.freeDrawingBrush.width = 10;
      CanvasInstance.current.freeDrawingBrush.color =
        CanvasInstance.current.backgroundColor; // Eraser effect
    }
  };

  // Add Stickers
  const addSticker = (emoji) => {
    if (!CanvasInstance.current) return;

    const sticker = new fabric.Text(emoji, {
      fontSize: 50,
      left: 100,
      top: 100,
      selectable: true,
    });

    CanvasInstance.current.add(sticker);
    CanvasInstance.current.setActiveObject(sticker);
    CanvasInstance.current.renderAll();
  };

  // Clear Canvas
  const clearCanvas = () => {
    if (!CanvasInstance.current) return;

    CanvasInstance.current.clear();
    CanvasInstance.current.backgroundColor = "#ffffff";
    CanvasInstance.current.renderAll();
  };

  return (
    <div className={styles.body}>
      <div className={styles.container}>
        {/* Sidebar */}
        <div className={styles.sidebar}>
          <input
            type="file"
            accept="image/*"
            onChange={ImageUpload}
            className={styles.fileInput}
          />
          <button className={styles.button} onClick={toggleDoodleMode}>
            {isDrawing ? "Disable Doodling" : "Enable Doodling"}
          </button>
          <button className={styles.button} onClick={toggleEraserMode}>
            {isErasing ? "Enable Eraser" : "Disable Eraser"}
          </button>
          <button className={styles.button} onClick={() => addSticker("❤️")}>
            Add Heart Sticker
          </button>
          <button className={styles.button} onClick={() => addSticker("⭐")}>
            Add Star Sticker
          </button>
          <button onClick={clearCanvas} className={styles.clearBtn}>
            Clear Canvas
          </button>
          <button className={styles.SubmitBtn}>Submit</button>
        </div>

        {/* Canvas Section */}
        <div className={styles.canvasContainer}>
          <canvas ref={CanvasRef}></canvas>
        </div>
      </div>
    </div>
  );
};

export default ScrapbookCanvas;
