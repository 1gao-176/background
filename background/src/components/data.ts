import { ref } from "vue";

export const data=ref<any[]>([
 {no: 'A', plumBlossom: '手捧雷', spade: '决斗', heart: '虎符', block: '万箭齐发'},
 {no: '2', plumBlossom: '龙鳞刀', spade: '玉如意', heart: '闪', block: '闪'},
 {no: '3', plumBlossom: '探囊取物', spade: '杀', heart: '药', block: '五谷丰登'},
 {no: '4', plumBlossom: '釜底抽薪', spade: '釜底抽薪', heart: '闪', block: '釜底抽薪'},
 {no: '5', plumBlossom: '烽火狼烟', spade: '防御马', heart: '探囊取物', block: '博浪锤'},
 {no: '6', plumBlossom: '兵粮寸断', spade: '杀', heart: '药', block: '画地为牢'},
 {no: '7', plumBlossom: '杀', spade: '杀', heart: '决斗', block: '杀'},
 {no: '8', plumBlossom: '杀', spade: '杀', heart: '闪', block: '闪'},
 {no: '9', plumBlossom: '杀', spade: '酒', heart: '无中生有', block: '酒'},
 {no: '10', plumBlossom: '杀', spade: '杀', heart: '杀', block: '闪'},
 {no: 'J', plumBlossom: '乾坤袋', spade: '杀', heart: '杀', block: '杀'},
 {no: 'Q', plumBlossom: '芦叶枪', spade: '无懈可击', heart: '宣花斧', block: '无懈可击'},
 {no: 'K', plumBlossom: '烽火狼烟', spade: '借刀杀人', heart: '闪', block: '进攻马'}
]
)

export const columns = [
    {
      title: "No",
      key: "no",
    },
    {
      title: "♣",
      key: "plumBlossom",
    },
    {
      title: "♠",
      key: "spade",
    },
    {
      title: "♥",
      key: "heart",
      className: "red",
    },
    {
      title: "♦",
      key: "block",
      className: "red",
    },
  ];