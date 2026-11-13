interface IconProps {
  className?: string;
  path: string;
}

export default function Icon({ className, path }: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" fill="currentColor" className={className}>
      <path d={path} />
    </svg>
  );
}
