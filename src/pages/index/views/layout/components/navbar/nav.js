export default [
    {
        id: 1,
        name: '女巫魔法',
        children: [],
        // children: [
        //     { name: '水晶', link: '' },
        //     { name: '饰品', link: '' },
        //     { name: '家居香氛', link: '' },
        //     { name: '许愿瓶', link: '' },
        //     { name: '精油', link: '' },
        // ],
    },
    {
        id: 2,
        name: '魔法首饰',
        children: [],
        // children: [
        //     { name: '彩妆', link: '' },
        //     { name: '护肤品', link: '' },
        //     { name: '食品', link: '' },
        //     { name: '工具', link: '' },
        // ],
    },
    {
        id: 3,
        name: '灵气水晶',
        children: [],
        // children: [
        //     { name: '水晶', link: '' },
        //     { name: '饰品', link: '' },
        //     { name: '家居香氛', link: '' },
        //     { name: '许愿瓶', link: '' },
        //     { name: '精油', link: '' },
        // ],
    },
    {
        name: '仪式占卜',
        children: [
            { name: '女巫圣火灵气转运', path: '/ritual/zhuanyun' },
            { name: '独家魔法仪式', path: '/ritual/mofa' },
            { name: '通灵星光体占卜', path: '/ritual/zhanbu' },
        ],
    },
    {
        id: 4,
        name: '魔法周边',
        children: [],
        // children: [
        //     { name: '水晶', link: '' },
        //     { name: '饰品', link: '' },
        //     { name: '家居香氛', link: '' },
        //     { name: '许愿瓶', link: '' },
        //     { name: '精油', link: '' },
        // ],
    },
    {
        name: '课程',
        children: [
            { name: '学员', path: '/course/student' },
            { name: '灵气课程', path: '/course/lingqi' },
            { name: '通灵课程', path: '/course/tongling' },
        ],
        // children: [
        //     { name: '灵气课', link: '' },
        //     { name: '通灵课', link: '' },
        //     { name: '草药学课', link: '' },
        //     { name: '美容魔法课', link: '' },
        // ],
    },
    {
        name: '品牌故事',
        path: '/story',
    },
];
