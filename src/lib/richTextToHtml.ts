// Helper to convert rich text to HTML
export function richTextToHtml(richText: any): string {
  if (!richText) return '';
  if (typeof richText === 'string') return richText;

  // Handle Lexical editor format
  if (richText.root && richText.root.children) {
    let html = '';

    const processNode = (node: any): string => {
      if (node.type === 'heading') {
        const level = node.tag || 'h2';
        let className = 'text-3xl md:text-4xl text-fog-gray pt-8 pb-4';
        if (level === 'h3') {
          className = 'text-2xl md:text-3xl text-fog-gray pt-6 pb-3';
        }
        const content = node.children?.map((child: any) => processNode(child)).join('') || '';
        return `<${level} class="${className}">${content}</${level}>`;
      }

      if (node.type === 'paragraph') {
        const content = node.children?.map((child: any) => processNode(child)).join('') || '';
        return `<p>${content}</p>`;
      }

      if (node.type === 'list') {
        const tag = node.listType === 'bullet' ? 'ul' : 'ol';
        const content = node.children?.map((child: any) => processNode(child)).join('') || '';
        return `<${tag} class="list-disc pl-6 space-y-2 text-smoke-gray">${content}</${tag}>`;
      }

      if (node.type === 'listitem') {
        const content = node.children?.map((child: any) => processNode(child)).join('') || '';
        return `<li>${content}</li>`;
      }

      if (node.type === 'text') {
        let text = node.text || '';
        if (node.format & 1) text = `<strong>${text}</strong>`; // bold
        if (node.format & 2) text = `<em>${text}</em>`; // italic
        return text;
      }

      if (node.type === 'linebreak') {
        return '<br />';
      }

      // Handle other node types with children
      if (node.children) {
        return node.children.map((child: any) => processNode(child)).join('');
      }

      return '';
    };

    richText.root.children.forEach((node: any) => {
      html += processNode(node);
    });

    return html;
  }

  return '';
}
