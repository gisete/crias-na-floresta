interface LegalPageLayoutProps {
  title: string;
  content: string;
}

export default function LegalPageLayout({ title, content }: LegalPageLayoutProps) {
  return (
    <div>
      {/* Simple Hero with Dark Green Background */}
      <section className="bg-mossy-green text-light-beige py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-6 text-center md:text-center flex items-end md:items-center justify-center min-h-[200px] md:min-h-0">
          <h1 className="!text-light-beige text-5xl md:text-6xl">{title}</h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="pt-16 pb-16 md:py-24 px-6 bg-light-beige">
        <div className="max-w-4xl mx-auto">
          <div
            className="space-y-6 md:space-y-8 text-base leading-relaxed text-smoke-gray font-light"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
      </section>
    </div>
  );
}
