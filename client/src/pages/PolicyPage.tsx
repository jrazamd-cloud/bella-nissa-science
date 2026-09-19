import { useEffect } from "react";
import { policies, type PolicyBlock } from "../policies";

function Block({ block }: { block: PolicyBlock }) {
  if (block.kind === "h2") return <h2>{block.text}</h2>;
  if (block.kind === "p") return <p>{block.text}</p>;
  if (block.kind === "ul")
    return (
      <ul>
        {block.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  return (
    <p className="policy-page__lines">
      {block.items.map((item, index) => (
        <span key={item}>
          {item}
          {index < block.items.length - 1 ? <br /> : null}
        </span>
      ))}
    </p>
  );
}

export default function PolicyPage({ route }: { route: string }) {
  const doc = policies[route];

  useEffect(() => {
    const previousTitle = document.title;
    if (doc) document.title = `${doc.title} | Bella Nissa Science`;
    return () => {
      document.title = previousTitle;
    };
  }, [doc]);

  if (!doc) {
    return (
      <main className="policy-page" aria-labelledby="policy-title">
        <h1 id="policy-title">Not found</h1>
        <p>This page is not available.</p>
        <a className="brand-link brand-link--on-light" href="/">
          Return home
        </a>
      </main>
    );
  }

  return (
    <main className="policy-page" aria-labelledby="policy-title">
      <article className="policy-page__inner">
        <a className="skip-link" href="#policy-title">
          Skip to content
        </a>
        <h1 id="policy-title">{doc.title}</h1>
        {doc.intro ? <p className="policy-page__meta">{doc.intro}</p> : null}
        {doc.blocks.map((block, index) => (
          <Block block={block} key={index} />
        ))}
        <a className="brand-link brand-link--on-light policy-page__home" href="/">
          Return home
        </a>
      </article>
    </main>
  );
}
