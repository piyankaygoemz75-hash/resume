/* ========================================
   Main JS - Language Toggle, Nav, Reveal, Form
   ======================================== */

// --- i18n Dictionary ---
const i18n = {
  zh: {
    'nav.home': '首页',
    'nav.about': '关于我',
    'nav.skills': '技能',
    'nav.experience': '经历',
    'nav.contact': '联系',
    'brand.sub': '· 简历',
    'hero.greeting': '你好，我是',
    'hero.name': '谢泳清',
    'hero.title': '会计助理 / 审计 / 财务岗 / 管培生',
    'hero.tagline': '哈尔滨商业大学会计学（智能会计）应届毕业生。扎实的财务基础与数据分析能力，会计师事务所与企业的双重实习经历。致力于用精确与洞察为企业创造财务价值。',
    'hero.btn.contact': '联系我',
    'hero.btn.about': '了解更多',
    'hero.stat1': '段实习经历',
    'hero.stat2': '处理凭证',
    'hero.stat3': '原始凭证与账簿',
    'hero.bio': '哈尔滨商业大学会计学专业应届毕业生。<br>用数据驱动财务洞察，用细节守护审计质量。',
    'home.why.tag': '为什么选择我',
    'home.why.title': '核心优势',
    'home.why.v1.title': '财务 + 数据双能力',
    'home.why.v1.desc': '不仅懂账务处理，还能用 SQL、Power BI 进行数据分析，让财务数据产生业务价值。',
    'home.why.v2.title': '事务所 + 企业双重经验',
    'home.why.v2.desc': '容诚会计师事务所审计实习 + 北京通达商贸财务实习，甲方乙方视角兼备。',
    'home.why.v3.title': '国家级竞赛特等奖',
    'home.why.v3.desc': '浪潮铸远智慧企业大数据分析大赛国奖，实战验证财务数据分析与报表编制能力。',
    'home.why.v4.title': '严谨细致 + 抗压',
    'home.why.v4.desc': '审计实习中核查 200+ 合同发现 30+ 不符，用证据说话，责任心驱动。',
    'home.nav.tag': '了解更多',
    'home.nav.title': '详细了解我',
    'home.nav.about.desc': '教育背景 · 基本信息 · 自我介绍',
    'home.nav.skills.desc': '财务工具 · 数据分析 · 证书资质',
    'home.nav.experience.desc': '工作实习 · 校园实践 · 获奖荣誉',
    'home.nav.contact.desc': '联系方式 · 留言 · 期待沟通',
    'home.about.title': '关于我',
    'home.about.card1.title': '教育背景',
    'home.about.card1.desc': '哈尔滨商业大学 · 会计学（智能会计）本科，GPA 均分 83.7',
    'home.about.card1.link': '查看详情 →',
    'home.about.card2.title': '自我介绍',
    'home.about.card2.desc': '掌握财务会计、财务分析与成本控制专业知识，具备数据处理与大数据分析能力，责任心强、善于沟通，团队协作经验丰富。',
    'home.about.card2.link': '了解更多 →',
    'home.about.card3.title': '求职意向',
    'home.about.card3.desc': '会计助理 · 审计 · 财务岗 · 管培生',
    'home.about.card3.link': '联系我 →',
    'home.skills.tag': '核心能力',
    'home.skills.title': '专业技能',
    'home.exp.tag': '实践经历',
    'home.exp.title': '工作与项目',
    'about.tag': 'About',
    'about.title': '关于我',
    'about.subtitle': '基础信息 / 教育背景 / 自我介绍',
    'about.basic': '基本信息',
    'about.name': '姓名',
    'about.dob': '生日',
    'about.location': '所在地',
    'about.phone': '电话',
    'about.email': '邮箱',
    'about.target': '求职意向',
    'about.edu': '教育背景',
    'about.edu.date': '2022 – 2026',
    'about.edu.school': '哈尔滨商业大学',
    'about.edu.major': '会计学（智能会计）本科',
    'about.edu.gpa': 'GPA 均分 83.7',
    'about.edu.courses': '主修课程',
    'about.self': '自我介绍',
    'about.self.1': '掌握财务会计、财务分析、成本控制等方面的专业知识，了解相关会计制度与法规。',
    'about.self.2': '具备数据处理能力，曾用 SPSS、SQL 等进行财务数据处理，能够运用大数据进行财务分析和报表编制。',
    'about.self.3': '拥有较强的责任心，具有良好的沟通能力。性格乐观开朗，抗压能力强，愿意自主学习提升相关技能。团队合作协调能力强，多次获得优秀志愿者称号。',
    'skills.tag': 'Skills',
    'skills.title': '专业技能',
    'skills.subtitle': '财务工具 / 数据分析 / 证书资质',
    'skills.accounting': '财务工具',
    'skills.data': '数据分析',
    'skills.cert': '证书资质',
    'skills.ufida': '用友U8',
    'skills.kingdee': '金蝶',
    'skills.excel': 'Excel/WPS',
    'skills.office': 'Office 办公套件',
    'skills.sql': 'SQL',
    'skills.powerbi': 'Power BI',
    'skills.spss': 'SPSS',
    'skills.python': 'Python',
    'skills.cet6': 'CET-6 英语六级',
    'skills.cet6.score': '466分',
    'skills.accounting.cert': '会计从业资格证',
    'skills.junior.cert': '会计初级证书',
    'skills.bda': 'BDA 中级数据分析师',
    'exp.tag': 'Experience',
    'exp.title': '实践经历',
    'exp.subtitle': '工作实习 / 校园实践 / 获奖荣誉',
    'exp.work': '工作经历',
    'exp.campus': '校园实践',
    'exp.awards': '获奖荣誉',
    'exp.job1.title': '会计助理',
    'exp.job1.org': '禹州市申通物流服务有限公司',
    'exp.job1.date': '2026.03 – 2026.04',
    'exp.job1.d1': '操作用友U8系统完成日常凭证填制、审核与记账及结账流程，累计处理业务凭证 200 余张，确保财务准确率 100%。',
    'exp.job1.d2': '通过用友报表系统自定义资产负债表与利润表模板，验证数据勾稽关系及准确性，将报表生成时间缩短 30%，为财务决策提供依据。',
    'exp.job1.d3': '负责薪资管理及固定资产模块的协同操作，完成工资计提发放、资产增减变动与折旧账务处理等。',
    'exp.job1.d4': '匹配跨表格信息，运用 SUM 函数汇总明细数据，减少人工计算误差。',
    'exp.job2.title': '审计实习生',
    'exp.job2.org': '容诚会计师事务所',
    'exp.job2.date': '2026.04 – 2026.05',
    'exp.job2.d1': '参与对被审计单位客户的实地访谈与现场核查，实地采访企业 16 家，记录关键业务流程及内部控制执行情况，协助识别潜在风险点。',
    'exp.job2.d2': '重点核查贷款合同、抵押担保协议 200+ 份，核对合同与实际执行情况的一致性，发现 30+ 处合同与资料不符。',
    'exp.job2.d3': '配合高级审计师整理审计底稿数据，运用 VLOOKUP 函数完成跨表数据匹配与核对。',
    'exp.campus1.title': '浪潮铸远智慧企业大数据分析大赛',
    'exp.campus1.award': '国家级特等奖',
    'exp.campus1.date': '2024.11',
    'exp.campus1.desc': '负责银行回单整理与凭证制作，通过SQL系统完成总账、明细账及三大报表的编制。利用SQL、PowerBI进行财务数据清洗、转化与可视化分析，提升数据处理效率约30%。',
    'exp.campus2.title': '黑龙江浪潮信息科技有限公司 — 财务共享中心实践经历',
    'exp.campus2.date': '2025.05',
    'exp.campus2.d1': '独立完成凭证审核、账簿登记及期末结账的全流程，累计处理 500+ 原始凭证与账簿。',
    'exp.campus2.d2': '模拟计算增值税、企业所得税及个人所得税应纳税额，完成纳税申报操作。',
    'exp.campus2.d3': '运用品种法/分批法核算产品成本，拆解材料、人工、制造费用组成，撰写成本分析报告。',
    'exp.award1.title': '大学生创新创业大赛',
    'exp.award1.level': '校级奖',
    'exp.award2.title': '企业税务技能大赛',
    'exp.award2.level': '优异成绩',
    'exp.award3.title': '优秀志愿者',
    'exp.award3.level': '多次获得',
    'contact.tag': 'Contact',
    'contact.title': '联系我',
    'contact.subtitle': '期待与您的沟通',
    'contact.name': '姓名',
    'contact.name.ph': '请输入您的姓名',
    'contact.email': '邮箱',
    'contact.email.ph': '请输入您的邮箱',
    'contact.msg': '留言',
    'contact.msg.ph': '请输入您的留言内容...',
    'contact.submit': '发送留言',
    'contact.email.label': '邮箱地址',
    'contact.phone.label': '联系电话',
    'contact.location.label': '所在地',
    'contact.success': '留言发送成功！我会尽快回复您。',
    // SPA index.html keys
    'nav.about2': '关于我', 'nav.edu2': '教育背景', 'nav.exp2': '工作与实践', 'nav.skills2': '技能特长', 'nav.proj2': '学习与探索',
    'hero.greet': 'Hi, 我是谢泳清',
    'hero.role': 'Accounting Professional & Intelligent Accounting',
    'hero.bio2': '一个左手翻凭证、右手敲SQL的财会人 🖐️<br>在哈尔滨商业大学的四年里，我把Excel玩成了艺术品，让Power BI画出会讲故事的数据图表。<br>去过容诚会计师事务所翻遍200+份合同揪出30+个"小辫子"，也在北京通达用U8系统把凭证处理得像流水线一样精准高效。<br>我相信——好的财务人不只是算账的，更是用数据帮企业做决策的军师。如果你也在找这样一个既懂借贷、又会写代码的"斜杠青年"，那我们聊聊吧 ✨',
    'about.download': '📄 下载简历', 'about.contact': '💬 联系我',
    'about.ai': '🤖 AI 岗位匹配器', 'about.jd.ph': '粘贴您的JD（职位描述），查看我与岗位之间的匹配度...',
    'about.match.btn': '开始匹配 →',
    'edu.title': '教育背景', 'edu.sub': 'Education',
    'edu.period': '2022 — 2026', 'edu.hint': '🔍 点击了解母校',
    'edu.school': '哈尔滨商业大学', 'edu.major': '会计学 · 智能会计方向（本科）',
    'edu.gpa': '📊 GPA：83.7 / 100', 'edu.courses': '📚 主修课程',
    'exp.title': '工作经历', 'exp.sub': 'Work & Practice',
    'exp.j1.name': '禹州市申通物流服务有限公司', 'exp.j1.role': '会计助理',
    'exp.j1.desc': '使用用友U8系统处理200+张业务凭证，编制财务报表，参与薪酬核算与固定资产管理',
    'exp.j2.name': '容诚会计师事务所', 'exp.j2.role': '审计实习生',
    'exp.j2.desc': '实地走访16家企业，核查200+份合同发现30+处异常，协助编制审计底稿',
    'exp.j3.name': '浪潮铸远智慧企业大数据分析大赛', 'exp.j3.role': '国家级特等奖',
    'exp.j3.desc': '通过SQL完成三大报表编制，运用Power BI进行财务数据可视化分析，效率提升30%',
    'exp.j4.name': '黑龙江浪潮信息科技有限公司', 'exp.j4.role': '财务共享中心实践经历',
    'exp.j4.desc': '完成全流程500+凭证处理，模拟税务申报，运用品种法/分批法撰写成本分析报告',
    'exp.hint': '点击查看详情 →',
    'skills.title': '技能特长', 'skills.sub': 'Skills & Expertise',
    'skills.prof': '💼 专业技能', 'skills.tools': '🛠 技术工具', 'skills.ai': '🤖 AI 工具应用',
    'skills.certs': '📜 证书与资格', 'skills.soft': '🌟 综合能力',
    'proj.title': '学习与探索', 'proj.sub': 'Learning & Discovery',
    'proj.growth': '📝 学习成长轨迹',
    'modal.close': '关闭', 'modal.contact': '💬 联系我',
    'modal.phone': '📞 拨打电话', 'modal.email': '✉️ 发送邮件',
    'modal.contact.hint': '或直接留言，我会尽快回复您：',
    'modal.name.ph': '您的姓名', 'modal.email.ph': '您的邮箱', 'modal.msg.ph': '留言内容...',
    'modal.send': '发送留言', 'modal.phone.label': '联系电话', 'modal.email.label': '邮箱地址',
    'edu.course.cost': '成本会计','edu.course.mgmt': '管理会计','edu.course.finance': '企业财务管理',
    'edu.course.practicum': '会计综合实训','edu.course.data_acct': '数据分析与会计',
    'edu.course.data_methods': '数据分析方法与应用','edu.course.smart_fin': '智能财务分析',
    'edu.course.logic': '逻辑学','edu.course.mgmt2': '管理学','edu.course.econ_law': '经济法',
    'edu.course.asset_val': '资产评估学','edu.course.audit': '审计学',
    'edu.course.micro': '微观经济学','edu.course.macro': '宏观经济学',
    'edu.course.sap': 'SAP系统学习与运用','edu.course.erp': 'ERP沙盘模拟',
    'footer.spa': '© 2026 谢泳清 · 个人简历 · 哈尔滨商业大学',
    'match.title': '📊 AI 岗位匹配报告', 'match.edu': '学历', 'match.exp': '工作经验',
    'match.skill': '技能匹配', 'match.soft': '综合素质',
    'match.hl': '★ 匹配亮点', 'match.sum': '📄 综合评估',
    'match.idle': '输入JD后自动分析...',
    'match.desc': '请在关于我页面输入职位描述，点击开始匹配查看分析结果。',
    'exp.detail.work1': '💼 工作经历详情', 'exp.detail.work2': '🔍 工作经历详情',
    'exp.detail.camp1': '🏆 校园实践详情', 'exp.detail.camp2': '🏢 校园实践详情',
    'exp.core.res': '核心职责', 'exp.core.result': '核心成果',
    'cert.detail1': '📗 证书详情', 'cert.detail2': '📊 证书详情', 'cert.detail3': '🌐 证书详情',
    'edu.modal.title': '🏫 哈尔滨商业大学','edu.modal.sub': 'HARBIN UNIVERSITY OF COMMERCE',
    'edu.modal.desc': '新中国第一所多科性商业大学',
    'edu.modal.founded': '始建于 <strong>1952年</strong>，黑龙江省重点建设的十所大学之一，入选中西部高校基础能力建设工程，国内一流学科建设高校。',
    'edu.modal.doctor': '博士授权单位','edu.modal.prov': '省属重点',
    'edu.modal.project': '中西部高校基础能力建设工程',
    'edu.modal.stat1': '一级学科博士点','edu.modal.stat2': '国家级一流本科专业',
    'edu.modal.stat3': '悠久办学历史','edu.modal.stat4': '累计培养人才',
    'edu.modal.intro': '哈尔滨商业大学是<strong>新中国第一所多科性商业大学</strong>，拥有完整的本-硕-博人才培养体系。学校秉承"<strong>求真至善，修德允能</strong>"的校训，以"一流的经管学科为主导，精干特色的工科为重点"的学科定位，培养了<strong>20余万名</strong>各类专业人才，被誉为"<strong>商业精英的摇篮</strong>"。',
    'edu.modal.achieve': '<strong>🏆 骄傲的商大印记：</strong>1959年研制出<strong>中国第一台食品机械——601型饺子机</strong>；1960年首创我国三大会计记账法之一"<strong>财产收付复式记账法</strong>"；会计学专业为<strong>国家级特色专业、国家级一流本科专业建设点</strong>；《商业研究》期刊为<strong>CSSCI来源期刊</strong>。学校在2024年入选<strong>黑龙江省首批数智教育重点校</strong>建设名单。',
    'edu.modal.title': '🏫 哈尔滨商业大学',
    'contact.phone.val': '15083593021', 'contact.email.val': 'xyq197@qq.com',
    'match.score': '/ 100',
    'footer': '© 2026 谢泳清 · 个人简历 | Designed with care',
  },
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.experience': 'Experience',
    'nav.contact': 'Contact',
    'brand.sub': '· Resume',
    'hero.greeting': 'Hello, I am',
    'hero.name': 'Yongqing Xie',
    'hero.title': 'Accounting Assistant / Audit / Finance / Trainee',
    'hero.tagline': 'Accounting (Intelligent Accounting) graduate from Harbin University of Commerce. Solid financial foundation and data analysis skills, with dual internship experience in accounting firms and enterprises. Committed to creating financial value through precision and insight.',
    'hero.btn.contact': 'Contact Me',
    'hero.btn.about': 'Learn More',
    'hero.stat1': 'Internships',
    'hero.stat2': 'Vouchers Processed',
    'hero.stat3': 'Source Documents',
    'hero.bio': 'Accounting graduate from Harbin University of Commerce.<br>Data-driven financial insight, detail-oriented audit quality.',
    'home.why.tag': 'Why Me',
    'home.why.title': 'Core Strengths',
    'home.why.v1.title': 'Finance + Data Dual Skills',
    'home.why.v1.desc': 'Beyond accounting — SQL and Power BI proficiency turns financial data into business value.',
    'home.why.v2.title': 'Firm + Corporate Experience',
    'home.why.v2.desc': 'Audit internship at Rongcheng CPA Firm plus corporate accounting at Beijing Tongda Trading — both sides of the table.',
    'home.why.v3.title': 'National Grand Prize Winner',
    'home.why.v3.desc': 'Third prize in Baicheng Yuantong Smart Enterprise Data Analysis Competition — proven data analysis capabilities.',
    'home.why.v4.title': 'Precision & Resilience',
    'home.why.v4.desc': 'Reviewed 200+ contracts during audit internship, identified 30+ discrepancies — evidence-driven, responsibility-focused.',
    'home.nav.tag': 'Explore',
    'home.nav.title': 'Get to Know Me',
    'home.nav.about.desc': 'Education · Personal Info · Bio',
    'home.nav.skills.desc': 'Financial Tools · Data Analysis · Certs',
    'home.nav.experience.desc': 'Internships · Campus · Awards',
    'home.nav.contact.desc': 'Contact Info · Message · Connect',
    'home.about.tag': 'Background',
    'home.about.title': 'About Me',
    'home.about.card1.title': 'Education',
    'home.about.card1.desc': 'Harbin University of Commerce · B.S. Accounting (Intelligent Accounting), GPA 83.7',
    'home.about.card1.link': 'View Details →',
    'home.about.card2.title': 'About Me',
    'home.about.card2.desc': 'Solid knowledge in financial accounting, analysis, and cost control. Experienced in data processing and big data analysis. Strong sense of responsibility, great communicator, proven team player.',
    'home.about.card2.link': 'Learn More →',
    'home.about.card3.title': 'Career Goal',
    'home.about.card3.desc': 'Accounting Assistant · Audit · Finance · Trainee',
    'home.about.card3.link': 'Contact Me →',
    'home.skills.tag': 'Core Skills',
    'home.skills.title': 'Skills',
    'home.exp.tag': 'Experience',
    'home.exp.title': 'Work & Projects',
    'about.tag': 'About',
    'about.title': 'About Me',
    'about.subtitle': 'Personal Info / Education / Bio',
    'about.basic': 'Basic Info',
    'about.name': 'Name',
    'about.dob': 'Birthday',
    'about.location': 'Location',
    'about.phone': 'Phone',
    'about.email': 'Email',
    'about.target': 'Career Goal',
    'about.edu': 'Education',
    'about.edu.date': '2022 – 2026',
    'about.edu.school': 'Harbin University of Commerce',
    'about.edu.major': 'B.S. Accounting (Intelligent Accounting)',
    'about.edu.gpa': 'GPA: 83.7 / 100',
    'about.edu.courses': 'Core Courses',
    'about.self': 'Bio',
    'about.self.1': 'Solid knowledge in financial accounting, financial analysis, and cost control. Familiar with relevant accounting systems and regulations.',
    'about.self.2': 'Experienced in data processing with SPSS and SQL for financial data analysis. Capable of leveraging big data for financial reporting and visualization.',
    'about.self.3': 'Strong sense of responsibility and excellent communication skills. Optimistic, resilient under pressure, and eager to learn. Proven team player with multiple "Outstanding Volunteer" awards.',
    'skills.tag': 'Skills',
    'skills.title': 'Skills',
    'skills.subtitle': 'Financial Tools / Data Analysis / Certifications',
    'skills.accounting': 'Financial Tools',
    'skills.data': 'Data Analysis',
    'skills.cert': 'Certifications',
    'skills.ufida': 'UFIDA U8',
    'skills.kingdee': 'Kingdee',
    'skills.excel': 'Excel / WPS',
    'skills.ufida.report': '用友报表系统',
    'skills.ufida.report': 'UFIDA Reporting System',
    'skills.office': 'MS Office Suite',
    'skills.sql': 'SQL',
    'skills.powerbi': 'Power BI',
    'skills.spss': 'SPSS',
    'skills.python': 'Python',
    'skills.cet6': 'CET-6 (English)',
    'skills.cet6.score': 'Score: 466',
    'skills.accounting.cert': 'Accounting Qualification',
    'skills.junior.cert': 'Junior Accountant Cert.',
    'skills.bda': 'BDA Data Analyst (Mid-level)',
    'exp.tag': 'Experience',
    'exp.title': 'Experience',
    'exp.subtitle': 'Internships / Campus Practice / Awards',
    'exp.work': 'Work Experience',
    'exp.campus': 'Campus Practice',
    'exp.awards': 'Awards & Honors',
    'exp.job1.title': 'Accounting Assistant',
    'exp.job1.org': 'Yuzhou Shentong Logistics Service Co., Ltd.',
    'exp.job1.date': 'Mar – Apr 2026',
    'exp.job1.d1': 'Processed 200+ business vouchers using UFIDA U8, including filling, reviewing, bookkeeping, and settlement — ensured 100% accounting accuracy.',
    'exp.job1.d2': 'Customized balance sheet and income statement templates via the UFIDA reporting system, reducing report generation time by 30%.',
    'exp.job1.d3': 'Managed payroll and fixed asset modules, covering salary accrual, distribution, asset change tracking, and depreciation accounting.',
    'exp.job1.d4': 'Cross-referenced multi-sheet data with SUM functions to aggregate detailed figures, reducing manual calculation errors.',
    'exp.job2.title': 'Audit Intern',
    'exp.job2.org': 'Rongcheng CPA Firm',
    'exp.job2.date': 'Apr – May 2026',
    'exp.job2.d1': 'Conducted on-site visits to 16 client enterprises, documented key business processes and internal control execution, and helped identify potential risk points.',
    'exp.job2.d2': 'Reviewed 200+ loan contracts and mortgage guarantee agreements, cross-verified agreement terms against actual execution, and discovered 30+ discrepancies.',
    'exp.job2.d3': 'Assisted senior auditors in compiling audit working papers, using VLOOKUP for cross-sheet data matching and reconciliation.',
    'exp.campus1.title': 'Inspur Smart Enterprise Big Data Analysis Competition',
    'exp.campus1.award': 'National Grand Prize',
    'exp.campus1.date': 'Nov 2024',
    'exp.campus1.desc': 'Handled bank receipt organization and voucher preparation. Built general ledgers, sub-ledgers, and the three major financial statements through SQL. Used Power BI for data cleaning and visualization, improving processing efficiency by ~30%.',
    'exp.campus2.title': 'Heilongjiang Inspur Information Technology Co., Ltd. — Financial Shared Service Center Practicum',
    'exp.campus2.date': 'May 2025',
    'exp.campus2.d1': 'Independently completed the full cycle of voucher review, book registration, and month-end closing — processed 500+ source documents and ledgers.',
    'exp.campus2.d2': 'Simulated tax calculations for VAT, corporate income tax, and individual income tax, and completed mock tax filing procedures.',
    'exp.campus2.d3': 'Applied job-order and process costing methods, broke down material, labor, and overhead components, and authored cost analysis reports.',
    'exp.award1.title': 'Innovation & Entrepreneurship Competition',
    'exp.award1.level': 'University-level Award',
    'exp.award2.title': 'Corporate Tax Skills Competition',
    'exp.award2.level': 'Outstanding Performance',
    'exp.award3.title': 'Outstanding Volunteer',
    'exp.award3.level': 'Multiple-time Recipient',
    'contact.tag': 'Contact',
    'contact.title': 'Contact Me',
    'contact.subtitle': 'Looking forward to connecting with you',
    'contact.name': 'Name',
    'contact.name.ph': 'Your name',
    'contact.email': 'Email',
    'contact.email.ph': 'Your email address',
    'contact.msg': 'Message',
    'contact.msg.ph': 'Your message here...',
    'contact.submit': 'Send Message',
    'contact.email.label': 'Email Address',
    'contact.phone.label': 'Phone',
    'contact.location.label': 'Location',
    'contact.success': 'Message sent successfully! I will get back to you soon.',
    // SPA index.html English keys
    'nav.about2': 'About Me', 'nav.edu2': 'Education', 'nav.exp2': 'Work & Practice', 'nav.skills2': 'Skills', 'nav.proj2': 'Learning',
    'hero.greet': "Hi, I'm Yongqing Xie",
    'hero.role': 'Accounting Professional & Intelligent Accounting',
    'hero.bio2': "A finance pro — vouchers in one hand, SQL in the other.<br>During four years at Harbin University of Commerce, I turned Excel into an art form and let Power BI tell data stories.<br>At Rongcheng CPA Firm, I reviewed 200+ contracts finding 30+ discrepancies. At Yuzhou Shentong, I processed vouchers with assembly-line precision using U8.<br>I believe great finance pros don't just crunch numbers — they use data to drive decisions. If you're looking for someone who knows both debits/credits and coding — let's talk! ✨",
    'about.download': '📄 Download Resume', 'about.contact': '💬 Contact Me',
    'about.ai': '🤖 AI Job Matcher', 'about.jd.ph': 'Paste a job description to check compatibility...',
    'about.match.btn': 'Start Matching →',
    'edu.title': 'Education', 'edu.sub': 'Education',
    'edu.period': '2022 — 2026', 'edu.hint': '🔍 Learn About My University',
    'edu.school': 'Harbin University of Commerce', 'edu.major': 'B.S. Accounting · Intelligent Accounting',
    'edu.gpa': '📊 GPA: 83.7 / 100', 'edu.courses': '📚 Core Courses',
    'exp.title': 'Work Experience', 'exp.sub': 'Work & Practice',
    'exp.j1.name': 'Yuzhou Shentong Logistics Service Co., Ltd.', 'exp.j1.role': 'Accounting Assistant',
    'exp.j1.desc': 'Processed 200+ vouchers via UFIDA U8, prepared financial statements, handled payroll and fixed asset management.',
    'exp.j2.name': 'Rongcheng CPA Firm', 'exp.j2.role': 'Audit Intern',
    'exp.j2.desc': 'Visited 16 enterprises on-site, reviewed 200+ contracts finding 30+ discrepancies, assisted in audit working papers.',
    'exp.j3.name': 'Inspur Smart Enterprise Big Data Competition', 'exp.j3.role': 'National Grand Prize',
    'exp.j3.desc': 'Built three major financial statements via SQL, used Power BI for data visualization, achieving 30% efficiency gain.',
    'exp.j4.name': 'Heilongjiang Inspur Information Technology Co.', 'exp.j4.role': 'Financial Shared Service Center Practicum',
    'exp.j4.desc': 'Processed 500+ vouchers end-to-end, simulated tax filing, authored cost analysis reports using job/process costing.',
    'exp.hint': 'Click for details →',
    'skills.title': 'Skills & Expertise', 'skills.sub': 'Skills & Expertise',
    'skills.prof': '💼 Professional Skills', 'skills.tools': '🛠 Technical Tools', 'skills.ai': '🤖 AI Tool Application',
    'skills.certs': '📜 Certifications', 'skills.soft': '🌟 Soft Skills',
    'proj.title': 'Learning & Discovery', 'proj.sub': 'Learning & Discovery',
    'proj.growth': '📝 Learning Journey',
    'modal.close': 'Close', 'modal.contact': '💬 Contact Me',
    'modal.phone': '📞 Call', 'modal.email': '✉️ Send Email',
    'modal.contact.hint': 'Or leave a message:',
    'modal.name.ph': 'Your Name', 'modal.email.ph': 'Your Email', 'modal.msg.ph': 'Message...',
    'modal.send': 'Send Message', 'modal.phone.label': 'Phone', 'modal.email.label': 'Email',
    'edu.course.cost': 'Cost Accounting','edu.course.mgmt': 'Management Accounting',
    'edu.course.finance': 'Corporate Finance','edu.course.practicum': 'Accounting Practicum',
    'edu.course.data_acct': 'Data Analysis & Accounting',
    'edu.course.data_methods': 'Data Analysis Methods',
    'edu.course.smart_fin': 'Intelligent Financial Analysis',
    'edu.course.logic': 'Logic','edu.course.mgmt2': 'Management','edu.course.econ_law': 'Economic Law',
    'edu.course.asset_val': 'Asset Valuation','edu.course.audit': 'Auditing',
    'edu.course.micro': 'Microeconomics','edu.course.macro': 'Macroeconomics',
    'edu.course.sap': 'SAP System & Application','edu.course.erp': 'ERP Sandbox Simulation',
    'footer.spa': '© 2026 Yongqing Xie · Resume · Harbin University of Commerce',
    'match.title': '📊 AI Job Match Report', 'match.edu': 'Education BG', 'match.exp': 'Work Experience',
    'match.skill': 'Skill Match', 'match.soft': 'Soft Skills',
    'match.hl': '★ Match Highlights', 'match.sum': '📄 Overall Assessment',
    'match.idle': 'Analyzing after JD input...',
    'match.desc': 'Enter a job description on the About page and click Start Matching to see results.',
    'exp.detail.work1': '💼 Work Experience Details', 'exp.detail.work2': '🔍 Work Experience Details',
    'exp.detail.camp1': '🏆 Campus Practice Details', 'exp.detail.camp2': '🏢 Campus Practice Details',
    'exp.core.res': 'Core Responsibilities', 'exp.core.result': 'Core Results',
    'cert.detail1': '📗 Certificate Details', 'cert.detail2': '📊 Certificate Details', 'cert.detail3': '🌐 Certificate Details',
    'edu.modal.title': '🏫 Harbin University of Commerce','edu.modal.sub': 'HARBIN UNIVERSITY OF COMMERCE',
    'edu.modal.desc': "China's First Multidisciplinary Commerce University",
    'edu.modal.founded': 'Founded in <strong>1952</strong>. One of the ten key universities in Heilongjiang Province. Selected for the National Basic Ability Construction Project. A first-class discipline construction university in China.',
    'edu.modal.doctor': 'Doctoral Degree Granting','edu.modal.prov': 'Provincial Key University',
    'edu.modal.project': 'National Basic Ability Construction Project',
    'edu.modal.stat1': 'Doctoral Programs','edu.modal.stat2': 'National First-Class Programs',
    'edu.modal.stat3': 'Years of Excellence','edu.modal.stat4': 'Alumni Worldwide',
    'edu.modal.intro': 'Harbin University of Commerce is <strong>China\'s first multidisciplinary commerce university</strong> with a complete bachelor-master-doctoral talent cultivation system. The university follows the motto <strong>"Seek Truth, Pursue Excellence, Cultivate Virtue, Develop Competence"</strong>. With the discipline positioning of <strong>"first-class economics and management as the lead, distinctive engineering as the focus"</strong>, it has cultivated <strong>over 200,000</strong> professionals and is known as the <strong>"Cradle of Business Elites"</strong>.',
    'edu.modal.achieve': '<strong>🏆 Proud Milestones: </strong>In 1959, developed <strong>China\'s first food machinery — the Model 601 Dumpling Machine</strong>. In 1960, pioneered the <strong>"Property Receipt-Payment Double-Entry Bookkeeping Method"</strong>, one of China\'s three major accounting methods. The Accounting program is a <strong>National Characteristic Specialty and National First-Class Undergraduate Program</strong>. The journal <em>Commercial Research</em> is a <strong>CSSCI-indexed journal</strong>. In 2024, the university was selected for the <strong>first batch of Heilongjiang Provincial Digital Education Key Universities</strong>.',
    'edu.modal.title': '🏫 Harbin University of Commerce',
    'contact.phone.val': '15083593021', 'contact.email.val': 'xyq197@qq.com',
    'match.score': '/ 100',
    'footer': '© 2026 Yongqing Xie · Personal Resume | Designed with care',
  }
};

