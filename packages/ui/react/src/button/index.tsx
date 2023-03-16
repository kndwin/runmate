import { cva, type VariantProps } from "cva";

const button = cva("rounded", {
  variants: {
    intent: {
      primary: [
        "bg-blue-600",
        "text-white",
        "border-transparent",
        "hover:bg-blue-600",
      ],
      secondary: [
        "bg-white",
        "text-gray-800",
        "border-gray-400",
        "hover:bg-gray-100",
      ],
    },
    size: {
      small: ["text-sm", "py-1", "px-2"],
      medium: ["text-base", "py-2", "px-4"],
    },
  },
  compoundVariants: [{ intent: "primary", size: "medium", class: "uppercase" }],
  defaultVariants: {
    intent: "primary",
    size: "medium",
  },
});

export const Button = (
  props: React.ButtonHTMLAttributes<HTMLButtonElement> &
    VariantProps<typeof button>,
) => {
  const { className, intent, size, ...rest } = props;

  return <button className={button({ intent, size, className })} {...rest} />;
};
