/**
 * 神笔马良 — The Magic Paintbrush
 * Bilingual Story Data (EN + ZH + Pinyin)
 *
 * Each chapter: { id, title{en,zh,pinyin}, image, content{en,zh,pinyin}, magic (bool) }
 * `magic` flag marks chapters where the brush's magic is active (for gold brush-flourish accent).
 */

const STORY = {
  title: {
    en: "The Magic Paintbrush",
    zh: "神笔马良",
    pinyin: "Shén Bǐ Mǎ Liáng"
  },
  chapters: [
    // ─────────────────────────────────────
    // Chapter 1 — The Boy Who Loved to Paint
    // ─────────────────────────────────────
    {
      id: 1,
      title: {
        en: "The Boy Who Loved to Paint",
        zh: "爱画画的男孩",
        pinyin: "Ài Huà Huà de Nán Hái"
      },
      image: "chapter-1.webp",
      magic: false,
      content: {
        en: "Long ago, in a poor village at the foot of green mountains, there lived an orphan boy named Ma Liang. His mother and father had died when he was very small. He lived alone in a little cave house and earned his rice by chopping firewood and cutting grass.\n\nBut Ma Liang had one great love — he loved to paint. He watched the birds and the fish and the flowers, and he wished with all his heart that he could draw them. But he was too poor to own even a single brush.",
        zh: "很久以前，在青山脚下的一个小村庄里，住着一个名叫马良的孤儿。他的父母在他很小的时候就去世了。他独自住在一间小小的窑洞里，靠打柴割草过日子。\n\n马良有一个最大的爱好——他喜欢画画。他看着天上的小鸟，水里的鱼儿，还有路边的花朵，一心想要把它们画下来。可是他太穷了，连一支笔也没有。",
        pinyin: "Hěn jiǔ yǐ qián, zài qīng shān jiǎo xià de yī gè xiǎo cūn zhuāng lǐ, zhù zhe yī gè míng jiào Mǎ Liáng de gū ér. Tā de fù mǔ zài tā hěn xiǎo de shí hòu jiù qù shì le. Tā dú zì zhù zài yī jiān xiǎo xiǎo de yáo dòng lǐ, kào dǎ chái gē cǎo guò rì zi.\n\nMǎ Liáng yǒu yī gè zuì dà de ài hào — tā xǐ huān huà huà. Tā kàn zhe tiān shàng de xiǎo niǎo, shuǐ lǐ de yú ér, hái yǒu lù biān de huā duǒ, yī xīn xiǎng yào bǎ tā men huà xià lái. Kě shì tā tài qióng le, lián yī zhī bǐ yě méi yǒu."
      }
    },

    // ─────────────────────────────────────
    // Chapter 2 — The Old Man and the Magic Brush
    // ─────────────────────────────────────
    {
      id: 2,
      title: {
        en: "The Old Man and the Magic Brush",
        zh: "老人赠神笔",
        pinyin: "Lǎo Rén Zèng Shén Bǐ"
      },
      image: "chapter-2.webp",
      magic: true,
      content: {
        en: "Ma Liang practiced every day anyway. When he went to the mountains, he picked up a stick and drew birds in the sand. When he went to the river, he dipped a root in the water and traced fish on the rocks. At night he used charcoal to draw on the walls of his cave.\n\nOne night, as he slept, a wonderful light filled the cave. An old man with a long white beard appeared and held out a golden brush. \"This is a magic brush,\" he said. \"Use it to help those who are poor.\" Ma Liang reached out and took it. When he woke up — the brush was right there in his hand, glowing like sunrise.",
        zh: "可马良还是每天练习画画。他上山打柴时，捡一根树枝在沙地上描飞鸟。他到河边割草时，用草根蘸河水在石头上学着画鱼。晚上回到家，他就用木炭在窑洞的墙上画白天看到的东西。\n\n一天夜里，马良睡着的时候，一道五彩的光芒照亮了窑洞。一个白胡子老人出现在他面前，手里拿着一支金光闪闪的笔。「这是一支神笔，」老人说，「你要用它帮助穷苦的人。」马良伸手接过笔，一觉醒来——那支笔就放在他的手上，像朝阳一样发出金灿灿的光。",
        pinyin: "Kě Mǎ Liáng hái shì měi tiān liàn xí huà huà. Tā shàng shàng dǎ chái shí, jiǎn yī gēn shù zhī zài shā dì shàng miáo fēi niǎo. Tā dào hé biān gē cǎo shí, yòng cǎo gēn zhàn hé shuǐ zài shí tou shàng xué zhe huà yú. Wǎn shàng huí dào jiā, tā jiù yòng mù tàn zài yáo dòng de qiáng shàng huà bái tiān kàn dào de dōng xī.\n\nYī tiān yè lǐ, Mǎ Liáng shuì zháo de shí hòu, yī dào wǔ cǎi de guāng máng zhào liàng le yáo dòng. Yī gè bái hú zi lǎo rén chū xiàn zài tā miàn qián, shǒu lǐ ná zhe yī zhī jīn guāng shǎn shǎn de bǐ. 'Zhè shì yī zhī shén bǐ,' lǎo rén shuō, 'nǐ yào yòng tā bāng zhù qióng kǔ de rén.' Mǎ Liáng shēn shǒu jiē guò bǐ, yī xǐng lái — nà zhī bǐ jiù fàng zài tā de shǒu shàng, xiàng zhāo yáng yī yàng fā chū jīn càn càn de guāng."
      }
    },

    // ─────────────────────────────────────
    // Chapter 3 — Paintings Come to Life
    // ─────────────────────────────────────
    {
      id: 3,
      title: {
        en: "Paintings Come to Life",
        zh: "画物皆成真",
        pinyin: "Huà Wù Jiē Chéng Zhēn"
      },
      image: "chapter-3.webp",
      magic: true,
      content: {
        en: "Ma Liang could not believe his eyes. He picked up the magic brush and drew a little bird — and it flapped its wings and flew right off the paper, singing a song! He drew a fish, and it wiggled off the page and splashed into a bowl of water, dancing happily.\n\n\"This brush is wonderful!\" Ma Liang cried. \"I must use it to help my friends.\"\n\nFrom that day on, Ma Liang painted for the poor. He painted ploughs for farmers who had none. He painted oxen to pull them. He painted waterwheels and millstones. Everyone in the village smiled again.",
        zh: "马良不敢相信自己的眼睛。他拿起神笔画了一只小鸟——小鸟扑扑翅膀，从纸上飞了出来，唱起歌来！他又画了一条鱼，小鱼甩甩尾巴，从纸上跳进了水盆里，欢快地游来游去。\n\n「这支笔太神奇了！」马良高兴地说，「我一定要用它帮助我的朋友们。」\n\n从那以后，马良专门为穷苦人画画。谁家没有犁耙，他就画犁耙；谁家没有耕牛，他就画耕牛；他还画水车、画石磨。村里的每个人脸上都露出了笑容。",
        pinyin: "Mǎ Liáng bù gǎn xiāng xìn zì jǐ de yǎn jīng. Tā ná qǐ shén bǐ huà le yī zhī xiǎo niǎo — xiǎo niǎo pū pū chì bǎng, cóng zhǐ shàng fēi le chū lái, chàng qǐ gē lái! Tā yòu huà le yī tiáo yú, xiǎo yú shuǎi shuǎi wěi ba, cóng zhǐ shàng tiào jìn le shuǐ pén lǐ, huān kuài de yóu lái yóu qù.\n\n'Zhè zhī bǐ tài shén qí le!' Mǎ Liáng gāo xìng de shuō, 'wǒ yī dìng yào yòng tā bāng zhù wǒ de péng you men.'\n\nCóng nà yǐ hòu, Mǎ Liáng zhuān mén wèi qióng kǔ rén huà huà. Shéi jiā méi yǒu lí pá, tā jiù huà lí pá; shéi jiā méi yǒu gēng niú, tā jiù huà gēng niú; tā hái huà shuǐ chē, huà shí mò. Cūn lǐ de měi gè rén liǎn shàng dōu lù chū le xiào róng."
      }
    },

    // ─────────────────────────────────────
    // Chapter 4 — The Greedy Landlord
    // ─────────────────────────────────────
    {
      id: 4,
      title: {
        en: "The Greedy Landlord",
        zh: "贪心的恶财主",
        pinyin: "Tān Xīn de È Cái Zhǔ"
      },
      image: "chapter-4.webp",
      magic: false,
      content: {
        en: "Word of Ma Liang's magic brush spread across the countryside. Soon a rich and greedy landlord heard the news. \"If I can get that brush,\" he said, \"I can paint mountains of gold and become the richest man in the world!\"\n\nHe sent his servants to capture Ma Liang and locked him in a cold, dark stable. \"Paint me gold!\" the landlord roared. But Ma Liang refused. \"This brush is for helping people, not for making greedy men richer,\" he said.",
        zh: "马良有一支神笔的消息很快传开了。邻近庄园里有一个又坏又贪心的财主，他听到这个消息后说：「如果我能得到那支笔，就能画出金山银山，变成世界上最富有的人！」\n\n他派了几个家丁把马良抓来，关进一间又冷又黑的马厩里。「给我画金子！」财主恶狠狠地喊道。但马良拒绝了。「这支笔是用来帮助穷苦人的，不是让贪心的人变得更贪心。」他坚定地说。",
        pinyin: "Mǎ Liáng yǒu yī zhī shén bǐ de xiāo xi hěn kuài chuán kāi le. Lín jìn zhuāng yuán lǐ yǒu yī gè yòu huài yòu tān xīn de cái zhǔ, tā tīng dào zhè gè xiāo xi hòu shuō: 'Rú guǒ wǒ néng dé dào nà zhī bǐ, jiù néng huà chū jīn shān yín shān, biàn chéng shì jiè shàng zuì fù yǒu de rén!'\n\nTā pài le jǐ gè jiā dīng bǎ Mǎ Liáng zhuā lái, guān jìn yī jiān yòu lěng yòu hēi de mǎ jiù lǐ. 'Gěi wǒ huà jīn zi!' Cái zhǔ è hěn hěn de hǎn dào. Dàn Mǎ Liáng jù jué le. 'Zhè zhī bǐ shì yòng lái bāng zhù qióng kǔ rén de, bú shì ràng tān xīn de rén biàn de gèng tān xīn.' Tā jiān dìng de shuō."
      }
    },

    // ─────────────────────────────────────
    // Chapter 5 — The Painting that Saved Ma Liang
    // ─────────────────────────────────────
    {
      id: 5,
      title: {
        en: "The Painting that Saved Ma Liang",
        zh: "画卷救马良",
        pinyin: "Huà Juǎn Jiù Mǎ Liáng"
      },
      image: "chapter-5.webp",
      magic: true,
      content: {
        en: "That night, snow fell thick and fast. The landlord thought Ma Liang would freeze to death in the stable. But when he crept to the door, he saw a warm red glow inside and smelled something delicious.\n\nThere was Ma Liang, sitting beside a bright fire, eating hot cakes! The landlord knew at once — Ma Liang had painted them with the magic brush.\n\n\"Seize him!\" screamed the landlord. But Ma Liang had already painted a tall ladder. He climbed up and over the wall and vanished into the night. Then he painted a fine horse and galloped away as fast as the wind.",
        zh: "那天夜里，大雪纷飞。财主以为马良一定会冻死在马厩里。可当他偷偷走近门口时，却看到马厩里透出红红的亮光，还闻到一股香喷喷的味道。\n\n马良正坐在一堆暖和的火堆旁边，吃着热乎乎的饼子呢！财主一下子就明白了——这是马良用神笔画的。\n\n「快抓住他！」财主大叫起来。可是马良已经画好了一架高高的梯子，他翻过墙头，消失在黑夜中。然后他画了一匹骏马，像风一样飞奔而去。",
        pinyin: "Nà tiān yè lǐ, dà xuě fēn fēi. Cái zhǔ yǐ wéi Mǎ Liáng yī dìng huì dòng sǐ zài mǎ jiù lǐ. Kě dāng tā tōu tōu zǒu jìn mén kǒu shí, què kàn dào mǎ jiù lǐ tòu chū hóng hóng de liàng guāng, hái wén dào yī gǔ xiāng pēn pēn de wèi dào.\n\nMǎ Liáng zhèng zuò zài yī duī nuǎn huo de huǒ duō páng biān, chī zhe rè hū hū de bǐng zi ne! Cái zhǔ yī xià zi jiù míng bái le — zhè shì Mǎ Liáng yòng shén bǐ huà de.\n\n'Kuài zhuā zhù tā!' Cái zhǔ dà jiào qǐ lái. Kě shì Mǎ Liáng yǐ jīng huà hǎo le yī jià gāo gāo de tī zi, tā fān guò qiáng tóu, xiāo shī zài hēi yè zhōng. Rán hòu tā huà le yī pǐ jùn mǎ, xiàng fēng yī yàng fēi bēn ér qù."
      }
    },

    // ─────────────────────────────────────
    // Chapter 6 — The Crane Without Eyes
    // ─────────────────────────────────────
    {
      id: 6,
      title: {
        en: "The Crane Without Eyes",
        zh: "无眼的白鹤",
        pinyin: "Wú Yǎn de Bái Hè"
      },
      image: "chapter-6.webp",
      magic: true,
      content: {
        en: "Ma Liang rode far, far away, to a town where no one knew him. He wanted to live quietly, so he painted pictures to sell — but he was careful. He never gave his paintings eyes. That way, the painted birds and horses could not fly or run away.\n\nBut one day, he was painting a white crane. A drop of ink splashed by accident — right onto the crane's face. And oh! The crane blinked its new eyes, spread its wings, and soared up into the sky! The whole town gasped in wonder.",
        zh: "马良骑着马走了很远很远，来到一个没有人认识他的小镇。他想安安静静地生活，就画一些画拿到街上去卖——可是他很小心。他画的飞鸟和走兽都不画眼睛。这样，画出来的东西就不会飞走了。\n\n可是有一天，他正在画一只白鹤。一不小心，一滴墨水溅到了白鹤的脸上——正好溅在眼睛的位置上！啊！白鹤眨了眨新画的眼睛，展开翅膀，飞上了天空！整个小镇的人都惊叹不已。",
        pinyin: "Mǎ Liáng qí zhe mǎ zǒu le hěn yuǎn hěn yuǎn, lái dào yī gè méi yǒu rén rèn shi tā de xiǎo zhèn. Tā xiǎng ān ān jìng jìng de shēng huó, jiù huà yī xiē huà ná dào jiē shàng qù mài — kě shì tā hěn xiǎo xīn. Tā huà de fēi niǎo hé zǒu shòu dōu bú huà yǎn jīng. Zhè yàng, huà chū lái de dōng xī jiù bú huì fēi zǒu le.\n\nKě shì yǒu yī tiān, tā zhèng zài huà yī zhī bái hè. Yī bù xiǎo xīn, yī dī mò shuǐ jiàn dào le bái hè de liǎn shàng — zhèng hǎo jiàn zài yǎn jīng de wèi zhì shàng! A! Bái hè zhǎ le zhǎ xīn huà de yǎn jīng, zhǎn kāi chì bǎng, fēi shàng le tiān kōng! Zhěng gè xiǎo zhèn de rén dōu jīng tàn bù yǐ."
      }
    },

    // ─────────────────────────────────────
    // Chapter 7 — The Emperor and the Money Tree
    // ─────────────────────────────────────
    {
      id: 7,
      title: {
        en: "The Emperor and the Money Tree",
        zh: "皇帝与摇钱树",
        pinyin: "Huáng Dì yǔ Yáo Qián Shù"
      },
      image: "chapter-7.webp",
      magic: true,
      content: {
        en: "The story of the flying crane reached the Emperor himself. He sent soldiers to drag Ma Liang to the palace.\n\n\"Paint me a golden mountain!\" ordered the Emperor. Ma Liang painted a mountain — but it was far across a vast blue sea. \"Paint me a ship!\" the Emperor demanded. Ma Liang painted a great wooden ship. The Emperor and his soldiers climbed aboard and set sail for the mountain of gold.\n\nAs they reached the middle of the sea, Ma Liang began to paint. First a small wind. Then more wind. Then a huge, howling storm.",
        zh: "白鹤飞上天的故事传到了皇帝的耳朵里。皇帝立刻派人把马良抓到了皇宫里。\n\n「给我画一座金山！」皇帝命令道。马良画了一座金山——可那座金山在一片汪洋大海的另一边。「再给我画一艘大船！」皇帝大声说。马良画了一条大大的木船。皇帝带着士兵们登上船，浩浩荡荡地驶向金山。\n\n大船开到了大海中央。马良拿起神笔开始画。先画了一阵微风。然后画了更大的风。最后，他画起了狂风暴雨。",
        pinyin: "Bái hè fēi shàng tiān de gù shì chuán dào le huáng dì de ěr duo lǐ. Huáng dì lì kè pài rén bǎ Mǎ Liáng zhuā dào le huáng gōng lǐ.\n\n'Gěi wǒ huà yī zuò jīn shān!' Huáng dì mìng lìng dào. Mǎ Liáng huà le yī zuò jīn shān — kě nà zuò jīn shān zài yī piàn wāng yáng dà hǎi de lìng yī biān. 'Zài gěi wǒ huà yī sōu dà chuán!' Huáng dì dà shēng shuō. Mǎ Liáng huà le yī tiáo dà dà de mù chuán. Huáng dì dài zhe shì bīng men dēng shàng chuán, hào hào dàng dàng de shǐ xiàng jīn shān.\n\nDà chuán kāi dào le dà hǎi zhōng yāng. Mǎ Liáng ná qǐ shén bǐ kāi shǐ huà. Xiān huà le yī zhèn wēi fēng. Rán hòu huà le gèng dà de fēng. Zuì hòu, tā huà qǐ le kuáng fēng bào yǔ."
      }
    },

    // ─────────────────────────────────────
    // Chapter 8 — The Storm at Sea
    // ─────────────────────────────────────
    {
      id: 8,
      title: {
        en: "The Storm at Sea",
        zh: "海上风暴",
        pinyin: "Hǎi Shàng Fēng Bào"
      },
      image: "chapter-8.webp",
      magic: true,
      content: {
        en: "\"More wind! More wind!\" the Emperor shouted, standing at the bow of the ship. He wanted the boat to go faster.\n\nBut Ma Liang kept painting — wind upon wind upon wind. The waves rose up like tall walls. The sky turned black. Thunder cracked. Lightning flashed. Rain poured down.\n\n\"Stop! Stop!\" screamed the Emperor. \"The boat is going to sink!\"\n\nBut the greedy Emperor had asked for too much. The waves crashed down upon the ship, and the sea swallowed it whole. Ma Liang stood on the shore, his magic brush safe in his hand, and watched the storm pass.\n\nThen he turned and walked back toward the village, ready to paint whatever the people needed next.",
        zh: "「风再大一些！风再大一些！」皇帝站在船头大声叫喊。他嫌船开得太慢了。\n\n马良没有停下来。他继续画着风，一阵比一阵大。海浪越涨越高，像一堵堵倒塌的高墙。天空变得漆黑一片。雷声轰隆轰隆地响。闪电劈过天空。暴雨倾盆而下。\n\n「够了！够了！」皇帝吓得大声尖叫，「船要沉了！快停下！」\n\n可是贪心的皇帝已经要得太多了。巨浪铺天盖地地砸向大船，大海把整条船吞没了。马良站在海岸上，紧紧握着手中的神笔，看着风暴慢慢平息。\n\n然后，他转过身，朝着村庄走去，准备为人们画出他们需要的一切。",
        pinyin: "'Fēng zài dà yī xiē! Fēng zài dà yī xiē!' Huáng dì zhàn zài chuán tóu dà shēng jiào hǎn. Tā xián chuán kāi de tài màn le.\n\nMǎ Liáng méi yǒu tíng xià lái. Tā jì xù huà zhe fēng, yī zhèn bǐ yī zhèn dà. Hǎi làng yuè zhǎng yuè gāo, xiàng yī dǔ dǔ dǎo tā de gāo qiáng. Tiān kōng biàn de qī hēi yī piàn. Léi shēng hōng lōng hōng lōng de xiǎng. Shǎn diàn pī guò tiān kōng. Bào yǔ qīng pén ér xià.\n\n'Gòu le! Gòu le!' Huáng dì xià de dà shēng jiān jiào, 'chuán yào chén le! Kuài tíng xià!'\n\nKě shì tān xīn de huáng dì yǐ jīng yào de tài duō le. Jù làng pū tiān gài dì de zá xiàng dà chuán, dà hǎi bǎ zhěng tiáo chuán tūn mò le. Mǎ Liáng zhàn zài hǎi àn shàng, jǐn jǐn wò zhe shǒu zhōng de shén bǐ, kàn zhe fēng bào màn man píng xī.\n\nRán hòu, tā zhuǎn guò shēn, cháo zhe cūn zhuāng zǒu qù, zhǔn bèi wèi rén men huà chū tā men xū yào de yī qiè."
      }
    }
  ]
};
