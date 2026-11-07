<div align="center">

# 🌐 Nexitally Official Portal (`nexitally.world`)

<p align="center">
  <strong>现代化老牌综合型跨境专线品牌官网 · 注册转化门户 · 权威知识库矩阵</strong>
</p>

<p align="center">
  <a href="https://nexitally.world"><img src="https://img.shields.io/badge/Official_Site-nexitally.world-6366f1?style=for-the-badge&logo=google-chrome&logoColor=white" alt="Official Site" /></a>
  <a href="https://astro.build"><img src="https://img.shields.io/badge/Astro-5.0+-FF5D01?style=for-the-badge&logo=astro&logoColor=white" alt="Astro" /></a>
  <a href="https://tailwindcss.com"><img src="https://img.shields.io/badge/Tailwind_CSS-v4.0-38BDF8?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" /></a>
  <img src="https://img.shields.io/badge/SEO-Optimized-emerald?style=for-the-badge&logo=google&logoColor=white" alt="SEO Optimized" />
  <img src="https://img.shields.io/badge/License-MIT-blue?style=for-the-badge" alt="License" />
</p>

<p align="center">
  <a href="#-项目概述">项目概述</a> •
  <a href="#-套餐规格矩阵">套餐规格</a> •
  <a href="#-网络与技术架构">技术架构</a> •
  <a href="#-seo--geo-矩阵">SEO & GEO</a> •
  <a href="#-快速上手与开发">开发构建</a> •
  <a href="#-项目目录结构">目录结构</a> •
  <a href="#-部署说明">生产部署</a>
</p>

---

</div>

## 📖 项目概述

**Nexitally.world** 是为 **Nexitally** 品牌量身打造的高水准独立官方落地页、产品矩阵展示与权威技术知识库系统。自 2020 年稳定运营至今，Nexitally 始终专注于企业级物理专线（IEPL / IPLC）与轻量低耗的现代 VLESS 协议。

本站致力于树立专业、可信、现代的技术品牌形象，提供全透明的套餐计费规格、全平台自研客户端生态接入指引，以及针对 Google / Bing / 百度 / 神马 等搜索引擎与 GEO（生成式引擎，如 ChatGPT Search / Perplexity）深度优化的四层内容链接矩阵。

### ✨ 核心设计理念

- 🎯 **100% 独立品牌资产**：彻底连根拔除克隆模板的所有暗桩与遗留外链，全站商业注册转化统一配置并严格包裹 `rel="nofollow sponsored"`，确保内部搜索引擎权重绝不流失。
- ⚡ **极致纯静态性能 (SSG)**：基于 Astro 5 零 JS 默认预渲染技术，秒级首屏渲染，高并发稳定承载。
- 🛡️ **真实透明无套路**：真实呈现物理专线延迟与单节点最高 2.5Gbps 带宽，拒绝虚标倍率消费，所有节点全 1x 倍率公平计费。
- 📚 **万字级深度技术专栏**：内置图文详尽的客户端配置实战、IEPL 专线拓扑解析、VLESS 协议调优及 4K 流媒体 / AI 工具解锁指南。

---

## 💎 套餐规格矩阵

本站提供清晰透明、直击痛点的产品方案，满足从轻度日常查阅到企业级跨国跨境协同的全场景需求：

| 套餐版本 | 定位人群 | 资费周期 | 流量规格 | 核心网络线路 | 设备在线限制 | 核心解锁场景 |
| :--- | :--- | :--- | :--- | :--- | :---: | :--- |
| **致敬斯诺克 147 永久版** | 一次付费，永不过期 | **¥147** / 一次性 | 247GB (永久有效) | 原生稳定专线 · 最高 2.5Gbps | **不限设备** | 邮件、资料查阅、出差备用、跨境电商 |
| **轻量版** | 个人高性价比入门 | **¥99** / 年 <br><sub>(约 ¥8.25/月)</sub> | 69GB / 月 | 原生稳定专线节点 | **不限设备** | ChatGPT / Netflix / 社交媒体 / 日常办公 |
| **极速版 (IPLC)** | 极速低延迟主力方案 | **¥25** / 月 <br><sub>(年付享8折)</sub> | 168GB / 月 | 全球物理 IPLC 专线 · 1x 倍率 | **不限设备** | 4K HDR 流媒体秒开、低延时 AI 交互、游戏加速 |
| **企业定制版** | 跨境出海与直播推流 | **¥680** / 月 | 500GB / 月 <br><sub>(可弹性扩容)</sub> | 独立部署 · 专属原生 IP · 物理 IPLC | **不限设备** | 跨境电商独立站、TikTok 稳流直播、企业内网访问 |

