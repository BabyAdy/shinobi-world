import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { charactersData } from '../data/charactersData';
import Navbar from '../components/Navbar';

const clanColors = {
  uchiha: 'border-red-600/50 text-red-600 bg-red-600/10 shadow-[0_0_8px_rgba(220,38,38,0.3)]',
  uzumaki: 'border-orange-400/50 text-orange-500 bg-orange-400/10 shadow-[0_0_8px_rgba(249,115,22,0.3)]',
  hyuga: 'border-purple-400/50 text-purple-300 bg-purple-400/10 shadow-[0_0_8px_rgba(147,51,234,0.3)]',
  hatake: 'border-yellow-300/30 text-yellow-300 bg-yellow-300/10 shadow-[0_0_8px_rgba(234,179,8,0.3)]',
  senju: 'border-emerald-400/50 text-emerald-600 bg-emerald-400/10 shadow-[0_0_8px_rgba(100,245,146,0.3)]',
  nara: 'border-gray-400/50 text-gray-400 bg-gray-400/10 shadow-[0_0_8px_rgba(156,163,175,0.3)]',
  akimichi: 'border-amber-400/50 text-amber-700 bg-amber-400/10 shadow-[0_0_8px_rgba(211,176,154,0.3)]',
  yamanaka: 'border-fuchsia-400/50 text-fuchsia-400 bg-fuchsia-400/50 shadow-[0_0_8px_rgba(0,0,0,0.5)]',
  aburame: 'border-lime-700/50 text-lime-700 bg-lime-700/10 shadow-[0_0_8px_rgba(100,245,146,0.3)]',
  inuzuka: 'border-stone-500/50 text-stone-500 bg-stone-500/10 shadow-[0_0_8px_rgba(156,164,175,0.3)]',
  otsutsuki: 'border-cyan-400/50 text-cyan-200 bg-cyan-400/10 shadow-[0_0_8px_rgba(34,211,238,0.3)]',
  kazekage: 'border-red-600/50 text-red-500 bg-red-600/10 shadow-[0_0_8px_rgba(220,38,38,0.3)]',
  hoshigaki: 'border-grey-400/50 text-grey-400 bg-grey-400/10 shadow-[0_0_8px_rgba(156,163,175,0.3)]',
  hōzuki: 'border-grey-900/50 text-yellow-500 bg-grey-900/10 shadow-[0_0_8px_rgba(128,128,128,0.3)]',
  jūgo: 'border-red-600/50 text-red-500 bg-red-600/10 shadow-[0_0_8px_rgba(220,38,38,0.3)]'
};

const teamColors = {
  "team minato": "border-red-600/50 text-red-500 bg-red-600/10 shadow-[0_0_8px_rgba(220,38,38,0.3)]",
  "team kakashi": "border-cyan-400/50 text-cyan-400 bg-cyan-400/10 shadow-[0_0_8px_rgba(34,211,238,0.3)]",
  "sasuke recovery team": "border-yellow-600/50 text-yellow-500 bg-yellow-600/10 shadow-[0_0_8px_rgba(234,179,8,0.3)]",
  "kazekage rescue team": "border-red-600/50 text-red-500 bg-red-600/10 shadow-[0_0_8px_rgba(220,150,8,0.3)]", 
  "eight man squad": "border-cyan-400/50 text-cyan-400 bg-cyan-400/10 shadow-[0_0_8px_rgba(34,155,189,0.3)]",
  "sound four taka": "border-rose-600 text-rose-500 bg-rose-600/10 shadow-[0_0_8px_rgba(220,38,38,0.3)]",
  "akatsuki": "border-red-600/50 text-red-600 bg-red-600/10 shadow-[0_0_8px_rgba(220,38,38,0.3)]",
  "second division": "border-rose-600 text-rose-500 bg-rose-600/10 shadow-[0_0_8px_rgba(220,38,38,0.3)]",
  "team 10": "border-emerald-500 text-emerald-500 bg-emerald-500/10 shadow-[0_0_8px_rgba(100,245,146,0.3)]",
  "team 8": "border-lime-500 text-lime-500 bg-lime-500/10 shadow-[0_0_8px_rgba(132,204,22,0.3)]",
  "team guy": "border-orange-600/50 text-orange-600 bg-orange-600/10 shadow-[0_0_8px_rgba(249,115,22,0.3)]",
  "third division": "border-emerald-500 text-emerald-600 bg-emerald-600/10 shadow-[0_0_8px_rgba(220,38,38,0.3)]",
  "medic corps": "border-rose-600 text-rose-500 bg-rose-600/10 shadow-[0_0_8px_rgba(220,38,38,0.3)]",
  "team 7": "border-cyan-400/50 text-cyan-400 bg-cyan-400/10 shadow-[0_0_8px_rgba(34,211,238,0.3)]",
  "team 2": "border-emerald-500 text-emerald-500 bg-emerald-500/10 shadow-[0_0_8px_rgba(100,245,146,0.3)]",
  "three sand siblings": "border-yellow-600/50 text-yellow-500 bg-yellow-600/10 shadow-[0_0_8px_rgba(234,179,8,0.3)]",
  "fourth division": "border-emerald-500 text-emerald-600 bg-emerald-600/10 shadow-[0_0_8px_rgba(220,38,38,0.3)]",
  "team hiruzen": "border-orange-600/50 text-orange-600 bg-orange-600/10 shadow-[0_0_8px_rgba(249,115,22,0.3)]",
  "ame orphans": "border-orange-600/50 text-orange-600 bg-orange-600/10 shadow-[0_0_8px_rgba(249,115,22,0.3)]",
  "team 6": "border-cyan-400/50 text-cyan-400 bg-cyan-400/10 shadow-[0_0_8px_rgba(34,211,238,0.3)]",
  "team orochimaru": "border-purple-500/50 text-purple-500 bg-purple-500/10 shadow-[0_0_8px_rgba(156,163,175,0.3)]",
  "team dosu": "border-orange-600/50 text-orange-600 bg-orange-600/10 shadow-[0_0_8px_rgba(249,115,22,0.3)]",
  "cypher division": "border-grey-350/50 text-grey-500, bg-grey-350/10 shadow-[0_0_8px_rgba(156,163,175,0.3)]",
  "seven ninja swordsmen of the mist": "border-orange-600/50 text-orange-600 bg-orange-600/10 shadow-[0_0_8px_rgba(249,115,22,0.3)]",
  "puppet brigade": "border-purple-800/50 text-purple-700 bg-purple-800/10 shadow-[0_0_8px_rgba(147,51,234,0.3)]",
  "surprise attack and diversion platoon": "border-orange-600/50 text-orange-600 bg-orange-600/10 shadow-[0_0_8px_rgba(249,115,22,0.3)]",
  "explosion corps": "border-orange-600/50 text-orange-600 bg-orange-600/10 shadow-[0_0_8px_rgba(249,115,22,0.3)]",
  "white zetsu army": "border-grey-750/50 text-orange-500 bg-grey-750/10 shadow-[0_0_8px_rgba(255,255,255,0.3)]",
  "taka": "border-rose-600/50 text-red-900 bg-rose-600/10 shadow-[0_0_8px_rgba(255,102,153,0.3)]",
  "team shigeri": "border-rose-600/50 text-red-900 bg-rose-600/10 shadow-[0_0_8px_rgba(255,102,153,0.3)]",
  "team kabuto": "border-purple-600/50 text-purple-500 bg-purple-600/10 shadow-[0_0_8px_rgba(156,163,175,0.3)]",
};

