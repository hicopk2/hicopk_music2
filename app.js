/* ===================== HiCopK Music — front-end prototype ===================== */
/* All data below is generated/mocked in-memory. There is no real backend, no real
   Discord OAuth, and no real audio files — playback is a synthesized tone used to
   demonstrate the player UI. Nothing persists after a page refresh. */

const ICON = {
  home:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11l9-8 9 8"/><path d="M5 10v10h14V10"/></svg>',
  compass:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M15.5 8.5l-3 5-5 3 3-5z"/></svg>',
  search:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>',
  library:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 3v18M10 3v18M15 6l5 1.5v13L15 19"/></svg>',
  upload:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 16V4M7 9l5-5 5 5"/><path d="M4 16v3a2 2 0 002 2h12a2 2 0 002-2v-3"/></svg>',
  playlist:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 6h12M4 12h12M4 18h7"/><circle cx="19" cy="16" r="2.4"/><path d="M21.4 16V7l-3 1"/></svg>',
  bell:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 8a6 6 0 1112 0c0 5 2 6 2 6H4s2-1 2-6"/><path d="M10 20a2 2 0 004 0"/></svg>',
  user:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 4-6 8-6s8 2 8 6"/></svg>',
  play:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 5v14l12-7z"/></svg>',
  pause:'<svg viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="5" width="4" height="14"/><rect x="14" y="5" width="4" height="14"/></svg>',
  prev:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M6 5h2v14H6zM20 5v14l-11-7z"/></svg>',
  next:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M16 5h2v14h-2zM4 5v14l11-7z"/></svg>',
  shuffle:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h4l9 12h5M17 3l4 3-4 3M3 18h4l3-4M17 21l4-3-4-3"/></svg>',
  repeat:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 2l4 4-4 4"/><path d="M3 11V9a4 4 0 014-4h14"/><path d="M7 22l-4-4 4-4"/><path d="M21 13v2a4 4 0 01-4 4H3"/></svg>',
  heart:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s-7-4.4-9.5-9C.7 8.4 3 5 6.5 5c2 0 3.3 1 5.5 3.2C14.2 6 15.5 5 17.5 5 21 5 23.3 8.4 21.5 12 19 16.6 12 21 12 21z"/></svg>',
  heartFill:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 21s-7-4.4-9.5-9C.7 8.4 3 5 6.5 5c2 0 3.3 1 5.5 3.2C14.2 6 15.5 5 17.5 5 21 5 23.3 8.4 21.5 12 19 16.6 12 21 12 21z"/></svg>',
  repost:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 1l4 4-4 4"/><path d="M3 11V9a4 4 0 014-4h14"/><path d="M7 23l-4-4 4-4"/><path d="M21 13v2a4 4 0 01-4 4H3"/></svg>',
  comment:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.4 8.4 0 01-8.9 8.4A9 9 0 015 19l-3 1 1-3.2A8.4 8.4 0 0121 11.5z"/></svg>',
  share:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="M8.6 10.6l6.8-3.8M8.6 13.4l6.8 3.8"/></svg>',
  volume:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9v6h4l5 4V5L8 9z"/><path d="M17 8a5 5 0 010 8"/></svg>',
  volumeMute:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9v6h4l5 4V5L8 9z"/><path d="M22 9l-6 6M16 9l6 6"/></svg>',
  dots:'<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="5" cy="12" r="1.8"/><circle cx="12" cy="12" r="1.8"/><circle cx="19" cy="12" r="1.8"/></svg>',
  close:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>',
  plus:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>',
  settings:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 00.3 1.9l.1.1a2 2 0 11-2.8 2.8l-.1-.1a1.7 1.7 0 00-1.9-.3 1.7 1.7 0 00-1 1.5V21a2 2 0 11-4 0v-.1a1.7 1.7 0 00-1-1.6 1.7 1.7 0 00-1.9.3l-.1.1a2 2 0 11-2.8-2.8l.1-.1a1.7 1.7 0 00.3-1.9 1.7 1.7 0 00-1.5-1H3a2 2 0 110-4h.1a1.7 1.7 0 001.5-1 1.7 1.7 0 00-.3-1.9l-.1-.1a2 2 0 112.8-2.8l.1.1a1.7 1.7 0 001.9.3H9a1.7 1.7 0 001-1.5V3a2 2 0 114 0v.1a1.7 1.7 0 001 1.5 1.7 1.7 0 001.9-.3l.1-.1a2 2 0 112.8 2.8l-.1.1a1.7 1.7 0 00-.3 1.9V9a1.7 1.7 0 001.5 1h.1a2 2 0 110 4h-.1a1.7 1.7 0 00-1.5 1z"/></svg>',
  shield:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l8 4v6c0 5-3.4 8.4-8 10-4.6-1.6-8-5-8-10V6z"/></svg>',
  chart:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20V10M12 20V4M20 20v-7"/></svg>',
  edit:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 013 3L7 19l-4 1 1-4z"/></svg>',
  trash:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18M8 6V4h8v2M6 6l1 14h10l1-14"/></svg>',
  discord:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.3 5.4A17.6 17.6 0 0015.6 4l-.3.6a13 13 0 00-6.6 0L8.4 4a17.6 17.6 0 00-4.7 1.4C1 9.9.3 14.3.6 18.6a17.9 17.9 0 005.4 2.7l.8-1.3a11.6 11.6 0 01-1.9-.9l.5-.4a12.7 12.7 0 0010.2 0l.5.4a11.6 11.6 0 01-1.9.9l.8 1.3a17.8 17.8 0 005.4-2.7c.4-5-.9-9.4-3.1-13.2zM9 15.8c-1 0-1.9-1-1.9-2.1S8 11.6 9 11.6s1.9 1 1.9 2.1-.9 2.1-1.9 2.1zm6 0c-1 0-1.9-1-1.9-2.1s.9-2.1 1.9-2.1 1.9 1 1.9 2.1-.9 2.1-1.9 2.1z"/></svg>',
  x:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>',
  check:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>',
  flag:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V4s-1 1-4 1-5-2-8-2-4 1-4 1z"/><path d="M4 22V4"/></svg>',
};

function el(html){ const t=document.createElement('template'); t.innerHTML=html.trim(); return t.content.firstElementChild; }
function fmtTime(s){ if(!isFinite(s)||s<0) s=0; const m=Math.floor(s/60); const sec=Math.floor(s%60); return m+':'+String(sec).padStart(2,'0'); }
function fmtCount(n){ if(n>=1000000) return (n/1000000).toFixed(1)+'M'; if(n>=1000) return (n/1000).toFixed(1)+'K'; return String(n); }
function timeAgo(ts){ const d=(Date.now()-ts)/1000; if(d<60) return 'just now'; if(d<3600) return Math.floor(d/60)+'m'; if(d<86400) return Math.floor(d/3600)+'h'; if(d<86400*30) return Math.floor(d/86400)+'d'; return Math.floor(d/(86400*30))+'mo'; }
function uid(prefix){ return prefix+'_'+Math.random().toString(36).slice(2,9); }
function esc(s){ const d=document.createElement('div'); d.textContent=s==null?'':String(s); return d.innerHTML; }
function seededRand(seed){ let x = Math.sin(seed)*10000; return x-Math.floor(x); }

