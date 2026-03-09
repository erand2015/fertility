import { cn } from "@/lib/utils";

export default function RetroGrid({ className }: { className?: string }) {
  return (
    <div className={cn("pointer-events-none absolute h-full w-full overflow-hidden opacity-50 [perspective:200px]", className)}>
      {/* Grid-i me ngjyrë Royal Blue (rgba 30, 58, 138) */}
      <div className="absolute inset-0 [transform:rotateX(65deg)]">
        <div className={cn("animate-grid [background-repeat:repeat] [background-size:60px_60px] [height:300%] [inset:0%_-50%] [width:200%] [background-image:linear-gradient(to_right,rgba(30,58,138,0.1)_1px,transparent_0),linear-gradient(to_bottom,rgba(30,58,138,0.1)_1px,transparent_0)]")} />
      </div>
      
      {/* Gradienti që e bën të duket super i pastër (White) */}
      <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent to-90%" />
    </div>
  );
}