> 📌 **注**：8.25 元/月系年付 99 元套餐折算后的平均月度成本，全系套餐均打破客户端连接数量枷锁，全平台多端协同畅享。

---

## 🚀 网络与技术架构

```
                     ┌─────────────────────────────────────────┐
                     │          Nexitally 全球用户端           │
                     │  (自研客户端 / Clash / Shadowrocket)    │
                     └────────────────────┬────────────────────┘
                                          │ 现代轻量 VLESS 协议
                                          ▼
                     ┌─────────────────────────────────────────┐
                     │          国内骨干边缘加速接入层         │
                     │      (动态 BGP 容灾 / 毫秒级接入)       │
                     └────────────────────┬────────────────────┘
                                          │
                  ┌───────────────────────┴───────────────────────┐
                  ▼                                               ▼
   ┌─────────────────────────────┐                 ┌─────────────────────────────┐
   │    企业级物理 IEPL 专线      │                 │    跨国内网物理 IPLC 专线   │
   │  (点对点内网光纤直连 / 0 丢包)│                 │  (绕过公网防火墙与晚高峰拥堵) │
   └──────────────┬──────────────┘                 └──────────────┬──────────────┘
                  │                                               │
                  └───────────────────────┬───────────────────────┘
                                          ▼
                     ┌─────────────────────────────────────────┐
                     │          海外原生骨干落地节点机房       │
                     │    香港(20+) / 日本(10+) / 新加坡(10+)  │
                     │    美国(10+) / 台湾(5+)  / 欧洲及全球   │
                     └────────────────────┬────────────────────┘
                                          ▼
                      解 锁: ChatGPT · Claude · Netflix · TikTok
```

- **底层通信**：摒弃传统繁重加密开销，全面落地轻量化 **VLESS** 协议栈，结合 TLS 1.3 / XTLS 原生直连，极大降低握手 RTT 与终端能耗。
- **专线直连**：跨境传输走内网物理光纤直连，晚高峰无惧公网抖动与 QoS 限速，单节点最高支持 **2.5Gbps** 吞吐峰值。
- **双轨客户端生态**：官方自研 Windows / macOS / iOS / Android 专属客户端（零配置、智能路由、节点自动测速与故障自愈），并无缝兼容 Clash Verge、Shadowrocket、Surge 等第三方订阅导入。

---

## 🔍 SEO 与 GEO（生成式引擎）体系

本站严格按照顶级技术 SEO 规范构建，首发即具备强大的搜索引擎友好性与生成式 AI 引用能力：

1. **唯一主域名规范化**：全站 100% 自引用 Canonical 指向 `https://nexitally.world/.../`，杜绝任何大小写、HTTP/HTTPS、尾斜杠重复。
2. **多维度 JSON-LD Schema 矩阵**：
   - 全局页面：`Organization`（包含品牌实体、授权说明、官方 Profile）+ `WebSite`；
   - 首页 & 套餐页：`FAQPage`（结构化问答对）+ `Product / Offer`（真实产品服务与价格标定）；
   - 技术文章页：`TechArticle` + `BreadcrumbList`（面包屑层级导航）。
3. **搜索引擎验证安全预留**：内置 Google Search Console、Bing Webmaster、百度搜索资源平台、神马站长平台原生理性 Meta 标记通道。
4. **爬虫友好型 Robots & Sitemap**：
   - 显式声明放行 Googlebot、bingbot、Baiduspider、yisouspider；
   - 动态过滤无索引价值页面，仅提交 14 个高质量核心收录页面；
   - 双向兼容输出 `sitemap.xml` 与 `sitemap-index.xml`。
5. **四层站内互链网络**：
   - 向上链接核心支柱页（Pillar Page）；
   - 横向语义网状关联；
   - 4 篇技术长文与首页、功能页、套餐页、关于页双向反向链接精准锚文本闭环。

---

## 🛠️ 快速上手与开发

本项目基于 Node.js 现代工具链构建，推荐使用 `pnpm`。

### 环境准备

- Node.js `>= 18.17.0`
- pnpm `>= 8.0.0`

