export function LuxeTitle({ children, className = "" }) {
  return (
    <h1 className={`text-3xl md:text-4xl font-extrabold tracking-tight ${className}`}>
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-black via-zinc-700 to-[#B87333]">
        {children}
      </span>
    </h1>
  );
}

export function LuxeSub({ children, className = "" }) {
  return (
    <p className={`text-zinc-600 leading-relaxed ${className}`}>{children}</p>
  );
}

export function LuxeButton({ href = "#", onClick, variant = "copper", children, className="" }) {
  const base = "inline-flex items-center justify-center rounded-2xl px-5 py-3 font-semibold shadow-sm hover:shadow-md transition disabled:opacity-60 disabled:cursor-not-allowed";
  const styles = {
    copper: "text-white",
    gold: "text-black",
    ghost: "border border-zinc-300 text-zinc-800 bg-white/70 backdrop-blur",
  };
  const style = styles[variant] || styles.copper;
  const styleAttr =
    variant === "copper"
      ? { style: { backgroundColor: "#B87333" } }
      : variant === "gold"
      ? { style: { background: "linear-gradient(90deg,#C9A227,#F3D37C,#C9A227)" } }
      : {};
  const content = (
    <button onClick={onClick} className={`${base} ${style} ${className}`} {...styleAttr}>
      {children}
    </button>
  );
  return href ? (
    <a href={href} className="no-underline">{content}</a>
  ) : content;
}

export function LuxeCard({ children, className = "" }) {
  return (
    <div className={`rounded-3xl border border-zinc-200 bg-white/70 backdrop-blur p-6 md:p-8 shadow-sm ${className}`}>
      {children}
    </div>
  );
}
