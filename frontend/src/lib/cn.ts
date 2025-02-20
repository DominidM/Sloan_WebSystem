import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Función para combinar clases de Tailwind sin conflictos.
 * @param inputs Clases en formato string o array
 * @returns Clases optimizadas
 */
export function cn(...inputs: any[]) {
  return twMerge(clsx(inputs));
}