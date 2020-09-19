# 剑指Offer

Tags: 数据结构/算法, 面试
修改日期: Sep 20, 2020 12:30 AM
创建时间: Jul 29, 2020 8:51 PM

[zhedahht/CodingInterviewChinese2](https://github.com/zhedahht/CodingInterviewChinese2)

# 面试流程

## 编程习惯

- 思考清楚再开始编码
- 良好的代码命名和缩进对齐习惯
- 能够进行单元测试

    测试在前、开发在后的程序员少

## 调试

- 断点调试
- 单步跟踪
- 查看内存
- 分析调用栈

## 准备好几个问题

每一轮面试的最后面，面试官都会让应聘者问几个问题，主要是想了解他最关心的问题有哪些，因此应聘者至少要问一两个问题，否则面试官会认为应聘者对公司、职位都不感兴趣。如果问题问得合适，这对应聘者来说是个加分的好机会

## 项目经验

`STAR` 模型

- `Situation` 简短的项目背景
- `Task` 自己完成的任务

    注意“参与”和“负责”

- `Action` 为了完成自己的任务做了哪些工作，是怎么做的

    做系统设计可以介绍系统架构的特点

    做软件开发可以写基于什么工具在哪个平台下应用了哪些技术

    做软件测试可以写是手工测试还是自动化测试、是白盒测试还是黑盒测试

- `Result` 自己的贡献

    写具体，最好用数字加以说明

    如果参与功能开发，可以说按时完成了多少功能

    如果做优化可以说性能提高的百分比是多少

    如果是维护可以说修改了多少个 bug

面试官可能会问

- 在项目中遇到的最大的问题和解决的方法
- 从项目中学习的东西
- 什么时候和其他团队成员有什么样的冲突，最后是如何解决冲突的

## 掌握技能

- 了解：对某项技术只是上过课或者看过书，但没有做过实际的项目；不建议在简历中列出只是肤浅地了解一点的技能
- 熟悉：在实际项目中使用某项技术已经有较长的时间，通过查询相关的文档可以独立解决大部分问题
- 精通：对一项技术使用得心应手，在项目开发过程中，当同学或同事向我们请教这个领域的问题时，我们有能力解决；不要轻易在简历中使用“精通”

## 技术面

关注应聘者的 5 种素质

- 扎实的基础知识

    编程语言、数据结构和算法

    - 一到两门编程语言
    - 熟练掌握`链表`、`树`、`栈`、`队列`和`哈希表`等数据结构，以及它们的操作。很多大公司的面试官喜欢问链表和二叉树相关的问题
    - 查找、排序等算法，在了解各种查找和排序算法的基础上重点掌握`二分查找`、`归并排序`和`快速排序`，很多面试题只是这些算法的变体
- 能写高质量的代码

    鲁棒、稳定

    面试官会格外关注`边界条件`、`特殊输入`等

    越是简单的问题面试官的期望会越高，希望应聘者能在完整地解决问题，比如考虑到各种特殊的输入，如何做错误处理

    面试官不能忍受的是程序不够鲁棒，比如输入一个字符程序就崩溃

    在动手写代码之前先想好测试用例

- 分析问题时思路清晰

    对于很复杂的问题面试官是不期待应聘者能在面试时间内给出完整的答案，他看重的是应聘者是否有清晰的思路

    几个简单的方法理清思路

    - 举几个简单的例子理解问题
    - 用图形表示抽象的数据结构
    - 把 复杂的问题分解成若干简单子问题
- 能优化时间效率和空间效率

    面试官提示有更好的解法的时候，要寻找在时间消耗或者空间消耗上可以优化的地方

    - 首先要知道如何分析效率
    - 要熟知各种数据结构的优缺点，并能选择合适的数据结构解决问题
    - 熟练掌握常用的算法，最常用的算法是查找和排序
- 学习沟通等各方面的能力

    在介绍项目经验或者算法思路时是否观点明确、逻辑清晰

    询问最近在看什么书、从中学到了哪些新技术

    抛出一个新概念，看应聘者能不能在较短时间里理解新概念并解决相关的问题

    知识迁移能力

    抽象建模能力和发散思维能力

## 应聘者提问

不要问和自己的职位没有关系的问题

不要问薪水，之后和HR谈

不要打听面试结果，问了也白问，还会让面试官觉得你没有自我评估能力

推荐问与应聘的职位或者项目相关的问题

# 基础知识

## 编程语言

- C++

    应该在一定程度上掌握C++（*感觉没必要*）

## 数据结构

大多数面试题围绕着`数组`、`字符串`、`链表`、`树`、`栈`及`队列`这几种常见的数据结构展开的，要熟练掌握这几种

链表和树面试中出现频率最高的数据结构，操作链表和树要操作大量指针，所以一定要注意代码的鲁棒性

栈是一个与递归紧密相关的数据结构，队列与广度优先遍历算法紧密相关，深刻理解这两种数据结构能帮我们解决很多算法问题

- 数组

    时间效率高，空间效率不好

    根据时间效率高可以用数组实现简单哈希表

    为了解决空间效率不高的问题，人们有设计了动态数组

    每一次扩充数组容量时都要大量额外操作，对时间性能可能有负面影响，因此使用动态数组时要尽量减少改变数组容量大小的次数

    在 32 位系统上对任意指针求 sizeof，得到的结果都是 4，在 C/C++ 中，当数组作为参数进行传递时，数组就自动退化为同类型的指针

[数组中重复数字](https://leetcode-cn.com/problems/shu-zu-zhong-zhong-fu-de-shu-zi-lcof)

[二维数组中的查找](https://leetcode-cn.com/problems/er-wei-shu-zu-zhong-de-cha-zhao-lcof)

- 字符串

    [替换空格](https://leetcode-cn.com/problems/ti-huan-kong-ge-lcof)

- 链表

    [从尾到头打印链表](https://leetcode-cn.com/problems/cong-wei-dao-tou-da-yin-lian-biao-lcof)

- 树

    [重建二叉树](https://leetcode-cn.com/problems/zhong-jian-er-cha-shu-lcof)

- 栈和队列

    [用两个栈实现队列](https://leetcode-cn.com/problems/yong-liang-ge-zhan-shi-xian-dui-lie-lcof)

## 算法和数据操作

- 递归和循环

    [斐波那契数列](https://leetcode-cn.com/problems/fei-bo-na-qi-shu-lie-lcof)

    [青蛙跳台阶问题](https://leetcode-cn.com/problems/qing-wa-tiao-tai-jie-wen-ti-lcof)

- 查找和排序

    [旋转数组的最小数字](https://leetcode-cn.com/problems/xuan-zhuan-shu-zu-de-zui-xiao-shu-zi-lcof)

- 回溯法

    [矩阵中的路径](https://leetcode-cn.com/problems/ju-zhen-zhong-de-lu-jing-lcof)

    [机器人的运动范围](https://leetcode-cn.com/problems/ji-qi-ren-de-yun-dong-fan-wei-lcof)

- 动态规划和贪婪算法
    - 动态规划

        [剪绳子](https://leetcode-cn.com/problems/jian-sheng-zi-lcof)

    - 贪婪算法

        [剪绳子 II](https://leetcode-cn.com/problems/jian-sheng-zi-ii-lcof)

- 位运算

    [二进制中1的个数](https://leetcode-cn.com/problems/er-jin-zhi-zhong-1de-ge-shu-lcof)

# 高质量的代码

## 代码的规范性

影响代码规范性的因素：书写、布局、命名

- 书写（现在视频面试都是直接再电脑编辑器上写？）

    **理清思路**再开始写，如果是手写也不要慌，会有足够的事件写，慢慢写把字都写清楚

- 布局

    手写的话要注意缩进

- 命名

    命名要表达清楚你的意图，不要简单用i、j、k、m、n之流，让面试官能方便读懂

## 代码的完整性

- 从 3 个方面确保代码的完整性
    - 功能测试

        普通功能测试的基本用例，这个肯定都能想到，但是要尽量突破常规思维的限制

    - 边界测试

        循环结束的条件、递归终止的边界值

    - 负面测试

        各种可能的错误输入，对错误的输入进行合适的错误处理

    体现自己对程序的可扩展性和可维护性的理解

- 3 种错误处理的方法

    [3 种错误处理的方法](%E5%89%91%E6%8C%87Offer%2091e0d00492e74d1e96d6a4b88fd9c520/3%20%E7%A7%8D%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86%E7%9A%84%E6%96%B9%E6%B3%95%20a29961e79b77424bb38e54c3d2010111.csv)

    [数值的整数次方](https://leetcode-cn.com/problems/shu-zhi-de-zheng-shu-ci-fang-lcof)

    [打印从1到最大的n位数](https://leetcode-cn.com/problems/da-yin-cong-1dao-zui-da-de-nwei-shu-lcof)

## 代码的鲁棒性

- 容错性

    输入了不正确、不规范的数据程序要做出反应，而不是出现诡异的行为，或者干脆直接崩溃

- 防御性编程

    预见在什么地方可能会出现的问题，并为这些可能出现的问题制定处理方式

- 隐藏条件

    比如，“链表中倒数第 k 个节点”，链表中的节点数要大于 k，如果不是大于 k 要做处理

    [链表中倒数第k个节点](https://leetcode-cn.com/problems/lian-biao-zhong-dao-shu-di-kge-jie-dian-lcof)

- 由第三点引申，用一个指针遍历链表不能解决问题时，可以尝试用两个指针遍历链表
    - [反转链表](https://leetcode-cn.com/problems/fan-zhuan-lian-biao-lcof)
    - [合并两个排序的链表](https://leetcode-cn.com/problems/he-bing-liang-ge-pai-xu-de-lian-biao-lcof)
    - [树的子结构](https://leetcode-cn.com/problems/shu-de-zi-jie-gou-lcof)

# 解决面试题的思路

## 画图让抽象问题形象化

- [二叉树的镜像](https://leetcode-cn.com/problems/er-cha-shu-de-jing-xiang-lcof)
- [对称的二叉树](https://leetcode-cn.com/problems/dui-cheng-de-er-cha-shu-lcof)
- [顺时针打印矩阵](https://leetcode-cn.com/problems/shun-shi-zhen-da-yin-ju-zhen-lcof)

## 举例让抽象问题具体化

- [包含min函数的栈](https://leetcode-cn.com/problems/bao-han-minhan-shu-de-zhan-lcof)
- [栈的压入、弹出序列](https://leetcode-cn.com/problems/zhan-de-ya-ru-dan-chu-xu-lie-lcof)
- [从上到下打印二叉树](https://leetcode-cn.com/problems/cong-shang-dao-xia-da-yin-er-cha-shu-lcof)
- 上面一题的延伸
    - [从上到下打印二叉树 II](https://leetcode-cn.com/problems/cong-shang-dao-xia-da-yin-er-cha-shu-ii-lcof)
    - [从上到下打印二叉树 III](https://leetcode-cn.com/problems/cong-shang-dao-xia-da-yin-er-cha-shu-iii-lcof)
- [二叉搜索树的后序遍历序列](https://leetcode-cn.com/problems/er-cha-sou-suo-shu-de-hou-xu-bian-li-xu-lie-lcof)
- 上一题的拓展
    - [二叉树中和为某一值的路径](https://leetcode-cn.com/problems/er-cha-shu-zhong-he-wei-mou-yi-zhi-de-lu-jing-lcof)

## 分解让复杂问题简单化

- 可以按照解决问题的步骤来分解复杂问题，每一步解决一个小问题
- [复杂链表的复制](https://leetcode-cn.com/problems/fu-za-lian-biao-de-fu-zhi-lcof)
- [二叉搜索树与双向链表](https://leetcode-cn.com/problems/er-cha-sou-suo-shu-yu-shuang-xiang-lian-biao-lcof)
- [序列化二叉树](https://leetcode-cn.com/problems/xu-lie-hua-er-cha-shu-lcof)
- [字符串的排列](https://leetcode-cn.com/problems/zi-fu-chuan-de-pai-lie-lcof)

# 优化时间和空间效率

## 时间效率

- 编程习惯对代码的时间效率有很大影响

    比如采用值传递的方式，则从形参到实参会产生一次复制操作，这样的复制操作是多无的，应该尽量避免

- 同一个算法用循环和递归两种思路实现的时间效率可能会大不一样
- 代码效率跟队数据结构和算法的掌握程度很大关系的
- 面试的时候要展示敏捷的思维能力和追求完美的激情
- [数组中出现次数超过一半的数字](https://leetcode-cn.com/problems/shu-zu-zhong-chu-xian-ci-shu-chao-guo-yi-ban-de-shu-zi-lcof)
- [数据流中的中位数](https://leetcode-cn.com/problems/shu-ju-liu-zhong-de-zhong-wei-shu-lcof)
- [连续子数组的最大和](https://leetcode-cn.com/problems/lian-xu-zi-shu-zu-de-zui-da-he-lcof)
- [1~n整数中1出现的次数](https://leetcode-cn.com/problems/1nzheng-shu-zhong-1chu-xian-de-ci-shu-lcof)
- [数字序列中某一位的数字](https://leetcode-cn.com/problems/shu-zi-xu-lie-zhong-mou-yi-wei-de-shu-zi-lcof)
- [把数组排成最小的数](https://leetcode-cn.com/problems/ba-shu-zu-pai-cheng-zui-xiao-de-shu-lcof)
- [把数字翻译成字符串](https://leetcode-cn.com/problems/ba-shu-zi-fan-yi-cheng-zi-fu-chuan-lcof)
- [礼物的最大价值](https://leetcode-cn.com/problems/li-wu-de-zui-da-jie-zhi-lcof)
- [最长不含重复字符的子字符串](https://leetcode-cn.com/problems/zui-chang-bu-han-zhong-fu-zi-fu-de-zi-zi-fu-chuan-lcof)

## 时间效率与空间效率的平衡

- 在软件开发的过程中运行以牺牲一定的空间为代价来优化时间性能，以尽可能地缩短软件的响应时间。这就是**以空间换时间**
- 以空间换时间的策略不一定都是可行的，面试的时候要根据具体问题具体分析
- 可以和面试官讨论是*以空间换时间*还是*以时间换空间*，既能显示沟通能力又能显示对软件性能全方位的把我能力
- [丑数](https://leetcode-cn.com/problems/chou-shu-lcof)
- [第一个只出现一次的字符](https://leetcode-cn.com/problems/di-yi-ge-zhi-chu-xian-yi-ci-de-zi-fu-lcof)
- [数组中的逆序对](https://leetcode-cn.com/problems/shu-zu-zhong-de-ni-xu-dui-lcof)
- [两个链表的第一个公共节点](https://leetcode-cn.com/problems/liang-ge-lian-biao-de-di-yi-ge-gong-gong-jie-dian-lcof)

# 面试中的各项能力

## 沟通能力和学习能力

### 沟通能力

- 无论是介绍项目经验还是介绍解题思路的时候，都需要逻辑清晰明了，语言详略得当，表述的时候重点突出、观点明确
- 对于不清楚的知识点要用于承认

### 学习能力

面试官有两种考查应聘者的学习能力

- 询问应聘者最近在看什么书或者在做什么项目、从中学到了哪些新技术
- 抛出一个新概念，观察应聘者能不能在较短的时间内理解这个新概念并解决相关问题，当面试官提出这些新概念的时候，他期待应聘者能够通过思考、提问、再思考的过程，理解它们并最终解决问题

### 善于学习、沟通的人也善于提问

在面试过程中遇到不明白的地方多提问

## 知识迁移能力

- 面试官考查应聘者知识迁移能力的一种方法就是把经典的问题稍作变换，这时候他期待应聘者能够找到和经典题的联系，并从中得到启发，把解决经典问题的思路迁移过来解决新的问题
- 另一种方法是先问一个简单的问题，在应聘者解答完这个简单的问题之后再追问一个相关的同时难度也更大的问题，这时候他希望应聘者能够总结前面解决简单问题的经验，把前面的思路、方法迁移过来

- [在排序数组中查找数字](https://leetcode-cn.com/problems/zai-pai-xu-shu-zu-zhong-cha-zhao-shu-zi-lcof)
- [0~n-1中缺失的数字](https://leetcode-cn.com/problems/que-shi-de-shu-zi-lcof)
- [二叉搜索树的第K大节点](https://leetcode-cn.com/problems/er-cha-sou-suo-shu-de-di-kda-jie-dian-lcof)
- [二叉树的深度](https://leetcode-cn.com/problems/er-cha-shu-de-shen-du-lcof)
- [平衡二叉树](https://leetcode-cn.com/problems/ping-heng-er-cha-shu-lcof)
- [数组中数字出现的次数](https://leetcode-cn.com/problems/shu-zu-zhong-shu-zi-chu-xian-de-ci-shu-lcof)
- [数组中数字出现的次数2](https://leetcode-cn.com/problems/shu-zu-zhong-shu-zi-chu-xian-de-ci-shu-ii-lcof)
- [和为s的两个数字](https://leetcode-cn.com/problems/he-wei-sde-liang-ge-shu-zi-lcof)
- [和为s的连续正数序列](https://leetcode-cn.com/problems/he-wei-sde-lian-xu-zheng-shu-xu-lie-lcof)
- [翻转单词顺序](https://leetcode-cn.com/problems/fan-zhuan-dan-ci-shun-xu-lcof)
- [左旋转字符串](https://leetcode-cn.com/problems/zuo-xuan-zhuan-zi-fu-chuan-lcof)
- [滑动窗口的最大值](https://leetcode-cn.com/problems/hua-dong-chuang-kou-de-zui-da-zhi-lcof)
- [队列的最大值](https://leetcode-cn.com/problems/dui-lie-de-zui-da-zhi-lcof)

## 抽象建模能力

有些面试官喜欢从日初长生活中抽取提炼出问题考查应聘者是否能建立数学模型并解决问题

建模的第一步是选择合理的数据结构来表述问题

建模的第二部是分析模型中的内在规律，并用编程语言表述这种规律，只有对现实问题进行深入细致的观察分析之后，才能找到模型中的规律，才有可能编程解决问题

- [n个骰子的点数](https://leetcode-cn.com/problems/nge-tou-zi-de-dian-shu-lcof)
- [扑克牌中的顺子](https://leetcode-cn.com/problems/bu-ke-pai-zhong-de-shun-zi-lcof)
- [圆圈中最后剩下的数字](https://leetcode-cn.com/problems/yuan-quan-zhong-zui-hou-sheng-xia-de-shu-zi-lcof)
- [股票的最大利润](https://leetcode-cn.com/problems/gu-piao-de-zui-da-li-run-lcof)

## 发散思维能力

发散思维的特点是思维活动的多向性和变通性，也就是我们在思考问题时注重运用多思路、多方案、多途径来解决问题

面试时面试官故意限制应聘者不能使用常规的思路，此时他在观察应聘者有没有积极的心态，是不是能够主动跳出常规思维的束缚从多角度去思考问题

通过考查发散思维能力，面试官能够了解应聘者的灵活性和变通性

面试实际上是一个厚积薄发的过程，在遇到问题之后，应聘者如果具有宽泛的知识面并且对各领域有较深的理解，那么他就更容易从不同的角度去思考问题

- [求1+2+…+n](https://leetcode-cn.com/problems/qiu-12n-lcof)
- [不用加减乘除做加法](https://leetcode-cn.com/problems/bu-yong-jia-jian-cheng-chu-zuo-jia-fa-lcof)
- [构建乘积数组](https://leetcode-cn.com/problems/gou-jian-cheng-ji-shu-zu-lcof)

# 两个面试案例

在第1章中，我们讨论了面试的流程通常一轮面试是从面试官对照简历了解应聘者的项目经历及掌握的技能开始的。在介绍自己的项目经历时，应聘者可以参照STAR模型，着重介绍自己完成的工作（包括基于什么平台、用了哪些技术、实现了哪些算法等）以及最终对项目组的贡献

接着进入重头戏——技术面试环节。在这一环节中，面试官会从编程语言、数据结构和算法等方面考查应聘者的基础知识是否扎实全面（详见第2章），并且很有可能会要求应聘者编程实现一两个函数。如果碰到的面试题很简单，则应聘者也不能掉以轻心，一定要从基本功能、边界条件和错误处理等方面确保代码的完整性和鲁棒性（详见第3章）。如果碰到的题目很难，则应聘者可以尝试画图让抽象的问题变得形象化，也可以尝试举几个具体的例子去分析隐含的规律，还可以尝试把大的问题分解成两个或者多个小问题再递归地解决小问题。这3种方法能够帮助应聘者形成清晰的思路，从而解决复杂的难题（详见第4章）。很多面试题都不止一种解决方案，应聘者可以从时间复杂度和空间复杂度两个方面选择最优的解法（详见第5章）。在面试过程中，面试官除了关注应聘者的编程能力，还会关注应聘者的沟通能力和学习能力，并有可能考查应聘者的知识迁移能力、抽象建模能力和发散思维能力（详见第6章）

在面试结束前的几分钟，面试官会给应聘者机会问几个最感兴趣的问题。应聘者可以从当前招聘的项目及其团队等方面提出几个问题。不建议应聘者在技术面试的时候向面试官询问薪资情况，或者立即打听面试结果。

- [把字符串转换成整数](https://leetcode-cn.com/problems/ba-zi-fu-chuan-zhuan-huan-cheng-zheng-shu-lcof)
- [二叉搜索树的最低公共祖先](https://leetcode-cn.com/problems/er-cha-sou-suo-shu-de-zui-jin-gong-gong-zu-xian-lcof)
- [二叉树的最低公共祖先](https://leetcode-cn.com/problems/er-cha-shu-de-zui-jin-gong-gong-zu-xian-lcof)