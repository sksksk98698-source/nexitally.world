// Get site URL from environment variable, use default value if not set
const SITE_URL = import.meta.env.PUBLIC_SITE_URL || 'https://nexitally.world';

// Official Registration & Portal Link (Unified config across the site)
export const REGISTER_URL = "https://sahude.gsyvipaff.com/#/?code=keqgvT5Y";

export const siteConfig = {
	title: "Nexitally",
	brandName: "Nexitally",
	domain: "nexitally.world",
	author: "Nexitally Team",
	url: SITE_URL,
	mail: "support@nexitally.world",
	registerUrl: REGISTER_URL,
	utm: {
		source: `${SITE_URL}`,
		medium: "referral",
		campaign: "official_navigation",
	},
	meta: {
		title: "Nexitally 官网 — 老牌综合型企业级 IEPL 专线 · VLESS 协议 · AI 与流媒体解锁",
		description: "Nexitally 自 2020 年稳定运营至今，专注高可用企业级 IEPL / IPLC 专线架构与现代 VLESS 协议。提供全平台自研客户端与第三方订阅导入，全节点最高 2.5Gbps，轻松应对晚高峰与高要求跨境业务。",
		keywords: "Nexitally, Nexitally官网, Nexitally机场, IEPL专线, IPLC内网专线, VLESS协议, 自研客户端, 跨境电商网络, TikTok直播专线, ChatGPT解锁, Netflix 4K",
		image: `${SITE_URL}/og.jpg`,
		twitterHandle: "NexitallyWorld",
	},
	// Brand highlight tags
	tags: [
		"2020年运营",
		"IEPL专线",
		"VLESS",
		"年付低价",
		"AI工具",
		"流媒体",
		"自研客户端"
	],
	// Core packages data
	plans: [
		{
			id: "snooker-147",
			name: "致敬斯诺克147永久套餐",
			badge: "一次性无忧",
			price: "147",
			period: "一次性付清",
			billingType: "permanent",
			traffic: "247GB 永久版",
			position: "一次性永久版无忧过期",
			line: "原生稳定节点 · 单节点最高 2.5Gbps",
			devices: "不限设备数量",
			nodes: "香港×20、台湾×5、日本×10、新加坡×10、美国×10、马来西亚×2、英国、法国、德国、土耳其、泰国、巴西等全球节点",
			scenes: "办公、邮件、资料、聊天、轻度视频",
			unlock: "跨境电商 ｜ TikTok 直播 ｜ 社媒投放/推广 ｜ 远程办公/内网访问 等高要求业务",
			discount: "不打折",
			cta: "立即选购永久版",
			popular: false,
			features: [
				{ text: "247GB 永久有效流量，永不过期", included: true },
				{ text: "原生稳定节点，单节点最高 2.5Gbps", included: true },
				{ text: "不限制设备数量同时在线", included: true },
				{ text: "全球 60+ 优质骨干机房热备", included: true },
				{ text: "支持全平台自研客户端与第三方订阅", included: true },
				{ text: "支持跨境电商、TikTok、远程办公", included: true },
			]
		},
		{
			id: "lightweight",
			name: "轻量版",
			badge: "入门优选",
			price: "99",
			period: "/ 年（约 8.25 元/月）",
			note: "8.25 元/月为年付折算平均成本，非普通月付价格",
			billingType: "yearly",
			traffic: "69GB / 月",
			position: "轻量入门日常无忧",
			line: "原生稳定专线节点",
			devices: "不限设备数量",
			nodes: "港 / 台 / 日 / 新 / 马 / 美 / 德 / 法 / 英 / 土 / 越",
			scenes: "办公、邮件、资料、聊天、轻度视频",
			unlock: "Netflix / Disney+ / ChatGPT / TikTok",
			discount: "年付特惠",
			cta: "立即订阅轻量版",
			popular: false,
			features: [
				{ text: "每月 69GB 流量自动刷新", included: true },
				{ text: "折算仅约 8.25 元/月，超高性价比", included: true },
				{ text: "原生稳定节点，晚高峰无压力", included: true },
				{ text: "不限制客户端同时连接数量", included: true },
				{ text: "解锁 Netflix、ChatGPT、Disney+ 等", included: true },
				{ text: "支持自研客户端与 Clash / 小火箭", included: true },
			]
		},
		{
			id: "speed-iplc",
			name: "极速版",
			badge: "最受欢迎 · 推荐",
			price: "25",
			period: "/ 月",
			billingType: "monthly",
			traffic: "168GB / 月",
			position: "全专线极速体验",
			line: "全球 IPLC 纯专线接入",
			ratio: "全节点 ×1 倍率",
			speed: "单节点最高 2.5Gbps 峰值带宽",
			devices: "不限设备数量",
			nodes: "港 / 台 / 日 / 新 / 马 / 美 / 德 / 法 / 英 / 土 / 越",
			scenes: "4K 极速流媒体、超低时延 AI 交互、全天候高速作业",
			unlock: "Netflix / Disney+ / ChatGPT / TikTok 全矩阵深度解锁",
			ops: "7×24 小时实时监控保障",
			discount: "半年9折 / 年付8折 / 两年75折 / 三年7折",
			cta: "立即开通极速版",
			popular: true,
			features: [
				{ text: "每月 168GB 全 IPLC 专线流量", included: true },
				{ text: "全节点 1 倍率计费，无暗坑扣费", included: true },
				{ text: "单节点最高 2.5Gbps 物理专线带宽", included: true },
				{ text: "不限制多设备同时在线", included: true },
				{ text: "7×24 小时高可用服务运维保障", included: true },
				{ text: "半年9折/年付8折/两年75折/三年7折", included: true },
			]
		},
		{
			id: "custom-enterprise",
			name: "定制版",
			badge: "企业与独立专线",
			price: "680",
			period: "/ 月",
			billingType: "custom",
			traffic: "500GB / 月（可弹性扩容）",
			position: "按需独立部署 · 专属原生 IP",
			line: "线下确认需求 · 全 IPLC 独立专线接入",
			ratio: "独享原生 IP / 独立带宽单独开通与部署",
			speed: "单节点最高 2.5Gbps 独享峰值",
			devices: "不限客户端数量，多端同时在线无门槛",
			nodes: "香港 / 日本 / 美国 / 新加坡等全球多节点按需灵活配置",
			scenes: "跨境电商矩阵、TikTok 直播推流、社媒投放推广、企业级远程内网跨国协同",
			unlock: "企业高要求业务深度定制",
			ops: "7×24 小时专属工程师 1 对 1 支持",
			discount: "不打折",
			cta: "咨询开通定制专线",
			popular: false,
			features: [
				{ text: "500GB/月，流量与带宽按需定制扩容", included: true },
				{ text: "分配专属原生 IP 与独立带宽，更强隐私隔离", included: true },
				{ text: "超低时延全 IPLC 专线，长时稳定高可用架构", included: true },
				{ text: "不限制团队设备在线数量", included: true },
				{ text: "跨境电商、TikTok直播专属稳定推流方案", included: true },
				{ text: "7×24 小时专属技术客服一对一支持", included: true },
			]
		}
	],
	// Brand social & links
	social: {
		telegram: "https://t.me/nexitally_channel",
		twitter: "https://x.com/nexitally",
		twitterName: "Nexitally",
		github: "https://github.com/nexitally",
	},
	// Webmaster verification codes (Search Console / Webmaster Tools)
	verification: {
		google: import.meta.env.PUBLIC_GOOGLE_VERIFICATION || "",
		bing: import.meta.env.PUBLIC_BING_VERIFICATION || "",
		baidu: import.meta.env.PUBLIC_BAIDU_VERIFICATION || "",
		shenma: import.meta.env.PUBLIC_SHENMA_VERIFICATION || "",
	},
};

