import { FC, JSX } from "react";
import { MdCheck } from "react-icons/md";

/**
 * IconDisplay component renders an icon passed as a prop or a default icon if none is provided.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {React.ComponentType<React.SVGProps<SVGSVGElement>>} props.Icon - The icon component to render.
 * @returns {JSX.Element} The rendered icon component.
 */
export const IconDisplay: FC<{
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}> = ({
  Icon,
}: {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}): JSX.Element => {
  return (
    <div>
      {/* Render the icon */}
      {Icon ? (
        <Icon className="text-4xl text-accent-5 mx-auto my-1" />
      ) : (
        <MdCheck className="text-5xl md:text-6xl my-1" />
      )}
    </div>
  );
};
