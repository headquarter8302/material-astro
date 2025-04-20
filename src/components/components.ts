import type { HelperTypes } from "../helpers";

export interface ComponentProps {
  helpers?: HelperTypes;
  class?: string;
}

export function getDefaultProps<T extends ComponentProps>(props: T): T {
  return {
    helpers: props.helpers ?? "",
    class: props.class ?? "",
    ...props,
  };
}