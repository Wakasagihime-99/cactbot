import NetRegexes from '../../../../../resources/netregexes';
import { Responses } from '../../../../../resources/responses';
import ZoneId from '../../../../../resources/zone_id';
import { RaidbossData } from '../../../../../types/data';
import { TriggerSet } from '../../../../../types/trigger';

export type Data = RaidbossData;

// O9N - Alphascape 1.0
const triggerSet: TriggerSet<Data> = {
  zoneId: ZoneId.AlphascapeV10,
  timelineFile: 'o9n.txt',
  triggers: [
    {
      id: 'O9N Chaotic Dispersion',
      type: 'StartsUsing',
      netRegex: NetRegexes.startsUsing({ id: '314F', source: 'Chaos' }),
      netRegexDe: NetRegexes.startsUsing({ id: '314F', source: 'Chaos' }),
      netRegexFr: NetRegexes.startsUsing({ id: '314F', source: 'Chaos' }),
      netRegexJa: NetRegexes.startsUsing({ id: '314F', source: 'カオス' }),
      netRegexCn: NetRegexes.startsUsing({ id: '314F', source: '卡奥斯' }),
      netRegexKo: NetRegexes.startsUsing({ id: '314F', source: '카오스' }),
      response: Responses.tankBuster(),
    },
    {
      id: 'O9N Orbs Fiend',
      type: 'StartsUsing',
      netRegex: NetRegexes.startsUsing({ id: '315C', source: 'Chaos', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '315C', source: 'Chaos', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '315C', source: 'Chaos', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '315C', source: 'カオス', capture: false }),
      netRegexCn: NetRegexes.startsUsing({ id: '315C', source: '卡奥斯', capture: false }),
      netRegexKo: NetRegexes.startsUsing({ id: '315C', source: '카오스', capture: false }),
      condition: (data) => data.role === 'tank',
      alarmText: (_data, _matches, output) => output.text!(),
      outputStrings: {
        text: {
          en: 'Orb Tethers',
          de: 'Kugel-Verbindungen',
          fr: 'Attrapez les orbes',
          ja: '線',
          cn: '连线',
          ko: '구슬 줄',
        },
      },
    },
  ],
  timelineReplace: [
    {
      'locale': 'de',
      'replaceSync': {
        'Chaos': 'Chaos',
        'YOU DARE!': 'Wie könnt ihr es wagen?!',
      },
      'replaceText': {
        'Big Bang': 'Quantengravitation',
        'Blaze': 'Flamme',
        'Bowels of Agony': 'Quälende Eingeweide',
        'Chaosphere': 'Chaossphäre',
        'Chaotic Dispersion': 'Chaos-Dispersion',
        'Cyclone': 'Tornado',
        'Damning Edict': 'Verdammendes Edikt',
        'Earthquake': 'Erdbeben',
        'Fiendish Orbs': 'Höllenkugeln',
        'Knock(?! )': 'Einschlag',
        'Long/Lat Implosion': 'Horizontale/Vertikale Implosion',
        'Soul of Chaos': 'Chaosseele',
        'Stray Flames': 'Chaosflammen',
        'Stray Spray': 'Chaosspritzer',
        'Tsunami': 'Tsunami',
      },
    },
    {
      'locale': 'fr',
      'replaceSync': {
        'Chaos': 'Chaos',
        'YOU DARE!': '... Mon cristal !? Impossible !',
      },
      'replaceText': {
        'Big Bang': 'Saillie',
        'Blaze': 'Flammes',
        'Bowels of Agony': 'Entrailles de l\'agonie',
        'Chaosphere': 'Sphère de chaos',
        'Chaotic Dispersion': 'Dispersion chaotique',
        'Cyclone': 'Tornade',
        'Damning Edict': 'Décret accablant',
        'Earthquake': 'Grand séisme',
        'Fiendish Orbs': 'Ordre de poursuite',
        'Knock(?! )': 'Impact',
        'Long/Lat Implosion': 'Implosion Hz/Vert',
        'Soul of Chaos': 'Âme du chaos',
        'Stray Flames': 'Flammes du chaos',
        'Stray Spray': 'Eaux du chaos',
        'Tsunami': 'Raz-de-marée',
      },
    },
    {
      'locale': 'ja',
      'replaceSync': {
        'Chaos': 'カオス',
        'YOU DARE!': 'まさか……黒水晶を……！？',
      },
      'replaceText': {
        'Big Bang': '突出せよ',
        'Blaze': 'ほのお',
        'Bowels of Agony': 'バウル・オブ・アゴニー',
        'Chaosphere': 'カオススフィア',
        'Chaotic Dispersion': 'カオティックディスパーション',
        'Cyclone': 'たつまき',
        'Damning Edict': 'ダミングイーディクト',
        'Earthquake': 'じしん',
        'Fiendish Orbs': '追尾せよ',
        'Knock(?! )': '着弾',
        'Long/Lat Implosion': 'インプロージョン 横/縦',
        'Soul of Chaos': 'ソウル・オブ・カオス',
        'Stray Flames': '混沌の炎',
        'Stray Spray': '混沌の水',
        'Tsunami': 'つなみ',
      },
    },
    {
      'locale': 'cn',
      'replaceSync': {
        'Chaos': '混沌',
        'YOU DARE!': '居然……把黑水晶给……',
      },
      'replaceText': {
        'Big Bang': '顶起',
        'Blaze': '烈焰',
        'Bowels of Agony': '深层痛楚',
        'Chaosphere': '混沌晶球',
        'Chaotic Dispersion': '散布混沌',
        'Cyclone': '龙卷风',
        'Damning Edict': '诅咒敕令',
        'Earthquake': '大地震',
        'Fiendish Orbs': '追踪',
        'Knock(?! )': '中弹',
        'Long/Lat Implosion': '经/纬度聚爆',
        'Soul of Chaos': '混沌之魂',
        'Stray Flames': '混沌之炎',
        'Stray Spray': '混沌之水',
        'Tsunami': '海啸',
      },
    },
    {
      'locale': 'ko',
      'missingTranslations': true,
      'replaceSync': {
        'Chaos': '카오스',
        'YOU DARE!': '네 이노오오옴',
      },
      'replaceText': {
        'Big Bang': '돌출하라',
        'Blaze': '화염',
        'Bowels of Agony': '고통의 심핵',
        'Chaosphere': '혼돈의 구체',
        'Chaotic Dispersion': '혼돈 유포',
        'Cyclone': '회오리',
        'Damning Edict': '파멸 포고',
        'Earthquake': '대지진',
        'Fiendish Orbs': '추격하라',
        'Knock': '착탄',
        'Long/Lat Implosion': '가로/세로 내파',
        'Soul of Chaos': '혼돈의 영혼',
        'Stray Flames': '혼돈의 불',
        'Stray Spray': '혼돈의 물',
        'Tsunami': '해일',
      },
    },
  ],
};

export default triggerSet;