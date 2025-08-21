// utils/dateHelper.js
import dayjs from "dayjs";
import "dayjs/locale/id";

dayjs.locale("id");

/**
 * Format date ke gaya Indonesia
 * Contoh output: "Sabtu, 13 Mei 2025"
 *
 * @param {string|Date|dayjs.Dayjs} date - input date (string, Date object, atau dayjs instance)
 * @returns {string} formatted date string
 */
export function formatDate(date:string) {
  return dayjs(date).format("dddd, D MMMM YYYY");
}