const natureColors = {
  "fire release": "border-red-600/50 text-red-500 bg-red-600/10 shadow-[0_0_8px_rgba(220,38,38,0.3)]",
  "water release": "border-blue-600/50 text-blue-500 bg-blue-600/10 shadow-[0_0_8px_rgba(44,160,243,0.3)]",
  "wind release": "border-teal-900/10 text-teal-400 bg-teal-900/10 shadow-[0_0_8px_rgba(100,245,146,0.3)]",
  "lightning release": "border-yellow-400/50 text-yellow-400 bg-yellow-400/10 shadow-[0_0_8px_rgba(234,179,8,0.3)]",
  "earth release": "border-amber-600/50 text-amber-600 bg-amber-600/10 shadow-[0_0_8px_rgba(211,176,54,0.3)]",
  "lava release": "border-orange-700/50 text-orange-700 bg-orange-700/10 shadow-[0_0_8px_rgba(249,115,22,0.3)]",
  "ice release": "border-blue-400/50 text-blue-200 bg-blue-400/10 shadow-[0_0_8px_rgba(44,160,243,0.3)]",
  "wood release": "border-emerald-800/50 text-emerald-800 bg-emerald-800/10 shadow-[0_0_8px_rgba(100,245,146,0.3)]",
  "boil release": "border-red-500/50 text-red-500 bg-red-500/10 shadow-[0_0_8px_rgba(100,38,245,0.3)]",
  "storm release": "border-indigo-400/50 text-indigo-400 bg-indigo-400/10 shadow-[0_0_8px_rgba(129,140,248,0.3)]",
  "magnet release": "border-purple-500/50 text-purple-400 bg-purple-500/10 shadow-[0_0_8px_rgba(156,163,175,0.3)]",
  "explosion release": "border-red-600/50 text-red-500 bg-red-600/10 shadow-[0_0_8px_rgba(220,38,38,0.3)]",
  "yin release": "border-slate-300/50 text-slate-100 bg-slate-500/20 shadow-[0_0_8px_rgba(248,250,252,0.4)]",
  "yang release": "border-zinc-800/80 text-zinc-950 bg-zinc-400/20 shadow-[0_0_8px_rgba(24,24,27,0.4)]",
  "yin-yang release": "border-indigo-500/50 text-slate-200 bg-gradient-to-r from-zinc-900 via-slate-500 to-zinc-900 shadow-[0_0_8px_rgba(99,102,241,0.3)]"
};

const statusColors = {
  "alive": "border-emerald-500/50 text-emerald-400 bg-emerald-500/10 shadow-[0_0_8px_rgba(100,245,146,0.3)]",
  "deceased": "border-red-600/50 text-red-500 bg-red-500/10 shadow-[0_0_8px_rgba(220,38,38,0.3)]",
  "incapacitated": "border-gray-500/50 text-gray-500 bg-gray-500/10 shadow-[0_0_8px_rgba(156,163,175,0.3)]",
  "celestial being": "border-blue-500/50 text-blue-400 bg-blue-500/10 shadow-[0_0_8px_rgba(59,130,246,0.3)]",
  "celestial being-human hybrid": "border-blue-500/50 text-blue-400 bg-blue-500/10 shadow-[0_0_8px_rgba(59,130,246,0.3)]",
  "artificial human (incapacitated)": "border-gray-500/50 text-gray-500 bg-gray-500/10 shadow-[0_0_8px_rgba(156,163,175,0.3)]",
  "mutated human (deceased)": "border-gray-500/50 text-gray-500 bg-gray-500/10 shadow-[0_0_8px_rgba(156,163,175,0.3)]",
  "unknown": "border-zinc-500/50 text-zinc-400 bg-zinc-500/10 shadow-[0_0_8px_rgba(156,163,175,0.3)]"
};

const affiliationColors = {
  "konohagakure": "border-emerald-500/50 text-emerald-500 bg-emerald-500/10 shadow-[0_0_8px_rgba(100,245,146,0.3)]",
  "konoha orphanage": "border-emerald-500/50 text-emerald-500 bg-emerald-500/10 shadow-[0_0_8px_rgba(100,245,146,0.3)]",
  "sunagakure": "border-amber-500/50 text-amber-500 bg-amber-500/10 shadow-[0_0_8px_rgba(211,176,54,0.3)]",
  "kumogakure": "border-yellow-300/30 text-yellow-300 bg-yellow-300/10 shadow-[0_0_8px_rgba(234,179,8,0.3)]",
  "kirigakure": "border-blue-600/60 text-blue-600 bg-blue-600/10 shadow-[0_0_8px_rgba(44,160,243,0.3)]",
  "iwagakure": "border-orange-500/60 text-orange-800 bg-orange-800/10 shadow-[0_0_8px_rgba(249,115,22,0.3)]",
  "otogakure": "border-purple-500/50 text-purple-500 bg-purple-500/10 shadow-[0_0_8px_rgba(156,163,175,0.3)]",
  "amegakure": "border-red-500/50 text-red-400 bg-red-500/10 shadow-[0_0_8px_rgba(220,38,38,0.3)]",
  "yugakure": "border-teal-500/50 text-teal-400 bg-teal-500/10 shadow-[0_0_8px_rgba(20,184,166,0.3)]",
  "takigakure": "border-indigo-500/50 text-indigo-400 bg-indigo-500/10 shadow-[0_0_8px_rgba(129,140,248,0.3)]",
  "ryūchi cave": "border-teal-500/50 text-teal-400 bg-teal-500/10 shadow-[0_0_8px_rgba(20,184,166,0.3)]",
  "akatsuki": "border-red-600/70 text-red-700 bg-red-700/10 shadow-[0_0_8px_rgba(220,38,38,0.3)]",
  "akatsuki (former)": "border-red-600/50 text-red-600 bg-red-600/10 shadow-[0_0_8px_rgba(220,38,38,0.3)]",
  "allied shinobi forces": "border-cyan-400/50 text-cyan-400 bg-cyan-400/10 shadow-[0_0_8px_rgba(34,211,238,0.3)]",
  "mount myōboku": "border-emerald-500/50 text-emerald-500 bg-emerald-500/10 shadow-[0_0_8px_rgba(100,245,146,0.3)]",
  "shikkotsu forest": "border-lime-500/50 text-lime-500 bg-lime-500/10 shadow-[0_0_8px_rgba(132,204,22,0.3)]",
  "root": "border-zinc-700/50 text-zinc-500 bg-zinc-700/10 shadow-[0_0_8px_rgba(0,0,0,0.5)]",
  "kara": "border-red-600/50 text-red-500 bg-red-600/10 shadow-[0_0_8px_rgba(220,38,38,0.3)]"
};

const sexColor = {
  male: "border-blue-500/50 text-blue-400 bg-blue-500/10 shadow-[0_0_8px_rgba(59,130,246,0.3)]",
  female: "border-pink-500/50 text-pink-400 bg-pink-500/10 shadow-[0_0_8px_rgba(244,114,182,0.3)]",
  various: "border-zinc-500/50 text-zinc-400 bg-zinc-500/10 shadow-[0_0_8px_rgba(156,163,175,0.3)]"
};

const bloodtypeColor = {
  a: "border-emerald-500/50 text-emerald-400 bg-emerald-500/10 shadow-[0_0_8px_rgba(16,185,129,0.3)]",
  b: "border-cyan-500/50 text-cyan-400 bg-cyan-500/10 shadow-[0_0_8px_rgba(6,182,212,0.3)]",
  ab: "border-purple-500/50 text-purple-400 bg-purple-500/10 shadow-[0_0_8px_rgba(168,85,247,0.3)]",
  o: "border-orange-500/50 text-orange-400 bg-orange-500/10 shadow-[0_0_8px_rgba(249,115,22,0.3)]",
  unknown: "border-zinc-500/50 text-zinc-400 bg-zinc-500/10 shadow-[0_0_8px_rgba(156,163,175,0.3)]"
};

