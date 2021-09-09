import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import { ReactElement, cloneElement } from "react";

interface ActiveLinkProps extends LinkProps {
  children: ReactElement;
  activeClassName: string;
}

export function ActiveLink({
  children,
  activeClassName,
  ...res
}: ActiveLinkProps) {

  const { asPath } = useRouter();
  const className = asPath === res.href ? activeClassName : "";

  return (
    <Link {...res}>
      {cloneElement(children, {
        className,
      })}
    </Link>
  );
}
