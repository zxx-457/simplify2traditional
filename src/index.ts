import { Translate } from "./ToolGood.Words.Translate"
const translator = new Translate()
/**
 * 简体 -> 台湾繁体
 * @param {string} text 原文本
 * @return {string} 转换结果
 */
export function simp_to_tradi_hk(text: string): string {
  return translator.ToTraditionalChinese(text, 2)
}
/**
 * 简体 -> 香港繁体
 * @param {string} text 原文本
 * @return {string} 转换结果
 */
export function simp_to_tradi_tw(text: string): string {
  return translator.ToTraditionalChinese(text, 1)
}
/**
 * 香港繁体 -> 简体
 * @param {string} text 原文本
 * @return {string} 转换结果
 */
export function tradi_to_simp_hk(text: string): string {
  return translator.ToSimplifiedChinese(text, 1)
}
/**
 * 台湾繁体 -> 简体
 * @param {string} text 原文本
 * @return {string} 转换结果
 */
export function tradi_to_simp_tw(text: string): string {
  return translator.ToSimplifiedChinese(text, 2)
}