const classificationColor = {
  "jinchūriki": "border-red-600/50 text-red-500 bg-red-600/10 shadow-[0_0_8px_rgba(220,38,38,0.3)]",
  "sage": "border-orange-500/50 text-orange-400 bg-orange-500/10 shadow-[0_0_8px_rgba(249,115,22,0.3)]",
  "sensor type": "border-teal-500/50 text-teal-400 bg-teal-500/10 shadow-[0_0_8px_rgba(20,184,166,0.3)]",
  "missing-nin": "border-zinc-700/50 text-zinc-500 bg-zinc-700/10 shadow-[0_0_8px_rgba(0,0,0,0.5)]",
  "medical-nin": "border-rose-600/50 text-rose-500 bg-rose-600/10 shadow-[0_0_8px_rgba(220,38,38,0.3)]",
  "s-rank": "border-red-600/50 text-red-500 bg-red-600/10 shadow-[0_0_8px_rgba(220,38,38,0.3)]",
  "sannin": "border-yellow-300/30 text-yellow-300 bg-yellow-300/10 shadow-[0_0_8px_rgba(234,179,8,0.3)]",
  "pseudo-jinchūriki": "border-red-600/50 text-red-500 bg-red-600/10 shadow-[0_0_8px_rgba(220,38,38,0.3)]",
  "mercenary ninja": "border-cyan-400/50 text-cyan-400 bg-cyan-400/10 shadow-[0_0_8px_rgba(34,211,238,0.3)]",
};

const occupationColor = {
  "hokage": "border-orange-400/50 text-orange-500 bg-orange-400/10 shadow-[0_0_8px_rgba(249,115,22,0.3)]",
  "kazekage": "border-red-600/50 text-red-500 bg-red-600/10 shadow-[0_0_8px_rgba(220,38,38,0.3)]",
  "head of the uzumaki clan": "border-orange-400/50 text-orange-500 bg-orange-400/10 shadow-[0_0_8px_rgba(249,115,22,0.3)]",
  "head of the uchiha clan": "border-red-600/50 text-red-500 bg-red-600/10 shadow-[0_0_8px_rgba(220,38,38,0.3)]",
  "heiress of the hyūga clan": "border-purple-400/50 text-purple-300 bg-purple-400/10 shadow-[0_0_8px_rgba(147,51,234,0.3)]",
  "director of konoha children mental health clinic": "border-emerald-400/50 text-emerald-600 bg-emerald-400/10 shadow-[0_0_8px_rgba(100,245,146,0.3)]",
  "head of konoha medical department": "border-rose-600/50 text-rose-500 bg-rose-600/10 shadow-[0_0_8px_rgba(220,38,38,0.3)]",
  "anbu captain": "border-cyan-400/50 text-cyan-400 bg-cyan-400/10 shadow-[0_0_8px_rgba(34,211,238,0.3)]",
  "hokage aide": "border-orange-400/50 text-orange-500 bg-orange-400/10 shadow-[0_0_8px_rgba(249,115,22,0.3)]",
  "third division commander of the allied shinobi forces": "border-cyan-400/50 text-cyan-400 bg-cyan-400/10 shadow-[0_0_8px_rgba(34,211,238,0.3)]",
  "genin exams proctor": "border-orange-400/50 text-orange-500 bg-orange-400/10 shadow-[0_0_8px_rgba(249,115,22,0.3)]",
  "chūnin exams proctor": "border-orange-400/50 text-orange-500 bg-orange-400/10 shadow-[0_0_8px_rgba(249,115,22,0.3)]",
  "vessel": "border-green-400/50 text-green-400 bg-green-400/10 shadow-[0_0_8px_rgba(100,245,146,0.3)]",
  "regimental commander of the allied shinobi forces": "border-cyan-400/50 text-cyan-400 bg-cyan-400/10 shadow-[0_0_8px_rgba(34,211,238,0.3)]",
  "commander of the fourth division": "border-emerald-500/50 text-emerald-500 bg-emerald-500/10 shadow-[0_0_8px_rgba(100,245,146,0.3)]",
  "writer": "border-orange-400/50 text-orange-500 bg-orange-400/10 shadow-[0_0_8px_rgba(249,115,22,0.3)]",
  "founder and leader of otogakure": "border-purple-400/50 text-purple-300 bg-purple-400/10 shadow-[0_0_8px_rgba(147,51,234,0.3)]",
  "scientist": "border-orange-400/50 text-orange-500 bg-orange-400/10 shadow-[0_0_8px_rgba(249,115,22,0.3)]",
  "leader of akatsuki": "border-red-600/50 text-red-500 bg-red-600/10 shadow-[0_0_8px_rgba(220,38,38,0.3)]",
  "secret leader of kirigakure": "border-blue-400/50 text-blue-200 bg-blue-400/10 shadow-[0_0_8px_rgba(44,160,243,0.3)]",
  "akatsuki leader": "border-red-600/50 text-red-500 bg-red-600/10 shadow-[0_0_8px_rgba(220,38,38,0.3)]",
  "village head": "border-orange-400/50 text-orange-500 bg-orange-400/10 shadow-[0_0_8px_rgba(249,115,22,0.3)]",
  "terrorist bomber": "border-red-600/50 text-red-500 bg-red-600/10 shadow-[0_0_8px_rgba(220,38,38,0.3)]",
  "akatsuki treasurer": "border-red-600/50 text-red-500 bg-red-600/10 shadow-[0_0_8px_rgba(220,38,38,0.3)]",
  "akatsuki spy": "border-red-600/50 text-red-500 bg-red-600/10 shadow-[0_0_8px_rgba(220,38,38,0.3)]",
  "orochimaru's right-hand man": "border-purple-800/50 text-purple-700 bg-purple-800/10 shadow-[0_0_8px_rgba(147,51,234,0.3)]",
  "sasori's spy": "border-red-600/50 text-red-500 bg-red-600/10 shadow-[0_0_8px_rgba(220,38,38,0.3)]",
  "caretaker at the konoha orphanage": "border-green-400/50 text-green-400 bg-green-400/10 shadow-[0_0_8px_rgba(100,245,146,0.3)]",
};

const beastColor = {
  "shukaku": "border-amber-600/50 text-amber-500 bg-amber-600/10 shadow-[0_0_8px_rgba(211,176,54,0.3)]",
  "matatabi": "border-blue-600/50 text-blue-500 bg-blue-600/10 shadow-[0_0_8px_rgba(44,162,33,0.3)]",
  "isobu": "border-teal-500/50 text-teal-400 bg-teal-500/10 shadow-[0_0_8px_rgba(223,115,246,0.3)]",
  "son gokū": "border-red-500/50 text-red-500 bg-red-500/10 shadow-[0_0_8px_rgba(220,38,38,0.3)]",
  "kokuō": "border-slate-500/50 text-slate-400 bg-slate-500/10 shadow-[0_0_8px_rgba(156,163,175,0.3)]",
  "saiken": "border-indigo-500/50 text-indigo-400 bg-indigo-500/10 shadow-[0_0_8px_rgba(129,140,248,0.3)]",
  "chōmei": "border-lime-500/50 text-lime-400 bg-lime-500/10 shadow-[0_0_8px_rgba(132,204,22,0.3)]",
  "gyūki": "border-purple-500/50 text-purple-400 bg-purple-500/10 shadow-[0_0_8px_rgba(156,163,175,0.3)]",
  "kurama": "border-orange-600/50 text-orange-500 bg-orange-600/10 shadow-[0_0_8px_rgba(249,115,22,0.3)]",
  "ten-tails": "border-purple-900/50 text-purple-800 bg-purple-900/10 shadow-[0_0_8px_rgba(147,51,234,0.3)]",
};

