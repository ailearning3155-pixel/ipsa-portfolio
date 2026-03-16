const faces = ['About', 'Experience', 'Skills', 'Contact'];

export default function NavigationCube({ onSelect }) {
  return (
    <div className="grid grid-cols-2 gap-3">
      {faces.map((face) => (
        <button
          key={face}
          onClick={() => onSelect(face.toLowerCase())}
          className="rounded-lg border border-cyanGlow/40 bg-white/5 px-4 py-3 text-xs uppercase tracking-[0.2em] text-white transition hover:bg-cyanGlow/20"
        >
          {face}
        </button>
      ))}
    </div>
  );
}
