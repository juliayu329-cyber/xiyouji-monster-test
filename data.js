const monsters = [
    {
        id: 'baigujing', type: 'INTJ', name: '白骨精',
        image: 'images/白骨精.png',
        description: '极度冷静，擅长长线布局的战略家。你从不打无准备之仗，每一步都经过精密计算。在别人还在犹豫时，你已经想好了三步之后的棋。',
        traits: ['冷静理性', '长线布局', '独来独往', '目标坚定']
    },
    {
        id: 'jiulingyuansheng', type: 'INTP', name: '九灵元圣',
        image: 'images/九灵元圣.png',
        description: '实力深不可测，却只想安静隐居的智者。你对世间万物充满好奇，喜欢钻研事物的本质，但对权力和社交毫无兴趣。',
        traits: ['博学多才', '淡泊名利', '独立思考', '深居简出']
    },
    {
        id: 'qingmaoshizi', type: 'ENTJ', name: '青毛狮子怪',
        image: 'images/青毛狮子怪.png',
        description: '极具威严，统领万妖的铁腕领袖。你天生就有号令群雄的气场，做事雷厉风行，追求效率和结果。',
        traits: ['天生领袖', '雷厉风行', '目标明确', '威严霸气']
    },
    {
        id: 'liuermihou', type: 'ENTP', name: '六耳猕猴',
        image: 'images/六耳猕猴.png',
        description: '聪明绝顶，试图挑战既定规则的变革者。你思维敏捷，善于辩论，总能找到规则的漏洞并加以利用。',
        traits: ['思维敏捷', '挑战权威', '能言善辩', '不走寻常路']
    },
    {
        id: 'jinbilaoshu', type: 'INFJ', name: '金鼻白毛老鼠精',
        image: 'images/金鼻白毛老鼠精.png',
        description: '情感深沉，在黑暗中追求精神寄托的理想主义者。你内心丰富而敏感，渴望找到生命的意义和真正的归属。',
        traits: ['情感深沉', '理想主义', '追求意义', '内心丰富']
    },
    {
        id: 'youlaiyouqu', type: 'INFP', name: '有来有去',
        image: 'images/有来有去.png',
        description: '善良、敏感，在残酷世界中保持良知的"打工人"。你有自己的道德底线，即使身处妖界也不愿随波逐流。',
        traits: ['善良敏感', '坚守良知', '内心柔软', '不随波逐流']
    },
    {
        id: 'huangmeiguai', type: 'ENFJ', name: '黄眉怪',
        image: 'images/黄眉怪.png',
        description: '极具煽动性，试图建立自己秩序的"伪佛"。你天生具有感召力，善于团结众人，有自己的一套理想和信念。',
        traits: ['极具感召力', '理想主义', '善于团结', '有信念']
    },
    {
        id: 'zhizhujing', type: 'ENFP', name: '蜘蛛精',
        image: 'images/蜘蛛精.png',
        description: '追求自由、热爱生活、情感丰富的享乐主义者。你活泼开朗，善于社交，对世界充满好奇和热情。',
        traits: ['追求自由', '热爱生活', '情感丰富', '好奇心强']
    },
    {
        id: 'wugongjing', type: 'ISTJ', name: '蜈蚣精',
        image: 'images/蜈蚣精.png',
        description: '严谨、守规，像精密仪器一样生活的修行者。你做事一丝不苟，遵循规律，是最可靠的存在。',
        traits: ['严谨守规', '一丝不苟', '可靠稳重', '持之以恒']
    },
    {
        id: 'xiaobailong', type: 'ISFJ', name: '小白龙',
        image: 'images/小白龙.png',
        description: '沉默寡言，甘愿为大局牺牲自我的守护者。你默默付出，从不邀功，是团队中最可信赖的后盾。',
        traits: ['默默付出', '忠诚可靠', '甘于奉献', '沉默寡言']
    },
    {
        id: 'niumowang', type: 'ESTJ', name: '牛魔王',
        image: 'images/牛魔王.png',
        description: '重视家族名望、讲究社会秩序的妖界大佬。你做事讲规矩，重视传统和地位，是妖界的中流砥柱。',
        traits: ['重视传统', '讲究秩序', '家族至上', '实力雄厚']
    },
    {
        id: 'tieshan', type: 'ESFJ', name: '铁扇公主',
        image: 'images/铁扇公主.png',
        description: '极度护短，重视家庭和邻里关系的管理者。你热心肠，善于维护关系，是大家公认的好邻居和好妻子。',
        traits: ['极度护短', '重视家庭', '热心肠', '善于社交']
    },
    {
        id: 'jinjiaodawang', type: 'ISTP', name: '金角大王',
        image: 'images/金角大王.png',
        description: '动手能力极强，沉迷于法宝技术的实战派。你喜欢拆解和研究事物的运作原理，享受动手解决问题的过程。',
        traits: ['动手能力强', '沉迷技术', '冷静务实', '享受实战']
    },
    {
        id: 'huangpaoguai', type: 'ISFP', name: '黄袍怪',
        image: 'images/黄袍怪.png',
        description: '浪漫、感性，为了爱情可以抛弃一切的冒险家。你追求美和情感的极致体验，活在当下。',
        traits: ['浪漫感性', '为爱痴狂', '追求美感', '活在当下']
    },
    {
        id: 'honghaier', type: 'ESTP', name: '红孩儿',
        image: 'images/红孩儿.png',
        description: '胆大妄为，追求刺激，行动力爆表的"混世魔王"。你天不怕地不怕，喜欢冒险，做事风风火火。',
        traits: ['胆大妄为', '追求刺激', '行动力强', '天不怕地不怕']
    },
    {
        id: 'yutujing', type: 'ESFP', name: '玉兔精',
        image: 'images/玉兔精.png',
        description: '活泼好动，渴望成为焦点，享受人间繁华的表演者。你热爱舞台，善于展示自己，是天生的社交达人。',
        traits: ['活泼好动', '渴望焦点', '享受繁华', '天生表演者']
    }
];