const abilityIcons = {
  "sharingan": "https://i.imgur.com/dv8piFl.png",
  "mangekyō sharingan": "https://i.imgur.com/kZtP86r.png",
  "eternal mangekyō sharingan": "https://i.imgur.com/lS4DqLk.png",
  "rinnegan": "https://i.imgur.com/ISu8ah4.png",
  "rinne sharingan": "https://i.imgur.com/PilaNKQ.png",
  "sage mode": "🐸",
  "kurama chakra mode": "🦊",
  "amaterasu": "🔥",
  "susanoo": "🛡️",
  "chidori": "⚡",
  "rasengan": "🌀",
  "byakugan": "https://i.imgur.com/4DVK3Sh.png",
  "jōgan": "https://i.imgur.com/6T4V9Pr.png",
  "kokugan": "https://i.imgur.com/JUcCbhm.png",
  "jūgo's clan's kekkei genkai": "https://i.imgur.com/feMksuY.png",
  "sakon and ukon's kekkei genkai": "https://i.imgur.com/ucchrwE.png",
  "shikotsumyaku": "https://i.imgur.com/lsicv5a.png",
};

const natureIcons = {
  "fire release": "https://i.imgur.com/6G0ellT.png",
  "water release": "https://i.imgur.com/zPAhF2O.png",
  "wind release": "https://i.imgur.com/pNT9v2T.png",
  "lightning release": "https://i.imgur.com/scbuDt0.png",
  "earth release": "https://i.imgur.com/T39UrlN.png",
  "lava release": "https://i.imgur.com/gxrpFXG.png",
  "boil release": "https://i.imgur.com/jeh6sxb.png",
  "ice release": "❄️",
  "wood release": "https://i.imgur.com/OxsfWW3.png",
  "storm release": "https://i.imgur.com/cNTLvPv.png",
  "magnet release": "https://i.imgur.com/klOmlmb.png",
  "explosion release": "https://i.imgur.com/ASTV9tj.png",
  "yin release": "https://i.imgur.com/vmqoaVZ.png",
  "yang release": "https://i.imgur.com/2owGFXF.png",
  "yin-yang release": "https://i.imgur.com/lWxnxBD.png"
};

const affiliationIcons = {
  "konohagakure": "https://i.imgur.com/kSAKLvN.png",
  "konoha orphanage": "https://i.imgur.com/upVo2yM.png",
  "sunagakure": "https://i.imgur.com/GKBt3Zt.png",
  "kumogakure": "☁️",
  "kirigakure": "https://i.imgur.com/cgfsqea.png",
  "iwagakure": "https://i.imgur.com/1EwwYk1.png",
  "akatsuki": "https://i.imgur.com/5tDWFCk.png",
  "otogakure": "https://i.imgur.com/udp5ZrB.png",
  "uzushiogakure": "🌀",
  "amegakure": "https://i.imgur.com/BfdpSy4.png",
  "yugakure": "https://i.imgur.com/T3ao9Vu.png",
  "takigakure": "https://i.imgur.com/MgfMBTM.png",
  "ryūchi cave": "https://i.imgur.com/gWX0uyD.png",
  "mount myōboku": "https://i.imgur.com/ZVgrohG.png",
  "shikkotsu forest": "https://i.imgur.com/gMnOWqt.png",
  "allied shinobi forces": "https://i.imgur.com/TlBJV9I.png",
  "root": "https://i.imgur.com/3NISBYJ.png",
  "kara": "https://i.imgur.com/iTPsy5Z.png",
};

const clanIcons = {
  "uchiha": "https://i.imgur.com/Ar7Wz3A.png",
  "uzumaki": "https://i.imgur.com/iT0cnT4.png",
  "hyuga": "https://i.imgur.com/U4U4Qqg.png",
  "hōzuki": "https://i.imgur.com/xTkqov6.png",
  "jūgo": "https://i.imgur.com/yITMwFP.png"
};

const abilityColors = {
  "sharingan": "border-red-600/50 text-red-600 bg-red-600/10 shadow-[0_0_8px_rgba(220,38,38,0.3)]",
  "mangekyō sharingan": "border-red-700/50 text-red-700 bg-red-700/10 shadow-[0_0_8px_rgba(185,28,28,0.3)]",
  "eternal mangekyō sharingan": "border-red-700/50 text-red-700 bg-red-700/10 shadow-[0_0_8px_rgba(185,28,28,0.3)]",
  "rinnegan": "border-purple-500/50 text-purple-500 bg-purple-500/10 shadow-[0_0_8px_rgba(168,85,247,0.3)]",
  "rinne sharingan": "border-red-600/50 text-red-600 bg-red-600/10 shadow-[0_0_8px_rgba(220,38,38,0.3)]",
  "sage mode": "border-orange-500/50 text-orange-500 bg-orange-500/10 shadow-[0_0_8px_rgba(249,115,22,0.3)]",
  "kurama chakra mode": "border-yellow-500/50 text-yellow-500 bg-yellow-500/10 shadow-[0_0_8px_rgba(234,179,8,0.3)]",
  "byakugan": "border-purple-100/10 text-purple-400 bg-purple-100/10 shadow-[0_0_8px_rgba(147,51,234,0.3)]",
  "jōgan": "border-purple-100/10 text-purple-400 bg-purple-100/10 shadow-[0_0_8px_rgba(147,51,234,0.3)]",
  "kokugan": "border-yellow-100/10 text-yellow-400 bg-yellow-100/10 shadow-[0_0_8px_rgba(234,179,8,0.3)]",
  "jūgo's clan's kekkei genkai": "border-red-600/50 text-red-500 bg-red-600/10 shadow-[0_0_8px_rgba(220,38,38,0.3)]",
  "sakon and ukon's kekkei genkai": "border-red-600/50 text-red-500 bg-red-600/10 shadow-[0_0_8px_rgba(220,38,38,0.3)]",
  "shikotsumyaku": "border-yellow-100/10 text-yellow-400 bg-yellow-100/10 shadow-[0_0_8px_rgba(234,179,8,0.3)]",
};

