import type {
  ServiceSectionContract,
  ServiceTextItem,
} from "@/core/content/contracts";

import styles from "./ServicePage.module.css";

type ServiceSectionRendererProps = {
  section: ServiceSectionContract;
  index: number;
};

function SectionHeader({
  section,
  index,
}: {
  section: ServiceSectionContract;
  index: number;
}) {
  return (
    <header className={styles.sectionHeader}>
      <div className={styles.sectionIdentity}>
        <span className={styles.sectionNumber}>
          {String(index + 1).padStart(2, "0")}
        </span>
        <p className={styles.sectionEyebrow}>
          {section.eyebrow ?? section.kind.replaceAll("-", " ")}
        </p>
        <span className={styles.sectionRule} aria-hidden="true" />
      </div>

      <div className={styles.sectionHeading}>
        <h2>{section.title}</h2>
        {section.summary ? <p>{section.summary}</p> : null}
      </div>
    </header>
  );
}

function StandardItems({
  items,
}: {
  items: readonly ServiceTextItem[];
}) {
  return (
    <div className={styles.editorialGrid}>
      {items.map((item, index) => (
        <article key={item.id}>
          <span>{String(index + 1).padStart(2, "0")}</span>
          <h3>{item.title}</h3>
          {item.description ? <p>{item.description}</p> : null}
        </article>
      ))}
    </div>
  );
}

function RelevanceLayout({
  items,
}: {
  items: readonly ServiceTextItem[];
}) {
  return (
    <div className={styles.relevanceLayout}>
      <div className={styles.relevancePrimary}>
        {items.slice(0, -1).map((item, index) => (
          <article key={item.id}>
            <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
            <div>
              <h3>{item.title}</h3>
              {item.description ? <p>{item.description}</p> : null}
            </div>
          </article>
        ))}
      </div>

      {items.length > 0 ? (
        <aside className={styles.relevanceAlternative}>
          <p>Consider another route when</p>
          <h3>{items.at(-1)?.title}</h3>
          {items.at(-1)?.description ? (
            <p>{items.at(-1)?.description}</p>
          ) : null}
        </aside>
      ) : null}
    </div>
  );
}

function DocumentsLayout({
  items,
}: {
  items: readonly ServiceTextItem[];
}) {
  return (
    <div className={styles.documentChecklist}>
      {items.map((item, index) => (
        <article key={item.id}>
          <span className={styles.documentNumber}>
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className={styles.checkBox} aria-hidden="true" />
          <div>
            <h3>{item.title}</h3>
            {item.description ? <p>{item.description}</p> : null}
          </div>
        </article>
      ))}
    </div>
  );
}

function ProcessLayout({
  items,
}: {
  items: readonly ServiceTextItem[];
}) {
  return (
    <ol className={styles.processTimeline}>
      {items.map((item, index) => (
        <li key={item.id}>
          <span className={styles.processNumber}>
            {String(index + 1).padStart(2, "0")}
          </span>
          <div>
            <h3>{item.title.replace(/^\d+\.\s*/, "")}</h3>
            {item.description ? <p>{item.description}</p> : null}
          </div>
        </li>
      ))}
    </ol>
  );
}

function DecisionFlow({
  items,
}: {
  items: readonly ServiceTextItem[];
}) {
  return (
    <div className={styles.decisionFlow}>
      {items.map((item, index) => (
        <article key={item.id}>
          <span className={styles.decisionNode}>
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3>{item.title}</h3>
          {item.description ? <p>{item.description}</p> : null}
        </article>
      ))}
    </div>
  );
}

function ComparisonLayout({
  items,
}: {
  items: readonly ServiceTextItem[];
}) {
  return (
    <div className={styles.comparisonTable}>
      <div className={styles.comparisonHead}>
        <span>Structure</span>
        <span>Best considered when</span>
      </div>

      {items.map((item) => (
        <div className={styles.comparisonRow} key={item.id}>
          <strong>{item.title}</strong>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
}

function FaqLayout({
  section,
}: {
  section: ServiceSectionContract;
}) {
  return (
    <div className={styles.faqList}>
      {section.faqs?.map((faq, index) => (
        <details key={faq.id}>
          <summary>
            <span className={styles.faqNumber}>
              {String(index + 1).padStart(2, "0")}
            </span>
            <span>{faq.question}</span>
            <span aria-hidden="true">+</span>
          </summary>
          <p>{faq.answer}</p>
        </details>
      ))}
    </div>
  );
}

export function ServiceSectionRenderer({
  section,
  index,
}: ServiceSectionRendererProps) {
  const items = section.items ?? [];

  return (
    <section
      className={styles.serviceSection}
      data-kind={section.kind}
      data-theme={section.theme ?? (index % 2 ? "soft" : "light")}
      id={section.id}
    >
      <div className={styles.sectionInner}>
        <SectionHeader section={section} index={index} />

        {section.body ? (
          <p className={styles.sectionBody}>{section.body}</p>
        ) : null}

        {section.kind === "relevance-check" && items.length ? (
          <RelevanceLayout items={items} />
        ) : null}

        {section.kind === "documents" && items.length ? (
          <DocumentsLayout items={items} />
        ) : null}

        {section.kind === "process" && items.length ? (
          <ProcessLayout items={items} />
        ) : null}

        {section.kind === "related-decisions" && items.length ? (
          <DecisionFlow items={items} />
        ) : null}

        {section.kind === "business-lens" && items.length ? (
          <ComparisonLayout items={items} />
        ) : null}

        {section.kind === "faq" && section.faqs?.length ? (
          <FaqLayout section={section} />
        ) : null}

        {![
          "relevance-check",
          "documents",
          "process",
          "related-decisions",
          "business-lens",
          "faq",
        ].includes(section.kind) && items.length ? (
          <StandardItems items={items} />
        ) : null}
      </div>
    </section>
  );
}