const questions = [
    { text: '在妖怪大会上，我更喜欢站在舞台中央接受众妖欢呼，而不是躲在角落喝酒。', dimension: 'EI', direction: 'E' },
    { text: '相比于统领成千上万的小妖，我更享受独自在洞府深处钻研法术或法宝。', dimension: 'EI', direction: 'I' },
    { text: '如果要抓唐僧，我倾向于大张旗鼓地去挑战，而不是潜伏在暗处等待时机。', dimension: 'EI', direction: 'E' },
    { text: '即使没有社交活动（比如巡山、串门），我也能一个人在洞里待上好几年不觉得闷。', dimension: 'EI', direction: 'I' },
    { text: '我更看重唐僧肉带来的"长生不老"这个实际结果，而不是它背后的宗教意义。', dimension: 'SN', direction: 'S' },
    { text: '我经常会幻想如果我取代了玉帝或如来，整个三界会变成什么样子。', dimension: 'SN', direction: 'N' },
    { text: '在战斗中，我更相信自己多年积累的实战经验，而不是那些玄而又玄的预言或阵法。', dimension: 'SN', direction: 'S' },
    { text: '我对洞府的装修更看重它的防御力和舒适度，而不是它是否具有某种艺术美感。', dimension: 'SN', direction: 'S' },
    { text: '如果一个小妖因为家里有急事而耽误了巡山，我会因为同情他而免去惩罚。', dimension: 'TF', direction: 'F' },
    { text: '在决定是否吃唐僧肉时，我会冷静分析风险收益比，而不是看我当时的心情。', dimension: 'TF', direction: 'T' },
    { text: '我认为在妖界生存，强大的逻辑和策略比虚无缥缈的"义气"更重要。', dimension: 'TF', direction: 'T' },
    { text: '我很容易被对手的悲惨身世所打动，甚至可能因此放他们一马。', dimension: 'TF', direction: 'F' },
    { text: '在唐僧到达我的地盘之前，我已经制定好了详细的抓捕和防范孙悟空的计划。', dimension: 'JP', direction: 'J' },
    { text: '我喜欢随遇而安，如果唐僧来了就抓，抓不到就换个乐子，没必要非得有个结果。', dimension: 'JP', direction: 'P' },
    { text: '我的洞府总是井井有条，每件法宝和物资都有它固定的位置。', dimension: 'JP', direction: 'J' }
];