const jutsuColors = {
  "all directions shuriken": "border-orange-500/50 text-orange-400 bg-orange-500/10 shadow-[0_0_8px_rgba(249,115,22,0.3)]",
  "rasengan": "border-cyan-500/50 text-cyan-400 bg-cyan-500/10 shadow-[0_0_8px_rgba(249,115,22,0.3)]",
  "baryon mode": "border-orange-500/50 text-orange-400 bg-orange-500/10 shadow-[0_0_8px_rgba(249,115,22,0.3)]",
  "sage mode": "border-orange-500/50 text-orange-400 bg-orange-500/10 shadow-[0_0_8px_rgba(249,115,22,0.3)]",
  "sexy technique": "border-orange-500/50 text-orange-400 bg-orange-500/10 shadow-[0_0_8px_rgba(249,115,22,0.3)]",
  "shadow clone technique": "border-orange-500/50 text-orange-400 bg-orange-500/10 shadow-[0_0_8px_rgba(249,115,22,0.3)]",
  "six paths sage mode": "border-orange-500/50 text-orange-400 bg-orange-500/10 shadow-[0_0_8px_rgba(249,115,22,0.3)]",
  "tailed beast ball": "border-orange-500/50 text-orange-400 bg-orange-500/10 shadow-[0_0_8px_rgba(249,115,22,0.3)]",
  "amaterasu": "border-red-600/50 text-red-500 bg-red-600/10 shadow-[0_0_8px_rgba(220,38,38,0.3)]",
  "amenotejikara": "border-red-600/50 text-red-500 bg-red-600/10 shadow-[0_0_8px_rgba(220,38,38,0.3)]",
  "susanoo": "border-purple-500/50 text-purple-400 bg-purple-500/10 shadow-[0_0_8px_rgba(168,85,247,0.3)]",
  "chidori": "border-teal-500/50 text-teal-400 bg-teal-500/10 shadow-[0_0_8px_rgba(20,184,166,0.3)]",
  "genjutsu: sharingan": "border-red-600/50 text-red-500 bg-red-600/10 shadow-[0_0_8px_rgba(220,38,38,0.3)]",
  "chakra transfer technique": "border-purple-100/10 text-purple-400 bg-purple-100/10 shadow-[0_0_8px_rgba(147,51,234,0.3)]",
  "eight trigrams sixty-four palms": "border-purple-100/10 text-purple-400 bg-purple-100/10 shadow-[0_0_8px_rgba(147,51,234,0.3)]",
  "eight trigrams twin lions crumbling attack": "border-purple-100/10 text-purple-400 bg-purple-100/10 shadow-[0_0_8px_rgba(147,51,234,0.3)]",
  "eight trigrams vacuum palm": "border-purple-100/10 text-purple-400 bg-purple-100/10 shadow-[0_0_8px_rgba(147,51,234,0.3)]",
  "eight trigrams vacuum wall palm": "border-purple-100/10 text-purple-400 bg-purple-100/10 shadow-[0_0_8px_rgba(147,51,234,0.3)]",
  "gentle fist": "border-purple-100/10 text-purple-400 bg-purple-100/10 shadow-[0_0_8px_rgba(147,51,234,0.3)]",
  "gentle step twin lion fists": "border-purple-100/10 text-purple-400 bg-purple-100/10 shadow-[0_0_8px_rgba(147,51,234,0.3)]",
  "gentle wind spiralling twin lion fists: snow white": "border-purple-100/10 text-purple-400 bg-purple-100/10 shadow-[0_0_8px_rgba(147,51,234,0.3)]",
  "palm bottom": "border-purple-100/10 text-purple-400 bg-purple-100/10 shadow-[0_0_8px_rgba(147,51,234,0.3)]",
  "area scanning technique": "border-purple-100/10 text-purple-400 bg-purple-100/10 shadow-[0_0_8px_rgba(147,51,234,0.3)]",
  "kamui": "border-purple-700/10 text-purple-600 bg-purple-800/10 shadow-[0_0_8px_rgba(147,51,234,0.3)]",
  "lightning cutter": "border-blue-100/10 text-blue-400 bg-blue-100/10 shadow-[0_0_8px_rgba(147,51,234,0.3)]",
  "kāma": "border-zinc-500/50 text-zinc-400 bg-zinc-500/10 shadow-[0_0_8px_rgba(156,163,175,0.3)]",
  "vanishing rasengan": "border-cyan-500/50 text-cyan-400 bg-cyan-500/10 shadow-[0_0_8px_rgba(249,115,22,0.3)]",
  "otsutsuki teleportation": "border-cyan-500/50 text-cyan-400 bg-cyan-500/10 shadow-[0_0_8px_rgba(249,115,22,0.3)]",
  "chakra suppression technique": "border-cyan-500/50 text-cyan-400 bg-cyan-500/10 shadow-[0_0_8px_rgba(249,115,22,0.3)]",
  "cherry blossom impact": "border-rose-600/50 text-rose-500 bg-rose-600/10 shadow-[0_0_8px_rgba(220,38,38,0.3)]",
  "chakra enhanced strength": "border-purple-100/10 text-purple-400 bg-purple-100/10 shadow-[0_0_8px_rgba(147,51,234,0.3)]",
  "hair binding technique": "border-pink-500/50 text-pink-400 bg-pink-500/10 shadow-[0_0_8px_rgba(244,11,200,0.3)]",
  "izanami": "border-red-600/50 text-red-500 bg-red-600/10 shadow-[0_0_8px_rgba(220,38,38,0.3)]",
  "tsukuyomi": "border-red-600/50 text-red-500 bg-red-600/10 shadow-[0_0_8px_rgba(220,38,38,0.3)]",
  "crow clone technique": "border-zinc-500/50 text-zinc-400 bg-zinc-500/10 shadow-[0_0_8px_rgba(156,163,175,0.3)]",
  "summoning technique (crow)": "border-zinc-500/50 text-zinc-400 bg-zinc-500/10 shadow-[0_0_8px_rgba(156,163,175,0.3)]",
  "daikokuten": "border-red-600/50 text-red-500 bg-red-600/10 shadow-[0_0_8px_rgba(220,38,38,0.3)]",
  "sukunahikona": "border-orange-500/50 text-orange-400 bg-orange-500/10 shadow-[0_0_8px_rgba(249,115,22,0.3)]",
  "thorn explosion": "border-purple-600/10 text-purple-800 bg-purple-500/10 shadow-[0_0_8px_rgba(147,51,234,0.3)]",
  "sand manipulation": "border-brown-500/50 text-brown-400 bg-brown-500/10 shadow-[0_0_8px_rgba(156,163,175,0.3)]",
  "feigning sleep technique": "border-brown-500/50 text-brown-400 bg-brown-500/10 shadow-[0_0_8px_rgba(156,163,175,0.3)]",
  "third eye": "border-brown-500/50 text-brown-400 bg-brown-500/10 shadow-[0_0_8px_rgba(156,163,175,0.3)]",
  "tailed beast full charge": "border-orange-500/50 text-orange-400 bg-orange-500/10 shadow-[0_0_8px_rgba(249,115,22,0.3)]",
  "big ball rasengan": "border-cyan-500/50 text-cyan-400 bg-cyan-500/10 shadow-[0_0_8px_rgba(249,115,22,0.3)]",
  "toad oil bullet": "border-cyan-500/50 text-cyan-400 bg-cyan-500/10 shadow-[0_0_8px_rgba(249,115,22,0.3)]",
  "mystical palm technique": "border-cyan-500/50 text-cyan-400 bg-cyan-500/10 shadow-[0_0_8px_rgba(249,115,22,0.3)]",
  "transformation technique": "border-cyan-500/50 text-cyan-400 bg-cyan-500/10 shadow-[0_0_8px_rgba(249,115,22,0.3)]",
  "yin seal: release": "border-zinc-500/50 text-zinc-400 bg-zinc-500/10 shadow-[0_0_8px_rgba(156,163,175,0.3)]",
  "absorb chakra": "border-purple-100/10 text-purple-400 bg-purple-100/10 shadow-[0_0_8px_rgba(147,51,234,0.3)]",
  "regeneration ability": "border-purple-100/10 text-purple-400 bg-purple-100/10 shadow-[0_0_8px_rgba(147,51,234,0.3)]",
  "substitute technique": "border-purple-100/10 text-purple-400 bg-purple-100/10 shadow-[0_0_8px_rgba(147,51,234,0.3)]",
  "slithering snake mode": "border-purple-100/10 text-purple-400 bg-purple-100/10 shadow-[0_0_8px_rgba(147,51,234,0.3)]",
  "asura path": "border-red-600/50 text-red-500 bg-red-600/10 shadow-[0_0_8px_rgba(220,38,38,0.3)]",
  "chibaku tensei": "border-red-600/50 text-red-500 bg-red-600/10 shadow-[0_0_8px_rgba(220,38,38,0.3)]",
  "infinite tsukuyomi": "border-red-900/50 text-red-800 bg-red-000/10 shadow-[0_0_8px_rgba(220,38,38,0.3)]",
  "izanagi": "border-red-600/50 text-red-500 bg-red-600/10 shadow-[0_0_8px_rgba(220,38,38,0.3)]",
  "six paths technique": "border-yellow-500/50 text-yellow-400 bg-yellow-500/10 shadow-[0_0_8px_rgba(234,179,8,0.3)]",
  "yasaka magatama": "border-yellow-500/50 text-yellow-400 bg-yellow-500/10 shadow-[0_0_8px_rgba(234,179,8,0.3)]",
  "animal path": "border-yellow-500/50 text-yellow-400 bg-yellow-500/10 shadow-[0_0_8px_rgba(234,179,8,0.3)]",
  "six paths of pain": "border-yellow-500/50 text-yellow-400 bg-yellow-500/10 shadow-[0_0_8px_rgba(234,179,8,0.3)]",
  "human path": "border-yellow-500/50 text-yellow-400 bg-yellow-500/10 shadow-[0_0_8px_rgba(234,179,8,0.3)]",
  "genjutsu protect": "border-purple-400/50 text-purple-300 bg-purple-400/10 shadow-[0_0_8px_rgba(147,51,234,0.3)]",
  "dance of the shikigami": "border-purple-400/50 text-purple-300 bg-purple-400/10 shadow-[0_0_8px_rgba(147,51,234,0.3)]",
  "paper chakram": "border-purple-400/50 text-purple-300 bg-purple-400/10 shadow-[0_0_8px_rgba(147,51,234,0.3)]",
  "paper clone": "border-purple-400/50 text-purple-300 bg-purple-400/10 shadow-[0_0_8px_rgba(147,51,234,0.3)]",
  "sensing technique": "border-purple-100/50 text-purple-400 bg-purple-100/10 shadow-[0_0_8px_rgba(147,51,234,0.3)]",
  "silent killing": "border-grey-500/50 text-grey-400 bg-grey-500/10 shadow-[0_0_8px_rgba(156,163,175,0.3)]",
  "puppet technique": "border-blue-100/10 text-blue-400 bg-blue-10 shadow-[0_0_8px_rgba(147,51,234,0.3)]",
  "sand clone": "border-yellow-500/50 text-yellow-400 bg-yellow-500/10 shadow-[0_0_8px_rgba(234,179,8,0.3)]",
  "c0": "border-red-600/50 text-red-500 bg-red-600/10 shadow-[0_0_8px_rgba(220,38,38,0.3)]",
  "c1": "border-red-600/50 text-red-500 bg-red-600/10 shadow-[0_0_8px_rgba(220,38,38,0.3)]",
  "c2": "border-red-600/50 text-red-500 bg-red-600/10 shadow-[0_0_8px_rgba(220,38,38,0.3)]",
  "c3": "border-red-600/50 text-red-500 bg-red-600/10 shadow-[0_0_8px_rgba(220,38,38,0.3)]",
  "c4": "border-red-600/50 text-red-500 bg-red-600/10 shadow-[0_0_8px_rgba(220,38,38,0.3)]",
  "explosive clay": "border-orange-500/50 text-red-900 bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.3)]",
  "iwagakure kinjutsu": "border-orange-500/50 text-red-900 bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.3)]",
  "curse technique: death controlling possessed blood": "border-orange-500/50 text-red-900 bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.3)]",
  "strange mask exploding flame": "border-orange-500/50 text-red-900 bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.3)]",
  "mayfly": "border-purple-500/50 text-red-900 bg-purple-500/10 shadow-[0_0_8px_rgba(168,85,247,0.3)]",
  "possession": "border-purple-500/50 text-red-900 bg-purple-500/10 shadow-[0_0_8px_rgba(168,85,247,0.3)]",
  "projection technique": "border-purple-500/50 text-red-900 bg-purple-500/10 shadow-[0_0_8px_rgba(168,85,247,0.3)]",
  "parasite clone": "border-purple-500/50 text-red-900 bg-purple-500/10 shadow-[0_0_8px_rgba(168,85,247,0.3)]",
  "spore technique": "border-purple-500/50 text-red-900 bg-purple-500/10 shadow-[0_0_8px_rgba(168,85,247,0.3)]",
  "hydrification technique": "border-blue-500/50 text-blue-800 bg-blue-500/10 shadow-[0_0_8px_rgba(0,0,255,0.3)]",
  "heal bite": "border-purple-400/50 text-purple-800 bg-purple-400/10 shadow-[0_0_8px_rgba(102,0,255,0.3)]",
  "broadaxe": "border-blue-500/50 text-blue-800 bg-blue-500/10 shadow-[0_0_8px_rgba(0,0,255,0.3)]",
  "sage transformation": "border-red-600/50 text-red-500 bg-red-600/10 shadow-[0_0_8px_rgba(220,38,38,0.3)]",
  "nine-tails chakra mode": "border-red-600/50 text-red-500 bg-red-600/10 shadow-[0_0_8px_rgba(220,38,38,0.3)]",
};