// --- State ---
let currentLang = localStorage.getItem('lang') || 'zh';

// --- DOM helpers ---
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

// --- Translate Page ---
function translate(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';

  // Update toggle buttons
  $$('.lang-option').forEach(el => {
    el.classList.toggle('active', el.dataset.lang === lang);
  });

  // Translate all [data-i18n] elements
  $$('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (i18n[lang] && i18n[lang][key]) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = i18n[lang][key];
      } else if (i18n[lang][key] && (i18n[lang][key].indexOf('<') !== -1)) {
        el.innerHTML = i18n[lang][key];
      } else {
        el.textContent = i18n[lang][key];
      }
    }
  });
}

// --- Navbar ---
function initNavbar() {
  const navbar = $('.navbar');
  const menuBtn = $('.menu-btn');
  const navLinks = $('.nav-links');

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  });

  if (menuBtn) {
    menuBtn.addEventListener('click', () => navLinks.classList.toggle('open'));
  }

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
  });

  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  navLinks.querySelectorAll('a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === 'index.html' && href === '#home')) {
      link.classList.add('active');
    }
  });
}

// --- Language Toggle ---
function initLangToggle() {
  $$('.lang-option').forEach(btn => {
    btn.addEventListener('click', () => translate(btn.dataset.lang));
  });
  translate(currentLang);
}

// --- Scroll Reveal ---
function initReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  $$('.reveal').forEach(el => observer.observe(el));
}

// --- Contact Form ---
function initContactForm() {
  const form = $('#contactForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const lang = currentLang;
    const name = $('#contactName')?.value.trim();
    const email = $('#contactEmail')?.value.trim();
    const msg = $('#contactMsg')?.value.trim();

    if (!name || !email || !msg) {
      showToast(lang === 'zh' ? '请填写所有字段。' : 'Please fill in all fields.', 'error');
      return;
    }

    showToast(i18n[lang]['contact.success'], 'success');
    form.reset();
  });
}

function showToast(message, type) {
  const existing = $('.toast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.className = 'toast';
  if (type === 'error') {
    toast.style.background = '#3a1a1a';
    toast.style.borderColor = '#5a2d2d';
    toast.style.color = '#cf8e8e';
  }
  toast.textContent = message;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 3000);
}

// --- Init ---
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initLangToggle();
  initReveal();
  initContactForm();
});

window.translate = translate;
window.i18n = i18n;
