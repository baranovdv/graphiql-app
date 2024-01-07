import { useTokenExpire } from '../../firebase';

export default function FireBase({
  children,
}: {
  children: JSX.Element;
}): JSX.Element {
  useTokenExpire();
  return children;
}