const toolsColors = {
  "kunai": "border-orange-500/50 text-orange-400 bg-orange-500/10 shadow-[0_0_8px_rgba(249,115,22,0.3)]",
  "fūma shuriken": "border-orange-500/50 text-orange-400 bg-orange-500/10 shadow-[0_0_8px_rgba(249,115,22,0.3)]",
  "absorbing hand": "border-orange-500/50 text-orange-400 bg-orange-500/10 shadow-[0_0_8px_rgba(249,115,22,0.3)]",
  "flying thunder god kunai": "border-orange-500/50 text-orange-400 bg-orange-500/10 shadow-[0_0_8px_rgba(249,115,22,0.3)]",
  "hidden kunai mechanism": "border-orange-500/50 text-orange-400 bg-orange-500/10 shadow-[0_0_8px_rgba(249,115,22,0.3)]",
  "sand": "border-orange-500/50 text-orange-400 bg-orange-500/10 shadow-[0_0_8px_rgba(249,115,22,0.3)]",
  "bow & arrow": "border-orange-500/50 text-orange-400 bg-orange-500/10 shadow-[0_0_8px_rgba(249,115,22,0.3)]",
  "sword": "border-grey-500/50 text-grey-400 bg-grey-500/10 shadow-[0_0_8px_rgba(156,163,175,0.3)]",
  "sword of kusanagi": "border-grey-500/50 text-grey-400 bg-grey-500/10 shadow-[0_0_8px_rgba(156,163,175,0.3)]",
  "hyūga clan secret ointment": "border-purple-100/10 text-purple-400 bg-purple-100/10 shadow-[0_0_8px_rgba(147,51,234,0.3)]",
  "chakra-suppressing seal": "border-blue-100/10 text-blue-400 bg-blue-100/10 shadow-[0_0_8px_rgba(147,51,234,0.3)]",
  "kubikiribōchō": "border-blue-100/10 text-blue-400 bg-blue-100/10 shadow-[0_0_8px_rgba(147,51,234,0.3)]",
  "makibishi": "border-blue-100/10 text-blue-400 bg-blue-100/10 shadow-[0_0_8px_rgba(147,51,234,0.3)]",
  "tantō": "border-blue-100/10 text-blue-400 bg-blue-100/10 shadow-[0_0_8px_rgba(147,51,234,0.3)]",
  "white light chakra sabre": "border-blue-100/10 text-blue-400 bg-blue-100/10 shadow-[0_0_8px_rgba(147,51,234,0.3)]",
  "wire strings": "border-gray-500/50 text-gray-400 bg-gray-500/10 shadow-[0_0_8px_rgba(156,163,175,0.3)]",
  "chakra blade": "border-blue-100/10 text-blue-400 bg-blue-100/10 shadow-[0_0_8px_rgba(147,51,234,0.3)]",
  "jutsu absorption arm": "border-blue-100/10 text-blue-400 bg-blue-100/10 shadow-[0_0_8px_rgba(147,51,234,0.3)]",
  "sword of totsuka": "border-red-600/50 text-red-500 bg-red-600/10 shadow-[0_0_8px_rgba(220,38,38,0.3)]",
  "yata mirror": "border-red-600/50 text-red-500 bg-red-600/10 shadow-[0_0_8px_rgba(220,38,38,0.3)]",
  "bō": "border-green-500/50 text-green-400 bg-green-500/10 shadow-[0_0_8px_rgba(100,245,146,0.3)]",
  "microscopic scientific ninja tools": "border-yellow-500/50 text-yellow-400 bg-yellow-500/10 shadow-[0_0_8px_rgba(234,179,8,0.3)]",
  "gold dust": "border-yellow-500/50 text-yellow-400 bg-yellow-500/10 shadow-[0_0_8px_rgba(234,179,8,0.3)]",
  "sealing tag": "border-yellow-500/50 text-yellow-400 bg-yellow-500/10 shadow-[0_0_8px_rgba(234,179,8,0.3)]",
  "antidote": "border-purple-100/10 text-purple-400 bg-purple-100/10 shadow-[0_0_8px_rgba(147,51,234,0.3)]",
  "poison": "border-purple-100/10 text-purple-400 bg-purple-100/10 shadow-[0_0_8px_rgba(147,51,234,0.3)]",
  "ninja info cards": "border-yellow-500/50 text-yellow-400 bg-yellow-500/10 shadow-[0_0_8px_rgba(234,179,8,0.3)]",
  "shinigami mask": "border-yellow-500/50 text-yellow-400 bg-yellow-500/10 shadow-[0_0_8px_rgba(234,179,8,0.3)]",
  "mind awakening pill": "border-yellow-500/50 text-yellow-400 bg-yellow-500/10 shadow-[0_0_8px_rgba(234,179,8,0.3)]",
  "gunbai": "border-green-200/50 text-yellow-400 bg-green-200/10 shadow-[0_0_8px_rgba(234,179,8,0.3)]",
  "kama": "border-grey-500/50 text-grey-400 bg-grey-500/10 shadow-[0_0_8px_rgba(156,163,175,0.3)]",
  "kusari": "border-grey-500/50 text-grey-400 bg-grey-500/10 shadow-[0_0_8px_rgba(156,163,175,0.3)]",
  "sword of nunoboko": "border-yellow-500/50 text-yellow-400 bg-yellow-500/10 shadow-[0_0_8px_rgba(234,179,8,0.3)]",
  "explosive tag": "border-red-600/50 text-red-500 bg-red-600/10 shadow-[0_0_8px_rgba(220,38,38,0.3)]",
  "samehada": "border-orange-500/50 text-orange-400 bg-orange-500/10 shadow-[0_0_8px_rgba(249,115,22,0.3)]",
  "puppet": "border-blue-100/10 text-blue-400 bg-blue-100 shadow-[0_0_8px_rgba(147,51,234,0.3)]",
  "eye scope": "border-orange-500/50 text-orange-400 bg-orange-500/10 shadow-[0_0_8px_rgba(249,115,22,0.3)]",
  "retractable spear": "border-orange-500/50 text-orange-400 bg-orange-500/10 shadow-[0_0_8px_rgba(249,115,22,0.3)]",
  "triple-bladed scythe": "border-orange-500/50 text-orange-400 bg-orange-500/10 shadow-[0_0_8px_rgba(249,115,22,0.3)]",
};

