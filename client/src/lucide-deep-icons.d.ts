declare module "lucide-react/dist/esm/icons/*" {
  import type { ComponentType, SVGProps } from "react";

  const Icon: ComponentType<SVGProps<SVGSVGElement> & { size?: string | number; absoluteStrokeWidth?: boolean }>;
  export default Icon;
}