// ---------- gradient placeholder art (data-uri free, pure CSS gradient via inline svg) ----------
function artFor(seedStr, kind){
  let h=0; for(let i=0;i<seedStr.length;i++) h = (h*31 + seedStr.charCodeAt(i)) >>> 0;
  const hue = h % 360;
  const c1 = `hsl(${hue},70%,42%)`, c2 = `hsl(${(hue+40)%360},80%,18%)`;
  const shape = kind==='avatar'
    ? `<circle cx="50" cy="38" r="20" fill="rgba(255,255,255,.5)"/><circle cx="50" cy="100" r="34" fill="rgba(255,255,255,.35)"/>`
    : `<circle cx="${20+ (h%60)}" cy="${20+(h%40)}" r="${34+(h%20)}" fill="rgba(0,0,0,.25)"/>`;
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='300' height='300'><defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'><stop offset='0' stop-color='${c1}'/><stop offset='1' stop-color='${c2}'/></linearGradient></defs><rect width='300' height='300' fill='url(#g)'/>${shape}</svg>`;
  return 'data:image/svg+xml;utf8,'+encodeURIComponent(svg);
}
function bannerFor(seedStr){
  let h=0; for(let i=0;i<seedStr.length;i++) h=(h*31+seedStr.charCodeAt(i))>>>0;
  const hue=h%360;
  const svg=`<svg xmlns='http://www.w3.org/2000/svg' width='1200' height='300'><defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='0'><stop offset='0' stop-color='hsl(${hue},60%,14%)'/><stop offset='1' stop-color='hsl(${(hue+60)%360},80%,30%)'/></linearGradient></defs><rect width='1200' height='300' fill='url(#g)'/></svg>`;
  return 'data:image/svg+xml;utf8,'+encodeURIComponent(svg);
}

/* ===================== Mock data ===================== */
const GENRES = ['Lo-fi','Trap','House','Drum & Bass','Hyperpop','R&B','Synthwave','Ambient','Phonk','Indie'];

const USERS = [
  {id:'u1', username:'nightwave', display:'Nightwave', avatar:artFor('nightwave','avatar'), banner:bannerFor('nightwave'), bio:'Making noise from a bedroom studio since 2019. Bass-heavy, always a little too loud.', location:'Portland, OR', website:'nightwave.example', genres:['Trap','House'], artists:['Flume','SOPHIE'], accent:'#ff2340', followers:18200, following:140},
  {id:'u2', username:'clairelune', display:'Claire Lune', avatar:artFor('clairelune','avatar'), banner:bannerFor('clairelune'), bio:'Soft synths, softer vocals. New EP dropping soon 🌙', location:'Montreal, QC', website:'clairelune.example', genres:['Synthwave','Ambient'], artists:['Tame Impala'], accent:'#ff5470', followers:9400, following:88},
  {id:'u3', username:'basshaus', display:'BASSHAUS', avatar:artFor('basshaus','avatar'), banner:bannerFor('basshaus'), bio:'Warehouse sets. Heavy low end. Booking: bookings@example.com', location:'Berlin', website:'basshaus.example', genres:['House','Drum & Bass'], artists:['Overmono'], accent:'#ff2340', followers:41200, following:12},
  {id:'u4', username:'moth.wav', display:'moth.wav', avatar:artFor('moth.wav','avatar'), banner:bannerFor('mothwav'), bio:'lofi for tired hearts', location:'unknown', website:'', genres:['Lo-fi','Ambient'], artists:['Nujabes'], accent:'#ff8b98', followers:5100, following:320},
  {id:'u5', username:'kdrift', display:'K.Drift', avatar:artFor('kdrift','avatar'), banner:bannerFor('kdrift'), bio:'phonk / drift culture soundtrack. 190bpm and rising.', location:'Tokyo', website:'', genres:['Phonk'], artists:[], accent:'#ff2340', followers:27600, following:54},
  {id:'me', username:'you', display:'You', avatar:artFor('you-default','avatar'), banner:bannerFor('you-default'), bio:'', location:'', website:'', genres:[], artists:[], accent:'#ff2340', followers:0, following:0},
];
function userById(id){ return USERS.find(u=>u.id===id); }
function userByUsername(name){ return USERS.find(u=>u.username===name); }

const TRACK_TITLES = ['Midnight Static','Glass Skyline','Velvet Circuit','Afterglow','Concrete Bloom','Slow Burn','Neon Drift','Paper Moon','Low Tide','Echo Chamber','Fever Dream','Sable','Rewind','Ghost Frequency','Halcyon','Static Bloom'];
let TRACKS = [];
(function seedTracks(){
  let idc=1;
  const owners = ['u1','u2','u3','u4','u5'];
  TRACK_TITLES.forEach((title,i)=>{
    const owner = owners[i % owners.length];
    const genre = GENRES[i % GENRES.length];
    const dur = 120 + Math.floor(seededRand(i*7+3)*140);
    TRACKS.push({
      id:'t'+idc++,
      title, ownerId:owner,
      art:artFor(title+i,'art'),
      genre, tags:[genre.toLowerCase(), 'original', i%2?'chill':'energetic'],
      album:null,
      plays: Math.floor(400 + seededRand(i*3)* 90000),
      likes: new Set(owners.filter(()=>Math.random()>0.5).map(o=>o)).size + Math.floor(seededRand(i*11)*400),
      likedBy:new Set(),
      reposts: Math.floor(seededRand(i*5)*120),
      repostedBy:new Set(),
      duration: dur,
      waveSeed: i*13+7,
      description: 'Track '+(i+1)+' — built over a few late nights. Recorded, mixed, and mastered independently.',
      lyrics:'',
      explicit: i%6===0,
      visibility:'public',
      createdAt: Date.now() - (i+1)*86400000*Math.ceil(seededRand(i)*9),
      comments: []
    });
  });
  // seed some comments
  TRACKS.slice(0,6).forEach((t,i)=>{
    const commenters = ['u2','u3','u4','u5','u1'];
    for(let c=0;c<2+ (i%3);c++){
      const cu = commenters[(i+c)%commenters.length];
      if(cu===t.ownerId) continue;
      t.comments.push({
        id:uid('c'), userId:cu,
        text:['This hits different 🔥','Been on repeat all week','That drop at the midpoint is insane','Mastering is so clean on this one','Need the stems!!'][c%5],
        timestampSec: c%2? Math.floor(seededRand(c+i)*t.duration) : null,
        likes: Math.floor(seededRand(c*i+1)*20),
        createdAt: Date.now() - c*3600*1000*Math.ceil(seededRand(c+i)*20),
        replies:[]
      });
    }
  });
})();

let PLAYLISTS = [
  {id:'p1', title:'Late Night Drive', ownerId:'u1', cover:artFor('Late Night Drive','art'), description:'For the 2am highway runs.', isPublic:true, trackIds:['t1','t3','t7','t9'], likedBy:new Set(['u2'])},
  {id:'p2', title:'Focus Flow', ownerId:'u4', cover:artFor('Focus Flow','art'), description:'Lo-fi to keep you in the zone.', isPublic:true, trackIds:['t2','t6','t10','t12','t14'], likedBy:new Set()},
  {id:'p3', title:'Warehouse Selects', ownerId:'u3', cover:artFor('Warehouse Selects','art'), description:'Peak-time cuts.', isPublic:true, trackIds:['t4','t8','t11'], likedBy:new Set(['u1','u5'])},
];

let ALBUMS = [
  {id:'al1', title:'Static Bloom EP', ownerId:'u1', cover:artFor('Static Bloom EP','art'), description:'A 4-track study in distortion and restraint.', genre:'Trap', releaseDate:'2026-02-14', trackIds:['t1','t5','t9','t13']},
];

let NOTIFICATIONS = [
  {id:uid('n'), type:'follow', actorId:'u3', targetId:null, read:false, createdAt:Date.now()-3600e3},
  {id:uid('n'), type:'like', actorId:'u2', targetId:'t1', read:false, createdAt:Date.now()-7200e3},
  {id:uid('n'), type:'comment', actorId:'u4', targetId:'t1', read:true, createdAt:Date.now()-86400e3},
  {id:uid('n'), type:'repost', actorId:'u5', targetId:'t3', read:true, createdAt:Date.now()-2*86400e3},
  {id:uid('n'), type:'playlist_add', actorId:'u1', targetId:'t2', read:true, createdAt:Date.now()-3*86400e3},
];

/* ===================== App state ===================== */
const S = {
  user: null,               // logged-in user object (from USERS) or null
  route: '#/landing',
  following: new Set(),     // ids the current user follows
  library: {liked:new Set(), reposted:new Set(), recentlyPlayed:[]},
  queue: [],
  queueIndex: -1,
  playing: false,
  currentTrack: null,
  position: 0,
  volume: 0.8,
  muted: false,
  shuffle: false,
  repeat: 'off', // off | one | all
  searchQuery: '',
  toasts: [],
  uploadDraft: {progress:0, uploading:false},
};

function toast(msg){
  const t = el(`<div class="toast">${esc(msg)}</div>`);
  document.getElementById('toast-stack').appendChild(t);
  setTimeout(()=>{ t.style.transition='opacity .25s'; t.style.opacity='0'; setTimeout(()=>t.remove(),250); }, 2600);
}

/* ===================== Waveform + audio engine ===================== */
function waveformData(seed, bars){
  const data=[];
  for(let i=0;i<bars;i++){
    const v = 0.15 + 0.85*Math.abs(Math.sin(seed*0.7+i*0.35) * Math.cos(seed*0.31+i*0.12) + seededRand(seed+i)*0.5 - 0.15);
    data.push(Math.min(1, Math.max(0.06, v)));
  }
  return data;
}
function drawWave(canvas, seed, progress){
  const dpr = window.devicePixelRatio||1;
  const rect = canvas.getBoundingClientRect();
  const w = Math.max(1, rect.width), h = Math.max(1, rect.height);
  if(canvas.width !== Math.floor(w*dpr)) canvas.width = Math.floor(w*dpr);
  if(canvas.height !== Math.floor(h*dpr)) canvas.height = Math.floor(h*dpr);
  const ctx = canvas.getContext('2d');
  ctx.setTransform(dpr,0,0,dpr,0,0);
  ctx.clearRect(0,0,w,h);
  const barCount = Math.max(24, Math.floor(w/4));
  const data = waveformData(seed, barCount);
  const gap = 2;
  const barW = w/barCount - gap;
  const playedCount = Math.floor(progress*barCount);
  for(let i=0;i<barCount;i++){
    const bh = data[i]*h;
    const x = i*(barW+gap);
    const y = (h-bh)/2;
    ctx.fillStyle = i<=playedCount ? '#ff2340' : 'rgba(255,255,255,.16)';
    ctx.fillRect(x, y, Math.max(1,barW), bh);
  }
}

const Audio_ = {
  ctx:null, osc:null, gain:null, filter:null,
  ensure(){ if(!this.ctx){ this.ctx = new (window.AudioContext||window.webkitAudioContext)(); } },
  start(track){
    this.ensure();
    this.stop();
    const ctx=this.ctx;
    const osc = ctx.createOscillator();
    const osc2 = ctx.createOscillator();
    const gain = ctx.createGain();
    const filter = ctx.createBiquadFilter();
    filter.type='lowpass';
    filter.frequency.value = 1200;
    // derive a base frequency from track id so different tracks sound different
    let h=0; for(let i=0;i<track.id.length;i++) h=(h*31+track.id.charCodeAt(i))>>>0;
    const base = 90 + (h%10)*14;
    osc.type='sawtooth'; osc.frequency.value = base;
    osc2.type='sine'; osc2.frequency.value = base*1.5;
    gain.gain.value = 0;
    osc.connect(filter); osc2.connect(filter); filter.connect(gain); gain.connect(ctx.destination);
    osc.start(); osc2.start();
    gain.gain.linearRampToValueAtTime(S.muted?0:S.volume*0.05, ctx.currentTime+0.4);
    this.osc=osc; this.osc2=osc2; this.gain=gain; this.filter=filter;
    // slow filter movement for interest
    this._lfo = setInterval(()=>{
      if(!this.filter) return;
      const t = ctx.currentTime;
      this.filter.frequency.setTargetAtTime(700+Math.sin(t*0.5)*500+400, t, 0.3);
    }, 300);
  },
  setVolume(v){ if(this.gain && this.ctx) this.gain.gain.setTargetAtTime(S.muted?0:v*0.05, this.ctx.currentTime, 0.05); },
  stop(){
    if(this._lfo) clearInterval(this._lfo);
    if(this.osc){ try{ this.gain.gain.linearRampToValueAtTime(0, this.ctx.currentTime+0.15); this.osc.stop(this.ctx.currentTime+0.2); this.osc2.stop(this.ctx.currentTime+0.2);}catch(e){} }
    this.osc=null; this.osc2=null; this.gain=null;
  }
};

let playTimer=null;
function playTrack(track, queueList){
  if(!requireAuth()) return;
  S.currentTrack = track;
  S.queue = queueList || [track];
  S.queueIndex = S.queue.findIndex(t=>t.id===track.id);
  S.position = 0;
  S.playing = true;
  S.library.recentlyPlayed = [track.id, ...S.library.recentlyPlayed.filter(id=>id!==track.id)].slice(0,20);
  track.plays++;
  Audio_.start(track);
  clearInterval(playTimer);
  playTimer = setInterval(()=>{
    if(!S.playing) return;
    S.position += 0.25;
    if(S.position >= S.currentTrack.duration){
      if(S.repeat==='one'){ S.position=0; }
      else { nextTrack(); return; }
    }
    renderPlayerBarProgress();
  }, 250);
  renderAll();
}
function togglePlay(){
  if(!S.currentTrack) return;
  S.playing = !S.playing;
  if(S.playing){ Audio_.start(S.currentTrack); Audio_.gain && Audio_.gain.gain.setTargetAtTime(S.muted?0:S.volume*0.05, Audio_.ctx.currentTime,0.1);}
  else { Audio_.stop(); }
  renderPlayerBar();
}
function nextTrack(){
  if(!S.queue.length) return;
  let idx = S.queueIndex;
  if(S.shuffle){ idx = Math.floor(Math.random()*S.queue.length); }
  else { idx = idx+1; if(idx>=S.queue.length){ if(S.repeat==='all') idx=0; else { S.playing=false; Audio_.stop(); renderPlayerBar(); return; } } }
  playTrack(S.queue[idx], S.queue);
}
function prevTrack(){
  if(!S.queue.length) return;
  if(S.position>3){ S.position=0; renderPlayerBarProgress(); return; }
  let idx = S.queueIndex-1;
  if(idx<0) idx = S.repeat==='all' ? S.queue.length-1 : 0;
  playTrack(S.queue[idx], S.queue);
}
function seekTo(fraction){
  if(!S.currentTrack) return;
  S.position = fraction*S.currentTrack.duration;
  renderPlayerBarProgress();
}

/* ===================== Auth ===================== */
function requireAuth(){
  if(!S.user){ openModal(authModal()); return false; }
  return true;
}
function loginWithDiscord(){
  const btn = document.getElementById('discord-login-btn');
  if(btn){ btn.innerHTML = 'Connecting to Discord…'; btn.disabled=true; }
  setTimeout(()=>{
    S.user = userById('me');
    closeModal();
    toast('Signed in as @'+S.user.username);
    location.hash = '#/home';
  }, 900);
}
function logout(){
  S.user=null; Audio_.stop(); S.playing=false; S.currentTrack=null; clearInterval(playTimer);
  location.hash = '#/landing';
  toast('Signed out');
}

/* ===================== Modal system ===================== */
function openModal(node){
  const root = document.getElementById('modal-root');
  root.innerHTML='';
  const backdrop = el(`<div class="modal-backdrop"></div>`);
  backdrop.appendChild(node);
  backdrop.addEventListener('click', e=>{ if(e.target===backdrop) closeModal(); });
  root.appendChild(backdrop);
}
function closeModal(){ document.getElementById('modal-root').innerHTML=''; }

function authModal(){
  const m = el(`
  <div class="modal auth-modal">
    <div class="brand-mark" style="width:52px;height:52px;font-size:22px;">H</div>
    <h3>Sign in to HiCopK Music</h3>
    <p>You need an account to play, like, upload, and follow artists.</p>
    <button class="discord-btn" id="discord-login-btn" style="width:100%;justify-content:center;">${ICON.discord} Continue with Discord</button>
    <div class="auth-note">This is a simulated login for the prototype — no real Discord connection is made and no credentials are collected.</div>
  </div>`);
  m.querySelector('#discord-login-btn').addEventListener('click', loginWithDiscord);
  return m;
}

function confirmModal(title, body, confirmLabel, onConfirm, danger){
  const m = el(`
  <div class="modal">
    <div class="modal-head"><h3>${esc(title)}</h3><button class="close-x">${ICON.close}</button></div>
    <p style="font-size:13.5px;color:var(--text-dim);line-height:1.6;margin-bottom:20px;">${esc(body)}</p>
    <div style="display:flex;gap:10px;justify-content:flex-end;">
      <button class="btn ghost" data-c>Cancel</button>
      <button class="btn ${danger?'danger':'primary'}" data-ok>${esc(confirmLabel)}</button>
    </div>
  </div>`);
  m.querySelector('.close-x').addEventListener('click', closeModal);
  m.querySelector('[data-c]').addEventListener('click', closeModal);
  m.querySelector('[data-ok]').addEventListener('click', ()=>{ closeModal(); onConfirm(); });
  return m;
}

function shareModal(kind, obj){
  const url = location.origin + location.pathname + '#/'+kind+'/'+obj.id;
  const m = el(`
  <div class="modal">
    <div class="modal-head"><h3>Share</h3><button class="close-x">${ICON.close}</button></div>
    <div class="field"><label>Link</label><div style="display:flex;gap:8px;"><input readonly value="${esc(url)}" style="flex:1;"><button class="btn primary small" id="copy-link-btn">Copy</button></div></div>
    <div style="display:flex;gap:10px;margin-top:6px;flex-wrap:wrap;">
      <button class="pill">Copy embed code</button>
      <button class="pill">Share to Discord</button>
      <button class="pill">Share to X</button>
    </div>
  </div>`);
  m.querySelector('.close-x').addEventListener('click', closeModal);
  m.querySelector('#copy-link-btn').addEventListener('click', ()=>{ toast('Link copied'); });
  return m;
}

function addToPlaylistModal(track){
  if(!requireAuth()) return;
  const mine = PLAYLISTS.filter(p=>p.ownerId===S.user.id);
  const m = el(`
  <div class="modal">
    <div class="modal-head"><h3>Add to playlist</h3><button class="close-x">${ICON.close}</button></div>
    ${mine.length? mine.map(p=>`
      <label style="display:flex;align-items:center;gap:12px;padding:9px 4px;cursor:pointer;">
        <input type="checkbox" data-pid="${p.id}" ${p.trackIds.includes(track.id)?'checked':''}>
        <img src="${p.cover}" style="width:34px;height:34px;border-radius:6px;object-fit:cover;">
        <span style="font-size:13.5px;">${esc(p.title)}</span>
      </label>`).join('') : `<p style="color:var(--text-dim);font-size:13px;margin-bottom:14px;">You don't have any playlists yet.</p>`}
    <div style="display:flex;gap:10px;margin-top:16px;">
      <button class="btn ghost" id="new-pl-btn">${ICON.plus} New playlist</button>
      <button class="btn primary" id="done-pl-btn" style="margin-left:auto;">Done</button>
    </div>
  </div>`);
  m.querySelector('.close-x').addEventListener('click', closeModal);
  m.querySelectorAll('input[type=checkbox]').forEach(cb=>{
    cb.addEventListener('change', ()=>{
      const p = PLAYLISTS.find(x=>x.id===cb.dataset.pid);
      if(cb.checked){ if(!p.trackIds.includes(track.id)) p.trackIds.push(track.id); toast('Added to '+p.title); }
      else { p.trackIds = p.trackIds.filter(id=>id!==track.id); toast('Removed from '+p.title); }
    });
  });
  m.querySelector('#new-pl-btn').addEventListener('click', ()=>{ closeModal(); createPlaylistModal(track); });
  m.querySelector('#done-pl-btn').addEventListener('click', closeModal);
  return m;
}

function createPlaylistModal(trackToAdd){
  if(!requireAuth()) return;
  const m = el(`
  <div class="modal">
    <div class="modal-head"><h3>New playlist</h3><button class="close-x">${ICON.close}</button></div>
    <div class="field"><label>Name</label><input id="np-title" placeholder="My new playlist"></div>
    <div class="field"><label>Description</label><textarea id="np-desc" rows="3" placeholder="What's this playlist about?"></textarea></div>
    <div class="field"><label>Visibility</label>
      <select id="np-vis"><option value="public">Public</option><option value="private">Private</option></select>
    </div>
    <button class="btn primary" id="np-create" style="width:100%;justify-content:center;">Create playlist</button>
  </div>`);
  m.querySelector('.close-x').addEventListener('click', closeModal);
  m.querySelector('#np-create').addEventListener('click', ()=>{
    const title = m.querySelector('#np-title').value.trim() || 'Untitled playlist';
    const p = {id:uid('p'), title, ownerId:S.user.id, cover:artFor(title+Date.now(),'art'), description:m.querySelector('#np-desc').value.trim(), isPublic:m.querySelector('#np-vis').value==='public', trackIds: trackToAdd?[trackToAdd.id]:[], likedBy:new Set()};
    PLAYLISTS.unshift(p);
    closeModal();
    toast('Playlist created');
    renderAll();
  });
  return m;
}

function reportModal(kind, obj){
  const m = el(`
  <div class="modal">
    <div class="modal-head"><h3>Report ${esc(kind)}</h3><button class="close-x">${ICON.close}</button></div>
    <div class="field"><label>Reason</label>
      <select id="rp-reason"><option>Copyright infringement</option><option>Spam</option><option>Harassment</option><option>Explicit content not marked</option><option>Other</option></select>
    </div>
    <div class="field"><label>Details (optional)</label><textarea rows="3" placeholder="Add any context that would help moderators"></textarea></div>
    <button class="btn danger" id="rp-submit" style="width:100%;justify-content:center;">Submit report</button>
  </div>`);
  m.querySelector('.close-x').addEventListener('click', closeModal);
  m.querySelector('#rp-submit').addEventListener('click', ()=>{ closeModal(); toast('Report submitted — thanks for helping keep HiCopK safe'); });
  return m;
}

/* ===================== Layout chrome ===================== */
function trackCard(t){
  const owner = userById(t.ownerId);
  return `
  <div class="track-card" data-track="${t.id}">
    <div class="art-wrap" data-play="${t.id}">
      <img src="${t.art}" alt="">
      <div class="play-overlay"><div class="play-fab">${S.playing && S.currentTrack && S.currentTrack.id===t.id ? ICON.pause : ICON.play}</div></div>
    </div>
    <a class="tc-title" data-nav="#/track/${t.id}">${esc(t.title)}</a>
    <div class="tc-sub"><a data-nav="#/user/${owner.username}">${esc(owner.display)}</a> · ${fmtCount(t.plays)} plays</div>
  </div>`;
}
function playlistCard(p){
  const owner = userById(p.ownerId);
  return `
  <div class="track-card" data-nav="#/playlist/${p.id}">
    <div class="art-wrap"><img src="${p.cover}" alt=""><div class="play-overlay"><div class="play-fab">${ICON.play}</div></div></div>
    <div class="tc-title">${esc(p.title)}</div>
    <div class="tc-sub">By ${esc(owner.display)} · ${p.trackIds.length} tracks</div>
  </div>`;
}
function userCard(u){
  const following = S.following.has(u.id);
  return `
  <div class="track-card" data-nav="#/user/${u.username}" style="text-align:center;">
    <div class="art-wrap" style="border-radius:50%;"><img src="${u.avatar}" alt=""></div>
    <div class="tc-title">${esc(u.display)}</div>
    <div class="tc-sub">${fmtCount(u.followers)} followers</div>
  </div>`;
}

function sidebarHTML(){
  const route = S.route;
  const items = [
    ['#/home','home','Home'],
    ['#/discover','compass','Discover'],
    ['#/search','search','Search'],
    ['#/library','library','Library'],
    ['#/playlists','playlist','Playlists'],
    ['#/notifications','bell','Notifications'],
  ];
  return `
  <div class="sidebar">
    <a class="brand" data-nav="#/home"><div class="brand-mark">H</div><div class="brand-name">HiCopK</div></a>
    <div class="nav-group">
      ${items.map(([href,ic,label])=>`
        <a class="nav-item ${route===href?'active':''}" data-nav="${href}">
          <span class="nav-ic">${ICON[ic]}</span>${label}
          ${label==='Notifications' && NOTIFICATIONS.some(n=>!n.read) ? '<span style="margin-left:auto;width:7px;height:7px;border-radius:50%;background:var(--red);"></span>' : ''}
        </a>`).join('')}
    </div>
    <div class="nav-group">
      <a class="nav-item ${route==='#/dashboard'?'active':''}" data-nav="#/dashboard"><span class="nav-ic">${ICON.chart}</span>Dashboard</a>
      <a class="nav-item ${route.startsWith('#/user/'+(S.user?S.user.username:'\0'))?'active':''}" data-nav="${S.user?'#/user/'+S.user.username:'#/landing'}"><span class="nav-ic">${ICON.user}</span>Profile</a>
      <a class="nav-item ${route==='#/settings'?'active':''}" data-nav="#/settings"><span class="nav-ic">${ICON.settings}</span>Settings</a>
      ${S.user && S.user.id==='me' ? `<a class="nav-item ${route==='#/admin'?'active':''}" data-nav="#/admin"><span class="nav-ic">${ICON.shield}</span>Admin</a>` : ''}
    </div>
    <div class="sidebar-cta">
      <b>Share your sound.</b> Upload lossless, keep full ownership.
      <button class="upload-btn" data-nav="#/upload">${ICON.upload.replace('width:100%','')} Upload track</button>
    </div>
  </div>`;
}

function mobileNavHTML(){
  const items = [['#/home','home'],['#/discover','compass'],['#/upload','upload'],['#/library','library'],['#/notifications','bell']];
  return `<div class="mobile-nav">${items.map(([href,ic])=>`<a class="${S.route===href?'active':''}" data-nav="${href}">${ICON[ic]}<span>${ic==='compass'?'Discover':ic==='upload'?'Upload':ic==='bell'?'Alerts':ic[0].toUpperCase()+ic.slice(1)}</span></a>`).join('')}</div>`;
}

function topbarHTML(){
  const unread = NOTIFICATIONS.filter(n=>!n.read).length;
  return `
  <div class="topbar">
    <div class="search-box">${ICON.search}<input id="global-search" placeholder="Search tracks, artists, playlists…" value="${esc(S.searchQuery)}"></div>
    <div class="topbar-right">
      ${S.user ? `
      <button class="icon-btn" data-nav="#/upload" title="Upload">${ICON.upload}</button>
      <button class="icon-btn" data-nav="#/notifications" title="Notifications">${ICON.bell}${unread?'<span class="badge-dot"></span>':''}</button>
      <button class="avatar-btn" data-nav="#/user/${S.user.username}" title="Profile"><img src="${S.user.avatar}"></button>
      ` : `<button class="btn primary" id="topbar-login">Log in</button>`}
    </div>
  </div>`;
}

function renderPlayerBar(){
  const bar = document.getElementById('player-bar');
  if(!S.currentTrack){ bar.innerHTML=''; bar.style.display='none'; return; }
  bar.style.display='flex';
  const t = S.currentTrack, owner = userById(t.ownerId);
  const liked = S.library.liked.has(t.id);
  bar.innerHTML = `
    <div class="pb-track">
      <div class="pb-art"><img src="${t.art}"></div>
      <div class="pb-meta">
        <a class="pb-title" data-nav="#/track/${t.id}">${esc(t.title)}</a>
        <a class="pb-artist" data-nav="#/user/${owner.username}">${esc(owner.display)}</a>
      </div>
    </div>
    <div class="pb-center">
      <div class="pb-controls">
        <button data-act="shuffle" class="${S.shuffle?'active':''}" style="color:${S.shuffle?'var(--red)':''}">${ICON.shuffle}</button>
        <button data-act="prev">${ICON.prev}</button>
        <button class="pb-play" data-act="toggle">${S.playing?ICON.pause:ICON.play}</button>
        <button data-act="next">${ICON.next}</button>
        <button data-act="repeat" style="color:${S.repeat!=='off'?'var(--red)':''}">${ICON.repeat}${S.repeat==='one'?'<sub style=\"font-size:8px;\">1</sub>':''}</button>
      </div>
      <div class="pb-seek-row">
        <span class="pb-time">${fmtTime(S.position)}</span>
        <div class="pb-wave" id="pb-wave"><canvas></canvas></div>
        <span class="pb-time">${fmtTime(t.duration)}</span>
      </div>
    </div>
    <div class="pb-right">
      <button data-act="like" class="${liked?'active':''}" title="Like">${liked?ICON.heartFill:ICON.heart}</button>
      <button data-act="addpl" title="Add to playlist">${ICON.plus}</button>
      <button data-act="share" title="Share">${ICON.share}</button>
      <div class="vol-row">
        <button data-act="mute">${S.muted||S.volume===0?ICON.volumeMute:ICON.volume}</button>
        <input type="range" class="range" min="0" max="1" step="0.01" value="${S.muted?0:S.volume}" id="vol-range">
      </div>
    </div>`;
  bindPlayerBarEvents();
  renderPlayerBarProgress();
}
function renderPlayerBarProgress(){
  const t = S.currentTrack; if(!t) return;
  const wave = document.querySelector('#pb-wave canvas');
  if(wave) drawWave(wave, t.waveSeed, S.position/t.duration);
  const times = document.querySelectorAll('.pb-time');
  if(times.length===2){ times[0].textContent = fmtTime(S.position); }
  const playBtn = document.querySelector('.pb-play');
  if(playBtn) playBtn.innerHTML = S.playing?ICON.pause:ICON.play;
}
function bindPlayerBarEvents(){
  const bar = document.getElementById('player-bar');
  bar.querySelectorAll('[data-act]').forEach(b=>{
    b.addEventListener('click', ()=>{
      const act=b.dataset.act;
      if(act==='toggle') togglePlay();
      if(act==='next') nextTrack();
      if(act==='prev') prevTrack();
      if(act==='shuffle'){ S.shuffle=!S.shuffle; renderPlayerBar(); }
      if(act==='repeat'){ S.repeat = S.repeat==='off'?'all':S.repeat==='all'?'one':'off'; renderPlayerBar(); }
      if(act==='like'){ toggleLike(S.currentTrack); renderPlayerBar(); }
      if(act==='addpl'){ openModal(addToPlaylistModal(S.currentTrack)); }
      if(act==='share'){ openModal(shareModal('track', S.currentTrack)); }
      if(act==='mute'){ S.muted=!S.muted; Audio_.setVolume(S.volume); renderPlayerBar(); }
    });
  });
  const vol = bar.querySelector('#vol-range');
  if(vol) vol.addEventListener('input', e=>{ S.volume=parseFloat(e.target.value); S.muted=false; Audio_.setVolume(S.volume); });
  const waveEl = bar.querySelector('#pb-wave');
  if(waveEl) waveEl.addEventListener('click', e=>{
    const r = waveEl.getBoundingClientRect();
    seekTo((e.clientX-r.left)/r.width);
  });
  navigator._bound = true;
}

function toggleLike(t){
  if(!requireAuth()) return;
  if(S.library.liked.has(t.id)){ S.library.liked.delete(t.id); t.likes=Math.max(0,t.likes-1); }
  else { S.library.liked.add(t.id); t.likes++; toast('Liked "'+t.title+'"'); }
}
function toggleRepost(t){
  if(!requireAuth()) return;
  if(S.library.reposted.has(t.id)){ S.library.reposted.delete(t.id); t.reposts=Math.max(0,t.reposts-1); }
  else { S.library.reposted.add(t.id); t.reposts++; toast('Reposted "'+t.title+'"'); }
}
function toggleFollow(u){
  if(!requireAuth()) return;
  if(u.id===S.user.id) return;
  if(S.following.has(u.id)){ S.following.delete(u.id); u.followers--; }
  else { S.following.add(u.id); u.followers++; toast('Following '+u.display); }
}

/* ===================== Views ===================== */
function viewLanding(){
  return `
  <div class="landing-hero">
    <div class="landing-nav">
      <div class="brand"><div class="brand-mark">H</div><div class="brand-name">HiCopK Music</div></div>
      <button class="btn ghost" id="landing-login">Log in</button>
    </div>
    <div class="landing-hero-body">
      <div class="hero-bars" id="hero-bars"></div>
      <h1>Listen. Create. <span>Share.</span></h1>
      <p>HiCopK Music is where independent artists drop tracks straight from their bedroom studio to your speakers — no label required.</p>
      <button class="discord-btn" id="landing-discord">${ICON.discord} Continue with Discord</button>
    </div>
  </div>
  <div class="landing-section">
    <div class="section-head"><h2>Trending this week</h2></div>
    <div class="card-row">${TRACKS.slice(0,8).sort((a,b)=>b.plays-a.plays).map(trackCard).join('')}</div>
  </div>
  <div class="landing-section">
    <div class="section-head"><h2>Popular creators</h2></div>
    <div class="card-row">${USERS.filter(u=>u.id!=='me').map(userCard).join('')}</div>
  </div>
  <div class="landing-section">
    <h2 style="margin-bottom:6px;">Built for artists who do it themselves</h2>
    <div class="feature-grid">
      <div class="feature-card"><div class="f-ic">${ICON.upload}</div><h3>Upload anything</h3><p>MP3, WAV, FLAC, M4A, OGG — drag, drop, and you're live with a track page in seconds.</p></div>
      <div class="feature-card"><div class="f-ic">${ICON.user}</div><h3>A profile that's actually yours</h3><p>Custom colors, layouts, featured tracks, and pinned posts. No two profiles look the same.</p></div>
      <div class="feature-card"><div class="f-ic">${ICON.chart}</div><h3>Real numbers</h3><p>Plays, likes, reposts, and audience insight — all in a dashboard built for creators, not labels.</p></div>
    </div>
  </div>`;
}

function viewHome(){
  const followedTracks = TRACKS.filter(t=>S.following.has(t.ownerId)).slice(0,6);
  const liked = TRACKS.filter(t=>S.library.liked.has(t.id));
  const recent = S.library.recentlyPlayed.map(id=>TRACKS.find(t=>t.id===id)).filter(Boolean);
  return `
  <div class="section-head"><h2>Welcome back${S.user?', '+esc(S.user.display):''}</h2></div>
  <div style="margin-bottom:30px;">
    <div class="section-head"><h2>Trending tracks</h2><a data-nav="#/discover">See all</a></div>
    <div class="card-row">${[...TRACKS].sort((a,b)=>b.plays-a.plays).slice(0,8).map(trackCard).join('')}</div>
  </div>
  <div style="margin-bottom:30px;">
    <div class="section-head"><h2>New releases</h2><a data-nav="#/discover">See all</a></div>
    <div class="card-row">${[...TRACKS].sort((a,b)=>b.createdAt-a.createdAt).slice(0,8).map(trackCard).join('')}</div>
  </div>
  ${followedTracks.length?`<div style="margin-bottom:30px;"><div class="section-head"><h2>From people you follow</h2></div><div class="card-row">${followedTracks.map(trackCard).join('')}</div></div>`:''}
  ${recent.length?`<div style="margin-bottom:30px;"><div class="section-head"><h2>Recently played</h2></div><div class="card-row">${recent.map(trackCard).join('')}</div></div>`:''}
  ${liked.length?`<div style="margin-bottom:30px;"><div class="section-head"><h2>Your liked music</h2><a data-nav="#/library">See all</a></div><div class="card-row">${liked.map(trackCard).join('')}</div></div>`:''}
  <div style="margin-bottom:30px;">
    <div class="section-head"><h2>Popular artists</h2></div>
    <div class="card-row">${USERS.filter(u=>u.id!=='me').map(userCard).join('')}</div>
  </div>
  <div style="margin-bottom:30px;">
    <div class="section-head"><h2>Popular playlists</h2></div>
    <div class="card-row">${PLAYLISTS.map(playlistCard).join('')}</div>
  </div>`;
}

function viewDiscover(){
  return `
  <div class="section-head"><h2>Discover</h2></div>
  <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:22px;">
    ${GENRES.map(g=>`<button class="pill" data-genre="${esc(g)}">${esc(g)}</button>`).join('')}
  </div>
  <div id="discover-results">
    <div class="section-head"><h2>Trending</h2></div>
    <div class="grid">${[...TRACKS].sort((a,b)=>b.plays-a.plays).map(trackCard).join('')}</div>
  </div>`;
}

function viewSearch(){
  const q = S.searchQuery.trim().toLowerCase();
  let tracks=[], users=[], playlists=[];
  if(q){
    tracks = TRACKS.filter(t=>t.title.toLowerCase().includes(q) || t.genre.toLowerCase().includes(q) || t.tags.some(tag=>tag.includes(q)));
    users = USERS.filter(u=>u.id!=='me' && (u.display.toLowerCase().includes(q) || u.username.includes(q)));
    playlists = PLAYLISTS.filter(p=>p.title.toLowerCase().includes(q));
  }
  return `
  <div class="section-head"><h2>Search</h2></div>
  ${!q ? `<div class="empty-state"><div class="em-ic">${ICON.search}</div><h3>Find your next favorite track</h3><p>Search by track title, artist, genre, or tag.</p></div>` : `
    <div class="section-head"><h2>Tracks</h2></div>
    ${tracks.length? `<div class="grid" style="margin-bottom:26px;">${tracks.map(trackCard).join('')}</div>` : `<p style="color:var(--text-dim);font-size:13px;margin-bottom:26px;">No tracks found.</p>`}
    <div class="section-head"><h2>Artists</h2></div>
    ${users.length? `<div class="card-row" style="margin-bottom:26px;">${users.map(userCard).join('')}</div>` : `<p style="color:var(--text-dim);font-size:13px;margin-bottom:26px;">No artists found.</p>`}
    <div class="section-head"><h2>Playlists</h2></div>
    ${playlists.length? `<div class="card-row">${playlists.map(playlistCard).join('')}</div>` : `<p style="color:var(--text-dim);font-size:13px;">No playlists found.</p>`}
  `}`;
}

function viewLibrary(){
  if(!requireAuth()) return viewLanding();
  const liked = [...S.library.liked].map(id=>TRACKS.find(t=>t.id===id)).filter(Boolean);
  const reposted = [...S.library.reposted].map(id=>TRACKS.find(t=>t.id===id)).filter(Boolean);
  const myPlaylists = PLAYLISTS.filter(p=>p.ownerId===S.user.id);
  const myUploads = TRACKS.filter(t=>t.ownerId===S.user.id);
  const followedArtists = USERS.filter(u=>S.following.has(u.id));
  const recent = S.library.recentlyPlayed.map(id=>TRACKS.find(t=>t.id===id)).filter(Boolean);
  const section=(title,items,cardFn,emptyMsg)=>`
    <div style="margin-bottom:30px;"><div class="section-head"><h2>${title}</h2></div>
    ${items.length?`<div class="card-row">${items.map(cardFn).join('')}</div>`:`<p style="color:var(--text-dim);font-size:13px;">${emptyMsg}</p>`}</div>`;
  return `
  <div class="section-head"><h2>Your library</h2></div>
  ${section('Liked tracks', liked, trackCard, "Tracks you like will show up here.")}
  ${section('Your uploads', myUploads, trackCard, "You haven't uploaded any tracks yet.")}
  ${section('Your playlists', myPlaylists, playlistCard, "Create your first playlist.")}
  ${section('Reposts', reposted, trackCard, "Reposted tracks will show up here.")}
  ${section('Followed artists', followedArtists, userCard, "Follow artists to see them here.")}
  ${section('Recently played', recent, trackCard, "Nothing played yet.")}
  `;
}

function viewPlaylists(){
  return `<div class="section-head"><h2>Playlists</h2>${S.user?`<button class="btn primary small" id="new-playlist-top">${ICON.plus} New</button>`:''}</div>
  <div class="grid">${PLAYLISTS.map(playlistCard).join('')}</div>`;
}

function viewTrack(id){
  const t = TRACKS.find(x=>x.id===id);
  if(!t) return `<div class="empty-state"><h3>Track not found</h3></div>`;
  const owner = userById(t.ownerId);
  const liked = S.library.liked.has(t.id), reposted = S.library.reposted.has(t.id);
  const isPlayingThis = S.currentTrack && S.currentTrack.id===t.id && S.playing;
  return `
  <div class="track-hero">
    <div class="track-hero-art" data-play="${t.id}" style="position:relative;cursor:pointer;">
      <img src="${t.art}">
      <div class="play-overlay" style="opacity:1;background:rgba(0,0,0,.25);"><div class="play-fab" style="width:56px;height:56px;">${isPlayingThis?ICON.pause:ICON.play}</div></div>
    </div>
    <div class="track-hero-info">
      <span class="pill genre-pill">${esc(t.genre)}${t.explicit?' · E':''}</span>
      <h1>${esc(t.title)}</h1>
      <div class="track-hero-artist">By <a data-nav="#/user/${owner.username}">${esc(owner.display)}</a> · ${fmtCount(t.plays)} plays · ${timeAgo(t.createdAt)} ago</div>
      <div class="track-actions">
        <button class="btn primary" data-play="${t.id}">${isPlayingThis?ICON.pause:ICON.play} ${isPlayingThis?'Pause':'Play'}</button>
        <button class="btn ${liked?'active':''}" data-like="${t.id}">${liked?ICON.heartFill:ICON.heart} ${fmtCount(t.likes)}</button>
        <button class="btn ${reposted?'active':''}" data-repost="${t.id}">${ICON.repost} ${fmtCount(t.reposts)}</button>
        <button class="btn ghost" data-addpl="${t.id}">${ICON.plus} Playlist</button>
        <button class="btn ghost" data-share="${t.id}">${ICON.share} Share</button>
        <button class="btn ghost" data-report="track:${t.id}">${ICON.flag}</button>
      </div>
    </div>
  </div>
  <div class="big-wave" data-bigwave="${t.id}"><canvas></canvas></div>
  <div class="track-desc">${esc(t.description)}${t.lyrics?'\n\nLyrics:\n'+esc(t.lyrics):''}</div>
  <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:26px;">${t.tags.map(tag=>`<span class="pill">#${esc(tag)}</span>`).join('')}</div>
  <h2 style="font-size:17px;margin-bottom:14px;">${t.comments.length} comments</h2>
  ${S.user?`
  <div class="comment-input-row">
    <div class="c-avatar"><img src="${S.user.avatar}"></div>
    <textarea id="new-comment" placeholder="Add a comment at ${fmtTime(S.position)}…"></textarea>
    <button class="btn primary" id="post-comment" style="align-self:flex-end;">Post</button>
  </div>`:''}
  <div id="comments-list">${t.comments.slice().sort((a,b)=>b.createdAt-a.createdAt).map(c=>commentRow(c,t)).join('') || '<p style="color:var(--text-dim);font-size:13px;">Be the first to comment.</p>'}</div>
  `;
}
function commentRow(c,t){
  const u = userById(c.userId);
  return `<div class="comment-row">
    <div class="c-avatar"><img src="${u.avatar}"></div>
    <div class="c-body">
      <div class="c-head"><b>${esc(u.display)}</b>${c.timestampSec!=null?`<span class="c-time-tag">${fmtTime(c.timestampSec)}</span>`:''}<span class="c-time">${timeAgo(c.createdAt)}</span></div>
      <div class="c-text">${esc(c.text)}</div>
      <div class="c-actions">
        <button data-clike="${c.id}">${ICON.heart} ${c.likes||''}</button>
        <button data-creport="${c.id}">Report</button>
      </div>
    </div>
  </div>`;
}

function viewPlaylist(id){
  const p = PLAYLISTS.find(x=>x.id===id);
  if(!p) return `<div class="empty-state"><h3>Playlist not found</h3></div>`;
  const owner = userById(p.ownerId);
  const tracks = p.trackIds.map(tid=>TRACKS.find(t=>t.id===tid)).filter(Boolean);
  const totalDur = tracks.reduce((a,t)=>a+t.duration,0);
  const isMine = S.user && S.user.id===p.ownerId;
  const liked = S.user && p.likedBy.has(S.user.id);
  return `
  <div class="track-hero">
    <div class="track-hero-art"><img src="${p.cover}"></div>
    <div class="track-hero-info">
      <span class="pill genre-pill">Playlist · ${p.isPublic?'Public':'Private'}</span>
      <h1>${esc(p.title)}</h1>
      <div class="track-hero-artist">By <a data-nav="#/user/${owner.username}">${esc(owner.display)}</a> · ${tracks.length} tracks · ${fmtTime(totalDur)}</div>
      <div class="track-desc" style="margin:6px 0 0;">${esc(p.description||'')}</div>
      <div class="track-actions">
        <button class="btn primary" data-playall="${p.id}">${ICON.play} Play all</button>
        <button class="btn ghost" data-shuffleall="${p.id}">${ICON.shuffle} Shuffle</button>
        <button class="btn ${liked?'active':''}" data-likepl="${p.id}">${liked?ICON.heartFill:ICON.heart} ${p.likedBy.size}</button>
        <button class="btn ghost" data-share="${p.id}" data-sharekind="playlist">${ICON.share}</button>
        ${isMine?`<button class="btn ghost" data-editpl="${p.id}">${ICON.edit} Edit</button><button class="btn danger" data-delpl="${p.id}">${ICON.trash}</button>`:`<button class="btn ghost" data-report="playlist:${p.id}">${ICON.flag}</button>`}
      </div>
    </div>
  </div>
  <table class="mgmt">
    <thead><tr><th>#</th><th>Track</th><th>Plays</th><th>Duration</th><th></th></tr></thead>
    <tbody>${tracks.map((t,i)=>`
      <tr data-nav="#/track/${t.id}" style="cursor:pointer;">
        <td>${i+1}</td>
        <td><div class="mini-row"><div class="mini-art"><img src="${t.art}"></div><div><div style="font-weight:600;">${esc(t.title)}</div><div style="color:var(--text-dim);font-size:11.5px;">${esc(userById(t.ownerId).display)}</div></div></div></td>
        <td>${fmtCount(t.plays)}</td><td>${fmtTime(t.duration)}</td>
        <td><button class="icon-btn" data-play="${t.id}" onclick="event.stopPropagation()">${ICON.play}</button></td>
      </tr>`).join('') || `<tr><td colspan="5" style="color:var(--text-dim);">No tracks in this playlist yet.</td></tr>`}
    </tbody>
  </table>`;
}

function viewAlbum(id){
  const a = ALBUMS.find(x=>x.id===id);
  if(!a) return `<div class="empty-state"><h3>Album not found</h3></div>`;
  const owner = userById(a.ownerId);
  const tracks = a.trackIds.map(tid=>TRACKS.find(t=>t.id===tid)).filter(Boolean);
  return `
  <div class="track-hero">
    <div class="track-hero-art"><img src="${a.cover}"></div>
    <div class="track-hero-info">
      <span class="pill genre-pill">Album · ${esc(a.genre)}</span>
      <h1>${esc(a.title)}</h1>
      <div class="track-hero-artist">By <a data-nav="#/user/${owner.username}">${esc(owner.display)}</a> · ${tracks.length} tracks · Released ${esc(a.releaseDate)}</div>
      <div class="track-desc" style="margin:6px 0 0;">${esc(a.description)}</div>
      <div class="track-actions">
        <button class="btn primary" data-playall="${a.id}" data-albumplay="1">${ICON.play} Play</button>
        <button class="btn ghost" data-likepl="${a.id}">${ICON.heart}</button>
        <button class="btn ghost" data-share="${a.id}">${ICON.share}</button>
      </div>
    </div>
  </div>
  <table class="mgmt"><thead><tr><th>#</th><th>Track</th><th>Duration</th></tr></thead>
  <tbody>${tracks.map((t,i)=>`<tr data-nav="#/track/${t.id}" style="cursor:pointer;"><td>${i+1}</td><td>${esc(t.title)}</td><td>${fmtTime(t.duration)}</td></tr>`).join('')}</tbody></table>`;
}

function viewProfile(username){
  const u = userByUsername(username);
  if(!u) return `<div class="empty-state"><h3>User not found</h3></div>`;
  const isMe = S.user && S.user.id===u.id;
  const following = S.following.has(u.id);
  const tracks = TRACKS.filter(t=>t.ownerId===u.id);
  const playlists = PLAYLISTS.filter(p=>p.ownerId===u.id && p.isPublic);
  const albums = ALBUMS.filter(a=>a.ownerId===u.id);
  const reposts = TRACKS.filter(t=>t.repostedBy && t.repostedBy.has(u.id));
  const tab = S.profileTab || 'tracks';
  const tabs = [['tracks','Tracks'],['albums','Albums'],['playlists','Playlists'],['reposts','Reposts'],['about','About']];
  let body='';
  if(tab==='tracks') body = tracks.length? `<div class="grid">${tracks.map(trackCard).join('')}</div>` : `<div class="empty-state"><h3>No tracks yet</h3><p>${isMe?'Upload your first track to see it here.':esc(u.display)+" hasn't uploaded anything yet."}</p></div>`;
  if(tab==='albums') body = albums.length? `<div class="grid">${albums.map(a=>`<div class="track-card" data-nav="#/album/${a.id}"><div class="art-wrap"><img src="${a.cover}"></div><div class="tc-title">${esc(a.title)}</div><div class="tc-sub">${a.trackIds.length} tracks</div></div>`).join('')}` : `<div class="empty-state"><h3>No albums yet</h3></div>`;
  if(tab==='playlists') body = playlists.length? `<div class="grid">${playlists.map(playlistCard).join('')}</div>` : `<div class="empty-state"><h3>No public playlists</h3></div>`;
  if(tab==='reposts') body = reposts.length? `<div class="grid">${reposts.map(trackCard).join('')}</div>` : `<div class="empty-state"><h3>No reposts yet</h3></div>`;
  if(tab==='about') body = `
    <div style="max-width:600px;">
      ${u.location?`<div style="margin-bottom:10px;font-size:13.5px;"><b>Location:</b> ${esc(u.location)}</div>`:''}
      ${u.website?`<div style="margin-bottom:10px;font-size:13.5px;"><b>Website:</b> ${esc(u.website)}</div>`:''}
      ${u.genres.length?`<div style="margin-bottom:10px;font-size:13.5px;"><b>Favorite genres:</b> ${u.genres.map(esc).join(', ')}</div>`:''}
      ${u.artists.length?`<div style="margin-bottom:10px;font-size:13.5px;"><b>Favorite artists:</b> ${u.artists.map(esc).join(', ')}</div>`:''}
    </div>`;
  return `
  <div class="profile-banner"><img src="${u.banner}"></div>
  <div class="profile-head">
    <div class="profile-avatar"><img src="${u.avatar}"></div>
    <div class="profile-info"><h1>${esc(u.display)}</h1><div class="profile-uname">@${esc(u.username)}</div></div>
    <div class="profile-actions">
      ${isMe? `<button class="btn ghost" data-nav="#/edit-profile">${ICON.edit} Edit profile</button>`
             : `<button class="btn ${following?'ghost':'primary'}" data-follow="${u.id}">${following?'Following':'Follow'}</button><button class="btn ghost" data-share="${u.id}">${ICON.share}</button><button class="btn ghost" data-report="profile:${u.id}">${ICON.flag}</button>`}
    </div>
  </div>
  <div class="profile-stats"><span><b>${fmtCount(u.followers)}</b> followers</span><span><b>${fmtCount(u.following)}</b> following</span><span><b>${tracks.length}</b> tracks</span></div>
  ${u.bio?`<div class="profile-bio">${esc(u.bio)}</div>`:''}
  ${u.genres.length?`<div class="profile-tags">${u.genres.map(g=>`<span class="pill">${esc(g)}</span>`).join('')}</div>`:''}
  <div class="tab-row">${tabs.map(([k,label])=>`<button class="tab-item ${tab===k?'active':''}" data-ptab="${k}">${label}</button>`).join('')}</div>
  <div>${body}</div>`;
}

function viewEditProfile(){
  if(!requireAuth()) return viewLanding();
  const u = S.user;
  const accents = ['#ff2340','#ff5470','#ff8b98','#8b5cf6','#22d3ee','#22c55e','#f59e0b'];
  return `
  <div class="section-head"><h2>Edit profile</h2><a data-nav="#/user/${u.username}">Preview profile</a></div>
  <div style="max-width:640px;">
    <div class="field-row">
      <div class="field"><label>Display name</label><input id="ep-display" value="${esc(u.display)}"></div>
      <div class="field"><label>Username</label><input id="ep-username" value="${esc(u.username)}"></div>
    </div>
    <div class="field"><label>Bio</label><textarea id="ep-bio" rows="3">${esc(u.bio)}</textarea></div>
    <div class="field-row">
      <div class="field"><label>Location</label><input id="ep-location" value="${esc(u.location)}"></div>
      <div class="field"><label>Website / social link</label><input id="ep-website" value="${esc(u.website)}"></div>
    </div>
    <div class="field"><label>Favorite genres (comma separated)</label><input id="ep-genres" value="${esc(u.genres.join(', '))}"></div>
    <div class="field"><label>Favorite artists (comma separated)</label><input id="ep-artists" value="${esc(u.artists.join(', '))}"></div>
    <div class="field"><label>Accent color</label><div class="color-swatch-row">${accents.map(c=>`<div class="swatch ${u.accent===c?'selected':''}" style="background:${c}" data-accent="${c}"></div>`).join('')}</div></div>
    <div class="field"><label>Featured tracks</label>
      <div style="display:flex;gap:8px;flex-wrap:wrap;">${TRACKS.filter(t=>t.ownerId===u.id).map(t=>`<span class="pill">${esc(t.title)}</span>`).join('') || '<span style="color:var(--text-dim);font-size:12.5px;">Upload tracks to feature them here.</span>'}</div>
    </div>
    <button class="btn primary" id="ep-save">Save changes</button>
  </div>`;
}

function viewUpload(){
  if(!requireAuth()) return viewLanding();
  return `
  <div class="content narrow">
    <div class="section-head"><h2>Upload a track</h2></div>
    <div class="upload-drop" id="upload-drop">
      ${ICON.upload}
      <div>Drag and drop an audio file, or <span class="browse">browse</span></div>
      <div style="font-size:11.5px;margin-top:6px;color:var(--text-faint);">MP3, WAV, FLAC, M4A, OGG</div>
      <input type="file" id="file-input" accept="audio/*" style="display:none;">
      <div id="upload-file-name" style="margin-top:12px;font-size:13px;color:var(--text);display:none;"></div>
      <div class="progress-bar" id="upload-progress" style="display:none;"><div></div></div>
    </div>
    <div class="field-row"><div class="field"><label>Song title</label><input id="u-title" placeholder="Track title"></div>
      <div class="field"><label>Artist name</label><input id="u-artist" value="${esc(S.user.display)}"></div></div>
    <div class="field"><label>Description</label><textarea id="u-desc" rows="3" placeholder="Tell listeners about this track"></textarea></div>
    <div class="field-row">
      <div class="field"><label>Genre</label><select id="u-genre">${GENRES.map(g=>`<option>${g}</option>`).join('')}</select></div>
      <div class="field"><label>Album (optional)</label><select id="u-album"><option value="">None</option>${ALBUMS.filter(a=>a.ownerId===S.user.id).map(a=>`<option value="${a.id}">${esc(a.title)}</option>`).join('')}</select></div>
    </div>
    <div class="field-row">
      <div class="field"><label>Tags (comma separated)</label><input id="u-tags" placeholder="chill, night, guitar"></div>
      <div class="field"><label>Release date</label><input id="u-date" type="date"></div>
    </div>
    <div class="field"><label>Lyrics (optional)</label><textarea id="u-lyrics" rows="3" placeholder="Paste lyrics"></textarea></div>
    <div class="field-row">
      <div class="field"><label>Visibility</label><select id="u-vis"><option value="public">Public</option><option value="unlisted">Unlisted</option><option value="private">Private</option></select></div>
      <div class="field" style="display:flex;align-items:flex-end;"><label style="display:flex;align-items:center;gap:8px;margin:0;"><input type="checkbox" id="u-explicit" style="width:auto;"> Explicit content</label></div>
    </div>
    <button class="btn primary" id="u-submit" style="width:100%;justify-content:center;">Upload track</button>
  </div>`;
}

function viewDashboard(){
  if(!requireAuth()) return viewLanding();
  const mine = TRACKS.filter(t=>t.ownerId===S.user.id);
  const totalPlays = mine.reduce((a,t)=>a+t.plays,0);
  const totalLikes = mine.reduce((a,t)=>a+t.likes,0);
  const totalReposts = mine.reduce((a,t)=>a+t.reposts,0);
  const totalComments = mine.reduce((a,t)=>a+t.comments.length,0);
  const bars = Array.from({length:14},(_,i)=>Math.floor(20+Math.random()*80));
  return `
  <div class="section-head"><h2>Creator dashboard</h2><button class="btn primary small" data-nav="#/upload">${ICON.plus} Upload</button></div>
  <div class="stat-grid">
    <div class="stat-card"><div class="sc-num">${fmtCount(totalPlays)}</div><div class="sc-label">Total plays</div></div>
    <div class="stat-card"><div class="sc-num">${fmtCount(totalLikes)}</div><div class="sc-label">Total likes</div></div>
    <div class="stat-card"><div class="sc-num">${fmtCount(totalReposts)}</div><div class="sc-label">Total reposts</div></div>
    <div class="stat-card"><div class="sc-num">${fmtCount(totalComments)}</div><div class="sc-label">Comments</div></div>
    <div class="stat-card"><div class="sc-num">${fmtCount(S.user.followers)}</div><div class="sc-label">Followers</div></div>
  </div>
  <div class="stat-card" style="margin-bottom:26px;">
    <div class="sc-label" style="margin-bottom:2px;">Plays over the last 14 days</div>
    <div class="chart-bars">${bars.map(h=>`<div style="height:${h}%"></div>`).join('')}</div>
  </div>
  <div class="section-head"><h2>Your tracks</h2></div>
  <table class="mgmt">
    <thead><tr><th>Track</th><th>Visibility</th><th>Plays</th><th>Likes</th><th>Reposts</th><th>Comments</th><th></th></tr></thead>
    <tbody>${mine.length? mine.map(t=>`
      <tr>
        <td><div class="mini-row"><div class="mini-art"><img src="${t.art}"></div><span>${esc(t.title)}</span></div></td>
        <td>${t.visibility}</td><td>${fmtCount(t.plays)}</td><td>${fmtCount(t.likes)}</td><td>${fmtCount(t.reposts)}</td><td>${t.comments.length}</td>
        <td><div style="display:flex;gap:6px;"><button class="icon-btn" data-nav="#/track/${t.id}">${ICON.edit}</button><button class="icon-btn" data-deltrack="${t.id}">${ICON.trash}</button></div></td>
      </tr>`).join('') : `<tr><td colspan="7" style="color:var(--text-dim);">No tracks uploaded yet.</td></tr>`}
    </tbody>
  </table>`;
}

function viewNotifications(){
  if(!requireAuth()) return viewLanding();
  NOTIFICATIONS.forEach(n=>n.read=true);
  const label = n=>{
    const actor = userById(n.actorId);
    if(n.type==='follow') return `<b>${esc(actor.display)}</b> started following you`;
    if(n.type==='like') return `<b>${esc(actor.display)}</b> liked your track "${esc((TRACKS.find(t=>t.id===n.targetId)||{}).title||'')}"`;
    if(n.type==='comment') return `<b>${esc(actor.display)}</b> commented on "${esc((TRACKS.find(t=>t.id===n.targetId)||{}).title||'')}"`;
    if(n.type==='repost') return `<b>${esc(actor.display)}</b> reposted "${esc((TRACKS.find(t=>t.id===n.targetId)||{}).title||'')}"`;
    if(n.type==='playlist_add') return `<b>${esc(actor.display)}</b> added "${esc((TRACKS.find(t=>t.id===n.targetId)||{}).title||'')}" to a playlist`;
    return 'New notification';
  };
  return `
  <div class="section-head"><h2>Notifications</h2></div>
  <div>${NOTIFICATIONS.length? NOTIFICATIONS.slice().sort((a,b)=>b.createdAt-a.createdAt).map(n=>`
    <div class="comment-row">
      <div class="c-avatar"><img src="${userById(n.actorId).avatar}"></div>
      <div class="c-body"><div class="c-text">${label(n)}</div><div class="c-time">${timeAgo(n.createdAt)}</div></div>
    </div>`).join('') : `<div class="empty-state"><h3>You're all caught up</h3></div>`}
  </div>`;
}

function viewSettings(){
  if(!requireAuth()) return viewLanding();
  const sec = S.settingsSection || 'account';
  const nav = [['account','Account'],['profile','Profile'],['privacy','Privacy'],['notifications','Notifications'],['playback','Playback'],['appearance','Appearance'],['blocked','Blocked users'],['danger','Delete account']];
  let panel='';
  if(sec==='account') panel = `
    <h2>Account</h2><div class="panel-sub">Manage your account details.</div>
    <div class="field"><label>Username</label><input value="${esc(S.user.username)}"></div>
    <div class="field"><label>Connected Discord account</label><div class="btn ghost" style="width:fit-content;">${ICON.discord} Connected as ${esc(S.user.display)}#0001</div></div>
    <button class="btn ghost">Disconnect Discord</button>`;
  if(sec==='profile') panel = `<h2>Profile</h2><div class="panel-sub">Head to your full profile editor for layout and customization.</div><button class="btn primary" data-nav="#/edit-profile">Open profile editor</button>`;
  if(sec==='privacy') panel = `<h2>Privacy</h2><div class="panel-sub">Control who can interact with you.</div>
    ${['Private profile','Allow direct messages','Show listening activity','Allow tagging in comments'].map(t=>`<div class="toggle-row"><div><span>${t}</span></div><div class="switch ${Math.random()>0.5?'on':''}" data-toggle></div></div>`).join('')}`;
  if(sec==='notifications') panel = `<h2>Notifications</h2><div class="panel-sub">Choose what you get notified about.</div>
    ${['New followers','Likes on your tracks','Comments on your tracks','Reposts','Playlist additions','Weekly recap email'].map(t=>`<div class="toggle-row"><div><span>${t}</span></div><div class="switch on" data-toggle></div></div>`).join('')}`;
  if(sec==='playback') panel = `<h2>Playback</h2><div class="panel-sub">Tune how music plays across HiCopK.</div>
    <div class="toggle-row"><div><span>Autoplay similar tracks</span><small>Keep playing when your queue ends</small></div><div class="switch on" data-toggle></div></div>
    <div class="toggle-row"><div><span>Gapless playback</span></div><div class="switch on" data-toggle></div></div>
    <div class="toggle-row"><div><span>High-quality streaming</span><small>Uses more data</small></div><div class="switch" data-toggle></div></div>`;
  if(sec==='appearance') panel = `<h2>Appearance</h2><div class="panel-sub">HiCopK is dark by design — pick your accent.</div>
    <div class="color-swatch-row">${['#ff2340','#ff5470','#8b5cf6','#22d3ee','#22c55e','#f59e0b'].map((c,i)=>`<div class="swatch ${i===0?'selected':''}" style="background:${c}"></div>`).join('')}</div>`;
  if(sec==='blocked') panel = `<h2>Blocked users</h2><div class="panel-sub">People you've blocked can't view your profile or contact you.</div><div class="empty-state"><h3>No blocked users</h3></div>`;
  if(sec==='danger') panel = `<h2>Delete account</h2><div class="panel-sub">This permanently removes your profile, tracks, and data.</div><button class="btn danger" id="delete-account-btn">${ICON.trash} Delete my account</button>`;
  return `
  <div class="section-head"><h2>Settings</h2></div>
  <div class="settings-layout">
    <div class="settings-nav">${nav.map(([k,l])=>`<button class="${sec===k?'active':''}" data-setsec="${k}">${l}</button>`).join('')}</div>
    <div class="settings-panel">${panel}</div>
  </div>`;
}

function viewAdmin(){
  if(!S.user || S.user.id!=='me') return `<div class="empty-state"><h3>Admin access required</h3></div>`;
  const reports = [
    {id:1,type:'Track',target:TRACKS[2].title,reason:'Copyright infringement',status:'Pending'},
    {id:2,type:'Comment',target:'"need the link to..."',reason:'Spam',status:'Pending'},
    {id:3,type:'Profile',target:userById('u5').display,reason:'Impersonation',status:'Reviewed'},
  ];
  return `
  <div class="section-head"><h2>Admin dashboard</h2></div>
  <div class="stat-grid">
    <div class="stat-card"><div class="sc-num">${TRACKS.length}</div><div class="sc-label">Total tracks</div></div>
    <div class="stat-card"><div class="sc-num">${USERS.length}</div><div class="sc-label">Total users</div></div>
    <div class="stat-card"><div class="sc-num">${reports.length}</div><div class="sc-label">Open reports</div></div>
    <div class="stat-card"><div class="sc-num">${PLAYLISTS.length}</div><div class="sc-label">Playlists</div></div>
  </div>
  <div class="section-head"><h2>Reported content</h2></div>
  <table class="mgmt"><thead><tr><th>Type</th><th>Target</th><th>Reason</th><th>Status</th><th></th></tr></thead>
  <tbody>${reports.map(r=>`<tr><td>${r.type}</td><td>${esc(r.target)}</td><td>${esc(r.reason)}</td><td>${r.status}</td>
    <td><div style="display:flex;gap:6px;"><button class="btn small ghost" data-resolve="${r.id}">Dismiss</button><button class="btn small danger" data-remove="${r.id}">Remove</button></div></td></tr>`).join('')}</tbody></table>
  <div class="section-head" style="margin-top:26px;"><h2>Featured content</h2></div>
  <p style="color:var(--text-dim);font-size:13px;margin-bottom:14px;">Pick tracks to surface on the Discover page.</p>
  <div class="grid">${TRACKS.slice(0,4).map(trackCard).join('')}</div>`;
}

/* ===================== Router ===================== */
function parseRoute(){
  const hash = location.hash || '#/landing';
  const parts = hash.slice(2).split('/').filter(Boolean); // strip '#/'
  return {hash, parts};
}
function currentContent(){
  const {hash, parts} = parseRoute();
  if(!S.user && !['#/landing'].includes(hash) && hash!=='#/landing'){
    // allow browsing landing/discover/search/track/playlist/user without auth, gate the rest
  }
  const seg = parts[0];
  if(!seg || seg==='landing') return S.user? viewHome() : viewLanding();
  if(seg==='home') return S.user? viewHome() : viewLanding();
  if(seg==='discover') return viewDiscover();
  if(seg==='search') return viewSearch();
  if(seg==='library') return viewLibrary();
  if(seg==='playlists') return viewPlaylists();
  if(seg==='playlist') return viewPlaylist(parts[1]);
  if(seg==='album') return viewAlbum(parts[1]);
  if(seg==='track') return viewTrack(parts[1]);
  if(seg==='user') return viewProfile(parts[1]);
  if(seg==='edit-profile') return viewEditProfile();
  if(seg==='upload') return viewUpload();
  if(seg==='dashboard') return viewDashboard();
  if(seg==='notifications') return viewNotifications();
  if(seg==='settings') return viewSettings();
  if(seg==='admin') return viewAdmin();
  return `<div class="empty-state"><h3>Page not found</h3></div>`;
}

function renderAll(){
  const {hash} = parseRoute();
  S.route = hash;
  const root = document.getElementById('root');
  if(hash==='#/landing' && !S.user){
    root.innerHTML = viewLanding();
    document.getElementById('player-bar').style.display='none';
    document.querySelector('.mobile-nav')?.remove();
    bindGlobalNav(root);
    bindLandingEvents(root);
    return;
  }
  const isNarrowView = hash.startsWith('#/edit-profile') || hash.startsWith('#/upload');
  root.innerHTML = `
    ${sidebarHTML()}
    <div class="main-col">
      ${topbarHTML()}
      <div class="content ${isNarrowView?'':''}">${currentContent()}</div>
    </div>
    ${mobileNavHTML()}
  `;
  bindGlobalNav(root);
  bindTopbarEvents(root);
  bindViewEvents(root);
  renderPlayerBar();
  animateHeroBars();
}

function animateHeroBars(){
  const wrap = document.getElementById('hero-bars');
  if(!wrap) return;
  wrap.innerHTML='';
  for(let i=0;i<60;i++){
    const bar = document.createElement('i');
    bar.style.height = (20+Math.random()*70)+'%';
    bar.style.animationDelay = (Math.random()*1.6)+'s';
    wrap.appendChild(bar);
  }
}

function bindGlobalNav(root){
  root.querySelectorAll('[data-nav]').forEach(n=>{
    n.addEventListener('click', (e)=>{
      const href = n.getAttribute('data-nav');
      if(!href) return;
      if(href.startsWith('#/upload') || href.startsWith('#/library') || href.startsWith('#/dashboard') || href.startsWith('#/edit-profile') || href.startsWith('#/settings') || href.startsWith('#/notifications')){
        if(!S.user){ e.preventDefault(); openModal(authModal()); return; }
      }
      location.hash = href;
    });
  });
}
function bindLandingEvents(root){
  root.querySelector('#landing-login')?.addEventListener('click', ()=>openModal(authModal()));
  root.querySelector('#landing-discord')?.addEventListener('click', ()=>{ openModal(authModal()); setTimeout(()=>document.getElementById('discord-login-btn')?.click(), 50); });
  root.querySelectorAll('[data-play]').forEach(n=>n.addEventListener('click', ()=>{
    const t = TRACKS.find(x=>x.id===n.dataset.play);
    if(t) playTrack(t, TRACKS);
  }));
}
function bindTopbarEvents(root){
  const search = root.querySelector('#global-search');
  if(search){
    search.addEventListener('input', e=>{ S.searchQuery = e.target.value; });
    search.addEventListener('keydown', e=>{ if(e.key==='Enter'){ location.hash='#/search'; renderAll(); document.getElementById('global-search')?.focus(); } });
    search.addEventListener('focus', ()=>{ if(location.hash!=='#/search'){} });
  }
  root.querySelector('#topbar-login')?.addEventListener('click', ()=>openModal(authModal()));
}

function bindViewEvents(root){
  // play buttons (cards, art wraps, big art)
  root.querySelectorAll('[data-play]').forEach(n=>{
    n.addEventListener('click', (e)=>{
      e.stopPropagation();
      const t = TRACKS.find(x=>x.id===n.dataset.play);
      if(!t) return;
      if(S.currentTrack && S.currentTrack.id===t.id){ togglePlay(); return; }
      // build a sensible queue: same list currently displayed if possible, else all tracks
      playTrack(t, TRACKS);
    });
  });
  root.querySelectorAll('[data-like]').forEach(n=>n.addEventListener('click', e=>{ e.stopPropagation(); const t=TRACKS.find(x=>x.id===n.dataset.like); toggleLike(t); renderAll(); }));
  root.querySelectorAll('[data-repost]').forEach(n=>n.addEventListener('click', e=>{ e.stopPropagation(); const t=TRACKS.find(x=>x.id===n.dataset.repost); toggleRepost(t); renderAll(); }));
  root.querySelectorAll('[data-addpl]').forEach(n=>n.addEventListener('click', e=>{ e.stopPropagation(); const t=TRACKS.find(x=>x.id===n.dataset.addpl); openModal(addToPlaylistModal(t)); }));
  root.querySelectorAll('[data-share]').forEach(n=>n.addEventListener('click', e=>{ e.stopPropagation(); const t=TRACKS.find(x=>x.id===n.dataset.share) || PLAYLISTS.find(p=>p.id===n.dataset.share) || {id:n.dataset.share}; openModal(shareModal(n.dataset.sharekind||'track', t)); }));
  root.querySelectorAll('[data-report]').forEach(n=>n.addEventListener('click', e=>{ e.stopPropagation(); const [kind,id]=n.dataset.report.split(':'); openModal(reportModal(kind, {id})); }));
  root.querySelectorAll('[data-follow]').forEach(n=>n.addEventListener('click', e=>{ e.stopPropagation(); const u=userById(n.dataset.follow); toggleFollow(u); renderAll(); }));

  // big waveform on track page
  root.querySelectorAll('[data-bigwave]').forEach(wrap=>{
    const t = TRACKS.find(x=>x.id===wrap.dataset.bigwave);
    const canvas = wrap.querySelector('canvas');
    const progress = (S.currentTrack && S.currentTrack.id===t.id) ? S.position/t.duration : 0;
    drawWave(canvas, t.waveSeed, progress);
    wrap.addEventListener('click', e=>{
      const r = wrap.getBoundingClientRect();
      const frac = (e.clientX-r.left)/r.width;
      if(S.currentTrack && S.currentTrack.id===t.id){ seekTo(frac); }
      else { playTrack(t, TRACKS); S.position = frac*t.duration; }
    });
  });

  // profile tabs
  root.querySelectorAll('[data-ptab]').forEach(n=>n.addEventListener('click', ()=>{ S.profileTab=n.dataset.ptab; renderAll(); }));
  // settings nav
  root.querySelectorAll('[data-setsec]').forEach(n=>n.addEventListener('click', ()=>{ S.settingsSection=n.dataset.setsec; renderAll(); }));
  root.querySelectorAll('[data-toggle]').forEach(n=>n.addEventListener('click', ()=>{ n.classList.toggle('on'); }));
  root.querySelector('#delete-account-btn')?.addEventListener('click', ()=>{
    openModal(confirmModal('Delete account', 'This will permanently delete your profile, uploads, and data. This cannot be undone.', 'Delete account', ()=>{ logout(); toast('Account deleted'); }, true));
  });

  // playlist actions
  root.querySelectorAll('[data-playall]').forEach(n=>n.addEventListener('click', ()=>{
    const p = PLAYLISTS.find(x=>x.id===n.dataset.playall) || ALBUMS.find(x=>x.id===n.dataset.playall);
    const list = p.trackIds.map(id=>TRACKS.find(t=>t.id===id)).filter(Boolean);
    if(list.length) playTrack(list[0], list);
  }));
  root.querySelector('[data-shuffleall]')?.addEventListener('click', (e)=>{
    const p = PLAYLISTS.find(x=>x.id===e.currentTarget.dataset.shuffleall);
    let list = p.trackIds.map(id=>TRACKS.find(t=>t.id===id)).filter(Boolean);
    list = list.sort(()=>Math.random()-0.5);
    S.shuffle = true;
    if(list.length) playTrack(list[0], list);
  });
  root.querySelectorAll('[data-likepl]').forEach(n=>n.addEventListener('click', ()=>{
    if(!requireAuth()) return;
    const p = PLAYLISTS.find(x=>x.id===n.dataset.likepl);
    if(!p) return;
    if(p.likedBy.has(S.user.id)) p.likedBy.delete(S.user.id); else p.likedBy.add(S.user.id);
    renderAll();
  }));
  root.querySelectorAll('[data-editpl]').forEach(n=>n.addEventListener('click', ()=>{ toast('Playlist editing: rename, reorder, and cover art can be changed from this panel.'); }));
  root.querySelectorAll('[data-delpl]').forEach(n=>n.addEventListener('click', ()=>{
    const p = PLAYLISTS.find(x=>x.id===n.dataset.delpl);
    openModal(confirmModal('Delete playlist', `Delete "${p.title}"? This can't be undone.`, 'Delete', ()=>{
      PLAYLISTS = PLAYLISTS.filter(x=>x.id!==p.id); toast('Playlist deleted'); location.hash='#/library'; renderAll();
    }, true));
  }));
  root.querySelector('#new-playlist-top')?.addEventListener('click', ()=>openModal(createPlaylistModal()));

  // comments
  root.querySelector('#post-comment')?.addEventListener('click', ()=>{
    const ta = root.querySelector('#new-comment');
    const text = ta.value.trim();
    if(!text) return;
    const parts = parseRoute().parts;
    const t = TRACKS.find(x=>x.id===parts[1]);
    t.comments.push({id:uid('c'), userId:S.user.id, text, timestampSec: S.currentTrack&&S.currentTrack.id===t.id? Math.floor(S.position):null, likes:0, createdAt:Date.now(), replies:[]});
    ta.value='';
    toast('Comment posted');
    renderAll();
  });
  root.querySelectorAll('[data-clike]').forEach(n=>n.addEventListener('click', ()=>{ if(!requireAuth())return; n.closest('.comment-row').style.opacity='.7'; toast('Liked comment'); }));
  root.querySelectorAll('[data-creport]').forEach(n=>n.addEventListener('click', ()=>openModal(reportModal('comment',{id:n.dataset.creport}))));

  // discover genre pills
  root.querySelectorAll('[data-genre]').forEach(n=>n.addEventListener('click', ()=>{
    root.querySelectorAll('[data-genre]').forEach(x=>x.classList.remove('active'));
    n.classList.add('active');
    const g = n.dataset.genre;
    const results = TRACKS.filter(t=>t.genre===g);
    document.getElementById('discover-results').innerHTML = `<div class="section-head"><h2>${esc(g)}</h2></div><div class="grid">${results.map(trackCard).join('') || '<p style="color:var(--text-dim);">No tracks in this genre yet.</p>'}</div>`;
    bindViewEvents(document.getElementById('discover-results'));
  }));

  // edit profile
  root.querySelector('#ep-save')?.addEventListener('click', ()=>{
    const u = S.user;
    u.display = root.querySelector('#ep-display').value.trim() || u.display;
    u.username = root.querySelector('#ep-username').value.trim() || u.username;
    u.bio = root.querySelector('#ep-bio').value;
    u.location = root.querySelector('#ep-location').value;
    u.website = root.querySelector('#ep-website').value;
    u.genres = root.querySelector('#ep-genres').value.split(',').map(s=>s.trim()).filter(Boolean);
    u.artists = root.querySelector('#ep-artists').value.split(',').map(s=>s.trim()).filter(Boolean);
    toast('Profile updated');
    location.hash = '#/user/'+u.username;
  });
  root.querySelectorAll('[data-accent]').forEach(n=>n.addEventListener('click', ()=>{ S.user.accent=n.dataset.accent; renderAll(); }));

  // upload flow
  bindUploadEvents(root);

  // dashboard delete track
  root.querySelectorAll('[data-deltrack]').forEach(n=>n.addEventListener('click', ()=>{
    const t = TRACKS.find(x=>x.id===n.dataset.deltrack);
    openModal(confirmModal('Delete track', `Delete "${t.title}"? This can't be undone.`, 'Delete', ()=>{
      TRACKS = TRACKS.filter(x=>x.id!==t.id); toast('Track deleted'); renderAll();
    }, true));
  }));

  // admin
  root.querySelectorAll('[data-resolve]').forEach(n=>n.addEventListener('click', ()=>{ n.closest('tr').remove(); toast('Report dismissed'); }));
  root.querySelectorAll('[data-remove]').forEach(n=>n.addEventListener('click', ()=>{ n.closest('tr').remove(); toast('Content removed'); }));
}