const defaultTagStyle = "border-white/10 text-white/50 bg-white/5 shadow-none";

const CharacterDetails = ({ id }) => {
  const selectedChar = charactersData.find(c => c.id === id);
  const [showModal, setShowModal] = useState('info'); 
  const [activeAvatar, setActiveAvatar] = useState(null);

  useEffect(() => {
    if (selectedChar) {
      setActiveAvatar(selectedChar.mainAvatar);
    }
  }, [selectedChar]);

  if (!selectedChar) return <div className="min-h-screen bg-black flex items-center justify-center text-white">Character not found</div>;

  const getClanColor = (clanData) => {
    if (!clanData || clanData.length === 0) return 'text-shinobi-orange';
    const clanName = clanData[0].name.toLowerCase();
    return clanColors[clanName] || 'text-shinobi-orange';
  };

  const getSpecificColor = (label, value) => {
    const val = value.toString().toLowerCase();
    if (label === "Team") return teamColors[val] || "text-white/90";
    if (label === "Nature Type" || label === "Kekkei Genkai" || label === "Kekkei Tota" || label === "Kekkei Mora") 
      return abilityColors[val] || natureColors[val] || natureColors[val.replace(' release', '')] || "text-white/90";
    if (label === "Status") return statusColors[val] || "text-white/90";
    if (label === "Affiliation") return affiliationColors[val] || "text-white/90";
    if (label === "Clan") return clanColors[val] || "text-white/90";

    if (label === "Sex") return sexColor[val] || "text-white/90";
    if (label === "Blood type") return bloodtypeColor[val] || "text-white/90";
    if (label === "Classification") return classificationColor[val] || "text-white/90";
    if (label === "Occupation") return occupationColor[val] || "text-white/90";
    if (label === "Tailed Beast") return beastColor[val] || "text-white/90";

    return "text-white/90";
  };

  const handleLinkClick = (label, name) => {
    if (label === "Family") {
      const targetChar = charactersData.find(c => c.name.toLowerCase() === name.toLowerCase());
      if (targetChar) {
        window.location.hash = `#character/${targetChar.id}`;
      }
    }
  };

  const ShinobiField = ({ label, value, isLink = false }) => {
    if (!value || (Array.isArray(value) && value.length === 0)) return null;
    
    // Split strings that contain "/" to show values vertically
    const finalValues = (typeof value === 'string' && value.includes('/')) 
      ? value.split('/').map(v => v.trim()) 
      : (Array.isArray(value) ? value : [value]);

    const renderValue = (v, idx) => {
      const isObject = typeof v === 'object' && v !== null;
      const name = isObject ? v.name : v;
      const lowName = name?.toString().toLowerCase();
      const displayName = isObject ? (v.relation ? `${v.name} (${v.relation})` : v.name) : v;
      const style = getSpecificColor(label, name);
      const isSpecial = style !== "text-white/90";

      // Căutăm iconița în datele obiectului sau în mapările globale
      let icon = isObject ? v.icon : null;
      if (!icon) {
        if (label === "Nature Type" || label === "Kekkei Genkai" || label === "Kekkei Tota" || label === "Kekkei Mora") {
          icon = abilityIcons[lowName] || natureIcons[lowName] || natureIcons[lowName.replace(' release', '')];
        }
        if (label === "Affiliation") icon = affiliationIcons[lowName];
        if (label === "Clan") icon = clanIcons[lowName];
      }

      return (
        <div 
          key={idx} 
          className="flex items-center gap-3 group cursor-pointer py-1"
          onClick={() => isLink && handleLinkClick(label, name)}
        >
          {icon && (
            <div className="w-6 h-6 flex-shrink-0 flex items-center justify-center bg-white/5 rounded-md p-1 border border-white/10 group-hover:border-shinobi-orange transition-all">
              {icon.includes('http') ? (
                <img src={icon} alt="" className="w-full h-full object-contain" />
              ) : (
                <span className="text-xs">{icon}</span>
              )}
            </div>
          )}
          <span className={`text-[10px] font-black uppercase tracking-widest transition-all ${isSpecial ? `px-3 py-1.5 border rounded-md ${style}` : style} ${isLink ? 'hover:underline decoration-shinobi-orange underline-offset-4' : ''}`}>
            {displayName}
          </span>
        </div>
      );
    };

    return (
      <div className="mb-6 group/field">
        <span className="text-white/30 font-black uppercase tracking-[0.3em] text-[10px] block mb-2 group-hover/field:text-shinobi-orange transition-colors border-l-2 border-shinobi-orange/30 pl-3">
          {label}
        </span>
        <div className="flex flex-col gap-3 pl-4">
          {finalValues.map((v, i) => renderValue(v, i))}
        </div>
      </div>
    );
  };

  return (
    <div className="relative min-h-screen bg-black pt-32 pb-20 px-10 text-white">
      <Navbar />
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
        className="max-w-7xl mx-auto bg-neutral-900/40 backdrop-blur-2xl border border-white/10 p-10 relative rounded-2xl shadow-2xl"
      >
        <button onClick={() => window.location.hash = '#character'} className="absolute top-6 left-6 text-white/40 hover:text-shinobi-orange uppercase text-[10px] font-black tracking-[0.3em] flex items-center gap-2 transition-all">
          <span className="text-lg">←</span> Back to selection
        </button>
        
        <div className="flex flex-col md:flex-row gap-12 items-center md:items-end mt-8 md:mt-12 mb-16 border-b border-white/5 pb-12">
          <div className="w-full md:w-72 lg:w-80 h-80 md:h-[450px] relative group flex-shrink-0 flex items-center justify-center overflow-hidden">
            <img src={activeAvatar} className="max-w-full max-h-full object-contain drop-shadow-[0_0_30px_rgba(255,107,0,0.3)] transition-transform duration-500 group-hover:scale-105" alt="Shinobi" />
          </div>
          <div className="flex-1 min-w-0">
            <h2 className="text-6xl md:text-8xl font-black text-white mb-8 italic uppercase leading-tight">
              {selectedChar.name.split(' ')[0]} <br/>
              <span className={getClanColor(selectedChar.clan)}>
                {selectedChar.name.split(' ').slice(1).join(' ')}
              </span>
            </h2>
            <div className="flex flex-wrap gap-4">
              {Object.entries(selectedChar.avatars).map(([key, url]) => url && (
                <button key={key} onClick={() => setActiveAvatar(url)} className={`px-4 py-2 border text-[10px] font-black uppercase tracking-widest transition-all ${activeAvatar === url ? 'bg-shinobi-orange border-shinobi-orange text-black' : 'border-white/10 text-white/40 hover:border-white/40'}`}>
                  {key.replace('boruto', '').replace('NG', 'Next Gen').replace('TBV', 'Two Blue Vortex') || 'Classic'}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-3 space-y-2">
            <ShinobiField label="Name" value={selectedChar.name} />
            <ShinobiField label="Birthday" value={selectedChar.birthday} />
            <ShinobiField label="Sex" value={selectedChar.sex} />
            <ShinobiField label="Status" value={selectedChar.status} />
            <ShinobiField label="Blood type" value={selectedChar.bloodType} />
            <ShinobiField label="Kekkei Genkai" value={selectedChar.kekkeiGenkai} />
            <ShinobiField label="Kekkei Tota" value={selectedChar.kekkeiTota} />
            <ShinobiField label="Kekkei Mora" value={selectedChar.kekkeiMora} />
            <ShinobiField label="Classification" value={selectedChar.classification} />
            <ShinobiField label="Tailed Beast" value={selectedChar.tailedBeast} />
            <ShinobiField label="Occupation" value={selectedChar.occupation} />
            <ShinobiField label="Affiliation" value={selectedChar.affiliation} />
            <ShinobiField label="Team" value={selectedChar.team} />
            <ShinobiField label="Clan" value={selectedChar.clan} isLink={true} />
            <ShinobiField label="Ninja Rank" value={selectedChar.ninjaRank} />
            <ShinobiField label="Nature Type" value={selectedChar.natureType} />
            <ShinobiField label="Family" value={selectedChar.family} isLink={true} />
          </div>
          <div className="lg:col-span-6 px-4 border-x border-white/5">
            <span className="text-white/20 font-black uppercase tracking-[0.3em] text-[10px] block mb-4 italic border-b border-white/5 pb-2">Description</span>
            <p className="text-white/70 leading-relaxed font-medium tracking-wide text-xs first-letter:text-4xl first-letter:font-black first-letter:text-shinobi-orange first-letter:mr-2 first-letter:float-left">
              {selectedChar.description}
            </p>
          </div>
          <div className="lg:col-span-3 space-y-10">
            <div className="flex gap-4">
              <button onClick={() => setShowModal('jutsu')} className="flex-1 py-4 bg-shinobi-orange text-black font-black uppercase text-[10px] tracking-widest hover:bg-white transition-all">Jutsu List</button>
              <button onClick={() => setShowModal('tools')} className="flex-1 py-4 border border-white/20 text-white font-black uppercase text-[10px] tracking-widest hover:border-shinobi-orange">Tools</button>
            </div>
            <div>
              <h4 className="text-white/20 font-black uppercase tracking-[0.3em] text-[10px] mb-6 border-b border-white/5 pb-2 italic">Abilities</h4>
              <div className="space-y-5">
                {selectedChar.abilities.map((abil, i) => {
                  const style = abilityColors[abil.name.toLowerCase()] || defaultTagStyle;
                  const icon = abil.icon || abilityIcons[abil.name.toLowerCase()];
                  return (
                    <motion.div key={i} whileHover={{ x: 5, scale: 1.02 }} className={`flex items-center gap-3 px-5 py-4 border rounded-md transition-all ${style}`}>
                      {icon && (
                        <div className="w-5 h-5 flex-shrink-0 flex items-center justify-center">
                          {icon.includes('http') ? (
                            <img src={icon} alt="" className="w-full h-full object-contain" />
                          ) : (
                            <span className="text-sm">{icon}</span>
                          )}
                        </div>
                      )}
                      <span className="font-black uppercase text-[10px] tracking-[0.1em]">{abil.name}</span>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Gallery Section */}
        <div className="mt-24 pt-12 border-t border-white/5">
          <h4 className="text-white/20 font-black uppercase tracking-[0.5em] text-sm mb-12 text-center italic">Artistic Gallery</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {selectedChar.gallery?.map((item, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5, scale: 1.02 }}
                className="relative aspect-video bg-black/40 border border-white/10 overflow-hidden rounded-lg group shadow-2xl"
              >
                {item.type === 'image' ? (
                  <img src={item.url} alt="Gallery item" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                ) : (
                  <iframe 
                    src={item.url}
                    className="w-full h-full opacity-60 group-hover:opacity-100 transition-opacity"
                    title="Shinobi Highlight"
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                  ></iframe>
                )}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-shinobi-orange/40 transition-all duration-500 pointer-events-none" />
                <div className="absolute top-2 left-2 bg-black/60 backdrop-blur-md px-2 py-1 rounded text-[8px] font-black uppercase tracking-widest text-shinobi-orange">{item.type}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {selectedChar && (showModal === 'jutsu' || showModal === 'tools') && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-6" onClick={() => setShowModal('info')}>
            <motion.div initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} className="bg-neutral-900 border border-shinobi-orange w-full max-w-lg p-10 relative" onClick={e => e.stopPropagation()}>
              <h3 className="text-shinobi-orange text-3xl font-black uppercase mb-8 italic">{showModal}</h3>
              <div className="flex flex-wrap gap-4">
                {selectedChar[showModal].map((item, i) => {
                  const style = (showModal === 'jutsu' ? jutsuColors[item.toLowerCase()] : toolsColors[item.toLowerCase()]) || defaultTagStyle;
                  return (
                    <motion.div key={i} whileHover={{ scale: 1.05 }} className={`px-5 py-3 border rounded-md font-black uppercase text-[10px] tracking-[0.15em] transition-all ${style}`}>
                      {item}
                    </motion.div>
                  );
                })}
              </div>
              <button onClick={() => setShowModal('info')} className="mt-8 text-xs font-black uppercase text-shinobi-orange/50 hover:text-white transition-colors">Close View</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CharacterDetails;