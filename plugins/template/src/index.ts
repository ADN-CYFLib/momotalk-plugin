import { logger } from "@vendetta";
import { findByProps } from "@vendetta/metro";

const { semanticColors } = findByProps("semanticColors");

export default {
    onLoad: () => {
            // モモトーク風の色指定
                    // BACKGROUND_TERTIARY: 一番左のサーバーリスト（紺色）
                            semanticColors.BACKGROUND_TERTIARY.dark = "#1A237E";
                                    
                                            // HEADER_PRIMARY: 一番上のバー（ピンク）
                                                    semanticColors.HEADER_PRIMARY.dark = "#FF4081";
                                                            
                                                                    // BACKGROUND_PRIMARY: チャットエリア（白）
                                                                            semanticColors.BACKGROUND_PRIMARY.dark = "#FFFFFF";
                                                                                    
                                                                                            // 文字色を読みやすく調整（黒系）
                                                                                                    semanticColors.TEXT_NORMAL.dark = "#333333";

                                                                                                            logger.log("MomoTalk Plugin Loaded!");
                                                                                                                },
                                                                                                                    onUnload: () => {
                                                                                                                            // 本来はここで色を元に戻す処理を書きますが、
                                                                                                                                    // 再起動すれば元に戻るので、まずはこれで試してみましょう。
                                                                                                                                            logger.log("MomoTalk Plugin Unloaded");
                                                                                                                                                },
                                                                                                                                                };
                                                                                                                                                