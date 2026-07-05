import { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Link } from "wouter";
import { ArrowRight, BarChart3, Globe, Search, Sparkles, ShoppingBag, Mail, Megaphone, Zap, Laptop, FileText } from "lucide-react";
const categoryData = [{
  title: "SEO Tools",
  description: "Keyword research, backlink trackers, and technical audits for organic growth.",
  icon: Search,
  stats: "3 Active Deals",
  dbCategory: "SEO Tools",
  colorClass: "hover:border-blue-500/40 hover:shadow-blue-500/[0.04] bg-white"
}, {
  title: "Email Marketing",
  description: "Automation builders, newsletter campaigns, and user segmentation systems.",
  icon: Mail,
  stats: "2 Active Deals",
  dbCategory: "Email Marketing",
  colorClass: "hover:border-purple-500/40 hover:shadow-purple-500/[0.04] bg-white"
}, {
  title: "Marketing & Ads",
  description: "Inbound CRM systems, sales funnel managers, and custom lead captures.",
  icon: Megaphone,
  stats: "3 Active Deals",
  dbCategory: "Marketing",
  colorClass: "hover:border-orange-500/40 hover:shadow-orange-500/[0.04] bg-white"
}, {
  title: "Design & Creative",
  description: "Collaborative UI/UX workspaces and libraries of stock creative elements.",
  icon: Sparkles,
  stats: "3 Active Deals",
  dbCategory: "Design",
  colorClass: "hover:border-pink-500/40 hover:shadow-pink-500/[0.04] bg-white"
}, {
  title: "Web Hosting",
  description: "Blazing fast cloud hosting, domain registration, and weekly backup protection.",
  icon: Globe,
  stats: "2 Active Deals",
  dbCategory: "Hosting",
  colorClass: "hover:border-indigo-500/40 hover:shadow-indigo-500/[0.04] bg-white"
}, {
  title: "Ecommerce",
  description: "Product catalogs, secure checkout gateways, and cart recovery solutions.",
  icon: ShoppingBag,
  stats: "1 Active Deal",
  dbCategory: "eCommerce",
  colorClass: "hover:border-emerald-500/40 hover:shadow-emerald-500/[0.04] bg-white"
}, {
  title: "Productivity",
  description: "Document storage systems, team collaboration databases, and task planners.",
  icon: Zap,
  stats: "2 Active Deals",
  dbCategory: "Productivity",
  colorClass: "hover:border-amber-500/40 hover:shadow-amber-500/[0.04] bg-white"
}, {
  title: "Content Marketing",
  description: "AI copywriting generators, blogging frameworks, and editor integrations.",
  icon: FileText,
  stats: "2 Active Deals",
  dbCategory: "Marketing",
  colorClass: "hover:border-violet-500/40 hover:shadow-violet-500/[0.04] bg-white"
}, {
  title: "SaaS & Operations",
  description: "Business operations, brand guidelines, and organizational management templates.",
  icon: Laptop,
  stats: "2 Active Deals",
  dbCategory: "Productivity",
  colorClass: "hover:border-cyan-500/40 hover:shadow-cyan-500/[0.04] bg-white"
}];
export default function Categories() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">{<Navbar />}{<main className="flex-1 pt-32 pb-24 relative overflow-hidden">{// Grid background pattern
      <div className="absolute inset-0 opacity-[0.4] mix-blend-overlay pointer-events-none" style={{
        backgroundImage: "linear-gradient(#cbd5e1 1px, transparent 1px), linear-gradient(90deg, #cbd5e1 1px, transparent 1px)",
        backgroundSize: "40px 40px"
      }} />}{// Soft mesh gradients for light mode
      <div className="absolute top-[-10%] left-[-10%] w-[55%] h-[60%] bg-gradient-to-br from-blue-100 to-purple-50 rounded-full blur-[130px] pointer-events-none opacity-80" />}{<div className="absolute bottom-10 right-[-10%] w-[50%] h-[50%] bg-purple-50/50 rounded-full blur-[140px] pointer-events-none opacity-60" />}{<div className="container mx-auto px-4 md:px-6 relative z-10 space-y-20">{// ── REDESIGNED Split Hero Section ──
        <div className="grid lg:grid-cols-12 gap-12 items-center">{// Left Column: Headline and description
          <div className="lg:col-span-7 space-y-6 text-left">{<div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 font-bold text-xs uppercase tracking-widest">{<Sparkles className="w-4 h-4" />}Interactive Workspaces</div>}{<h1 className="text-4xl md:text-6xl font-black tracking-tight leading-[1.1] bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 bg-clip-text text-transparent">Browse Tools by {<br />}{<span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Marketing Hubs</span>}</h1>}{<p className="text-base md:text-lg text-slate-600 max-w-xl leading-relaxed">Build your perfect tech stack. Browse curated tools, SaaS resources, and verified discounts sorted across nine business workspaces.</p>}{// Stats badges
            <div className="flex flex-wrap gap-4 pt-2">{<div className="px-4 py-2 rounded-xl bg-white border border-slate-200 text-xs text-slate-700 font-semibold shadow-sm">{<span className="text-blue-600 font-bold mr-1.5">9</span>}Core Workspaces</div>}{<div className="px-4 py-2 rounded-xl bg-white border border-slate-200 text-xs text-slate-700 font-semibold shadow-sm">{<span className="text-cyan-600 font-bold mr-1.5">16+</span>}Verified Active Offers</div>}</div>}</div>}{// Right Column: Creative floating workspace items
          <div className="lg:col-span-5 relative h-80 w-full hidden md:block select-none">{<div className="absolute inset-0 flex items-center justify-center">{// Floating card 1
              <div className="absolute transform -rotate-6 translate-x-[-40px] translate-y-[-30px] p-4 rounded-xl bg-white border border-slate-200 shadow-xl w-48 space-y-2 hover:rotate-0 hover:scale-105 transition-all duration-300">{<Search className="w-6 h-6 text-blue-600" />}{<h3 className="font-bold text-sm text-slate-800">SEO Tools</h3>}{<p className="text-[10px] text-slate-500">Semrush, Ahrefs & more</p>}</div>}{// Floating card 2
              <div className="absolute transform rotate-6 translate-x-[60px] translate-y-[20px] p-4 rounded-xl bg-white border border-slate-200 shadow-xl w-48 space-y-2 hover:rotate-0 hover:scale-105 transition-all duration-300 z-20">{<Sparkles className="w-6 h-6 text-pink-500" />}{<h3 className="font-bold text-sm text-slate-800">Design Hub</h3>}{<p className="text-[10px] text-slate-500">Figma, Canva & templates</p>}</div>}{// Floating card 3
              <div className="absolute transform -rotate-12 translate-y-[60px] translate-x-[-90px] p-4 rounded-xl bg-white border border-slate-200/60 shadow-lg w-44 space-y-2 hover:rotate-0 hover:scale-105 transition-all duration-300">{<Mail className="w-5 h-5 text-purple-500" />}{<h3 className="font-bold text-xs text-slate-800">Email Campaigns</h3>}{<p className="text-[9px] text-slate-500">Mailchimp, GetResponse</p>}</div>}</div>}</div>}</div>}{// ── REDESIGNED Cards Grid ──
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">{categoryData.map(cat => {
            const Icon = cat.icon;
            return <div className={`group relative flex flex-col justify-between rounded-2xl border border-slate-200 p-6 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1.5 overflow-hidden ${cat.colorClass}`}>{// Dynamic overlay background glow on hover
              <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />}{<div className="relative z-10">{// Top Row: Icon on left, stats badge on right
                <div className="flex justify-between items-start mb-6">{<div className="w-12 h-12 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-300 shadow-sm">{<Icon className="w-6 h-6" />}</div>}{<span className="text-[10px] font-bold text-slate-500 bg-slate-100 border border-slate-200 px-2.5 py-1 rounded-md uppercase tracking-wider group-hover:bg-slate-200 group-hover:text-slate-800 transition-all">{cat.stats}</span>}</div>}{<h2 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors text-slate-800">{cat.title}</h2>}{<p className="text-sm text-slate-600 leading-relaxed mb-6">{cat.description}</p>}</div>}{// Bottom Action Link
              <Link href={`/deals?category=${encodeURIComponent(cat.dbCategory)}`} className="relative z-10 inline-flex items-center gap-2 text-sm font-bold text-slate-700 hover:text-blue-600 transition-all group/link mt-auto w-fit">View Deals {<ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />}</Link>}</div>;
          })}</div>}</div>}</main>}{<Footer />}</div>;
}