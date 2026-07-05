import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import { CountdownTimer } from "./CountdownTimer";
export function DealCard({
  deal,
  index
}) {
  return <motion.div initial={{
    opacity: 0,
    y: 20
  }} whileInView={{
    opacity: 1,
    y: 0
  }} viewport={{
    once: true
  }} transition={{
    delay: index !== undefined ? index * 0.1 : 0
  }} className="group bg-white rounded-2xl border border-slate-200 overflow-hidden flex flex-col hover:shadow-2xl hover:border-blue-500/40 hover:-translate-y-1.5 transition-all duration-500 h-full">{// Top side: Logo image container (explicitly above the text)
    <div className="w-full h-36 bg-slate-50 border-b border-slate-100 flex items-center justify-center p-6 relative">{<img src={deal.logo} alt={deal.name} className="max-h-16 max-w-[120px] object-contain group-hover:scale-105 transition-transform duration-500" />}{<div className="absolute top-4 right-4 bg-red-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm uppercase tracking-wider">{deal.discountBadge}</div>}</div>}{// Bottom side: Text information container
    <div className="p-5 flex flex-col flex-1">{<div className="mb-1">{<span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">{deal.category}</span>}</div>}{<h3 className="text-lg font-bold text-slate-800 mb-1 group-hover:text-blue-600 transition-colors line-clamp-1">{deal.name}</h3>}{<p className="text-xs text-slate-400 mb-3 line-clamp-1">{deal.tagline}</p>}{<div className="flex items-center gap-1.5 mb-4">{<Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />}{<span className="text-xs font-bold text-slate-700">{deal.rating}</span>}{<span className="text-xs text-slate-400 font-semibold">({deal.reviewCount})</span>}</div>}{<div className="mt-auto space-y-4">{<div className="flex items-end gap-1.5">{<span className="text-xl font-black text-slate-800">{deal.salePrice}</span>}{<span className="text-xs text-slate-400 line-through mb-0.5 font-semibold">{deal.originalPrice}</span>}</div>}{<CountdownTimer hours={deal.timerHours} mins={deal.timerMins} />}{<Link href={`/deal/${deal.id}`} className="w-full inline-flex items-center justify-center gap-2 bg-blue-600 text-white font-bold rounded-xl py-2.5 px-4 text-sm hover:bg-blue-700 transition-colors shadow-sm shadow-blue-200">View Deal {<ArrowRight className="w-3.5 h-3.5" />}</Link>}</div>}</div>}</motion.div>;
}