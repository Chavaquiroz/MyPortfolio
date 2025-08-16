
import { motion } from "framer-motion";

type PromoCardProps = {
  imageUrl: string;
  overline?: string;
  title: string;
  appIconUrl: string;
  appName: string;
  appTagline: string;
  ctaLabel?: string;
  onClick?: () => void;
};

export default function PromoCard({
  imageUrl,
  overline = "YOUR DAY YOUR WAY",
  title,
  appIconUrl,
  appName,
  appTagline,
  ctaLabel = "Get App",
  onClick,
}: PromoCardProps) {
  return (
    <motion.article
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 220, damping: 20 }}
      className="
    relative overflow-hidden rounded-2xl
    w-[300px] max-w-full aspect-[4/3]   // ← más chico
    shadow-[0_10px_30px_rgba(0,0,0,0.35)]
    bg-neutral-900
      "
      role="region"
      aria-label={title}
    >
      {/* Imagen de fondo */}
      <img
        src={imageUrl}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
      />

      {/* Overlay para legibilidad (oscuro + sutil color) */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-t from-black/70 via-black/20 to-black/0
        "
        aria-hidden
      />

      {/* Texto superior izquierda */}
      <div className="absolute left-4 right-4 top-4 text-white drop-shadow-sm">
        <p className="text-[11px] tracking-[0.12em] font-semibold opacity-80">
          {overline}
        </p>
        <h2 className="mt-1 text-2xl/tight font-semibold max-w-[90%]">
          {title}
        </h2>
      </div>

      {/* Barra “pill” inferior */}
      <div
        className="
          absolute left-4 right-4 bottom-4
          rounded-2xl p-2 pl-3 pr-2
          bg-black/50 backdrop-blur-md
          border border-white/10
          flex items-center justify-between gap-3
        "
      >
        {/* App info */}
        <div className="flex items-center gap-3 min-w-0">
          <img
            src={appIconUrl}
            alt=""
            className="h-2 w-2 rounded-full ring-1 ring-white/20 object-cover"
            loading="lazy"
          />
          <div className="min-w-0">
            <p className="text-white text-sm font-medium truncate">
              {appName}
            </p>
            <p className="text-white/80 text-xs truncate">{appTagline}</p>
          </div>
        </div>

        {/* CTA */}
        <button
          onClick={onClick}
          className="
            shrink-0 rounded-xl px-4 py-2
            bg-white text-neutral-900 text-sm font-semibold
            hover:bg-white/90 active:scale-[0.98]
            transition
          "
          aria-label={ctaLabel}
        >
          {ctaLabel}
        </button>
      </div>
    </motion.article>
  );
}
