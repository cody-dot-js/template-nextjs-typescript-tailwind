import { Props, baseProps } from "./Icon";
import cx from "classnames";

export const Check24 = ({ className, ...rest }: Props) => (
  <svg
    {...baseProps}
    {...rest}
    className={cx(baseProps.className, className)}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 13l4 4L19 7"
    />
  </svg>
);

export const Check20 = ({ className, ...rest }: Props) => (
  <svg
    {...baseProps}
    {...rest}
    className={cx(baseProps.className, className)}
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
      clipRule="evenodd"
    />
  </svg>
);
