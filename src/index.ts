import { Translate } from "./ToolGood.Words.Translate"

const translator = new Translate()
/**
 * 转繁体中文
 * @param {string} text 原文本
 * @return {string} 转换结果
 */
export function Simplify2Traditional_tw(text: string): string {
  return translator.ToTraditionalChinese(text, 2)
}
/**
 * 转繁体中文
 * @param {string} text 原文本
 * @return {string} 转换结果
 */
export function Simplify2Traditional_hk(text: string): string {
  return translator.ToTraditionalChinese(text, 1)
}
/**
 * 转繁体中文
 * @param {string} text 原文本
 * @return {string} 转换结果
 */
export function Traditional2Simplify_hk(text: string): string {
  return translator.ToSimplifiedChinese(text, 1)
}
/**
 * 转繁体中文
 * @param {string} text 原文本
 * @return {string} 转换结果
 */
export function Traditional2Simplify_tw(text: string): string {
  return translator.ToSimplifiedChinese(text, 2)
}
