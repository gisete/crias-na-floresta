interface LegalPageLayoutProps {
  title: string;
  content: string;
}

export default function LegalPageLayout({ title, content }: LegalPageLayoutProps) {
  return (
    <div>
      {/* Simple Hero with Dark Green Background */}
      <section className="bg-mossy-green text-light-beige py-32 md:py-40">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="!text-light-beige text-5xl md:text-6xl">{title}</h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-32 px-6 bg-light-beige">
        <div className="max-w-4xl mx-auto">
          <div
            className="space-y-8 text-base leading-relaxed text-smoke-gray font-light"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
      </section>
    </div>
  );
}