### 安装与运行

```bash
# 1. 克隆代码仓库
git clone https://github.com/sksksk98698-source/nexitally.world.git
cd nexitally.world

# 2. 安装项目依赖
pnpm install

# 3. 启动本地开发服务 (支持热重载)
pnpm dev

# 本地预览地址：http://localhost:5200 (或 5201)
```

### 构建与验证

```bash
# 执行代码诊断、Content Layer 检查与全站 SSG 编译
pnpm build

# 启动本地生产环境产物静态预览
pnpm preview
```

---

## 📁 项目目录结构

```text
nexitally.world/
├── public/                    # 静态资产目录
│   ├── assets/                # Logo、图标与图片
│   ├── robots.txt             # 全局爬虫抓取规则与 Sitemap 指引
│   ├── sitemap.xml            # 标准 XML Sitemap 索引入口
│   └── sitemap-index.xml      # 适配 Astro 的 sitemap 索引文件
├── src/
│   ├── components/            # UI 组件库
│   │   ├── elements/          # PageHeader (带标准 H1)、SectionHeader
│   │   ├── home/              # 首页专有 HeroSection、拓扑组件
│   │   ├── sections/          # Header、Footer、Pricing (4套餐卡片)、FAQ
│   │   └── ui/                # Button (自动 nofollow)、Logo、Badge
│   ├── config/
│   │   └── site.js            # 全局站点元数据、套餐数据、站长验证配置
│   ├── content/
│   │   ├── changelog/         # 基础设施与节点更新日志
│   │   └── post/              # 4 篇万字级深度 MDX 技术专栏
│   │       ├── ai-and-streaming-unlock/     # AI 与 4K 海外流媒体解锁指南
│   │       ├── client-setup-guide/          # 客户端安装与订阅导入实战
│   │       ├── iepl-network-architecture/   # IEPL/IPLC 专线架构原理解析
│   │       └── vless-protocol-advantages/   # VLESS 协议性能对比与调优
│   ├── layouts/               # 全局模板
│   │   ├── Layout.astro       # 基础布局 (暗色模式切换、AOS 初始化)
│   │   ├── Meta.astro         # 核心 SEO Head (Meta/OG/JSON-LD 矩阵)
│   │   └── PostLayout.astro   # 技术文章长文专用阅读布局
│   └── pages/                 # 核心路由页面
│       ├── index.astro        # 品牌官方首页落地页
│       ├── pricing.astro      # 套餐价格与横向规格对比页
│       ├── features.astro     # 核心专线网络与协议优势页
│       ├── about.astro        # 品牌稳健历程与官方授权说明
│       ├── status.astro       # 节点网络实时运行状态
│       ├── changelog.astro    # 升级日志时间线
│       ├── contact.astro      # 工单咨询与客服支持
│       ├── privacy.astro      # 隐私政策与安全说明
│       ├── terms.astro        # 服务条款与使用准则
│       └── blog/              # 专栏知识库索引及动态文章路由
├── astro.config.mjs           # Astro 项目配置 (Tailwind, MDX, Sitemap 过滤)
├── package.json               # 依赖配置与构建脚本
└── README.md                  # 项目自述文档
```

---

## 🚢 生产部署

本项目编译产物为纯静态文件（位于 `dist/`），具备极高的移植性与高可用性：

### 方案 A：Cloudflare Pages (推荐)
1. 在 Cloudflare Dashboard 中新建 **Pages** 项目，连接本 GitHub 仓库；
2. 构建设置：
   - **Framework preset**：`Astro`
   - **Build command**：`pnpm build`
   - **Build output directory**：`dist`
3. 绑定自定义域名 `nexitally.world`，开启动态 SSL/TLS 并享受全球 Anycast CDN 加速。

### 方案 B：Vercel / Netlify
- 导入仓库后选择 Astro 预设，构建命令执行 `pnpm build`，输出目录指向 `dist` 即可实现一键 CI/CD 自动发布。

---

## ⚖️ 免责声明与版权

1. 本项目代码遵循 [MIT License](LICENSE) 开源。
2. 网站内展示的所有专线套餐规格、网络拓扑参数与计费规则均与 Nexitally 官方系统保持同步；全站统一采用安全合规之授权接入通道。

---

<div align="center">
  <sub>Built with ❤️ by Nexitally Engineering Team. Designed for ultimate stability and speed.</sub>
</div>