function bindUploadEvents(root){
  const drop = root.querySelector('#upload-drop');
  if(!drop) return;
  const fileInput = root.querySelector('#file-input');
  drop.addEventListener('click', ()=>fileInput.click());
  ['dragover','dragleave','drop'].forEach(evt=>{
    drop.addEventListener(evt, e=>{
      e.preventDefault();
      if(evt==='dragover') drop.classList.add('drag');
      if(evt==='dragleave') drop.classList.remove('drag');
      if(evt==='drop'){ drop.classList.remove('drag'); handleFile(e.dataTransfer.files[0]); }
    });
  });
  fileInput.addEventListener('change', ()=>handleFile(fileInput.files[0]));
  function handleFile(file){
    if(!file) return;
    root.querySelector('#upload-file-name').style.display='block';
    root.querySelector('#upload-file-name').textContent = file.name+' — '+(file.size/1024/1024).toFixed(1)+' MB';
    const bar = root.querySelector('#upload-progress');
    bar.style.display='block';
    const inner = bar.querySelector('div');
    let p=0;
    const iv = setInterval(()=>{
      p += 8+Math.random()*12;
      if(p>=100){ p=100; clearInterval(iv); toast('Upload complete — processing waveform'); }
      inner.style.width = p+'%';
    }, 150);
  }
  root.querySelector('#u-submit')?.addEventListener('click', ()=>{
    const title = root.querySelector('#u-title').value.trim();
    if(!title){ toast('Give your track a title first'); return; }
    const t = {
      id:uid('t'), title, ownerId:S.user.id, art:artFor(title+Date.now(),'art'),
      genre: root.querySelector('#u-genre').value, tags: root.querySelector('#u-tags').value.split(',').map(s=>s.trim()).filter(Boolean),
      album: root.querySelector('#u-album').value||null, plays:0, likes:0, likedBy:new Set(), reposts:0, repostedBy:new Set(),
      duration: 150+Math.floor(Math.random()*90), waveSeed: Math.random()*1000,
      description: root.querySelector('#u-desc').value, lyrics: root.querySelector('#u-lyrics').value,
      explicit: root.querySelector('#u-explicit').checked, visibility: root.querySelector('#u-vis').value,
      createdAt: Date.now(), comments:[]
    };
    TRACKS.unshift(t);
    toast('"'+title+'" is live on HiCopK');
    location.hash = '#/track/'+t.id;
  });
}

/* ===================== Init ===================== */
window.addEventListener('hashchange', renderAll);
window.addEventListener('resize', ()=>{ renderPlayerBarProgress(); });
document.addEventListener('DOMContentLoaded', ()=>{
  if(!location.hash) location.hash = '#/landing';
  renderAll();
});