// Footer social links
export const socialLinks = [
	{
		name: 'Telegram',
		url: 'https://t.me/nexitally_channel',
		icon: `<svg class="icon ic-telegram w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.75-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/></svg>`
	},
	{
		name: 'Twitter',
		url: 'https://x.com/nexitally',
		icon: `<svg class="ic-twitter icon w-5 h-5" viewBox="0 0 1792 1792" fill="currentColor"><path d="M1684 408q-67 98-162 167 1 14 1 42 0 130-38 259.5t-115.5 248.5-184.5 210.5-258 146-323 54.5q-271 0-496-145 35 4 78 4 225 0 401-138-105-2-188-64.5t-114-159.5q33 5 61 5 43 0 85-11-112-23-185.5-111.5t-73.5-205.5v-4q68 38 146 41-66-44-105-115t-39-154q0-88 44-163 121 149 294.5 238.5t371.5 99.5q-8-38-8-74 0-134 94.5-228.5t228.5-94.5q140 0 236 102 109-21 205-78-37 115-142 178 93-10 186-50z"/></svg>`
	},
	{
		name: 'RSS',
		url: '/rss.xml',
		icon: `<svg class="icon ic-rss w-5 h-5" viewBox="0 0 1024 1024" fill="currentColor"><path d="M329.143 768q0 45.714-32 77.714t-77.714 32-77.715-32-32-77.714 32-77.714 77.715-32 77.714 32 32 77.714z m292.571 70.286q1.143 16-9.714 27.428-10.286 12-26.857 12H508q-14.286 0-24.571-9.428T472 844.57q-12.571-130.857-105.429-223.714T142.857 515.43q-14.286-1.143-23.714-11.429t-9.429-24.571v-77.143q0-16.572 12-26.857 9.715-9.715 24.572-9.715h2.857q91.428 7.429 174.857 46T472 515.43q65.143 64.571 103.714 148t46 174.857z m292.572 1.143q1.143 15.428-10.286 26.857-10.286 11.428-26.286 11.428H796q-14.857 0-25.429-10T759.43 843.43Q752.57 720.57 701.714 610T569.43 418t-192-132.286T144 227.43q-14.286-0.572-24.286-11.143t-10-24.857v-81.715q0-16 11.429-26.285 10.286-10.286 25.143-10.286H148q149.714 7.428 286.571 68.571t243.143 168q106.857 106.286 168 243.143t68.572 286.572z"/></svg>`
	},
];
