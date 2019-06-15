import { useCallback } from "react";

export const DEFAULT_CANVAS_LS_KEY = "canvas";
export const FIRST_VISIT_KEY = "visitFlag";

const useCanvasLocalStorage = canvas => {
  // `cv` parameter allows to pass undebounced canvas for save
  // useful on window close for example
  const save = useCallback(
    (cv = canvas) => {
      localStorage.setItem(DEFAULT_CANVAS_LS_KEY, JSON.stringify(cv));
    },
    [canvas]
  );

  const clear = useCallback(() => {
    localStorage.removeItem(DEFAULT_CANVAS_LS_KEY);
  }, []);

  const retrieve = useCallback(() => {
    const savedCanvas = localStorage.getItem(DEFAULT_CANVAS_LS_KEY);
    if (savedCanvas !== null) return JSON.parse(savedCanvas);
    return null;
  }, []);

  return [save, clear, retrieve];
};

export default useCanvasLocalStorage;
