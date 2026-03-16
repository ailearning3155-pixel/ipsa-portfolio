export default function Avatar() {
  return (
    <div className="relative flex h-64 w-64 items-end justify-center rounded-[40%] border border-white/15 bg-zinc-900/70">
      <div className="mb-8 h-36 w-20 rounded-t-[2rem] bg-zinc-200/90" />
      <span className="absolute -top-8 text-xs uppercase tracking-[0.3em] text-white/70">Avatar Reveal</span>
    </div>
  );
}
