/**
 * Formats raw blog content string into HTML.
 * Detects headings, lists (bulleted and numbered), and normal paragraphs.
 */
export function formatBlogContent(content: string): string {
  if (!content) return "";

  // If the content is already HTML, return it as-is
  const hasHtml = /<[a-z][\s\S]*>/i.test(content);
  if (hasHtml) {
    return content;
  }

  // Split content by double newlines to process paragraph/heading/list blocks
  const blocks = content.split(/\n\s*\n/);
  const formattedBlocks = blocks.map((block) => {
    const trimmedBlock = block.trim();
    if (!trimmedBlock) return "";

    const lines = trimmedBlock.split("\n");
    let resultHtml = "";
    let inList = false;
    let listType: "ul" | "ol" | null = null;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      if (!line) continue;

      const isBullet = /^[●•\-\*]/u.test(line);
      const isNumbered = /^\d+\.\s+/.test(line);

      if (isBullet) {
        if (!inList || listType !== "ul") {
          if (inList) {
            resultHtml += listType === "ol" ? "</ol>\n" : "</ul>\n";
          }
          resultHtml += `<ul class="list-disc pl-6 my-4 space-y-2">\n`;
          inList = true;
          listType = "ul";
        }
        const cleanText = line.replace(/^[●•\-\*]\s*/u, "");
        resultHtml += `<li class="my-1 text-muted-foreground leading-relaxed">${cleanText}</li>\n`;
      } else if (isNumbered) {
        if (lines.length === 1) {
          resultHtml += `<h3 class="text-xl font-bold font-display mt-8 mb-4 text-foreground">${line}</h3>\n`;
        } else {
          if (!inList || listType !== "ol") {
            if (inList) {
              resultHtml += listType === "ol" ? "</ol>\n" : "</ul>\n";
            }
            resultHtml += `<ol class="list-decimal pl-6 my-4 space-y-2">\n`;
            inList = true;
            listType = "ol";
          }
          const cleanText = line.replace(/^\d+\.\s*/, "");
          resultHtml += `<li class="my-1 text-muted-foreground leading-relaxed">${cleanText}</li>\n`;
        }
      } else {
        if (inList) {
          resultHtml += listType === "ol" ? "</ol>\n" : "</ul>\n";
          inList = false;
          listType = null;
        }

        // Check if it looks like a heading
        if (lines.length === 1 && line.length < 80 && !line.endsWith(".") && !line.endsWith("?") && !line.endsWith("!") && !line.includes(": ")) {
          resultHtml += `<h4 class="text-lg font-semibold font-display mt-8 mb-4 text-foreground">${line}</h4>\n`;
        } else {
          resultHtml += `<p class="mb-4 leading-relaxed text-muted-foreground">${line}</p>\n`;
        }
      }
    }

    if (inList) {
      resultHtml += listType === "ol" ? "</ol>\n" : "</ul>\n";
    }

    return resultHtml;
  });

  return formattedBlocks.filter(Boolean).join("\n");
}
