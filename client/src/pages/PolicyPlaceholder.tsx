import { useEffect } from "react";

export default function PolicyPlaceholder({ title }: { title: string }) {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = `${title} | Bella Nissa Science`;
    return () => { document.title = previousTitle; };
  }, [title]);

  return (
    <main className="policy-placeholder" aria-labelledby="policy-placeholder-title">
      <h1 id="policy-placeholder-title">{title}</h1>
      <p>This policy is being prepared.</p>
      <a className="brand-link brand-link--on-light" href="/">Return home</a>
    </main>
  );
}
