import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface ProductDescriptionProps {
  description: string;
  maxLines?: number;
  className?: string;
}

export const ProductDescription: React.FC<ProductDescriptionProps> = ({
  description,
  className = "",
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // If description is brief, display directly
  if (!description) return null;

  return (
    <div className={`mb-4 flex flex-col ${className}`}>
      <div
        className={`text-muted-foreground text-sm leading-relaxed transition-all duration-300 ${
          isExpanded
            ? "max-h-48 overflow-y-auto pr-1 thin-scrollbar"
            : "line-clamp-6"
        }`}
      >
        <p className="whitespace-pre-line">{description}</p>
      </div>

      {/* Show more / collapse toggle if description is lengthy */}
      {description.length > 220 && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            setIsExpanded((prev) => !prev);
          }}
          className="mt-1.5 text-xs font-semibold text-red-600 hover:text-red-700 flex items-center gap-1 self-start transition-colors"
        >
          {isExpanded ? (
            <>
              Show less <ChevronUp className="w-3.5 h-3.5" />
            </>
          ) : (
            <>
              Read more <ChevronDown className="w-3.5 h-3.5" />
            </>
          )}
        </button>
      )}
    </div>
  );
};

export default ProductDescription;
